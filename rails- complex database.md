# Rails- complex databases

Previous days notes:

[Rails: sqlite3](https://github.com/lucyod10/notes/blob/master/rails-sqlite3.md)

[Rails: postgres](https://github.com/lucyod10/notes/blob/master/rails-postgres.md)

### Setup for postgres

install postgresql and install the gem pg

**add to your path**

open path in atom `atom ~/.bash_profile`

`export PATH=$PATH:/Applications/Postgres.app/Contents/Versions/latest/bin`

### Create project

if you have restarted your computer, or can't see the elephant in the top bar, start postgresql by opening the program (command+space "postgres")

`rails new name_of_project --skip-git -T -d postgresql`

`cd name_of_project`

### Create database

create your database

`rails db:create`

#### Create model and table in one line

console:

```rb
 rails generate model Song title:text artist_id:integer album_id:integer
 ```

This creates the migration, and also the models in the project. It automatically creates the timestamps an id columns.

This can be found in `db > migrate > 201978394.....` and `app > models > song.rb`

You can check the tables you're making by looking in `db > schema.rb`

<!--
create your table that you want to use, called create_planets
`touch db/create_planets.sql`

*to check database, `rails db` then type `\d`*

create your table structure

```
rails generate migration create_artists
```

this will put in a migration into the db folder. A migration is a chapter in the story of your database (i.e. a change)

Go to the file in atom (*db > migrate > 201929374..._create_artists*)

insert your columns `t.text :name`. (*Automatically adds an id column*)

at the end, add `t.timestamps` which adds two columns: `created_at`, `updated_at` -->

#### Migrate database

When you're ready, save the file and in the command line `rails db:migrate`

*repeat steps from create database to here for every table you want i.e. song, album, user, genre etc*

##### Show database structure in model

install a gem for this. `gem install annotate` (this is global, not project specific)

run `annotate` in command line in project folder.
This will find the `app > models > planet.db` file and comment the database structure into it.

#### Delete database

If you made your table wrong, and it doesn't have too much data in it, you can just delete the database, then recreate it and re populate it (make your changes to create_planets.sql first):
```rb
rails db:drop
rails db:create
rails db:migrate
rails db:seed
```

or to go back to beginning of the migrations (i.e. before you migrated the first table), then re-migrate with the fixed table
```rb
rails db:rollback
rails db:migrate
rails db:seed
```

### Special case: if you have a many to many relationship.

e.g. many songs can be in many mixtapes, not a one to many relationship.

Make a join table, called `mixtapes_songs`. Name it alphabetically, with snake case, and pluralise words. Naming matters.

You are only generating a migration for this. Not a model like above.

```rb
rails generate migration create_mixtapes_songs mixtape_id:integer song_id:integer
```

in the file that was created in `db > migrate`

add in the line **before** `do` in the third line

```rb
, :id => false
```

THEN in console

```rb
rails db:migrate
```

*if you migrate before adding in the id false step, you have to rollback and redo*

### Explain associations to rails

in `app > models > specific table`

add in the relationships:

##### one to many

```rb
belongs_to :genre, :optional => true
```

and the one it belongs to has:

```rb
has_many :songs
```

##### many to many

both have:

``` rb
has_and_belongs_to_many :genres
```

<!-- ### Use database

Create model for rails to use, by going to `app>models` new file `artist.rb`

In order to be able to use the table, in this file add:
```
class Planet < ActiveRecord::Base
end
``` -->

### Check it all worked

To install pry for checking:

in `GemFile` in home directory of project, add inside the group Development (line 37 - 45)
add `gem 'pry-rails'`
this makes it so that it uses pry instead of irb

To download this gem and use it, run `bundle install` in the console.

<!-- **To check the table**

in console:

`rails db`

`\d` you will see the artists table as well as a bunch of others

`\d artists` gives you a more detailed view of the table

**To check the table in rails**

in console:

`rails console`

`Artist.new`

should return all the table columns as nil. e.g.

`#<Artist:0x00007ffe84e86248 id: nil, name: nil, nationality: nil, dob: nil, period: nil, image: nil, created_at: nil, updated_at: nil>`

**annotate**

to populate the table columns in the db, in console run `annotate` -->

### Seed data

in `db > seeds.rb` add in your seed data, e.g.:
``` rb
User.destroy_all
puts "Creating Users"
u1 = User.create :email => "craigsy@ga.com"
```

add in the associations.

For one to many, use the variables declared in seed data to insert:

``` rb
puts "Associations"
# Albums and songs
l1.songs << s1
```

for many to many associations
``` rb
# Genres and songs
s1.genres << g1 << g2
s2.genres << g5 # you can add only one if you want
s3.genres << g3 << g4 # you can add more than one genre in a song
g6.songs << s4 # can do it backward, as you are updating the many to many table you made earlier
```

in console, run  `rails db:seed`
to populate database

to check: `rails console` then `Planet.all` should return all the new seeded data


### To make connection to database through another one in common

If you have two tables that are not connected, but they are both connected to a table in common, you can make a connection through that common table.

```rb
has_many :genres, :through => :songs
```

To find the genre from an artist. There is no connection between them, but they both have songs in common, so we can just type the following

```rb
a.genre
```
-------
## Fuzzy Matching

```rb
command + P
```

then search any letters matching a file, in order.

------
## CRUDDY CRUD

### Routes

in `config > routes.rb`
add in routes

``` rb
resources :artists
```

*exceptions*

```rb
# all except the destroy files
resources :artists, :except => [:destroy]
# only the new and create files
resources :artists, :except => [:new, :create]
```

you can see what this does by typing in the console: `rails routes`

```rb
Prefix Verb   URI Pattern                 Controller#Action
artists GET    /artists(.:format)          artists#index
       POST   /artists(.:format)          artists#create
new_artist GET    /artists/new(.:format)      artists#new
edit_artist GET    /artists/:id/edit(.:format) artists#edit
artist GET    /artists/:id(.:format)      artists#show
       PATCH  /artists/:id(.:format)      artists#update
       PUT    /artists/:id(.:format)      artists#update
       DELETE /artists/:id(.:format)      artists#destroy
```


`annotate -r` annotates the routes file, so you can see this.

### Views & Controllers

To automatically generate all the controllers and views: (only the ones who have views)

```rb
rails generate controller Users new
```

You will have to write the other actions yourself- the ones with no views i.e. delete.

Delete the routes that were auto generated in the routes file by this command.


in controller, define class and methods
```rb
class PlanetsController < ApplicationController
  def index
    @planets = Planet.all
  end
end
```

in views, edit HTML to show what you want.

### Start server

start the server to test the links.

```rb
rails server
```

### Passwords!

Need to encrypt. Use bcrypt. Ruby is pretty good with it.

Naming matters!

```rb
rails generate migration add_password_digest_to_users password_digest:string
```

```rb
rails db:migrate
```

```rb
annotate
```

Uncomment out line 24 in `GemFile`
```rb
gem 'bcrypt', '~> 3.1.7'
```
in console, apply that change
```rb
bundle
```

Tell rails that users is using bcrypt. In `app> models> user.rb`
add the line

```rb
has_secure_password
```


You can then check that in `ruby console`

```rb
u = User.create :email => "wendy@ga.com", :password => "chicken"
```

You can see that the password is encrypted.

Add it to the html page, adding in a password confirmation so they type the pw correctly.

```rb
<%= f.label :password %>
<%= f.password_field :password %>

<%= f.label :password_confirmation %>
<%= f.password_field :password_confirmation %>
```

#### Validate account before it gets saved.

in the `user_controller`, create the paths to check the password. This is contingent on the above steps.

```rb
def create
  @user = User.new user_params # set up the user, but dont save
  # user.save returns true if its valid, otherwise returns false. This helps for errors
  if @user.save
    redirect_to root_path
  else
    render :new # do this instead of redirect, so that the form doesnt clear.
  end
end

private
def user_params
  params.require(:user).permit(:email, :password, :password_confirmation)
end
```

If someone enters an invalid form, then it will re render the page, with the incorrect field in a new div with the class `field_with_errors` for you to style.

Also, you can access the error messages in the new form page:

```
<% if @user.errors.any? %>
<ol>
  <% @user.errors.full_messages.each do |message| %>
    <li><%= message %></li>
  <% end %>
</ol>
<% end %>
```

Then to validate the email address, in the user model:
```rb
# Validations - see the rails guide
# this will check the email field to make sure it has been entered, and it doesnt already exist in the database.
validates :email, :presence => true, :uniqueness => true

```

*note: you have changed the rules of entering users into the database, so you need to change your seed data to make it a valid entry, or it wont add those users cause they dont have passwords*

to seed data, add a password:
```rb
u2 = User.create :email => 'jonesy@ga.co', :password => "chicken"
```

### Login

in routes, add the paths for login:

```rb
get "/login" => "session#new" # find the session of that browser. unique to each person.
post "/login" => "session#create"
delete "/login" => "session#destroy"
```

in console, generate the new pages and controllers:
```
rails generate controller Session new
```

in `app>views>session>new.html.erb` make the form:

```
<h1>New User</h1>

<% if @user.errors.any? %>
<ol>
  <% @user.errors.full_messages.each do |message| %>
    <li><%= message %></li>
  <% end %>
</ol>
<% end %>

<%= form_for @user do |f| %>
<%= f.label :email %>
<%= f.email_field :email %>

<%= f.label :password %>
<%= f.password_field :password %>

<%= f.label :password_confirmation %>
<%= f.password_field :password_confirmation %>

<%= f.submit "Sign Up!" %>
<% end %>
```

in the controller, add in the logic:

```rb
def create
    @user = User.new user_params # set up the user, but dont save
    # user.save returns true if its valid, otherwise returns false. This helps for errors
    if @user.save
      session[:user_id] = @user.id
      redirect_to root_path
    else
      render :new # do this instead of redirect, so that the form doesnt clear.
    end
  end

  private
  def user_params
    params.require(:user).permit(:email, :password, :password_confirmation)
  end
```

If you want to find the user_id on every single page, you add in the following logic to ApplicationContoller- as every controller you have made inherits from that.

```rb
before_action :fetch_user # this means before you do anything, run fetch_user

private
# set up an @current_user instance variable if we can find a user_id in this session.
def fetch_user
  @current_user = User.find_by :id => session[:user_id] if session[:user_id].present?
  session[:user_id] = nil unless @current_user.present?
end
```

To handle this on your page, we made an addition to the application.html.erb
```
<%= link_to "Home", root_path %>
<% if @current_user.present? %>
  <%= link_to "logout #{@current_user.email}", login_path, :method => 'delete' %>
<% else %>
  <%= link_to "Sign up", new_user_path %>
  <%= link_to "sign in", login_path %>
<% end %>
```

For this delete method to work, add the functionality in the session controller
```rb
def destroy
  session[:user_id] = nil
  redirect_to login_path
end
```

To handle automatically logging in after you sign up, add in the line in your users controller create method, once its ben validated: (line 10)
```rb
session[:user_id] = @user.id
```
#### When sign in fails, give vague error:

in your session controller, in the action create, in the else statement, add the line: (line 18)
```
flash[:error_message] = "Invalid email or password" # will only show once, and then disappear
```

and to access this flash variable, in  `app>view>session>new`

```
<p>
  <%= flash[:error_message] %>
</p>
```

-----
### Create a form for both edit and new

in the artist views folder, create a file called `_form.html.erb`

in it, put the code for a form. E.g.

```
<%= form_for @artist do |f| %>
  <%= f.label :name, :autofocus => true, :required => true %>
  <%= f.text_field :name %>

  <%= f.label :nationality %>
  <%= f.text_field :nationality %>

  <%= f.label :dob, "Date of Birth" %>
  <%= f.text_field :dob, :placeholder => "YYYY-MM-DD" %>

  <%= f.label :period %>
  <%= f.text_field :period %>

  <%= f.label :image %>
  <%= f.url_field :image %>

  <%= f.submit %>

<% end %>
```

To hook it to a page, render

`<%= render :partial => 'form' %>`

-------

## Day 2

How to create a model, and give it to the current user once they're signed in .

in the routes folder, create route for mixtapes.

`resources :mixtapes, :only => [:new, :create]`

create a mixtapes controller and view

`rails generate controller Mixtapes new`

delete the extra route given to us in the routes file, as we already made the route in the step above.

Add in the path to the navigation.

`<%= link_to "Create Mixtape", new_mixtape_path %>`

create the instance variable for `@mixtape` in its controller, and create the form on the new page.
```
def new
  @mixtape = Mixtape.new
end
```

```
<%= form_for @mixtape do |f| %>
<%= f.label :title %>
<%= f.text_field :title %>

<%= f.submit %>
<% end %>
```

add in a create functionality in the mixtape controller

```
def create
  # create instead of save, as there is no chance for invalid data.
  mixtape = Mixtape.create mixtape_params
  # association with user.
  @current_user.mixtapes << mixtape
  # or you can do the above lines, in one line:
  # @current_user.mixtapes.create mixtape_params
  redirect_to root_path
end

private
def mixtape_params
  params.require(:mixtape).permit(:title)
end
```

To make sure nobody can access parts of the site without being logged in, define this method in the private area of the application controller
```
def check_for_login
  redirect_to login_path unless @current_user.present?
end
```

Then put the following code at the top of any controller you want to apply this to:

```
before_action :check_for_login
```

and you can add in checks if you don't want it to apply to all the actions:

```
before_action :check_for_login, :only =>[:new]
```

## Edit profile

Make route, action and view for the edit profile page.

```rb
rails generate migration add_name_to_users name:text
rails db:migrate
annotate
```

Add in a form to add a name to the user, in the `user>edit` view
```
<%= form_for @user do |f| %>
  <%= f.label :email %>
  <%= f.email_field :email %>

  <%= f.label :name %>
  <%= f.text_field :name %>

  <%= f.submit "Update profile" %>
<% end %>
```

then add the functionality for the update page in the user controller
```rb
def update
  user = User.find params[:id]
  user.update user_params
  redirect_to
end
```

Then add `, :name` to the user_params so that its permitted.

To make it so that you can't edit other people profile, change the route so a little shit cant edit the path, and everyone just goes to the same path which shows themselves

```rb
resources :users, :only => [:new, :create, :update]
get '/users/edit' => "users#edit", :as => :edit_user
```
```rb
def edit
  @user = @current_user
end

def update
  @current_user.update user_params
  redirect_to root_path
end
```

```
<%= link_to "Edit Profile", edit_user_path %>
```


## Admin

Add a new migration to make the admin boolean

```
rails generate migration add_admin_to_users admin:boolean
```
add in the default value false
```
add_column :users, :admin, :boolean, :default => false
```
add_column :users, :admin, :boolean, :default => false

```
rails db:migrate
annotate
```

Then to change people into admin, run it from the command line:
```
rails console
user = User.first
user.admin = true
```

To make sure nobody else can navigate to this page.
```
def check_for_admin
  redirect_to root_path unless @current_user.present? && @current_user.admin?
end
```

```
before_action :check_for_admin, :only => [:index]
```


## Get Javascript working

`aoo>assets>javascript`

add in one called `main.js`

This will be applied to all pages.

**Include jQuery**

stop server

`bundle add jquery-rails`

restart server. This adds it to the `GemFile`

edit the `application.js` to add
```
//= require jquery
```

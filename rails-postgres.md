# Rails- postgres

### Setup

install postgresql and install the gem pg

**add to your path**

open path in atom `atom ~/.bash_profile`

`export PATH=$PATH:/Applications/Postgres.app/Contents/Versions/latest/bin`

### Create project

`rails new name_of_project --skip-git -T -d postgresql`

`cd name_of_project`

### Create database

create your database

`rails db:create`

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

at the end, add `t.timestamps` which adds two columns: `created_at`, `updated_at`

#### Migrate database

When you're ready, save the file and in the command line `rails db:migrate`

#### Delete database

If you made your table wrong, and it doesn't have too much data in it, you can just delete the database, then recreate it and re populate it (make your changes to create_planets.sql first):
```
rails db:drop
rails db:create
rails db:migrate
rails db:seed
```

or to go back to beginning of the migrations (i.e. before you migrated the first table), then re-migrate with the fixed table
```
rails db:rollback
rails db:migrate
rails db:seed
```

### Use database

Create model for rails to use, by going to `app>models` new file `artist.rb`

In order to be able to use the table, in this file add:
```
class Planet < ActiveRecord::Base
end
```

### Check it all worked

in `GemFile` in home directory of project, add inside the group Development (line 37 - 45)
add `gem 'pry-rails'`
this makes it so that it uses pry instead of irb

To download this gem and use it, run `bundle install` in the console.

**To check the table**

`rails db`

`\d` you will see the artists table as well as a bunch of others

`\d artists` gives you a more detailed view of the table

**To check the table in rails**

`rails console`

`Artist.new`

should return all the table columns as nil. e.g.

`#<Artist:0x00007ffe84e86248 id: nil, name: nil, nationality: nil, dob: nil, period: nil, image: nil, created_at: nil, updated_at: nil>`

**annotate**

to populate the table columns in the db, in console run `annotate`

### Seed data

in `db > seeds.rb` add in your seed data, e.g.:
```
Planet.create :name => 'Earth', :orbit => 24, :moons => 1
Planet.create :name => 'Venus', :orbit => 17, :moons => 0
Planet.create :name => 'Mars', :orbit => 33, :moons => 6
```

Then to make sure every time you re-seed the database, you remove all and just add the seed data. Add this at the top of `seeds.rb`
```
Planet.destroy_all
```

in console, run  `rails db:seed`
to populate database

to check: `rails console` then `Planet.all` should return all the new seeded data

### Show database structure in model

install a gem for this. `gem install annotate` (this is global, not project specific)

run `annotate` in command line in project folder.
This will find the `app > models > planet.db` file and comment the database structure into it.

## CRUD

### Routes

in `config > routes.rb`
add in routes

`resources :artists`

this sets up the 7 routes you need to use, for *artists*

you can see what this does by typing in the console: `rails routes`
```
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

`rails generate controller Artists index new edit show`

You will have to write the other actions yourself- the ones with no views i.e. delete.

Delete the routes that were auto generated in the routes file by this command.


in controller, define class and methods
```
class PlanetsController < ApplicationController
  def index
    @planets = Planet.all
  end
end
```

in views, edit HTML to show what you want.

### Start server

start the server to test the links.

`rails server`

### Hack to allow forms

in `application_controller.rb`
```
  skip_before_action :verify_authenticity_token # you only need this for hand written forms
  ```

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

### Hook the rest up

### Migrate a new column

Create a migration with this format:

`rails generate migration add_artist_id_to_works artist_id:integer`

`rails db:migrate`

### To add a column

in the works model

`belongs_to :artist, :optional => true`

in the artist model

`has_many :works`

in ruby console, to add an artist to a work

```
a = Artist.first
w = Work.first
a.works << w
```

#### To show This

In the works show page, add

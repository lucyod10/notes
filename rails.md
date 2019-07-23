# Rails

### Create project

`rails new name_of_project --skip-git -T`

`cd name_of_project`

### Create database

create your database

`rails db:create`

create your table that you want to use, called create_planets
`touch db/create_planets.sql`

open in atom, and create your table structure
```
CREATE TABLE planets (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  image TEXT,
  orbit FLOAT,
  diameter FLOAT,
  mass FLOAT,
  moons INTEGER
);
```

Move into folder, and add in table to database
`cd db`

`sqlite3 development.sqlite3 < create_planets.sql`

#### Delete database

If you made your table wrong, and it doesn't have too much data in it, you can just delete the database, then recreate it and re populate it (make your changes to create_planets.sql first):
```
rails db:drop
rails db:create
sqlite3 development.sqlite3 < create_planets.sql
```

### Use database

Create model for rails to use, by going to `app>models` new file `planet.rb`

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

To check it's installed, in the console run
`rails console`
then check your table:
`Planet.new`
which should return:
`=> #<Planet:0x00007ff466e5ff08 id: nil, name: nil, image: nil, orbit: nil, diameter: nil, mass: nil, moons: nil>`

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
`get "/planets" => 'planets#index'`

### Views

```
touch app/controllers/planets_controller.rb
mkdir app/views/planets
touch app/views/planets/index.html.erb
```

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

### Hook the rest up

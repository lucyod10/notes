# Heroku


Add the following to `config/environments/production.rb`

```
config.assets.digest = true
```

add `gem 'rails_12factor', group: :production` to the `GemFile`

run `bundle`

```
heroku create your_app_name
```

to check it worked:
```
git config --list | grep heroku
```


`git add .`

`git commit -m "comment"`

`git push origin master`

`git push heroku master`

```
heroku run rails db:migrate
heroku run rails db:seed
```

## Debugging

```
heroku logs
```

```
heroku run rails console
```


## If you have used JWT Tokens

When deploying, you need to tell Heroku what the master.key is, because it is gitignored.

Run this in the terminal to set it.

```
heroku config:set RAILS_MASTER_KEY=<your-master-key>
```

with no `<` or `>`

## login

`heroku login`

then log in via browser

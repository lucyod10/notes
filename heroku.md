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

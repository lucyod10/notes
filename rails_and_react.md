# Secret server

# Rails

```
rails new secrets_server -T -d postgresql
```
Generate models, controllers and make a seed file here. Because we're pressed for time, we're gonna scaffold:

*cd into the folder*
```
rails generate scaffold Secret content:text
```

This creates routes, migrations, controllers, views for you.

```
rails db:create
rails db:migrate
rails server
```
You can now visit `localHost:3000/secrets`

and you can see that as json:

`localHost:3000/secrets.json`

# React

*cd into the base folder*

```
create-react-app secrets_client
```

*cd into the folder*

Design your app in terms of components.

Make the components in react.


#### Save Secret function before axios:
```js
// slice because otherwise it makes an editable duplicate of this.state.secrets
const newSecrets = this.state.secrets.slice(0);
// push the content as an object, as we know it will be a list of json objects.
newSecrets.push({ content: content });
this.setState({ secrets: newSecrets });

```

## Axios

```
npm install axios
```

at the top of any file you want to use axios on,
```
import axios from 'axios';
```

create a server url constant to use
```
const SERVER_URL = 'http://localhost:3000/secrets.json';
```

in saveSecret, create a post request to try and save the secrets to the database
```
axios.post(SERVER_URL, { content: content }).then((result) => {
      console.log(result);
    })
```

this will have a CORS error. To enable CORS on your rails project:

in `GemFile`

```
gem 'rack-cors'
```

in console
```
bundle
```

`config>initialisers>` everything in this folder gets run when you restart the server

create a new file called `cors.rb`

```js
# Jacked from the rack-cors Github documentation

Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    # make everyone allowed to make calls
    origins '*'
    # restrict resources, but allow all
    resource '*',
      :headers => :any,
      :methods => %i( get post put patch delete options head ) # array of symbols
  end
end
```

restart the server, so it reads this file.

To fix the error caused by AuthenticityTokens, in

`app>controller>applicationcontroller`

add in:
```js
skip_before_action :verify_authenticity_token # This is required for API
```


## On load, get existing secrets
In react, in the Secrets class, create a new method in the contructor called
`fetchSecrets`

```js
const fetchSecrets = () => {
  axios.get(SERVER_URL).then((results) => {
    console.log(results);
    this.setState({secrets: results.data});
    setTimeout(fetchSecrets, 4000); //this gets the data from the database preiodically.
  })
}

fetchSecrets();

```


# NGROK

once you have a server running on your own machine, NGROK gives you a URL for others to access that.

`npm install -g ngrok`

serve your project, take note of the port.

`ngrok http 3000`

then ngrok gives you the address you can visit under 'forwarding'


# Collaborating in git

add a collaborator
`settings>collaborator`

everyone else clones the project down once they accept the collaborator link.

`git diff` in the command line shows your changes

`git log` if you have edited the same line of code.

### Merge conflict

when you git pull origin master, it will sprinkle through the merge <<<<< and >>>>>>

fix the conflicts

```
git add .
git commit -m ""
git push origin master
```







.

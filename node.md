# Node

Create a `package.json` file in your project. `-y` answers yes to all the questions automatically. To edit later just edit the `package.json` file.

`npm -y init`


To add your own scripts, in the package.json file add under "scripts" your own script.

```
"scripts": {
  "hello": "node 00-hello.js"
},
```


then to run it run `npm run hello`


### search

`npm search color`

will return a list of packages with the word color.

to show you the info

`npm info color`

to open the browser to see docs

`npm docs color`

`npm install colors`

### requiring

in a folder that has node modules `node` will make available all the node modules in a pry type way.

`const colors = require('colors')` includes colors.

you can now use colors:

`console.log("hello".rainbow)`


### Express

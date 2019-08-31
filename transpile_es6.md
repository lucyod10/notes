# Babel

```
npm init -y
```

install babel command line, and babel environment- which gives you some settings for babel.
```
npm install --save-dev babel-cli babel-env
```
add node_modules to the gitignore, so you dont upload it to git. Users can just `npm install` if they clone the repo.

```
echo "node_modules" >> .gitignore
```

in the package.json

inside of scripts

```
"scripts": {
  "build": "babel src -d js",
  "watch": "babel --watch src -d js"
}
```
Build: this will update the files once, before building. While watch watches it through development.
Watch: This copies work from the src folder, and copy the transpiled code into the js folder.

If you have any packages that are es5, add them straight into the js folder.

```
npm run build
```
will transpile src into js.

```
npm run watch
```
will transpile src into js every time you save the file in src.

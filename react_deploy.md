# Deploy to React

https://reactgo.com/deploy-react-app-github-pages/

## deploy on github pages.

Go to your repo, click on "settings"

In 'Github pages' select Master Branch. Copy the link generated

## Dependencies

Go to the `package.json` file, and inset the following line into the first object, after the line `private`, before `dependencies` i.e. on line 5.

```
"homepage":"https://yourusername.github.io/repository-name"
```

paste in your link generated from github pages.

## Install

In terminal, install `gh pages`

```
npm install --save gh-pages
```

## Deploy

In the package.json file, paste the following into the scripts object at the beginning.

```
"scripts":{
 "predeploy": "npm run build",
 "deploy": "gh-pages -d build",
}
```

Then in terminal run `npm run deploy`

## Set up Github pages

Go back to github pages, and set the branch to gh-pages (where it previously said master.)

## From here on

Every time you want to deploy again, just run `npm run deploy`

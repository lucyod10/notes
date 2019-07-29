# Bootstrap

Where you add jquery rails in the GemFile- add in `gem 'bootstrap'`

at command line
```
bundle
rails server
```

in the stylesheets, create a new stylesheet that will be loaded first. It needs to be loaded first, so that the application.css file when it loads tree, will load this file first, which is a scss file. Bootstrap needs this.
name it the first thing alphabetically, thus it will load first:
`_bootstrap-includes.scss`

in this, put one line:
```
@import "bootstrap";
```

Require jquery in application.js
```
//= require jquery
//= require popper
//= require bootstrap
```

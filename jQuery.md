# jQuery

## To Install into project

```
curl https://code.jquery.com/jquery-3.4.1.js > js/jquery.js
```
to download jquery into your project

```
<script type="text/javascript" src="js/jquery.js"></script>
```
to import into HTML. note: make sure this is above your script imports which use jQuery.

### Flip
```
curl https://cdn.rawgit.com/nnattawat/flip/master/dist/jquery.flip.js > js/jqueryflip.js
```

```
<script src="js/jqueryflip.js"></script>
```


## Small Functions

Function | description
--- | ---
`fadeIn(miliseconds)` |
`fadeOut(miliseconds)` |
`fadeTo(miliseconds, opacity)` |
`slideUp(miliseconds, function)` | you can just input the speed, but also a function to execute once slide is complete
`slideDown()` |
`slideToggle()` |
`$(selector).animate({ properties }, duration, callback);` | properties define the css properties to be animated, the duraton and callback are options, but define the speed and the function to be called on completion, respectively.
`animate({top: "+=50px"})` | to animate with relative values
`stop()` | stops jquery animations
stop(true, true) | clears all the queued animations and jumps the current animation to the final value. This prevents glitches in situations like onMouseEnter where it can happen lots of times before the animations are finished
`.on("click", functionname)` | replaces addEventListener
`.show()` | changes the css to display (fades in and scrolls)
`.hide()` | changes the css to display: none


## Interesting Findings
If you have a fQuery object, and you return object[0] this will return the DOM node, and jQuery will no longer work on it
To get around this,

```
const $links = $('li');
for ( let i = 0; i < $links.length; i++) {
	$link = $( $links[i] );
}
```
-----

```
.on('sumbit', function (event) {
		event.preventDefault();
	});
```
This allows you to create your own function linked to the submit action, and the event parameter is filtered through. Theres a method you can run called preventDefault() which will prevent the default action from happening (like the form being submitted)

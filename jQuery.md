#jQuery#

If you have a fQuery object, and you return object[0] this will return the DOM node, and jQuery will no longer work on it
To get around this,

```
const $links = $('li');
for ( let i = 0; i < $links.length; i++) {
	$link = $( $links[i] );
}
```

Function | description
--- | ---
fadeIn(miliseconds) |
fadeOut(miliseconds) |
fadeTo(miliseconds, opacity) |
slideUp(miliseconds, function) | you can just input the speed, but also a function to execute once slide is complete
slideDown() |
slideToggle() |
`$(selector).animate({ properties }, duration, callback);` | properties define the css properties to be animated, the duraton and callback are options, but define the speed and the function to be called on completion, respectively.
`animate({top: "+=50px"})` | to animate with relative values
stop() | stops jquery animations
stop(true, true) | clears all the queued animations and jumps the current animation to the final value. This prevents glitches in situations like onMouseEnter where it can happen lots of times before the animations are finished
.on("click", functionname) | replaces addEventListener

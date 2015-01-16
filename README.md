#p5.ijeoma.js
 
A p5.js addon for [ijeoma.js](https://github.com/ekeneijeoma/ijeoma.js), a JS library for creating animations. More documentation and examples can be found in the [ijeoma.js README](https://github.com/ekeneijeoma/ijeoma.js).

#Download   
Developement: [p5.ijeoma.js](http://goo.gl/04mfZ7)

Production: [p5.ijeoma.min.js](http://goo.gl/Aeb2UP)

[ijeoma.js required](https://github.com/ekeneijeoma/ijeoma.js)

#Examples  
[Tween Number](http://ekeneijeoma.github.io/p5.ijeoma.js/examples/Tween.html) 
[Tween Color](http://ekeneijeoma.github.io/p5.ijeoma.js/examples/Color.html)
[Tween Vector](http://ekeneijeoma.github.io/p5.ijeoma.js/examples/Vector.html)
[Parallel](http://ekeneijeoma.github.io/p5.ijeoma.js/examples/Parallel.html) 
[Sequence](http://ekeneijeoma.github.io/p5.ijeoma.js/examples/Sequence.html) 
[Timeline](http://ekeneijeoma.github.io/p5.ijeoma.js/examples/Timeline.html) 

[Transform](http://ekeneijeoma.github.io/p5.ijeoma.js/examples/transform.html)

[Gradients](http://ekeneijeoma.github.io/p5.ijeoma.js/examples/gradient.html)
[Bar chart](http://ekeneijeoma.github.io/p5.ijeoma.js/examples/barChart.html) 
[Square](http://ekeneijeoma.github.io/p5.ijeoma.js/examples/square.html) 
 

#Getting Started 
###Timing
Timing for all MOTION instances can either be in 
```javascript
//sets timing to frames which is the default
timeMode(FRAMES);
```
or
```javascript
//sets timing to seconds
timeMode(SECONDS);
```

###Creating tweens
Tweening a variable named x from 0 to 1024 in 100 frames. 
```javascript  
//NOTE: vars in brackets are optional
//createTween(property, end, duration, [delay], [easing])
var x = 0;
var t = createTween("x", 1024, 100).play(); 
```
or
```javascript 
//createTween(object property, end, duration, [delay], [easing])
var x = 0;

// if no object is passed it will default to window
var t = createTween(window, "x", 1024, 100).play(); 
``` 
or
```javascript 
//NOTE: [start,end] is a required array
//createTween(property, [start,end], duration, [delay], [easing])

 // object defaults to window and the variable x is defined in window with a starting value of 0
var t = createTween("x", [0,1024],100).play();
```

Tweening using relative and absolute start and end values
```javascript
//the default which tweens from defined start to end values every play
valueMode(ABSOLUTE) 
```
or
```javascript
//tweens from defined start to end values on first play and from the property's value to a defined end value every play after
valueMode(RELATIVE);
```

Tweening multiple variables and object properties
```javascript
//createTween(duration, [delay], [easing])
var t = createTween(100).add(window, "x", [0,1024]).add(window, "y", [0,768]).add(window, "size", [0,100]).play();
```
or
```javascript
//createTween(duration, [delay], [easing])

// object defaults to window
var t = createTween(100).add("x", [0,1024]).add("y", [0,768]).add("size", [0,100]).play(); 
```

You can also call play and stop on all motion objects using
```javascript
//applies calls to all MOTION instances
playAll();
stopAll();
```

###Destroying tweens
```javascript
Motion.remove(motion)
```

If you're creating and lot of tweens that you're only playing once you should call useOnce() which will automatically destroys them after. It's set to false by default.
```javascript
createTween(...).useOnce();
```
or
```javascript
//applies call to all MOTION instances
useOnce();
```

###Easing
You can add easing to to Tweens using the Quad, Cubic, Quart, Quint, Sine, Expo, Circ, Elastic, Back, Bounce classes. Each of them have In, Out, and InOut functions. 
```javascript
var t = createTween("w", 1024, 100, 0,Quad.In).play(); 
```
or
```javascript
var t = createTween("w", 1024, 100).easing(Quad.In).play(); 
```

###Delaying
```javascript
//delays for 500 milliseconds
var t = createTween("w", 1024, 100, 500).play(); 
```
or
```javascript
var t = createTween("w", 1024, 100).delay(500).play();
```

###Pausing, Resuming  
```javascript  
t.pause(); 
t.resume(); 
//position is value between 0 and 1
t.seek(position); 

//applies call to all MOTION instances
pauseAll();
resumell();
seekAll(position);
```

###Repeating
```javascript
// if no duration is passed it will repeat forever
var t = createTween(...).repeat([duration]).play();

repeatAll([duration]);
```

###Reversing
```javascript 
var t = createTween(...).repeat().reverse().play();

reverseAll();
```

###Changing speed/timescale
```javascript 
//plays back twice as fast
var t = createTween(...).timeScale(2) 

timeScaleAll(time);
``` 

##Playing back tweens in parallel
```javascript 
timeMode(FRAMES); //frames by default
// returns MOTION.Parallel() object
p = beginParallel() 
  //same arguments and functions as createTween()
  tween(...
  tween(...)
endParallel();
p.play()
//or play(p); 
```

##Playing back tweens in sequence
```javascript 
// returns MOTION.Sequence() object
var s = beginSequence(); 
  tween(...)
  tween(...)
endSequence()
s.play();
```

##Playing back tweens in a timeline
```javascript 
// returns MOTION.Timeline() object
var t = beginTimeline(); 
  beginKeyframe(100);
    tween(...)
  endKeyframe();
  beginKeyframe(200);
    tween(...)
  endKeyframe();
endTimeline();
t.play();
```
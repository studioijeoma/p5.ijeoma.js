#p5.ijeomamotion.js
 
An ijeomamotion.js addon for creating animations in p5.js .  

#Download  

#Getting Started 
###Updating
The MOTION.update([time]) ([more documentation at ijeomamotion.js](https://github.com/ekeneijeoma/ijeomamotion.js#updating)) function which updates time using frames (by default) is automatically called every draw loop (by default). To change the default use these calls: 

```javascript 
timeMode(FRAMES); //default 
//or
timeMode(SECONDS);
``` 

```javascript 
autoUpdate(); //default 
//or
noAutoUpdate();
``` 

###Tweening
The createTween function is a shorthand for "new MOTION.Tween" and therefore returns a MOTION.Tween object so it has all the same functions and properties see [ijeomamotion.js README for documentation](https://github.com/ekeneijeoma/ijeomamotion.js#tweening)

Tweening a variable named x from 0 to 1024 in 1000 millseconds. 
```javascript 
//new MOTION.Tween(object, property, end, duration, [delay], [easing])
var x = 0;
var tween = createTween(window, "x", 1024, 1000).play(); // if no object is passed it will default to window
```
or
```javascript 
//createTween(property, [start,end], duration, [delay], [easing])
var tween = createTween("x", [0,1024],1000).play(); // object defaults to window and the variable x is defined in window with a starting value of 0
``` 
 
###Tweening p5.Colors 
Tweening a color variable named c from black to white in 100 frames.
```javascript
var c = color(0);
var t = createTween("c", color(255), 100).play();
```
 
###Tweening p5.Vectors
Tweening a vector variable named v from (0,0) to (100,100) in 100 frames.
```javascript
var v = createVector(0,0);
var t = createTween("v", createVector(100,100), 100).play();
```

###Calling playback functions on all motion objects
```javascript
playAll();
stopAll();
pauseAll();
resumeAll();
seekAll(position);
repeatAll([duration]);
reverseAll();
seekAll();
```

##Playing back tweens in parallel 
The createParallel()  can be used as a shorthand for "new MOTION.Parallel()" ([more documentation at ijeomamotion.js](https://github.com/ekeneijeoma/ijeomamotion.js#playing-back-tweens-in-parallel)) otherwise you can create it using a beginShape/endShape style syntax.

```javascript 
var p = beginParallel() // returns MOTION.Parallel object
  tween(...) // same arguments and functions as createTween() 
  tween(...)
endParallel();
p.play()
//or play(p); 
```

##Playing back tweens in a sequence
The createSequence()  can be used as a shorthand for "new MOTION.Sequence()" ([more documentation at ijeomamotion.js](https://github.com/ekeneijeoma/ijeomamotion.js#playing-back-tweens-in-sequence)) otherwise you can create this syntax.

```javascript
var s = beginSequence(); // returns MOTION.Sequence object
  tween(...)
  tween(...)
endSequence()
s.play();
```

##Playing back tweens in a timeline using keyframes
The createTimeline()  can be used as a shorthand for "new MOTION.Timeline()" ([more documentation at ijeomamotion.js](https://github.com/ekeneijeoma/ijeomamotion.js#playing-back-tweens-in-a-timeline)) otherwise you can create this syntax.

```javascript 
var t = beginTimeline(); // returns MOTION.Timeline object
  beginKeyframe(100); 
    tween(...)
  endKeyframe();
  beginKeyframe(200);
    tween(...)
  endKeyframe();
endTimeline();
t.play();
```
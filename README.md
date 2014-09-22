#p5.ijeomamotion.js
 
An addon for p5.js for sketching animations. Ijeoma (ee-JOH-mah) means safe journey in Igbo, the language of my family from Nigeria. I started writing this a while back in Java for Processing then ported it to JS for processing.js and recently I've rewrote it for JS and p5.js.

#Download  

#Getting Started 
##How to create Tweens

###Numbers  
There are 4 ways to setup Tweens.
```javascript
createTween(duration,delay,easing) //object defaults to window
createTween(object, duration, delay, easing) 
createTween(object, property, end, duration, delay, easing)
createTween(property, end, duration, delay, easing) //object defaults to window
```

Say you want to tween x from 0 to 100 in 100 frames. 
```javascript
var x = 0;
var t = createTween(100).add("x", 100, 100).play();
```
or
```javascript
var x = 0;
var t = createTween(this,100).add("x", 100).play();
```

or
```javascript
var x = 0;
var t = createTween(this, "x", 100, 100).play();
```

The 2nd way lets you chain/add more properties to the Tween. Say we want to tween a var x from 0 to 100 and var y from 0 to 100 in 100 frames.
```javascript
var t = createTween(this).add("x", 100).add("y", 100).play();
```
 
###p5.Colors 
Say we want to tween a color var c from black to white in 100 frames.
```javascript
var c = color(0);
var t = createTween("c", color(255), 100).play();
```
 
###p5.Vectors
You can also tween PVectors. Say we want to tween PVectors `v1 = PVector(0,0)` and `v2 = PVector(0,0)` to `v1 = PVector(50, 50)` and `v2 = PVector(100, 100)`.
```javascript
var v = createVector(0,0);
var t = createTween("v", createVector(100,100), 100).play();
```

###All in 1!
You can also tween multiples properties of any type in 1 Tween.
```javascript
var t = createTween(100).add("x", 100).add("c", color(255)).add("v", createVector(100, 100)).play();
```

###Callbacks 
```javascript
t = createTween(100).onStart(func).onUpdate(func).onEnd(func).play(); 
```

##How to playback Tweens 
###Delaying
```javascript
var t = createTween("w", width, 50, 50).play(); //delay for 50 frames
```
or
```javascript
var t = createTween(this,50,50).add("w", width).delay(50).play();
```
###Pausing, Resuming  
```javascript  
t.pause(); 
t.resume(); 
t.seek(time); 
```
###Repeating
```javascript
var t = createTween("w", width, 100).repeat().play();
```
###Reversing
```javascript 
var t = createTween("w", width, 100).repeat().reverse().play();
```

##How to playback tweens in parallel 
```javascript
//p5.js way
timeMode(MOTION.FRAMES); //frames by default
p = beginParallel() // returns MOTION.Parallel() object
  tween(...) // same arguments and functions as createTween()
  tween(...)
endParallel();
p.play()
//or play(p); 
```

##How to playback tweens in a sequence
```javascript
//p5.js way
var s = beginSequence(); // returns MOTION.Sequence() object
  tween(...)
  tween(...)
endSequence()
s.play();
```

##How to playback tweens in a timeline
```javascript 
var t = beginTimeline(); // returns MOTION.Timeline() object
  beginKeyframe(100);
    tween(...)
  endKeyframe();
  beginKeyframe(200);
    tween(...)
  endKeyframe();
endTimeline();
t.play();
```
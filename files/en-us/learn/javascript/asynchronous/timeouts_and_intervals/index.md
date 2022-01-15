---
title: 'Cooperative asynchronous JavaScript: Timeouts and intervals'
slug: Learn/JavaScript/Asynchronous/Timeouts_and_intervals
tags:
  - Animation
  - Beginner
  - CodingScripting
  - Guide
  - Intervals
  - JavaScript
  - Loops
  - asynchronous
  - requestAnimationFrame
  - setInterval
  - setTimeout
  - timeouts
---
{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Asynchronous/Introducing", "Learn/JavaScript/Asynchronous/Promises", "Learn/JavaScript/Asynchronous")}}

This tutorial looks at the traditional methods JavaScript has available for running code asynchronously after a set time period has elapsed, or at a regular interval (e.g. a set number of times per second), discusses what they are useful for, and considers their inherent issues.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerequisites:</th>
      <td>
        Basic computer literacy, a reasonable understanding of JavaScript
        fundamentals.
      </td>
    </tr>
    <tr>
      <th scope="row">Objective:</th>
      <td>
        To understand asynchronous loops and intervals and what they are useful
        for.
      </td>
    </tr>
  </tbody>
</table>

## Introduction

For a long time, the web platform has offered JavaScript programmers a number of functions that allow them to asynchronously execute code after a certain time interval has elapsed, and to repeatedly execute a block of code asynchronously until you tell it to stop.

These functions are:

- [`setTimeout()`](/en-US/docs/Web/API/setTimeout)
  - : Execute a specified block of code once after a specified time has elapsed.
- [`setInterval()`](/en-US/docs/Web/API/setInterval)
  - : Execute a specified block of code repeatedly with a fixed time delay between each call.
- [`requestAnimationFrame()`](/en-US/docs/Web/API/window/requestAnimationFrame)
  - : The modern version of `setInterval()`. Executes a specified block of code before the browser next repaints the display, allowing an animation to be run at a suitable framerate regardless of the environment it is being run in.

The asynchronous code set up by these functions runs on the main thread (after their specified timer has elapsed).

It's important to know that you can (and often will) run other code before a `setTimeout()` call executes, or between iterations of `setInterval()`. Depending on how processor-intensive these operations are, they can delay your async code even further, as any async code will execute only _after_ the main thread is available. (In other words, when the stack is empty.)  You will learn more on this matter as you progress through this article.

In any case, these functions are used for running constant animations and other background processing on a web site or application. In the following sections we will show you how they can be used.

## setTimeout()

As we said before, [`setTimeout()`](/en-US/docs/Web/API/setTimeout) executes a particular block of code once after a specified time has elapsed. It takes the following parameters:

- A function to run, or a reference to a function defined elsewhere.
- A number representing the time interval in milliseconds (1000 milliseconds equals 1 second) to wait before executing the code. If you specify a value of `0` (or omit the value), the function will run as soon as possible. (See the note below on why it runs "as soon as possible" and not "immediately".) More on why you might want to do this later.
- Zero or more values that represent any parameters you want to pass to the function when it is run.

> **Note:** The specified amount of time (or the delay) is **not** the _guaranteed time_ to execution, but rather the _minimum time_ to execution. The callbacks you pass to these functions cannot run until the stack on the main thread is empty.
>
> As a consequence, code like `setTimeout(fn, 0)` will execute as soon as the stack is empty, **not** immediately. If you execute code like `setTimeout(fn, 0)` but then immediately after run a loop that counts from 1 to 10 billion, your callback will be executed after a few seconds.

In the following example, the browser will wait two seconds before executing the anonymous function, then will display the alert message ([see it running live](https://mdn.github.io/learning-area/javascript/asynchronous/loops-and-intervals/simple-settimeout.html), and [see the source code](https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/loops-and-intervals/simple-settimeout.html)):

```js
let myGreeting = setTimeout(() => {
  alert('Hello, Mr. Universe!');
}, 2000);
```

The functions you specify don't have to be anonymous. You can give your function a name, and even define it somewhere else and pass a function reference to the `setTimeout()`. The following two versions of the code snippet are equivalent to the first one:

```js
// With a named function
let myGreeting = setTimeout(function sayHi() {
  alert('Hello, Mr. Universe!');
}, 2000);

// With a function defined separately
function sayHi() {
  alert('Hello Mr. Universe!');
}

let myGreeting = setTimeout(sayHi, 2000);
```

That can be useful if you have a function that needs to be called both from a timeout and in response to an event, for example. But it can also just help keep your code tidy, especially if the timeout callback is more than a few lines of code.

`setTimeout()` returns an identifier value that can be used to refer to the timeout later, such as when you want to stop it. See {{anch("Clearing timeouts")}} (below) to learn how to do that.

### Passing parameters to a setTimeout() function

Any parameters that you want to pass to the function being run inside the `setTimeout()` must be passed to it as additional parameters at the end of the list.

For example, you could refactor the previous function so that it will say hi to whatever person's name is passed to it:

```js
function sayHi(who) {
  alert(`Hello ${who}!`);
}
```

Now, you can pass the name of the person into the `setTimeout()` call as a third parameter:

```js
let myGreeting = setTimeout(sayHi, 2000, 'Mr. Universe');
```

### Clearing timeouts

Finally, if a timeout has been created, you can cancel it before the specified time has elapsed by calling [`clearTimeout()`](/en-US/docs/Web/API/clearTimeout), passing it the identifier of the `setTimeout()` call as a parameter. So to cancel our above timeout, you'd do this:

```js
clearTimeout(myGreeting);
```

> **Note:** See [`greeter-app.html`](https://mdn.github.io/learning-area/javascript/asynchronous/loops-and-intervals/greeter-app.html) for a slightly more involved demo that allows you to set the name of the person to say hello to in a form, and cancel the greeting using a separate button ([see the source code also](https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/loops-and-intervals/greeter-app.html)).

## setInterval()

`setTimeout()` works perfectly when you need to run code once after a set period of time. But what happens when you need to run the code over and over again—for example, in the case of an animation?

This is where [`setInterval()`](/en-US/docs/Web/API/setInterval) comes in. This works in a very similar way to `setTimeout()`, except that the function you pass as the first parameter is executed repeatedly at no less than the number of milliseconds given by the second parameter apart, rather than once. You can also pass any parameters required by the function being executed as subsequent parameters of the `setInterval()` call.

Let's look at an example. The following function creates a new [`Date()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) object, extracts a time string out of it using [`toLocaleTimeString()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString), and then displays it in the UI. It then runs the function once per second using `setInterval()`, creating the effect of a digital clock that updates once per second ([see this live](https://mdn.github.io/learning-area/javascript/asynchronous/loops-and-intervals/setinterval-clock.html), and also [see the source](https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/loops-and-intervals/setinterval-clock.html)):

```js
function displayTime() {
   let date = new Date();
   let time = date.toLocaleTimeString();
   document.getElementById('demo').textContent = time;
}

const createClock = setInterval(displayTime, 1000);
```

Just like `setTimeout()`, `setInterval()` returns an identifying value you can use later when you need to clear the interval.

### Clearing intervals

`setInterval()` keeps running a task forever, unless you do something about it. You'll probably want a way to stop such tasks, otherwise you may end up getting errors when the browser can't complete any further versions of the task, or if the animation being handled by the task has finished. You can do this the same way you stop timeouts — by passing the identifier returned by the `setInterval()` call to the [`clearInterval()`](/en-US/docs/Web/API/clearInterval) function:

```js
const myInterval = setInterval(myFunction, 2000);

clearInterval(myInterval);
```

#### Active learning: Creating your own stopwatch!

With this all said, we've got a challenge for you. Take a copy of our [`setInterval-clock.html`](https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/loops-and-intervals/setinterval-clock.html) example, and modify it to create your own simple stopwatch.

You need to display a time as before, but in this example, you need:

- A "Start" button to start the stopwatch running.
- A "Stop" button to pause/stop it.
- A "Reset" button to reset the time back to `0`.
- The time display to show the number of seconds elapsed, rather than the actual time.

Here's a few hints for you:

- You can structure and style the button markup however you like; just make sure you use semantic HTML, with hooks to allow you to grab the button references using JavaScript.
- You probably want to create a variable that starts at `0`, then increments by one every second using a constant loop.
- It is easier to create this example without using a `Date()` object, like we've done in our version, but less accurate — you can't guarantee that the callback will fire after exactly `1000`ms. A more accurate way would be to run `startTime = Date.now()` to get a timestamp of exactly when the user clicked the start button, and then do `Date.now() - startTime` to get the number of milliseconds after the start button was clicked.
- You also want to calculate the number of hours, minutes, and seconds as separate values, and then show them together in a string after each loop iteration. From the second counter, you can work out each of these.
- How would you calculate them? Have a think about it:

  - The number of seconds in an hour is `3600`.
  - The number of minutes will be the amount of seconds left over when all of the hours have been removed, divided by `60`.
  - The number of seconds will be the amount of seconds left over when all of the minutes have been removed.

- You'll want to include a leading zero on your display values if the amount is less than `10`, so it looks more like a traditional clock/watch.
- To pause the stopwatch, you'll want to clear the interval. To reset it, you'll want to set the counter back to `0`, clear the interval, and then immediately update the display.
- You probably ought to disable the start button after pressing it once, and enable it again after you've stopped/reset it. Otherwise multiple presses of the start button will apply multiple `setInterval()`s to the clock, leading to wrong behavior.

> **Note:** If you get stuck, you can [find our version here](https://mdn.github.io/learning-area/javascript/asynchronous/loops-and-intervals/setinterval-stopwatch.html) (see the [source code](https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/loops-and-intervals/setinterval-stopwatch.html) also).

## Things to keep in mind about setTimeout() and setInterval()

There are a few things to keep in mind when working with `setTimeout()` and `setInterval()`. Let's review these now.

### Recursive timeouts

There is another way to use `setTimeout()`: you can call it recursively to run the same code repeatedly, instead of using `setInterval()`.

The below example uses a recursive `setTimeout()` to run the passed function every `100` milliseconds:

```js
let i = 1;

setTimeout(function run() {
  console.log(i);
  i++;
  setTimeout(run, 100);
}, 100);
```

Compare the above example to the following one — this uses `setInterval()` to accomplish the same effect:

```js
let i = 1;

setInterval(function run() {
  console.log(i);
  i++;
}, 100);
```

#### How do recursive `setTimeout()` and `setInterval()` differ?

The difference between the two versions of the above code is a subtle one.

- Recursive `setTimeout()` guarantees the given delay between the code execution completion and the next call. The delay for the next execution will start counting only after the code has finished running, therefore _excluding_ the time taken to run the code. In this example, the `100` milliseconds will be the delay between the `run` code finishing, and the next `run` call.
- The example using `setInterval()` does things somewhat differently. The interval you chose _includes_ the time taken to execute the code you want to run in. Let's say that the code takes `40` milliseconds to run — the interval then ends up being only `60` milliseconds.
- When using `setTimeout()` recursively, each iteration can calculate a different delay before running the next iteration. In other words, the value of the second parameter can specify a different time in milliseconds to wait before running the code again.

When your code has the potential to take longer to run than the time interval you’ve assigned, it’s better to use recursive `setTimeout()` — this will keep the time interval constant between executions regardless of how long the code takes to execute, and you won't get errors.

### Immediate timeouts

Using `0` as the value for `setTimeout()` schedules the execution of the specified callback function as soon as possible but only after the main code thread has been run.

For instance, the code below ([see it live](https://mdn.github.io/learning-area/javascript/asynchronous/loops-and-intervals/zero-settimeout.html)) outputs an alert containing `"Hello"`, then an alert containing `"World"` as soon as you click OK on the first alert.

```js
setTimeout(function() {
  alert('World');
}, 0);

alert('Hello');
```

This can be useful in cases where you want to set a block of code to run as soon as all of the main thread has finished running — put it on the async event loop, so it will run straight afterwards.

### Clearing with clearTimeout() or clearInterval()

`clearTimeout()` and `clearInterval()` both use the same list of entries to clear from. Interestingly enough, this means that you can use either method to clear a `setTimeout()` or `setInterval()`.

For consistency, you should use `clearTimeout()` to clear `setTimeout()` entries and `clearInterval()` to clear `setInterval()` entries. This will help to avoid confusion.

## requestAnimationFrame()

[`requestAnimationFrame()`](/en-US/docs/Web/API/window/requestAnimationFrame) is a specialized enqueueing function created for running animations efficiently in the browser. It runs a specified block of code before the browser next repaints the display, allowing the execution to be paired with the device's display frame rate.

It was created in response to perceived problems with previous async functions like `setInterval()`, which for example doesn't run at a frame rate optimized for the device, dropping frames in some cases. They also lacked some optimizations suited for animations, like stopping the execution if the tab isn't active or the animation is scrolled off the page, among other things.

([Read more about this on CreativeJS](http://creativejs.com/resources/requestanimationframe/index.html).)

> **Note:** You can find examples of using `requestAnimationFrame()` elsewhere in the course — see for example [Drawing graphics](/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Drawing_graphics), and [Object building practice](/en-US/docs/Learn/JavaScript/Objects/Object_building_practice).

The method takes as an argument a callback to be invoked before the repaint. This is the general pattern you'll see it used in:

```js
function draw() {
   // Drawing code goes here
   requestAnimationFrame(draw);
}

draw();
```

The idea is to define a function in which your animation is updated (e.g. your sprites are moved, score is updated, data is refreshed, or whatever). Then, you call it to start the process off. At the end of the function block you call `requestAnimationFrame()` with the function reference passed as the parameter, and this instructs the browser to call the function again on the next display repaint. This is then run continuously, as the code is calling `requestAnimationFrame()` recursively.

> **Note:** If you want to perform some kind of simple constant DOM animation, [CSS Animations](/en-US/docs/Web/CSS/CSS_Animations) are probably faster. They are calculated directly by the browser's internal code, rather than JavaScript.
>
> If, however, you are doing something more complex and involving objects that are not directly accessible inside the DOM (such as [2D Canvas API](/en-US/docs/Web/API/Canvas_API) or [WebGL](/en-US/docs/Web/API/WebGL_API) objects), `requestAnimationFrame()` is the better option in most cases.

### How fast does your animation run?

The smoothness of your animation is directly dependent on your animation's frame rate and it is measured in frames per second (fps). The higher this number is, the smoother your animation will look, to a point.

Since most screens have a refresh rate of 60Hz, the fastest frame rate you can aim for is 60 frames per second (FPS) when working with web browsers. However, more frames means more processing, which can often cause stuttering and skipping — also known as _dropping frames_, or _jank_.

If you have a monitor with a 60Hz refresh rate and you want to achieve 60 FPS you have about 16.7 milliseconds (`1000 / 60`) to execute your animation code to render each frame. This is a reminder that you'll need to be mindful of the amount of code that you try to run during each pass through the animation loop.

`requestAnimationFrame()` always tries to get as close to this magic 60 FPS value as possible. Sometimes, it isn't possible — if you have a really complex animation and you are running it on a slow computer, your frame rate will be less. In all cases, `requestAnimationFrame()` will always do the best it can with what it has available.

### How does requestAnimationFrame() differ from setInterval() and setTimeout()?

Let's talk a little bit more about how the `requestAnimationFrame()` method differs from the other methods used earlier. Looking at our code from above:

```js
function draw() {
   // Drawing code goes here
   requestAnimationFrame(draw);
}

draw();
```

Let's now see how to do the same thing using `setInterval()`:

```js
function draw() {
   // Drawing code goes here
}

setInterval(draw, 17);
```

As we covered earlier, you don't specify a time interval for `requestAnimationFrame()`. It just runs it as quickly and smoothly as possible in the current conditions. The browser also doesn't waste time running it if the animation is offscreen for some reason, etc.

`setInterval()`, on the other hand _requires_ an interval to be specified. We arrived at our final value of 17 via the formula _1000 milliseconds / 60Hz_, and then rounded it up. Rounding up is a good idea; if you rounded down, the browser might try to run the animation faster than 60 FPS, and it wouldn't make any difference to the animation's smoothness, anyway. As we said before, 60Hz is the standard refresh rate.

### Including a timestamp

The actual callback passed to the `requestAnimationFrame()` function can be given a parameter, too: a _timestamp_ value, that represents the time since the `requestAnimationFrame()` started running.

This is useful as it allows you to run things at specific times and at a constant pace, regardless of how fast or slow your device might be. The general pattern you'd use looks something like this:

```js
let startTime = null;

function draw(timestamp) {
    if (!startTime) {
      startTime = timestamp;
    }

   currentTime = timestamp - startTime;

   // Do something based on current time

   requestAnimationFrame(draw);
}

draw();
```

### Browser support

`requestAnimationFrame()` is supported in more recent browsers than `setInterval()`/`setTimeout()`.  Interestingly, it is available in Internet Explorer 10 and above.

So, unless you need to support older versions of IE, there is little reason to not use `requestAnimationFrame()`.

### A simple example

Enough with the theory! Let's build your own personal `requestAnimationFrame()` example. You're going to create a simple "spinner animation"—the kind you might see displayed in an app when it is busy connecting to the server, etc.

> **Note:** In a real world example, you should probably use CSS animations to run this kind of simple animation. However, this kind of example is very useful to demonstrate `requestAnimationFrame()` usage, and you'd be more likely to use this kind of technique when doing something more complex such as updating the display of a game on each frame.

1.  Grab a basic HTML template ([such as this one](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/getting-started/index.html)).
2.  Put an empty {{htmlelement("div")}} element inside the {{htmlelement("body")}}, then add a ↻ character inside it. This circular arrow character will act as our spinner for this example.
3.  Apply the following CSS to the HTML template (in whatever way you prefer). This sets a red background on the page, sets the `<body>` height to `100%` of the {{htmlelement("html")}} height, and centers the `<div>` inside the `<body>`, horizontally and vertically.

    ```css
    html {
      background-color: white;
      height: 100%;
    }

    body {
      height: inherit;
      background-color: red;
      margin: 0;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    div {
      display: inline-block;
      font-size: 10rem;
    }
    ```

4.  Insert a {{htmlelement("script")}} element just above the closing `</body>` tag.
5.  Insert the following JavaScript inside your `<script>` element. Here, you're storing a reference to the `<div>` inside a constant, setting a `rotateCount` variable to `0`, setting an uninitialized variable that will later be used to contain a reference to the `requestAnimationFrame()` call, and setting a `startTime` variable to `null`, which will later be used to store the start time of the `requestAnimationFrame()`.

    ```js
    const spinner = document.querySelector('div');
    let rotateCount = 0;
    let startTime = null;
    let rAF;
    ```

6.  Below the previous code, insert a `draw()` function that will be used to contain our animation code, which includes the `timestamp` parameter:

    ```js
    function draw(timestamp) {

    }
    ```

7.  Inside `draw()`, add the following lines. They will define the start time if it is not defined already (this will only happen on the first loop iteration), and set the `rotateCount` to a value to rotate the spinner by (the current timestamp, take the starting timestamp, divided by three so it doesn't go too fast):

    ```js
      if (!startTime) {
       startTime = timestamp;
      }

      rotateCount = (timestamp - startTime) / 3;
    ```

8.  Below the previous line inside `draw()`, add the following block — this ensures that the value of `rotateCount` is between `0` and `359`, by setting the value to its modulo of `360` (i.e. the remainder left over when the value is divided by `360`) — so the circle animation can continue uninterrupted, at a sensible, low value. Note that this isn't strictly necessary, but it is easier to work with values of `0`–`359` degrees than values like `"128000 degrees"`.

    ```js
      rotateCount %= 360;
    ```

9.  Next, below the previous block add the following line to actually rotate the spinner:

    ```js
    spinner.style.transform = `rotate(${rotateCount}deg)`;
    ```

10. At the very bottom inside the `draw()` function, insert the following line. This is the key to the whole operation — you are setting the variable defined earlier to an active `requestAnimation()` call, which takes the `draw()` function as its parameter. This starts the animation off, constantly running the `draw()` function at a rate as near 60 FPS as possible.

    ```js
    rAF = requestAnimationFrame(draw);
    ```

11. Below the `draw()` function definition, add a call to the `draw()` function to start the animation.

    ```js
    draw();
    ```

> **Note:** You can find the finished [example live on GitHub](https://mdn.github.io/learning-area/javascript/asynchronous/loops-and-intervals/simple-raf-spinner.html). (You can see the [source code](https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/loops-and-intervals/simple-raf-spinner.html), also.)

### Clearing a requestAnimationFrame() call

Clearing a `requestAnimationFrame()` call can be done by calling the corresponding `cancelAnimationFrame()` method. (Note that the function name starts with "cancel", not "clear" as with the "set..." methods.)

Just pass it the value returned by the `requestAnimationFrame()` call to cancel, which you stored in the variable `rAF`:

```js
cancelAnimationFrame(rAF);
```

### Active learning: Starting and stopping our spinner

In this exercise, we'd like you to test out the `cancelAnimationFrame()` method by taking our previous example and updating it, adding an event listener to start and stop the spinner when the mouse is clicked anywhere on the page.

Some hints:

- A `click` event handler can be added to most elements, including the document `<body>`. It makes more sense to put it on the `<body>` element if you want to maximize the clickable area — the event bubbles up to its child elements.
- You'll want to add a tracking variable to check whether the spinner is spinning or not, clearing the animation frame if it is, and calling it again if it isn't.

> **Note:** Try this yourself first; if you get really stuck, check out of our [live example](https://mdn.github.io/learning-area/javascript/asynchronous/loops-and-intervals/start-and-stop-spinner.html) and [source code](https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/loops-and-intervals/start-and-stop-spinner.html).

### Throttling a requestAnimationFrame() animation

One limitation of `requestAnimationFrame()` is that you can't choose your frame rate. This isn't a problem most of the time, as generally you want your animation to run as smoothly as possible. But what about when you want to create an old school, 8-bit-style animation?

This was a problem, for example, in the Monkey Island-inspired walking animation from our [Drawing Graphics](/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Drawing_graphics) article:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/loops_animation/7_canvas_walking_animation.html", '100%', 260)}}

In this example, you have to animate both the position of the character on the screen, and the sprite being shown. There are only 6 frames in the sprite's animation. If you showed a different sprite frame for every frame displayed on the screen by `requestAnimationFrame()`, Guybrush would move his limbs too fast and the animation would look ridiculous. This example therefore throttles the rate at which the sprite cycles its frames using the following code:

```js
if (posX % 13 === 0) {
  if (sprite === 5) {
    sprite = 0;
  } else {
    sprite++;
  }
}
```

So the code only cycles the sprite once every 13 animation frames.

...Actually, it's about every 6.5 frames, as we update `posX` (character's position on the screen) by two each frame:

```js
if (posX > width/2) {
  newStartPos = -( (width/2) + 102 );
  posX = Math.ceil(newStartPos / 13) * 13;
  console.log(posX);
} else {
  posX += 2;
}
```

This is the code that calculates how to update the position in each animation frame.

The method you use to throttle your animation will depend on your particular code. For instance, in the earlier spinner example, you could make it appear to move slower by only increasing `rotateCount` by one on each frame, instead of two.

## Active learning: a reaction game

For the final section of this article, you'll create a 2-player reaction game. The game will have two players, one of whom controls the game using the <kbd>A</kbd> key, and the other with the <kbd>L</kbd> key.

When the _Start_ button is pressed, a spinner like the one we saw earlier is displayed for a random amount of time between 5 and 10 seconds. After that time, a message will appear saying `"PLAYERS GO!!"` — once this happens, the first player to press their control button will win the game.

{{EmbedGHLiveSample("learning-area/javascript/asynchronous/loops-and-intervals/reaction-game.html", '100%', 500)}}

Let's work through this:

1.  First of all, download the [starter file for the app](https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/loops-and-intervals/reaction-game-starter.html). This contains the finished HTML structure and CSS styling, giving us a game board that shows the two players' information (as seen above), but with the spinner and results paragraph displayed on top of one another. You just have to write the JavaScript code.
2.  Inside the empty {{htmlelement("script")}} element on your page, start by adding the following lines of code that define some constants and variables you'll need in the rest of the code:

    ```js
    const spinner = document.querySelector('.spinner p');
    const spinnerContainer = document.querySelector('.spinner');
    let rotateCount = 0;
    let startTime = null;
    let rAF;
    const btn = document.querySelector('button');
    const result = document.querySelector('.result');
    ```

    In order, these are:

    1.  A reference to the spinner, so you can animate it.
    2.  A reference to the {{htmlelement("div")}} element that contains the spinner, used for showing and hiding it.
    3.  A rotate count. This determines how much you want to show the spinner rotated on each frame of the animation.
    4.  A null start time. This will be populated with a start time when the spinner starts spinning.
    5.  An uninitialized variable to later store the {{domxref("Window.requestAnimationFrame", "requestAnimationFrame()")}} call that animates the spinner.
    6.  A reference to the Start button.
    7.  A reference to the results paragraph.

3.  Next, below the previous lines of code, add the following function. It takes two numbers and returns a random number between the two. You'll need this to generate a random timeout interval later on.

    ```js
    function random(min,max) {
      var num = Math.floor(Math.random()*(max-min)) + min;
      return num;
    }
    ```

4.  Next add  the `draw()` function, which animates the spinner. This is very similar to the version from the simple spinner example, earlier:

    ```js
    function draw(timestamp) {
      if(!startTime) {
       startTime = timestamp;
      }

      rotateCount = (timestamp - startTime) / 3;

      rotateCount %= 360;

      spinner.style.transform = 'rotate(' + rotateCount + 'deg)';
      rAF = requestAnimationFrame(draw);
    }
    ```

5.  Now it is time to set up the initial state of the app when the page first loads. Add the following two lines, which hide the results paragraph and spinner container using `display: none;`.

    ```js
    result.style.display = 'none';
    spinnerContainer.style.display = 'none';
    ```

6.  Next, define a `reset()` function, which sets the app back to the original state required to start the game again after it has been played. Add the following at the bottom of your code:

    ```js
    function reset() {
      btn.style.display = 'block';
      result.textContent = '';
      result.style.display = 'none';
    }
    ```

7.  Okay, enough preparation!  It's time to make the game playable! Add the following block to your code. The `start()` function calls `draw()` to start the spinner spinning and display it in the UI, hides the _Start_ button so you can't mess up the game by starting it multiple times concurrently, and runs a `setTimeout()` call that runs a `setEndgame()` function after a random interval between 5 and 10 seconds has passed. The following block also adds an event listener to your button to run the `start()` function when it is clicked.

    ```js
    btn.addEventListener('click', start);

    function start() {
      draw();
      spinnerContainer.style.display = 'block';
      btn.style.display = 'none';
      setTimeout(setEndgame, random(5000,10000));
    }
    ```

    > **Note:** You'll see this example is calling `setTimeout()` without storing the return value. (So, not `let myTimeout = setTimeout(functionName, interval)`.)
    >
    > This works just fine, as long as you don't need to clear your interval/timeout at any point. If you do, you'll need to save the returned identifier!

    The net result of the previous code is that when the _Start_ button is pressed, the spinner is shown and the players are made to wait a random amount of time before they are asked to press their button. This last part is handled by the `setEndgame()` function, which you'll define next.

8.  Add the following function to your code next:

    ```js
    function setEndgame() {
      cancelAnimationFrame(rAF);
      spinnerContainer.style.display = 'none';
      result.style.display = 'block';
      result.textContent = 'PLAYERS GO!!';

      document.addEventListener('keydown', keyHandler);

      function keyHandler(e) {
        let isOver = false;
        console.log(e.key);

        if (e.key === "a") {
          result.textContent = 'Player 1 won!!';
          isOver = true;
        } else if (e.key === "l") {
          result.textContent = 'Player 2 won!!';
          isOver = true;
        }

        if (isOver) {
          document.removeEventListener('keydown', keyHandler);
          setTimeout(reset, 5000);
        }
      };
    }
    ```

    Stepping through this:

    1.  First, cancel the spinner animation with {{domxref("window.cancelAnimationFrame", "cancelAnimationFrame()")}} (it is always good to clean up unneeded processes), and hide the spinner container.
    2.  Next, display the results paragraph and set its text content to "PLAYERS GO!!" to signal to the players that they can now press their button to win.
    3.  Attach a [`keydown`](/en-US/docs/Web/API/Document/keydown_event) event listener to the document. When any button is pressed down, the `keyHandler()` function is run.
    4.  Inside `keyHandler()`, the code includes the event object as a parameter (represented by `e`) — its {{domxref("KeyboardEvent.key", "key")}} property contains the key that was just pressed, and you can use this to respond to specific key presses with specific actions.
    5.  Set the variable `isOver` to false, so we can track whether the correct keys were pressed for player 1 or 2 to win. We don't want the game ending when a wrong key was pressed.
    6.  Log `e.key` to the console, which is a useful way of finding out the `key` value of different keys you are pressing.
    7.  When `e.key` is "a", display a message to say that Player 1 won, and when `e.key` is "l", display a message to say Player 2 won. (**Note:** This will only work with lowercase a and l — if an uppercase A or L is submitted (the key plus

        <kbd>Shift</kbd>

        ), it is counted as a different key!) If one of these keys was pressed, set `isOver` to `true`.

    8.  Only if `isOver` is `true`, remove the `keydown` event listener using {{domxref("EventTarget.removeEventListener", "removeEventListener()")}} so that once the winning press has happened, no more keyboard input is possible to mess up the final game result. You also use `setTimeout()` to call `reset()` after 5 seconds — as explained earlier, this function resets the game back to its original state so that a new game can be started.

That's it—you're all done!

> **Note:** If you get stuck, check out [our version of the reaction game](https://mdn.github.io/learning-area/javascript/asynchronous/loops-and-intervals/reaction-game.html) (see the [source code](https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/loops-and-intervals/reaction-game.html) also).

## Conclusion

So that's it — all the essentials of async loops and intervals covered in one article. You'll find these methods useful in a lot of situations, but take care not to overuse them! Because they still run on the main thread, heavy and intensive callbacks (especially those that manipulate the DOM) can really slow down a page if you're not careful.

{{PreviousMenuNext("Learn/JavaScript/Asynchronous/Introducing", "Learn/JavaScript/Asynchronous/Promises", "Learn/JavaScript/Asynchronous")}}

## In this module

- [General asynchronous programming concepts](/en-US/docs/Learn/JavaScript/Asynchronous/Concepts)
- [Introducing asynchronous JavaScript](/en-US/docs/Learn/JavaScript/Asynchronous/Introducing)
- [Cooperative asynchronous JavaScript: Timeouts and intervals](/en-US/docs/Learn/JavaScript/Asynchronous/Timeouts_and_intervals)
- [Graceful asynchronous programming with Promises](/en-US/docs/Learn/JavaScript/Asynchronous/Promises)
- [Making asynchronous programming easier with async and await](/en-US/docs/Learn/JavaScript/Asynchronous/Async_await)
- [Choosing the right approach](/en-US/docs/Learn/JavaScript/Asynchronous/Choosing_the_right_approach)

---
title: Anatomy of a video game
slug: Games/Anatomy
page-type: guide
---

{{GamesSidebar}}

This article looks at the anatomy and workflow of the average video game from a technical point of view, in terms of how the main loop should run. It helps beginners to modern game development understand what is required when building a game and how web standards like JavaScript lend themselves as tools. Experienced game programmers who are new to web development could also benefit, too.

## Present, accept, interpret, calculate, repeat

The goal of every video game is to **present** the user(s) with a situation, **accept** their input, **interpret** those signals into actions, and **calculate** a new situation resulting from those acts. Games are constantly looping through these stages, over and over, until some end condition occurs (such as winning, losing, or exiting to go to bed). Not surprisingly, this pattern corresponds to how a game engine is programmed.

The specifics depend on the game.

Some games drive this cycle by user input. Imagine that you are developing a _"find the differences between these two similar pictures"_-type game. These games **present** two images to the user; they **accept** their click (or touch); they **interpret** the input as a success, failure, pause, menu interaction, etc.; finally, they **calculate** an updated scene resulting from that input. The game loop is advanced by the user's input and sleeps until they provide it. This is more of a turn-based approach that doesn't demand a constant update every frame, only when the player reacts.

Other games demand control over each of the smallest possible individual timeslices. The same principles as above apply with a slight twist: each frame of animation progresses the cycle and any change in user input is caught at the first available turn. This once-per-frame model is implemented in something called a **main loop**. If your game loops based on time then this will be its authority that your simulations will adhere to.

But it might not need per-frame control. Your game loop might be similar to the _find the differences_ example and base itself on input events. It might require both input and simulated time. It might even loop based on something else entirely.

Modern JavaScript — as described in the next sections — thankfully makes it easy to develop an efficient, execute-once-per-frame main loop. Of course, your game will only be as optimized as you make it. If something looks like it should be attached to a more infrequent event then it is often a good idea to break it out of the main loop (but not always).

## Building a main loop in JavaScript

JavaScript works best with events and callback functions. Modern browsers strive to call methods right as they are needed and idle (or do their other tasks) in the gaps. It is an excellent idea to attach your code to the moments that are appropriate for them. Think about whether your function really needs to be called on a strict interval of time, every frame, or only after something else happens. Being more specific with the browser about when your function needs to be called allows the browser to optimize when it is called. Also, it will probably make your job easier.

Some code needs to be run frame-by-frame so why attach that function to anything other than the browser's redraw schedule? On the Web, {{ domxref("window.requestAnimationFrame()") }} will be the foundation of most well-programmed per-frame main loops. A callback function must be passed in to it when it is called. That callback function will be executed at a suitable time before the next repaint. Here is an example of a simple main loop:

```js
window.main = () => {
  window.requestAnimationFrame(main);

  // Whatever your main loop needs to do
};

main(); // Start the cycle
```

> [!NOTE]
> In each of the `main()` methods discussed here, we schedule a new `requestAnimationFrame` before performing our loop contents. That is not by accident and it is considered best practice. Calling the next `requestAnimationFrame` early ensures the browser receives it on time to plan accordingly even if your current frame misses its VSync window.

The above chunk of code has two statements. The first statement creates a function as a global variable called `main()`. This function does some work and also tells the browser to call itself next frame with `window.requestAnimationFrame()`. The second statement calls the `main()` function, defined in the first statement. Because `main()` is called once in the second statement and every call of it places itself in the queue of things to do next frame, `main()` is synchronized to your frame rate.

Of course this loop is not perfect. Before we discuss ways to change it, let us discuss what it already does well.

Timing the main loop to when the browser paints to the display allows you to run your loop as frequently as the browser wants to paint. You are given control over each frame of animation. It is also very simple because `main()` is the only function getting looped. A First-Person Shooter (or a similar game) presents a new scene once every frame. You cannot really get more smooth and responsive than that.

But do not immediately assume animations require frame-by-frame control. Simple animations can be easily performed, even GPU-accelerated, with CSS animations and other tools included in the browser. There are a lot of them and they will make your life easier.

## Building a better main loop in JavaScript

There are two obvious issues with our previous main loop: `main()` pollutes the {{ domxref("window") }} object (where all global variables are stored) and the example code did not leave us with a way to _stop_ the loop unless the whole tab is closed or refreshed. For the first issue, if you want the main loop to just run and you do not need easy (direct) access to it, you could create it as an Immediately-Invoked Function Expression (IIFE).

<!-- prettier-ignore-start -->
```js
/*
 * Starting with the semicolon is in case whatever line of code above this example
 * relied on automatic semicolon insertion (ASI). The browser could accidentally
 * think this whole example continues from the previous line. The leading semicolon
 * marks the beginning of our new line if the previous one was not empty or terminated.
 */

;(() => {
  function main() {
    window.requestAnimationFrame(main);

    // Your main loop contents
  }

  main(); // Start the cycle
})();
```
<!-- prettier-ignore-end -->

When the browser comes across this IIFE, it will define your main loop and immediately queue it for the next frame. It will not be attached to any object and `main` (or `main()` for methods) will be a valid unused name in the rest of the application, free to be defined as something else.

> [!NOTE]
> In practice, it is more common to prevent the next `requestAnimationFrame()` with an if-statement, rather than calling `cancelAnimationFrame()`.

For the second issue, stopping the main loop, you will need to cancel the call to `main()` with {{ domxref("window.cancelAnimationFrame()") }}. You will need to pass `cancelAnimationFrame()` the ID token given by `requestAnimationFrame()` when it was last called. Let us assume that your game's functions and variables are built on a namespace that you called `MyGame`. Expanding our last example, the main loop would now look like:

<!-- prettier-ignore-start -->
```js
/*
 * Starting with the semicolon is in case whatever line of code above this example
 * relied on automatic semicolon insertion (ASI). The browser could accidentally
 * think this whole example continues from the previous line. The leading semicolon
 * marks the beginning of our new line if the previous one was not empty or terminated.
 *
 * Let us also assume that MyGame is previously defined.
 */

;(() => {
  function main() {
    MyGame.stopMain = window.requestAnimationFrame(main);

    // Your main loop contents
  }

  main(); // Start the cycle
})();
```
<!-- prettier-ignore-end -->

We now have a variable declared in our `MyGame` namespace, which we call `stopMain`, that contains the ID returned from our main loop's most recent call to `requestAnimationFrame()`. At any point, we can stop the main loop by telling the browser to cancel the request that corresponds to our token.

```js
window.cancelAnimationFrame(MyGame.stopMain);
```

The key to programming a main loop, in JavaScript, is to attach it to whatever event should be driving your action and pay attention to how the different systems involved interplay. You may have multiple components driven by multiple different types of events. This feels like unnecessary complexity but it might just be good optimization (not necessarily, of course). The problem is that you are not programming a typical main loop. In JavaScript, you are using the browser's main loop and you are trying to do so effectively.

## Building a more optimized main loop in JavaScript

Ultimately, in JavaScript, the browser is running its own main loop and your code exists in some of its stages. The above sections describe main loops which try not to wrestle away control from the browser. These main methods attach themselves to `window.requestAnimationFrame()`, which asks the browser for control over the upcoming frame. It is up to the browser how to relate these requests to their main loop. The [W3C spec for requestAnimationFrame](https://www.w3.org/TR/animation-timing/) does not really define exactly when the browsers must perform the requestAnimationFrame callbacks. This can be a benefit because it leaves browser vendors free to experiment with the solutions that they feel are best and tweak it over time.

Modern versions of Firefox and Google Chrome (and probably others) _attempt_ to connect `requestAnimationFrame` callbacks to their main thread at the very beginning of a frame's timeslice. The browser's main thread thus _tries_ to look like the following:

1. Start a new frame (while the previous frame is handled by the display).
2. Go through the list of `requestAnimationFrame` callbacks and invoke them.
3. Perform garbage collection and other per-frame tasks when the above callbacks stop controlling the main thread.
4. Sleep (unless an event interrupts the browser's nap) until the monitor is ready for your image ([VSync](https://www.techopedia.com/definition/92/vertical-sync-vsync)) and repeat.

You can think about developing realtime applications as having a budget of time to do work. All of the above steps must take place every 16-and-a-half milliseconds to keep up with a 60 Hz display. Browsers invoke your code as early as possible to give it maximum computation time. Your main thread will often start workloads that are not even on the main thread (such as rasterization or shaders in WebGL). Long calculations can be performed on a Web Worker or a GPU at the same time as the browser uses its main thread to manage garbage collection, its other tasks, or handle asynchronous events.

While we are on the topic of budgeting time, many web browsers have a tool called _High Resolution Time_. The {{jsxref("Date")}} object is no longer the recognized method for timing events because it is very imprecise and can be modified by the system clock. High Resolution Time, on the other hand, counts the number of milliseconds since `navigationStart` (when the previous document is unloaded). This value is returned as a decimal number accurate to a thousandth of a millisecond. It is known as a {{ domxref("DOMHighResTimeStamp") }} but, for all intents and purposes, consider it a floating point number.

> [!NOTE]
> Systems (hardware or software) that are not capable of microsecond accuracy are allowed to provide millisecond accuracy as a minimum. They should provide 0.001ms accuracy if they are capable of it, however.

This value is not too useful alone, since it is relative to a fairly uninteresting event, but it can be subtracted from another timestamp to accurately and precisely determine how much time elapsed between those two points. To acquire one of these timestamps, you can call `window.performance.now()` and store the result as a variable.

```js
const tNow = window.performance.now();
```

Back to the topic of the main loop. You will often want to know when your main function was invoked. Because this is common, `window.requestAnimationFrame()` always provides a `DOMHighResTimeStamp` to callbacks as an argument when they are executed. This leads to another enhancement to our previous main loops.

<!-- prettier-ignore-start -->
```js
/*
 * Starting with the semicolon is in case whatever line of code above this example
 * relied on automatic semicolon insertion (ASI). The browser could accidentally
 * think this whole example continues from the previous line. The leading semicolon
 * marks the beginning of our new line if the previous one was not empty or terminated.
 *
 * Let us also assume that MyGame is previously defined.
 */

;(() => {
  function main(tFrame) {
    MyGame.stopMain = window.requestAnimationFrame(main);

    // Your main loop contents
    // tFrame, from "function main(tFrame)", is now a DOMHighResTimeStamp provided by rAF.
  }

  main(); // Start the cycle
})();
```
<!-- prettier-ignore-end -->

Several other optimizations are possible and it really depends on what your game attempts to accomplish. Your game genre will obviously make a difference but it could even be more subtle than that. You could draw every pixel individually on a canvas or you could layer DOM elements (including multiple WebGL canvases with transparent backgrounds if you want) into a complex hierarchy. Each of these paths will lead to different opportunities and constraints.

## It is decision… time

You will need to make hard decisions about your main loop: how to simulate the accurate progress of time. If you demand per-frame control then you will need to determine how frequently your game will update and draw. You might even want update and draw to occur at different rates. You will also need to consider how gracefully your game will fail if the user's system cannot keep up with the workload. Let us start by assuming that you will handle user input and update the game state every time you draw. We will branch out later.

> [!NOTE]
> Changing how your main loop deals with time is a debugging nightmare, everywhere. Think about your needs carefully before working on your main loop.

### What most browser games should look like

If your game can hit the maximum refresh rate of any hardware you support then your job is fairly easy. You can update, render, and then do nothing until VSync.

<!-- prettier-ignore-start -->
```js
/*
 * Starting with the semicolon is in case whatever line of code above this example
 * relied on automatic semicolon insertion (ASI). The browser could accidentally
 * think this whole example continues from the previous line. The leading semicolon
 * marks the beginning of our new line if the previous one was not empty or terminated.
 *
 * Let us also assume that MyGame is previously defined.
 */

;(() => {
  function main(tFrame) {
    MyGame.stopMain = window.requestAnimationFrame(main);

    update(tFrame); // Call your update method. In our case, we give it rAF's timestamp.
    render();
  }

  main(); // Start the cycle
})();
```
<!-- prettier-ignore-end -->

If the maximum refresh rate cannot be reached, quality settings could be adjusted to stay under your time budget. The most famous example of this concept is the game from id Software, RAGE. This game removed control from the user in order to keep its calculation time at roughly 16ms (or roughly 60fps). If computation took too long then rendered resolution would decrease, textures and other assets would fail to load or draw, and so forth. This (non-web) case study made a few assumptions and tradeoffs:

- Each frame of animation accounts for user input.
- No frame needs to be extrapolated (guessed) because each draw has its own update.
- Simulation systems can basically assume that each full update is \~16ms apart.
- Giving the user control over quality settings would be a nightmare.
- Different monitors input at different rates: 30 FPS, 75 FPS, 100 FPS, 120 FPS, 144 FPS, etc.
- Systems that are unable to keep up with 60 FPS lose visual quality to keep the game running at optimal speed (eventually it outright fails, if quality becomes too low.)

### Other ways to handle variable refresh rate needs

Other methods of tackling the problem exist.

One common technique is to update the simulation at a constant frequency and then draw as much (or as little) of the actual frames as possible. The update method can continue looping without care about what the user sees. The draw method can view the last update and when it happened. Since draw knows when it represents, and the simulation time for the last update, it can predict a plausible frame to draw for the user. It does not matter whether this is more frequent than the official update loop (or even less frequent). The update method sets checkpoints and, as frequently as the system allows, the render method draws instants of time around them. There are many ways to separate the update method in web standards:

- Draw on `requestAnimationFrame()` and update on a {{domxref("Window.setInterval", "setInterval()")}} or {{domxref("Window.setTimeout", "setTimeout()")}}.

  - This uses processor time even when unfocused or minimized, hogs the main thread, and is probably an artifact of traditional game loops (but it is simple.)

- Draw on `requestAnimationFrame()` and update on a {{domxref("WorkerGlobalScope.setInterval", "setInterval()")}} or {{domxref("WorkerGlobalScope.setTimeout", "setTimeout()")}} in a [Web Worker](/en-US/docs/Web/API/Web_Workers_API/Using_web_workers).

  - This is the same as above, except update does not hog the main thread (nor does the main thread hog it). This is a more complex solution, and might be too much overhead for simple updates.

- Draw on `requestAnimationFrame()` and use it to poke a Web Worker containing the update method with the number of ticks to compute, if any.

  - This sleeps until `requestAnimationFrame()` is called and does not pollute the main thread, plus you are not relying on old-fashioned methods. Again, this is a bit more complex than the previous two options, and _starting_ each update will be blocked until the browser decides to fire rAF callbacks.

Each of these methods have similar tradeoffs:

- Users can skip rendering frames or interpolate extra ones depending on their performance.
- You can count on all users updating non-cosmetic variables at the same constant frequency minus hiccups.
- Much more complicated to program than the basic loops we saw earlier.
- User input is completely ignored until the next update (even if the user has a fast device).
- The mandatory interpolation has a performance penalty.

A separate update and draw method could look like the following example. For the sake of demonstration, the example is based on the third bullet point, just without using Web Workers for readability (and, let's be honest, writability).

> [!WARNING]
> This example, specifically, is in need of technical review.

<!-- prettier-ignore-start -->
```js
/*
 * Starting with the semicolon is in case whatever line of code above this example
 * relied on automatic semicolon insertion (ASI). The browser could accidentally
 * think this whole example continues from the previous line. The leading semicolon
 * marks the beginning of our new line if the previous one was not empty or terminated.
 *
 * Let us also assume that MyGame is previously defined.
 *
 * MyGame.lastRender keeps track of the last provided requestAnimationFrame timestamp.
 * MyGame.lastTick keeps track of the last update time. Always increments by tickLength.
 * MyGame.tickLength is how frequently the game state updates. It is 20 Hz (50ms) here.
 *
 * timeSinceTick is the time between requestAnimationFrame callback and last update.
 * numTicks is how many updates should have happened between these two rendered frames.
 *
 * render() is passed tFrame because it is assumed that the render method will calculate
 *          how long it has been since the most recently passed update tick for
 *          extrapolation (purely cosmetic for fast devices). It draws the scene.
 *
 * update() calculates the game state as of a given point in time. It should always
 *          increment by tickLength. It is the authority for game state. It is passed
 *          the DOMHighResTimeStamp for the time it represents (which, again, is always
 *          last update + MyGame.tickLength unless a pause feature is added, etc.)
 *
 * setInitialState() Performs whatever tasks are leftover before the main loop must run.
 *                   It is just a generic example function that you might have added.
 */

;(() => {
  function main(tFrame) {
    MyGame.stopMain = window.requestAnimationFrame(main);
    const nextTick = MyGame.lastTick + MyGame.tickLength;
    let numTicks = 0;

    // If tFrame < nextTick then 0 ticks need to be updated (0 is default for numTicks).
    // If tFrame = nextTick then 1 tick needs to be updated (and so forth).
    // Note: As we mention in summary, you should keep track of how large numTicks is.
    // If it is large, then either your game was asleep, or the machine cannot keep up.
    if (tFrame > nextTick) {
      const timeSinceTick = tFrame - MyGame.lastTick;
      numTicks = Math.floor(timeSinceTick / MyGame.tickLength);
    }

    queueUpdates(numTicks);
    render(tFrame);
    MyGame.lastRender = tFrame;
  }

  function queueUpdates(numTicks) {
    for (let i = 0; i < numTicks; i++) {
      MyGame.lastTick += MyGame.tickLength; // Now lastTick is this tick.
      update(MyGame.lastTick);
    }
  }

  MyGame.lastTick = performance.now();
  MyGame.lastRender = MyGame.lastTick; // Pretend the first draw was on first update.
  MyGame.tickLength = 50; // This sets your simulation to run at 20Hz (50ms)

  setInitialState();
  main(performance.now()); // Start the cycle
})();
```
<!-- prettier-ignore-end -->

Another alternative is to do certain things less often. If a portion of your update loop is difficult to compute but insensitive to time, you might consider scaling back its frequency and, ideally, spreading it out into chunks throughout that lengthened period. An implicit example of this was found over at The Artillery Blog for Artillery Games, where they [adjust their rate of garbage generation](https://web.archive.org/web/20161021030645/http://blog.artillery.com/2012/10/browser-garbage-collection-and-framerate.html) to optimize garbage collection. Obviously, cleaning up resources is not time sensitive (especially if tidying is more disruptive than the garbage itself).

This may also apply to some of your own tasks. Those are good candidates to throttle when available resources become a concern.

## Summary

I want to be clear that any of the above, or none of them, could be best for your game. The correct decision entirely depends on the trade-offs that you are willing (and unwilling) to make. The concern is mostly with switching to another option. Fortunately, I do not have any experience with this, but I have heard it is an excruciating game of Whack-a-Mole.

An important thing to remember for managed platforms, like the web, is that your loop may stop execution for significant periods of time. This could occur when the user unselects your tab and the browser sleeps (or slows) its `requestAnimationFrame` callback interval. You have many ways to deal with this situation and this could depend on whether your game is single player or multiplayer. Some choices are:

- Consider the gap "a pause" and skip the time.

  - You can probably see how this is problematic for most multiplayer games.

- You can simulate the gap to catch up.

  - This can be a problem for long drops and/or complex updates.

- You can recover the game state from a peer or the server.

  - This is ineffective if your peers or server are out-of-date too, or they don't exist because the game is single player and doesn't have a server.

Once your main loop has been developed and you have decided on a set of assumptions and tradeoffs which suit your game, it is now just a matter of using your decisions to calculate any applicable physics, AI, sounds, network synchronization, and whatever else your game may require.

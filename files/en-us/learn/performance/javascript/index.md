---
title: JavaScript performance optimization
slug: Learn/Performance/JavaScript
page-type: learn-module-chapter
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Performance/video", "Learn/Performance/HTML", "Learn/Performance")}}

It is very important to consider how you are using JavaScript on your websites and think about how to mitigate any performance issues that it might be causing. While images and video account for over 70% of the bytes downloaded for the average website, byte per byte, JavaScript has a greater potential for negative performance impact — it can significantly impact download times, rendering performance, and CPU and battery usage. This article introduces tips and techniques for optimizing JavaScript to enhance the performance of your website.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerequisites:</th>
      <td>
        Basic computer literacy,
        <a
          href="/en-US/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >basic software installed</a
        >, and basic knowledge of
        <a href="/en-US/docs/Learn/Getting_started_with_the_web"
          >client-side web technologies</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Objectives:</th>
      <td>
        To learn about the effects of JavaScript on web performance
        and how to mitigate or fix related issues.
      </td>
    </tr>
  </tbody>
</table>

## To optimize or not to optimize

The first question you should answer before starting to optimize your code is "what do I need to optimize?". Some of the tips and techniques discussed below are good practices that will benefit just about any web project, whereas some are only needed in certain situations. Trying to apply all these techniques everywhere is probably unnecessary, and may be a waste of your time. You should figure out what performance optimizations are actually needed in each project.

To do this, you need to [measure the performance](/en-US/docs/Learn/Performance/Measuring_performance) of your site. As the previous link shows, there are several different ways to measure performance, some involving sophisticated [performance APIs](/en-US/docs/Web/API/Performance_API). The best way to get started however, is to learn how to use tools such as built-in browser [network](/en-US/docs/Learn/Performance/Measuring_performance#network_monitor_tools) and [performance](/en-US/docs/Learn/Performance/Measuring_performance#performance_monitor_tools) tools, to see what parts of the page load are taking a long time and need optimizing.

## Optimizing JavaScript downloads

The most performant, least blocking JavaScript you can use is JavaScript that you don't use at all. You should use as little JavaScript as possible. Some tips to bear in mind:

- **You don't always need a framework**: You might be familiar with using a [JavaScript framework](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks). If you are experienced and confident with using this framework, and like all of the tooling it provides, then it might be your go-to tool for building most projects. However, frameworks are JavaScript-heavy. If you are creating a fairly static experience with few JavaScript requirements, you probably don't need that framework. You might be able to implement what you need using a few lines of standard JavaScript.
- **Consider a simpler solution**: You might have a flashy, interesting solution to implement, but consider whether your users will appreciate it. Would they prefer something simpler?
- **Remove unused code:** This may sound obvious, but it is surprising how many developers forget to clean up unused functionality that was added during the development process. You need to be careful and deliberate about what is added and removed. All script gets parsed, whether it is used or not; therefore, a quick win to speed up downloads would be to get rid of any functionality not being used. Consider also that often you will only use a small amount of the functionality available in a framework. Is it possible to create a custom build of the framework that only contains the part that you need?
- **Consider built-in browser features**: It might be that you can use a feature the browser already has, rather than creating your own via JavaScript. For example:
  - Use [built-in client-side form validation](/en-US/docs/Learn/Forms/Form_validation#using_built-in_form_validation).
  - Use the browser's own {{htmlelement("video")}} player.
  - Use [CSS animations](/en-US/docs/Web/CSS/CSS_animations/Using_CSS_animations) instead of a JavaScript animation library (see also [Handling animations](#handling_animations)).

You should also split your JavaScript into multiple files representing critical and non-critical parts. [JavaScript modules](/en-US/docs/Web/JavaScript/Guide/Modules) allow you to do this more efficiently than just using separate external JavaScript files.

Then you can optimize these smaller files. [Minification](/en-US/docs/Glossary/Minification) reduces the number of characters in your file, thereby reducing the number of bytes or weight of your JavaScript. [Gzipping](/en-US/docs/Glossary/GZip_compression) compresses the file further and should be used even if you don't minify your code. [Brotli](/en-US/docs/Glossary/Brotli_compression) is similar to Gzip, but generally outperforms Gzip compression.

You can split and optimize your code manually, but often a module bundler like [Webpack](https://webpack.js.org/) will do a better job of this.

## Handling parsing and execution

Before looking at the tips contained in this section, it is important to talk about _where_ in the process of browser page rendering JavaScript is handled. When a web page is loaded:

1. The HTML is generally parsed first, in the order in which it appears on the page.
2. Whenever CSS is encountered, it is parsed to understand the styles that need to be applied to the page. During this time, linked assets such as images and web fonts start to be fetched.
3. Whenever JavaScript is encountered, the browser parses, evaluates, and runs it against the page.
4. Slightly later on, the browser works out how each HTML element should be styled, given the CSS applied to it.
5. The styled result is then painted to the screen.

> **Note:** This is a very simplified account of what happens, but it does give you an idea.

The key step here is Step 3. By default, JavaScript parsing and execution are render-blocking. This means that the browser blocks the parsing of any HTML that appears after the JavaScript is encountered, until the script has been handled. As a result, styling and painting are blocked too. This means that you need to think carefully not only about what you are downloading, but also about when and how that code is being executed.

The next few sections provide useful techniques for optimizing the parsing and execution of your JavaScript.

## Loading critical assets as soon as possible

If a script is really important and you are concerned that it is affecting performance by not being loaded quickly enough, you can load it inside the {{htmlelement("head")}} of the document:

```html
<head>
  ...
  <script src="main.js"></script>
  ...
</head>
```

This works OK, but is render-blocking. A better strategy is to use [`rel="preload"`](/en-US/docs/Web/HTML/Attributes/rel/preload) to create a preloader for critical JavaScript:

```html
<head>
  ...
  <!-- Preload a JavaScript file -->
  <link rel="preload" href="important-js.js" as="script" />
  <!-- Preload a JavaScript module -->
  <link rel="modulepreload" href="important-module.js" />
  ...
</head>
```

The preload {{htmlelement("link")}} fetches the JavaScript as soon as possible, without blocking rendering. You can then use it wherever you want in your page:

```html
<!-- Include this wherever makes sense -->
<script src="important-js.js"></script>
```

or inside your script, in the case of a JavaScript module:

```js
import { function } from "important-module.js";
```

> **Note:** Preloading does not guarantee that the script will be loaded by the time you include it, but it does mean that it will start being downloaded sooner. Render-blocking time will still be shortened, even if it is not completely removed.

## Deferring execution of non-critical JavaScript

On the other hand, you should aim to defer parsing and execution of non-critical JavaScript to later on, when it is needed. Loading it all up-front blocks rendering unnecessarily.

First of all, you can add the `async` attribute to your `<script>` elements:

```html
<head>
  ...
  <script async src="main.js"></script>
  ...
</head>
```

This causes the script to be fetched in parallel with the DOM parsing, so it will be ready at the same time and won't block rendering.

> **Note:** There is another attribute, `defer`, which causes the script to be executed after the document has been parsed, but before firing the [`DOMContentLoaded`](/en-US/docs/Web/API/Document/DOMContentLoaded_event) event. This has a similar effect to `async`.

You could also just not load the JavaScript at all until an event occurs when it is needed. This could be done via DOM scripting, for example:

```js
const scriptElem = document.createElement("script");
scriptElem.src = "index.js";
scriptElem.addEventListener("load", () => {
  // Run a function contained within index.js once it has definitely loaded
  init();
});
document.head.append(scriptElem);
```

JavaScript modules can be dynamically loaded using the {{jsxref("operators/import", "import()")}} function:

```js
import("./modules/myModule.js").then((module) => {
  // Do something with the module
});
```

## Breaking down long tasks

When the browser runs your JavaScript, it will organize the script into tasks that are run sequentially, such as making fetch requests, driving user interactions and input through event handlers, running JavaScript-driven animation, and so on.

Most of this happens on the main thread, with exceptions including JavaScript that runs in [Web Workers](/en-US/docs/Web/API/Web_Workers_API/Using_web_workers). The main thread can run only one task at a time.

When a single task takes longer than 50 ms to run, it is classified as a long task. If the user attempts to interact with the page or an important UI update is requested while a long task is running, their experience will be affected. An expected response or visual update will be delayed, resulting in the UI appearing sluggish or unresponsive.

To mitigate this issue, you need to break down long tasks into smaller tasks. This gives the browser more chances to perform vital user interaction handling or UI rendering updates — the browser can potentially do them between each smaller task, rather than only before or after the long task. In your JavaScript, you might do this by breaking your code into separate functions. This also makes sense for several other reasons, such as easier maintenance, debugging, and writing tests.

For example:

```js
function main() {
  a();
  b();
  c();
  d();
  e();
}
```

However, this kind of structure doesn't help with main thread blocking. Since all the five functions are being run inside one main function, the browser runs them all as a single long task.

To handle this, we tend to run a "yield" function periodically to get the code to _yield to the main thread_. This means that our code is split into multiple tasks, between the execution of which the browser is given the opportunity to handle high-priority tasks such as updating the UI. A common pattern for this function uses {{domxref("setTimeout()")}} to postpone execution into a separate task:

```js
function yield() {
  return new Promise((resolve) => {
    setTimeout(resolve, 0);
  });
}
```

This can be used inside a task runner pattern like so, to yield to the main thread after each task has been run:

```js
async function main() {
  // Create an array of functions to run
  const tasks = [a, b, c, d, e];

  // Loop over the tasks
  while (tasks.length > 0) {
    // Shift the first task off the tasks array
    const task = tasks.shift();

    // Run the task
    task();

    // Yield to the main thread
    await yield();
  }
}
```

To improve this further, we can use {{domxref("Scheduling.isInputPending", "navigator.scheduling.isInputPending()")}} to run the `yield()` function only when the user is attempting to interact with the page:

```js
async function main() {
  // Create an array of functions to run
  const tasks = [a, b, c, d, e];

  while (tasks.length > 0) {
    // Yield to a pending user input
    if (navigator.scheduling.isInputPending()) {
      await yield();
    } else {
      // Shift the first task off the tasks array
      const task = tasks.shift();

      // Run the task
      task();
    }
  }
}
```

This allows you to avoid blocking the main thread when the user is actively interacting with the page, potentially providing a smoother user experience. However, by only yielding when necessary, we can continue running the current task when there are no user inputs to process. This also avoids tasks being placed at the back of the queue behind other non-essential browser-initiated tasks that were scheduled after the current one.

## Handling JavaScript animations

Animations can improve perceived performance, making interfaces feel snappier and making users feel like progress is being made when they are waiting for a page to load (loading spinners, for example). However, larger animations and a higher number of animations will naturally require more processing power to handle, which can degrade performance.

The most obvious piece of animation advice is to use less animations — cut out any non-essential animations, or consider giving your users a preference they can set to turn off animations, for example if they are using a low-powered device or a mobile device with limited battery power.

For essential DOM animations, you are advised to use [CSS animations](/en-US/docs/Web/CSS/CSS_animations/Using_CSS_animations) where possible, rather than JavaScript animations (the [Web Animations API](/en-US/docs/Web/API/Web_Animations_API) provides a way to directly hook into CSS animations using JavaScript). Using the browser to directly perform DOM animations rather than manipulating inline styles using JavaScript is much faster and more efficient. See also [CSS performance optimization > Handling animations](/en-US/docs/Learn/Performance/CSS#handling_animations).

For animations that can't be handled in JavaScript, for example, animating an HTML {{htmlelement("canvas")}}, you are advised to use {{domxref("Window.requestAnimationFrame()")}} rather than older options such as {{domxref("setInterval()")}}. The `requestAnimationFrame()` method is specially designed for handling animation frames efficiently and consistently, for a smooth user experience. The basic pattern looks like this:

```js
function loop() {
  // Clear the camvas before drawing the next frame of the animation
  ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
  ctx.fillRect(0, 0, width, height);

  // Draw objects on the canvas and update their positioning data
  // ready for the next frame
  for (const ball of balls) {
    ball.draw();
    ball.update();
  }

  // Call requestAnimationFrame to run the loop() function again
  // at the right time to keep the animation smooth
  requestAnimationFrame(loop);
}

// Call the loop() function once to set the animation running
loop();
```

You can find a nice introduction to canvas animations at [Drawing graphics > Animations](/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Drawing_graphics#animations), and a more in-depth example at [Object building practice](/en-US/docs/Learn/JavaScript/Objects/Object_building_practice). You can also find a full set of canvas tutorials at [Canvas tutorial](/en-US/docs/Web/API/Canvas_API/Tutorial).

## Optimizing event performance

Events can be expensive for the browser to track and handle, especially when you are running an event continuously. For example, you might be tracking the position of the mouse using the [`mousemove`](/en-US/docs/Web/API/Element/mousemove_event) event to check whether it is still inside a certain area of the page:

```js
function handleMouseMove() {
  // Do stuff while mouse pointer is inside elem
}

elem.addEventListener("mousemove", handleMouseMove);
```

You might be running a `<canvas>` game in your page. While the mouse is inside the canvas, you will want to constantly check for mouse movement and cursor position and update the game state — including the score, the time, the position of all the sprites, collision detection information, etc. Once the game is over, you will no longer need to do all that, and in fact, it will be a waste of processing power to keeping listening for that event.

It is, therefore, a good idea to remove event listeners that are no longer needed. This can be done using {{domxref("EventTarget.removeEventListener", "removeEventListener()")}}:

```js
elem.removeEventListener("mousemove", handleMouseMove);
```

Another tip is to use event delegation wherever possible. When you have some code to run in response to a user interacting with any one of a large number of child elements, you can set an event listener on their parent. Events fired on any child element will bubble up to their parent, so you don't need to set the event listener on each child individually. Less event listeners to keep track of means better performance.

See [Event delegation](/en-US/docs/Learn/JavaScript/Building_blocks/Events#event_delegation) for more details and a useful example.

## Tips for writing more efficient code

There are several general best practices that will make your code run more efficiently.

- **Reduce DOM manipulation**: Accessing and updating the DOM is computationally expensive, so you should minimize the amount that your JavaScript does, especially when performing constant DOM animation (see [Handling JavaScript animations](#handling_javascript_animations) above).
- **Batch DOM changes**: For essential DOM changes, you should batch them into groups that get done together, rather than just firing off each individual change as it occurs. This can reduce the amount of work the browser is doing in real terms, but also improve perceived performance. It can make the UI look smoother to get several updates out of the way in one go, rather than constantly making small updates. A useful tip here is — when you have a large chunk of HTML to add to the page, build the entire fragment first (typically inside a {{domxref("DocumentFragment")}}) and then append it all to the DOM in one go, rather than appending each item separately.
- **Simplify your HTML**: The simpler your DOM tree is, the faster it can be accessed and manipulated with JavaScript. Think carefully about what your UI needs, and remove unnecessary cruft.
- **Reduce the amount of looped code**: Loops are expensive, so reduce the amount of loop usage in your code wherever possible. In cases where loops are unavoidable:

  - Avoid running the full loop when it is unnecessary, using {{jsxref("Statements/break", "break")}} or {{jsxref("Statements/continue", "continue")}} statements as appropriate. For example, if you are searching arrays for a specific name, you should break out of the loop once the name is found; there is no need to run further loop iterations:

    ```js
    function processGroup(array) {
      const toFind = "Bob";
      for (let i = 0; i < array.length - 1; i++) {
        if (array[i] === toFind) {
          processMatchingArray(array);
          break;
        }
      }
    }
    ```

  - Do work that is only needed once outside the loop. This may sound a bit obvious, but it is easy to overlook. Take the following snippet, which fetches a JSON object containing data to be processed in some way. In this case the {{domxref("fetch()")}} operation is being done on every iteration of the loop, which is a waste of computing power. Lines 3 and 4 could be moved outside the loop, so the network fetch is only being done once.

    ```js
    async function returnResults(number) {
      for (let i = 0; i < number; i++) {
        const response = await fetch(`/results?number=${number}`);
        const results = await response.json();
        processResult(results[i]);
      }
    }
    ```

- **Run computation off the main thread**: Earlier on we talked about how JavaScript generally runs tasks on the main thread, and how long operations can block the main thread, potentially leading to bad UI performance. We also showed how to break long tasks up into smaller tasks, mitigating this problem. Another way to handle such problems is to move tasks off the main thread altogether. There are a few ways to achieve this:

  - Use asynchronous code: [Asynchronous JavaScript](/en-US/docs/Learn/JavaScript/Asynchronous/Introducing) is basically JavaScript that does not block the main thread. Asynchronous APIs tend to handle operations such as fetching resources from the network, accessing a file on the local file system, or opening a stream to a user's web cam. Because those operations could take a long time, it would be bad to just block the main thread while we wait for them to complete. Instead, the browser executes those functions, keeps the main thread running subsequent code, and those functions will return results once they are available _at some point in the future_. Modern asynchronous APIs are {{jsxref("Promise")}}-based, which is a JavaScript language feature designed for handling asynchronous operations. It is possible to [write your own Promise-based functions](/en-US/docs/Learn/JavaScript/Asynchronous/Implementing_a_promise-based_API) if you have functionality that would benefit from being run asynchronously.
  - Run computation in web workers: [Web Workers](/en-US/docs/Web/API/Web_Workers_API/Using_web_workers) are a mechanism allowing you to open a separate thread to run a chunk of JavaScript in, so that it won't block the main thread. Workers do have some major restrictions, the biggest being that you can't do any DOM scripting inside a worker. You can do most other things, and workers can send and receive messages to and from the main thread. The main use case for workers is if you have a lot of computation to do, and you don't want it to block the main thread. Do that computation in a worker, wait for the result, and send it back to the main thread when it is ready.
  - **Use WebGPU**: [WebGPU](/en-US/docs/Web/API/WebGPU_API) is a browser API that allows web developers to use the underlying system's GPU (Graphics Processing Unit) to carry out high-performance computations and draw complex images that can be rendered in the browser. It is fairly complex, but it can provide even better performance benefits than web workers.

## See also

- [Optimize long tasks](https://web.dev/optimize-long-tasks/) on web.dev (2022)
- [Canvas tutorial](/en-US/docs/Web/API/Canvas_API/Tutorial)

{{PreviousMenuNext("Learn/Performance/video", "Learn/Performance/HTML", "Learn/Performance")}}

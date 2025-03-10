---
title: Background Tasks API
slug: Web/API/Background_Tasks_API
page-type: web-api-overview
browser-compat: api.Window.requestIdleCallback
---

{{DefaultAPISidebar("Background Tasks")}}

The **Cooperative Scheduling of Background Tasks API** (also referred to as the Background Tasks API or the `requestIdleCallback()` API) provides the ability to queue tasks to be executed automatically by the user agent when it determines that there is free time to do so.

> [!NOTE]
> This API is _not available_ in [Web Workers](/en-US/docs/Web/API/Web_Workers_API).

## Concepts and usage

The main thread of a Web browser is centered around its event loop. This code draws any pending updates to the {{domxref("Document")}} currently being displayed, runs any JavaScript code the page needs to run, accepts events from input devices, and dispatches those events to the elements that should receive them. In addition, the event loop handles interactions with the operating system, updates to the browser's own user interface, and so forth. It's an extremely busy chunk of code, and your main JavaScript code may run right inside this thread along with all of this. Certainly most if not all code that is capable of making changes to the DOM is running in the main thread, since it's common for user interface changes to only be available to the main thread.

Because event handling and screen updates are two of the most obvious ways users notice performance issues, it's important for your code to be a good citizen of the Web and help to prevent stalls in the execution of the event loop. In the past, there's been no way to do this reliably other than by writing code that's as efficient as possible and by offloading as much work as possible to [workers](/en-US/docs/Web/API/Web_Workers_API). {{domxref("Window.requestIdleCallback()")}} makes it possible to become actively engaged in helping to ensure that the browser's event loop runs smoothly, by allowing the browser to tell your code how much time it can safely use without causing the system to lag. If you stay within the limit given, you can make the user's experience much better.

### Getting the most out of idle callbacks

Because idle callbacks are intended to give your code a way to cooperate with the event loop to ensure that the system is utilized to its full potential without over-tasking it, resulting in lag or other performance problems, you should be thoughtful about how you go about using them.

- **Use idle callbacks for tasks which don't have high priority.** Because you don't know how many callbacks have been established, and you don't know how busy the user's system is, you don't know how often your callback will be run (unless you specify a `timeout`). There's no guarantee that every pass through the event loop (or even every screen update cycle) will include any idle callbacks being executed; if the event loop uses all available time, you're out of luck (again, unless you've used a `timeout`).
- **Idle callbacks should do their best not to overrun the time allotted.** While the browser, your code, and the Web in general will continue to run normally if you go over the specified time limit (even if you go _way_ over it), the time restriction is intended to ensure that you leave the system enough time to finish the current pass through the event loop and get on to the next one without causing other code to stutter or animation effects to lag. Currently, {{domxref("IdleDeadline.timeRemaining", "timeRemaining()")}} has an upper limit of 50 milliseconds, but in reality you will often have less time than that, since the event loop may already be eating into that time on complex sites, with browser extensions needing processor time, and so forth.
- **Avoid making changes to the DOM within your idle callback.** By the time your callback is run, the current frame has already finished drawing, and all layout updates and computations have been completed. If you make changes that affect layout, you may force a situation in which the browser has to stop and do recalculations that would otherwise be unnecessary. If your callback needs to change the DOM, it should use {{domxref("Window.requestAnimationFrame()")}} to schedule that.
- **Avoid tasks whose run time can't be predicted.** Your idle callback should avoid doing anything that could take an unpredictable amount of time. For example, anything which might affect layout should be avoided. You should also avoid resolving or rejecting {{jsxref("Promise")}}s, since that would invoke the handler for that promise's resolution or rejection as soon as your callback returns.
- **Use timeouts when you need to, but only when you need to.** Using timeouts can ensure that your code runs in a timely manner, but it can also allow you to cause lag or animation stutters by mandating that the browser call you when there's not enough time left for you to run without disrupting performance.

## Interfaces

The Background Tasks API adds only one new interface:

- {{domxref("IdleDeadline")}}
  - : An object of this type is passed to the idle callback to provide an estimate of how long the idle period is expected to last, as well as whether or not the callback is running because its timeout period has expired.

The {{domxref("Window")}} interface is also augmented by this API to offer the new {{domxref("window.requestIdleCallback", "requestIdleCallback()")}} and {{domxref("window.cancelIdleCallback", "cancelIdleCallback()")}} methods.

## Example

In this example, we'll take a look at how you can use {{domxref("window.requestIdleCallback", "requestIdleCallback()")}} to run time-consuming, low-priority tasks during time the browser would otherwise be idle. In addition, this example demonstrates how to schedule updates to the document content using {{domxref("window.requestAnimationFrame", "requestAnimationFrame()")}}.

Below you'll find only the HTML and JavaScript for this example. The CSS is not shown, since it's not particularly crucial to understanding this functionality.

### HTML

In order to be oriented about what we're trying to accomplish, let's have a look at the HTML. This establishes a box (`id="container"`) that's used to present the progress of an operation (because you never know how long decoding "quantum filament tachyon emissions" will take, after all) as well as a second main box (`id="logBox"`), which is used to display textual output.

```html
<p>
  Demonstration of using cooperatively scheduled background tasks using the
  <code>requestIdleCallback()</code> method.
</p>

<div id="container">
  <div class="label">Decoding quantum filament tachyon emissions…</div>

  <progress id="progress" value="0"></progress>

  <button class="button" id="startButton">Start</button>

  <div class="label counter">
    Task <span id="currentTaskNumber">0</span> of
    <span id="totalTaskCount">0</span>
  </div>
</div>

<div id="logBox">
  <div class="logHeader">Log</div>
  <div id="log"></div>
</div>
```

The progress box uses a {{HTMLElement("progress")}} element to show the progress, along with a label with sections that are changed to present numeric information about the progress. In addition, there's a "Start" button (creatively given the ID "startButton"), which the user will use to start the data processing.

```css hidden
body {
  font-family: "Open Sans", "Lucida Grande", "Arial", sans-serif;
  font-size: 16px;
}

#logBox {
  margin-top: 16px;
  width: 400px;
  height: 500px;
  border-radius: 6px;
  border: 1px solid black;
  box-shadow: 4px 4px 2px black;
}

.logHeader {
  margin: 0;
  padding: 0 6px 4px;
  height: 22px;
  background-color: lightblue;
  border-bottom: 1px solid black;
  border-radius: 6px 6px 0 0;
}

#log {
  font:
    12px "Courier",
    monospace;
  padding: 6px;
  overflow: auto;
  overflow-y: scroll;
  width: 388px;
  height: 460px;
}

#container {
  width: 400px;
  padding: 6px;
  border-radius: 6px;
  border: 1px solid black;
  box-shadow: 4px 4px 2px black;
  display: block;
  overflow: auto;
}

.label {
  display: inline-block;
}

.counter {
  text-align: right;
  padding-top: 4px;
  float: right;
}

.button {
  padding-top: 2px;
  padding-bottom: 4px;
  width: 100px;
  display: inline-block;
  float: left;
  border: 1px solid black;
  cursor: pointer;
  text-align: center;
  margin-top: 0;
  color: white;
  background-color: darkgreen;
}

#progress {
  width: 100%;
  padding-top: 6px;
}
```

### JavaScript

Now that the document structure is defined, construct the JavaScript code that will do the work. The goal: to be able to add requests to call functions to a queue, with an idle callback that runs those functions whenever the system is idle for long enough a time to make progress.

#### Variable declarations

```js
const taskList = [];
let totalTaskCount = 0;
let currentTaskNumber = 0;
let taskHandle = null;
```

These variables are used to manage the list of tasks that are waiting to be performed, as well as status information about the task queue and its execution:

- `taskList` is an {{jsxref("Array")}} of objects, each representing one task waiting to be run.
- `totalTaskCount` is a counter of the number of tasks that have been added to the queue; it will only go up, never down. We use this to do the math to present progress as a percentage of total work to do.
- `currentTaskNumber` is used to track how many tasks have been processed so far.
- `taskHandle` is a reference to the task currently being processed.

```js
const totalTaskCountElem = document.getElementById("totalTaskCount");
const currentTaskNumberElem = document.getElementById("currentTaskNumber");
const progressBarElem = document.getElementById("progress");
const startButtonElem = document.getElementById("startButton");
const logElem = document.getElementById("log");
```

Next we have variables which reference the DOM elements we need to interact with. These elements are:

- `totalTaskCountElem` is the {{HTMLElement("span")}} we use to insert the total number of tasks created into the status display in the progress box.
- `currentTaskNumberElem` is the element used to display the number of tasks processed so far.
- `progressBarElem` is the {{HTMLElement("progress")}} element showing the percentage of the tasks processed so far.
- `startButtonElem` is the start button.
- `logElem` is the {{HTMLElement("div")}} we'll insert logged text messages into.

```js
let logFragment = null;
let statusRefreshScheduled = false;
```

Finally, we set up a couple of variables for other items:

- `logFragment` will be used to store a {{domxref("DocumentFragment")}} that's generated by our logging functions to create content to append to the log when the next animation frame is rendered.
- `statusRefreshScheduled` is used to track whether or not we've already scheduled an update of the status display box for the upcoming frame, so that we only do it once per frame

```js hidden
requestIdleCallback =
  requestIdleCallback ||
  ((handler) => {
    const startTime = Date.now();

    return setTimeout(() => {
      handler({
        didTimeout: false,
        timeRemaining() {
          return Math.max(0, 50.0 - (Date.now() - startTime));
        },
      });
    }, 1);
  });

cancelIdleCallback =
  cancelIdleCallback ||
  ((id) => {
    clearTimeout(id);
  });
```

#### Managing the task queue

Next, let's look at the way we manage the tasks that need to be performed. We're going to do this by creating a FIFO queue of tasks, which we'll run as time allows during the idle callback period.

##### Enqueueing tasks

First, we need a function that enqueues tasks for future execution. That function, `enqueueTask()`, looks like this:

```js
function enqueueTask(taskHandler, taskData) {
  taskList.push({
    handler: taskHandler,
    data: taskData,
  });

  totalTaskCount++;

  if (!taskHandle) {
    taskHandle = requestIdleCallback(runTaskQueue, { timeout: 1000 });
  }

  scheduleStatusRefresh();
}
```

`enqueueTask()` accepts as input two parameters:

- `taskHandler` is a function which will be called to handle the task.
- `taskData` is an object which is passed into the task handler as an input parameter, to allow the task to receive custom data.

To enqueue the task, we [push](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push) an object onto the `taskList` array; the object contains the `taskHandler` and `taskData` values under the names `handler` and `data`, respectively, then increment `totalTaskCount`, which reflects the total number of tasks which have ever been enqueued (we don't decrement it when tasks are removed from the queue).

Next, we check to see if we already have an idle callback created; if `taskHandle` is 0, we know there isn't an idle callback yet, so we call {{domxref("Window.requestIdleCallback", "requestIdleCallback()")}} to create one. It's configured to call a function called `runTaskQueue()`, which we'll look at shortly, and with a `timeout` of 1 second, so that it will be run at least once per second even if there isn't any actual idle time available.

##### Running tasks

Our idle callback handler, `runTaskQueue()`, gets called when the browser determines there's enough idle time available to let us do some work or our timeout of one second expires. This function's job is to run our enqueued tasks.

```js
function runTaskQueue(deadline) {
  while (
    (deadline.timeRemaining() > 0 || deadline.didTimeout) &&
    taskList.length
  ) {
    const task = taskList.shift();
    currentTaskNumber++;

    task.handler(task.data);
    scheduleStatusRefresh();
  }

  if (taskList.length) {
    taskHandle = requestIdleCallback(runTaskQueue, { timeout: 1000 });
  } else {
    taskHandle = 0;
  }
}
```

`runTaskQueue()`'s core is a loop which continues as long as there's time left (as determined by checking {{domxref("IdleDeadline.timeRemaining", "deadline.timeRemaining")}}) to be sure it's more than 0 or if the timeout limit was reached ({{domxref("IdleDeadline.didTimeout", "deadline.didTimeout")}} is true), and as long as there are tasks in the task list.

For each task in the queue that we have time to execute, we do the following:

1. We [remove the task object from the queue](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift).
2. We increment `currentTaskNumber` to track how many tasks we've executed.
3. We call the task's handler, `task.handler`, passing into it the task's data object (`task.data`).
4. We call a function, `scheduleStatusRefresh()`, to handle scheduling a screen update to reflect changes to our progress.

When time runs out, if there are still tasks left in the list, we call {{domxref("Window.requestIdleCallback", "requestIdleCallback()")}} again so that we can continue to process the tasks the next time there's idle time available. If the queue is empty, we set taskHandle to 0 to indicate that we don't have a callback scheduled. That way, we'll know to request a callback next time `enqueueTask()` is called.

#### Updating the status display

One thing we want to be able to do is update our document with log output and progress information. However, you can't safely change the DOM from within an idle callback. Instead, we'll use {{domxref("Window.requestAnimationFrame", "requestAnimationFrame()")}} to ask the browser to call us when it's safe to update the display.

##### Scheduling display updates

DOM changes are scheduled by calling the `scheduleStatusRefresh()` function.

```js
function scheduleStatusRefresh() {
  if (!statusRefreshScheduled) {
    requestAnimationFrame(updateDisplay);
    statusRefreshScheduled = true;
  }
}
```

This is a simple function. It checks to see if we've already scheduled a display refresh by checking the value of `statusRefreshScheduled`. If it's `false`, we call {{domxref("Window.requestAnimationFrame", "requestAnimationFrame()")}} to schedule a refresh, providing the `updateDisplay()` function to be called to handle that work.

##### Updating the display

The `updateDisplay()` function is responsible for drawing the contents of the progress box and the log. It's called by the browser when the DOM is in a safe condition for us to apply changes during the process of rendering the next frame.

```js
function updateDisplay() {
  const scrolledToEnd =
    logElem.scrollHeight - logElem.clientHeight <= logElem.scrollTop + 1;

  if (totalTaskCount) {
    if (progressBarElem.max !== totalTaskCount) {
      totalTaskCountElem.textContent = totalTaskCount;
      progressBarElem.max = totalTaskCount;
    }

    if (progressBarElem.value !== currentTaskNumber) {
      currentTaskNumberElem.textContent = currentTaskNumber;
      progressBarElem.value = currentTaskNumber;
    }
  }

  if (logFragment) {
    logElem.appendChild(logFragment);
    logFragment = null;
  }

  if (scrolledToEnd) {
    logElem.scrollTop = logElem.scrollHeight - logElem.clientHeight;
  }

  statusRefreshScheduled = false;
}
```

First, `scrolledToEnd` is set to `true` if the text in the log is scrolled to the bottom; otherwise it's set to `false`. We'll use that to determine if we should update the scroll position to ensure that the log stays at the end when we're done adding content to it.

Next, we update the progress and status information if any tasks have been enqueued.

1. If the current maximum value of the progress bar is different from the current total number of enqueued tasks (`totalTaskCount`), then we update the contents of the displayed total number of tasks (`totalTaskCountElem`) and the maximum value of the progress bar, so that it scales properly.
2. We do the same thing with the number of tasks processed so far; if `progressBarElem.value` is different from the task number currently being processed (`currentTaskNumber`), then we update the displayed value of the currently-being-processed task and the current value of the progress bar.

Then, if there's text waiting to be added to the log (that is, if `logFragment` isn't `null`), we append it to the log element using {{domxref("Node.appendChild", "Element.appendChild()")}} and set `logFragment` to `null` so we don't add it again.

If the log was scrolled to the end when we started, we make sure it still is. Then we set `statusRefreshScheduled` to `false` to indicate that we've handled the refresh and that it's safe to request a new one.

#### Adding text to the log

The `log()` function adds the specified text to the log. Since we don't know at the time `log()` is called whether or not it's safe to immediately touch the DOM, we will cache the log text until it's safe to update. Above, in the code for `updateDisplay()`, you can find the code that actually adds the logged text to the log element when the animation frame is being updated.

```js
function log(text) {
  if (!logFragment) {
    logFragment = document.createDocumentFragment();
  }

  const el = document.createElement("div");
  el.textContent = text;
  logFragment.appendChild(el);
}
```

First, we create a {{domxref("DocumentFragment")}} object named `logFragment` if one doesn't currently exist. This element is a pseudo-DOM into which we can insert elements without immediately changing the main DOM itself.

We then create a new {{HTMLElement("div")}} element and set its contents to match the input `text`.
Then we append the new element to the end of the pseudo-DOM in `logFragment`.
`logFragment` will accumulate log entries until the next time `updateDisplay()` is called, once the DOM is ready for the changes.

### Running tasks

Now that we've got the task management and display maintenance code done, we can actually start setting up code to run tasks that get work done.

#### The task handler

The function we'll be using as our task handler—that is, the function that will be used as the value of the task object's `handler` property—is `logTaskHandler()`. It's a simple function that outputs a bunch of stuff to the log for each task. In your own application, you'd replace this code with whatever task it is you wish to perform during idle time. Just remember that anything you want to do that changes the DOM needs to be handled through {{domxref("Window.requestAnimationFrame", "requestAnimationFrame()")}}.

```js
function logTaskHandler(data) {
  log(`Running task #${currentTaskNumber}`);

  for (let i = 0; i < data.count; i += 1) {
    log(`${(i + 1).toString()}. ${data.text}`);
  }
}
```

#### The main program

Everything is triggered when the user clicks the Start button, which causes the `decodeTechnoStuff()` function to be called.

```js hidden
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
```

```js
function decodeTechnoStuff() {
  totalTaskCount = 0;
  currentTaskNumber = 0;
  updateDisplay();

  const n = getRandomIntInclusive(100, 200);

  for (let i = 0; i < n; i++) {
    const taskData = {
      count: getRandomIntInclusive(75, 150),
      text: `This text is from task number ${i + 1} of ${n}`,
    };

    enqueueTask(logTaskHandler, taskData);
  }
}

document
  .getElementById("startButton")
  .addEventListener("click", decodeTechnoStuff, false);
```

`decodeTechnoStuff()` starts by zeroing the values of totalTaskCount (the number of tasks added to the queue so far) and currentTaskNumber (the task currently being run), and then calls `updateDisplay()` to reset the display to its "nothing's happened yet" state.

This example will create a random number of tasks (between 100 and 200 of them). To do so, we use the [`getRandomIntInclusive()` function](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_integer_between_two_values_inclusive) that's provided as an example in the documentation for {{jsxref("Math.random()")}} to get the number of tasks to create.

Then we start a loop to create the actual tasks. For each task, we create an object, `taskData`, which includes two properties:

- `count` is the number of strings to output into the log from the task.
- `text` is the text to output to the log the number of times specified by `count`.

Each task is then enqueued by calling `enqueueTask()`, passing in `logTaskHandler()` as the handler function and the `taskData` object as the object to pass into the function when it's called.

### Result

Below is the actual functioning result of the code above. Try it out, play with it in your browser's developer tools, and experiment with using it in your own code.

{{ EmbedLiveSample('Example', 600, 700) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Window.requestIdleCallback()")}}
- {{domxref("Window.cancelIdleCallback()")}}
- {{domxref("IdleDeadline")}}

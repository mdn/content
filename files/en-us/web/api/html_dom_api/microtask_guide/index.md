---
title: Using microtasks in JavaScript with queueMicrotask()
slug: Web/API/HTML_DOM_API/Microtask_guide
page-type: guide
---

{{APIRef("HTML DOM")}}

A **microtask** is a short function which is executed after the function or program which created it exits _and_ only if the [JavaScript execution stack](/en-US/docs/Web/JavaScript/Event_loop#stack) is empty, but before returning control to the event loop being used by the {{Glossary("user agent")}} to drive the script's execution environment.

This event loop may be either the browser's main event loop or the event loop driving a [web worker](/en-US/docs/Web/API/Web_Workers_API). This lets the given function run without the risk of interfering with another script's execution, yet also ensures that the microtask runs before the user agent has the opportunity to react to actions taken by the microtask.

JavaScript [promises](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) and the [Mutation Observer API](/en-US/docs/Web/API/MutationObserver) both use the microtask queue to run their callbacks, but there are other times when the ability to defer work until the current event loop pass is wrapping up is helpful. In order to allow microtasks to be used by third-party libraries, frameworks, and polyfills, the {{domxref("queueMicrotask()")}} method is exposed on the {{domxref("Window")}} and {{domxref("Worker")}} interfaces.

## Tasks vs. microtasks

To properly discuss microtasks, it's first useful to know what a JavaScript task is and how microtasks differ from tasks. This is a quick, simplified explanation, but if you would like more details, you can read the information in the article [In depth: Microtasks and the JavaScript runtime environment](/en-US/docs/Web/API/HTML_DOM_API/Microtask_guide/In_depth).

### Tasks

A **task** is any JavaScript code which is scheduled to be run by the standard mechanisms such as initially starting to run a program, an event callback being run, or an interval or timeout being fired. These all get scheduled on the **task queue**.

Tasks get added to the task queue when:

- A new JavaScript program or subprogram is executed (such as from a console, or by running the code in a {{HTMLElement("script")}} element) directly.
- An event fires, adding the event's callback function to the task queue.
- A timeout or interval created with {{domxref("setTimeout()")}} or {{domxref("setInterval()")}} is reached, causing the corresponding callback to be added to the task queue.

The event loop driving your code handles these tasks one after another, in the order in which they were enqueued. The oldest runnable task in the task queue will be executed during a single iteration of the event loop. After that, microtasks will be executed until the microtask queue is empty, and then the browser may choose to update rendering. Then the browser moves on to the next iteration of event loop.

### Microtasks

At first the difference between microtasks and tasks seems minor. And they are similar; both are made up of JavaScript code which gets placed on a queue and run at an appropriate time. However, whereas the event loop runs only the tasks present on the queue when the iteration began, one after another, it handles the microtask queue very differently.

There are two key differences.

First, each time a task exits, the event loop checks to see if the task is returning control to other JavaScript code. If not, it runs all of the microtasks in the microtask queue. The microtask queue is, then, processed multiple times per iteration of the event loop, including after handling events and other callbacks.

Second, if a microtask adds more microtasks to the queue by calling {{domxref("queueMicrotask()")}}, those newly-added microtasks _execute before the next task is run_. That's because the event loop will keep calling microtasks until there are none left in the queue, even if more keep getting added.

> **Warning:** Since microtasks can themselves enqueue more microtasks, and the event loop continues processing microtasks until the queue is empty, there's a real risk of getting the event loop endlessly processing microtasks. Be cautious with how you go about recursively adding microtasks.

## Using microtasks

Before getting farther into this, it's important to note again that most developers won't use microtasks much, if at all. They're a highly specialized feature of modern browser-based JavaScript development, allowing you to schedule code to jump in front of other things in the long set of things waiting to happen on the user's computer. Abusing this capability will lead to performance problems.

### Enqueueing microtasks

As such, you should typically use microtasks only when there's no other solution, or when creating frameworks or libraries that need to use microtasks in order to create the functionality they're implementing. While there have been tricks available that made it possible to enqueue microtasks in the past (such as by creating a promise that resolves immediately), the addition of the {{domxref("queueMicrotask()")}} method adds a standard way to introduce a microtask safely and without tricks.

By introducing `queueMicrotask()`, the quirks that arise when sneaking in using promises to create microtasks can be avoided. For instance, when using promises to create microtasks, exceptions thrown by the callback are reported as rejected promises rather than being reported as standard exceptions. Also, creating and destroying promises takes additional overhead both in terms of time and memory that a function which properly enqueues microtasks avoids.

Pass the JavaScript {{jsxref("Function")}} to call while the context is handling microtasks into the `queueMicrotask()` method, which is exposed on the global context as defined by either the {{domxref("Window")}} or {{domxref("Worker")}} interface, depending on the current execution context.

```js
queueMicrotask(() => {
  /* code to run in the microtask here */
});
```

The microtask function itself takes no parameters, and does not return a value.

### When to use microtasks

In this section, we'll take a look at scenarios in which microtasks are particularly useful. Generally, it's about capturing or checking results, or performing cleanup, after the main body of a JavaScript execution context exits, but before any event handlers, timeouts and intervals, or other callbacks are processed.

When is that useful?

The main reason to use microtasks is that: to ensure consistent ordering of tasks, even when results or data is available synchronously, but while simultaneously reducing the risk of user-discernible delays in operations.

#### Ensuring ordering on conditional use of promises

One situation in which microtasks can be used to ensure that the ordering of execution is always consistent is when promises are used in one clause of an `if...else` statement (or other conditional statement), but not in the other clause. Consider code such as this:

```js
customElement.prototype.getData = (url) => {
  if (this.cache[url]) {
    this.data = this.cache[url];
    this.dispatchEvent(new Event("load"));
  } else {
    fetch(url)
      .then((result) => result.arrayBuffer())
      .then((data) => {
        this.cache[url] = data;
        this.data = data;
        this.dispatchEvent(new Event("load"));
      });
  }
};
```

The problem introduced here is that by using a task in one branch of the `if...else` statement (in the case in which the image is available in the cache) but having promises involved in the `else` clause, we have a situation in which the order of operations can vary; for example, as seen below.

```js
element.addEventListener("load", () => console.log("Loaded data"));
console.log("Fetching data…");
element.getData();
console.log("Data fetched");
```

Executing this code twice in a row gives the following results.

When the data is not cached:

```plain
Fetching data
Data fetched
Loaded data
```

When the data is cached:

```plain
Fetching data
Loaded data
Data fetched
```

Even worse, sometimes the element's `data` property will be set and other times it won't be by the time this code finishes running.

We can ensure consistent ordering of these operations by using a microtask in the `if` clause to balance the two clauses:

```js
customElement.prototype.getData = (url) => {
  if (this.cache[url]) {
    queueMicrotask(() => {
      this.data = this.cache[url];
      this.dispatchEvent(new Event("load"));
    });
  } else {
    fetch(url)
      .then((result) => result.arrayBuffer())
      .then((data) => {
        this.cache[url] = data;
        this.data = data;
        this.dispatchEvent(new Event("load"));
      });
  }
};
```

This balances the clauses by having both situations handle the setting of `data` and firing of the `load` event within a microtask (using `queueMicrotask()` in the `if` clause and using the promises used by {{domxref("fetch()")}} in the `else` clause).

#### Batching operations

You can also use microtasks to collect multiple requests from various sources into a single batch, avoiding the possible overhead involved with multiple calls to handle the same kind of work.

The snippet below creates a function that batches multiple messages into an array, using a microtask to send them as a single object when the context exits.

```js
const messageQueue = [];

let sendMessage = (message) => {
  messageQueue.push(message);

  if (messageQueue.length === 1) {
    queueMicrotask(() => {
      const json = JSON.stringify(messageQueue);
      messageQueue.length = 0;
      fetch("url-of-receiver", json);
    });
  }
};
```

When `sendMessage()` gets called, the specified message is first pushed onto the message queue array. Then things get interesting.

If the message we just added to the array is the first one, we enqueue a microtask that will send a batch. The microtask will execute, as always, when the JavaScript execution path reaches the top level, just before running callbacks. That means that any further calls to `sendMessage()` made in the interim will push their messages onto the message queue, but because of the array length check before adding a microtask, no new microtask is enqueued.

When the microtask runs, then, it has an array of potentially many messages waiting for it. It starts by encoding it as JSON using the {{jsxref("JSON.stringify()")}} method. After that, the array's contents aren't needed anymore, so we empty the `messageQueue` array. Finally, we use the {{domxref("fetch()")}} method to send the JSON string to the server.

This lets every call to `sendMessage()` made during the same iteration of the event loop add their messages to the same `fetch()` operation, without potentially having other tasks such as timeouts or the like delay the transmission.

The server will receive the JSON string, then will presumably decode it and process the messages it finds in the resulting array.

## Examples

### Simple microtask example

In this simple example, we see that enqueueing a microtask causes the microtask's callback to run after the body of this top-level script is done running.

```html hidden
<pre id="log"></pre>
```

#### JavaScript

```js hidden
const logElem = document.getElementById("log");
const log = (s) => (logElem.innerText += `${s}\n`);
```

In the following code, we see a call to {{domxref("queueMicrotask()")}} used to schedule a microtask to run. This call is bracketed by calls to `log()`, a custom function that outputs text to the screen.

```js
log("Before enqueueing the microtask");
queueMicrotask(() => {
  log("The microtask has run.");
});
log("After enqueueing the microtask");
```

#### Result

{{EmbedLiveSample("Simple_microtask_example", 640, 80)}}

### Timeout and microtask example

In this example, a timeout is scheduled to fire after zero milliseconds (or "as soon as possible"). This demonstrates the difference between what "as soon as possible" means when scheduling a new task (such as by using `setTimeout()`) versus using a microtask.

```html hidden
<pre id="log"></pre>
```

#### JavaScript

```js hidden
const logElem = document.getElementById("log");
const log = (s) => (logElem.innerText += `${s}\n`);
```

In the following code, we see a call to {{domxref("queueMicrotask()")}} used to schedule a microtask to run. This call is bracketed by calls to `log()`, a custom function that outputs text to the screen.

The code below schedules a timeout to occur in zero milliseconds, then enqueues a microtask. This is bracketed by calls to `log()` to output additional messages.

```js
const callback = () => log("Regular timeout callback has run");

const urgentCallback = () => log("*** Oh noes! An urgent callback has run!");

log("Main program started");
setTimeout(callback, 0);
queueMicrotask(urgentCallback);
log("Main program exiting");
```

#### Result

{{EmbedLiveSample("Timeout_and_microtask_example", 640, 100)}}

Note that the output logged from the main program body appears first, followed by the output from the microtask, followed by the timeout's callback. That's because when the task that's handling the execution of the main program exits, the microtask queue gets processed before the task queue on which the timeout callback is located. Remembering that tasks and microtasks are kept on separate queues, and that microtasks run first will help keep this straight.

### Microtask from a function

This example expands slightly on the previous one by adding a function that does some work. This function uses `queueMicrotask()` to schedule a microtask. The important thing to take away from this one is that the microtask isn't processed when the function exits, but when the main program exits.

```html hidden
<pre id="log"></pre>
```

#### JavaScript

```js hidden
const logElem = document.getElementById("log");
const log = (s) => (logElem.innerText += `${s}\n`);
```

The main program code follows. The `doWork()` function here calls `queueMicrotask()`, yet the microtask still doesn't fire until the entire program exits, since that's when the task exits and there's nothing else on the execution stack.

```js
const callback = () => log("Regular timeout callback has run");

const urgentCallback = () => log("*** Oh noes! An urgent callback has run!");

const doWork = () => {
  let result = 1;

  queueMicrotask(urgentCallback);

  for (let i = 2; i <= 10; i++) {
    result *= i;
  }
  return result;
};

log("Main program started");
setTimeout(callback, 0);
log(`10! equals ${doWork()}`);
log("Main program exiting");
```

#### Result

{{EmbedLiveSample("Microtask_from_a_function", 640, 100)}}

## See also

- [In depth: Microtasks and the JavaScript runtime environment](/en-US/docs/Web/API/HTML_DOM_API/Microtask_guide/In_depth)
- {{domxref("queueMicrotask()")}}
- [Asynchronous JavaScript](/en-US/docs/Learn/JavaScript/Asynchronous)
  - [Introducing asynchronous JavaScript](/en-US/docs/Learn/JavaScript/Asynchronous/Introducing)
  - [Cooperative asynchronous JavaScript: Timeouts and intervals](/en-US/docs/Learn/JavaScript/Asynchronous)
  - [Graceful asynchronous programming with Promises](/en-US/docs/Learn/JavaScript/Asynchronous/Promises)

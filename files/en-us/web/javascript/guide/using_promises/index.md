---
title: Using Promises
slug: Web/JavaScript/Guide/Using_promises
tags:
  - Guide
  - Intermediate
  - JavaScript
  - Promise
  - Promises
  - asynchronous
  - l10n:priority
---
{{jsSidebar("JavaScript Guide")}}{{PreviousNext("Web/JavaScript/Guide/Details_of_the_Object_Model", "Web/JavaScript/Guide/Iterators_and_Generators")}}

A {{jsxref("Promise")}} is an object representing the eventual completion or failure of an asynchronous operation. Since most people are consumers of already-created promises, this guide will explain consumption of returned promises before explaining how to create them.

Essentially, a promise is a returned object to which you attach callbacks, instead of passing callbacks into a function.

Imagine a function, `createAudioFileAsync()`, which asynchronously generates a sound file given a configuration record and two callback functions, one called if the audio file is successfully created, and the other called if an error occurs.

Here's some code that uses `createAudioFileAsync()`:

```js
function successCallback(result) {
  console.log("Audio file ready at URL: " + result);
}

function failureCallback(error) {
  console.error("Error generating audio file: " + error);
}

createAudioFileAsync(audioSettings, successCallback, failureCallback);
```

If `createAudioFileAsync()` were rewritten to return a promise, you would attach your callbacks to it instead:

```js
createAudioFileAsync(audioSettings).then(successCallback, failureCallback);
```

This convention has several advantages. We will explore each one.

## Guarantees

Unlike old-fashioned _passed-in_ callbacks, a promise comes with some guarantees:

- Callbacks added with [`then()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) will never be invoked before the [completion of the current run](/en-US/docs/Web/JavaScript/EventLoop#run-to-completion) of the JavaScript event loop.
- These callbacks will be invoked even if they were added _after_ the success or failure of the asynchronous operation that the promise represents.
- Multiple callbacks may be added by calling [`then()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) several times. They will be invoked one after another, in the order in which they were inserted.

One of the great things about using promises is **chaining**.

## Chaining

A common need is to execute two or more asynchronous operations back to back, where each subsequent operation starts when the previous operation succeeds, with the result from the previous step. We accomplish this by creating a **promise chain**.

Here's the magic: the `then()` function returns a **new promise**, different from the original:

```js
const promise = doSomething();
const promise2 = promise.then(successCallback, failureCallback);
```

or

```js
const promise2 = doSomething().then(successCallback, failureCallback);
```

This second promise (`promise2`) represents the completion not just of `doSomething()`, but also of the `successCallback` or `failureCallback` you passed in, which can be other asynchronous functions returning a promise. When that's the case, any callbacks added to `promise2` get queued behind the promise returned by either `successCallback` or `failureCallback`.

Basically, each promise represents the completion of another asynchronous step in the chain.

In the old days, doing several asynchronous operations in a row would lead to the classic callback pyramid of doom:

```js
doSomething(function(result) {
  doSomethingElse(result, function(newResult) {
    doThirdThing(newResult, function(finalResult) {
      console.log('Got the final result: ' + finalResult);
    }, failureCallback);
  }, failureCallback);
}, failureCallback);
```

With modern functions, we attach our callbacks to the returned promises instead, forming a promise chain:

```js
doSomething()
.then(function(result) {
  return doSomethingElse(result);
})
.then(function(newResult) {
  return doThirdThing(newResult);
})
.then(function(finalResult) {
  console.log('Got the final result: ' + finalResult);
})
.catch(failureCallback);
```

The arguments to `then` are optional, and `catch(failureCallback)` is short for `then(null, failureCallback)`. You might see this expressed with [arrow functions](/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) instead:

```js
doSomething()
.then(result => doSomethingElse(result))
.then(newResult => doThirdThing(newResult))
.then(finalResult => {
  console.log(`Got the final result: ${finalResult}`);
})
.catch(failureCallback);
```

**Important:** Always return results, otherwise callbacks won't catch the result of a previous promise (with arrow functions `() => x` is short for `() => { return x; }`).

### Chaining after a catch

It's possible to chain _after_ a failure, i.e. a `catch`, which is useful to accomplish new actions even after an action failed in the chain. Read the following example:

```js
new Promise((resolve, reject) => {
    console.log('Initial');

    resolve();
})
.then(() => {
    throw new Error('Something failed');

    console.log('Do this');
})
.catch(() => {
    console.error('Do that');
})
.then(() => {
    console.log('Do this, no matter what happened before');
});
```

This will output the following text:

```plain
Initial
Do that
Do this, no matter what happened before
```

> **Note:** The text "Do this" is not displayed because the "Something failed" error caused a rejection.

## Error propagation

You might recall seeing `failureCallback` three times in the pyramid of doom earlier, compared to only once at the end of the promise chain:

```js
doSomething()
.then(result => doSomethingElse(result))
.then(newResult => doThirdThing(newResult))
.then(finalResult => console.log(`Got the final result: ${finalResult}`))
.catch(failureCallback);
```

If there's an exception, the browser will look down the chain for `.catch()` handlers or `onRejected`. This is very much modeled after how synchronous code works:

```js
try {
  const result = syncDoSomething();
  const newResult = syncDoSomethingElse(result);
  const finalResult = syncDoThirdThing(newResult);
  console.log(`Got the final result: ${finalResult}`);
} catch(error) {
  failureCallback(error);
}
```

This symmetry with asynchronous code culminates in the [`async`/`await`](/en-US/docs/Web/JavaScript/Reference/Statements/async_function) syntactic sugar in ECMAScript 2017:

```js
async function foo() {
  try {
    const result = await doSomething();
    const newResult = await doSomethingElse(result);
    const finalResult = await doThirdThing(newResult);
    console.log(`Got the final result: ${finalResult}`);
  } catch(error) {
    failureCallback(error);
  }
}
```

It builds on promises, e.g. `doSomething()` is the same function as before. You can read more about the syntax [here](https://developers.google.com/web/fundamentals/getting-started/primers/async-functions).

Promises solve a fundamental flaw with the callback pyramid of doom, by catching all errors, even thrown exceptions and programming errors. This is essential for functional composition of asynchronous operations.

## Promise rejection events

Whenever a promise is rejected, one of two events is sent to the global scope (generally, this is either the [`window`](/en-US/docs/Web/API/Window "The Window interface represents a window containing a DOM document; the document property points to the DOM document loaded in that window.") or, if being used in a web worker, it's the [`Worker`](/en-US/docs/Web/API/Worker "The Worker interface of the Web Workers API represents a background task that can be created via script, which can send messages back to its creator.") or other worker-based interface). The two events are:

- [`rejectionhandled`](/en-US/docs/Web/API/Window/rejectionhandled_event "The rejectionhandled event is sent to the script's global scope (usually window but also Worker) whenever a JavaScript Promise is rejected but after the promise rejection has been handled.")
  - : Sent when a promise is rejected, after that rejection has been handled by the executor's `reject` function.
- [`unhandledrejection`](/en-US/docs/Web/API/Window/unhandledrejection_event "The unhandledrejection event is sent to the global scope of a script when a JavaScript Promise that has no rejection handler is rejected; typically, this is the window, but may also be a Worker.")
  - : Sent when a promise is rejected but there is no rejection handler available.

In both cases, the event (of type [`PromiseRejectionEvent`](/en-US/docs/Web/API/PromiseRejectionEvent "The PromiseRejectionEvent interface represents events which are sent to the global script context when JavaScript Promises are rejected.")) has as members a [`promise`](/en-US/docs/Web/API/PromiseRejectionEvent/promise "The PromiseRejectionEvent interface's promise read-only property indicates the JavaScript Promise which was rejected. You can examine the event's PromiseRejectionEvent.reason property to learn why the promise was rejected.") property indicating the promise that was rejected, and a [`reason`](/en-US/docs/Web/API/PromiseRejectionEvent/reason "The read-only PromiseRejection property reason read-only property is any JavaScript value or Object which provides the reason passed into Promise.reject(). This in theory provides information about why the promise was rejected.") property that provides the reason given for the promise to be rejected.

These make it possible to offer fallback error handling for promises, as well as to help debug issues with your promise management. These handlers are global per context, so all errors will go to the same event handlers, regardless of source.

One case of special usefulness: when writing code for [Node.js](/en-US/docs/Glossary/Node.js), it's common that modules you include in your project may have unhandled rejected promises, logged to the console by the Node.js runtime. You can capture them for analysis and handling by your code—or just to avoid having them cluttering up your output—by adding a handler for the Node.js `unhandledRejection` event (notice the difference in capitalization of the name), like this:

```js
process.on("unhandledRejection", (reason, promise) => {
  /* You might start here by adding code to examine the
   * "promise" and "reason" values. */
});
```

For Node.js, to prevent the error from being logged to the console (the default action that would otherwise occur), adding that `process.on()` listener is all that’s necessary; there's no need for an equivalent of the browser runtime’s [`preventDefault()`](/en-US/docs/Web/API/Event/preventDefault) method.

However, if you add that `process.on` listener but don't also have code within it to handle rejected promises, they will just be dropped on the floor and silently ignored. So ideally, you should add code within that listener to examine each rejected promise and make sure it was not caused by an actual code bug.

## Creating a Promise around an old callback API

A {{jsxref("Promise")}} can be created from scratch using its constructor. This should be needed only to wrap old APIs.

In an ideal world, all asynchronous functions would already return promises. Unfortunately, some APIs still expect success and/or failure callbacks to be passed in the old way. The most obvious example is the [`setTimeout()`](/en-US/docs/Web/API/setTimeout) function:

```js
setTimeout(() => saySomething("10 seconds passed"), 10*1000);
```

Mixing old-style callbacks and promises is problematic. If `saySomething()` fails or contains a programming error, nothing catches it. `setTimeout` is to blame for this.

Luckily we can wrap `setTimeout` in a promise. Best practice is to wrap problematic functions at the lowest possible level, and then never call them directly again:

```js
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

wait(10*1000).then(() => saySomething("10 seconds")).catch(failureCallback);
```

Basically, the promise constructor takes an executor function that lets us resolve or reject a promise manually. Since `setTimeout()` doesn't really fail, we left out reject in this case.

## Composition

{{jsxref("Promise.resolve()")}} and {{jsxref("Promise.reject()")}} are shortcuts to manually create an already resolved or rejected promise respectively. This can be useful at times.

{{jsxref("Promise.all()")}} and {{jsxref("Promise.race()")}} are two composition tools for running asynchronous operations in parallel.

We can start operations in parallel and wait for them all to finish like this:

```js
Promise.all([func1(), func2(), func3()])
.then(([result1, result2, result3]) => { /* use result1, result2 and result3 */ });
```

Sequential composition is possible using some clever JavaScript:

```js
[func1, func2, func3].reduce((p, f) => p.then(f), Promise.resolve())
.then(result3 => { /* use result3 */ });
```

Basically, we reduce an array of asynchronous functions down to a promise chain equivalent to: `Promise.resolve().then(func1).then(func2).then(func3);`

This can be made into a reusable compose function, which is common in functional programming:

```js
const applyAsync = (acc,val) => acc.then(val);
const composeAsync = (...funcs) => x => funcs.reduce(applyAsync, Promise.resolve(x));
```

The `composeAsync()` function will accept any number of functions as arguments, and will return a new function that accepts an initial value to be passed through the composition pipeline:

```js
const transformData = composeAsync(func1, func2, func3);
const result3 = transformData(data);
```

In ECMAScript 2017, sequential composition can be done more with async/await:

```js
let result;
for (const f of [func1, func2, func3]) {
  result = await f(result);
}
/* use last result (i.e. result3) */
```

## Timing

To avoid surprises, functions passed to [`then()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) will never be called synchronously, even with an already-resolved promise:

```js
Promise.resolve().then(() => console.log(2));
console.log(1); // 1, 2
```

Instead of running immediately, the passed-in function is put on a microtask queue, which means it runs later (only after the function which created it exits, and when the JavaScript execution stack is empty), just before control is returned to the event loop; i.e. pretty soon:

```js
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

wait(0).then(() => console.log(4));
Promise.resolve().then(() => console.log(2)).then(() => console.log(3));
console.log(1); // 1, 2, 3, 4
```

#### Task queues vs microtasks

Promise callbacks are handled as a [Microtask](/en-US/docs/Web/API/HTML_DOM_API/Microtask_guide) whereas [`setTimeout()`](/en-US/docs/Web/API/setTimeout) callbacks are handled as Task queues.

```js
const promise = new Promise(function(resolve, reject) {
  console.log("Promise callback");
  resolve();
}).then(function(result) {
  console.log("Promise callback (.then)");
});

setTimeout(function() {
  console.log("event-loop cycle: Promise (fulfilled)", promise)
}, 0);

console.log("Promise (pending)", promise);
```

The code above will output:

```plain
Promise callback
Promise (pending) Promise {<pending>}
Promise callback (.then)
event-loop cycle: Promise (fulfilled) Promise {<fulfilled>}
```

For more details, refer to [Tasks vs microtasks](/en-US/docs/Web/API/HTML_DOM_API/Microtask_guide/In_depth#tasks_vs_microtasks).

## Nesting

Simple promise chains are best kept flat without nesting, as nesting can be a result of careless composition. See [common mistakes](#common_mistakes).

Nesting is a control structure to limit the scope of `catch` statements. Specifically, a nested `catch` only catches failures in its scope and below, not errors higher up in the chain outside the nested scope. When used correctly, this gives greater precision in error recovery:

```js
doSomethingCritical()
.then(result => doSomethingOptional(result)
  .then(optionalResult => doSomethingExtraNice(optionalResult))
  .catch(e => {})) // Ignore if optional stuff fails; proceed.
.then(() => moreCriticalStuff())
.catch(e => console.error("Critical failure: " + e.message));
```

Note that the optional steps here are nested, not from the indentation, but from the precarious placement of the outer `(` and `)` around them.

The inner neutralizing `catch` statement only catches failures from `doSomethingOptional()` and `doSomethingExtraNice()`, after which the code resumes with `moreCriticalStuff()`. Importantly, if `doSomethingCritical()` fails, its error is caught by the final (outer) `catch` only.

## Common mistakes

Here are some common mistakes to watch out for when composing promise chains. Several of these mistakes manifest in the following example:

```js example-bad
// Bad example! Spot 3 mistakes!

doSomething().then(function(result) {
  doSomethingElse(result) // Forgot to return promise from inner chain + unnecessary nesting
  .then(newResult => doThirdThing(newResult));
}).then(() => doFourthThing());
// Forgot to terminate chain with a catch!
```

The first mistake is to not chain things together properly. This happens when we create a new promise but forget to return it. As a consequence, the chain is broken, or rather, we have two independent chains racing. This means `doFourthThing()` won't wait for   `doSomethingElse()` or `doThirdThing()` to finish, and will run in parallel with them, likely unintended. Separate chains also have separate error handling, leading to uncaught errors.

The second mistake is to nest unnecessarily, enabling the first mistake. Nesting also limits the scope of inner error handlers, which—if unintended—can lead to uncaught errors. A variant of this is the [promise constructor anti-pattern](https://stackoverflow.com/questions/23803743/what-is-the-explicit-promise-construction-antipattern-and-how-do-i-avoid-it), which combines nesting with redundant use of the promise constructor to wrap code that already uses promises.

The third mistake is forgetting to terminate chains with `catch`. Unterminated promise chains lead to uncaught promise rejections in most browsers.

A good rule-of-thumb is to always either return or terminate promise chains, and as soon as you get a new promise, return it immediately, to flatten things:

```js example-good
doSomething()
.then(function(result) {
  return doSomethingElse(result);
})
.then(newResult => doThirdThing(newResult))
.then(() => doFourthThing())
.catch(error => console.error(error));
```

Note that `() => x` is short for `() => { return x; }`.

Now we have a single deterministic chain with proper error handling.

Using [`async`/`await`](/en-US/docs/Web/JavaScript/Reference/Statements/async_function) addresses most, if not all of these problems—the tradeoff being that the most common mistake with that syntax is forgetting the [`await`](/en-US/docs/Web/JavaScript/Reference/Statements/async_function) keyword.

## When promises and tasks collide

If you run into situations in which you have promises and tasks (such as events or callbacks) which are firing in unpredictable orders, it's possible you may benefit from using a microtask to check status or balance out your promises when promises are created conditionally.

If you think microtasks may help solve this problem, see the [microtask guide](/en-US/docs/Web/API/HTML_DOM_API/Microtask_guide) to learn more about how to use [`queueMicrotask()`](/en-US/docs/Web/API/queueMicrotask "The queueMicrotask() method, which is exposed on the Window or Worker interface, queues a microtask to be executed at a safe time prior to control returning to the browser's event loop.") to enqueue a function as a microtask.

## See also

- {{jsxref("Promise.then()")}}
- [`async`/`await`](/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
- [Promises/A+ specification](http://promisesaplus.com/)
- [Venkatraman.R - JS Promise (Part 1, Basics)](https://medium.com/@ramsunvtech/promises-of-promise-part-1-53f769245a53)
- [Venkatraman.R - JS Promise (Part 2 - Using Q.js, When.js and RSVP.js)](https://medium.com/@ramsunvtech/js-promise-part-2-q-js-when-js-and-rsvp-js-af596232525c#.dzlqh6ski)
- [Venkatraman.R - Tools for Promises Unit Testing](https://tech.io/playgrounds/11107/tools-for-promises-unittesting/introduction)
- [Nolan Lawson: We have a problem with promises — Common mistakes with promises](http://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html)

{{PreviousNext("Web/JavaScript/Guide/Details_of_the_Object_Model", "Web/JavaScript/Guide/Iterators_and_Generators")}}

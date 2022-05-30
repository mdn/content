---
title: Introducing asynchronous JavaScript
slug: Learn/JavaScript/Asynchronous/Introducing
tags:
  - JavaScript
  - Learn
---

{{LearnSidebar}}{{NextMenu("Learn/JavaScript/Asynchronous/Promises", "Learn/JavaScript/Asynchronous")}}

In this article we'll explain what asynchronous programming is, why we need it, and briefly discuss some of the ways asynchronous functions have historically been implemented in JavaScript.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerequisites:</th>
      <td>
        Basic computer literacy, a reasonable understanding of JavaScript
        fundamentals, including functions and event handlers.
      </td>
    </tr>
    <tr>
      <th scope="row">Objective:</th>
      <td>
        To gain familiarity with what asynchronous JavaScript is, how it differs from synchronous JavaScript, and why we need it.
      </td>
    </tr>
  </tbody>
</table>

Asynchronous programming is a technique that enables your program to start a potentially long-running task, and then rather than having to wait until that task has finished, to be able to continue to be responsive to other events while the task runs. Once the task is completed, your program is presented with the result.

Many functions provided by browsers, and especially the most interesting ones, can potentially take a long time, and are therefore asynchronous. For example:

- making HTTP requests with {{domxref("fetch", "fetch()")}}
- accessing the user's camera or microphone with {{domxref("MediaDevices/getUserMedia", "getUserMedia()")}}
- asking the user to select files for you to access using {{domxref("window/showOpenFilePicker", "showOpenFilePicker()")}}

So even though you may not have to _implement_ your own asynchronous functions very often, you are very likely to need to _use_ them correctly.

In this article, we'll start by looking at the problem with long-running synchronous functions, which make asynchronous programming a necessity.

## Synchronous programming

Consider the following code:

```js
const name = 'Miriam';
const greeting = `Hello, my name is ${name}!`;
console.log(greeting);
// "Hello, my name is Miriam!"
```

This code:

1. declares a string called `name`
2. declares another string called `greeting`, that uses `name`
3. logs the greeting to the JavaScript console.

What we should note here is that the browser effectively steps through the program one line at a time, in the order we wrote it, and at each point it waits for the line to finish its work, before going on to the next line. It has to do this, because each line depends on the work that was done in the preceding lines.

That makes this a **synchronous program**. It would still be synchronous if we called out to a separate function, like this:

```js
function makeGreeting(name) {
  return `Hello, my name is ${name}!`;
}

const name = 'Miriam';
const greeting = makeGreeting(name);
console.log(greeting);
// "Hello, my name is Miriam!"
```

Here `makeGreeting()` is a **synchronous function**, because the caller has to wait for the function to finish its work before the function returns.

### A long-running synchronous function

What if the synchronous function takes a long time?

This program generates a number of large prime numbers, using a very inefficient algorithm, when the user clicks the "Generate primes" button. You can control the number of primes to generate, which of course affects how long the operation will take.

```html
<label for="quota">Number of primes:</label>
<input type="text" id="quota" name="quota" value="1000000">

<button id="generate">Generate primes</button>
<button id="reload">Reload</button>

<div id="output"></div>
```

```js
function generatePrimes(quota) {

  function isPrime(n) {
    for (let c = 2; c <= Math.sqrt(n); ++c) {
      if (n % c === 0) {
          return false;
       }
    }
    return true;
  }

  const primes = [];
  const maximum = 1000000;

  while (primes.length < quota) {
    const candidate = Math.floor(Math.random() * (maximum + 1));
    if (isPrime(candidate)) {
      primes.push(candidate);
    }
  }

  return primes;
}

document.querySelector('#generate').addEventListener('click', () => {
  const quota = document.querySelector('#quota').value;
  const primes = generatePrimes(quota);
  document.querySelector('#output').textContent = `Finished generating ${quota} primes!`;
});

document.querySelector('#reload').addEventListener('click', () => {
  document.location.reload()
});
```

{{EmbedLiveSample("A long-running synchronous function", 600, 120)}}

Try clicking "Generate primes". Depending on how fast your computer is, it will probably take a few seconds before the program displays the "Finished!" message.

### The trouble with long-running synchronous functions

The next example is just like the last one, except we added a text box for you to type in. This time, try clicking "Generate primes", then typing in the text box.

You'll find that while our `generatePrimes()` function is running, our program is completely unresponsive: the user can't type anything, or click anything, or do anything else.

```html hidden
<label for="quota">Number of primes:</label>
<input type="text" id="quota" name="quota" value="1000000">

<button id="generate">Generate primes</button>
<button id="reload">Reload</button>

<textarea id="user-input" rows="5" cols="62">
Try typing in here immediately after pressing "Generate primes"
</textarea>

<div id="output"></div>

```

```css hidden
textarea {
  display: block;
  margin: 1rem 0;
}
```

```js hidden
function generatePrimes(quota) {

  function isPrime(n) {
    for (let c = 2; c <= Math.sqrt(n); ++c) {
      if (n % c === 0) {
          return false;
       }
    }
    return true;
  }

  const primes = [];
  const maximum = 1000000;

  while (primes.length < quota) {
    const candidate = Math.floor(Math.random() * (maximum + 1));
    if (isPrime(candidate)) {
      primes.push(candidate);
    }
  }

  return primes;
}

document.querySelector('#generate').addEventListener('click', () => {
  const quota = document.querySelector('#quota').value;
  const primes = generatePrimes(quota);
  document.querySelector('#output').textContent = `Finished generating ${quota} primes!`;
});

document.querySelector('#reload').addEventListener('click', () => {
  document.querySelector('#user-input').value = 'Try typing in here immediately after pressing "Generate primes"';
  document.location.reload();
});
```

{{EmbedLiveSample("The trouble with long-running synchronous functions", 600, 200)}}

This is the basic problem with long-running synchronous functions. What we would like here is a way that our program can:

- start a long-running operation by calling a function
- have the function start the operation and return right away, so our program can still be responsive to other events
- be notified with the result of the operation, when it eventually completes.

That's what an asynchronous function offers us, and the rest of this module explains how they are implemented in JavaScript.

## Event handlers

The description we just saw of asynchronous functions might remind you of event handlers, and if it does, you'd be right. Event handlers are really a form of asynchronous programming: you provide a function (the event handler) that will be called, not right away, but whenever the event happens. If "the event" is "the asynchronous operation has completed", then you could see how an event could be used to notify the caller about the result of an asynchronous function call.

Some early asynchronous APIs used events in just this way. The {{domxref("XMLHttpRequest")}} API enables you to make HTTP requests to a remote server using JavaScript. Since this can take a long time, it's an asynchronous API, and you get notified about the progress and eventual completion of a request by attaching event listeners to the `XMLHttpRequest` object.

The following example shows this in action. Press "Click to start request" to send a request. We create a new {{domxref("XMLHttpRequest")}} and listen for its {{domxref("XMLHttpRequest/loadend_event", "loadend")}} event. The handler logs a "Finished!" message along with the status code.

After adding the event listener we send the request. Note that after this, we can log "Started XHR request": that is, our program can continue to run while the request is going on, and our event handler will be called when the request is complete.

```html
<button id="xhr">Click to start request</button>
<button id="reload">Reload</button>

<pre readonly class="event-log"></pre>
```

```css hidden
pre {
  display: block;
  margin: 1rem 0;
}
```

```js
const log = document.querySelector('.event-log');

document.querySelector('#xhr').addEventListener('click', () => {
  log.textContent = '';

  const xhr = new XMLHttpRequest();

  xhr.addEventListener('loadend', () => {
    log.textContent = `${log.textContent}Finished with status: ${xhr.status}`;
  });

  xhr.open('GET', 'https://raw.githubusercontent.com/mdn/content/main/files/en-us/_wikihistory.json');
  xhr.send();
  log.textContent = `${log.textContent}Started XHR request\n`;});

document.querySelector('#reload').addEventListener('click', () => {
  log.textContent = '';
  document.location.reload();
});
```

{{EmbedLiveSample("Event handlers", 600, 120)}}

This is just like the [event handlers we've encountered in a previous module](/en-US/docs/Learn/JavaScript/Building_blocks/Events), except that instead of the event being a user action, like the user clicking a button, the event is a change in some object's state.

## Callbacks

An event handler is a particular type of callback. A callback is just a function that's passed into another function, with the expectation that the callback will be called at the appropriate time. As we just saw: callbacks used to be the main way asynchronous functions were implemented in JavaScript.

However, callback-based code can get hard to understand when the callback itself has to call functions that accept a callback. This is a common situation if you need to perform some operation that breaks down into a series of asynchronous functions. For example, consider the following:

```js
function doStep1(init) {
  return init + 1;
}

function doStep2(init) {
  return init + 2;
}

function doStep3(init) {
  return init + 3;
}

function doOperation() {
  let result = 0;
  result = doStep1(result);
  result = doStep2(result);
  result = doStep3(result);
  console.log(`result: ${result}`);
}

doOperation();
```

Here we have a single operation that's split into three steps, where each step depends on the last step. In our example the first step adds 1 to the input, the second adds 2, and the third adds 3. Starting with an input of 0, the end result is 6 (0 + 1 + 2 + 3). As synchronous code this is very straightforward. But what if we implemented the steps using callbacks?

```js
function doStep1(init, callback) {
  const result = init + 1;
  callback(result);
}

function doStep2(init, callback) {
  const result = init + 2;
  callback(result);
}

function doStep3(init, callback) {
  const result = init + 3;
  callback(result);
}

function doOperation() {
  doStep1(0, result1 => {
    doStep2(result1, result2 => {
      doStep3(result2, result3 => {
        console.log(`result: ${result3}`);
      });
    });
  });

}

doOperation();
```

Because we have to call callbacks inside callbacks, we get a deeply nested `doOperation()` function, which is much harder to read and debug. This is sometimes called "callback hell" or the "pyramid of doom" (because the indentation looks like a pyramid on its side).

When we nest callbacks like this, it can also get very hard to handle errors: often you have to handle errors at each level of the "pyramid", instead of having error handling once at the top level.

For these reasons, most modern asynchronous APIs don't use callbacks. Instead, the foundation of asynchronous programming in JavaScript is the {{jsxref("Promise")}}, and that's the subject of the next article.

{{NextMenu("Learn/JavaScript/Asynchronous/Promises", "Learn/JavaScript/Asynchronous")}}

## In this module

- **Introducing asynchronous JavaScript**
- [How to use promises](/en-US/docs/Learn/JavaScript/Asynchronous/Promises)
- [Implementing a promise-based API](/en-US/docs/Learn/JavaScript/Asynchronous/Implementing_a_promise-based_API)
- [Introducing workers](/en-US/docs/Learn/JavaScript/Asynchronous/Introducing_workers)
- [Assessment: sequencing animations](/en-US/docs/Learn/JavaScript/Asynchronous/Sequencing_animations)

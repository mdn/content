---
title: Introducing workers
slug: Learn/JavaScript/Asynchronous/Introducing_workers
tags:
  - JavaScript
  - Learn
---
{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Asynchronous/Implementing_a_promise-based_API", "Learn/JavaScript/Asynchronous/Sequencing_animations", "Learn/JavaScript/Asynchronous")}}

In this final article in our "Asynchronous JavaScript" module, we'll introduce _workers_, which enable you to run some tasks in a separate {{Glossary("Thread", "thread")}} of execution.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerequisites:</th>
      <td>
        Basic computer literacy, a reasonable understanding of JavaScript
        fundamentals, including event handling.
      </td>
    </tr>
    <tr>
      <th scope="row">Objective:</th>
      <td>To understand how to use web workers.</td>
    </tr>
  </tbody>
</table>

In the first article of this module, we saw what happens when you have a long-running synchronous task in your program — the whole window becomes totally unresponsive. Fundamentally, the reason for this is that the program is _single-threaded_. A _thread_ is a sequence of instructions that a program follows. Because the program consists of a single thread, it can only do one thing at a time: so if it is waiting for our long-running synchronous call to return, it can't do anything else.

Workers give you the ability to run some tasks in a different thread, so you can start the task, then continue with other processing (such as handling user actions).

But there's a price to pay for this. With multithreaded code, you never know when your thread will be suspended and the other thread will get a chance to run. So if both threads have access to the same variables, it's possible for a variable to change unexpectedly at any time, and this causes bugs that are hard to find.

To avoid these problems in the web, your main code and your worker code never get direct access to each others' variables. Workers and the main code run in completely separate worlds, and only interact by sending each other messages. In particular, this means that workers can't access the DOM (the window, document, page elements, and so on).

There are three different sorts of workers:

- dedicated workers
- shared workers
- service workers

In this article we'll walk through an example of the first sort of worker, then briefly discuss the other two.

## Using web workers

Remember in the first article, where we had a page that calculated prime numbers? We're going to use a worker to run the prime-number calculation, so our page stays responsive to user actions.

### The synchronous prime generator

Let's first take another look at the JavaScript in our previous example:

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
  document.querySelector('#user-input').value = 'Try typing in here immediately after pressing "Generate primes"';
  document.location.reload();
});
```

In this program, after we call `generatePrimes()`, the program becomes totally unresponsive.

### Prime generation with a worker

For this example, start by making a local copy of the files at <https://github.com/mdn/learning-area/blob/main/javascript/asynchronous/workers/start>. There are four files in this directory:

- index.html
- style.css
- main.js
- generate.js

The "index.html" file and the "style.css" files are already complete:

```html
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="utf-8"> 
    <meta name="viewport" content="width=device-width">
    <title>Prime numbers</title>
    <script src="main.js" defer></script>
    <link href="style.css" rel="stylesheet">
  </head>

  <body>

    <label for="quota">Number of primes:</label>
    <input type="text" id="quota" name="quota" value="1000000">

    <button id="generate">Generate primes</button>
    <button id="reload">Reload</button>

    <textarea id="user-input" rows="5" cols="62">Try typing in here immediately after pressing "Generate primes"</textarea>

    <div id="output"></div>

  </body>

</html>
```

```css
textarea {
  display: block;
  margin: 1rem 0;
}
```

The "main.js" and "generate.js" files are empty. We're going to add the main code to "main.js", and the worker code to "generate.js".

So first, we can see that the worker code is kept in a separate script from the main code. We can also see, looking at "index.html" above, that only the main code is included in a `<script>` element.

Now copy the following code into "main.js":

```js
// Create a new worker, giving it the code in "generate.js"
const worker = new Worker('./generate.js');

// When the user clicks "Generate primes", send a message to the worker.
// The message command is "generate", and the message also contains "quota",
// which is the number of primes to generate.
document.querySelector('#generate').addEventListener('click', () => {
  const quota = document.querySelector('#quota').value;
  worker.postMessage({
    command: 'generate',
    quota,
  });
});

// When the worker sends a message back to the main thread,
// update the output box with a message for the user, including the number of
// primes that were generated, taken from the message data.
worker.addEventListener('message', (message) => {
  document.querySelector('#output').textContent = `Finished generating ${message.data} primes!`;
});

document.querySelector('#reload').addEventListener('click', () => {
  document.querySelector('#user-input').value = 'Try typing in here immediately after pressing "Generate primes"';
  document.location.reload();
});
```

- First, we're creating the worker using the {{domxref("Worker/Worker", "Worker()")}} constructor. We pass it a URL pointing to the worker script. As soon as the worker is created, the worker script is executed.

- Next, as in the synchronous version, we add a `click` event handler to the "Generate primes" button. But now, rather than calling a `generatePrimes()` function, we send a message to the worker using {{domxref("Worker/postMessage", "worker.postMessage()")}}. This message can take an argument, and in this case we're passing a JSON object containing two properties:

  - `command`: a string identifying the thing we want the worker to do (in case our worker could do more than one thing)
  - `quota`: the number of primes to generate.

- Next, we add a `message` event handler to the worker. This is so the worker can tell us when it has finished, and pass us any resulting data. Our handler takes the data from the `data` property of the message, and writes it to the output element (the data is exactly the same as `quota`, so this is a bit pointless, but it shows the principle).

- Finally, we implement the `click` event handler for the "Reload" button. This is exactly the same as in the synchronous version.

Now for the worker code. Copy the following code into "generate.js":

```js
// Listen for messages from the main thread.
// If the message command is "generate", call `generatePrimes()`
addEventListener("message", (message) => {
  if (message.data.command === 'generate') {
    generatePrimes(message.data.quota);
  }
});

// Generate primes (very inefficiently)
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

  // When we have finished, send a message to the main thread,
  // including the number of primes we generated.
  postMessage(primes.length);
}
```

Remember that this runs as soon as the main script creates the worker.

The first thing the worker does is start listening for messages from the main script. It does this using `addEventListener()`, which is a global function in a worker. Inside the `message` event handler, the `data` property of the event contains a copy of the argument passed from the main script. If the main script passed the `generate` command, we call `generatePrimes()`, passing in the `quota` value from the message event.

The `generatePrimes()` function is just like the synchronous version, except instead of returning a value, we send a message to the main script when we are done. We use the {{domxref("DedicatedWorkerGlobalScope/postMessage", "postMessage()")}} function for this, which like `addEventListener()` is a global function in a worker. As we already saw, the main script is listening for this message and will update the DOM when the message is received.

> **Note:** To run this site, you'll have to run a local web server, because file:// URLs are not allowed to load workers. See our guide to [setting up a local testing server](/en-US/docs/Learn/Common_questions/set_up_a_local_testing_server). With that done, you should be able to click "Generate primes" and have your main page stay responsive.
>
> If you have any problems creating or running the example, you can review the [finished version](https://github.com/mdn/learning-area/blob/main/javascript/asynchronous/workers/finished) and try it [live](https://mdn.github.io/learning-area/javascript/asynchronous/workers/finished).

## Other types of worker

The worker we just created was what's called a _dedicated worker_. This means it's used by a single script instance.

There are other types of worker, though:

- [_Shared workers_](/en-US/docs/Web/API/SharedWorker) can be shared by several different scripts running in different windows.
- [_Service workers_](/en-US/docs/Web/API/Service_Worker_API) act like proxy servers, caching resources so that web applications can work when the user is offline. They're a key component of [Progressive Web Apps](/en-US/docs/Web/Progressive_web_apps).

## Conclusion

In this article we've introduced web workers, which enable a web application to offload tasks to a separate thread. The main thread and the worker don't directly share any variables, but communicate by sending messages, which are received by the other side as `message` events.

Workers can be an effective way to keep the main application responsive, although they can't access all the APIs that the main application can, and in particular can't access the DOM.

## See also

- [Using web workers](/en-US/docs/Web/API/Web_Workers_API/Using_web_workers)
- [Using service workers](/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Web workers API](/en-US/docs/Web/API/Web_Workers_API)

{{PreviousMenuNext("Learn/JavaScript/Asynchronous/Implementing_a_promise-based_API", "Learn/JavaScript/Asynchronous/Sequencing_animations", "Learn/JavaScript/Asynchronous")}}

## In this module

- [Introducing asynchronous JavaScript](/en-US/docs/Learn/JavaScript/Asynchronous/Introducing)
- [How to use promises](/en-US/docs/Learn/JavaScript/Asynchronous/Promises)
- [Implementing a promise-based API](/en-US/docs/Learn/JavaScript/Asynchronous/Implementing_a_promise-based_API)
- **Introducing workers**
- [Assessment: sequencing animations](/en-US/docs/Learn/JavaScript/Asynchronous/Sequencing_animations)

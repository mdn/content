---
title: Introducing asynchronous JavaScript
slug: Learn/JavaScript/Asynchronous/Introducing
tags:
  - Beginner
  - CodingScripting
  - Guide
  - Introducing
  - JavaScript
  - Learn
  - Promises
  - async
  - asynchronous
  - await
  - callbacks
---
{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Asynchronous/Concepts", "Learn/JavaScript/Asynchronous/Timeouts_and_intervals", "Learn/JavaScript/Asynchronous")}}

In this article we briefly recap the problems associated with synchronous JavaScript, and take a first look at some of the different asynchronous techniques you'll encounter, showing how they can help us solve such problems.

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
        To gain familiarity with what asynchronous JavaScript is, how it differs
        from synchronous JavaScript, and what use cases it has.
      </td>
    </tr>
  </tbody>
</table>

## Synchronous JavaScript

To allow us to understand what **{{Glossary("asynchronous")}}** JavaScript is, we ought to start off by making sure we understand what **{{Glossary("synchronous")}}** JavaScript is. This section recaps some of the information we saw in the previous article.

A lot of the functionality we have looked at in previous learning area modules is synchronous — you run some code, and the result is returned as soon as the browser can do so. Let's look at a simple example ([see it live here](https://mdn.github.io/learning-area/javascript/asynchronous/introducing/basic-function.html), and [see the source](https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/introducing/basic-function.html)):

```js
const btn = document.querySelector('button');
btn.addEventListener('click', () => {
  alert('You clicked me!');

  const pElem = document.createElement('p');
  pElem.textContent = 'This is a newly-added paragraph.';
  document.body.appendChild(pElem);
});
```

In this block, the lines are executed one after the other:

1.  We grab a reference to a {{htmlelement("button")}} element that is already available in the DOM.
2.  We add a [`click`](/en-US/docs/Web/API/Element/click_event) event listener to it so that when the button is clicked:

    1.  An [`alert()`](/en-US/docs/Web/API/Window/alert) message appears.
    2.  Once the alert is dismissed, we create a {{htmlelement("p")}} element.
    3.  We then give it some text content.
    4.  Finally, we append the paragraph to the document body.

While each operation is being processed, nothing else can happen — rendering is paused. This is because as we said in the previous article, [JavaScript is single threaded](/en-US/docs/Learn/JavaScript/Asynchronous/Concepts#javascript_is_single_threaded). Only one thing can happen at a time, on a single main thread, and everything else is blocked until an operation completes.

So in the example above, after you've clicked the button the paragraph won't appear until after the OK button is pressed in the alert box. You can try it for yourself:

```html hidden
<button>Click me</button>
```

{{EmbedLiveSample('Synchronous_JavaScript', '100%', '110px')}}

> **Note:** It is important to remember that [`alert()`](/en-US/docs/Web/API/Window/alert), while being very useful for demonstrating a synchronous blocking operation, is terrible for use in real world applications.

To prevent long-running operations from blocking the thread and making websites unresponsive, many Web APIs are now asynchronous,  especially those that access a resource from an external device, such as fetching a file from the network, accessing a database and returning data from it, accessing a video stream from a web cam, or broadcasting the display to a VR headset.

There are two main types of asynchronous code style you'll come across in JavaScript code: callbacks and promises. In this article we'll review each of these in turn.

## Callbacks

Callbacks are functions that are specified as arguments when calling a function which will start executing code in the background. When the background code finishes running, it calls the callback function to let you know the work is done, or to let you know that something of interest has happened. Using callbacks is slightly old-fashioned now, but you'll still see them in use in a number of older-but-still-commonly-used APIs.

An example of an async callback is the second parameter of the {{domxref("EventTarget.addEventListener", "addEventListener()")}} method (as we saw in action above):

```js
btn.addEventListener('click', () => {
  alert('You clicked me!');

  let pElem = document.createElement('p');
  pElem.textContent = 'This is a newly-added paragraph.';
  document.body.appendChild(pElem);
});
```

The first parameter is the type of event to be listened for, and the second parameter is a callback function that is invoked when the event is fired.

When we pass a callback function as an argument to another function, we are only passing the function's reference as an argument, i.e, the callback function is **not** executed immediately. It is “called back” (hence the name) asynchronously somewhere inside the containing function’s body. The containing function is responsible for executing the callback function when the time comes.

You can write your own function containing a callback easily enough. Let's look at another example that loads a resource via the [`XMLHttpRequest` API](/en-US/docs/Web/API/XMLHttpRequest) ([run it live](https://mdn.github.io/learning-area/javascript/asynchronous/introducing/xhr-async-callback.html), and [see the source](https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/introducing/xhr-async-callback.html)):

```js
function loadAsset(url, type, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.responseType = type;

  xhr.onload = function() {
    callback(xhr.response);
  };

  xhr.send();
}

function displayImage(blob) {
  const objectURL = URL.createObjectURL(blob);

  const image = document.createElement('img');
  image.src = objectURL;
  document.body.appendChild(image);
}

loadAsset('coffee.jpg', 'blob', displayImage);
```

Here we create a `displayImage()` function that represents a blob passed to it as an object URL, then creates an image to display the URL in, appending it to the document's `<body>`. However, we then create a `loadAsset()` function that takes a callback as a parameter, along with a URL to fetch and a content type. It uses `XMLHttpRequest` (often abbreviated to "XHR") to fetch the resource at the given URL, then pass the response to the callback to do something with. In this case the callback is waiting on the XHR call to finish downloading the resource (using the [`onload`](/en-US/docs/Web/API/XMLHttpRequestEventTarget/onload) event handler) before it passes it to the callback.

Callbacks are versatile — not only do they allow you to control the order in which functions are run and what data is passed between them, they also allow you to pass data to different functions depending on circumstance. So you could have different actions to run on the response downloaded, such as `processJSON()`, `displayText()`, etc.

Note that not all callbacks are async — some run synchronously. An example is when we use {{jsxref("Array.prototype.forEach()")}} to loop through the items in an array ([see it live](https://mdn.github.io/learning-area/javascript/asynchronous/introducing/foreach.html), and [the source](https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/introducing/foreach.html)):

```js
const gods = ['Apollo', 'Artemis', 'Ares', 'Zeus'];

gods.forEach((eachName, index) => {
  console.log(`${index}. ${eachName}`);
});
```

In this example we loop through an array of Greek gods and print the index numbers and values to the console. The expected parameter of `forEach()` is a callback function, which itself takes two parameters, a reference to the array name and index values. However, it doesn't wait for anything — it runs immediately.

### Callback hell

Callback-based code can get hard to understand when the callback itself has to call functions that accept a callback. This is a common situation if you need to perform some operation that breaks down into a series of asynchronous functions. For example, consider the following:

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

Here we have a single operation that's split into three steps, where each step depends on the last step. In our example the first step adds 1 to the input, the second adds 2, and the third adds 3. Starting with an input of 0, the end result is 6 (0 + 1 + 2 + 3). As synchronous code this is very straightforward. But what if we needed to make the steps asynchronous, using callbacks?

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

## Promises

Instead of callbacks, modern APIs use promises. A good example is the [`fetch()`](/en-US/docs/Web/API/fetch) API, which is a modern, more efficient version of {{domxref("XMLHttpRequest")}}. Let's look at a quick example, from our [Fetching data from the server](/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data) article:

```js
fetch('products.json')
  .then((response) => {
    return response.json();
  })
  .then((json) => {
    const products = json;
    initializeProducts(products);
  })
  .catch((err) => {
    console.error(`Fetch problem: ${err.message}`);
  });
```

> **Note:** You can find the finished version on GitHub ([see the source here](https://github.com/mdn/learning-area/blob/master/javascript/apis/fetching-data/can-store/can-script.js), and also [see it running live](https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/)).

Here we see `fetch()` taking a single parameter — the URL of a resource you want to fetch from the network — and returning a [promise](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise). The promise is an object representing the completion or failure of the async operation. It represents an intermediate state, as it were. In essence, it's the browser's way of saying "I promise to get back to you with the answer as soon as I can," hence the name "promise."

This concept can take practice to get used to; it feels a little like {{interwiki("wikipedia", "Schrödinger's cat")}} in action. Neither of the possible outcomes have happened yet, so the fetch operation is currently waiting on the result of the browser trying to complete the operation at some point in the future. We've then got three further code blocks chained onto the end of the `fetch()`:

- Two [`then()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) blocks. Both contain a callback function that will run if the previous operation is successful, and each callback receives as input the result of the previous successful operation, so you can go forward and do something else to it. Each `.then()` block returns another promise, meaning that you can chain multiple `.then()` blocks onto each other, so multiple asynchronous operations can be made to run in order, one after another.
- The [`catch()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch) block at the end runs if any of the `.then()` blocks fail — in a similar way to synchronous [`try...catch`](/en-US/docs/Web/JavaScript/Reference/Statements/try...catch) blocks, an error object is made available inside the `catch()`, which can be used to report the kind of error that has occurred. Note however that synchronous `try...catch` won't work with promises, although it will work with [async/await](/en-US/docs/Learn/JavaScript/Asynchronous/Async_await), as you'll learn later on.

> **Note:** You'll learn a lot more about promises later on in the module, so don't worry if you don't understand them fully yet.

### The event queue

Async operations like promises are put into an **event queue**, which runs after the main thread has finished processing so that they _do not block_ subsequent JavaScript code from running. The queued operations will complete as soon as possible then return their results to the JavaScript environment.

### Promises versus callbacks

Promises have some similarities to old-style callbacks. They are essentially a returned object to which you attach callback functions, rather than having to pass callbacks into a function.

However, promises are specifically made for handling async operations, and have many advantages over old-style callbacks:

- Because `.then()` always returns a promise, you can chain multiple async operations together using multiple `.then()` operations, passing the result of one into the next one as an input. This means we can avoid [callback hell](#callback_hell), by effectively flattening successive calls to asynchronous APIs.
- Promise callbacks are always called in the strict order they are placed in the event queue.
- Error handling is much better — all errors are handled by a single `.catch()` block at the end of the block, rather than being individually handled in each level of the "pyramid".
- If you pass a callback to some code you don't control, like a third-party library, then you lose control of how the function will be executed. Because you call `.then()` yourself, you avoid this problem.

### async and await

The {{jsxref("Statements/async_function", "async")}} keyword gives you a simpler way to work with asynchronous promise-based code. Adding `async` at the start of a function makes it an async function:

```js
async function myFunction() {
  //
}
```

Inside an async function you can use the `await` keyword before a call to a function that returns a promise. This makes the code wait at that point until the promise is settled, at which point the fulfilled value of the promise is treated as a return value.

This enables you to write code that uses asynchronous functions but looks like synchronous code! For example, we could use it to rewrite our fetch example:

```js
async function initialize() {
  try {
    const response = await fetch('products.json');
    const json = await response.json();
    initializeProducts(json);
  }
  catch(err) {
    console.error(`Fetch problem: ${err.message}`);
  }
}

initialize();
```

Note though that this only works inside the async function. Async functions always return a promise, so you can't do something like:

```js example-bad
async function getProducts() {
  try {
    const response = await fetch('products.json');
    const json = await response.json();
    return json;
  }
  catch(err) {
    console.error(`Fetch problem: ${err.message}`);
  }
}

const products = getProducts();
initializeProducts(products);
```

Instead, you'd need to do something like:

```js
async function getProducts() {
  try {
    const response = await fetch('products.json');
    const json = await response.json();
    return json;
  }
  catch(err) {
    console.error(`Fetch problem: ${err.message}`);
  }
}

const products = getProducts();
products.then(initializeProducts);
```

## The nature of asynchronous code

Let's explore an example that further illustrates the nature of async code, showing what can happen when we are not fully aware of code execution order and the problems of trying to treat asynchronous code like synchronous code. The following example is fairly similar to what we've seen before ([see it live](https://mdn.github.io/learning-area/javascript/asynchronous/introducing/async-sync.html), and [the source](https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/introducing/async-sync.html)). One difference is that we've included a number of {{domxref("console.log()")}} statements to illustrate an order that you might think the code would execute in.

```js
console.log ('Starting');
let image;

fetch('coffee.jpg')
  .then((response) => {
    console.log('It worked :)')
    return response.blob();
  })
  .then((myBlob) => {
    const objectURL = URL.createObjectURL(myBlob);
    image = document.createElement('img');
    image.src = objectURL;
    document.body.appendChild(image);
  })
  .catch((error) => {
    console.error(`There has been a problem with your fetch operation: ${error.message}`);
  });

console.log ('All done!');
```

The browser will begin executing the code, see the first `console.log()` statement (`Starting`) and execute it, and then create the `image` variable.

It will then move to the next line and begin executing the `fetch()` block but, because `fetch()` executes asynchronously without blocking, code execution continues after the promise-related code, thereby reaching the final `console.log()` statement (`All done!`) and outputting it to the console.

Only once the `fetch()` block has completely finished running and delivering its result through the `.then()` blocks will we finally see the second `console.log()` message (`It worked :)`) appear. So the messages have appeared in a different order to what you might expect:

- Starting
- All done!
- It worked :)

If this confuses you, then consider the following smaller example:

```js
console.log('registering click handler');

button.addEventListener('click', () => {
  console.log('get click');
});

console.log('all done');
```

This is very similar in behavior — the first and third `console.log()` messages will be shown immediately, but the second one does not run until someone clicks the mouse button. The previous example works in the same way, except that second message is not shown until the first promise has been fulfilled.

In a less trivial code example, this kind of setup could cause a problem — you can't include an async code block that returns a result, which you then rely on later in a sync code block. You just can't guarantee that the async function will return before the browser has processed the sync block.

To see this in action, try taking a local copy of [our example](https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/introducing/async-sync.html), and changing the fourth `console.log()` call to the following:

```js
console.log (`All done! ${image.src} displayed.`);
```

You should now get an error in your console instead of the third message:

    TypeError: image is undefined; can't access its "src" property

This is because at the time the browser tries to run the third `console.log()` statement, the `fetch()` block has not finished running so the `image` variable has not been given a value.

> **Note:** For security reasons, you can't `fetch()` files from your local filesystem (or run other such operations locally); to run the above example locally you'll have to run the example through a [local webserver](/en-US/docs/Learn/Common_questions/set_up_a_local_testing_server).

## Active learning: make it all async!

To fix the problematic `fetch()` example and make the three `console.log()` statements appear in the desired order, you could make the third `console.log()` statement run async as well. This can be done by moving it inside another `.then()` block chained onto the end of the second one, or by moving it inside the second `then()` block. Try fixing this now.

> **Note:** If you get stuck, you can [find an answer here](https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/introducing/async-sync-fixed.html) (see it [running live](https://mdn.github.io/learning-area/javascript/asynchronous/introducing/async-sync-fixed.html) also). You can also find a lot more information on promises in our [Graceful asynchronous programming with Promises](/en-US/docs/Learn/JavaScript/Asynchronous/Promises) guide, later on in the module.

## Conclusion

In its most basic form, JavaScript is a synchronous, blocking, single-threaded language, in which only one operation can be in progress at a time. But web browsers define functions and APIs that allow us to register functions that should not be executed synchronously, and should instead be invoked asynchronously when some kind of event occurs (the passage of time, the user's interaction with the mouse, or the arrival of data over the network, for example). This means that you can let your code do several things at the same time without stopping or blocking your main thread.

Whether we want to run code synchronously or asynchronously will depend on what we're trying to do.

There are times when we want things to load and happen right away. For example when applying some user-defined styles to a webpage you'll want the styles to be applied as soon as possible.

If we're running an operation that takes time however, like querying a database and using the results to populate templates, it is better to push this off the stack and complete the task asynchronously. Over time, you'll learn when it makes more sense to choose an asynchronous technique over a synchronous one.

{{PreviousMenuNext("Learn/JavaScript/Asynchronous/Concepts", "Learn/JavaScript/Asynchronous/Timeouts_and_intervals", "Learn/JavaScript/Asynchronous")}}

## In this module

- [General asynchronous programming concepts](/en-US/docs/Learn/JavaScript/Asynchronous/Concepts)
- **Introducing asynchronous JavaScript**
- [Cooperative asynchronous JavaScript: Timeouts and intervals](/en-US/docs/Learn/JavaScript/Asynchronous/Timeouts_and_intervals)
- [Graceful asynchronous programming with Promises](/en-US/docs/Learn/JavaScript/Asynchronous/Promises)
- [Making asynchronous programming easier with async and await](/en-US/docs/Learn/JavaScript/Asynchronous/Async_await)
- [Choosing the right approach](/en-US/docs/Learn/JavaScript/Asynchronous/Choosing_the_right_approach)

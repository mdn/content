---
title: How to use promises
slug: Learn/JavaScript/Asynchronous/Promises
page-type: learn-module-chapter
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Asynchronous/Introducing", "Learn/JavaScript/Asynchronous/Implementing_a_promise-based_API", "Learn/JavaScript/Asynchronous")}}

**Promises** are the foundation of asynchronous programming in modern JavaScript. A promise is an object returned by an asynchronous function, which represents the current state of the operation. At the time the promise is returned to the caller, the operation often isn't finished, but the promise object provides methods to handle the eventual success or failure of the operation.

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
      <td>To understand how to use promises in JavaScript.</td>
    </tr>
  </tbody>
</table>

In the last article, we talked about the use of callbacks to implement asynchronous functions. With that design, you call the asynchronous function, passing in your callback function. The function returns immediately and calls your callback when the operation is finished.

With a promise-based API, the asynchronous function starts the operation and returns a {{jsxref("Promise")}} object. You can then attach handlers to this promise object, and these handlers will be executed when the operation has succeeded or failed.

## Using the fetch() API

> **Note:** In this article, we will explore promises by copying code samples from the page into your browser's JavaScript console. To set this up:
>
> 1. open a browser tab and visit <https://example.org>
> 2. in that tab, open the JavaScript console in your [browser's developer tools](/en-US/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools)
> 3. when we show an example, copy it into the console. You will have to reload the page each time you enter a new example, or the console will complain that you have redeclared `fetchPromise`.

In this example, we'll download the JSON file from <https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json>, and log some information about it.

To do this, we'll make an **HTTP request** to the server. In an HTTP request, we send a request message to a remote server, and it sends us back a response. In this case, we'll send a request to get a JSON file from the server. Remember in the last article, where we made HTTP requests using the {{domxref("XMLHttpRequest")}} API? Well, in this article, we'll use the {{domxref("fetch", "fetch()")}} API, which is the modern, promise-based replacement for `XMLHttpRequest`.

Copy this into your browser's JavaScript console:

```js
const fetchPromise = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);

console.log(fetchPromise);

fetchPromise.then((response) => {
  console.log(`Received response: ${response.status}`);
});

console.log("Started request…");
```

Here we are:

1. calling the `fetch()` API, and assigning the return value to the `fetchPromise` variable
2. immediately after, logging the `fetchPromise` variable. This should output something like: `Promise { <state>: "pending" }`, telling us that we have a `Promise` object, and it has a `state` whose value is `"pending"`. The `"pending"` state means that the fetch operation is still going on.
3. passing a handler function into the Promise's **`then()`** method. When (and if) the fetch operation succeeds, the promise will call our handler, passing in a {{domxref("Response")}} object, which contains the server's response.
4. logging a message that we have started the request.

The complete output should be something like:

```plain
Promise { <state>: "pending" }
Started request…
Received response: 200
```

Note that `Started request…` is logged before we receive the response. Unlike a synchronous function, `fetch()` returns while the request is still going on, enabling our program to stay responsive. The response shows the `200` (OK) [status code](/en-US/docs/Web/HTTP/Status), meaning that our request succeeded.

This probably seems a lot like the example in the last article, where we added event handlers to the {{domxref("XMLHttpRequest")}} object. Instead of that, we're passing a handler into the `then()` method of the returned promise.

## Chaining promises

With the `fetch()` API, once you get a `Response` object, you need to call another function to get the response data. In this case, we want to get the response data as JSON, so we would call the {{domxref("Response/json", "json()")}} method of the `Response` object. It turns out that `json()` is also asynchronous. So this is a case where we have to call two successive asynchronous functions.

Try this:

```js
const fetchPromise = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);

fetchPromise.then((response) => {
  const jsonPromise = response.json();
  jsonPromise.then((data) => {
    console.log(data[0].name);
  });
});
```

In this example, as before, we add a `then()` handler to the promise returned by `fetch()`. But this time, our handler calls `response.json()`, and then passes a new `then()` handler into the promise returned by `response.json()`.

This should log "baked beans" (the name of the first product listed in "products.json").

But wait! Remember the last article, where we said that by calling a callback inside another callback, we got successively more nested levels of code? And we said that this "callback hell" made our code hard to understand? Isn't this just the same, only with `then()` calls?

It is, of course. But the elegant feature of promises is that _`then()` itself returns a promise, which will be completed with the result of the function passed to it_. This means that we can (and certainly should) rewrite the above code like this:

```js
const fetchPromise = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);

fetchPromise
  .then((response) => response.json())
  .then((data) => {
    console.log(data[0].name);
  });
```

Instead of calling the second `then()` inside the handler for the first `then()`, we can _return_ the promise returned by `json()`, and call the second `then()` on that return value. This is called **promise chaining** and means we can avoid ever-increasing levels of indentation when we need to make consecutive asynchronous function calls.

Before we move on to the next step, there's one more piece to add. We need to check that the server accepted and was able to handle the request, before we try to read it. We'll do this by checking the status code in the response and throwing an error if it wasn't "OK":

```js
const fetchPromise = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);

fetchPromise
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data[0].name);
  });
```

## Catching errors

This brings us to the last piece: how do we handle errors? The `fetch()` API can throw an error for many reasons (for example, because there was no network connectivity or the URL was malformed in some way) and we are throwing an error ourselves if the server returned an error.

In the last article, we saw that error handling can get very difficult with nested callbacks, making us handle errors at every nesting level.

To support error handling, `Promise` objects provide a {{jsxref("Promise/catch", "catch()")}} method. This is a lot like `then()`: you call it and pass in a handler function. However, while the handler passed to `then()` is called when the asynchronous operation _succeeds_, the handler passed to `catch()` is called when the asynchronous operation _fails_.

If you add `catch()` to the end of a promise chain, then it will be called when any of the asynchronous function calls fails. So you can implement an operation as several consecutive asynchronous function calls, and have a single place to handle all errors.

Try this version of our `fetch()` code. We've added an error handler using `catch()`, and also modified the URL so the request will fail.

```js
const fetchPromise = fetch(
  "bad-scheme://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);

fetchPromise
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data[0].name);
  })
  .catch((error) => {
    console.error(`Could not get products: ${error}`);
  });
```

Try running this version: you should see the error logged by our `catch()` handler.

## Promise terminology

Promises come with some quite specific terminology that it's worth getting clear about.

First, a promise can be in one of three states:

- **pending**: the promise has been created, and the asynchronous function it's associated with has not succeeded or failed yet. This is the state your promise is in when it's returned from a call to `fetch()`, and the request is still being made.
- **fulfilled**: the asynchronous function has succeeded. When a promise is fulfilled, its `then()` handler is called.
- **rejected**: the asynchronous function has failed. When a promise is rejected, its `catch()` handler is called.

Note that what "succeeded" or "failed" means here is up to the API in question: for example, `fetch()` considers a request successful if the server returned an error like [404 Not Found](/en-US/docs/Web/HTTP/Status/404), but not if a network error prevented the request being sent.

Sometimes, we use the term **settled** to cover both **fulfilled** and **rejected**.

A promise is **resolved** if it is settled, or if it has been "locked in" to follow the state of another promise.

The article [Let's talk about how to talk about promises](https://thenewtoys.dev/blog/2021/02/08/lets-talk-about-how-to-talk-about-promises/) gives a great explanation of the details of this terminology.

## Combining multiple promises

The promise chain is what you need when your operation consists of several asynchronous functions, and you need each one to complete before starting the next one. But there are other ways you might need to combine asynchronous function calls, and the `Promise` API provides some helpers for them.

Sometimes, you need all the promises to be fulfilled, but they don't depend on each other. In a case like that, it's much more efficient to start them all off together, then be notified when they have all fulfilled. The {{jsxref("Promise/all", "Promise.all()")}} method is what you need here. It takes an array of promises and returns a single promise.

The promise returned by `Promise.all()` is:

- fulfilled when and if _all_ the promises in the array are fulfilled. In this case, the `then()` handler is called with an array of all the responses, in the same order that the promises were passed into `all()`.
- rejected when and if _any_ of the promises in the array are rejected. In this case, the `catch()` handler is called with the error thrown by the promise that rejected.

For example:

```js
const fetchPromise1 = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);
const fetchPromise2 = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found",
);
const fetchPromise3 = fetch(
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json",
);

Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
  .then((responses) => {
    for (const response of responses) {
      console.log(`${response.url}: ${response.status}`);
    }
  })
  .catch((error) => {
    console.error(`Failed to fetch: ${error}`);
  });
```

Here, we're making three `fetch()` requests to three different URLs. If they all succeed, we will log the response status of each one. If any of them fail, then we're logging the failure.

With the URLs we've provided, all the requests should be fulfilled, although for the second, the server will return `404` (Not Found) instead of `200` (OK) because the requested file does not exist. So the output should be:

```plain
https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json: 200
https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found: 404
https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json: 200
```

If we try the same code with a badly formed URL, like this:

```js
const fetchPromise1 = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);
const fetchPromise2 = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found",
);
const fetchPromise3 = fetch(
  "bad-scheme://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json",
);

Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
  .then((responses) => {
    for (const response of responses) {
      console.log(`${response.url}: ${response.status}`);
    }
  })
  .catch((error) => {
    console.error(`Failed to fetch: ${error}`);
  });
```

Then we can expect the `catch()` handler to run, and we should see something like:

```plain
Failed to fetch: TypeError: Failed to fetch
```

Sometimes, you might need any one of a set of promises to be fulfilled, and don't care which one. In that case, you want {{jsxref("Promise/any", "Promise.any()")}}. This is like `Promise.all()`, except that it is fulfilled as soon as any of the array of promises is fulfilled, or rejected if all of them are rejected:

```js
const fetchPromise1 = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);
const fetchPromise2 = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found",
);
const fetchPromise3 = fetch(
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json",
);

Promise.any([fetchPromise1, fetchPromise2, fetchPromise3])
  .then((response) => {
    console.log(`${response.url}: ${response.status}`);
  })
  .catch((error) => {
    console.error(`Failed to fetch: ${error}`);
  });
```

Note that in this case we can't predict which fetch request will complete first.

These are just two of the extra `Promise` functions for combining multiple promises. To learn about the rest, see the {{jsxref("Promise")}} reference documentation.

## async and await

The {{jsxref("Statements/async_function", "async")}} keyword gives you a simpler way to work with asynchronous promise-based code. Adding `async` at the start of a function makes it an async function:

```js
async function myFunction() {
  // This is an async function
}
```

Inside an async function, you can use the `await` keyword before a call to a function that returns a promise. This makes the code wait at that point until the promise is settled, at which point the fulfilled value of the promise is treated as a return value, or the rejected value is thrown.

This enables you to write code that uses asynchronous functions but looks like synchronous code. For example, we could use it to rewrite our fetch example:

```js
async function fetchProducts() {
  try {
    // after this line, our function will wait for the `fetch()` call to be settled
    // the `fetch()` call will either return a Response or throw an error
    const response = await fetch(
      "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
    );
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    // after this line, our function will wait for the `response.json()` call to be settled
    // the `response.json()` call will either return the parsed JSON object or throw an error
    const data = await response.json();
    console.log(data[0].name);
  } catch (error) {
    console.error(`Could not get products: ${error}`);
  }
}

fetchProducts();
```

Here, we are calling `await fetch()`, and instead of getting a `Promise`, our caller gets back a fully complete `Response` object, just as if `fetch()` were a synchronous function!

We can even use a `try...catch` block for error handling, exactly as we would if the code were synchronous.

Note though that async functions always return a promise, so you can't do something like:

```js example-bad
async function fetchProducts() {
  try {
    const response = await fetch(
      "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
    );
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Could not get products: ${error}`);
  }
}

const promise = fetchProducts();
console.log(promise[0].name); // "promise" is a Promise object, so this will not work
```

Instead, you'd need to do something like:

```js
async function fetchProducts() {
  try {
    const response = await fetch(
      "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
    );
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Could not get products: ${error}`);
  }
}

const promise = fetchProducts();
promise.then((data) => console.log(data[0].name));
```

Also, note that you can only use `await` inside an `async` function, unless your code is in a [JavaScript module](/en-US/docs/Web/JavaScript/Guide/Modules). That means you can't do this in a normal script:

```js
try {
  // using await outside an async function is only allowed in a module
  const response = await fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  );
  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }
  const data = await response.json();
  console.log(data[0].name);
} catch (error) {
  console.error(`Could not get products: ${error}`);
}
```

You'll probably use `async` functions a lot where you might otherwise use promise chains, and they make working with promises much more intuitive.

Keep in mind that just like a promise chain, `await` forces asynchronous operations to be completed in series. This is necessary if the result of the next operation depends on the result of the last one, but if that's not the case then something like `Promise.all()` will be more performant.

## Conclusion

Promises are the foundation of asynchronous programming in modern JavaScript. They make it easier to express and reason about sequences of asynchronous operations without deeply nested callbacks, and they support a style of error handling that is similar to the synchronous `try...catch` statement.

The `async` and `await` keywords make it easier to build an operation from a series of consecutive asynchronous function calls, avoiding the need to create explicit promise chains, and allowing you to write code that looks just like synchronous code.

Promises work in the latest versions of all modern browsers; the only place where promise support will be a problem is in Opera Mini and IE11 and earlier versions.

We didn't touch on all features of promises in this article, just the most interesting and useful ones. As you start to learn more about promises, you'll come across more features and techniques.

Many modern Web APIs are promise-based, including [WebRTC](/en-US/docs/Web/API/WebRTC_API), [Web Audio API](/en-US/docs/Web/API/Web_Audio_API), [Media Capture and Streams API](/en-US/docs/Web/API/Media_Capture_and_Streams_API), and many more.

## See also

- [`Promise()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [Using promises](/en-US/docs/Web/JavaScript/Guide/Using_promises)
- [We have a problem with promises](https://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html) by Nolan Lawson
- [Let's talk about how to talk about promises](https://thenewtoys.dev/blog/2021/02/08/lets-talk-about-how-to-talk-about-promises/)

{{PreviousMenuNext("Learn/JavaScript/Asynchronous/Introducing", "Learn/JavaScript/Asynchronous/Implementing_a_promise-based_API", "Learn/JavaScript/Asynchronous")}}

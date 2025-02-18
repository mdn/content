---
title: How to implement a promise-based API
slug: Learn_web_development/Extensions/Async_JS/Implementing_a_promise-based_API
page-type: learn-module-chapter
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Extensions/Async_JS/Promises", "Learn_web_development/Extensions/Async_JS/Introducing_workers", "Learn_web_development/Extensions/Async_JS")}}

In the last article we discussed how to use APIs that return promises. In this article we'll look at the other side — how to _implement_ APIs that return promises. This is a much less common task than using promise-based APIs, but it's still worth knowing about.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerequisites:</th>
      <td>
         A solid understanding of <a href="/en-US/docs/Learn_web_development/Core/Scripting">JavaScript fundamentals</a> and asynchronous concepts, as covered in previous lessons in this module.
      </td>
    </tr>
    <tr>
      <th scope="row">Learning outcomes:</th>
      <td>Understand how to implement promise-based APIs.</td>
    </tr>
  </tbody>
</table>

Generally, when you implement a promise-based API, you'll be wrapping an asynchronous operation, which might use events, or plain callbacks, or a message-passing model. You'll arrange for a `Promise` object to handle the success or failure of that operation properly.

## Implementing an alarm() API

In this example we'll implement a promise-based alarm API, called `alarm()`. It will take as arguments the name of the person to wake up and a delay in milliseconds to wait before waking the person up. After the delay, the function will send a "Wake up!" message, including the name of the person we need to wake up.

### Wrapping setTimeout()

We'll use the {{domxref("Window.setTimeout", "setTimeout()")}} API to implement our `alarm()` function. The `setTimeout()` API takes as arguments a callback function and a delay, given in milliseconds. When `setTimeout()` is called, it starts a timer set to the given delay, and when the time expires, it calls the given function.

In the example below, we call `setTimeout()` with a callback function and a delay of 1000 milliseconds:

```html
<button id="set-alarm">Set alarm</button>
<div id="output"></div>
```

```css hidden
div {
  margin: 0.5rem 0;
}
```

```js
const output = document.querySelector("#output");
const button = document.querySelector("#set-alarm");

function setAlarm() {
  setTimeout(() => {
    output.textContent = "Wake up!";
  }, 1000);
}

button.addEventListener("click", setAlarm);
```

{{EmbedLiveSample("Wrapping setTimeout()", 600, 100)}}

### The Promise() constructor

Our `alarm()` function will return a `Promise` that is fulfilled when the timer expires. It will pass a "Wake up!" message into the `then()` handler, and will reject the promise if the caller supplies a negative delay value.

The key component here is the {{jsxref("Promise/Promise", "Promise()")}} constructor. The `Promise()` constructor takes a single function as an argument. We'll call this function the `executor`. When you create a new promise you supply the implementation of the executor.

This executor function itself takes two arguments, which are both also functions, and which are conventionally called `resolve` and `reject`. In your executor implementation, you call the underlying asynchronous function. If the asynchronous function succeeds, you call `resolve`, and if it fails, you call `reject`. If the executor function throws an error, `reject` is called automatically. You can pass a single parameter of any type into `resolve` and `reject`.

So we can implement `alarm()` like this:

```js
function alarm(person, delay) {
  return new Promise((resolve, reject) => {
    if (delay < 0) {
      reject(new Error("Alarm delay must not be negative"));
      return;
    }
    setTimeout(() => {
      resolve(`Wake up, ${person}!`);
    }, delay);
  });
}
```

This function creates and returns a new `Promise`. Inside the executor for the promise, we:

- check that `delay` is not negative, and call `reject`, passing in a custom error if it is.

- call `setTimeout()`, passing a callback and `delay`. The callback will be called when the timer expires, and in the callback we call `resolve`, passing in our `"Wake up!"` message.

## Using the alarm() API

This part should be quite familiar from the last article. We can call `alarm()`, and on the returned promise call `then()` and `catch()` to set handlers for promise fulfillment and rejection.

```html hidden
<div>
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" size="4" value="Matilda" />
</div>

<div>
  <label for="delay">Delay:</label>
  <input type="text" id="delay" name="delay" size="4" value="1000" />
</div>

<button id="set-alarm">Set alarm</button>
<div id="output"></div>
```

```css hidden
button {
  display: block;
}

div,
button {
  margin: 0.5rem 0;
}
```

```js
const name = document.querySelector("#name");
const delay = document.querySelector("#delay");
const button = document.querySelector("#set-alarm");
const output = document.querySelector("#output");

function alarm(person, delay) {
  return new Promise((resolve, reject) => {
    if (delay < 0) {
      reject(new Error("Alarm delay must not be negative"));
      return;
    }
    setTimeout(() => {
      resolve(`Wake up, ${person}!`);
    }, delay);
  });
}

button.addEventListener("click", () => {
  alarm(name.value, delay.value)
    .then((message) => (output.textContent = message))
    .catch((error) => (output.textContent = `Couldn't set alarm: ${error}`));
});
```

{{EmbedLiveSample("Using the alarm() API", 600, 160)}}

Try setting different values for "Name" and "Delay". Try setting a negative value for "Delay".

## Using async and await with the alarm() API

Since `alarm()` returns a `Promise`, we can do everything with it that we could do with any other promise: promise chaining, `Promise.all()`, and `async` / `await`:

```html hidden
<div>
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" size="4" value="Matilda" />
</div>

<div>
  <label for="delay">Delay:</label>
  <input type="text" id="delay" name="delay" size="4" value="1000" />
</div>

<button id="set-alarm">Set alarm</button>
<div id="output"></div>
```

```css hidden
button {
  display: block;
}

div,
button {
  margin: 0.5rem 0;
}
```

```js
const name = document.querySelector("#name");
const delay = document.querySelector("#delay");
const button = document.querySelector("#set-alarm");
const output = document.querySelector("#output");

function alarm(person, delay) {
  return new Promise((resolve, reject) => {
    if (delay < 0) {
      reject(new Error("Alarm delay must not be negative"));
      return;
    }
    setTimeout(() => {
      resolve(`Wake up, ${person}!`);
    }, delay);
  });
}

button.addEventListener("click", async () => {
  try {
    const message = await alarm(name.value, delay.value);
    output.textContent = message;
  } catch (error) {
    output.textContent = `Couldn't set alarm: ${error}`;
  }
});
```

{{EmbedLiveSample("Using async and await with the alarm() API", 600, 160)}}

## See also

- [`Promise()` constructor](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise)
- [Using promises](/en-US/docs/Web/JavaScript/Guide/Using_promises)

{{PreviousMenuNext("Learn_web_development/Extensions/Async_JS/Promises", "Learn_web_development/Extensions/Async_JS/Introducing_workers", "Learn_web_development/Extensions/Async_JS")}}

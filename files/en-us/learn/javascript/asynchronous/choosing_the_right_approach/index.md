---
title: Choosing the right approach
slug: Learn/JavaScript/Asynchronous/Choosing_the_right_approach
tags:
  - Beginner
  - Intervals
  - JavaScript
  - Learn
  - Optimize
  - Promises
  - async
  - asynchronous
  - await
  - requestAnimationFrame
  - setInterval
  - setTimeout
  - timeouts
---
{{LearnSidebar}}{{PreviousMenu("Learn/JavaScript/Asynchronous/Async_await", "Learn/JavaScript/Asynchronous")}}

To finish this module off, we'll provide a brief discussion of the different coding techniques and features we've discussed throughout, looking at which one you should use when, with recommendations and reminders of common pitfalls where appropriate. We'll probably add to this resource as time goes on.

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
        To be able to make a sound choice of when to use different asynchronous
        programming techniques.
      </td>
    </tr>
  </tbody>
</table>

## Asynchronous callbacks

Generally found in old-style APIs, involves a function being passed into another function as a parameter, which is then invoked when an asynchronous operation has been completed, so that the callback can in turn do something with the result. This is the precursor to promises; it's not as efficient or flexible. Use only when necessary.

| Single delayed operation | Repeating operation       | Multiple sequential operations | Multiple simultaneous operations |
| ------------------------ | ------------------------- | ------------------------------ | -------------------------------- |
| No                       | Yes (recursive callbacks) | Yes (nested callbacks)         | No                               |

### Code example

An example that loads a resource via the [`XMLHttpRequest` API](/en-US/docs/Web/API/XMLHttpRequest) ([run it live](https://mdn.github.io/learning-area/javascript/asynchronous/introducing/xhr-async-callback.html), and [see the source](https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/introducing/xhr-async-callback.html)):

```js
function loadAsset(url, type, callback) {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.responseType = type;

  xhr.onload = function() {
    callback(xhr.response);
  };

  xhr.send();
}

function displayImage(blob) {
  let objectURL = URL.createObjectURL(blob);

  let image = document.createElement('img');
  image.src = objectURL;
  document.body.appendChild(image);
}

loadAsset('coffee.jpg', 'blob', displayImage);
```

### Pitfalls

- Nested callbacks can be cumbersome and hard to read (i.e. "callback hell").
- Failure callbacks need to be called once for each level of nesting, whereas with promises you can just use a single `.catch()` block to handle the errors for the entire chain.
- Async callbacks just aren't very graceful.
- Promise callbacks are always called in the strict order they are placed in the event queue; async callbacks aren't.
- Async callbacks lose full control of how the function will be executed when passed to a third-party library.

### Browser compatibility

Really good general support, although the exact support for callbacks in APIs depends on the particular API. Refer to the reference documentation for the API you're using for more specific support info.

### Further information

- [Introducing asynchronous JavaScript](/en-US/docs/Learn/JavaScript/Asynchronous/Introducing), in particular [Async callbacks](/en-US/docs/Learn/JavaScript/Asynchronous/Introducing#async_callbacks)

## setTimeout()

[`setTimeout()`](/en-US/docs/Web/API/setTimeout) is a method that allows you to run a function after an arbitrary amount of time has passed.

| Single delayed operation | Repeating operation      | Multiple sequential operations | Multiple simultaneous operations |
| ------------------------ | ------------------------ | ------------------------------ | -------------------------------- |
| Yes                      | Yes (recursive timeouts) | Yes (nested timeouts)          | No                               |

### Code example

Here the browser will wait two seconds before executing the anonymous function, then will display the alert message ([see it running live](https://mdn.github.io/learning-area/javascript/asynchronous/loops-and-intervals/simple-settimeout.html), and [see the source code](https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/loops-and-intervals/simple-settimeout.html)):

```js
let myGreeting = setTimeout(function() {
  alert('Hello, Mr. Universe!');
}, 2000)
```

### Pitfalls

You can use recursive `setTimeout()` calls to run a function repeatedly in a similar fashion to `setInterval()`, using code like this:

```js
let i = 1;
setTimeout(function run() {
  console.log(i);
  i++;

  setTimeout(run, 100);
}, 100);
```

There is a difference between recursive `setTimeout()` and `setInterval()`:

- Recursive `setTimeout()` guarantees at least the specified amount of time (100ms in this example) will elapse between the executions; the code will run and then wait 100 milliseconds before it runs again. The interval will be the same regardless of how long the code takes to run.
- With `setInterval()`, the interval we choose _includes_ the time taken to execute the code we want to run in. Let's say that the code takes 40 milliseconds to run — the interval then ends up being only 60 milliseconds.

When your code has the potential to take longer to run than the time interval you’ve assigned, it’s better to use recursive `setTimeout()` — this will keep the time interval constant between executions regardless of how long the code takes to execute, and you won't get errors.

### Browser compatibility

{{Compat("api.setTimeout")}}

### Further information

- [Cooperative asynchronous JavaScript: Timeouts and intervals](/en-US/docs/Learn/JavaScript/Asynchronous/Timeouts_and_intervals), in particular [setTimeout()](</en-US/docs/Learn/JavaScript/Asynchronous/Timeouts_and_intervals#settimeout()>)
- [setTimeout() reference](/en-US/docs/Web/API/setTimeout)

## setInterval()

[`setInterval()`](/en-US/docs/Web/API/setInterval) is a method that allows you to run a function repeatedly with a set interval of time between each execution. Not as efficient as [`requestAnimationFrame()`](/en-US/docs/Web/API/window/requestAnimationFrame), but allows you to choose a running rate/frame rate.

| Single delayed operation | Repeating operation | Multiple sequential operations | Multiple simultaneous operations |
| ------------------------ | ------------------- | ------------------------------ | -------------------------------- |
| No                       | Yes                 | No (unless they are the same)  | No                               |

### Code example

The following function creates a new [`Date()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) object, extracts a time string out of it using [`toLocaleTimeString()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString), and then displays it in the UI. We then run it once per second using `setInterval()`, creating the effect of a digital clock that updates once per second ([see this live](https://mdn.github.io/learning-area/javascript/asynchronous/loops-and-intervals/setinterval-clock.html), and also [see the source](https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/loops-and-intervals/setinterval-clock.html)):

```js
function displayTime() {
   let date = new Date();
   let time = date.toLocaleTimeString();
   document.querySelector('.clock').textContent = time;
}

displayTime();
const createClock = setInterval(displayTime, 1000);
```

### Pitfalls

- The frame rate isn't optimized for the system the animation is running on, and can be somewhat inefficient. Unless you need to choose a specific (slower) framerate, it is generally better to use `requestAnimationFrame()`.

### Browser compatibility

{{Compat("api.setInterval")}}

### Further information

- [Cooperative asynchronous JavaScript: Timeouts and intervals](/en-US/docs/Learn/JavaScript/Asynchronous/Timeouts_and_intervals), in particular [setInterval()](/en-US/docs/Web/API/setInterval)
- [setInterval() reference](/en-US/docs/Web/API/setInterval)

## requestAnimationFrame()

[`requestAnimationFrame()`](/en-US/docs/Web/API/window/requestAnimationFrame) is a method that allows you to run a function repeatedly, and efficiently, at the best framerate available given the current browser/system. You should, if at all possible, use this instead of `setInterval()`/recursive `setTimeout()`, unless you need a specific framerate.

| Single delayed operation | Repeating operation | Multiple sequential operations | Multiple simultaneous operations |
| ------------------------ | ------------------- | ------------------------------ | -------------------------------- |
| No                       | Yes                 | No (unless it is the same one) | No                               |

### Code example

A simple animated spinner; you can find this [example live on GitHub](https://mdn.github.io/learning-area/javascript/asynchronous/loops-and-intervals/simple-raf-spinner.html) (see the [source code](https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/loops-and-intervals/simple-raf-spinner.html) also):

```js
const spinner = document.querySelector('div');
let rotateCount = 0;
let startTime = null;
let rAF;

function draw(timestamp) {
    if(!startTime) {
        startTime = timestamp;
    }

    rotateCount = (timestamp - startTime) / 3;

    if(rotateCount > 359) {
        rotateCount %= 360;
    }

    spinner.style.transform = 'rotate(' + rotateCount + 'deg)';

    rAF = requestAnimationFrame(draw);
}

draw();
```

### Pitfalls

- You can't choose a specific framerate with `requestAnimationFrame()`. If you need to run your animation at a slower framerate, you'll need to use `setInterval()` or recursive `setTimeout()`.

### Browser compatibility

{{Compat("api.Window.requestAnimationFrame")}}

### Further information

- [Cooperative asynchronous JavaScript: Timeouts and intervals](/en-US/docs/Learn/JavaScript/Asynchronous/Timeouts_and_intervals), in particular [requestAnimationFrame()](</en-US/docs/Learn/JavaScript/Asynchronous/Timeouts_and_intervals#requestanimationframe()>)
- [requestAnimationFrame() reference](/en-US/docs/Web/API/window/requestAnimationFrame)

## Promises

[Promises](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) are a JavaScript feature that allows you to run asynchronous operations and wait until it is definitely complete before running another operation based on its result. Promises are the backbone of modern asynchronous JavaScript.

| Single delayed operation | Repeating operation | Multiple sequential operations | Multiple simultaneous operations |
| ------------------------ | ------------------- | ------------------------------ | -------------------------------- |
| No                       | No                  | Yes                            | See `Promise.all()`, below       |

### Code example

The following code fetches an image from the server and displays it inside an {{htmlelement("img")}} element; [see it live also](https://mdn.github.io/learning-area/javascript/asynchronous/promises/simple-fetch-chained.html), and see also [the source code](https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/promises/simple-fetch-chained.html):

```js
// Call the fetch() method to fetch the image, and store it in a variable
fetch('coffee.jpg')
// Use a then() block to respond to the promise's successful completion
// by taking the returned response and running blob() on it to transform it into a blob
// blob() also returns a promise; when it successfully completes it returns
// the blob object in the callback
.then(response => {
  // The promise fetch() does NOT reject on HTTP errors,
  // so we need to check the boolean Response.ok and throw manually a new Error()
  // for the promise2 to be rejected (for example when a 404 occurs).
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  } else {
    return response.blob();
  }
})
.then(myBlob => {
  // Create an object URL that points to the blob object
  let objectURL = URL.createObjectURL(myBlob);
  // Create an <img> element to display the blob (it's an image)
  let image = document.createElement('img');
  // Set the src of the <img> to the object URL so the image displays it
  image.src = objectURL;
  // Append the <img> element to the DOM
  document.body.appendChild(image);
})
// If there is a problem, log a useful error message to the console
.catch(e => {
  console.log('There has been a problem with your fetch operation: ' + e.message);
});
```

### Pitfalls

Promise chains can be complex and hard to parse. If you nest a number of promises, you can end up with similar troubles to callback hell. For example:

```js
remotedb.allDocs({
  include_docs: true,
  attachments: true
}).then(function (result) {
  let docs = result.rows;
  docs.forEach(function(element) {
    localdb.put(element.doc).then(function(response) {
      alert("Pulled doc with id " + element.doc._id + " and added to local db.");
    }).catch(function (err) {
      if (err.name == 'conflict') {
        localdb.get(element.doc._id).then(function (resp) {
          localdb.remove(resp._id, resp._rev).then(function (resp) {
// et cetera...
```

It is better to use the chaining power of promises to go with a flatter, easier to parse structure:

```js
remotedb.allDocs(...).then(function (resultOfAllDocs) {
  return localdb.put(...);
}).then(function (resultOfPut) {
  return localdb.get(...);
}).then(function (resultOfGet) {
  return localdb.put(...);
}).catch(function (err) {
  console.log(err);
});
```

or even:

```js
remotedb.allDocs(...)
.then(resultOfAllDocs => {
  return localdb.put(...);
})
.then(resultOfPut => {
  return localdb.get(...);
})
.then(resultOfGet => {
  return localdb.put(...);
})
.catch(err => console.log(err));
```

That covers a lot of the basics. For a much more complete treatment, see the excellent [We have a problem with promises](https://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html) by Nolan Lawson.

### Browser compatibility

{{Compat("javascript.builtins.Promise")}}

### Further information

- [Graceful asynchronous programming with Promises](/en-US/docs/Learn/JavaScript/Asynchronous/Promises)
- [Using promises](/en-US/docs/Web/JavaScript/Guide/Using_promises)
- [Promise reference](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

## Promise.all()

A JavaScript feature that allows you to wait for multiple promises to complete before then running a further operation based on the results of all the other promises.

| Single delayed operation | Repeating operation | Multiple sequential operations | Multiple simultaneous operations |
| ------------------------ | ------------------- | ------------------------------ | -------------------------------- |
| No                       | No                  | No                             | Yes                              |

### Code example

The following example fetches several resources from the server, and uses `Promise.all()` to wait for all of them to be available before then displaying all of them — [see it live](https://mdn.github.io/learning-area/javascript/asynchronous/promises/promise-all.html), and see the [source code](https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/promises/promise-all.html):

```js
function fetchAndDecode(url, type) {
  // Returning the top level promise, so the result of the entire chain is returned out of the function
  return fetch(url).then(response => {
    // Depending on what type of file is being fetched, use the relevant function to decode its contents
    if(type === 'blob') {
      return response.blob();
    } else if(type === 'text') {
      return response.text();
    }
  })
  .catch(e => {
    console.log(`There has been a problem with your fetch operation for resource "${url}": ` + e.message);
  });

}
// Call the fetchAndDecode() method to fetch the images and the text, and store their promises in variables
let coffee = fetchAndDecode('coffee.jpg', 'blob');
let tea = fetchAndDecode('tea.jpg', 'blob');
let description = fetchAndDecode('description.txt', 'text');

// Use Promise.all() to run code only when all three function calls have resolved
Promise.all([coffee, tea, description]).then(values => {
  console.log(values);
  // Store each value returned from the promises in separate variables; create object URLs from the blobs
  let objectURL1 = URL.createObjectURL(values[0]);
  let objectURL2 = URL.createObjectURL(values[1]);
  let descText = values[2];

  // Display the images in <img> elements
  let image1 = document.createElement('img');
  let image2 = document.createElement('img');
  image1.src = objectURL1;
  image2.src = objectURL2;
  document.body.appendChild(image1);
  document.body.appendChild(image2);

  // Display the text in a paragraph
  let para = document.createElement('p');
  para.textContent = descText;
  document.body.appendChild(para);
});
```

### Pitfalls

- If a `Promise.all()` rejects, then one or more of the promises you are feeding into it inside its array parameter must be rejecting, or might not be returning promises at all. You need to check each one to see what they returned.

### Browser compatibility

{{Compat("javascript.builtins.Promise.all")}}

### Further information

- [Running code in response to multiple promises fulfilling](/en-US/docs/Learn/JavaScript/Asynchronous/Promises#running_code_in_response_to_multiple_promises_fulfilling)
- [Promise.all() reference](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)

## Async/await

Syntactic sugar built on top of promises that allows you to run asynchronous operations using syntax that's more like writing synchronous callback code.

| Single delayed operation | Repeating operation | Multiple sequential operations | Multiple simultaneous operations          |
| ------------------------ | ------------------- | ------------------------------ | ----------------------------------------- |
| No                       | No                  | Yes                            | Yes (in combination with `Promise.all()`) |

### Code example

The following example is a refactor of the simple promise example we saw earlier that fetches and displays an image, written using async/await ([see it live](https://mdn.github.io/learning-area/javascript/asynchronous/async-await/simple-refactored-fetch.html), and see the [source code](https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/async-await/simple-refactored-fetch.html)):

```js
async function myFetch() {
  let response = await fetch('coffee.jpg');
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  } else {
    let myBlob = await response.blob();
    let objectURL = URL.createObjectURL(myBlob);
    let image = document.createElement('img');
    image.src = objectURL;
    document.body.appendChild(image);
  }
}

myFetch()
.catch(e => {
  console.log('There has been a problem with your fetch operation: ' + e.message);
});
```

### Pitfalls

- You can't use the `await` operator inside a non-`async` function, or in the top level context of your code. This can sometimes result in an extra function wrapper needing to be created, which can be slightly frustrating in some circumstances, but it is worth it most of the time.
- Browser support for async/await is not as good as that for promises. If you want to use async/await but are concerned about older browser support, you could consider using the [BabelJS](https://babeljs.io/) library — this allows you to write your applications using the latest JavaScript and let Babel figure out what changes, if any, are needed for your user’s browsers.

### Browser compatibility

{{Compat("javascript.statements.async_function")}}

### Further information

- [Making asynchronous programming easier with async and await](/en-US/docs/Learn/JavaScript/Asynchronous/Async_await)
- [Async function reference](/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
- [Await operator reference](/en-US/docs/Web/JavaScript/Reference/Operators/await)

{{PreviousMenu("Learn/JavaScript/Asynchronous/Async_await", "Learn/JavaScript/Asynchronous")}}

## In this module

- [General asynchronous programming concepts](/en-US/docs/Learn/JavaScript/Asynchronous/Concepts)
- [Introducing asynchronous JavaScript](/en-US/docs/Learn/JavaScript/Asynchronous/Introducing)
- [Cooperative asynchronous JavaScript: Timeouts and intervals](/en-US/docs/Learn/JavaScript/Asynchronous/Timeouts_and_intervals)
- [Graceful asynchronous programming with Promises](/en-US/docs/Learn/JavaScript/Asynchronous/Promises)
- [Making asynchronous programming easier with async and await](/en-US/docs/Learn/JavaScript/Asynchronous/Async_await)
- [Choosing the right approach](/en-US/docs/Learn/JavaScript/Asynchronous/Choosing_the_right_approach)

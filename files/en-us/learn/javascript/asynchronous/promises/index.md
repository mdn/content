---
title: Graceful asynchronous programming with Promises
slug: Learn/JavaScript/Asynchronous/Promises
tags:
  - Beginner
  - CodingScripting
  - Guide
  - JavaScript
  - Learn
  - Promises
  - async
  - asynchronous
  - catch
  - finally
  - then
---
{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Asynchronous/Timeouts_and_intervals", "Learn/JavaScript/Asynchronous/Async_await", "Learn/JavaScript/Asynchronous")}}

**Promises** are a comparatively new feature of the JavaScript language that allow you to defer further actions until after a previous action has completed, or respond to its failure. This is useful for setting up a sequence of async operations to work correctly. This article shows you how promises work, how you'll see them in use with web APIs, and how to write your own.

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
      <td>To understand promises and how to use them.</td>
    </tr>
  </tbody>
</table>

## What are promises?

We looked at [Promises](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) briefly in the first article of the course, but here we'll look at them in a lot more depth.

Essentially, a Promise is an object that represents an intermediate state of an operation — in effect, a _promise_ that a result of some kind will be returned at some point in the future. There is no guarantee of exactly when the operation will complete and the result will be returned, but there _is_ a guarantee that when the result is available, or the promise fails, the code you provide will be executed in order to do something else with a successful result, or to gracefully handle a failure case.

Generally, you are less interested in the amount of time an async operation will take to return its result (unless of course, it takes _far_ too long!), and more interested in being able to respond to it being returned, whenever that is. And of course, it's nice that it doesn't block the rest of the code execution.

One of the most common engagements you'll have with promises is with web APIs that return a promise. Let's consider a hypothetical video chat application. The application has a window with a list of the user's friends, and clicking on a button next to a user starts a video call to that user.

That button's handler calls {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} in order to get access to the user's camera and microphone. Since `getUserMedia()` has to ensure that the user has permission to use those devices _and_ ask the user which microphone to use and which camera to use (or whether to be a voice-only call, among other possible options), it can block until not only all of those decisions are made, but also the camera and microphone have been engaged. Also, the user may not respond immediately to these permission requests. This can potentially take a long time.

Since the call to `getUserMedia()` is made from the browser's main thread, the entire browser is blocked until `getUserMedia()` returns! Obviously, that's not an acceptable option; without promises, everything in the browser becomes unusable until the user decides what to do about the camera and microphone. So instead of waiting for the user, getting the chosen devices enabled, and directly returning the {{domxref("MediaStream")}} for the stream created from the selected sources, `getUserMedia()` returns a {{jsxref("promise")}} which is resolved with the {{domxref("MediaStream")}} once it's available.

The code that the video chat application would use might look something like this:

```js
function handleCallButton(evt) {
  setStatusMessage("Calling...");
  navigator.mediaDevices.getUserMedia({video: true, audio: true})
    .then(chatStream => {
      selfViewElem.srcObject = chatStream;
      chatStream.getTracks().forEach(track => myPeerConnection.addTrack(track, chatStream));
      setStatusMessage("Connected");
    }).catch(err => {
      setStatusMessage("Failed to connect");
    });
}
```

This function starts by using a function called `setStatusMessage()` to update a status display with the message "Calling...", indicating that a call is being attempted. It then calls `getUserMedia()`, asking for a stream that has both video and audio tracks, then once that's been obtained, sets up a video element to show the stream coming from the camera as a "self view," then takes each of the stream's tracks and adds them to the [WebRTC](/en-US/docs/Web/API/WebRTC_API) {{domxref("RTCPeerConnection")}} representing a connection to another user. After that, the status display is updated to say "Connected".

If `getUserMedia()` fails, the `catch` block runs. This uses `setStatusMessage()` to update the status box to indicate that an error occurred.

The important thing here is that the `getUserMedia()` call returns almost immediately, even if the camera stream hasn't been obtained yet. Even if the `handleCallButton()` function has already returned to the code that called it, when `getUserMedia()` has finished working, it calls the handler you provide. As long as the app doesn't assume that streaming has begun, it can just keep on running.

> **Note:** You can learn more about this somewhat advanced topic, if you're interested, in the article [Signaling and video calling](/en-US/docs/Web/API/WebRTC_API/Signaling_and_video_calling). Code similar to this, but much more complete, is used in that example.

## The trouble with callbacks

To fully understand why promises are a good thing, it helps to think back to old-style callbacks and to appreciate why they are problematic.

Let's talk about ordering pizza as an analogy. There are certain steps that you have to take for your order to be successful, which doesn't really make sense to try to execute out of order, or in order but before each previous step has quite finished:

1.  You choose what toppings you want. This can take a while if you are indecisive, and may fail if you just can't make up your mind, or decide to get a curry instead.
2.  You then place your order. This can take a while to return a pizza and may fail if the restaurant does not have the required ingredients to cook it.
3.  You then collect your pizza and eat. This might fail if, say, you forgot your wallet so can't pay for the pizza!

With old-style [callbacks](/en-US/docs/Learn/JavaScript/Asynchronous/Introducing#callbacks), a pseudo-code representation of the above functionality might look something like this:

```js
chooseToppings(function(toppings) {
  placeOrder(toppings, function(order) {
    collectOrder(order, function(pizza) {
      eatPizza(pizza);
    }, failureCallback);
  }, failureCallback);
}, failureCallback);
```

This is messy and hard to read (often referred to as "[callback hell](http://callbackhell.com/)"), requires the `failureCallback()` to be called multiple times (once for each nested function), with other issues besides.

### Improvements with promises

Promises make situations like the above much easier to write, parse, and run. If we represented the above pseudo-code using asynchronous promises instead, we'd end up with something like this:

```js
chooseToppings()
.then(function(toppings) {
  return placeOrder(toppings);
})
.then(function(order) {
  return collectOrder(order);
})
.then(function(pizza) {
  eatPizza(pizza);
})
.catch(failureCallback);
```

This is much better — it is easier to see what is going on, we only need a single `.catch()` block to handle all the errors, it doesn't block the main thread (so we can keep playing video games while we wait for the pizza to be ready to collect), and each operation is guaranteed to wait for previous operations to complete before running. We're able to chain multiple asynchronous actions to occur one after another this way because each `.then()` block returns a new promise that resolves when the `.then()` block is done running. Clever, right?

Using arrow functions, you can simplify the code even further:

```js
chooseToppings()
.then(toppings =>
  placeOrder(toppings)
)
.then(order =>
  collectOrder(order)
)
.then(pizza =>
  eatPizza(pizza)
)
.catch(failureCallback);
```

Or even this:

```js
chooseToppings()
.then(toppings => placeOrder(toppings))
.then(order => collectOrder(order))
.then(pizza => eatPizza(pizza))
.catch(failureCallback);
```

This works because with arrow functions `() => x` is valid shorthand for `() => { return x; }`.

You could even do this, since the functions just pass their arguments directly, so there isn't any need for that extra layer of functions:

```js
chooseToppings().then(placeOrder).then(collectOrder).then(eatPizza).catch(failureCallback);
```

This is not quite as easy to read, however, and this syntax might not be usable if your blocks are more complex than what we've shown here.

> **Note:** You can make further improvements with `async`/`await` syntax, which we'll dig into in the next article.

At their most basic, promises are similar to event listeners, but with a few differences:

- A promise can only succeed or fail once. It cannot succeed or fail twice and it cannot switch from success to failure or vice versa once the operation has completed.
- If a promise has succeeded or failed and you later add a success/failure callback, the correct callback will be called, even though the event took place earlier.

## Explaining basic promise syntax: A real example

Promises are important to understand because most modern Web APIs use them for functions that perform potentially lengthy tasks. To use modern web technologies you'll need to use promises. Later on in the chapter, we'll look at how to write your own promise, but for now, we'll look at some simple examples that you'll encounter in Web APIs.

In the first example, we'll use the [`fetch()`](/en-US/docs/Web/API/fetch) method to fetch an image from the web, the {{domxref("Response.blob()")}} method to transform the fetch response's raw body contents into a {{domxref("Blob")}} object, and then display that blob inside an {{htmlelement("img")}} element. This is very similar to the example we looked at in the [first article of the series](/en-US/docs/Learn/JavaScript/Asynchronous/Introducing#asynchronous_javascript), but we'll do it a bit differently as we get you building your own promise-based code.

> **Note:** The following example will not work if you just run it directly from the file (i.e. via a `file://` URL). You need to run it through a [local testing server](/en-US/docs/Learn/Common_questions/set_up_a_local_testing_server), or use an online solution such as [Glitch](https://glitch.com/) or [GitHub pages](/en-US/docs/Learn/Common_questions/Using_Github_pages).

1.  First of all, download our [simple HTML template](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/getting-started/index.html) and the [sample image file](https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/promises/coffee.jpg) that we'll fetch.
2.  Add a {{htmlelement("script")}} element at the bottom of the HTML {{htmlelement("body")}}.
3.  Inside your {{HTMLElement("script")}} element, add the following line:

    ```js
    let promise = fetch('coffee.jpg');
    ```

    This calls the `fetch()` method, passing it the URL of the image to fetch from the network as a parameter. This can also take an options object as an optional second parameter, but we are just using the simplest version for now. We are storing the promise object returned by `fetch()` inside a variable called `promise`. As we said before, this object represents an intermediate state that is initially neither success nor failure — the official term for a promise in this state is **pending**.

4.  To respond to the successful completion of the operation whenever that occurs (in this case, when a {{domxref("Response")}} is returned), we invoke the [`.then()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) method of the promise object. The callback inside the `.then()` block runs only when the promise call completes successfully and returns the {{domxref("Response")}} object — in promise-speak, when it has been **fulfilled**. It is passed the returned {{domxref("Response")}} object as a parameter.

    > **Note:** The way that a `.then()` block works is similar to when you add an event listener to an object using `AddEventListener()`. It doesn't run until an event occurs (when the promise fulfills). The most notable difference is that a `.then()` will only run once for each time it is used, whereas an event listener could be invoked multiple times.

    We immediately run the `blob()` method on this response to ensure that the response body is fully downloaded, and when it is available transform it into a `Blob` object that we can do something with. The result of this is returned like so:

    ```js
    response => response.blob()
    ```

    which is shorthand for

    ```js
    function(response) {
      return response.blob();
    }
    ```

    Unfortunately, we need to do slightly more than this. Fetch promises do not fail on 404 or 500 errors — only on something catastrophic like a network failure. Instead, they succeed, but with the [`response.ok`](/en-US/docs/Web/API/Response/ok) property set to `false`. To produce an error on a 404, for example, we need to check the value of `response.ok`, and if `false`, throw an error, only returning the blob if it is `true`. This can be done like so — add the following lines below your first line of JavaScript.

    ```js
    let promise2 = promise.then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      } else {
        return response.blob();
      }
    });
    ```

5.  Each call to `.then()` creates a new promise. This is very useful; because the `blob()` method also returns a promise, we can handle the `Blob` object it returns on fulfillment by invoking the `.then()` method of the second promise. Because we want to do something a bit more complex to the blob than just run a single method on it and return the result, we'll need to wrap the function body in curly braces this time (otherwise it'll throw an error).

    Add the following to the end of your code:

    ```js
    let promise3 = promise2.then(myBlob => {

    });
    ```

6.  Now let's fill in the body of the `.then()` callback. Add the following lines inside the curly braces:

    ```js
    let objectURL = URL.createObjectURL(myBlob);
    let image = document.createElement('img');
    image.src = objectURL;
    document.body.appendChild(image);
    ```

    Here we are running the {{domxref("URL.createObjectURL()")}} method, passing it as a parameter the `Blob` returned when the second promise fulfills. This will return a URL pointing to the object. Then we create an {{htmlelement("img")}} element, set its `src` attribute to equal the object URL and append it to the DOM, so the image will display on the page!

If you save the HTML file you've just created and load it in your browser, you'll see that the image is displayed in the page as expected. Good work!

> **Note:** You will probably notice that these examples are somewhat contrived. You could just do away with the whole `fetch()` and `blob()` chain, and just create an `<img>` element and set its `src` attribute value to the URL of the image file, `coffee.jpg`. We did, however, pick this example because it demonstrates promises in a nice simple fashion, rather than for its real-world appropriateness.

### Responding to failure

Something is missing — currently, there is nothing to explicitly handle errors if one of the promises fails (**rejects**, in promise-speak). We can add error handling by running the [`.catch()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch) method off the previous promise. Add this now:

```js
let errorCase = promise3.catch(e => {
  console.log('There has been a problem with your fetch operation: ' + e.message);
});
```

To see this in action, try misspelling the URL to the image and reloading the page. The error will be reported in the console of your browser's developer tools.

This doesn't do much more than it would if you just didn't bother including the `.catch()` block at all, but think about it — this allows us to control error handling exactly how we want. In a real app, your `.catch()` block could retry fetching the image, or show a default image, or prompt the user to provide a different image URL, or whatever.

> **Note:** You can see [our version of the example live](https://mdn.github.io/learning-area/javascript/asynchronous/promises/simple-fetch.html) (see the [source code](https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/promises/simple-fetch.html) also).

### Chaining the blocks together

This is a very longhand way of writing this out; we've deliberately done this to help you understand what is going on clearly. As shown earlier on in the article, you can chain together `.then()` blocks (and also `.catch()` blocks). The above code could also be written like this (see also [simple-fetch-chained.html](https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/promises/simple-fetch-chained.html) on GitHub):

```js
fetch('coffee.jpg')
.then(response => {
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  } else {
    return response.blob();
  }
})
.then(myBlob => {
  let objectURL = URL.createObjectURL(myBlob);
  let image = document.createElement('img');
  image.src = objectURL;
  document.body.appendChild(image);
})
.catch(e => {
  console.log('There has been a problem with your fetch operation: ' + e.message);
});
```

Bear in mind that the value returned by a fulfilled promise becomes the parameter passed to the next `.then()` block's callback function.

> **Note:** `.then()`/`.catch()` blocks in promises are basically the async equivalent of a [`try...catch`](/en-US/docs/Web/JavaScript/Reference/Statements/try...catch) block in sync code. Bear in mind that synchronous `try...catch` won't work in async code.

## Promise terminology recap

There was a lot to cover in the above section, so let's go back over it quickly to give you a short guide that you can bookmark and use to refresh your memory in the future. You should also go over the above section again a few more times to make sure these concepts stick.

1.  When a promise is created, it is neither in a success or failure state. It is said to be **pending**.
2.  When a promise returns, it is said to be **resolved**.

    1.  A successfully resolved promise is said to be **fulfilled**. It returns a value, which can be accessed by chaining a `.then()` block onto the end of the promise chain. The callback function inside the `.then()` block will contain the promise's return value.
    2.  An unsuccessful resolved promise is said to be **rejected**. It returns a **reason**, an error message stating why the promise was rejected. This reason can be accessed by chaining a `.catch()` block onto the end of the promise chain.

## Running code in response to multiple promises fulfilling

The above example showed us some of the real basics of using promises. Now let's look at some more advanced features. For a start, chaining processes to occur one after the other is all fine, but what if you want to run some code only after a whole bunch of promises have _all_ fulfilled?

You can do this with the ingeniously named [`Promise.all()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all) static method. This takes an array of promises as an input parameter and returns a new `Promise` object that will fulfil only if and when _all_ promises in the array fulfil. It looks something like this:

```js
Promise.all([a, b, c]).then(values => {
  ...
});
```

If they all fulfil, the chained `.then()` block's callback function will be passed an array containing all those results as a parameter. If any of the promises passed to `Promise.all()` reject, the whole block will reject.

This can be very useful. Imagine that we’re fetching information to dynamically populate a UI feature on our page with content. In many cases, it makes sense to receive all the data and only then show the complete content, rather than displaying partial information.

Let's build another example to show this in action.

1.  Download a fresh copy of our [page template](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/getting-started/index.html), and again put a `<script>` element just before the closing `</body>` tag.
2.  Download our source files ([coffee.jpg](https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/promises/coffee.jpg), [tea.jpg](https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/promises/tea.jpg), and [description.txt](https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/promises/description.txt)), or feel free to substitute your own.
3.  In our script, we'll first define a function that returns the promises we want to send to `Promise.all()`. This would be easy if we just wanted to run the `Promise.all()` block in response to three `fetch()` operations completing. We could just do something like:

    ```js
    let a = fetch(url1);
    let b = fetch(url2);
    let c = fetch(url3);

    Promise.all([a, b, c]).then(values => {
      ...
    });
    ```

    When the promise is fulfilled, the `values` passed into the fulfillment handler would contain three `Response` objects, one for each of the `fetch()` operations that have completed.

    However, we don't want to do this. Our code doesn't care when the `fetch()` operations are done. Instead, what we want is the loaded data. That means we want to run the `Promise.all()` block when we get back usable blobs representing the images, and a usable text string. We can write a function that does this; add the following inside your `<script>` element:

    ```js
    function fetchAndDecode(url, type) {
      return fetch(url).then(response => {
        if(!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        } else {
          if(type === 'blob') {
            return response.blob();
          } else if(type === 'text') {
            return response.text();
          }
        }
      })
      .catch(e => {
        console.log(`There has been a problem with your fetch operation for resource "${url}": ` + e.message);
      });
    }
    ```

    This looks a bit complex, so let's run through it step by step:

    1.  First of all, we define the function, passing it a URL and a string representing the type of resource it is fetching.
    2.  Inside the function body, we have a similar structure to what we saw in the first example — we call the `fetch()` function to fetch the resource at the specified URL, then chain it onto another promise that returns the decoded (or "read") response body. This was always the `blob()` method in the previous example.
    3.  However, two things are different here:

        - First of all, the second promise we return is different depending on what the `type` value is. Inside the `.then()` callback function, we include a simple `if ... else if` statement to return a different promise depending on what type of file we need to decode (in this case we've got a choice of `blob` or `text`, but it would be easy to extend this to deal with other types as well).
        - Second, we have added the `return` keyword before the `fetch()` call. The effect this has is to run the entire chain and then run the final result (i.e. the promise returned by `blob()` or `text()`) as the return value of the function we've just defined. In effect, the `return` statements pass the results back up the chain to the top.

    4.  At the end of the block, we chain on a `.catch()` call, to handle any error cases that may occur with any of the promises passed in the array to `.all()`. If any of the promises reject, the `.catch()` block will let you know which one had a problem. The `.all()` block (see below) will still fulfill, but it won't display the resources that had problems. Remember that, once you handle the promise with a  `.catch()` block, the resulting promise is considered resolved but with a value of `undefined`; that's why in this case the `.all()` block will always get fulfilled. If you wanted the `.all()` to reject, you'd have to chain the `.catch()` block on to the end of the `.all()` instead.

    The code inside the function body is async and promise-based, therefore in effect, the entire function acts like a promise — convenient.

4.  Next, we call our function three times to begin the process of fetching and decoding the images and text and store each of the returned promises in a variable. Add the following below your previous code:

    ```js
    let coffee = fetchAndDecode('coffee.jpg', 'blob');
    let tea = fetchAndDecode('tea.jpg', 'blob');
    let description = fetchAndDecode('description.txt', 'text');
    ```

5.  Next, we will define a `Promise.all()` block to run some code only when all three of the promises stored above have successfully fulfilled. To begin with, add a block with an empty callback function inside the `.then()` call, like so:

    ```js
    Promise.all([coffee, tea, description]).then(values => {

    });
    ```

    You can see that it takes an array containing the promises as a parameter. The `.then()` callback function will only run when all three promises resolve; when that happens, it will be passed an array containing the results from the individual promises (i.e. the decoded response bodies), kind of like \[coffee-results, tea-results, description-results].

6.  Finally, add the following inside the callback. Here we use some fairly simple sync code to store the results in separate variables (creating object URLs from the blobs), then display the images and text on the page.

    ```js
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
    ```

7.  Save and refresh and you should see your UI components all loaded, albeit in a not particularly attractive way!

The code we provided here for displaying the items is fairly rudimentary but works as an explainer for now.

> **Note:** If you get stuck, you can compare your version of the code to ours, to see what it is meant to look like — [see it live](https://mdn.github.io/learning-area/javascript/asynchronous/promises/promise-all.html), and see the [source code](https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/promises/promise-all.html).

> **Note:** If you were improving this code, you might want to loop through a list of items to display, fetching and decoding each one, and then loop through the results inside `Promise.all()`, running a different function to display each one depending on what the type of code was. This would make it work for any number of items, not just three.
>
> Also, you could determine what the type of file is being fetched without needing an explicit `type` property. You could, for example, check the {{HTTPHeader("Content-Type")}} HTTP header of the response in each case using [`response.headers.get("content-type")`](/en-US/docs/Web/API/Headers/get), and then react accordingly.

## Running some final code after a promise fulfills/rejects

There will be cases where you want to run a final block of code after a promise completes, regardless of whether it fulfilled or rejected. Previously you'd have to include the same code in both the `.then()` and `.catch()` callbacks, for example:

```js
myPromise
.then(response => {
  doSomething(response);
  runFinalCode();
})
.catch(e => {
  returnError(e);
  runFinalCode();
});
```

In more recent modern browsers, the [`.finally()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/finally) method is available, which can be chained onto the end of your regular promise chain allowing you to cut down on code repetition and do things more elegantly. The above code can now be written as follows:

```js
myPromise
.then(response => {
  doSomething(response);
})
.catch(e => {
  returnError(e);
})
.finally(() => {
  runFinalCode();
});
```

For a real example, take a look at our [promise-finally.html demo](https://mdn.github.io/learning-area/javascript/asynchronous/promises/promise-finally.html) (see the [source code](https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/promises/promise-finally.html) also). This works the same as the `Promise.all()` demo we looked at in the above section, except that in the `fetchAndDecode()` function we chain a `finally()` call on to the end of the chain:

```js
function fetchAndDecode(url, type) {
  return fetch(url).then(response => {
    if(!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    } else {
      if(type === 'blob') {
        return response.blob();
      } else if(type === 'text') {
        return response.text();
      }
    }
  })
  .catch(e => {
    console.log(`There has been a problem with your fetch operation for resource "${url}": ` + e.message);
  })
  .finally(() => {
    console.log(`fetch attempt for "${url}" finished.`);
  });
}
```

This logs a simple message to the console to tell us when each fetch attempt has finished.

> **Note:** `then()`/`catch()`/`finally()` is the async equivalent to `try`/`catch`/`finally` in sync code.

## Building your own custom promises

The good news is that, in a way, you've already built your own promises. When you've chained multiple promises together with `.then()` blocks, or otherwise combined them to create custom functionality, you are already making your own custom async promise-based functions. Take our `fetchAndDecode()` function from the previous examples, for example.

Combining different promise-based APIs together to create custom functionality is by far the most common way you'll do custom things with promises, and shows the flexibility and power of basing most modern APIs around the same principle. There is another way, however.

### Using the Promise() constructor

It is possible to build your own promises using the [`Promise()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) constructor. The main situation in which you'll want to do this is when you've got code based on an old-school asynchronous API that is not promise-based, which you want to promisify. This comes in handy when you need to use existing, older project code, libraries, or frameworks along with modern promise-based code.

Let's have a look at a simple example to get you started — here we wrap a [`setTimeout()`](/en-US/docs/Web/API/setTimeout) call with a promise — this runs a function after two seconds that resolves the promise (using the passed [`resolve()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve) call) with a string of "Success!".

```js
let timeoutPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Success!');
  }, 2000);
});
```

`resolve()` and `reject()` are functions that you call to fulfil or reject the newly-created promise. In this case, the promise fulfills with a string of "Success!".

So when you call this promise, you can chain a `.then()` block onto the end of it and it will be passed a string of "Success!". In the below code we alert that message:

```js
timeoutPromise
.then((message) => {
   alert(message);
})
```

or even just

```js
timeoutPromise.then(alert);
```

Try [running this live](https://mdn.github.io/learning-area/javascript/asynchronous/promises/custom-promise.html) to see the result (also see the [source code](https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/promises/custom-promise.html)).

The above example is not very flexible — the promise can only ever fulfil with a single string, and it doesn't have any kind of [`reject()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/reject) condition specified (admittedly, `setTimeout()` doesn't really have a fail condition, so it doesn't matter for this simple example).

> **Note:** Why `resolve()`, and not `fulfill()`? The answer we'll give you, for now, is _it's complicated_.

### Rejecting a custom promise

We can create a promise that rejects using the [`reject()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/reject) method — just like `resolve()`, this takes a single value, but in this case, it is the reason to reject with, i.e., the error that will be passed into the `.catch()` block.

Let's extend the previous example to have some `reject()` conditions as well as allowing different messages to be passed upon success.

Take a copy of the [previous example](https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/promises/custom-promise.html), and replace the existing `timeoutPromise()` definition with this:

```js
function timeoutPromise(message, interval) {
  return new Promise((resolve, reject) => {
    if (message === '' || typeof message !== 'string') {
      reject('Message is empty or not a string');
    } else if (interval < 0 || typeof interval !== 'number') {
      reject('Interval is negative or not a number');
    } else {
      setTimeout(() => {
        resolve(message);
      }, interval);
    }
  });
}
```

Here we are passing two arguments into a custom function — a message to do something with, and the time interval to pass before doing the thing. Inside the function we then return a new `Promise` object — invoking the function will return the promise we want to use.

Inside the Promise constructor, we do several checks inside `if ... else` structures:

1.  First of all, we check to see if the message is appropriate for being alerted. If it is an empty string or not a string at all, we reject the promise with a suitable error message.
2.  Next, we check to see if the interval is an appropriate interval value. If it is negative or not a number, we reject the promise with a suitable error message.
3.  Finally, if the parameters both look OK, we resolve the promise with the specified message after the specified interval has passed using `setTimeout()`.

Since the `timeoutPromise()` function returns a `Promise`, we can chain `.then()`, `.catch()`, etc. onto it to make use of its functionality. Let's use it now — replace the previous `timeoutPromise` usage with this one:

```js
timeoutPromise('Hello there!', 1000)
.then(message => {
   alert(message);
})
.catch(e => {
  console.log('Error: ' + e);
});
```

When you save and run the code as is, after one second you'll get the message alerted. Now try setting the message to an empty string or the interval to a negative number, for example, and you'll be able to see the promise reject with the appropriate error messages! You could also try doing something else with the resolved message rather than just alerting it.

> **Note:** You can find our version of this example on GitHub as [custom-promise2.html](https://mdn.github.io/learning-area/javascript/asynchronous/promises/custom-promise2.html) (see also the [source code](https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/promises/custom-promise2.html)).

### A more real-world example

The above example was kept deliberately simple to make the concepts easy to understand, but it is not really very async. The asynchronous nature is basically faked using `setTimeout()`, although it does still show that promises are useful for creating a custom function with a sensible flow of operations, good error handling, etc.

One example we'd like to invite you to study, which does show a useful async application of the `Promise()` constructor, is [Jake Archibald's idb library](https://github.com/jakearchibald/idb/). This takes the [IndexedDB API](/en-US/docs/Web/API/IndexedDB_API), which is an old-style callback-based API for storing and retrieving data on the client-side, and allows you to use it with promises. In the code you'll see the same kind of techniques we discussed above being used there. The following block converts the basic request model used by many IndexedDB methods to use promises ([see this code, for example](https://github.com/jakearchibald/idb/blob/01082ad696eef05e9c913f55a17cda7b3016b12c/build/esm/wrap-idb-value.js#L30)).

## Conclusion

Promises are a good way to build asynchronous applications when we don’t know the return value of a function or how long it will take to return. They make it easier to express and reason about sequences of asynchronous operations without deeply nested callbacks, and they support a style of error handling that is similar to the synchronous `try...catch` statement.

Promises work in the latest versions of all modern browsers; the only place where promise support will be a problem is in Opera Mini and IE11 and earlier versions.

We didn't touch on all promise features in this article, just the most interesting and useful ones. As you start to learn more about promises, you'll come across further features and techniques.

Most modern Web APIs are promise-based, so you'll need to understand promises to get the most out of them. Among those APIs are [WebRTC](/en-US/docs/Web/API/WebRTC_API), [Web Audio API](/en-US/docs/Web/API/Web_Audio_API), [Media Capture and Streams](/en-US/docs/Web/API/Media_Streams_API), and many more. Promises will be more and more important as time goes on, so learning to use and understand them is an important step in learning modern JavaScript.

## See also

- [`Promise()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [Using promises](/en-US/docs/Web/JavaScript/Guide/Using_promises)
- [We have a problem with promises](https://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html) by Nolan Lawson

{{PreviousMenuNext("Learn/JavaScript/Asynchronous/Timeouts_and_intervals", "Learn/JavaScript/Asynchronous/Async_await", "Learn/JavaScript/Asynchronous")}}

## In this module

- [General asynchronous programming concepts](/en-US/docs/Learn/JavaScript/Asynchronous/Concepts)
- [Introducing asynchronous JavaScript](/en-US/docs/Learn/JavaScript/Asynchronous/Introducing)
- [Cooperative asynchronous JavaScript: Timeouts and intervals](/en-US/docs/Learn/JavaScript/Asynchronous/Timeouts_and_intervals)
- [Making asynchronous programming easier with async and await](/en-US/docs/Learn/JavaScript/Asynchronous/Async_await)
- [Choosing the right approach](/en-US/docs/Learn/JavaScript/Asynchronous/Choosing_the_right_approach)

---
title: Making asynchronous programming easier with async and await
slug: Learn/JavaScript/Asynchronous/Async_await
tags:
  - Beginner
  - CodingScripting
  - Guide
  - JavaScript
  - Learn
  - Promises
  - async
  - asynchronous
  - await
---
{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Asynchronous/Promises", "Learn/JavaScript/Asynchronous/Choosing_the_right_approach", "Learn/JavaScript/Asynchronous")}}

More recent additions to the JavaScript language are [async functions](/en-US/docs/Web/JavaScript/Reference/Statements/async_function) and the [`await`](/en-US/docs/Web/JavaScript/Reference/Operators/await) keyword, added in ECMAScript 2017. These features basically act as syntactic sugar on top of promises, making asynchronous code easier to write and to read afterwards. They make async code look more like old-school synchronous code, so they're well worth learning. This article gives you what you need to know.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerequisites:</th>
      <td>
        Basic computer literacy, a reasonable understanding of JavaScript
        fundamentals, an understanding of async code in general and promises.
      </td>
    </tr>
    <tr>
      <th scope="row">Objective:</th>
      <td>To understand the use of async/await.</td>
    </tr>
  </tbody>
</table>

## The basics of async/await

There are two parts to using async/await in your code.

### The async keyword

First of all we have the `async` keyword, which you put in front of a function declaration to turn it into an [async function](/en-US/docs/Web/JavaScript/Reference/Statements/async_function). An async function is a function that knows how to expect the possibility of the `await` keyword being used to invoke asynchronous code.

Try typing the following lines into your browser's JS console:

```js
function hello() { return "Hello" };
hello();
```

The function returns "Hello" — nothing special, right?

But what if we turn this into an async function? Try the following:

```js
async function hello() { return "Hello" };
hello();
```

Ah. Invoking the function now returns a promise. This is one of the traits of async functions — their return values are guaranteed to be converted to promises.

You can also create an [async function expression](/en-US/docs/Web/JavaScript/Reference/Operators/async_function), like so:

```js
let hello = async function() { return "Hello" };
hello();
```

And you can use [arrow functions](/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions):

```js
let hello = async () => "Hello";
```

These all do basically the same thing.

To actually consume the value returned when the promise fulfills, since it is returning a promise, we could use a `.then()` block:

```js
hello().then((value) => console.log(value))
```

or even just shorthand such as

```js
hello().then(console.log)
```

Like we saw in the last article.

So the `async` keyword is added to functions to tell them to return a promise rather than directly returning the value.

### The await keyword

The advantage of an async function only becomes apparent when you combine it with the [await](/en-US/docs/Web/JavaScript/Reference/Operators/await) keyword. `await` only works inside async functions within regular JavaScript code, however it can be used on its own with [JavaScript modules.](/en-US/docs/Web/JavaScript/Guide/Modules)

`await` can be put in front of any async promise-based function to pause your code on that line until the promise fulfills, then return the resulting value.

You can use `await` when calling any function that returns a Promise, including web API functions.

Here is a trivial example:

```js
async function hello() {
  return await Promise.resolve("Hello");
};

hello().then(alert);
```

Of course, the above example is not very useful, although it does serve to illustrate the syntax. Let's move on and look at a real example.

## Rewriting promise code with async/await

Let's look back at a simple fetch example that we saw in the previous article:

```js
fetch('coffee.jpg')
.then(response => {
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.blob();
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

By now, you should have a reasonable understanding of promises and how they work, but let's convert this to use async/await to see how much simpler it makes things:

```js
async function myFetch() {
  let response = await fetch('coffee.jpg');

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  let myBlob = await response.blob();

  let objectURL = URL.createObjectURL(myBlob);
  let image = document.createElement('img');
  image.src = objectURL;
  document.body.appendChild(image);
}

myFetch()
.catch(e => {
  console.log('There has been a problem with your fetch operation: ' + e.message);
});
```

It makes code much simpler and easier to understand — no more `.then()` blocks everywhere!

Since an `async` keyword turns a function into a promise, you could refactor your code to use a hybrid approach of promises and await, bringing the second half of the function out into a new block to make it more flexible:

```js
async function myFetch() {
  let response = await fetch('coffee.jpg');
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return await response.blob();

}

myFetch().then((blob) => {
  let objectURL = URL.createObjectURL(blob);
  let image = document.createElement('img');
  image.src = objectURL;
  document.body.appendChild(image);
}).catch(e => console.log(e));
```

You can try typing in the example yourself, or running our [live example](https://mdn.github.io/learning-area/javascript/asynchronous/async-await/simple-fetch-async-await.html) (see also the [source code](https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/async-await/simple-fetch-async-await.html)).

### But how does it work?

You'll note that we've wrapped the code inside a function, and we've included the `async` keyword before the `function` keyword. This is necessary — you have to create an async function to define a block of code in which you'll run your async code; as we said earlier, `await` only works inside of async functions.

Inside the `myFetch()` function definition you can see that the code closely resembles the previous promise version, but there are some differences. Instead of needing to chain a `.then()` block on to the end of each promise-based method, you just need to add an `await` keyword before the method call, and then assign the result to a variable. The `await` keyword causes the JavaScript runtime to pause your code on this line, not allowing further code to execute in the meantime until the async function call has returned its result — very useful if subsequent code relies on that result!

Once that's complete, your code continues to execute starting on the next line. For example:

```js
let response = await fetch('coffee.jpg');
```

The response returned by the fulfilled `fetch()` promise is assigned to the `response` variable when that response becomes available, and the parser pauses on this line until that occurs. Once the response is available, the parser moves to the next line, which creates a [`Blob`](/en-US/docs/Web/API/Blob) out of it. This line also invokes an async promise-based method, so we use `await` here as well. When the result of operation returns, we return it out of the `myFetch()` function.

This means that when we call the `myFetch()` function, it returns a promise, so we can chain a `.then()` onto the end of it inside which we handle displaying the blob onscreen.

You are probably already thinking "this is really cool!", and you are right — fewer `.then()` blocks to wrap around code, and it mostly just looks like synchronous code, so it is really intuitive.

### Adding error handling

And if you want to add error handling, you've got a couple of options.

You can use a synchronous [`try...catch`](/en-US/docs/Web/JavaScript/Reference/Statements/try...catch) structure with `async`/`await`. This example expands on the first version of the code we showed above:

```js
async function myFetch() {
  try {
    let response = await fetch('coffee.jpg');

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    let myBlob = await response.blob();
    let objectURL = URL.createObjectURL(myBlob);
    let image = document.createElement('img');
    image.src = objectURL;
    document.body.appendChild(image);

  } catch(e) {
    console.log(e);
  }
}

myFetch();
```

The `catch() {}` block is passed an error object, which we've called `e`; we can now log that to the console, and it will give us a detailed error message showing where in the code the error was thrown.

If you wanted to use the second (refactored) version of the code that we showed above, you would be better off just continuing the hybrid approach and chaining a `.catch()` block onto the end of the `.then()` call, like this:

```js
async function myFetch() {
  let response = await fetch('coffee.jpg');
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return await response.blob();

}

myFetch().then((blob) => {
  let objectURL = URL.createObjectURL(blob);
  let image = document.createElement('img');
  image.src = objectURL;
  document.body.appendChild(image);
})
.catch((e) =>
  console.log(e)
);
```

This is because the `.catch()` block will catch errors occurring in both the async function call and the promise chain. If you used the `try`/`catch` block here, you might still get unhandled errors in the `myFetch()` function when it's called.

You can find both of these examples on GitHub:

- [simple-fetch-async-await-try-catch.html](https://mdn.github.io/learning-area/javascript/asynchronous/async-await/simple-fetch-async-await-try-catch.html) (see [source code](https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/async-await/simple-fetch-async-await-try-catch.html))
- [simple-fetch-async-await-promise-catch.html](https://mdn.github.io/learning-area/javascript/asynchronous/async-await/simple-fetch-async-await-promise-catch.html) (see [source code](https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/async-await/simple-fetch-async-await-promise-catch.html))

## Awaiting a Promise.all()

async/await is built on top of [promises](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise), so it's compatible with all the features offered by promises. This includes [`Promise.all()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all) — you can quite happily await a `Promise.all()` call to get all the results returned into a variable in a way that looks like simple synchronous code. Again, let's return to [an example we saw in our previous article](https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/promises/promise-all.html). Keep it open in a separate tab so you can compare and contrast with the new version shown below.

Converting this to async/await (see [live demo](https://mdn.github.io/learning-area/javascript/asynchronous/async-await/promise-all-async-await.html) and [source code](https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/async-await/promise-all-async-await.html)), this now looks like so:

```js
async function fetchAndDecode(url, type) {
  let response = await fetch(url);

  let content;

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  } else {
    if(type === 'blob') {
      content = await response.blob();
    } else if(type === 'text') {
      content = await response.text();
    }
  }

  return content;


}

async function displayContent() {
  let coffee = fetchAndDecode('coffee.jpg', 'blob');
  let tea = fetchAndDecode('tea.jpg', 'blob');
  let description = fetchAndDecode('description.txt', 'text');

  let values = await Promise.all([coffee, tea, description]);

  let objectURL1 = URL.createObjectURL(values[0]);
  let objectURL2 = URL.createObjectURL(values[1]);
  let descText = values[2];

  let image1 = document.createElement('img');
  let image2 = document.createElement('img');
  image1.src = objectURL1;
  image2.src = objectURL2;
  document.body.appendChild(image1);
  document.body.appendChild(image2);

  let para = document.createElement('p');
  para.textContent = descText;
  document.body.appendChild(para);
}

displayContent()
.catch((e) =>
  console.log(e)
);
```

You'll see that the `fetchAndDecode()` function has been converted easily into an async function with just a few changes. See the `Promise.all()` line:

```js
let values = await Promise.all([coffee, tea, description]);
```

By using `await` here we are able to get all the results of the three promises returned into the `values` array, when they are all available, in a way that looks very much like sync code. We've had to wrap all the code in a new async function, `displayContent()`, and we've not reduced the code by a lot of lines, but being able to move the bulk of the code out of the `.then()` block provides a nice, useful simplification, leaving us with a much more readable program.

For error handling, we've included a `.catch()` block on our `displayContent()` call; this will handle errors occurring in both functions.

> **Note:** It is also possible to use a sync [`finally`](/en-US/docs/Web/JavaScript/Reference/Statements/try...catch#the_finally_clause) block within an async function, in place of a [`.finally()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/finally) async block, to show a final report on how the operation went — you can see this in action in our [live example](https://mdn.github.io/learning-area/javascript/asynchronous/async-await/promise-finally-async-await.html) (see also the [source code](https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/async-await/promise-finally-async-await.html)).

## Handling async/await slowdown

Async/await makes your code look synchronous, and in a way it makes it behave more synchronously. The `await` keyword blocks execution of all the code that follows it until the promise fulfills, exactly as it would with a synchronous operation. It does allow other tasks to continue to run in the meantime, but the awaited code is blocked. For example:

```js
async function makeResult(items) {
  let newArr = [];
  for(let i=0; i < items.length; i++) {
    newArr.push('word_'+i);
  }
  return newArr;
}

async function getResult() {
  let result = await makeResult(items); // Blocked on this line
  useThatResult(result); // Will not be executed before makeResult() is done
}
```

As a result, your code could be slowed down by a significant number of awaited promises happening straight after one another. Each `await` will wait for the previous one to finish, whereas actually what you might want is for the promises to begin processing simultaneously, like they would do if we weren't using async/await.

Let's look at two examples — [slow-async-await.html](https://mdn.github.io/learning-area/javascript/asynchronous/async-await/slow-async-await.html) (see [source code](https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/async-await/slow-async-await.html)) and [fast-async-await.html](https://mdn.github.io/learning-area/javascript/asynchronous/async-await/fast-async-await.html) (see [source code](https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/async-await/fast-async-await.html)). Both of them start off with a custom promise function that fakes an async process with a [`setTimeout()`](/en-US/docs/Web/API/setTimeout) call:

```js
function timeoutPromise(interval) {
  return new Promise((resolve, reject) => {
    setTimeout(function(){
      resolve("done");
    }, interval);
  });
};
```

Then each one includes a `timeTest()` async function that awaits three `timeoutPromise()` calls:

```js
async function timeTest() {
  ...
}
```

Each one ends by recording a start time, seeing how long the `timeTest()` promise takes to fulfill, then recording an end time and reporting how long the operation took in total:

```js
let startTime = Date.now();
timeTest().then(() => {
  let finishTime = Date.now();
  let timeTaken = finishTime - startTime;
  alert("Time taken in milliseconds: " + timeTaken);
})
```

It is the `timeTest()` function that differs in each case.

In the `slow-async-await.html` example, `timeTest()` looks like this:

```js
async function timeTest() {
  await timeoutPromise(3000);
  await timeoutPromise(3000);
  await timeoutPromise(3000);
}
```

Here we await all three `timeoutPromise()` calls directly, making each one alert after 3 seconds. Each subsequent one is forced to wait until the last one finished — if you run the first example, you'll see the alert box reporting a total run time of around 9 seconds.

In the `fast-async-await.html` example, `timeTest()` looks like this:

```js
async function timeTest() {
  const timeoutPromise1 = timeoutPromise(3000);
  const timeoutPromise2 = timeoutPromise(3000);
  const timeoutPromise3 = timeoutPromise(3000);

  await timeoutPromise1;
  await timeoutPromise2;
  await timeoutPromise3;
}
```

Here we store the three `Promise` objects in variables, which has the effect of setting off their associated processes all running simultaneously.

Next, we await their results — because the promises all started processing at essentially the same time, the promises will all fulfill at the same time; when you run the second example, you'll see the alert box reporting a total run time of just over 3 seconds!

### Handling errors

There is an issue with the above pattern however — it could lead to unhandled errors.

Let's update the previous examples, this time adding a rejected promise and a `catch` statement in the end:

```js
function timeoutPromiseResolve(interval) {
  return new Promise((resolve, reject) => {
    setTimeout(function(){
      resolve("successful");
    }, interval);
  });
};

function timeoutPromiseReject(interval) {
  return new Promise((resolve, reject) => {
    setTimeout(function(){
      reject("error");
    }, interval);
  });
};

async function timeTest() {
  await timeoutPromiseResolve(5000);
  await timeoutPromiseReject(2000);
  await timeoutPromiseResolve(3000);
}

let startTime = Date.now();
timeTest().then(() => {})
.catch(e => {
  console.log(e);
  let finishTime = Date.now();
  let timeTaken = finishTime - startTime;
  alert("Time taken in milliseconds: " + timeTaken);
})
```

In the above example, the error is handled properly, and the alert appears after approximately 7 seconds.

Now onto the second pattern:

```js
function timeoutPromiseResolve(interval) {
  return new Promise((resolve, reject) => {
    setTimeout(function(){
      resolve("successful");
    }, interval);
  });
};

function timeoutPromiseReject(interval) {
  return new Promise((resolve, reject) => {
    setTimeout(function(){
      reject("error");
    }, interval);
  });
};

async function timeTest() {
  const timeoutPromiseResolve1 = timeoutPromiseResolve(5000);
  const timeoutPromiseReject2 = timeoutPromiseReject(2000);
  const timeoutPromiseResolve3 = timeoutPromiseResolve(3000);

  await timeoutPromiseResolve1;
  await timeoutPromiseReject2;
  await timeoutPromiseResolve3;
}

let startTime = Date.now();
timeTest().then(() => {
}).catch(e => {
  console.log(e);
  let finishTime = Date.now();
  let timeTaken = finishTime - startTime;
  alert("Time taken in milliseconds: " + timeTaken);
})
```

In this example, we have an unhandled error in the console (after 2 seconds), and the alert appears after approximately 5 seconds.

To start the promises in parallel and catch the error properly, we could use `Promise.all()`, as discussed earlier:

```js
function timeoutPromiseResolve(interval) {
  return new Promise((resolve, reject) => {
    setTimeout(function(){
      resolve("successful");
    }, interval);
  });
};

function timeoutPromiseReject(interval) {
  return new Promise((resolve, reject) => {
    setTimeout(function(){
      reject("error");
    }, interval);
  });
};

async function timeTest() {
  const timeoutPromiseResolve1 = timeoutPromiseResolve(5000);
  const timeoutPromiseReject2 = timeoutPromiseReject(2000);
  const timeoutPromiseResolve3 = timeoutPromiseResolve(3000);

  const results = await Promise.all([timeoutPromiseResolve1, timeoutPromiseReject2, timeoutPromiseResolve3]);
  return results;
}

let startTime = Date.now();
timeTest().then(() => {
}).catch(e => {
  console.log(e);
  let finishTime = Date.now();
  let timeTaken = finishTime - startTime;
  alert("Time taken in milliseconds: " + timeTaken);
})
```

In this example, the error is handled properly after around 2 seconds and we also see the alert after around 2 seconds.

The `Promise.all()` rejects when any of the input promises are rejected. If you want all the promises to settle and then use some of their fulfilled values, even when some of
them are rejected, you could use [`Promise.allSettled()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled) instead.

## Async/await class methods

As a final note before we move on, you can even add `async` in front of class/object methods to make them return promises, and `await` promises inside them. Take a look at the [ES class code we saw in our object-oriented JavaScript article](/en-US/docs/Learn/JavaScript/Objects/Inheritance#ecmascript_2015_classes), and then look at our modified version with an `async` method:

```js
class Person {
  constructor(first, last, age, gender, interests) {
    this.name = {
      first,
      last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
  }

  async greeting() {
    return await Promise.resolve(`Hi! I'm ${this.name.first}`);
  };

  farewell() {
    console.log(`${this.name.first} has left the building. Bye for now!`);
  };
}

let han = new Person('Han', 'Solo', 25, 'male', ['Smuggling']);
```

The first class method could now be used something like this:

```js
han.greeting().then(console.log);
```

## Browser support

One consideration when deciding whether to use async/await is support for older browsers. They are available in modern versions of most browsers, the same as promises; the main support problems come with Internet Explorer and Opera Mini.

If you want to use async/await but are concerned about older browser support, you could consider using the [BabelJS](https://babeljs.io/) library — this allows you to write your applications using the latest JavaScript and let Babel figure out what changes if any are needed for your user’s browsers. On encountering a browser that does not support async/await, Babel's polyfill can automatically provide fallbacks that work in older browsers.

## Conclusion

And there you have it — async/await provide a nice, simplified way to write async code that is simpler to read and maintain. Even with browser support being more limited than other async code mechanisms at the time of writing, it is well worth learning and considering for use, both for now and in the future.

{{PreviousMenuNext("Learn/JavaScript/Asynchronous/Promises", "Learn/JavaScript/Asynchronous/Choosing_the_right_approach", "Learn/JavaScript/Asynchronous")}}

## In this module

- [General asynchronous programming concepts](/en-US/docs/Learn/JavaScript/Asynchronous/Concepts)
- [Introducing asynchronous JavaScript](/en-US/docs/Learn/JavaScript/Asynchronous/Introducing)
- [Cooperative asynchronous JavaScript: Timeouts and intervals](/en-US/docs/Learn/JavaScript/Asynchronous/Timeouts_and_intervals)
- [Graceful asynchronous programming with Promises](/en-US/docs/Learn/JavaScript/Asynchronous/Promises)
- [Choosing the right approach](/en-US/docs/Learn/JavaScript/Asynchronous/Choosing_the_right_approach)

---
title: Using the Observable API
slug: Web/API/Observable_API/Using
page-type: guide
---

{{DefaultAPISidebar("Observable API")}}

The [Observable API](/en-US/docs/Web/API/Observable_API) provides a mechanism for handling an asynchronous stream of events in an efficient, ergonomic fashion. This guide provides an introduction to using the fundamental features of observables.

Before proceeding, you may wish to read the [Observable API overview](/en-US/docs/Web/API/Observable_API) to familiarize yourself with the core concepts.

## Obtaining an observable

{{domxref("Observable")}} objects (commonly called **observables**) represent a stream of events that can be observed and manipulated. There are three main ways to obtain observables:

- {{domxref("EventTarget")}} objects are observable: the {{domxref("EventTarget.when()")}} method returns an {{domxref("Observable")}} representing a stream of events fired on the `EventTarget`. You may also have libraries that return observables.
- You can create your own custom observables using the {{domxref("Observable.Observable", "Observable()")}} constructor.
- You can convert objects such as [Promises](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) and [Iterables](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols) into observables using the static {{domxref("Observable.from_static", "Observable.from()")}} method.

On the web, `EventTarget` objects are perhaps the most common use case of observables. The basic idea is this: wherever you have been writing `addEventListener(eventType, handler)`, you can now write `when(eventType).subscribe(handler)` to achieve the same effect. For example, here is how you can listen for `click` events on the document body using `when()`:

```js
document.body.when("click").subscribe((event) => {
  console.log("Clicked!", event);
});
```

We will look at the `Observable()` constructor later on in this article when discussing custom observables.

## Transforming an observable

An observable is a stream of values. Naturally, you can transform this stream into a new stream. These methods parallel what you might already be familiar with from {{jsxref("Iterator")}} or {{jsxref("Array")}}.

| {{domxref("Observable")}} method      | {{jsxref("Iterator")}} equivalent | Description                                                                                         |
| ------------------------------------- | --------------------------------- | --------------------------------------------------------------------------------------------------- |
| {{domxref("Observable.drop()")}}      | {{jsxref("Iterator.drop()")}}     | Skips the first `n` values from the source observable.                                              |
| {{domxref("Observable.filter()")}}    | {{jsxref("Iterator.filter()")}}   | Skips values that don't match a predicate function.                                                 |
| {{domxref("Observable.flatMap()")}}   | {{jsxref("Iterator.flatMap()")}}  | Maps each value to an observable, then flattens the resulting observables into a single observable. |
| {{domxref("Observable.inspect()")}}   | N/A                               | Like `subscribe()`, but only "taps into" the stream and allows further chaining.                    |
| {{domxref("Observable.map()")}}       | {{jsxref("Iterator.map()")}}      | Maps each value to a new value using a mapping function.                                            |
| {{domxref("Observable.switchMap()")}} | N/A                               | Maps each value to an observable and cancels the previous observable if it hasn't finished.         |
| {{domxref("Observable.take()")}}      | {{jsxref("Iterator.take()")}}     | Takes only the first `n` values from the source observable.                                         |
| {{domxref("Observable.takeUntil()")}} | N/A                               | Like `take()`, but stops when a second observable emits a value.                                    |

In the following example, we print the mouse coordinates to the screen whenever the mouse is moved over a couple of {{htmlelement("div")}} elements. We won't show the HTML because it just includes the `<div>` elements plus a single {{htmlelement("p")}} element to display the data.

```html hidden live-sample___basic-when-example live-sample___find-example live-sample___abort-example
<div></div>
<div></div>
<p></p>
```

In the example CSS, we give the `<div>` elements a {{cssxref("height")}}, {{cssxref("background-color")}}, and {{cssxref("margin-bottom")}}:

```css live-sample___basic-when-example live-sample___find-example live-sample___abort-example
div {
  height: 150px;
  background-color: purple;
  margin-bottom: 10px;
}
```

The JavaScript looks like this:

```js live-sample___basic-when-example
const outputElem = document.querySelector("p");

document.body
  .when("mousemove")
  .filter((e) => e.target.matches("div"))
  .map((e) => ({ x: e.clientX, y: e.clientY }))
  .subscribe((p) => {
    outputElem.textContent = `${p.x},${p.y}`;
  });
```

In this snippet, the page's {{htmlelement("body")}} element is an {{domxref("EventTarget")}}. We subscribe to the stream of [`mousemove`](/en-US/docs/Web/API/Element/mousemove_event) events fired on it using the `when()` method.

We then specify a pipeline:

- {{domxref("Observable.filter()")}} filters the events passed through the pipeline to only events fired on the {{htmlelement("div")}} element (tested using the {{domxref("Element.matches()")}} method) and not other `body` descendants.
- {{domxref("Observable.map()")}} maps the fired `mousemove` event objects to new objects containing the coordinates of the mouse cursor when the event was fired.

Finally, {{domxref("Observable.subscribe()")}} subscribes to the observable, passing a handler function called each time a `mousemove` event fires on the `<body>`.

The rendered output looks like this:

{{EmbedLiveSample("basic-when-example", "100%", "380px")}}

Try moving the mouse over the top of the example; the coordinates are printed to the `<p>` only when the `<div>` elements are moved over, not the areas outside the `<div>`s.

> [!NOTE]
> Observables are "lazy" — events don't start being passed through them, nor do they queue any data, until they have at least one subscriber. For example, in the above example, if you remove the `subscribe()` method call and add logs inside the `filter()` and `map()` methods , you will see that they don't log anything. Once `subscribe()` is called at the end of the pipeline, all previous observables in this chain also become subscribed and start processing data.

## Aggregating values

The previously introduced group of methods return another observable, allowing you to chain multiple transformations together. You can then subscribe to the final observable to receive the transformed values.

But you don't always want to process each value individually. Sometimes you are just interested in getting a single aggregated value from the entire stream. For this purpose, the Observable API provides the following methods:

| {{domxref("Observable")}} method    | {{jsxref("Iterator")}} equivalent | Description                                                                         |
| ----------------------------------- | --------------------------------- | ----------------------------------------------------------------------------------- |
| {{domxref("Observable.every()")}}   | {{jsxref("Iterator.every()")}}    | Returns `false` when the predicate returns `false` for any value; `true` otherwise. |
| {{domxref("Observable.find()")}}    | {{jsxref("Iterator.find()")}}     | Returns the first value that matches a predicate.                                   |
| {{domxref("Observable.first()")}}   | N/A                               | Returns the first value from the observable.                                        |
| {{domxref("Observable.forEach()")}} | {{jsxref("Iterator.forEach()")}}  | Calls a function for each value.                                                    |
| {{domxref("Observable.last()")}}    | N/A                               | Returns the last value from the observable.                                         |
| {{domxref("Observable.reduce()")}}  | {{jsxref("Iterator.reduce()")}}   | Aggregates the values to a single value.                                            |
| {{domxref("Observable.some()")}}    | {{jsxref("Iterator.some()")}}     | Returns `true` when the predicate returns `true` for any value; `false` otherwise.  |
| {{domxref("Observable.toArray()")}} | {{jsxref("Iterator.toArray()")}}  | Collects all values into an array.                                                  |

All these methods return promises. The promise either resolves when the return value is determined, or when the observable completes (we'll see later what it means for an observable to complete).

Unlike the transformation methods, these aggregation methods implicitly subscribe: the pipeline starts receiving values as soon as one of these methods is called.

```js live-sample___find-example
const outputElem = document.querySelector("p");

outputElem.textContent = "Move the mouse around...";

const result = document.body
  .when("mousemove")
  .filter((e) => e.target.matches("div"))
  .map((e) => ({ x: e.clientX, y: e.clientY }))
  .find((e) => e.x > 100 && e.y > 100);

result.then((coords) => {
  outputElem.textContent = `Target coordinates found: ${coords.x},${coords.y}`;
});
```

The rendered output looks like this:

{{EmbedLiveSample("find-example", "100%", "380px")}}

## Subscribing to an observable

We already showed basic `subscribe()` usage in the previous sections, but let's look at it in a bit more detail.

Just like a promise can send notifications either as "fulfilled" or "rejected", an observable can also send multiple types of notifications to its subscribers, each one corresponding to a different method you can pass into `subscribe()`.

- `next(value)`: Called whenever a new value is available from the observable. In the examples above, we passed a single function into `subscribe()`, which is shorthand for passing an object with just a `next` method.
- `error(err)`: Called when an error occurs inside the observable. We'll discuss this more in the [error handling](todo) section.
- `complete()`: Called when the observable has finished sending values. We'll discuss this more in the [custom observables](#creating_custom_observables) section. Event streams are infinite, but can become finite by calling `take()` or `takeUntil()`.

For example, here's how you could modify the previous example to also log when the observable completes (although this observable doesn't actually "complete"):

```js
document.body
  .when("mousemove")
  .filter((e) => e.target.matches("div"))
  .map((e) => ({ x: e.clientX, y: e.clientY }))
  .subscribe({
    next(p) {
      outputElem.textContent = `${p.x},${p.y}`;
    },
    complete() {
      console.log("Observable complete");
    },
  });
```

Internally, each observable has a list of _observers_ — objects containing these three methods (similar to how promises have a list of fulfill and reject handlers that can be registered via `then()` and friends). You can call `subscribe()` multiple times on the same observable to register multiple observers, and each observer will receive the same values from the observable. This is again similar to promises, but different from iterators, where you cannot have multiple consumers of the same iterator.

```js
const clickObservable = document.body.when("click");

clickObservable.subscribe((e) => {
  console.log("Observer 1: Clicked at", e.clientX, e.clientY);
});
clickObservable.subscribe((e) => {
  console.log("Observer 2: Clicked at", e.clientX, e.clientY);
});

// For every click, both observers will be called
```

## Unsubscribing from an observable

An observer can also be unsubscribed from the observable, which means the callback methods will no longer be called. If an observable has no more observers, it will stop producing values.

The canonical way to unsubscribe from an observable is to use an {{domxref("AbortController")}}. With this method, you can unsubscribe mid-way through observable data processing, at any point you like. To do this, you create an `AbortController` and pass its {{domxref("AbortController.signal", "signal")}} when you call `subscribe()`. You can then call {{domxref("AbortController.abort()")}} on the controller, which unsubscribes all observers associated with that signal.

For example, we can modify our earlier [Basic `when()` example](#transforming_an_observable) to unsubscribe when the user clicks anywhere on the page. This means the output will stop updating.

```js live-sample___abort-example
const outputElem = document.querySelector("p");
// Create controller
const controller = new AbortController();

document.body
  .when("mousemove")
  .filter((e) => e.target.matches("div"))
  .map((e) => ({ x: e.clientX, y: e.clientY }))
  .subscribe(
    (p) => {
      outputElem.textContent = `${p.x},${p.y}`;
    },
    // Register observer with signal
    { signal: controller.signal },
  );

document.body.when("click").subscribe(() => {
  // Unsubscribe on click
  controller.abort();
});
```

{{EmbedLiveSample("abort-example", "100%", "380px")}}

In this example, the abort condition is triggered by another observable emitting a value: `document.body.when("click")`. In this case, you can use the `takeUntil()` method to achieve the same effect in a more declarative way. The `takeUntil()` method returns an observable (it's one of the [transformation methods](#transforming_an_observable)), so can be inserted in the pipeline to specify a condition under which you would like the unsubscribe action to occur. The following code achieves the same effect as the previous example:

```js
const outputElem = document.querySelector("p");

document.body
  .when("mousemove")
  .filter((e) => e.target.matches("div"))
  .map((e) => ({ x: e.clientX, y: e.clientY }))
  // When the click event fires, unsubscribe
  .takeUntil(document.body.when("click"))
  .subscribe((p) => {
    outputElem.textContent = `${p.x},${p.y}`;
  });
```

The `takeUntil()` method [converts](/en-US/docs/Web/API/Observable/from) the input to an observable, so you can even pass a promise to unsubscribe when the promise resolves.

The `AbortController` method is more flexible where your unsubscribe condition is not easily represented as a single control flow object. It also allows you to unsubscribe observers independently if the observable has multiple observers. The `takeUntil()` method, on the other hand, essentially converts the observable pipeline into one that completes, and when an observable completes, all observers are unsubscribed.

## Creating custom observables

Now we've looked at the _usage_ side of observables, we turn to the _creation_ side. Like Promises, observables are created with a callback. The callback's job is to do work and push data to its subscribers. This callback isn't called immediately: it's called each time it's subscribed to, either by `subscribe()`, by one of the [aggregation methods](#aggregating_values), or by subscribing to a downstream observable created by a [transformation method](#transforming_an_observable). It receives a {{domxref("Subscriber")}} object. You can call methods on this object to dispatch data to all observers subscribed to the observable.

- `next()`: Dispatches data to the `next()` method of all observers. This can be called any number of times.
- `complete()`: Dispatches data to the `complete()` method of all observers. Called when the stream has been successfully completed and no more data will be sent.
- `error()`: Dispatches data to the `error()` method of all observers. Called when the stream has been completed with an error.

With a subscription set up, the observable can signal any number of events to the `Subscriber` via the `next()` callback, optionally followed by a single call to the `complete()` or `error()` callback, signaling that the stream of data is finished.

There's another `addTeardown()` method; we'll look at that in the [Teardown](#teardown) section.

In this example, we will print the numbers 1 to 10 to the page, then print a message to say that the count is complete. We won't show the HTML because it just includes a single `<p>` element to display the count, and a {{htmlelement("button")}} to start the count.

```html hidden live-sample___basic-constructor-example live-sample___basic-teardown-example
<button>Start count</button>
<p></p>
```

In the JavaScript, we use the {{domxref("Observable.Observable", "Observable()")}} constructor to create a new observable. Inside its callback function, we declare a variable `i` with a value of `1`. We then use a {{domxref("Window.setInterval()")}} call to check the value of `i` every `timerInterval` milliseconds. If the value has reached the specified number of iterations, we call the `Subscriber.complete()` method to complete the subscription. If not, we call `Subscriber.next()` to move to the next iteration of the pipeline. At the end of the interval, `i` is incremented by 1.

```js live-sample___basic-constructor-example
function makeTimer(timerInterval, iterations = Infinity) {
  return new Observable((subscriber) => {
    let i = 1;
    const interval = setInterval(() => {
      if (i === iterations + 1) {
        subscriber.complete();
        clearInterval(interval);
      } else {
        subscriber.next(i);
      }
      i++;
    }, timerInterval);
  });
}
```

> [!NOTE]
> This function is not production-ready at this point! Read on to [Teardown](#teardown) to see why.

Next, we define an `init()` function inside which we subscribe to the observable by calling `Observable.subscribe()`. Inside the `subscribe()` method's argument, we define the {{domxref("Subscriber")}} object's methods referenced inside the constructor in the previous block — the `next()` method prints the value passed to it to the `<p>` element (`i`, in the code above that calls it), and the `complete()` method prints "Count complete" to the `<p>`.

```js hidden live-sample___basic-constructor-example live-sample___basic-teardown-example
const outputElem = document.querySelector("p");
const btn = document.querySelector("button");
```

```js live-sample___basic-constructor-example
function init() {
  makeTimer(500, 10).subscribe({
    next(value) {
      outputElem.textContent = value;
    },
    complete() {
      outputElem.textContent = "Count complete; click to restart.";
    },
  });
}
```

Finally, the `init` function is called in response to the [`click`](/en-US/docs/Web/API/Element/click_event) event on the `<button>`. This can be done with `addEventListener()`, but here we use `when()` just to drive the point home.

```js live-sample___basic-constructor-example
btn.when("click").subscribe(init);
```

The rendered output looks like this:

{{EmbedLiveSample("basic-constructor-example", "100%", "80px")}}

Click the button. Every 500 milliseconds, the value of `i` is printed to the page and then incremented by 1, until the value reaches `11`. At that point, "Count complete" is logged to the console and subscription stops.

> [!NOTE]
> The first three lifecycle methods can be specified inside the object passed into the `subscribe()` method during subscription. However, as you'll see in the next section, `addTeardown()` is called directly on the `Subscriber` object inside the constructor callback.

## Teardown

The [previous example](#creating_custom_observables) is not production-ready because every `makeTimer()` call creates a new interval. If the user clicks the `<button>` multiple times, multiple intervals will be created, all trying to update the same `<p>` element. This can lead to unexpected behavior and memory leaks. To fix this, we need to abort the observable when the user clicks the button again, so that only one interval is active at any time. We'll use an `AbortController` for this, although `takeUntil()` could also be used.

```js live-sample___basic-teardown-example
function init() {
  const controller = new AbortController();
  makeTimer(500, 10).subscribe(
    {
      next(value) {
        outputElem.textContent = value;
      },
      complete() {
        outputElem.textContent = "Count complete; click to restart.";
      },
    },
    { signal: controller.signal },
  );
  btn
    .when("click")
    .take(1) // Only take the next click
    .subscribe(() => {
      controller.abort();
    });
}

btn.when("click").subscribe(init);
```

> [!NOTE]
> This example also demonstrates how you can use `take(1)` to emulate the `{ once: true }` behavior from `addEventListener()`.

The problem with this is that while the `makeTimer()` observable is stopped, the interval created inside it is not cleared until it reaches `11`. This is fine for our example because the interval will eventually clear itself, but in a real-world scenario this could lead to memory leaks and unexpected behavior. To fix this, we need to make sure that `clearInterval` is deterministically called when the observable becomes inactive, not just when it reaches the termination point. We do this by adding a _teardown_ to the observable. The teardown logic is passed as a callback to {{domxref("Subscriber.addTeardown()")}}.

```js live-sample___basic-teardown-example
function makeTimer(timerInterval, iterations = Infinity) {
  return new Observable((subscriber) => {
    let i = 1;
    const interval = setInterval(() => {
      if (i === iterations + 1) {
        subscriber.complete();
      } else {
        subscriber.next(i);
      }
      i++;
    }, timerInterval);
    subscriber.addTeardown(() => {
      clearInterval(interval);
    });
  });
}
```

The `addTeardown()` function is invoked immediately after the `Subscriber.complete()` or `Subscriber.error()` function is invoked to signal the completion of the subscription. It is also invoked when the subscriber is aborted.

In this case, we use it check whether the `<button>` text is "Start count"; if so, we change it to "Restart count" so that it makes more sense after the count has already run. More importantly, however, we use the teardown function to clear the interval (via {{domxref("Window.clearInterval()")}}) once the subscription is completed. This is important to avoid errors and memory leaks.

The example now renders like so:

{{EmbedLiveSample("basic-teardown-example", "100%", "80px")}}

Press the `<button>` while the count is running; the count will stop immediately and restart from `1`.

## Dynamic list example

In this example, we demonstrate both common ways of creating an observable. We will create a dynamic list that allows you to add and remove items, powered by observable events. In addition, we use a custom observable to monitor how many items are in the list, updating a live output that displays the count and enforcing a maximum number of items.

### HTML

The markup includes a {{htmlelement("div")}} containing a text {{htmlelement("input")}} to enter a new item into, and a {{htmlelement("button")}} to add it to the list. We also include a {{htmlelement("ul")}} element to add the items to, and a {{htmlelement("p")}} element to write the number of items into.

```html live-sample___list-example
<h1>Custom observable list</h1>

<div id="entry-input">
  <label for="item-entry">Enter item</label>
  <input type="text" id="item-entry" />
  <button id="item-entry-button">Add item to list</button>
</div>
<ul id="list"></ul>
<p id="output-para"></p>
```

```css hidden live-sample___list-example
html {
  font-family: Arial, Helvetica, sans-serif;
}

body {
  width: 600px;
  margin: 0 auto;
}

li {
  margin-bottom: 10px;
}

li button {
  font-size: 0.6rem;
  display: inline-block;
}
```

### JavaScript

In our script, we first grab references to our text `<input>`, submit `<button>`, shopping list `<ul>`, and output `<p>`:

```js live-sample___list-example
const itemEntryInput = document.getElementById("item-entry");
const itemEntryBtn = document.getElementById("item-entry-button");
const list = document.getElementById("list");
const outputPara = document.getElementById("output-para");
```

Next, we create an observable on the submit `<button>` by calling {{domxref("EventTarget.when", "when()")}} on it, passing `"click"` as an argument. We then {{domxref("Observable.subscribe", "subscribe()")}} to this observable, passing a reference to the `addItemToList()` function. This means that `addItemToList()` is called whenever the submit `<button>` is clicked:

```js live-sample___list-example
itemEntryBtn.when("click").subscribe(addItemToList);
```

The `addItemToList()` function first checks whether the text `<input>` is empty — if so, we `return` out of the function. We don't want to add empty list items. If it is not empty, we add an {{htmlelement("li")}} element as a child of our `<ul>` element using {{domxref("Element.innerHTML", "innerHTML")}}, which contains the input value plus a "Remove" `<button>`.

Finally, we empty the input value and {{domxref("HTMLElement.focus", "focus()")}} it, ready to enter the next list item.

```js live-sample___list-example
function addItemToList() {
  if (!itemEntryInput.value) {
    return;
  }

  const listItem = `<li>${itemEntryInput.value} <button>Remove</button></li>`;
  list.innerHTML += listItem;

  itemEntryInput.value = "";
  itemEntryInput.focus();
}
```

Next, we wire up the remove buttons so that they remove the list items when clicked. We do this by creating a `"click"` observable on the list `<ul>` using `when()`. Next, we add a {{domxref("Observable.filter", "filter()")}} for events fired on the `li button` CSS selector, to make sure only `click` events fired on the remove buttons run code in response. In these cases, we run the function defined inside the {{domxref("Observable.subscribe", "subscribe()")}}, which removes the {{domxref("Node.parentNode", "parentNode")}} of the button via the {{domxref("Element.remove", "remove()")}} function.

```js live-sample___list-example
list
  .when("click")
  .filter((e) => e.target.matches("li button"))
  .subscribe((e) => {
    e.target.parentNode.remove();
  });
```

The final functionality we need to implement is the live updating list count. To implement this we'll create a new observable using the {{("Observable.Observable", "Observable()")}} constructor, which constantly polls the number of list items every 500 milliseconds (via a {{domxref("Window.setInterval()")}} call) and calls the {{domxref("Subscriber.next()")}} function, passing it the list length.

```js live-sample___list-example
const listObservable = new Observable((subscriber) => {
  const interval = setInterval(() => {
    const listItems = document.querySelectorAll("li");
    const listLength = listItems.length;
    subscriber.next(listLength);
  }, 500);
  subscriber.addTeardown(() => clearInterval(interval));
});
```

All that's left to do now is subscribe to the custom observable using {{domxref("Observable.subscribe()")}}. We pass it an object that defines the `next()` function we call in the previous snippet's callback. The `next()` function updates the output `<p>` to state the new number of list items when it changes; if `listLength` is `5` or more (our maximum value), we add a "Maximum length reached!" message and disable the `<input>` field so no more items can be entered. If not, we just state the number of items, and re-enable the `<input>` if it was previously disabled (a user could remove an item to get the length down below the maximum again).

```js live-sample___list-example
listObservable.subscribe({
  next: (listLength) => {
    if (listLength >= 5) {
      outputPara.textContent = `Number of items: ${listLength}. Maximum length reached!`;
      itemEntryInput.disabled = true;
    } else {
      outputPara.textContent = `Number of items: ${listLength}`;
      if (itemEntryInput.disabled === true) {
        itemEntryInput.disabled = false;
      }
    }
  },
});
```

### Result

The example renders like this:

{{EmbedLiveSample("list-example", "100%", "320px")}}

## Canvas drawing example

In this example we create a basic {{htmlelement("canvas")}}-based drawing app, which demonstrates some of the nice ways observables can be used to work with combinations of events.

### HTML

The markup includes a `<canvas>` element to draw onto, and a {{htmlelement("form")}} containing two {{htmlelement("input")}} controls to allow the user to choose a new pen size and color (a [range slider](/docs/Web/HTML/Reference/Elements/input/range) and a [color picker](/en-US/docs/Web/HTML/Reference/Elements/input/color), respectively). We also include an {{htmlelement("output")}} element to display the current range value.

```html live-sample___canvas-example
<canvas></canvas>
<form>
  <div>
    <label for="size">Choose pen size:</label>
    <input type="range" min="1" max="40" value="10" />
    <output>10</output>
  </div>
  <div>
    <label for="size">Choose pen color:</label>
    <input type="color" />
  </div>
</form>
```

### CSS

In the CSS, we set the `<html>` element's {{cssxref("height")}} to `100%`, and set the `<body>` element's `height` to `inherit`. This ensures that the `<body>` will span the full width and height of the page. We also give the `<form>` element a {{cssxref("position")}} value of `absolute` to make it sit on top of the `<canvas>`, and use {{glossary("inset properties")}} to make it stick to the top, left, and right of the `<body>`.

The rest of the CSS isn't important to the understanding of the overall example, so we won't explain it here, but we've included it all below so you can see it.

```css live-sample___canvas-example
* {
  box-sizing: border-box;
}

html {
  font-family: Arial, Helvetica, sans-serif;
  height: 100%;
}

body {
  margin: 0;
  height: inherit;
  overflow: hidden;
}

form {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  padding: 10px;
  background: rgb(218 112 214 / 0.85);
  box-shadow: 0 1px 3px black;
}

form > div {
  display: flex;
  align-items: center;
}

form > div:first-child {
  margin-bottom: 10px;
}

form label {
  width: 140px;
}

form input {
  width: 100px;
}
```

### JavaScript

In our script, we first grab references to our `<canvas>`, `<form>`, `<input>`, and `<output>` elements:

```js live-sample___canvas-example
const canvas = document.querySelector("canvas");
const form = document.querySelector("form");
const sizeInput = document.querySelector("[type='range']");
const sizeOutput = document.querySelector("output");
const colorInput = document.querySelector("[type='color']");
```

Next, we define a function called `sizeCanvas()`, which sets the `<canvas>` {{domxref("HTMLCanvasElement.width","width")}} and {{domxref("HTMLCanvasElement.height","height")}} to equal the {{domxref("Element.clientWidth", "clientWidth")}}/{{domxref("Element.clientHeight", "clientHeight")}} of the `<body>`. We immediately run this function to set the `<canvas>` size when the page first loads, then we call `when("resize")` on the {{domxref("Window")}} object to set up an observable on it. We subscribe to that observable with `subscribe()`, passing it a reference to the `sizeCanvas()` function so that it runs every time the window is resized.

```js live-sample___canvas-example
function sizeCanvas() {
  canvas.width = document.body.clientWidth;
  canvas.height = document.body.clientHeight;
}

sizeCanvas();

window.when("resize").subscribe(sizeCanvas);
```

Next, we define the variables and functions we need to draw on our `<canvas>`. First, we grab a reference to the `<canvas>` [2D rendering context](/en-US/docs/Web/API/CanvasRenderingContext2D), and store an initial value for the pen color and pen size in variables called `penSize` and `penColor`, respectively.

```js live-sample___canvas-example
const ctx = canvas.getContext("2d");
let penSize = 10;
let penColor = "black";
```

Now we define two functions that update the pen size and pen color when new values are chosen from the `<input>` elements. The `updatePenSize()` function sets the `penSize` variable to the [`value`](/en-US/docs/Web/API/HTMLInputElement/value) of the range slider `<input>`, and also sets that value as the `<output>` element's text content. The `updatePenColor()` function sets the `penColor` variable to the `value` of the color picker `<input>`:

```js live-sample___canvas-example
function updatePenSize() {
  penSize = sizeInput.value;
  sizeOutput.textContent = sizeInput.value;
}

function updatePenColor() {
  penColor = colorInput.value;
}
```

Now on to our main `draw()` function. Here, we hide the `<form>` so we can see the whole `<canvas>` when we start to draw. We then set the canvas context's [`fillStyle`](/en-US/docs/Web/API/CanvasRenderingContext2D/fillStyle) to the `penColor`, start drawing a path using [`beginPath()`](/en-US/docs/Web/API/CanvasRenderingContext2D/beginPath), draw a single circle of the specified `penSize` at the event object's `x` and `y` coordinates (more on those later) using [`arc()`](/en-US/docs/Web/API/CanvasRenderingContext2D/arc), and render the drawing on the canvas using [`fill()`](/en-US/docs/Web/API/CanvasRenderingContext2D/fill). This (along with the observable code you'll see later) draws a circle at the current mouse coordinates every time the mouse moves.

```js live-sample___canvas-example
function draw(e) {
  form.style.display = "none";

  ctx.fillStyle = penColor;
  ctx.beginPath();
  ctx.arc(
    e.x - canvas.offsetLeft,
    e.y - canvas.offsetTop,
    penSize,
    0,
    2 * Math.PI,
  );
  ctx.fill();
}
```

The last function we define is `finishDraw()`, which shows the `<form>` again when the drawing is finished.

```js live-sample___canvas-example
function finishDraw() {
  form.style.display = "block";
}
```

Finally, we'll create some more observables to control the drawing functionality. The first two are simple, and use the same pattern as the `resize` one we saw earlier. They keep the pen size and color updated to the user's choices by:

- Running the `updatePenSize()` function whenever a [`input`](/en-US/docs/Web/API/Element/input_event) event fires on the range slider.
- Running the `updatePenColor()` function whenever a [`change`](/en-US/docs/Web/API/HTMLElement/change_event) event fires on the color picker.

```js live-sample___canvas-example
sizeInput.when("input").subscribe(updatePenSize);
colorInput.when("change").subscribe(updatePenColor);
```

Finally, we create an observable on the `<canvas>` element, this time representing a stream of [`mousedown`](/en-US/docs/Web/API/Element/mousedown_event) events that will be fired on the `<canvas>`. We use {{domxref("Observable.map()")}} to map the fired event objects to new objects containing the coordinates of the mouse cursor when the event was fired. We then call `subscribe()` at the end of the chain, passing it a reference to the `draw()` function so that it is called whenever an event fires.

However — and this is where it gets interesting — we don't want to run `draw()` on `mousedown` events. We want to run it on every `mousemove` event that happens after a `mousedown` event, and we want to stop running it when a `mouseup` event fires. We achieve this by inserting an {{domxref("Observable.flatMap()")}} call into the chain.

```js live-sample___canvas-example
canvas
  .when("mousedown")
  .flatMap(() => {
    const mouseUp = canvas.when("mouseup").finally(finishDraw);
    return canvas.when("mousemove").takeUntil(mouseUp);
  })
  .map((e) => ({ x: e.clientX, y: e.clientY }))
  .subscribe(draw);
```

Inside the `flatMap()` callback, we do two things:

1. Define a value called `mouseUp` that contains the criteria for stopping subscription to a series of `mousemove` events — namely a `<canvas>` `mouseup` observable — we want to unsubscribe from `mousemove` events when a `mouseup` event is fired on the `<canvas>`. We also chain an {{domxref("Observable.finally()")}} call onto the end containing a reference to the `finishDraw()` function — so that when the subscription ends, this function is called, making the `<form>` appear again at the end of the process.
2. Return a `<canvas>` `mousemove` observable, with a {{domxref("Observable.takeUntil()")}} call chained on the end that we pass the `mouseUp` value to. Returning this observable out of the `flatMap()` call effectively causes the inner `mousemove` observable pipeline to become part of the outer `mousedown` observable pipeline.

The result is that we are subscribing to a `mousedown` observable but then responding to `mousemove` events that are made part of the main pipeline via the `flatMap()` call. And we are stopping subscription to the inner `mousemove` observable when a `mouseup` event is fired (after which we run the final `finishDraw()` function).

> [!NOTE]
> The `takeUntil()` call doesn't unsubscribe from the outer `mousedown` observable, just the inner `mousemove` observable.

### Result

The example renders like this:

{{EmbedLiveSample("canvas-example", "100%", "320px")}}

## See also

- [Observable explainer](https://github.com/WICG/observable/blob/master/README.md)

---
title: Using the Observable API
slug: Web/API/Observable_API/Using
page-type: guide
---

{{DefaultAPISidebar("Observable API")}}

The [Observable API](/en-US/docs/Web/API/Payment_Request_API) The **Observable API** ("observables") provides a mechanism for handling an asynchronous stream of events in an efficient, ergonomic fashion. This guide provides an introduction to using the fundamental features of observables.

## Creating an observable

The use of observables centers around {{domxref("Observable")}} objects, which represent a stream of events that can be observed and manipulated. The two main ways to create an `Observable` instance are as follows:

- The {{domxref("EventTarget.when()")}} method, which returns an {{domxref("Observable")}} object instance representing a stream of events that will be fired on the `EventTarget`.
- The {{domxref("Observable.Observable", "Observable()")}} constructor, which returns an {{domxref("Observable")}} object instance representing a custom stream of events that can be subscribed to as needed.

We will first look at the `EventTarget.when()` method, as that is the most common use case for observable; we will look `Observable()` constructor examples too, later on in the article.

`Observable` instances have several methods that return a reference to the same `Observable`, and these methods can be chained together to create a pipeline.

Events passing through the pipeline can be modified at each stage; the final stage is to subscribe the event target to the event stream, specifying a function that will be called each time the event is fired.

Let's study an example to explore what this looks like.

## Basic `when()` example

Here we'll print the updated mouse coordinates to the screen whenever the mouse is moved over the top of a couple of {{htmlelement("div")}} elements. We won't show the HTML because it just includes the `<div>` elements plus a single {{htmlelement("p")}} element to display the data.

```html hidden live-sample___basic-when-example live-sample___basic-takeuntil-example
<div></div>
<div></div>
<p></p>
```

In the example CSS, we give the `<div>` elements a {{cssxref("height")}}, {{cssxref("background-color")}}, and {{cssxref("margin-bottom")}}:

```css live-sample___basic-when-example live-sample___basic-takeuntil-example
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
  .subscribe({ next: reportCoords });
```

In this snippet we first grab a reference to the `<p>` element, then specify the [`mousemove`](/en-US/docs/Web/API/Element/mousemove_event) event inside the `when()` method on the page's {{htmlelement("body")}} element, which returns a `Observable` object representing a stream of `mousedown` events.

We then specify a pipeline:

- {{domxref("Observable.filter()")}} is used to filter the elements on which the event will be fired, to only `EventTarget`s that match the `div` CSS selector (tested using the {{domxref("Element.matches()")}} method). This means that only `mousemove` events directly fired on the `<div>` element will fire.
- {{domxref("Observable.map()")}} is used to modify the fired `mousemove` {{domxref("Event")}} objects, setting them equal to the coordinates of the mouse cursor when the event was fired.
- {{domxref("Observable.subscribe()")}} is used to subscribe to the event stream, calling the `reportCoords()` function each time a `mousemove` event fires on the `<div>`s.

Finally, we define the `reportCoords()` function, which prints the mouse coordinates to the `<p>` element:

```js live-sample___basic-when-example live-sample___basic-takeuntil-example
function reportCoords(e) {
  outputElem.textContent = `${e.x},${e.y}`;
}
```

The rendered output looks like this:

{{EmbedLiveSample("basic-when-example", "100%", "360px")}}

Try moving the mouse over the top of the example; the coordinates are printed to the `<p>` only when the `<div>` elements are moved over, not the areas outside the `<div>`s.

> [!NOTE]
> Observables are "lazy" — events don't start being passed through them, nor do they queue any data, until they are subscribed to via the `subscribe()` method.

## The observable lifecycle

When an observable is created, it has a callback passed into it that is invoked synchronously when `subscribe()` is called on it; this sets up a new **subscription** to the observable. The callback's argument is a {{domxref("Subscriber")}} object, which has the following methods available on it that are called at different points in the observable lifecycle:

- `next()`: Called whenever an event is fired. This can be called any number of times.
- `complete()`: Called when the pipeline has been successfully completed and no more data will be sent.
- `error()`: Called when the pipeline has been completed with an error.
- `addTeardown()`: Called at the end of the observer's lifecycle after it has completed or been unsubscribed, to clean up any resources relevant to the subscription.

With a subscription set up, the `Observable` can signal any number of events to the `Subscriber` via the `next()` callback, optionally followed by a single call to the `complete()` or `error()` callback, signaling that the stream of data is finished.

When {{domxref("EventTarget.when()")}} is used to create an observable (as seen previously), this mechanism of lifecycle methods is set up for you in the background implicitly.

However, when creating a custom observable using the `Observable()` constructor, the lifecycle methods are explicitly defined. Let's look at an example of how to do this.

## Basic `Observable()` example

In this example, we will print the numbers 1 to 10 to the page, then print a message to say that the count is complete. We won't show the HTML because it just includes a single `<p>` element to display the count, and a {{htmlelement("button")}} to start the count.

```html hidden live-sample___basic-constructor-example live-sample___basic-teardown-example live-sample___basic-abort-example
<button>Start count</button>
<p></p>
```

In the JavaScript, we first grab a reference to the `<p>` and `<button>` elements, then use the {{domxref("Observable.Observable", "Observable()")}} constructor to create a new observable. Inside its callback function, we declare a variable `i` with a value of `1`. We then use a {{domxref("Window.setInterval()")}} call to check the value of `i` every 500 milliseconds. If the value has reached `11`, we call the `Subscriber.complete()` method to complete observation. If not, we call `Subscriber.next()` to move to the next iteration of the pipeline. At the end of the interval, `i` is incremented by 1.

```js live-sample___basic-constructor-example
const outputElem = document.querySelector("p");
const btn = document.querySelector("button");

const observable = new Observable((subscriber) => {
  let i = 1;
  setInterval(() => {
    if (i === 11) {
      subscriber.complete();
    } else {
      subscriber.next(i);
    }
    i++;
  }, 500);
});
```

Next, we define an `init()` function inside which we subscribe to the observable by calling `Observable.subscribe()`. Inside the `subscribe()` method's argument, we define the {{domxref("Subscriber")}} object's methods referenced inside the constructor in the previous block — the `next()` method prints the value passed to it to the `<p>` element (`i`, in the code above that calls it), and the `complete()` method prints "Count complete" to the `<p>`.

```js live-sample___basic-constructor-example live-sample___basic-teardown-example
function init() {
  observable.subscribe({
    next: (value) => {
      outputElem.textContent = value;
    },
    complete: () => {
      outputElem.textContent = "Count complete";
    },
  });
}
```

Finally, we call `when()` on the `<button>`, passing it the [`click`](/en-US/docs/Web/API/Element/click_event) event, then subscribe to the resulting observable, passing a reference to the `init` function into `subscribe()`. This means that `init()` will be called and the subscription to our custom observable will happen when the `<button>` is clicked.

```js live-sample___basic-constructor-example
btn.when("click").subscribe(init);
```

> [!NOTE]
> Note that, in this example, `subscribe()` is called just with a single callback function as its argument, rather than an object. Effectively, `subscribe(function)` is shorthand for `subscribe({ next: function })`.

The rendered output looks like this:

{{EmbedLiveSample("basic-constructor-example", "100%", "80px")}}

Click the button. Every 500 milliseconds, the value of `i` is printed to the page and then incremented by 1, until the value reaches `11`. At that point, "Count complete" is logged to the console and subscription stops.

> [!NOTE]
> The first three lifecycle methods can be specified inside the object passed into the `subscribe()` method during subscription. However, as you'll see in the next section, `addTeardown()` is called directly on the `Subscriber` object inside the constructor callback.

> [!NOTE]
> You can also convert objects such as [Promises](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) and [Iterables](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols) into observables using the static {{domxref("Observable.from_static", "Observable.from()")}} method.

## Teardown

Observable subscribers can register a teardown callback to clean up any resources relevant to the subscription, via `Subscriber.addTeardown()`. This is called directly on the `Subscriber` object available inside the callback passed into the `Observable()` constructor, and the function can contain any arbitrary code that the teardown process requires.

For example, adding a basic teardown callback to our [previous](#basic_observable_example) example might look like this:

```js hidden live-sample___basic-teardown-example
const outputElem = document.querySelector("p");
const btn = document.querySelector("button");
```

```js live-sample___basic-teardown-example
const observable = new Observable((subscriber) => {
  let i = 1;
  setInterval(() => {
    if (i === 11) {
      subscriber.complete();
    } else {
      subscriber.next(i);
    }
    i++;
  }, 500);
  subscriber.addTeardown(() => {
    if (btn.textContent === "Start count") {
      btn.textContent = "Restart count";
    }
  });
});
```

```js hidden live-sample___basic-teardown-example
btn.when("click").subscribe(init);
```

The `addTeardown()` function is automatically invoked immediately after the `Subscriber.complete()` or `Subscriber.error()` function is invoked to signal the completion of the pipeline (it is also invoked when the subscriber is aborted via an `AbortController`, as seen in the next section). In this case, we use it check whether the `<button>` text is "Start count"; if so, we change it to "Restart count" so that it makes more sense after the count has already run.

The example now renders like so:

{{EmbedLiveSample("basic-teardown-example", "100%", "80px")}}

Press the `<button>`, and note how its text changes to "Restart count" once the count is finished.

## Unsubscribing

You can unsubscribe from an observable using the {{domxref("Observable.takeUntil()")}} method, or an {{domxref("AbortController")}}.

### Unsubscribing with `takeUntil()`

The `takeUntil()` method returns an observable, so can be inserted in the pipeline to specify a condition under which you would like the unsubscribe action to occur. For example, we could modify our earlier [Basic `when()` example](#basic_when_example) to include a `takeUntil()` method in the chain that specifies `window.when("resize")` as its argument. This means that the observable will be unsubscribed when the browser window is resized.

```js hidden live-sample___basic-takeuntil-example
const outputElem = document.querySelector("p");
```

```js live-sample___basic-takeuntil-example
document.body
  .when("mousemove")
  .takeUntil(window.when("resize"))
  .filter((e) => e.target.matches("div"))
  .map((e) => ({ x: e.clientX, y: e.clientY }))
  .subscribe({ next: reportCoords });
```

The rendered output looks like this:

{{EmbedLiveSample("basic-takeuntil-example", "100%", "360px")}}

The example runs identically to the first version, but note that the events no longer fire after a [`resize`](/en-US/docs/Web/API/Window/resize_event) event fires on the browser window.

### Unsubscribing with an `AbortController`

Using an `AbortController` to unsubscribe has the advantage that you can unsubscribe mid-way through observable data processing, at any point you like.

Let's modify our [Basic `Observable()` example](#basic_observable_example) again, this time to use an `AbortController`. Our `Observable()` constructor call is very similar, except that this time we don't include a conditional inside the `setInterval()` call, and we don't call `Subscriber.complete()`; all of the conditional code is handled inside the `Subscriber.next()` function.

```js hidden live-sample___basic-abort-example
const outputElem = document.querySelector("p");
const btn = document.querySelector("button");
```

```js live-sample___basic-abort-example
const observable = new Observable((subscriber) => {
  let i = 1;
  setInterval(() => {
    subscriber.next(i);
    i++;
  }, 500);
  subscriber.addTeardown(() => {
    if (btn.textContent === "Start count") {
      btn.textContent = "Restart count";
    }
  });
});
```

Next, we create a new `AbortController` using the {{domxref("AbortController.AbortController", "AbortController()")}} constructor:

```js live-sample___basic-abort-example
let controller = new AbortController();
```

Finally, we update the `Observable.subscribe()` call as follows. We have removed the `complete()` method definition, and updated the `next()` method definition so that it checks whether the passed `value` is higher than `10`. If so, we update the `<p>` text to "Count complete" and call the {{domxref("AbortController.abort()")}} method to unsubscribe from the observable. If not, we update the `<p>` text to the current `value` and carry on to the next iteration.

We have also added a second `subscribe` argument — an options object containing a `signal` property equal to the {{domxref("AbortController.signal")}} property. This is required to associate the controller with the observable, enabling us to unsubscribe via the `abort()` call.

```js live-sample___basic-abort-example
function init() {
  observable.subscribe(
    {
      next: (value) => {
        if (value > 10) {
          outputElem.textContent = "Count complete";
          controller.abort();
        } else {
          outputElem.textContent = value;
        }
      },
    },
    {
      signal: controller.signal,
    },
  );
}
```

```js hidden live-sample___basic-abort-example
btn.when("click").subscribe(init);
```

The rendered output looks like this:

{{EmbedLiveSample("basic-constructor-example", "100%", "80px")}}

When you press the `<button>`, the output should be identical to the previous version of the example; this time the unsubscribe step is being handled via the `AbortController` rather than the `complete()` function. The `addTeardown()` function will still fire on unsubscription, to update the `<button>` text.

EDITORIAL: Hrm, currently the `addTeardown()` function doesn't fire after the `abort()` function is run, but I'm pretty sure it should do. Am I doing something wrong?

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

Next, we wire up the remove buttons, so that they remove the list items when clicked. We do this by creating a `"click"` `Observable` on the list `<ul>` using `when()`. Next, we add a {{domxref("Observable.filter", "filter()")}} for elements that match the `li button` CSS selector, to make sure the click events are only fired on the remove buttons. In these cases, we run the function defined inside the {{domxref("Observable.subscribe", "subscribe()")}}, which removes the {{domxref("Node.parentNode", "parentNode")}} of the button via the {{domxref("Element.remove", "remove()")}} function.

```js live-sample___list-example
list
  .when("click")
  .filter((e) => e.target.matches("li button"))
  .subscribe((e) => {
    e.target.parentNode.remove();
  });
```

The final functionality we need to implement is the live updating list count. To implement this we'll create a new `Observable` using the {{("Observable.Observable", "Observable()")}} constructor, which constantly polls the number of list items every 500 milliseconds (via a {{domxref("Window.setInterval()")}} call) and calls the {{domxref("Subscriber.next()")}} function, passing it the list length.

```js live-sample___list-example
const listObservable = new Observable((subscriber) => {
  setInterval(() => {
    const listItems = document.querySelectorAll("li");
    const listLength = listItems.length;
    subscriber.next(listLength);
  }, 500);
});
```

All that's left to do now is subscribe to the custom `Observable` using {{domxref("Observable.subscribe()")}}. We pass it an object that defines the `next()` function we call in the previous snippet's callback. The `next()` function updates the output `<p>` to state the new number of list items when it changes; if `listLength` is `5` or more (our maximum value), we add a "Maximum length reached!" message and disable the `<input>` field so no more items can be entered. If not, we just state the number of items, and re-enable the `<input>` if it was previous disabled (a user could remove an item to get the length down below the maximum again).

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

In this example, we create a basic {{htmlelement("canvas")}}-based drawing app, which demonstrates some of the nice ways observables can be used to work with combinations of events.

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

In our script, we first grab references to our `<canvas>`, `<form>`, `<input>` elements, and `<output>` element:

```js live-sample___canvas-example
const canvas = document.querySelector("canvas");
const form = document.querySelector("form");
const sizeInput = document.querySelector("[type='range']");
const sizeOutput = document.querySelector("output");
const colorInput = document.querySelector("[type='color']");
```

Next, we define a function called `sizeCanvas()`, which sets the `<canvas>` {{domxref("HTMLCanvasElement.width","width")}} and {{domxref("HTMLCanvasElement.height","height")}} to equal the {{domxref("Element.clientWidth", "clientWidth")}}/{{domxref("Element.clientHeight", "clientHeight")}} of the `<body>`. We immediately run this function to set the `<canvas>` size when the page first loads, then we call `when("resize")` on the {{domxref("Window")}} object to set up an observable on it. We subscribe that that observable with `subscribe()`, passing it a reference to the `sizeCanvas()` function so that it runs every time the window is resized.

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

The last function we define is `finishDraw()`, which is intended to show the `<form>` again when the drawing is finished.

```js live-sample___canvas-example
function finishDraw() {
  form.style.display = "block";
}
```

Finally, we'll create some more observables to control the drawing functionality. The first two are simple, and use the same pattern as the `resize` one we saw earlier. They keep the pen size and color updated to the user's choices by:

- Running the `updatePenSize()` function whenever a [`input`](/en-US/docs/Web/API/Element/input_event) event fires on the range slider
- Running the `updatePenColor()` function whenever a [`change`](/en-US/docs/Web/API/HTMLElement/change_event) event fires on the color picker.

```js live-sample___canvas-example
sizeInput.when("input").subscribe(updatePenSize);
colorInput.when("change").subscribe(updatePenColor);
```

Finally, we create an observable on the `<canvas>` element, this time representing a stream of [`mousedown`](/en-US/docs/Web/API/Element/mousedown_event) events. We use {{domxref("Observable.map()")}} to modify the fired event objects, setting them equal to the coordinates of the mouse cursor when the event was fired. We then call `subscribe()` at the end of the chain, passing it a reference to the `draw()` function so that it is called whenever an event fires.

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
2. Return a `<canvas>` `mousemove` observable, with a {{domxref("Observable.takeUntil()")}} call chained on the end that we pass the `mouseUp` value to. Returning this observable out of the `flatMap()` call effectively causes the `mousemove` observables to become part of the outer `mousedown` observable pipeline

The result is that we are subscribing to a `mousedown` observable but then responding to `mousemove` events that are made part of the main pipeline via the `flatMap()` call. And we are stopping subscription to the inner `mousemove` observable when a `mouseup` event is fired (after which we run the final `finishDraw()` function).

> [!NOTE]
> The `takeUntil()` call doesn't unsubscribe from the outer `mousedown` observable, just the inner `mousemove` observable.

### Result

The example renders like this:

{{EmbedLiveSample("canvas-example", "100%", "320px")}}

## See also

- [Observable explainer](https://github.com/WICG/observable/blob/master/README.md)

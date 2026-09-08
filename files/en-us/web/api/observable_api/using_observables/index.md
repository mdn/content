---
title: Using observables
slug: Web/API/Observable_API/Using_observables
page-type: guide
---

{{DefaultAPISidebar("Observable API")}}

The [Observable API](/en-US/docs/Web/API/Observable_API) provides a mechanism for handling streams of values, including asynchronous events. This guide explains how to transform, subscribe to, and unsubscribe from existing observables, using browser event streams as examples.

Before proceeding, you may wish to read the [Observable API overview](/en-US/docs/Web/API/Observable_API) to familiarize yourself with the core concepts.

## Obtaining an observable

{{domxref("Observable")}} objects (commonly called **observables**) represent a stream of values that can be observed and transformed. There are three main ways to obtain observables:

- The {{domxref("EventTarget.when()")}} method returns an {{domxref("Observable")}} representing a stream of events fired on the `EventTarget`. You may also have libraries that return observables.
- You can create your own custom observables using the {{domxref("Observable.Observable", "Observable()")}} constructor.
- You can convert objects such as [promises](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) and [iterables](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols) into observables using the static {{domxref("Observable.from_static", "Observable.from()")}} method.

On the web, `EventTarget` objects are perhaps the most common use case of observables. The basic idea is this: wherever you have been writing `addEventListener(eventType, handler)`, you can now write `when(eventType).subscribe(handler)` to achieve the same effect. For example, here is how you can listen for `click` events on the document body using `when()`:

```js
document.body.when("click").subscribe((event) => {
  console.log("Clicked!", event);
});
```

To learn how to produce your own stream of values with the `Observable()` constructor, see [Creating custom observables](/en-US/docs/Web/API/Observable_API/Creating_observables).

## Transforming an observable

An observable is a stream of values. Naturally, you can transform this stream into a new stream. These methods parallel what you might already be familiar with from {{jsxref("Iterator")}} or {{jsxref("Array")}}.

| {{domxref("Observable")}} method      | {{jsxref("Iterator")}} equivalent | Description                                                                                         |
| ------------------------------------- | --------------------------------- | --------------------------------------------------------------------------------------------------- |
| {{domxref("Observable.drop()")}}      | {{jsxref("Iterator.drop()")}}     | Skips the first `n` values from the source observable.                                              |
| {{domxref("Observable.filter()")}}    | {{jsxref("Iterator.filter()")}}   | Skips values that don't match a predicate function.                                                 |
| {{domxref("Observable.flatMap()")}}   | {{jsxref("Iterator.flatMap()")}}  | Maps each value to an observable, then flattens the resulting observables into a single observable. |
| {{domxref("Observable.inspect()")}}   | N/A                               | Like `subscribe()`, but only "taps into" the stream and allows further chaining.                    |
| {{domxref("Observable.map()")}}       | {{jsxref("Iterator.map()")}}      | Maps each value to a new value using a mapping function.                                            |
| {{domxref("Observable.switchMap()")}} | N/A                               | Maps each value to an observable and unsubscribes from the previous inner observable.               |
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

In this snippet, the page's {{htmlelement("body")}} element is an {{domxref("EventTarget")}}. We obtain a stream of [`mousemove`](/en-US/docs/Web/API/Element/mousemove_event) events fired on it using the `when()` method.

We then specify a pipeline:

- {{domxref("Observable.filter()")}} filters the events passed through the pipeline to only events fired on the {{htmlelement("div")}} element (tested using the {{domxref("Element.matches()")}} method) and not other `body` descendants.
- {{domxref("Observable.map()")}} maps the fired `mousemove` event objects to new objects containing the coordinates of the mouse cursor when the event was fired.

Finally, {{domxref("Observable.subscribe()")}} subscribes to the observable, passing a handler function called each time a `mousemove` event passes the filter.

The rendered output looks like this:

{{EmbedLiveSample("basic-when-example", "100%", "380px")}}

Try moving the mouse over the top of the example; the coordinates are printed to the `<p>` only when the `<div>` elements are moved over, not the areas outside the `<div>`s.

> [!NOTE]
> Observables are "lazy" — events don't start being passed through them, nor do they queue any data, until they have at least one subscriber. For example, in the above example, if you remove the `subscribe()` method call and add logs inside the `filter()` and `map()` methods, you will see that they don't log anything. Once `subscribe()` is called at the end of the pipeline, all previous observables in this chain also become subscribed and start processing data.

### Working with inner observables

Some operations produce another stream for each source value: a click might start an upload, or a change to a search field might start a request. These are called _inner observables_. Using `map()` alone would send the inner observable objects to your observer. {{domxref("Observable.flatMap()")}} and {{domxref("Observable.switchMap()")}} instead subscribe to them and forward their values.

- `flatMap()` processes source values sequentially. It waits for the current inner observable to complete before calling the mapper for the next queued source value. Use this when every operation should finish in order. If an inner observable never completes, later source values remain queued.
- `switchMap()` unsubscribes from the current inner observable when a new source value arrives, then calls the mapper and subscribes to its result. Use this when only the latest operation's results are relevant.

Both methods convert the mapper's result using {{domxref("Observable.from_static", "Observable.from()")}}, so the mapper can also return a promise, iterable, or async iterable. A promise contributes its fulfillment value and then completes; a rejection becomes an error in the inner observable. In contrast, `map()` forwards a returned promise as a value without awaiting it.

For example, suppose a page has a search input and a results element, and `/search` returns JSON. An async mapper lets us fetch and parse each response as one operation:

```js
const searchInput = document.querySelector("input[type='search']");
const results = document.querySelector("#results");

async function search(query) {
  const response = await fetch(`/search?q=${encodeURIComponent(query)}`);
  if (!response.ok) {
    throw new Error(`Search failed: ${response.status}`);
  }
  return response.json();
}

const queries = searchInput.when("input").map(() => searchInput.value);

queries.switchMap(search).subscribe({
  next(data) {
    results.textContent = JSON.stringify(data);
  },
  error(error) {
    results.textContent = error.message;
  },
});
```

If another input event arrives before the previous search finishes, the previous result is no longer forwarded. However, unsubscribing from an observable created from a promise does not cancel the work behind that promise: the previous request can still finish. To cancel the request itself, return a custom observable that passes `subscriber.signal` to `fetch()`, as shown in [Canceling asynchronous work](/en-US/docs/Web/API/Observable_API/Creating_observables#canceling_asynchronous_work).

### Inspecting a pipeline

{{domxref("Observable.inspect()")}} lets you run a side effect, such as logging, while forwarding values unchanged. Unlike `subscribe()`, it returns an observable and does not start the pipeline by itself:

```js
document.body
  .when("click")
  .inspect((event) => console.log("Click:", event.target))
  .map((event) => ({ x: event.clientX, y: event.clientY }))
  .subscribe((point) => console.log("Coordinates:", point));
```

You can also pass an object with `subscribe`, `next`, `error`, `complete`, and `abort` callbacks to inspect the subscription's lifecycle. An `inspect()` callback can affect the pipeline if it throws; for example, an exception in its `next` callback becomes an error in the returned observable.

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

All these methods return promises for the results described above. Depending on the method, the promise fulfills as soon as the result is determined or when the observable completes (we'll see later what it means for an observable to complete). It can also reject, for example if the observable errors or the subscription is aborted.

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
- `error(err)`: Called when the observable signals an error. Exceptions thrown by the observer's own callbacks are reported to the global object instead.
- `complete()`: Called when the observable has finished sending values. We'll discuss this more in the [Creating custom observables](/en-US/docs/Web/API/Observable_API/Creating_observables) guide. Event streams are infinite, but can become finite by calling `take()` or `takeUntil()`.

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

Internally, each active observable subscription has a list of _observers_ — objects containing any of these three callbacks. You can call `subscribe()` multiple times on the same observable to register multiple observers. Concurrent observers share the subscription, and each receives values emitted while it is subscribed; previously emitted values are not replayed to new observers. This differs from sharing an iterator, where each consumer's `next()` call advances the same iterator rather than broadcasting a value to all consumers.

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

An observer can also be unsubscribed from the observable, which means its callbacks will no longer be called. If an observable has no more observers, its shared subscription becomes inactive and its teardown callbacks run. These callbacks release resources, such as the event listener registered by `when()`. Custom observables must implement this cleanup themselves, as described in [Creating custom observables](/en-US/docs/Web/API/Observable_API/Creating_observables#teardown).

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

document.body
  .when("click")
  .take(1)
  .subscribe(() => {
    // Unsubscribe on click
    controller.abort();
  });
```

{{EmbedLiveSample("abort-example", "100%", "380px")}}

The `take(1)` call completes the click stream after the first click, removing its event listener. This is similar to using `{ once: true }` with `addEventListener()`.

In this example, the abort condition is triggered by another observable emitting a value: `document.body.when("click")`. In this case, you can use the `takeUntil()` method to achieve the same effect in a more declarative way. The `takeUntil()` method returns an observable (it's one of the [transformation methods](#transforming_an_observable)), so it can be inserted in the pipeline to specify a condition under which you would like the unsubscribe action to occur. The following code achieves the same effect as the previous example:

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

The `takeUntil()` method [converts](/en-US/docs/Web/API/Observable/from_static) the input to an observable, so you can even pass a promise to unsubscribe when the promise fulfills.

An `AbortController` lets you unsubscribe at any point in your code. Separate controllers let you unsubscribe observers independently. Aborting does not call the observer's `complete` callback. In contrast, `takeUntil()` completes the observable it returns and notifies that observable's observers through their `complete` callbacks. Other observers subscribed directly to the source observable remain subscribed.

## Handling errors

An error ends the affected subscription. Errors from a source propagate through the pipeline, and exceptions thrown by transformation callbacks, such as a `map()` mapper or `filter()` predicate, become errors in the returned observable. An observer's `error` callback reports or handles the failure, but does not resume that subscription. If it has no `error` callback, the error is reported to the global object.

{{domxref("Observable.catch()")}} lets a pipeline recover by subscribing to a replacement stream. Its callback receives the error and returns an observable, or any value convertible by `Observable.from()`. For example, returning `[]` completes the replacement without emitting a value. It does not retry the failed source.

Placement matters for inner observables. In the [search example](#working_with_inner_observables), a failure in the current request ends the search subscription, so subsequent input events no longer start searches. We can replace that subscription code with the following to recover from failures while the inner subscription is active:

```js
queries
  .switchMap((query) =>
    Observable.from(search(query)).catch((error) => {
      results.textContent = error.message;
      return [];
    }),
  )
  .subscribe((data) => {
    results.textContent = JSON.stringify(data);
  });
```

Here, `catch()` handles only the inner request's failure. Its empty replacement completes, while the outer subscription continues listening for input. Placing `catch()` after `switchMap()` would instead replace the entire search pipeline: returning `[]` there would complete it and stop listening for input. The same distinction applies to `flatMap()`.

This does not handle failures from requests that `switchMap()` has already unsubscribed from. If such a request's promise later rejects, `Observable.from()` reports the error to the global object because its subscriber is inactive; the `catch()` callback is no longer subscribed. To cancel obsolete requests and avoid reporting their cancellation as an error, use the custom `fetchJSON()` producer in [Canceling asynchronous work](/en-US/docs/Web/API/Observable_API/Creating_observables#canceling_asynchronous_work), which checks `subscriber.active` before forwarding a rejection.

Exceptions thrown by callbacks passed to `subscribe()` are different: they are reported to the global object, rather than becoming errors that a pipeline's `catch()` can recover from. Similarly, an async `next` callback's returned promise is not awaited; handle its rejections yourself, or use `flatMap()` or `switchMap()` to incorporate the asynchronous work into the pipeline.

### Running cleanup

{{domxref("Observable.finally()")}} returns an observable that forwards the source's values and notifications, and runs a callback when its subscription ends through completion, error, or unsubscribing. This makes it useful for cleanup that a `complete` callback alone would miss:

```js
document.body
  .when("click")
  .take(3)
  .finally(() => console.log("Stopped observing clicks"))
  .subscribe((event) => console.log(event.target));
```

The callback runs after the third click ends the subscription. It would also run if the subscription were aborted early. Like `Subscriber.addTeardown()`, it does not await a returned promise. Use `finally()` to attach cleanup when composing a pipeline; use `addTeardown()` when implementing the producer's own resource cleanup, as described in [Creating custom observables](/en-US/docs/Web/API/Observable_API/Creating_observables#teardown).

## Example: canvas drawing

In this example we create a basic {{htmlelement("canvas")}}-based drawing app, which brings together the APIs we have seen so far to demonstrate how observables help you declaratively implement complex event handling logic.

### HTML

The markup includes a `<canvas>` element to draw onto, and a {{htmlelement("form")}} containing two {{htmlelement("input")}} controls to allow the user to choose a new pen size and color (a [range slider](/en-US/docs/Web/HTML/Reference/Elements/input/range) and a [color picker](/en-US/docs/Web/HTML/Reference/Elements/input/color), respectively). We also include an {{htmlelement("output")}} element to display the current range value.

```html live-sample___canvas-example
<canvas></canvas>
<form>
  <div>
    <label for="size">Choose pen size:</label>
    <input id="size" type="range" min="1" max="40" value="10" />
    <output for="size">10</output>
  </div>
  <div>
    <label for="color">Choose pen color:</label>
    <input id="color" type="color" />
  </div>
</form>
```

### CSS

In the CSS, we make the `<body>` element span the full width and height of the page. We also make the `<form>` sit on top of the `<canvas>`, and use {{glossary("inset properties")}} to make it stick to the top, left, and right of the `<body>`.

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

Next, we synchronize the canvas's {{domxref("HTMLCanvasElement.width","width")}} and {{domxref("HTMLCanvasElement.height","height")}} to the {{domxref("Element.clientWidth", "clientWidth")}}/{{domxref("Element.clientHeight", "clientHeight")}} of the `<body>`. This is implemented in the `sizeCanvas()` function. It is called when the app starts and whenever the window resizes, using `when("resize").subscribe(sizeCanvas)`. For this event handler, this has the same effect as `addEventListener("resize", sizeCanvas)`. Setting the canvas dimensions also clears the drawing.

```js live-sample___canvas-example
function sizeCanvas() {
  canvas.width = document.body.clientWidth;
  canvas.height = document.body.clientHeight;
}

sizeCanvas();

window.when("resize").subscribe(sizeCanvas);
```

Next, we define the variables and functions we need to draw on our `<canvas>`. First, we grab a reference to the `<canvas>` [2D rendering context](/en-US/docs/Web/API/CanvasRenderingContext2D), and store initial values for the pen size and color in `penSize` and `penColor`, respectively. The `updatePenSize()` function sets `penSize` to the range slider's [`valueAsNumber`](/en-US/docs/Web/API/HTMLInputElement/valueAsNumber) and displays its value in the `<output>` element. The `updatePenColor()` function sets `penColor` to the color picker's [`value`](/en-US/docs/Web/API/HTMLInputElement/value). These functions handle the [`input`](/en-US/docs/Web/API/Element/input_event) event on the range slider and the [`change`](/en-US/docs/Web/API/HTMLElement/change_event) event on the color picker, respectively.

```js live-sample___canvas-example
const ctx = canvas.getContext("2d");
let penSize = 10;
let penColor = "black";

function updatePenSize() {
  penSize = sizeInput.valueAsNumber;
  sizeOutput.textContent = sizeInput.value;
}

function updatePenColor() {
  penColor = colorInput.value;
}

sizeInput.when("input").subscribe(updatePenSize);
colorInput.when("change").subscribe(updatePenColor);
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

Finally, we create an observable for [`mousedown`](/en-US/docs/Web/API/Element/mousedown_event) events on the `<canvas>`. For each press of the primary mouse button, {{domxref("Observable.flatMap()")}} subscribes to a stream of `mousemove` events that ends when the button is released. We listen for `mouseup` on the document so drawing also stops if the mouse is released outside the canvas. We then use {{domxref("Observable.map()")}} to extract the mouse coordinates and `subscribe()` to pass them to `draw()`.

```js live-sample___canvas-example
canvas
  .when("mousedown")
  .filter((e) => e.button === 0)
  .flatMap(() => {
    const mouseUp = document
      .when("mouseup")
      .filter((e) => e.button === 0)
      .finally(finishDraw);
    return canvas.when("mousemove").takeUntil(mouseUp);
  })
  .map((e) => ({ x: e.clientX, y: e.clientY }))
  .subscribe(draw);
```

The pipeline processes a `mousedown → mousemove… → mouseup` sequence:

1. Each primary-button `mousedown` event passes the filter and triggers the `flatMap()` callback.
2. The callback returns `canvas.when("mousemove").takeUntil(mouseUp)`. Subscribing to this inner observable starts listening for mouse movements and for the button release.
3. Each mouse movement on the canvas passes through `flatMap()` to `map()`, which extracts its coordinates, and then to `draw()`.
4. When the primary button is released, {{domxref("Observable.takeUntil()")}} completes the inner observable and unsubscribes from both event streams. The {{domxref("Observable.finally()")}} callback runs during cleanup and calls `finishDraw()` to show the form again.
5. The outer `mousedown` subscription remains active, so the next press starts a new drawing sequence.

The final effect is that we react to `mousemove` events (just like our first example on this page!) but we only start listening when `mousedown` fires and stop listening when `mouseup` fires. With the help of `Observable`, we have successfully composed three parallel event streams into a single, coherent sequence.

### Result

The example renders like this:

{{EmbedLiveSample("canvas-example", "100%", "320px")}}

## See also

- [Creating custom observables](/en-US/docs/Web/API/Observable_API/Creating_observables)
- [Observable explainer](https://github.com/WICG/observable/blob/master/README.md)

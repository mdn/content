---
title: Using observables
slug: Web/API/Observable_API/Using_observables
page-type: guide
---

{{DefaultAPISidebar("Observable API")}}

The [Observable API](/en-US/docs/Web/API/Observable_API) provides a mechanism for handling an asynchronous stream of events in an efficient, ergonomic fashion. This guide explains how to transform, subscribe to, and unsubscribe from existing observables, using browser event streams as examples.

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
> Observables are "lazy" — events don't start being passed through them, nor do they queue any data, until they have at least one subscriber. For example, in the above example, if you remove the `subscribe()` method call and add logs inside the `filter()` and `map()` methods, you will see that they don't log anything. Once `subscribe()` is called at the end of the pipeline, all previous observables in this chain also become subscribed and start processing data.

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
- `error(err)`: Called when an error occurs inside the observable.
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

The `takeUntil()` method [converts](/en-US/docs/Web/API/Observable/from_static) the input to an observable, so you can even pass a promise to unsubscribe when the promise resolves.

The `AbortController` method is more flexible where your unsubscribe condition is not easily represented as a single control flow object. It also allows you to unsubscribe observers independently if the observable has multiple observers. The `takeUntil()` method, on the other hand, essentially converts the observable pipeline into one that completes, and when an observable completes, all observers are unsubscribed.

## Canvas drawing example

In this example we create a basic {{htmlelement("canvas")}}-based drawing app, which brings together the APIs we have seen so far to demonstrate how observables help you declaratively implement complex event handling logic.

### HTML

The markup includes a `<canvas>` element to draw onto, and a {{htmlelement("form")}} containing two {{htmlelement("input")}} controls to allow the user to choose a new pen size and color (a [range slider](/en-US/docs/Web/HTML/Reference/Elements/input/range) and a [color picker](/en-US/docs/Web/HTML/Reference/Elements/input/color), respectively). We also include an {{htmlelement("output")}} element to display the current range value.

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

Next, we synchronize the canvas's {{domxref("HTMLCanvasElement.width","width")}} and {{domxref("HTMLCanvasElement.height","height")}} to the {{domxref("Element.clientWidth", "clientWidth")}}/{{domxref("Element.clientHeight", "clientHeight")}} of the `<body>`. This is implemented in the `sizeCanvas()` function. It is called when the app starts and also whenever the window resizes—using `when("resize").subscribe(sizeCanvas)` which is, again, exactly equivalent to the familiar `addEventListener("resize", sizeCanvas)`.

```js live-sample___canvas-example
function sizeCanvas() {
  canvas.width = document.body.clientWidth;
  canvas.height = document.body.clientHeight;
}

sizeCanvas();

window.when("resize").subscribe(sizeCanvas);
```

Next, we define the variables and functions we need to draw on our `<canvas>`. First, we grab a reference to the `<canvas>` [2D rendering context](/en-US/docs/Web/API/CanvasRenderingContext2D), and store an initial value for the pen color and pen size in variables called `penSize` and `penColor`, respectively. We also define the logic to update the pen size and pen color when new values are chosen from the `<input>` elements. The `updatePenSize()` function sets the `penSize` variable to the [`value`](/en-US/docs/Web/API/HTMLInputElement/value) of the range slider `<input>`, and also sets that value as the `<output>` element's text content. The `updatePenColor()` function sets the `penColor` variable to the `value` of the color picker `<input>`. These two functions are wired up to the [`input`](/en-US/docs/Web/API/Element/input_event) event on the range slider and [`change`](/en-US/docs/Web/API/HTMLElement/change_event) event on the color picker, respectively.

```js live-sample___canvas-example
const ctx = canvas.getContext("2d");
let penSize = 10;
let penColor = "black";

function updatePenSize() {
  penSize = sizeInput.value;
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

This is a long pipeline. It observes a whole `mousedown -> mousemove... -> mouseup` chain step-by-step.

1. The source observable is `canvas.when("mousedown")`, which fires on every `mousedown` event and triggers the `flatMap()` callback.
2. The `flatMap()` callback creates two observables: `canvas.when("mousemove")` and `canvas.when("mouseup")`. The first one is directly returned from the callback, so the observable returned by `flatMap()` fires on every `mousemove` event instead.
3. Because of the {{domxref("Observable.takeUntil()")}} call, the `mousemove` observer only fires until the `mouseUp` observer fires once (we'll talk about this observer right after). Because the `takeUntil()` call is chained to the `canvas.when("mousemove")` observable instead of the main `canvas.when("mousedown")` one, the `mouseUp` observer does not unsubscribe the `mousedown` observer, and future `mousedown` events can still trigger the whole process again.
4. The observable returned by `flatMap()`, which fires on every `mousemove`, is transformed by a `map()` that turns events into objects with `x` and `y` properties. This final observable is subscribed to by `draw`, allowing `draw` to receive the `x` and `y` coordinates of each `mousemove` events.
5. As step 3 said: the stream of `mousemove` events ends on every `mouseup` event thanks to the `mouseUp` observable used as the termination criterion in `takeUntil()`. This `mouseUp` observable is just `canvas.when("mouseup")`, but we chain an additional {{domxref("Observable.finally()")}} call, which calls `finishDraw()` whenever this event fires, making the `<form>` appear again at the end of the process.

The final effect is that we react to `mousemove` events (just like our first example on this page!) but we only start listening when `mousedown` fires and stop listening when `mouseup` fires. With the help of `Observable`, we have successfully composed three parallel event streams into a single, coherent sequence.

### Result

The example renders like this:

{{EmbedLiveSample("canvas-example", "100%", "320px")}}

## See also

- [Creating custom observables](/en-US/docs/Web/API/Observable_API/Creating_observables)
- [Observable explainer](https://github.com/WICG/observable/blob/master/README.md)

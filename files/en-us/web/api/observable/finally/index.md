---
title: "Observable: finally() method"
short-title: finally()
slug: Web/API/Observable/finally
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.Observable.finally
---

{{APIRef("Observable API")}}{{SeeCompatTable}}

The **`finally()`** method of the {{domxref("Observable")}} interface fires a callback after the observable stream completes — either successfully, or by throwing an exception.

## Syntax

```js-nolint
finally(callback)
```

### Parameters

- `callback`
  - : A callback function that is run after the observable stream completes.

### Return value

An {{domxref("Observable")}}.

## Examples

### Basic `finally()` example

In this example, we'll print the updated mouse coordinates to the screen whenever the mouse is moved over the top of a couple of `<article>` elements, but stop reporting them when the mouse is clicked. A "finish" screen is then shown, which include a button for restarting coordinate reporting.

#### HTML

The markup includes a {{htmlelement("main")}} element containing the two {{htmlelement("article")}} elements plus a single {{htmlelement("p")}} element to display the returned coordinate data. Below that is a {{htmlelement("div")}} element representing the "finish" screen, containing a message and a restart button.

```html live-sample___basic-finally
<main>
  <article></article>
  <article></article>
  <p></p>
</main>
<div>
  <p>You finished capturing coordinates.</p>
  <button>Restart</button>
</div>
```

#### CSS

We style the `<article>` elements with a {{cssxref("height")}}, {{cssxref("background-color")}}, and {{cssxref("margin-bottom")}}, and give the `<div>` element a {{cssxref("position")}} of `absolute` and an {{cssxref("inset")}} value of `0` so that it covers the entire document.

```css live-sample___basic-finally
article {
  height: 120px;
  background-color: purple;
  margin-bottom: 40px;
}

div {
  position: absolute;
  inset: 0;
  background-color: white;
  padding: 20px;
}
```

#### JavaScript

The first chunk of JavaScript looks like this:

```js live-sample___basic-finally
const mainElem = document.querySelector("main");
const outputElem = document.querySelector("p");
const finishScreen = document.querySelector("div");
const btn = document.querySelector("button");

function init() {
  const observable = mainElem
    .when("mousemove")
    .filter((e) => e.target.matches("article"))
    .map((e) => ({ x: e.clientX, y: e.clientY }))
    .takeUntil(mainElem.when("click"))
    .finally(showFinishScreen)
    .subscribe(reportCoords);

  finishScreen.style.display = "none";
}
```

In this snippet we first grab a reference to the `<main>`, `<p>`, `<div>`, and `<button>` elements, then define an `init()` function.

Inside this function, we specify the [`mousemove`](/en-US/docs/Web/API/Element/mousemove_event) event inside a {{domxref("EventTarget.when()")}} method on the {{htmlelement("main")}} element, which returns a observable representing a stream of `mousemove` events fired on the `<main>` element.

We then specify a pipeline:

- {{domxref("Observable.filter()")}} is used to filter the events passed through the pipeline to only events fired on `EventTarget`s that match the `article` CSS selector (tested using the {{domxref("Element.matches()")}} method). This means that only `mousemove` events directly fired on the `<article>` elements will pass through the pipeline.
- {{domxref("Observable.map()")}} is used to map the fired `mousemove` {{domxref("Event")}} objects to new objects containing the coordinates of the mouse cursor when the event was fired.
- {{domxref("Observable.takeUntil()")}} is used to specify a `when()` call, again on the `<main>` element, which represents a stream of `click` events. This causes the outer observable to be unsubscribed from the `mousemove` event stream as soon as a `click` event is fired on the `<main>` element.
- `finally()` is included in the pipeline, specifying a reference to the `showFinishScreen()` function. This causes `showFinishScreen()` to be called as soon as the stream completes, which will be when the `<main>` element is clicked on.
- {{domxref("Observable.subscribe()")}} is used to subscribe the observable to the event stream, calling the `reportCoords()` function each time a `mousemove` event fires on the `<article>` elements.

The final line of the `init()` function sets the "finish" screen `<div>` to {{cssxref("display", "display: none")}} so that it is hidden while coordinate reporting is in progress.

Next, we define the `reportCoords()` function, which prints the mouse coordinates to the `<p>` element:

```js live-sample___basic-finally
function reportCoords(e) {
  outputElem.textContent = `${e.x},${e.y}`;
}
```

Next, we define the `showFinishScreen()` function, which serves to set the `<div>` element's `display` value back to `block`, displaying it once the stream has completed:

```js live-sample___basic-finally
function showFinishScreen() {
  finishScreen.style.display = "block";
}
```

Next up, we create a new observable on the `<button>` element using a `when()` call so that when it is clicked, the `init()` function is run, which serves to restart the coordinate reporting after it has finished. The final step in our script is to call the `init()` function to start coordinate reporting in the first place.

```js live-sample___basic-finally
btn.when("click").subscribe(init);

init();
```

The rendered output looks like this:

{{EmbedLiveSample("basic-finally", "100%", "360px")}}

Try moving the mouse over the top of the example; the coordinates are printed to the `<p>` when the `<article>` elements are moused over.

Now try clicking on the example, and note how the "finish" screen is displayed. At this point, no more coordinate reporting will occur until the `<button>` is clicked to restart the app.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Observable API](/en-US/docs/Web/API/Observable_API/Using)
- [Observable explainer](https://github.com/WICG/observable/blob/master/README.md)

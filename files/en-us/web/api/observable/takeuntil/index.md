---
title: "Observable: takeUntil() method"
short-title: takeUntil()
slug: Web/API/Observable/takeUntil
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.Observable.takeUntil
---

{{APIRef("Observable API")}}{{SeeCompatTable}}

The **`takeUntil()`** method of the {{domxref("Observable")}} interface specifies an event on which the resulting observable will unsubscribe from the event stream.

## Syntax

```js-nolint
takeUntil(value)
```

### Parameters

- `value`
  - : A value representing the event that, when fired for the first time, will cause the observable stream to be unsubscribed from. This is usually another observable, although it can take other values such as {{jsxref("Promise")}}s and [iterables](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols).

EDITORIAL: The observable case makes sense, but I don't understand what using a promise or iterable would look like, or what the use cases would be.

### Return value

An {{domxref("Observable")}}.

## Examples

### Basic `takeUntil()` example

In this example, we'll print the updated mouse coordinates to the screen whenever the mouse is moved over the top of a couple of {{htmlelement("div")}} elements, but stop reporting them when the mouse is clicked.

#### HTML

The markup includes two `<div>` elements plus a single {{htmlelement("p")}} element to display the returned coordinate data.

```html live-sample___basic-takeUntil
<div></div>
<div></div>
<p></p>
```

#### CSS

We style the `<div>` elements with a {{cssxref("height")}}, {{cssxref("background-color")}}, and {{cssxref("margin-bottom")}}:

```css live-sample___basic-takeUntil
div {
  height: 120px;
  background-color: purple;
  margin-bottom: 40px;
}
```

#### JavaScript

The first chunk of JavaScript looks like this:

```js live-sample___basic-takeUntil
const outputElem = document.querySelector("p");

document.body
  .when("mousemove")
  .filter((e) => e.target.matches("div"))
  .map((e) => ({ x: e.clientX, y: e.clientY }))
  .takeUntil(document.body.when("click"))
  .subscribe(reportCoords);
```

In this snippet we first grab a reference to the `<p>` element, then specify the [`mousemove`](/en-US/docs/Web/API/Element/mousemove_event) event inside the `when()` method on the page's {{htmlelement("body")}} element, which returns a observable representing a stream of `mousemove` events fired on the `<body>` element.

We then specify a pipeline:

- {{domxref("Observable.filter()")}} is used to filter the events passed through the pipeline to only events fired on `EventTarget`s that match the `div` CSS selector (tested using the {{domxref("Element.matches()")}} method). This means that only `mousemove` events directly fired on the `<div>` elements will pass through the pipeline.
- {{domxref("Observable.map()")}} is used to map the fired `mousemove` {{domxref("Event")}} objects to new objects containing the coordinates of the mouse cursor when the event was fired.
- `takeUntil()` is used to specify a `when()` call, again on the `<body>` element, which represents a stream of `click` events. This causes the outer observable to be unsubscribed from the `mousemove` event stream as soon as a `click` event is fired on the `<body>`.
- {{domxref("Observable.subscribe()")}} is used to subscribe the observable to the event stream, calling the `reportCoords()` function each time a `mousemove` event fires on the `<div>`s.

Finally, we define the `reportCoords()` function, which prints the mouse coordinates to the `<p>` element:

```js live-sample___basic-takeUntil
function reportCoords(e) {
  outputElem.textContent = `${e.x},${e.y}`;
}
```

The rendered output looks like this:

{{EmbedLiveSample("basic-takeUntil", "100%", "360px")}}

Try moving the mouse over the top of the example; the coordinates are printed to the `<p>` when the `<div>` elements are moused over.

Now try clicking on the example, and note how the coordinates are no longer printed.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Observable API](/en-US/docs/Web/API/Observable_API/Using)
- [Observable explainer](https://github.com/WICG/observable/blob/master/README.md)

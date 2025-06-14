---
title: "Observable: map() method"
short-title: map()
slug: Web/API/Observable/map
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.Observable.map
---

{{APIRef("Observable API")}}{{SeeCompatTable}}

The **`map()`** method of the {{domxref("Observable")}} interface maps each value passed through the observable stream to a new structure.

## Syntax

```js-nolint
map(mapper, index)
```

### Parameters

- `mapper`
  - : A callback function that transforms each value passed through the observable into a new value before passing it through to the rest of the stream.
- `index` {{optional_inline}}
  - : A number ... (EDITORIAL: I'm really not sure what this does)

### Return value

An {{domxref("Observable")}}.

## Examples

### Basic `map()` example

In this example, we'll print the updated mouse coordinates to the screen whenever the mouse is moved over the top of a couple of {{htmlelement("div")}} elements.

#### HTML

The markup includes two `<div>` elements plus a single {{htmlelement("p")}} element to display the returned coordinate data.

```html live-sample___basic-map
<div></div>
<div></div>
<p></p>
```

#### CSS

We style the `<div>` elements with a {{cssxref("height")}}, {{cssxref("background-color")}}, and {{cssxref("margin-bottom")}}:

```css live-sample___basic-map
div {
  height: 120px;
  background-color: purple;
  margin-bottom: 40px;
}
```

#### JavaScript

The first chunk of JavaScript looks like this:

```js live-sample___basic-map
const outputElem = document.querySelector("p");

document.body
  .when("mousemove")
  .filter((e) => e.target.matches("div"))
  .map((e) => ({ x: e.clientX, y: e.clientY }))
  .subscribe({ next: reportCoords });
```

In this snippet we first grab a reference to the `<p>` element, then specify the [`mousemove`](/en-US/docs/Web/API/Element/mousemove_event) event inside the `when()` method on the page's {{htmlelement("body")}} element, which returns a observable representing a stream of `mousedown` events fired on the `<body>` element.

We then specify a pipeline:

- {{domxref("Observable.filter()")}} is used to filter the events passed through the pipeline to only events fired on `EventTarget`s that match the `div` CSS selector (tested using the {{domxref("Element.matches()")}} method). This means that only `mousemove` events directly fired on the `<div>` elements will pass through the pipeline.
- `map()` is used to map the fired `mousemove` {{domxref("Event")}} objects to new objects containing the coordinates of the mouse cursor when the event was fired.
- {{domxref("Observable.subscribe()")}} is used to subscribe the observable to the event stream, calling the `reportCoords()` function each time a `mousemove` event fires on the `<div>`s.

Finally, we define the `reportCoords()` function, which prints the mouse coordinates to the `<p>` element:

```js live-sample___basic-map
function reportCoords(e) {
  outputElem.textContent = `${e.x},${e.y}`;
}
```

The rendered output looks like this:

{{EmbedLiveSample("basic-map", "100%", "360px")}}

Try moving the mouse over the top of the example; the coordinates are printed to the `<p>` only when the `<div>` elements are moved over, not the areas outside the `<div>`s.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Observable API](/en-US/docs/Web/API/Observable_API/Using)
- [Observable explainer](https://github.com/WICG/observable/blob/master/README.md)

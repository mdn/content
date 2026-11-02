---
title: "HTMLCanvasElement: content property"
short-title: content
slug: Web/API/HTMLCanvasElement/content
page-type: web-api-instance-property
browser-compat: api.HTMLCanvasElement.content
---

{{APIRef("Canvas API")}}

The **`content`** property of the {{domxref("HTMLCanvasElement")}} interface indicates whether the {{HTMLElement("canvas")}} element is opted into rendering its descendants rather than treating them as [fallback content](/en-US/docs/Web/HTML/Reference/Elements/canvas#fallback_content).

Reflects the value of the HTML [`content`](/en-US/docs/Web/HTML/Reference/Elements/canvas#content) attribute.

## Value

A string. Possible values are:

- `drawable`
  - : Descendants of the `<canvas>` element can be rendered on the canvas context using the [HTML-in-Canvas API](/en-US/docs/Web/API/HTML-in-Canvas_API).
- `fallback`
  - : Descendants of the `<canvas>` element are always treated as fallback content. This is the default value.

## Examples

### Basic usage

Given this `<canvas>` element:

```html
<canvas id="canvas" width="300" height="300" content="drawable"></canvas>
```

You can get the value of the `content` attribute like so:

```js
const canvas = document.getElementById("canvas");
console.log(canvas.content); // drawable
```

And set it like this:

```js
canvas.content = "fallback";
console.log(canvas.content); // fallback
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [HTML-in-Canvas API](/en-US/docs/Web/API/HTML-in-Canvas_API)

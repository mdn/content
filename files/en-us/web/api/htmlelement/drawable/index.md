---
title: "HTMLElement: drawable property"
short-title: drawable
slug: Web/API/HTMLElement/drawable
page-type: web-api-instance-property
browser-compat: api.HTMLElement.drawable
---

{{APIRef("Canvas API")}}

The **`drawable`** property of the {{domxref("HTMLElement")}} interface marks an element as a **paint root**, meaning that it can be rendered independently on a parent {{htmlelement("canvas")}} element with its [`content`](/en-US/docs/Web/HTML/Reference/Elements/canvas#content) attribute set to `drawable`, using the [HTML-in-Canvas API](/en-US/docs/Web/API/HTML-in-Canvas_API).

Reflects the value of the HTML [`drawable`](/en-US/docs/Web/HTML/Reference/Global_attributes/drawable) attribute.

## Value

A boolean — `true` if the element is marked as a paint root, and `false` otherwise.

## Examples

### Basic usage

Given this HTML:

```html
<canvas id="canvas" width="300" height="300" content="drawable">
  <div drawable>I can be rendered on the canvas.</div>
</canvas>
```

You can get the value of the `drawable` attribute like so:

```js
const divElem = document.querySelector("div");
console.log(divElem.drawable); // true
```

And set it like this:

```js
divElem.drawable = "false";
console.log(divElem.drawable); // false
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [HTML-in-Canvas API](/en-US/docs/Web/API/HTML-in-Canvas_API)

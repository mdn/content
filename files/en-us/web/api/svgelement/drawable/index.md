---
title: "SVGElement: drawable property"
short-title: drawable
slug: Web/API/SVGElement/drawable
page-type: web-api-instance-property
browser-compat: api.SVGElement.drawable
---

{{APIRef("SVG")}}

The **`drawable`** property of the {{domxref("SVGElement")}} interface marks an element as a **paint root**, meaning that it can be rendered independently on a parent {{htmlelement("canvas")}} element with its [`content`](/en-US/docs/Web/HTML/Reference/Elements/canvas#content) attribute set to `drawable`, using the [HTML-in-Canvas API](/en-US/docs/Web/API/HTML-in-Canvas_API).

Reflects the value of the SVG [`drawable`](/en-US/docs/Web/SVG/Reference/Attribute/drawable) attribute.

## Value

A boolean — `true` if the element is marked as a paint root, and `false` otherwise.

## Examples

### Basic usage

Given this HTML:

```html
<canvas width="480" height="320" content="drawable">
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" drawable>
    <circle cx="20" cy="20" r="15" tabindex="0" />
  </svg>
</canvas>
```

You can get the value of the `drawable` attribute like so:

```js
const svgElem = document.querySelector("svg");
console.log(svgElem.drawable); // true
```

And set it like this:

```js
svgElem.drawable = false;
console.log(svgElem.drawable); // false
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [HTML-in-Canvas API](/en-US/docs/Web/API/HTML-in-Canvas_API)

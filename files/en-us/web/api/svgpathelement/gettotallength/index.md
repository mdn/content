---
title: "SVGPathElement: getTotalLength() method"
short-title: getTotalLength()
slug: Web/API/SVGPathElement/getTotalLength
page-type: web-api-instance-method
browser-compat: api.SVGPathElement.getTotalLength
---

{{APIRef("SVG")}}

The **`getTotalLength()`** method of the {{domxref("SVGPathElement")}} interface returns the user agent's computed value for the total length of the path in user units.

## Syntax

```js-nolint
getTotalLength()
```

### Parameters

None.

### Return value

A float indicating the total length of the path in user units.

### Examples

### Getting the total length of a `<path>`

In this example, we get the total length of two paths: a basic line and a heart shape.

```html
<svg width="200" height="100">
  <path
    id="heart"
    fill="red"
    d="M 10,30
           A 20,20 0,0,1 50,30
           A 20,20 0,0,1 90,30
           Q 90,60 50,90
           Q 10,60 10,30 z" />
  <path id="line" d="M 0,30 h100" stroke="black" />
</svg>
```

```js
const complexPath = document.getElementById("heart");
const basicPath = document.getElementById("line");

// Access the pathLength property
const complexPathLength = complexPath.getTotalLength();
const basicPathLength = basicPath.getTotalLength();

// The base value of the pathLength attribute
console.log(complexPathLength); // Output: 275.119
console.log(basicPathLength); // Output: 100
```

{{EmbedLiveSample('examples')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

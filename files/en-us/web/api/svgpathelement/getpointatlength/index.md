---
title: "SVGPathElement: getPointAtLength() method"
short-title: getPointAtLength()
slug: Web/API/SVGPathElement/getPointAtLength
page-type: web-api-instance-method
browser-compat: api.SVGPathElement.getPointAtLength
---

{{APIRef("SVG")}}

The **`getPointAtLength()`** method of the {{domxref("SVGPathElement")}} interface returns the point at a given distance along the path.

## Syntax

```js-nolint
getPointAtLength(distance)
```

### Parameters

- `distance`
  - : A number indicating the distance along the path

### Return value

A {{domxref("DOMPoint")}} indicating the point at a given distance along the path.

### Examples

#### Getting the midpoint of a `<path>`

In this example, we determine the midpoint of a path by getting the point that is half way along the length of the path.

We define an SVG that includes two paths: a basic line and a complex heart shape.

The path that creates the heart is approximately 275 units long.

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

The line is horizontal, starting at `0, 30` and is 100 units long.
The path of the heart starts at `10, 30` and is approximately 275 units long.

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 70px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

We know the length of the line is 100 units, and hence that `50` is the mid point.
We use the {{domxref("SVGPathElement.getTotalLength()")}} method to get the length of the heart's path, dividing it by `2` to get the mid-point distance.
We then use the `getPointAtLength()` method to return the mid point as a `DOMPoint`.
We display the `x` and `y` coordinates for each mid point.

```js
const basicPath = document.getElementById("line");
const complexPath = document.getElementById("heart");

// Get the length of the heart and divide by 2
const halfLength = complexPath.getTotalLength() / 2;

// Access the getPointAtLength property
const basicMidPoint = basicPath.getPointAtLength(50);
const complexMidPoint = complexPath.getPointAtLength(halfLength);

// The base value of the pathLength attribute
log(`Line mid point: ${basicMidPoint.x}, ${basicMidPoint.y}`);
log(`Heart mid point: ${complexMidPoint.x}, ${complexMidPoint.y}`);
```

{{EmbedLiveSample('Getting the total length of a `<path>`',"100%","220px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGPathElement.getTotalLength()")}}
- {{domxref("DOMPoint.x")}}
- {{domxref("DOMPoint.y")}}

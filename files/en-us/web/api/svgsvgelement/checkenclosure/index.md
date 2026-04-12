---
title: "SVGSVGElement: checkEnclosure() method"
short-title: checkEnclosure()
slug: Web/API/SVGSVGElement/checkEnclosure
page-type: web-api-instance-method
browser-compat: api.SVGSVGElement.checkEnclosure
---

{{APIRef("SVG")}}

The `checkEnclosure()` method of the {{domxref("SVGSVGElement")}} interface checks if the rendered content of the given element is entirely contained within the supplied rectangle.

Each candidate graphics element is to be considered a match only if the same graphics element can be a target of pointer events as defined in {{SVGAttr("pointer-events")}} processing.

## Syntax

```js-nolint
checkEnclosure(element, rect)
```

### Parameters

- `element`
  - : An {{domxref("Element")}} representing the SVG graphics element to check.
- `rect`
  - : An {{domxref("SVGRect")}} object that defines the rectangle to check against.

### Return value

A boolean.

## Examples

### Checking if an Element is Enclosed in a Rectangle

```html
<svg id="exampleSVG" width="200" height="200">
  <rect
    id="checkRect"
    x="10"
    y="10"
    width="100"
    height="100"
    fill="none"
    stroke="red" />
  <circle id="targetElement" cx="50" cy="50" r="30" fill="blue" />
</svg>
<button id="checkEnclosureBtn">Check Enclosure</button>
<pre id="result"></pre>
```

```js
const svgElement = document.getElementById("exampleSVG");
const checkRect = svgElement.getElementById("checkRect");
const targetElement = svgElement.getElementById("targetElement");
const resultDisplay = document.getElementById("result");

document.getElementById("checkEnclosureBtn").addEventListener("click", () => {
  const rect = svgElement.createSVGRect();
  rect.x = checkRect.x.baseVal.value;
  rect.y = checkRect.y.baseVal.value;
  rect.width = checkRect.width.baseVal.value;
  rect.height = checkRect.height.baseVal.value;

  const isEnclosed = svgElement.checkEnclosure(targetElement, rect);
  resultDisplay.textContent = `Is the circle enclosed in the rectangle? ${isEnclosed}`;
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGSVGElement.checkIntersection()")}}

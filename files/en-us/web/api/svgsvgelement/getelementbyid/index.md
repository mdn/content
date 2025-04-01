---
title: "SVGSVGElement: getElementById() method"
short-title: getElementById()
slug: Web/API/SVGSVGElement/getElementById
page-type: web-api-instance-method
browser-compat: api.SVGSVGElement.getElementById
---

{{APIRef("SVG")}}

The `getElementById()` method of the {{domxref("SVGSVGElement")}} interface searches the SVG document fragment (i.e., the search is restricted to a subset of the document tree) for an {{domxref("Element")}} whose `id` property matches the specified string.

## Syntax

```js-nolint
getElementById(id)
```

### Parameters

- `id`
  - : The ID of the element to locate. The ID is a case-sensitive string which is unique within the SVG document fragment; only one element should have any given ID.

### Return value

An {{domxref("Element")}} object describing the DOM element object matching the specified ID, or `null` if no matching element was found in the SVG document fragment.

## Examples

### Retrieving an Element by ID

```html
<svg
  id="exampleSVG"
  width="200"
  height="200"
  xmlns="http://www.w3.org/2000/svg">
  <circle id="circle1" cx="100" cy="100" r="50" fill="blue" />
</svg>
<button id="getElementButton">Get Element</button>
<p id="elementDisplay"></p>
```

```js
const svgElement = document.getElementById("exampleSVG");
const getElementButton = document.getElementById("getElementButton");
const elementDisplay = document.getElementById("elementDisplay");

getElementButton.addEventListener("click", () => {
  const circleElement = svgElement.getElementById("circle1");
  if (circleElement) {
    elementDisplay.textContent = "Element found: " + circleElement.tagName;
  } else {
    elementDisplay.textContent = "Element not found.";
  }
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

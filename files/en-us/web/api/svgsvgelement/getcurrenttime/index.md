---
title: "SVGSVGElement: getCurrentTime() method"
short-title: getCurrentTime()
slug: Web/API/SVGSVGElement/getCurrentTime
page-type: web-api-instance-method
browser-compat: api.SVGSVGElement.getCurrentTime
---

{{APIRef("SVG")}}

The `getCurrentTime()` method of the {{domxref("SVGSVGElement")}} interface returns the current time in seconds relative to the start time for the current SVG document fragment.

If `getCurrentTime()` is called before the document timeline has begun (for example, by script running in a {{SVGElement("script")}} element before the document's `SVGLoad` event is dispatched), then `0` is returned.

## Syntax

```js-nolint
getCurrentTime()
```

### Parameters

None.

### Return value

A float.

## Examples

### Getting the Current Time

```html
<svg
  id="exampleSVG"
  width="200"
  height="200"
  xmlns="http://www.w3.org/2000/svg">
  <circle id="circle1" cx="100" cy="100" r="50" fill="blue" />
</svg>
<button id="getTimeButton">Get Current Time</button>
<p id="currentTimeDisplay"></p>
```

```js
const svgElement = document.getElementById("exampleSVG");
const getTimeButton = document.getElementById("getTimeButton");
const currentTimeDisplay = document.getElementById("currentTimeDisplay");

getTimeButton.addEventListener("click", () => {
  const currentTime = svgElement.getCurrentTime();
  currentTimeDisplay.textContent = `Current time in the SVG: ${currentTime} seconds`;
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

---
title: "SVGSVGElement: setCurrentTime() method"
short-title: setCurrentTime()
slug: Web/API/SVGSVGElement/setCurrentTime
page-type: web-api-instance-method
browser-compat: api.SVGSVGElement.setCurrentTime
---

{{APIRef("SVG")}}

The `setCurrentTime()` method of the {{domxref("SVGSVGElement")}} interface adjusts the clock for this SVG document fragment, establishing a new current time.

If `setCurrentTime()` is called before the document timeline has begun (for example, by script running in a {{SVGElement("script")}} element before the document's `SVGLoad` event is dispatched), then the value of seconds in the last invocation of the method gives the time that the document will seek to once the document timeline has begun.

## Syntax

```js-nolint
setCurrentTime(time)
```

### Parameters

- `time`
  - : A float representing the time in seconds to set the current time.

### Return value

None.

## Examples

### Setting the Current Time

```html
<svg
  id="exampleSVG"
  width="200"
  height="200"
  xmlns="http://www.w3.org/2000/svg">
  <circle id="circle1" cx="100" cy="100" r="50" fill="blue" />
</svg>
<button id="setTimeButton">Set Current Time</button>
<p id="currentTimeDisplay"></p>
```

```js
const svgElement = document.getElementById("exampleSVG");
const setTimeButton = document.getElementById("setTimeButton");
const currentTimeDisplay = document.getElementById("currentTimeDisplay");

setTimeButton.addEventListener("click", () => {
  // Setting the time to 5 seconds
  svgElement.setCurrentTime(5);
  const currentTime = svgElement.getCurrentTime();
  currentTimeDisplay.textContent = `Current time in the SVG: ${currentTime} seconds`;
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

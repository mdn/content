---
title: "SVGSVGElement: animationsPaused() method"
short-title: animationsPaused()
slug: Web/API/SVGSVGElement/animationsPaused
page-type: web-api-instance-method
browser-compat: api.SVGSVGElement.animationsPaused
---

{{APIRef("SVG")}}

The `animationsPaused()` method of the {{domxref("SVGSVGElement")}} interface checks whether the animations in the SVG document fragment are currently paused.

## Syntax

```js-nolint
animationsPaused()
```

### Parameters

None.

### Return value

A boolean. `true` if this SVG document fragment is in a paused state.

## Examples

### Checking if Animations are Paused

```html
<svg id="exampleSVG" width="200" height="100">
  <circle cx="50" cy="50" r="30" fill="blue">
    <animate
      attributeName="cx"
      from="50"
      to="150"
      dur="2s"
      repeatCount="indefinite" />
  </circle>
</svg>

<button id="pauseBtn">Pause/Resume Animations</button>
<pre id="status"></pre>
```

```js
const svgElement = document.getElementById("exampleSVG");
const pauseButton = document.getElementById("pauseBtn");
const statusDisplay = document.getElementById("status");

function updateStatus() {
  const isPaused = svgElement.animationsPaused();
  statusDisplay.textContent = `Animations paused: ${isPaused}`;
}

pauseButton.addEventListener("click", () => {
  if (svgElement.animationsPaused()) {
    svgElement.unpauseAnimations();
  } else {
    svgElement.pauseAnimations();
  }
  updateStatus();
});

// Initialize the status display
updateStatus();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGSVGElement.pauseAnimations()")}}
- {{domxref("SVGSVGElement.unpauseAnimations()")}}

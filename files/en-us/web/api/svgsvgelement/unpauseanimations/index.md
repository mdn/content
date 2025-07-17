---
title: "SVGSVGElement: unpauseAnimations() method"
short-title: unpauseAnimations()
slug: Web/API/SVGSVGElement/unpauseAnimations
page-type: web-api-instance-method
browser-compat: api.SVGSVGElement.unpauseAnimations
---

{{APIRef("SVG")}}

The `unpauseAnimations()` method of the {{domxref("SVGSVGElement")}} interface resumes (i.e., unpauses) currently running animations that are defined within the SVG document fragment, causing the animation clock to continue from the time at which it was suspended.

## Syntax

```js-nolint
unpauseAnimations()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

## Examples

### Unpausing Animations

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

<button id="pauseBtn">Pause Animations</button>
<button id="resumeBtn">Resume Animations</button>
<pre id="status"></pre>
```

```js
const svgElement = document.getElementById("exampleSVG");
const pauseButton = document.getElementById("pauseBtn");
const resumeButton = document.getElementById("resumeBtn");
const statusDisplay = document.getElementById("status");

pauseButton.addEventListener("click", () => {
  svgElement.pauseAnimations();
  statusDisplay.textContent = "Animations paused.";
});

resumeButton.addEventListener("click", () => {
  svgElement.unpauseAnimations();
  statusDisplay.textContent = "Animations resumed.";
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGSVGElement.pauseAnimations()")}}

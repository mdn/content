---
title: "SVGSVGElement: pauseAnimations() method"
short-title: pauseAnimations()
slug: Web/API/SVGSVGElement/pauseAnimations
page-type: web-api-instance-method
browser-compat: api.SVGSVGElement.pauseAnimations
---

{{APIRef("SVG")}}

The `pauseAnimations()` method of the {{domxref("SVGSVGElement")}} interface suspends (i.e., pauses) all currently running animations that are defined within the SVG document fragment corresponding to this {{SVGElement("svg")}} element, causing the animation clock corresponding to this document fragment to stand still until it is unpaused.

## Syntax

```js-nolint
pauseAnimations()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

## Examples

### Pausing Animations

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
<pre id="status"></pre>
```

```js
const svgElement = document.getElementById("exampleSVG");
const pauseButton = document.getElementById("pauseBtn");
const statusDisplay = document.getElementById("status");

pauseButton.addEventListener("click", () => {
  svgElement.pauseAnimations();
  statusDisplay.textContent = "Animations paused.";
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGSVGElement.unpauseAnimations()")}}

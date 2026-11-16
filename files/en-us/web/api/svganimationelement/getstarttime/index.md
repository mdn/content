---
title: "SVGAnimationElement: getStartTime() method"
short-title: getStartTime()
slug: Web/API/SVGAnimationElement/getStartTime
page-type: web-api-instance-method
browser-compat: api.SVGAnimationElement.getStartTime
---

{{APIRef("SVG")}}

The {{domxref("SVGAnimationElement")}} method `getStartTime()` returns a float representing the start time, in seconds, for this animation element's current interval, if it exists, regardless of whether the interval has begun yet.

The start time returned by `getStartTime()` is measured in seconds relative to the time container's time zero.

Time zero refers to the moment when the time container begins its timeline. It acts as the starting reference point for all animations within that container.

A time container is an element or context that defines a local timeline for one or more animations. Animations inside the time container are measured relative to its timeline. If a time container is delayed, paused, or manipulated, all animations within it adjust accordingly.

This property reflects the {{SVGAttr("begin")}} attribute of the {{SVGElement("animate")}}, {{SVGElement("animateMotion")}} or {{SVGElement("animateTransform")}} element.

## Syntax

```js-nolint
getStartTime()
```

### Parameters

None ({{jsxref('undefined')}}).

### Return value

A float.

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the `SVGAnimationElement` has no current interval. This happens when the animation element's {{SVGAttr("begin")}} time has not been reached or defined, thus the `getStartTime()` method cannot determine a valid start time. An example can be when the animation is set to start at `begin="click"`, but the user has not yet clicked to trigger it.

## Examples

This example demonstrates how `begin="3s"` attribute makes the animation start 3 seconds after the time container's timeline begins.

```html
<svg width="200" height="200" viewBox="0 0 200 200">
  <circle cx="50" cy="50" r="20" fill="rebeccapurple">
    <animate attributeName="cx" from="50" to="150" dur="5s" begin="3s" />
  </circle>
</svg>
```

```js
const animationElement = document.querySelector("animate");

const startTime = animationElement.getStartTime();
console.log(
  `The animation starts at: ${startTime} seconds relative to the time container's timeline`,
); // Output: 3
```

The `getStartTime()` method returns `3.0` because that is the time relative to the time container's time zero.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

---
title: "SVGAnimationElement: getCurrentTime() method"
short-title: getCurrentTime()
slug: Web/API/SVGAnimationElement/getCurrentTime
page-type: web-api-instance-method
browser-compat: api.SVGAnimationElement.getCurrentTime
---

{{APIRef("SVG")}}

The {{domxref("SVGAnimationElement")}} method `getCurrentTime()` returns a float representing the current time in seconds relative to time zero for the given time container.

Time zero refers to the moment when the time container begins its timeline. It acts as the starting reference point for all animations within that container.

A time container is an element or context that defines a local timeline for one or more animations. Animations inside the time container are measured relative to its timeline. If a time container is delayed, paused, or manipulated, all animations within it adjust accordingly.

## Syntax

```js-nolint
getCurrentTime()
```

### Parameters

None ({{jsxref('undefined')}}).

### Return value

A float.

## Examples

This example demonstrates how the `getCurrentTime()` method retrieves the time elapsed since the time container's time zero.

```html
<svg width="200" height="200" viewBox="0 0 200 200">
  <circle cx="50" cy="50" r="20" fill="rebeccapurple">
    <animate
      attributeName="cx"
      from="50"
      to="150"
      dur="4s"
      repeatCount="indefinite" />
  </circle>
</svg>
```

```js
const animationElement = document.querySelector("animate");

setInterval(() => {
  const currentTime = animationElement.getCurrentTime();
  console.log(
    `Current time relative to the time container: ${currentTime} seconds`,
  );
}, 1000);
```

The animation starts at `time zero = 0` and runs indefinitely, and the `getCurrentTime()` value increments continuously within the context of the time container.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

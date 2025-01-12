---
title: "SVGAnimationElement: getStartTime() method"
short-title: getStartTime()
slug: Web/API/SVGAnimationElement/getStartTime
page-type: web-api-instance-method
browser-compat: api.SVGAnimationElement.getStartTime
---

{{APIRef("SVG")}}

The {{domxref("SVGAnimationElement")}} method `getStartTime()` returns a float representing the start time, in seconds, for this animation element's current interval, if it exists, regardless of whether the interval has begun yet.

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
  - : Thrown if the `SVGAnimationElement` has no current interval.

## Examples

This example demonstrates how to use `getStartTime()` to retrieve the start time of an animation element:

```js
const animationElement = document.querySelector("animate");
const startTime = animationElement.getStartTime();
console.log(`The animation starts at: ${startTime} seconds`);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

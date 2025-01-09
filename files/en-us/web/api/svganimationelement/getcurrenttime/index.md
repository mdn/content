---
title: "SVGAnimationElement: getCurrentTime() method"
short-title: getCurrentTime()
slug: Web/API/SVGAnimationElement/getCurrentTime
page-type: web-api-instance-method
browser-compat: api.SVGAnimationElement.getCurrentTime
---

{{APIRef("SVG")}}

The {{domxref("SVGAnimationElement")}} method `getCurrentTime()` returns a float representing the current time in seconds relative to time zero for the given time container.

## Syntax

```js-nolint
getCurrentTime()
```

### Parameters

None ({{jsxref('undefined')}}).

### Return value

A float.

## Examples

This example demonstrates how to use `getCurrentTime()` to retrieve the current time of an animation element:

```js
const animationElement = document.querySelector("animate");
const currentTime = animationElement.getCurrentTime();
console.log(`The current time is: ${currentTime} seconds`);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

---
title: "SVGAnimationElement: getSimpleDuration() method"
short-title: getSimpleDuration()
slug: Web/API/SVGAnimationElement/getSimpleDuration
page-type: web-api-instance-method
browser-compat: api.SVGAnimationElement.getSimpleDuration
---

{{APIRef("SVG")}}

The {{domxref("SVGAnimationElement")}} method `getSimpleDuration()` returns a float representing the number of seconds for the simple duration for this animation.

## Syntax

```js-nolint
getSimpleDuration()
```

### Parameters

None ({{jsxref('undefined')}}).

### Return value

A float.

### Exceptions

- `NotSupportedError` {{domxref("DOMException")}}
  - : Thrown if the `SVGAnimationElement`'s simple duration is undefined (e.g., the end time is indefinite).

## Examples

This example demonstrates how to use `getSimpleDuration()` to retrieve the simple duration of an animation element:

```js
const animationElement = document.querySelector("animate");
const duration = animationElement.getSimpleDuration();
console.log(`The simple duration is: ${duration} seconds`);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

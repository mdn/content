---
title: "SVGAnimationElement: beginElementAt() method"
short-title: beginElementAt()
slug: Web/API/SVGAnimationElement/beginElementAt
page-type: web-api-instance-method
browser-compat: api.SVGAnimationElement.beginElementAt
---

{{APIRef("SVG")}}

The {{domxref("SVGAnimationElement")}} method `beginElementAt()` creates a begin instance time for the current time plus the specified offset. The new instance time is added to the begin instance times list.

## Syntax

```js-nolint
beginElementAt(offset)
```

### Parameters

- `offset`
  - : A float representing the offset from the current document time, in seconds, at which to begin the element.

### Return value

None

## Examples

This example demonstrates how to use `beginElementAt()` to start an animation element after a delay of 2 seconds:

```js
const animationElement = document.querySelector("animate");
animationElement.beginElementAt(2);
console.log("Animation will start after a 2-second delay.");
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

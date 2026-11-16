---
title: "SVGAnimationElement: endElementAt() method"
short-title: endElementAt()
slug: Web/API/SVGAnimationElement/endElementAt
page-type: web-api-instance-method
browser-compat: api.SVGAnimationElement.endElementAt
---

{{APIRef("SVG")}}

The {{domxref("SVGAnimationElement")}} method `endElementAt()` creates an end instance time for the current time plus the specified offset. The new instance time is added to the end instance times list.

## Syntax

```js-nolint
endElementAt(offset)
```

### Parameters

- `offset`
  - : A float representing the offset from the current document time, in seconds, at which to end the element.

### Return value

None

## Examples

This example demonstrates how to use `endElementAt()` to end an animation element after a delay of 2 seconds:

```js
const animationElement = document.querySelector("animate");
animationElement.endElementAt(2);
console.log("Animation will end after a 2-second delay.");
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

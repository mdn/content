---
title: "SVGAnimationElement: endElement() method"
short-title: endElement()
slug: Web/API/SVGAnimationElement/endElement
page-type: web-api-instance-method
browser-compat: api.SVGAnimationElement.endElement
---

{{APIRef("SVG")}}

The {{domxref("SVGAnimationElement")}} method `endElement()` creates an end instance time for the current time. The new instance time is added to the end instance times list. The behavior of this method is equivalent to `endElementAt(0)`.

## Syntax

```js-nolint
endElement()
```

### Parameters

None.

### Return value

None

## Examples

This example demonstrates how to use `endElement()` to end an animation element:

```js
const animationElement = document.querySelector("animate");
animationElement.endElement();
console.log("Animation has ended.");
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

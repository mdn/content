---
title: "SVGAnimationElement: beginElement() method"
short-title: beginElement()
slug: Web/API/SVGAnimationElement/beginElement
page-type: web-api-instance-method
browser-compat: api.SVGAnimationElement.beginElement
---

{{APIRef("SVG")}}

The {{domxref("SVGAnimationElement")}} method `beginElement()` creates a begin instance time for the current time. The new instance time is added to the begin instance times list. The behavior of this method is equivalent to `beginElementAt(0)`.

## Syntax

```js-nolint
beginElement()
```

### Parameters

None.

### Return value

None

## Examples

This example demonstrates how to use `beginElement()` to start an animation element:

```js
const animationElement = document.querySelector("animate");
animationElement.beginElement();
console.log("Animation has started.");
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

---
title: "Navigator: maxTouchPoints property"
short-title: maxTouchPoints
slug: Web/API/Navigator/maxTouchPoints
page-type: web-api-instance-property
browser-compat: api.Navigator.maxTouchPoints
---

{{APIRef("HTML DOM")}}

The **`maxTouchPoints`** read-only property of the
{{domxref("Navigator")}} interface returns the maximum number of simultaneous touch
contact points that are supported by the current device.

## Value

A number.

"Classic" desktop computers (Mac, Windows and Linux) return 0 while smartphones (Android and iOS) typically return a value of 5.

## Example

```js
if (navigator.maxTouchPoints > 1) {
  // Device supports tracking at least 2 touch points; offer complex
  // interaction gestures such as swiping with two/three fingers
} else {
  // Device only has 1 touch point or is not a touch screen.
  // Offer basic gestures such as dragging and clicking
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

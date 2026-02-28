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
if (navigator.maxTouchPoints > 0) {
  // The device has a touch screen
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

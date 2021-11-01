---
title: Navigator.maxTouchPoints
slug: Web/API/Navigator/maxTouchPoints
tags:
  - API
  - HTML DOM
  - Navigator
  - Property
  - Reference
browser-compat: api.Navigator.maxTouchPoints
---
{{APIRef("HTML DOM")}}

The **`maxTouchPoints`** read-only property of the
{{domxref("Navigator")}} interface returns the maximum number of simultaneous touch
contact points are supported by the current device.

## Syntax

```js
touchPoints = navigator.maxTouchPoints;
```

## Example

```js
if (navigator.maxTouchPoints > 1) {
  // browser supports multi-touch
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

---
title: ScreenOrientation.lock()
slug: Web/API/ScreenOrientation/lock
tags:
  - API
  - Orientation
  - Property
  - Reference
  - Screen Orientation API
  - ScreenOrientation
  - lock
browser-compat: api.ScreenOrientation.lock
---
{{APIRef("Screen Orientation")}}

The **`lock()`** property of the
{{domxref("ScreenOrientation")}} interface locks the orientation of the containing
document to its default orientation.

## Syntax

```js
screen.orientation.lock(orientation)
```

### Parameters

- orientation
  - : An orientation lock type. One of the following:

<!---->

- `"any"`
- `"natural"`
- `"landscape"`
- `"portrait"`
- `"portrait-primary"`
- `"portrait-secondary"`
- `"landscape-primary"`
- `"landscape-secondary"`

### Return value

A {{jsxref("Promise")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

---
title: BarProp.visible
slug: Web/API/BarProp/visible
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - visible
  - BarProp
browser-compat: api.BarProp.visible
---
{{APIRef("DOM")}}

The **`visible`** read-only property of the {{domxref("BarProp")}} interface returns `true` if the user interface element it represents is visible.

## Value

A {{jsxref("Boolean")}}, which is true if the top-level window is opened by
{{domxref("window.open")}} with the {{domxref("window.open", "requesting a popup window", "popup_feature", 1)}}.

> **Note:** Historically this represented whether the interface element used is visible
> or not. But for privacy reasons, this no longer represents the actual visibility of each
> interface element.

## Examples

The following example prints `true` to the console if the window is not a popup.

```js
console.log(window.locationbar.visible);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

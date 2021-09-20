---
title: BarProp.visible
slug: Web/API/BarProp/visible
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

## Syntax

```js
let visible = BarProp.visible;
```

### Value

A {{jsxref("Boolean")}}, which is true if the bar represented by the used interface element is visible.

## Examples

The following example prints `true` to the console if the location bar is visible, `false` if it is not.

```js
console.log(window.locationbar.visible);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

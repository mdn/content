---
title: AbstractRange.collapsed
slug: Web/API/AbstractRange/collapsed
tags:
  - API
  - AbstractRange
  - DOM
  - DOM API
  - Empty
  - Property
  - Range
  - Reference
  - collapsed
browser-compat: api.AbstractRange.collapsed
---
{{APIRef("DOM WHATWG")}}

The **`collapsed`** read-only property of the {{domxref("AbstractRange")}} interface returns `true` if the range's start position and end position are the same.

## Syntax

```js
var isCollapsed = range.collapsed
```

### Value

A boolean value which is `true` if the range is **collapsed**. A collapsed range is one in which the start and end positions are the same, resulting in a zero-character-long range.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

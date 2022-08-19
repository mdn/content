---
title: AbstractRange.collapsed
slug: Web/API/AbstractRange/collapsed
page-type: web-api-instance-property
tags:
  - Property
  - Reference
  - Read-only
browser-compat: api.AbstractRange.collapsed
---
{{APIRef("DOM")}}

The read-only **`collapsed`** property of the {{domxref("AbstractRange")}} interface returns `true` if the range's start position and end position are the same.

## Value

A boolean value which is `true` if the range is _collapsed_. A collapsed range is one in which the start and end positions are the same, resulting in a zero-character-long range.

## Example

```js
let isCollapsed = range.collapsed;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

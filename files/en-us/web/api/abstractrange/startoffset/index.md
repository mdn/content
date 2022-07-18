---
title: AbstractRange.startOffset
slug: Web/API/AbstractRange/startOffset
page-type: web-api-instance-property
tags:
  - Property
  - Read-only
  - Reference
browser-compat: api.AbstractRange.startOffset
---
{{APIRef("DOM")}}

The read-only **`startOffset`** property of the {{domxref("AbstractRange")}} interface returns the offset into the start node of the range's start position.

## Value

An integer value indicating the number of characters into the {{domxref("Node")}} indicated by {{domxref("AbstractRange.startContainer", "startContainer")}} at which the first character of the range is located.

## Example

```js
let startOffset = range.startOffset;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

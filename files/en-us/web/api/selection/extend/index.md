---
title: Selection.extend()
slug: Web/API/Selection/extend
page-type: web-api-instance-method
tags:
  - API
  - HTML Editing
  - Method
  - Reference
  - Selection
browser-compat: api.Selection.extend
---
{{ ApiRef("DOM") }}

The **`Selection.extend()`** method moves the focus of the
selection to a specified point. The anchor of the selection does not move. The selection
will be from the anchor to the new focus, regardless of direction.

## Syntax

```js
extend(node)
extend(node, offset)
```

### Parameters

- `node`
  - : The node within which the focus will be moved.
- `offset` {{optional_inline}}
  - : The offset position within `node` where the focus will be moved to. If
    not specified, the default value `0` is used.

### Return value

None ({{jsxref("undefined")}}).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Selection")}}, the interface it belongs to.

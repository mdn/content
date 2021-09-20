---
title: Range.setEndAfter()
slug: Web/API/Range/setEndAfter
tags:
  - API
  - DOM
  - Method
  - Range
browser-compat: api.Range.setEndAfter
---
{{ApiRef("DOM")}}

The **`Range.setEndAfter()`** method sets the end position of a
{{domxref("Range")}} relative to another {{domxref("Node")}}. The parent
`Node` of end of the `Range` will be the same as that for the
`referenceNode`.

## Syntax

```js
range.setEndAfter(referenceNode);
```

### Parameters

- `referenceNode`
  - : The {{domxref("Node")}} to end the {{domxref("Range")}} after.

## Example

```js
var range = document.createRange();
var referenceNode = document.getElementsByTagName('div').item(0);

range.setEndAfter(referenceNode);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [The DOM interfaces index](/en-US/docs/Web/API/Document_Object_Model)

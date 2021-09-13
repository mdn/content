---
title: Range.setStartAfter()
slug: Web/API/Range/setStartAfter
tags:
  - API
  - DOM
  - Method
  - Range
browser-compat: api.Range.setStartAfter
---
{{ApiRef("DOM")}}

The **`Range.setStartAfter()`** method sets the start position
of a {{domxref("Range")}} relative to a {{domxref("Node")}}. The parent
{{domxref("Node")}} of the start of the {{domxref("Range")}} will be the same as that
for the `referenceNode`.

## Syntax

```js
range.setStartAfter(referenceNode);
```

### Parameters

- _referenceNode_
  - : The {{domxref("Node")}} to start the {{domxref("Range")}} after.

## Example

```js
var range = document.createRange();
var referenceNode = document.getElementsByTagName("div").item(0);

range.setStartAfter(referenceNode);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [The DOM interfaces index](/en-US/docs/Web/API/Document_Object_Model)

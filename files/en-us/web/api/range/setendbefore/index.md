---
title: Range.setEndBefore()
slug: Web/API/Range/setEndBefore
tags:
  - API
  - DOM
  - Method
  - Range
browser-compat: api.Range.setEndBefore
---
{{ApiRef("DOM")}}

The **`Range.setEndBefore()`** method sets the end position of
a `Range` relative to another {{domxref("Node")}}. The parent
`Node` of end of the `Range` will be the same as that for the
`referenceNode`.

## Syntax

```js
range.setEndBefore(referenceNode);
```

### Parameters

- _referenceNode_
  - : The {{domxref("Node")}} to end the `Range` before.

## Example

```js
var range = document.createRange();
var referenceNode = document.getElementsByTagName("div").item(0);

range.setEndBefore(referenceNode);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [The DOM interfaces index](/en-US/docs/Web/API/Document_Object_Model)

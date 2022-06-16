---
title: Range.selectNode()
slug: Web/API/Range/selectNode
page-type: web-api-instance-method
tags:
  - API
  - DOM
  - Method
  - Range
browser-compat: api.Range.selectNode
---
{{ApiRef("DOM")}}

The **`Range.selectNode()`** method sets the
{{domxref("Range")}} to contain the {{domxref("Node")}} and its contents. The parent
{{domxref("Node")}} of the start and end of the {{domxref("Range")}} will be the same as
the parent of the _referenceNode_.

## Syntax

```js
selectNode(referenceNode)
```

### Parameters

- `referenceNode`
  - : The {{domxref("Node")}} to select within a {{domxref("Range")}}.

### Return value

None ({{jsxref("undefined")}}).

## Examples

```js
let range = document.createRange();
let referenceNode = document.getElementsByTagName('div').item(0);

range.selectNode(referenceNode);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [The DOM interfaces index](/en-US/docs/Web/API/Document_Object_Model)

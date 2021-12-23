---
title: Range.intersectsNode()
slug: Web/API/Range/intersectsNode
tags:
  - API
  - DOM
  - Experimental
  - Method
  - Range
  - Reference
browser-compat: api.Range.intersectsNode
---
{{ApiRef("DOM")}} {{SeeCompatTable}}

The **`Range.intersectsNode()`** method returns a boolean
indicating whether the given {{domxref("Node")}} intersects the {{domxref("Range")}}.

## Syntax

```js
bool = range.intersectsNode( referenceNode )
```

### Parameters

- _referenceNode_
  - : The {{domxref("Node")}} to compare with the {{domxref("Range")}}.

## Example

```js
var range = document.createRange();

range.selectNode(document.getElementsByTagName("div").item(0));
var bool = range.intersectsNode(document.getElementsByTagName("p").item(0));
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [The DOM interfaces index](/en-US/docs/Web/API/Document_Object_Model)

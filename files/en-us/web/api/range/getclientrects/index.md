---
title: Range.getClientRects()
slug: Web/API/Range/getClientRects
page-type: web-api-instance-method
tags:
  - API
  - CSSOM View
  - Method
  - Range
  - Reference
browser-compat: api.Range.getClientRects
---
{{ApiRef("DOM")}}

The **`Range.getClientRects()`** method returns a list of {{
  domxref("DOMRect") }} objects representing the area of the screen occupied by the [range](/en-US/docs/Web/API/Range). This is created by aggregating the results of calls to
{{ domxref("Element.getClientRects()") }} for all the elements in the range.

## Syntax

```js
getClientRects()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

## Examples

```js
range = document.createRange();
range.selectNode(document.getElementsByTagName("div").item(0));
rectList = range.getClientRects();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Range")}}

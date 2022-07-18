---
title: Range.setStartBefore()
slug: Web/API/Range/setStartBefore
page-type: web-api-instance-method
tags:
  - API
  - DOM
  - Method
  - Range
browser-compat: api.Range.setStartBefore
---
{{ApiRef("DOM")}}

The **`Range.setStartBefore()`** method sets the start position
of a {{domxref("Range")}} relative to another {{domxref("Node")}}. The parent
{{domxref("Node")}} of the start of the {{domxref("Range")}} will be the same as that
for the `referenceNode`.

## Syntax

```js
setStartBefore(referenceNode)
```

### Parameters

- `referenceNode`
  - : The {{domxref("Node")}} before which the {{domxref("Range")}} should start.

### Return value

None ({{jsxref("undefined")}}).

## Examples

```js
const range = document.createRange();
const referenceNode = document.getElementsByTagName("div").item(0);

range.setStartBefore(referenceNode);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [The DOM interfaces index](/en-US/docs/Web/API/Document_Object_Model)

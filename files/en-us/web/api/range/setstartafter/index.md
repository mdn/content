---
title: "Range: setStartAfter() method"
short-title: setStartAfter()
slug: Web/API/Range/setStartAfter
page-type: web-api-instance-method
browser-compat: api.Range.setStartAfter
---

{{ApiRef("DOM")}}

The **`Range.setStartAfter()`** method sets the start position
of a {{domxref("Range")}} relative to a {{domxref("Node")}}. The parent
{{domxref("Node")}} of the start of the {{domxref("Range")}} will be the same as that
for the `referenceNode`.

## Syntax

```js-nolint
setStartAfter(referenceNode)
```

### Parameters

- `referenceNode`
  - : The {{domxref("Node")}} to start the {{domxref("Range")}} after.

### Return value

None ({{jsxref("undefined")}}).

## Examples

```js
const range = document.createRange();
const referenceNode = document.getElementsByTagName("div").item(0);

range.setStartAfter(referenceNode);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [The DOM interfaces index](/en-US/docs/Web/API/Document_Object_Model)

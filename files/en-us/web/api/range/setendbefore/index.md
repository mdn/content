---
title: "Range: setEndBefore() method"
short-title: setEndBefore()
slug: Web/API/Range/setEndBefore
page-type: web-api-instance-method
browser-compat: api.Range.setEndBefore
---

{{ApiRef("DOM")}}

The **`Range.setEndBefore()`** method sets the end position of
a `Range` relative to another {{domxref("Node")}}. The parent
`Node` of end of the `Range` will be the same as that for the
`referenceNode`.

## Syntax

```js-nolint
setEndBefore(referenceNode)
```

### Parameters

- `referenceNode`
  - : The {{domxref("Node")}} to end the `Range` before.

### Return value

None ({{jsxref("undefined")}}).

## Examples

```js
const range = document.createRange();
const referenceNode = document.getElementsByTagName("div").item(0);

range.setEndBefore(referenceNode);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [The DOM interfaces index](/en-US/docs/Web/API/Document_Object_Model)

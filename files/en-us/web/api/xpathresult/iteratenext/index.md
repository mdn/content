---
title: "XPathResult: iterateNext() method"
short-title: iterateNext()
slug: Web/API/XPathResult/iterateNext
page-type: web-api-instance-method
browser-compat: api.XPathResult.iterateNext
---

{{APIRef("DOM XPath")}}

The **`iterateNext()`** method of the
{{domxref("XPathResult")}} interface iterates over a node set result and returns the
next node from it or `null` if there are no more nodes.

## Syntax

```js-nolint
iterateNext()
```

### Parameters

None.

### Return value

The next {{domxref("Node")}} within the node set of the `XPathResult`.

### Exceptions

#### TYPE_ERR

In case {{domxref("XPathResult.resultType")}} is not
`UNORDERED_NODE_ITERATOR_TYPE` or `ORDERED_NODE_ITERATOR_TYPE`, an
{{domxref("XPathException")}} of type `TYPE_ERR` is thrown.

#### INVALID_STATE_ERR

If the document is mutated since the result was returned, an
{{domxref("XPathException")}} of type `INVALID_STATE_ERR` is thrown.

## Examples

The following example shows the use of the `iterateNext()` method.

### HTML

```html
<div>XPath example</div>
<div>Tag names of the matched nodes: <output></output></div>
```

### JavaScript

```js
const xpath = "//div";
const result = document.evaluate(
  xpath,
  document,
  null,
  XPathResult.ANY_TYPE,
  null,
);
let node = null;
const tagNames = [];
while ((node = result.iterateNext())) {
  tagNames.push(node.localName);
}
document.querySelector("output").textContent = tagNames.join(", ");
```

### Result

{{EmbedLiveSample('Examples')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

---
title: XPathResult.snapshotItem()
slug: Web/API/XPathResult/snapshotItem
tags:
  - API
  - DOM XPath API
  - Method
  - Reference
  - XPath
  - XPathResult
browser-compat: api.XPathResult.snapshotItem
---
{{APIRef("DOM XPath")}}

The **`snapshotItem()`** method of the
{{domxref("XPathResult")}} interface returns an item of the snapshot collection or
`null` in case the index is not within the range of nodes. Unlike the
iterator result, the snapshot does not become invalid, but may not correspond to the
current document if it is mutated.

## Syntax

```js
var node = result.snapshotItem(i);
```

### Return value

The {{domxref("Node")}} at the given index within the node set of the
`XPathResult`.

### Exceptions

#### TYPE_ERR

In case {{domxref("XPathResult.resultType")}} is not
`UNORDERED_NODE_SNAPSHOT_TYPE` or `ORDERED_NODE_SNAPSHOT_TYPE`, an
{{domxref("XPathException")}} of type `TYPE_ERR` is thrown.

## Example

The following example shows the use of the `snapshotItem()` method.

### HTML

```html
<div>XPath example</div>
<div>Tag names of the matched nodes: <output></output></div>
```

### JavaScript

```js
var xpath = "//div";
var result = document.evaluate(xpath, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
var node = null;
var tagNames = [];
for(var i = 0; i < result.snapshotLength; i++) {
  var node = result.snapshotItem(i);
  tagNames.push(node.localName);
}
document.querySelector("output").textContent = tagNames.join(", ");
```

### Result

{{EmbedLiveSample('Example', 400, 70)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

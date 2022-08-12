---
title: XPathResult.snapshotLength
slug: Web/API/XPathResult/snapshotLength
page-type: web-api-instance-property
tags:
  - API
  - DOM XPath API
  - Property
  - Reference
  - XPath
  - XPathResult
browser-compat: api.XPathResult.snapshotLength
---
{{APIRef("DOM XPath")}}

The read-only **`snapshotLength`** property of the
{{domxref("XPathResult")}} interface represents the number of nodes in the result
snapshot.

{{AvailableInWorkers}}

## Value

An integer value representing the number of nodes in the result snapshot.

### Exceptions

#### TYPE_ERR

In case {{domxref("XPathResult.resultType")}} is not
`UNORDERED_NODE_SNAPSHOT_TYPE` or `ORDERED_NODE_SNAPSHOT_TYPE`, an
{{domxref("XPathException")}} of type `TYPE_ERR` is thrown.

## Examples

The following example shows the use of the `snapshotLength` property.

### HTML

```html
<div>XPath example</div>
<div>Number of matched nodes: <output></output></div>
```

### JavaScript

```js
const xpath = "//div";
const result = document.evaluate(xpath, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
document.querySelector("output").textContent = result.snapshotLength;
```

### Result

{{EmbedLiveSample('Examples', 400, 70)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

---
title: XPathResult.singleNodeValue
slug: Web/API/XPathResult/singleNodeValue
page-type: web-api-instance-property
tags:
  - API
  - DOM XPath API
  - Property
  - Reference
  - XPath
  - XPathResult
browser-compat: api.XPathResult.singleNodeValue
---
{{APIRef("DOM XPath")}}

The read-only **`singleNodeValue`** property of the
{{domxref("XPathResult")}} interface returns a {{domxref("Node")}} value or
`null` in case no node was matched of a result with
{{domxref("XPathResult.resultType")}} being `ANY_UNORDERED_NODE_TYPE` or
`FIRST_ORDERED_NODE_TYPE`.

## Value

The return value is the {{domxref("Node")}} value of the `XPathResult`
returned by {{domxref("Document.evaluate()")}}.

### Exceptions

#### TYPE_ERR

In case {{domxref("XPathResult.resultType")}} is not
`ANY_UNORDERED_NODE_TYPE` or `FIRST_ORDERED_NODE_TYPE`, an
{{domxref("XPathException")}} of type `TYPE_ERR` is thrown.

## Examples

The following example shows the use of the `singleNodeValue` property.

### HTML

```html
<div>XPath example</div>
<div>Tag name of the element having the text content 'XPath example': <output></output></div>
```

### JavaScript

```js
const xpath = "//*[text()='XPath example']";
const result = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
document.querySelector("output").textContent = result.singleNodeValue.localName;
```

### Result

{{EmbedLiveSample('Examples', 400, 70)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

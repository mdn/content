---
title: XPathResult.booleanValue
slug: Web/API/XPathResult/booleanValue
tags:
  - API
  - DOM XPath API
  - Property
  - Reference
  - XPath
  - XPathResult
browser-compat: api.XPathResult.booleanValue
---
{{APIRef("DOM XPath")}}

The read-only **`booleanValue`** property of the
{{domxref("XPathResult")}} interface returns the boolean value of a result with
{{domxref("XPathResult.resultType")}} being `BOOLEAN_TYPE`.

{{AvailableInWorkers}}

## Value

The return value is the boolean value of the `XPathResult` returned by
{{domxref("Document.evaluate()")}}.

### Exceptions

#### TYPE_ERR

In case {{domxref("XPathResult.resultType")}} is not `BOOLEAN_TYPE`, an
{{domxref("XPathException")}} of type `TYPE_ERR` is thrown.

## Examples

The following example shows the use of the `booleanValue` property.

### HTML

```html
<div>XPath example</div>
<p>Text is 'XPath example': <output></output></p>
```

### JavaScript

```js
var xpath = "//div/text() = 'XPath example'";
var result = document.evaluate(xpath, document, null, XPathResult.BOOLEAN_TYPE, null);
document.querySelector("output").textContent = result.booleanValue;
```

### Result

{{EmbedLiveSample('Example', 400, 70)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

---
title: XPathResult.numberValue
slug: Web/API/XPathResult/numberValue
tags:
  - API
  - DOM XPath API
  - Property
  - Reference
  - XPath
  - XPathResult
browser-compat: api.XPathResult.numberValue
---
{{APIRef("DOM XPath")}}

The read-only **`numberValue`** property of the
{{domxref("XPathResult")}} interface returns the numeric value of a result with
{{domxref("XPathResult.resultType")}} being `NUMBER_TYPE`.

{{AvailableInWorkers}}

## Value

The return value is the numeric value of the `XPathResult` returned by
{{domxref("Document.evaluate()")}}.

### Exceptions

#### TYPE_ERR

In case {{domxref("XPathResult.resultType")}} is not `NUMBER_TYPE`, an
{{domxref("XPathException")}} of type `TYPE_ERR` is thrown.

## Examples

The following example shows the use of the `numberValue` property.

### HTML

```html
<div>XPath example</div>
<div>Number of &lt;div&gt;s: <output></output></div>
```

### JavaScript

```js
var xpath = "count(//div)";
var result = document.evaluate(xpath, document, null, XPathResult.NUMBER_TYPE, null);
document.querySelector("output").textContent = result.numberValue;
```

### Result

{{EmbedLiveSample('Example', 400, 70)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

---
title: XPathResult.stringValue
slug: Web/API/XPathResult/stringValue
tags:
  - API
  - DOM XPath API
  - Property
  - Reference
  - XPath
  - XPathResult
browser-compat: api.XPathResult.stringValue
---
{{APIRef("DOM XPath")}}

The read-only **`stringValue`** property of the
{{domxref("XPathResult")}} interface returns the string value of a result with
{{domxref("XPathResult.resultType")}} being `STRING_TYPE`.

{{AvailableInWorkers}}

## Syntax

```js
var value = result.stringValue;
```

### Return value

The return value is the string value of the `XPathResult` returned by
{{domxref("Document.evaluate()")}}.

### Exceptions

#### TYPE_ERR

In case {{domxref("XPathResult.resultType")}} is not `STRING_TYPE`, an
{{domxref("XPathException")}} of type `TYPE_ERR` is thrown.

## Example

The following example shows the use of the `stringValue` property.

### HTML

```html
<div>XPath example</div>
<div>Text content of the &lt;div&gt; above: <output></output></div>
```

### JavaScript

```js
var xpath = "//div/text()";
var result = document.evaluate(xpath, document, null, XPathResult.STRING_TYPE, null);
document.querySelector("output").textContent = result.stringValue;
```

### Result

{{EmbedLiveSample('Example', 400, 70)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

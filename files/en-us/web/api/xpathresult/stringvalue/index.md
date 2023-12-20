---
title: "XPathResult: stringValue property"
short-title: stringValue
slug: Web/API/XPathResult/stringValue
page-type: web-api-instance-property
browser-compat: api.XPathResult.stringValue
---

{{APIRef("DOM XPath")}}

The read-only **`stringValue`** property of the
{{domxref("XPathResult")}} interface returns the string value of a result with
{{domxref("XPathResult.resultType")}} being `STRING_TYPE`.

{{AvailableInWorkers}}

## Value

The return value is the string value of the `XPathResult` returned by
{{domxref("Document.evaluate()")}}.

### Exceptions

#### TYPE_ERR

In case {{domxref("XPathResult.resultType")}} is not `STRING_TYPE`, an
{{domxref("XPathException")}} of type `TYPE_ERR` is thrown.

## Examples

The following example shows the use of the `stringValue` property.

### HTML

```html
<div>XPath example</div>
<div>Text content of the &lt;div&gt; above: <output></output></div>
```

### JavaScript

```js
const xpath = "//div/text()";
const result = document.evaluate(
  xpath,
  document,
  null,
  XPathResult.STRING_TYPE,
  null,
);
document.querySelector("output").textContent = result.stringValue;
```

### Result

{{EmbedLiveSample('Examples', 400, 70)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

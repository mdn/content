---
title: "XSLTProcessor: importStylesheet() method"
short-title: importStylesheet()
slug: Web/API/XSLTProcessor/importStylesheet
page-type: web-api-instance-method
browser-compat: api.XSLTProcessor.importStylesheet
---

{{APIRef("XSLT")}}

The `importStylesheet()` method of the {{domxref("XSLTProcessor")}} interface imports an XSLT stylesheet for the processor.

## Syntax

```js-nolint
importStylesheet(style)
```

### Parameters

- `style`
  - : The {{DOMxRef("Node")}} to import. It can be an XML document (that is a {{domxref("Document")}} with {{domxref("Document.doctype", "doctype")}}`.`{{domxref("DocumentType.name", "name")}} of `"xml"`) containing an XSLT stylesheet or a [literal result element transform](https://www.w3.org/TR/xslt/#result-element-stylesheet), or an {{domxref("Element")}} representing an `<xsl:stylesheet>` or `<xsl:transform>`.

### Return value

None ({{jsxref("undefined")}}).

## Examples

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

---
title: Element.prefix
slug: Web/API/Element/prefix
page-type: web-api-instance-property
tags:
  - API
  - DOM
  - NeedsBrowserCompatibility
  - NeedsMobileBrowserCompatibility
  - Property
  - Reference
browser-compat: api.Element.prefix
---
{{APIRef("DOM")}}

The **`Element.prefix`** read-only property returns the
namespace prefix of the specified element, or `null` if no prefix is
specified.

## Value

A string.

## Examples

The following logs "x" to the console.

```xml
<x:div onclick="console.log(this.prefix)"/>
```

## Notes

This will only work when a namespace-aware parser is used, i.e. when a document is
served with an XML MIME type. This will not work for HTML documents.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Element.namespaceURI")}}
- {{domxref("Element.localName")}}
- {{domxref("Attr.prefix")}}

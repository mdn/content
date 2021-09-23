---
title: Attr.prefix
slug: Web/API/Attr/prefix
tags:
  - API
  - DOM
  - Property
  - Reference
browser-compat: api.Attr.prefix
---
{{APIRef("DOM")}}

The **`Attr.prefix`** read-only property returns the namespace
prefix of the specified attribute, or `null` if no prefix is specified.

## Syntax

```js
string = attribute.prefix
```

## Examples

The following logs "x" to the console.

```xml
<div x:id="example" onclick="console.log(this.attributes[0].prefix)"/>
```

## Notes

This will only work when a namespace-aware parser is used, i.e. when a document is
served with an XML MIME type. This will not work for HTML documents.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Attr.namespaceURI")}}
- {{domxref("Attr.localName")}}
- {{domxref("Element.prefix")}}

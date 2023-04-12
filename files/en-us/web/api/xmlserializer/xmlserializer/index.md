---
title: "XMLSerializer: XMLSerializer() constructor"
short-title: XMLSerializer()
slug: Web/API/XMLSerializer/XMLSerializer
page-type: web-api-constructor
browser-compat: api.XMLSerializer.XMLSerializer
---

{{APIRef('XMLSerializer')}}

The **`XMLSerializer()`** constructor creates a new {{domxref("XMLSerializer")}}.

## Syntax

```js-nolint
new XMLSerializer()
```

### Parameters

None.

### Return value

A new {{domxref("XMLSerializer")}} object.

## Examples

### Serializing XML into a string

This example serializes an entire document into a string containing XML.

```js
const s = new XMLSerializer();
const d = document;
const str = s.serializeToString(d);
saveXML(str);
```

This involves creating a new `XMLSerializer` object, then passing the {{domxref("Document")}} to be serialized into {{domxref("XMLSerializer.serializeToString", "serializeToString()")}}, which returns the XML equivalent of the document. `saveXML()` represents a function that would then save the serialized string.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

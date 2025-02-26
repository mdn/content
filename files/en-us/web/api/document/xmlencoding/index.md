---
title: "Document: xmlEncoding property"
short-title: xmlEncoding
slug: Web/API/Document/xmlEncoding
page-type: web-api-instance-property
status:
  - deprecated
browser-compat: api.Document.xmlEncoding
---

{{APIRef("DOM")}}{{deprecated_header}}

Returns the encoding as determined by the XML declaration. Should be `null` if unspecified or unknown.

> [!WARNING]
> Do not use this attribute; it has been removed from the DOM Level 4 specification and is no longer supported in Firefox 10.0.

Consider the following XML Declaration:

```xml
<?xml version="1.0" encoding="UTF-16"?>
```

Then, the result should be "UTF-16".

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

---
title: Document.contentType
slug: Web/API/Document/contentType
tags:
  - API
  - DOM
  - Document
  - MIME
  - Property
  - Read-only
  - Reference
browser-compat: api.Document.contentType
---
{{APIRef}}

The **`Document.contentType`** read-only property returns the
MIME type that the document is being rendered as. This may come from HTTP headers or
other sources of MIME information, and might be affected by automatic type conversions
performed by either the browser or extensions.

> **Note:** This property is unaffected by {{HTMLElement("meta")}}
> elements.

## Syntax

```js
contentType = document.contentType;
```

### Value

`contentType` is a read-only property.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

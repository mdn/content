---
title: XMLDocument.async
slug: Web/API/XMLDocument/async
page-type: web-api-instance-property
tags:
  - API
  - DOM
  - DOM Reference
  - Deprecated
  - Document
  - Non-standard
  - Property
  - Reference
  - async
browser-compat: api.XMLDocument.async
---
{{APIRef("DOM")}}{{Non-standard_header}}{{Deprecated_header}}

`document.async` can be set to indicate whether a {{DOMxRef("XMLDocument.load()")}} call should be an asynchronous or synchronous request. `true` is the default value, indicating that documents should be loaded asynchronously.

(It has been possible to load documents synchronously since 1.4 alpha.)

## Value

A boolean.

## Examples

```js
function loadXMLData(e) {
  alert(new XMLSerializer().serializeToString(e.target)); // Gives querydata.xml contents as string
}

const xmlDoc = document.implementation.createDocument("", "test", null);

xmlDoc.async = false;
xmlDoc.onload = loadXMLData;
xmlDoc.load('querydata.xml');
```

## Browser compatibility

{{Compat}}

## See also

- [XML in Mozilla](/en-US/docs/XML_in_Mozilla)
- {{DOMxRef("XMLDocument.load()")}}

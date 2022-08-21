---
title: XMLDocument.load()
slug: Web/API/XMLDocument/load
page-type: web-api-instance-method
tags:
  - API
  - DOM
  - Deprecated
  - Method
  - Non-standard
  - Reference
  - load
browser-compat: api.XMLDocument.load
---
{{APIRef("DOM")}}{{Non-standard_Header}}{{Deprecated_Header}}

`document.load()` is a part of an old version of the W3C [DOM Level 3 Load & Save module](https://www.w3.org/TR/2003/WD-DOM-Level-3-LS-20030619/load-save.html#LS-DocumentLS). Can be used with {{DOMxRef("XMLDocument.async")}} to indicate whether the request is synchronous or asynchronous (the default). As of at least Gecko 1.9, this no longer supports cross-site loading of documents (Use {{DOMxRef("XMLHttpRequest")}} or {{DOMxRef("fetch()")}} instead).

## Syntax

```js
load()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

## Examples

```js
const xmlDoc = document.implementation.createDocument("", "test", null);

function documentLoaded (e) {
  alert(new XMLSerializer().serializeToString(e.target)); // Gives querydata.xml contents as string
}

xmlDoc.addEventListener("load", documentLoaded, false);
xmlDoc.load('querydata.xml');
```

## Specifications

- [Old W3C Working Draft of the DOM Level 3 Load & Save module](https://www.w3.org/TR/2003/WD-DOM-Level-3-LS-20030619/load-save.html#LS-DocumentLS)

## Browser compatibility

{{Compat}}

## See also

- {{DOMxRef("XMLDocument.async")}}
- [XML in Mozilla](/en-US/docs/XML_in_Mozilla)

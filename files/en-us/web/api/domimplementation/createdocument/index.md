---
title: DOMImplementation.createDocument()
slug: Web/API/DOMImplementation/createDocument
page-type: web-api-instance-method
tags:
  - API
  - DOM
  - DOMImplementation
  - Method
  - Reference
browser-compat: api.DOMImplementation.createDocument
---
{{ApiRef("DOM")}}

The **`DOMImplementation.createDocument()`** method creates and
returns an {{domxref("XMLDocument")}}.

## Syntax

```js
createDocument(namespaceURI, qualifiedNameStr)
createDocument(namespaceURI, qualifiedNameStr, documentType)
```

### Parameters

- `namespaceURI`
  - : A string containing the namespace URI of the document to be
    created, or `null` if the document doesn't belong to one.
- `qualifiedNameStr`
  - : A string containing the qualified name, that is an optional
    prefix and colon plus the local root element name, of the document to be created.
- `documentType` {{optional_inline}}
  - : Is the {{domxref("DocumentType")}} of the document to be created. It defaults to
    `null`.

### Return value

None ({{jsxref("undefined")}}).

## Examples

```js
const doc = document.implementation.createDocument('http://www.w3.org/1999/xhtml', 'html', null);
const body = document.createElementNS('http://www.w3.org/1999/xhtml', 'body');
body.setAttribute('id', 'abc');
doc.documentElement.appendChild(body);
alert(doc.getElementById('abc')); // [object HTMLBodyElement]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("DOMImplementation")}} interface it belongs to.

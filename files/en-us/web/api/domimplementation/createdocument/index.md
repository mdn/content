---
title: "DOMImplementation: createDocument() method"
short-title: createDocument()
slug: Web/API/DOMImplementation/createDocument
page-type: web-api-instance-method
browser-compat: api.DOMImplementation.createDocument
---

{{ApiRef("DOM")}}

The **`DOMImplementation.createDocument()`** method creates and
returns an {{domxref("XMLDocument")}}.

## Syntax

```js-nolint
createDocument(namespaceURI, qualifiedName)
createDocument(namespaceURI, qualifiedName, documentType)
```

### Parameters

- `namespaceURI`
  - : A string containing the namespace URI of the document to be
    created, or `null` if the document doesn't belong to one.
- `qualifiedName`
  - : A string containing the qualified name, that is an optional
    prefix and colon plus the local root element name, of the document to be created. A [`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null) value is treated the same as the empty string (`""`).
- `documentType` {{optional_inline}}
  - : Is the {{domxref("DocumentType")}} of the document to be created. It defaults to
    `null`.

### Return value

The newly-created {{domxref("XMLDocument")}}.

## Examples

```js
const doc = document.implementation.createDocument(
  "http://www.w3.org/1999/xhtml",
  "html",
  null,
);
const body = document.createElementNS("http://www.w3.org/1999/xhtml", "body");
body.setAttribute("id", "abc");
doc.documentElement.appendChild(body);
alert(doc.getElementById("abc")); // [object HTMLBodyElement]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("DOMImplementation")}} interface it belongs to.

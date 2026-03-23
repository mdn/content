---
title: "DOMImplementation: createDocument() method"
short-title: createDocument()
slug: Web/API/DOMImplementation/createDocument
page-type: web-api-instance-method
browser-compat: api.DOMImplementation.createDocument
---

{{ApiRef("DOM")}}

The **`createDocument()`** method of the {{domxref("DOMImplementation")}} interface creates and returns an {{domxref("XMLDocument")}}.

## Syntax

```js-nolint
createDocument(namespaceURI, qualifiedName)
createDocument(namespaceURI, qualifiedName, documentType)
```

### Parameters

- `namespaceURI`
  - : A string containing the namespace URI of the document to be created, or `null` if the document doesn't belong to one.
- `qualifiedName`
  - : A string containing the qualified name of the document to be created.
    A [`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null) value is treated the same as the empty string (`""`).

    The format of the qualified name is `prefix:localName` or `localName`, where the parts are defined as:
    - `prefix` {{optional_inline}}
      - : A "short alias" for the namespace.
        The prefix is optional, but if it is specified the `namespaceURI` parameter must also be specified.
        If the prefix is set to `xml` or `xmlns`, the `namespaceURI` must be set to `http://www.w3.org/XML/1998/namespace` or `http://www.w3.org/2000/xmlns/`, respectively.
        Defaults to `null`.

    - `localName`
      - : The local name of the document.

- `documentType` {{optional_inline}}
  - : The {{domxref("DocumentType")}} of the document to be created. It defaults to `null`.

### Return value

The newly-created {{domxref("XMLDocument")}}.

### Exceptions

- `NamespaceError` {{domxref("DOMException")}}
  - : Thrown if the [`namespaceURI`](#namespaceURI) value is:
    - not a valid namespace URI.
    - set to the empty string when `prefix` has a value.
    - not the value `http://www.w3.org/XML/1998/namespace` or `http://www.w3.org/2000/xmlns/` when [`prefix`](#prefix) is set to `xml` or `xmlns`, respectively.
- `InvalidCharacterError` {{domxref("DOMException")}}
  - : Thrown if either the `prefix` or `localName` is not valid:
    - The `prefix` must have at least one character, and cannot contain ASCII whitespace, `NULL`, `/`, or `>` (U+0000, U+002F, or U+003E, respectively).
    - The `localName` is a valid element name if it has a length of at least 1 and:
      - it starts with an alphabet character and does not contain ASCII whitespace, `NULL`, `/`, or `>` (U+0000, U+002F, or U+003E, respectively).
      - it starts with `:` (U+003A), `_` (U+005F), or any characters in the range U+0080 to U+10FFFF (inclusive), _and_ the remaining code points only include those same characters along with the ASCII alphanumeric characters, `-` (U+002D), and `.` (U+002E),

    > [!NOTE]
    > Earlier versions of the specification were more restrictive, requiring that the `qualifiedName` be a valid [XML name](https://www.w3.org/TR/xml/#dt-name).

## Examples

### Basic usage

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

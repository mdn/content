---
title: "Document: createAttributeNS() method"
short-title: createAttributeNS()
slug: Web/API/Document/createAttributeNS
page-type: web-api-instance-method
browser-compat: api.Document.createAttributeNS
---

{{ ApiRef("DOM") }}

The **`createAttributeNS()`** method of the {{domxref("Document")}} interface creates a new attribute node with the specified namespace URI and qualified name.

The object created is a node implementing the {{domxref("Attr")}} interface.
The DOM does not enforce what sort of attributes can be added to a particular element in this manner.

## Syntax

```js-nolint
createAttributeNS(namespaceURI, qualifiedName)
```

### Parameters

- `namespaceURI`
  - : A string that specifies the {{DOMxRef("Attr.namespaceURI", "namespaceURI")}} to associate with the attribute, or the empty string.
    Some important namespace URIs are:
    - [HTML](/en-US/docs/Web/HTML)
      - : `http://www.w3.org/1999/xhtml`
    - [SVG](/en-US/docs/Web/SVG)
      - : `http://www.w3.org/2000/svg`
    - [MathML](/en-US/docs/Web/MathML)
      - : `http://www.w3.org/1998/Math/MathML`
- `qualifiedName`
  - : A string containing the qualified name of the new attribute.
    The {{DOMxRef("Attr.name", "name")}} property of the created attribute is initialized with this value.

    The format of the qualified name is `prefix:localName` or `localName`, where the parts are defined as:
    - `prefix` {{optional_inline}}
      - : A "short alias" for the namespace.
        The prefix is optional, but if it is specified the `namespaceURI` parameter must also be specified.
        If the prefix is set to `xml` or `xmlns`, the `namespaceURI` must be set to `http://www.w3.org/XML/1998/namespace` or `http://www.w3.org/2000/xmlns/`, respectively.

        The value is used to initialize the new attribute's {{DOMxRef("Attr.prefix", "prefix")}} property.
        Defaults to `null`.

    - `localName`
      - : The local name of the attribute.
        The value is used to initialize the new attribute's {{DOMxRef("Attr.localName", "localName")}} property.

### Return value

The new {{domxref("Attr")}} node.

### Exceptions

- `NamespaceError` {{domxref("DOMException")}}
  - : Thrown if the [`namespaceURI`](#namespaceURI) value is:
    - not a valid namespace URI.
    - set to the empty string when `prefix` has a value.
    - not the value `http://www.w3.org/XML/1998/namespace` or `http://www.w3.org/2000/xmlns/` when [`prefix`](#prefix) is set to `xml` or `xmlns`, respectively.
- `InvalidCharacterError` {{domxref("DOMException")}}
  - : Thrown if either the `prefix` or `localName` is not valid:
    - The `prefix` must have at least one character, and cannot contain ASCII whitespace, `NULL`, `/`, or `>` (U+0000, U+002F, or U+003E, respectively).
    - The `localName` must have at least one character, and may not contain ASCII whitespace, `NULL`, `/`, `=` or `>` (U+0000, U+002F, U+003D, or U+003E, respectively).

    > [!NOTE]
    > Earlier versions of the specification were more restrictive, requiring that the `localName` be a valid [XML name](https://www.w3.org/TR/xml/#dt-name).

## Examples

### Basic usage

```js
const node = document.getElementById("svg");
const a = document.createAttributeNS("http://www.w3.org/2000/svg", "viewBox");
a.value = "0 0 100 100";
node.setAttributeNode(a);
console.log(node.getAttribute("viewBox")); // "0 0 100 100"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Document.createAttribute()")}}
- {{domxref("Document.createElementNS()")}}
- {{domxref("Element.setAttributeNS()")}}
- {{domxref("Element.setAttributeNode()")}}
- {{domxref("Element.setAttributeNodeNS()")}}

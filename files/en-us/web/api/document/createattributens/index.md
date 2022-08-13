---
title: Document.createAttributeNS()
slug: Web/API/Document/createAttributeNS
page-type: web-api-instance-method
tags:
  - API
  - DOM
  - Method
  - Reference
browser-compat: api.Document.createAttributeNS
---
{{ ApiRef("DOM") }}

The **`Document.createAttributeNS()`** method creates a new attribute node
with the specified namespace URI and qualified name, and returns it.
The object created is a node implementing the
{{domxref("Attr")}} interface. The DOM does not enforce what sort of attributes can be
added to a particular element in this manner.

## Syntax

```js
createAttributeNS(namespaceURI, qualifiedName)
```

### Parameters

- `namespaceURI`
  - : A string that specifies the [namespace URI](https://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/glossary.html#dt-namespaceURI) to associate with the attribute.
    The {{DOMxRef("attribute.namespaceURI", "namespaceURI")}} property of the created attribute is initialized with the value of `namespaceURI`.
    See [Valid Namespace URIs](#important_namespace_uris).
- `qualifiedName`
  - : A string that specifies the name of attribute to be created.
    The {{DOMxRef("attribute.name", "name")}} property of the created attribute is initialized with the value of `qualifiedName`.

### Return value

The new {{domxref("Attr")}} node.

### Exceptions

- `NamespaceError` {{domxref("DOMException")}}
  - : Thrown if the [`namespaceURI`](#namespaceuri) value is not a valid [namespace URI](https://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/glossary.html#dt-namespaceURI)
- `InvalidCharacterError` {{domxref("DOMException")}}
  - : Thrown if the [`qualifiedName`](#qualifiedname) value is not a valid [XML name](https://www.w3.org/TR/REC-xml/#dt-name); for example, it starts with a number, hyphen, or period, or contains characters other than alphanumeric characters, underscores, hyphens, or periods.

## Important Namespace URIs

- [HTML](/en-US/docs/Web/HTML)
  - : `http://www.w3.org/1999/xhtml`
- [SVG](/en-US/docs/Web/SVG)
  - : `http://www.w3.org/2000/svg`
- [MathML](/en-US/docs/Web/MathML)
  - : `http://www.w3.org/1998/Math/MathML`

## Examples

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

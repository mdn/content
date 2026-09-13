---
title: "Attr: namespaceURI property"
short-title: namespaceURI
slug: Web/API/Attr/namespaceURI
page-type: web-api-instance-property
browser-compat: api.Attr.namespaceURI
---

{{APIRef("DOM")}}

The **`namespaceURI`** read-only property of the {{domxref("Attr")}} interface returns the [namespace URI](/en-US/docs/Web/API/Document_Object_Model/XML_namespaces#element_and_attribute_names_in_the_dom) of an attribute, or `null` if the attribute is not in a namespace.

The namespace URI of an attribute is frozen at the attribute's creation time, either set by the parser or by the [`document.createAttributeNS()`](/en-US/docs/Web/API/Document/createAttributeNS) or {{domxref("Element.setAttributeNS()")}} method. Reading this property does not involve dynamic lookup in the document tree.

> [!NOTE]
> An attribute does not inherit its namespace from the element it is attached to.
> If an attribute is not explicitly given a namespace, it has no namespace.

## Value

A string or `null`.

## Examples

### Reading the namespaceURI

We use {{domxref("DOMParser")}} to create an XML document.

```js
const doc = new DOMParser().parseFromString(
  `<parent xmlns:mdn="https://developer.mozilla.org/" mdn:status="ready" />`,
  "application/xml",
);
const status = doc.querySelector("parent").getAttributeNode("mdn:status");
console.log(status.namespaceURI); // https://developer.mozilla.org/
```

### Namespace URIs in HTML documents

[The HTML syntax supports namespaces only for a fixed set of attributes on SVG and MathML elements](/en-US/docs/Web/API/Document_Object_Model/XML_namespaces#namespace_syntax_in_html). For other attributes, a colon is part of the local name rather than a namespace separator.

```html
<svg xml:lang="en-US" mdn:status="ready"></svg>
```

```js
const svg = document.querySelector("svg");

console.log(svg.getAttributeNode("xml:lang").namespaceURI);
// http://www.w3.org/XML/1998/namespace
console.log(svg.getAttributeNode("mdn:status").namespaceURI); // null
```

However, this is only a parser restriction; you can create arbitrarily namespaced attributes using [`document.createAttributeNS()`](/en-US/docs/Web/API/Document/createAttributeNS) and attach them to the HTML DOM without problems.

```js
const attr = document.createAttributeNS("https://example.com/", "mdn:status");
document.body.setAttributeNode(attr);

console.log(attr.namespaceURI); // https://example.com/
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [XML namespaces](/en-US/docs/Web/API/Document_Object_Model/XML_namespaces)
- {{domxref("Attr.localName")}}
- {{domxref("Attr.prefix")}}
- {{domxref("Element.namespaceURI")}}

---
title: "Attr: localName property"
short-title: localName
slug: Web/API/Attr/localName
page-type: web-api-instance-property
browser-compat: api.Attr.localName
---

{{APIRef("DOM")}}

The **`localName`** read-only property of the {{domxref("Attr")}} interface returns the [local name](/en-US/docs/Web/API/Document_Object_Model/XML_namespaces#element_and_attribute_names_in_the_dom) of an attribute, which is the attribute name with the namespace prefix removed, if any.

> [!NOTE]
> Attributes in HTML documents are case-normalized by the parser and namespace-unaware methods like {{domxref("document.createAttribute()")}}. This property returns the internally-stored name, which is usually lowercase (camel case for certain SVG/MathML attributes).
>
> The HTML parser special-cases several prefixed attribute names, but only on SVG and MathML elements: `xlink:actuate`, `xlink:arcrole`, `xlink:href`, `xlink:role`, `xlink:show`, `xlink:title`, `xlink:type`, `xml:lang`, `xml:space`, `xmlns:xlink`. For all other attributes, the prefix is simply seen as a part of the local name.

## Value

A string.

## Examples

### Reading the localName

We use {{domxref("DOMParser")}} to create an XML document.

```js
const doc = new DOMParser().parseFromString(
  `<parent xmlns:mdn="https://developer.mozilla.org/" mdn:status="ready" />`,
  "application/xml",
);
const status = doc.querySelector("parent").getAttributeNode("mdn:status");
console.log(status.localName); // status
```

### Local names in HTML documents

[The HTML syntax supports namespaces only for a fixed set of attributes on SVG and MathML elements](/en-US/docs/Web/API/Document_Object_Model/XML_namespaces#namespace_syntax_in_html). For other attributes, a colon is part of the local name rather than a namespace separator.

```html
<svg xml:lang="en-US" mdn:status="ready"></svg>
```

```js
const svg = document.querySelector("svg");

console.log(svg.getAttributeNode("xml:lang").localName); // lang
console.log(svg.getAttributeNode("mdn:status").localName); // mdn:status
```

However, this is only a parser restriction; you can create prefixed attributes using [`document.createAttributeNS()`](/en-US/docs/Web/API/Document/createAttributeNS) or [`element.setAttributeNS()`](/en-US/docs/Web/API/Element/setAttributeNS) and attach them to the HTML DOM without problems. These methods do not normalize internal casing even when the namespace is HTML.

```js
const status = document.createAttributeNS(
  "http://www.w3.org/1999/xhtml",
  "Mdn:Status",
);
document.body.setAttributeNode(status);

console.log(status.name); // Mdn:Status
console.log(status.prefix); // Mdn
console.log(status.localName); // Status
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [XML namespaces](/en-US/docs/Web/API/Document_Object_Model/XML_namespaces)
- {{domxref("Attr.name")}}
- {{domxref("Attr.namespaceURI")}}
- {{domxref("Attr.prefix")}}
- {{domxref("Element.localName")}}

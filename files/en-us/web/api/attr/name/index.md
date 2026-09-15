---
title: "Attr: name property"
short-title: name
slug: Web/API/Attr/name
page-type: web-api-instance-property
browser-compat: api.Attr.name
---

{{APIRef("DOM")}}

The **`name`** read-only property of the {{domxref("Attr")}} interface returns the [qualified name](/en-US/docs/Web/API/Document_Object_Model/XML_namespaces#element_and_attribute_names_in_the_dom) of an attribute. It is the attribute's local name by itself when the attribute has no prefix, or the prefix and local name separated by a colon when it does.

> [!NOTE]
> Attributes in HTML documents are case-normalized by the parser and namespace-unaware methods like {{domxref("document.createAttribute()")}}. This property returns the internally-stored name, which is usually lowercase (camel case for certain SVG/MathML attributes).

## Value

A string.

## Examples

### Reading the name

We use {{domxref("DOMParser")}} to create an XML document.

```js
const doc = new DOMParser().parseFromString(
  `<parent xmlns:mdn="https://developer.mozilla.org/" mdn:status="ready" />`,
  "application/xml",
);
const status = doc.querySelector("parent").getAttributeNode("mdn:status");
console.log(status.name); // mdn:status
```

### Attribute names in HTML documents

Unlike {{domxref("Element.tagName", "tagName")}}, `name` does not convert the qualified name to uppercase. The HTML parser normalizes attribute names according to the HTML parsing rules, including the fixed adjustments it makes for attributes on SVG and MathML elements.

```xml
<svg viewbox="0 0 100 100" xml:lang="en-US"></svg>
```

```js
const svg = document.querySelector("svg");

console.log(svg.getAttributeNode("viewBox").name); // viewBox
console.log(svg.getAttributeNode("xml:lang").name); // xml:lang
```

Attributes created with [`document.createAttributeNS()`](/en-US/docs/Web/API/Document/createAttributeNS) preserve the supplied qualified name and casing, even when attached to an HTML DOM.

```js
const status = document.createAttributeNS(
  "https://developer.mozilla.org/",
  "Mdn:Status",
);
document.querySelector("svg").setAttributeNode(status);

console.log(status.name); // Mdn:Status
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [XML namespaces](/en-US/docs/Web/API/Document_Object_Model/XML_namespaces)
- {{domxref("Attr.localName")}}
- {{domxref("Attr.namespaceURI")}}
- {{domxref("Attr.prefix")}}
- {{domxref("Element.tagName")}}

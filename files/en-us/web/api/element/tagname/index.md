---
title: "Element: tagName property"
short-title: tagName
slug: Web/API/Element/tagName
page-type: web-api-instance-property
browser-compat: api.Element.tagName
---

{{APIRef("DOM")}}

The **`tagName`** read-only property of the {{domxref("Element")}} interface returns the [qualified name](/en-US/docs/Web/API/Document_Object_Model/XML_namespaces#element_and_attribute_names_in_the_dom) of an element. It is the element's local name by itself when the element has no prefix, or the prefix and local name separated by a colon when it does.

For {{domxref("Element")}} objects, the value of `tagName` is the same as the value of the {{domxref("Node.nodeName", "nodeName")}} property the element object inherits from {{domxref("Node")}}.

## Value

A string.

For an HTML element in an HTML document, `tagName` returns the qualified name in uppercase. Use {{domxref("Element.localName", "localName")}} to obtain the internally-stored name without this uppercase conversion.

## Examples

### Reading the tagName

We use {{domxref("DOMParser")}} to create an XML document.

```js
const doc = new DOMParser().parseFromString(
  `<parent xmlns:mdn="https://developer.mozilla.org/"><mdn:child /></parent>`,
  "application/xml",
);
const child = doc.querySelector("child");
console.log(child.tagName); // mdn:child
```

### Tag names in HTML documents

In an HTML document, `tagName` converts the qualified names of elements in the HTML namespace to uppercase. Elements in other namespaces, such as SVG, preserve the internally-stored casing.

```xml
<svg>
  <linearGradient id="gradient"></linearGradient>
</svg>
```

```js
console.log(document.body.tagName); // BODY

const gradient = document.querySelector("#gradient");
console.log(gradient.tagName); // linearGradient
```

This distinction also applies to elements created programmatically. An element in the HTML namespace has an uppercase `tagName`, while an element in the SVG namespace does not:

```js
const htmlElement = document.createElementNS(
  "http://www.w3.org/1999/xhtml",
  "Mdn:Child",
);
const svgElement = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "Mdn:Child",
);

console.log(htmlElement.tagName); // MDN:CHILD
console.log(svgElement.tagName); // Mdn:Child
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [XML namespaces](/en-US/docs/Web/API/Document_Object_Model/XML_namespaces)
- {{domxref("Element.localName")}}
- {{domxref("Element.namespaceURI")}}
- {{domxref("Element.prefix")}}
- {{domxref("Attr.name")}}

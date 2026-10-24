---
title: "Element: namespaceURI property"
short-title: namespaceURI
slug: Web/API/Element/namespaceURI
page-type: web-api-instance-property
browser-compat: api.Element.namespaceURI
---

{{APIRef("DOM")}}

The **`namespaceURI`** read-only property of the {{domxref("Element")}} interface returns the [namespace URI](/en-US/docs/Web/API/Document_Object_Model/XML_namespaces#element_and_attribute_names_in_the_dom) of an element, or `null` if the element is not in a namespace.

The namespace URI of a node is frozen at the node creation time, either set by the parser or by the [`document.createElementNS()`](/en-US/docs/Web/API/Document/createElementNS) method. Reading this property does not involve dynamic lookup in the document tree.

## Value

A string or `null`.

## Examples

### Reading the namespaceURI

We use {{domxref("DOMParser")}} to create an XML document.

```js
const doc = new DOMParser().parseFromString(
  `<parent xmlns="https://example.com/"><child /></parent>`,
  "application/xml",
);
const child = doc.querySelector("child");
console.log(child.namespaceURI); // https://example.com/
```

### Namespace URIs in HTML documents

[The HTML syntax does not support namespaces](/en-US/docs/Web/API/Document_Object_Model/XML_namespaces#namespace_syntax_in_html), but the parser assigns the HTML, SVG, and MathML namespaces to different elements.

```html
<div>An HTML element</div>
<svg>
  <text x="0" y="15">An SVG element</text>
</svg>
<math>
  <mtext>A MathML element</mtext>
</math>
```

```js
const htmlEl = document.querySelector("div");
const svgEl = document.querySelector("text");
const mathmlEl = document.querySelector("mtext");

console.log(htmlEl.namespaceURI); // http://www.w3.org/1999/xhtml
console.log(svgEl.namespaceURI); // http://www.w3.org/2000/svg
console.log(mathmlEl.namespaceURI); // http://www.w3.org/1998/Math/MathML
```

However, this is only a parser restriction; you can create arbitrarily namespaced elements using [`document.createElementNS()`](/en-US/docs/Web/API/Document/createElementNS) and attach them to the HTML DOM without problems.

```js
const elem = document.createElementNS("https://example.com/", "child");
document.body.append(elem);

console.log(elem.namespaceURI); // https://example.com/
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [XML namespaces](/en-US/docs/Web/API/Document_Object_Model/XML_namespaces)
- {{domxref("Element.localName")}}
- {{domxref("Element.prefix")}}
- {{domxref("Attr.namespaceURI")}}

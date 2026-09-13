---
title: "Element: prefix property"
short-title: prefix
slug: Web/API/Element/prefix
page-type: web-api-instance-property
browser-compat: api.Element.prefix
---

{{APIRef("DOM")}}

The **`prefix`** read-only property of the {{domxref("Element")}} interface returns the [namespace prefix](/en-US/docs/Web/API/Document_Object_Model/XML_namespaces#element_and_attribute_names_in_the_dom) of an element, or `null` if no prefix is specified.

## Value

A string or `null`.

## Examples

### Reading the prefix

We use {{domxref("DOMParser")}} to create an XML document.

```js
const doc = new DOMParser().parseFromString(
  `<parent xmlns:mdn="https://developer.mozilla.org/"><mdn:child /></parent>`,
  "application/xml",
);
const child = doc.querySelector("child");
console.log(child.prefix); // mdn
```

### Namespace prefixes in HTML documents

[The HTML syntax does not support namespaces](/en-US/docs/Web/API/Document_Object_Model/XML_namespaces#namespace_syntax_in_html), so the `prefix` is always `null` when created by the parser.

```html
<div></div>
```

```js
const div = document.querySelector("div");

console.log(div.prefix); // null
```

However, this is only a parser restriction; you can create prefixed elements using [`document.createElementNS()`](/en-US/docs/Web/API/Document/createElementNS) and attach them to the HTML DOM without problems. This method does not normalize internal casing even when the namespace is HTML.

```js
const elem = document.createElementNS(
  "http://www.w3.org/1999/xhtml",
  "Mdn:Child",
);
document.body.append(elem);

console.log(elem.tagName); // MDN:CHILD
console.log(elem.prefix); // Mdn
console.log(elem.localName); // Child
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [XML namespaces](/en-US/docs/Web/API/Document_Object_Model/XML_namespaces)
- {{domxref("Element.tagName")}}
- {{domxref("Element.namespaceURI")}}
- {{domxref("Element.localName")}}
- {{domxref("Attr.prefix")}}

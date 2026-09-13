---
title: "Element: localName property"
short-title: localName
slug: Web/API/Element/localName
page-type: web-api-instance-property
browser-compat: api.Element.localName
---

{{APIRef("DOM")}}

The **`localName`** read-only property of the {{domxref("Element")}} interface returns the [local name](/en-US/docs/Web/API/Document_Object_Model/XML_namespaces#element_and_attribute_names_in_the_dom) of an element, which is the tag name with the namespace prefix removed, if any.

> [!NOTE]
> HTML elements in HTML documents are case-normalized by the parser and namespace-unaware methods like {{domxref("document.createElement()")}}. This property returns the internally-stored lowercase name, but {{domxref("element.tagName", "tagName")}} converts the name to uppercase.

## Value

A string.

## Examples

### Reading the localName

We use {{domxref("DOMParser")}} to create an XML document.

```js
const doc = new DOMParser().parseFromString(
  `<parent xmlns:mdn="https://developer.mozilla.org/"><mdn:child /></parent>`,
  "application/xml",
);
const child = doc.querySelector("child");
console.log(child.localName); // child
```

### Local names in HTML documents

[The HTML syntax does not support namespaces](/en-US/docs/Web/API/Document_Object_Model/XML_namespaces#namespace_syntax_in_html), so the `localName` is always the tag name in lowercase when created by the parser.

```html-nolint
<div></div>
<BLOCKQUOTE></BLOCKQUOTE>
```

```js
const div = document.querySelector("div");
const blockquote = document.querySelector("blockquote");

console.log(div.localName); // div
console.log(blockquote.localName); // blockquote
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
- {{domxref("Element.prefix")}}
- {{domxref("Attr.localName")}}

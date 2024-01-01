---
title: "Element: tagName property"
short-title: tagName
slug: Web/API/Element/tagName
page-type: web-api-instance-property
browser-compat: api.Element.tagName
---

{{ApiRef("DOM")}}

The **`tagName`** read-only property
of the {{domxref("Element")}} interface returns the tag name of the element on which
it's called.

For example, if the element is an {{HTMLElement("img")}}, its
`tagName` property is `"IMG"` (for HTML documents; it may be cased
differently for XML/XHTML documents).

## Value

A string indicating the element's tag name. This string's capitalization depends on the
document type:

- For DOM trees which represent HTML documents, the returned tag name is always in the
  canonical upper-case form. For example, `tagName` called on a
  {{HTMLElement("div")}} element returns `"DIV"`.
- The tag names of elements in an XML DOM tree are returned in the same case in which
  they're written in the original XML file. If an XML document includes a tag
  `"<SomeTag>"`, then the `tagName` property's value is
  `"SomeTag"`.

For {{domxref("Element")}} objects, the value of `tagName` is the same as
the value of the {{domxref("Node.nodeName", "nodeName")}} property the element object
inherits from {{domxref("Node")}}.

## Examples

### HTML

```html
<span id="born">When I was born…</span>
```

### JavaScript

```js
const span = document.getElementById("born");
console.log(span.tagName);
```

In XHTML (or any other XML format), the original case will be maintained, so
`"span"` would be output in case the original tag name was created lowercase.
In HTML, `"SPAN"` would be output instead regardless of the case used while
creating the original document.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

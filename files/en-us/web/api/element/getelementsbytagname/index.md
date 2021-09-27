---
title: Element.getElementsByTagName()
slug: Web/API/Element/getElementsByTagName
tags:
  - API
  - DOM
  - Element
  - Method
  - Reference
browser-compat: api.Element.getElementsByTagName
---
{{ APIRef("DOM") }}

The
**`Element.getElementsByTagName()`** method returns a live
{{domxref("HTMLCollection")}} of elements with the given [tag name](/en-US/docs/Web/API/Element/tagName).

All descendants of the
specified element are searched, but not the element itself. The returned list is
_live_, which means it updates itself with the DOM tree automatically.
Therefore, there is no need to call `Element.getElementsByTagName()` with
the same element and arguments repeatedly if the DOM changes in between calls.

When called on an HTML element in an HTML document, `getElementsByTagName`
lower-cases the argument before searching for it. This is undesirable when trying to
match camel-cased SVG elements (such as
[`<linearGradient>`](/en-US/docs/Web/SVG/Element/linearGradient))
in an HTML document. Instead, use {{ domxref("Element.getElementsByTagNameNS()") }},
which preserves the capitalization of the tag name.

`Element.getElementsByTagName` is similar to
{{domxref("Document.getElementsByTagName()")}}, except that it only searches for
elements that are descendants of the specified element.

## Syntax

```js
elements = element.getElementsByTagName(tagName)
```

- `elements` is a _live_ {{domxref("HTMLCollection")}} of elements
  with a matching tag name, in the order they appear. If no elements are found, the
  `HTMLCollection` is empty.
- `element` is the element from where the search starts. Only the
  element's descendants are included, not the element itself.
- `tagName` is the qualified name to look for. The special string
  `"*"` represents all elements. For compatibility with XHTML, lower-case
  should be used.

## Example

```js
// Check the status of each data cell in a table
const table = document.getElementById('forecast-table');
const cells = table.getElementsByTagName('td');

for (let cell of cells) {
  let status = cell.getAttribute('data-status');
  if (status === 'open') {
    // Grab the data
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

---
title: "Element: getElementsByTagNameNS() method"
short-title: getElementsByTagNameNS()
slug: Web/API/Element/getElementsByTagNameNS
page-type: web-api-instance-method
browser-compat: api.Element.getElementsByTagNameNS
---

{{APIRef("DOM")}}

The **`Element.getElementsByTagNameNS()`** method returns a
live {{domxref("HTMLCollection")}} of elements with the given tag name belonging to the
given namespace. It is similar to {{Domxref("Document.getElementsByTagNameNS")}}, except
that its search is restricted to descendants of the specified element.

## Syntax

```js-nolint
getElementsByTagNameNS(namespaceURI, localName)
```

### Parameters

- `namespaceURI`
  - : The namespace URI of elements to look for (see
    {{domxref("Element.namespaceURI")}} and {{domxref("Attr.namespaceURI")}}). For
    example, if you need to look for XHTML elements, use the XHTML namespace URI,
    `http://www.w3.org/1999/xhtml`.
- `localName`
  - : Either the local name of elements to look for or the
    special value `"*"`, which matches all elements (see
    {{domxref("Element.localName")}} and {{domxref("Attr.localName")}}).

### Return value

A live {{domxref("HTMLCollection")}} of found elements in the order they appear in the tree.

## Examples

```js
// Check the alignment on a number of cells in a table in an XHTML document.
const table = document.getElementById("forecast-table");
const cells = table.getElementsByTagNameNS(
  "http://www.w3.org/1999/xhtml",
  "td",
);

for (const cell of cells) {
  const axis = cell.getAttribute("axis");
  if (axis === "year") {
    // Grab the data
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

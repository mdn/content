---
title: Element.getElementsByTagNameNS()
slug: Web/API/Element/getElementsByTagNameNS
page-type: web-api-instance-method
tags:
  - API
  - DOM
  - Element
  - Method
  - Reference
browser-compat: api.Element.getElementsByTagNameNS
---
{{APIRef("DOM")}}

The **`Element.getElementsByTagNameNS()`** method returns a
live {{domxref("HTMLCollection")}} of elements with the given tag name belonging to the
given namespace. It is similar to {{Domxref("Document.getElementsByTagNameNS")}}, except
that its search is restricted to descendants of the specified element.

## Syntax

```js
getElementsByTagNameNS(namespaceURI, localName)
```

### Parameters

- `namespaceURI` is the namespace URI of elements to look for (see
  {{domxref("Element.namespaceURI")}} and {{domxref("Attr.namespaceURI")}}). For
  example, if you need to look for XHTML elements, use the XHTML namespace URI,
  `http://www.w3.org/1999/xhtml`.
- `localName` is either the local name of elements to look for or the
  special value `"*"`, which matches all elements (see
  {{domxref("Element.localName")}} and {{domxref("Attr.localName")}}).

### Return value

A live {{domxref("HTMLCollection")}} of found elements in the order they appear in the tree.

## Examples

```js
// check the alignment on a number of cells in a table in an XHTML document.
const table = document.getElementById("forecast-table");
const cells = table.getElementsByTagNameNS("http://www.w3.org/1999/xhtml", "td");

for (let i = 0; i < cells.length; i++) {
    const axis = cells[i].getAttribute("axis");
    if (axis === "year") {
        // grab the data
    }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

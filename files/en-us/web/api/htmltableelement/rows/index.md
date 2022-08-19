---
title: HTMLTableElement.rows
slug: Web/API/HTMLTableElement/rows
page-type: web-api-instance-property
tags:
  - API
  - HTML DOM
  - HTMLTableElement
  - NeedsBrowserCompatibility
  - NeedsSpecTable
  - Property
  - Read-only
  - Reference
  - Table Rows
  - rows
browser-compat: api.HTMLTableElement.rows
---
{{APIRef("HTML DOM")}}

The read-only {{domxref("HTMLTableElement")}}
property **`rows`** returns a live
{{domxref("HTMLCollection")}} of all the rows in the table, including the rows
contained within any {{HTMLElement("thead")}}, {{HTMLElement("tfoot")}}, and
{{HTMLElement("tbody")}} elements.

Although the property itself is read-only, the returned object is live and allows the
modification of its content.

## Value

An {{domxref("HTMLCollection")}} providing a live-updating list of the
{{domxref("HTMLTableRowElement")}} objects representing all of the {{HTMLElement("tr")}}
elements contained in the table. This provides quick access to all of the table rows,
without having to manually search for them.

## Examples

```js
myrows = mytable.rows;
firstRow = mytable.rows[0];
lastRow = mytable.rows.item(mytable.rows.length-1);
```

This demonstrates how you can use both array syntax (line 2) and the
{{domxref("HTMLCollection.item()")}} method (line 3) to obtain individual rows in the
table.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

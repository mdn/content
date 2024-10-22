---
title: "HTMLTableElement: rows property"
short-title: rows
slug: Web/API/HTMLTableElement/rows
page-type: web-api-instance-property
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
myRows = myTable.rows;
firstRow = myTable.rows[0];
lastRow = myTable.rows.item(myTable.rows.length - 1);
```

This demonstrates how you can use both indexed access and the
{{domxref("HTMLCollection.item()")}} method to obtain individual rows in the
table.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

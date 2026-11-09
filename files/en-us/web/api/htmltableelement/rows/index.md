---
title: "HTMLTableElement: rows property"
short-title: rows
slug: Web/API/HTMLTableElement/rows
page-type: web-api-instance-property
browser-compat: api.HTMLTableElement.rows
---

{{APIRef("HTML DOM")}}

The **`rows`** read-only property of the {{domxref("HTMLTableElement")}} interface returns a live {{domxref("HTMLCollection")}} of all {{HTMLElement("tr")}} elements that are a child of the given {{HTMLElement("table")}} element, or a child of one of the table's {{HTMLElement("thead")}}, {{HTMLElement("tbody")}}, and {{HTMLElement("tfoot")}} children. The members of the `<thead>` appear first, followed by members of the `<tbody>` and the table itself, and members of the `<tfoot>` come last, sorted by tree order within each group.

Although the property is read-only, the returned object is live and is automatically updated when the `HTMLTableElement` changes.

## Value

A live {{domxref("HTMLCollection")}} of {{domxref("HTMLTableRowElement")}} objects.

## Examples

```js
const myRows = myTable.rows;
const firstRow = myTable.rows[0];
const lastRow = myTable.rows.item(myTable.rows.length - 1);
```

This demonstrates how you can use both indexed access and the {{domxref("HTMLCollection.item()")}} method to obtain individual rows in the table.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLTableElement.insertRow()")}}
- {{domxref("HTMLTableElement.deleteRow()")}}

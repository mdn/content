---
title: "HTMLTableElement: insertRow() method"
short-title: insertRow()
slug: Web/API/HTMLTableElement/insertRow
page-type: web-api-instance-method
browser-compat: api.HTMLTableElement.insertRow
---

{{APIRef("HTML DOM")}}

The **`insertRow()`** method of the {{domxref("HTMLTableElement")}} interface inserts a new row
({{HtmlElement("tr")}}) in a given {{HtmlElement("table")}}, and returns a reference to
the new row.

If a table has multiple {{HtmlElement("tbody")}} elements, by default, the new row is
inserted into the last `<tbody>`.
To insert the row into a specific section, use {{domxref("HTMLTableSectionElement.insertRow()")}}

> **Note:** `insertRow()` inserts the row directly into the
> table. The row does not need to be appended separately as would be the case if
> {{domxref("Document.createElement()")}} had been used to create the new
> `<tr>` element.

## Syntax

```js-nolint
insertRow()
insertRow(index)
```

{{domxref("HTMLTableElement")}} is a reference to an HTML {{HtmlElement("table")}}
element.

### Parameters

- `index` {{optional_inline}}
  - : The row index of the new row. If `index` is `-1` or equal to
    the number of rows, the row is appended as the last row.
    If `index` is omitted it defaults to `-1`.

### Return value

An {{domxref("HTMLTableRowElement")}} that references the new
row.

### Exceptions

- `IndexSizeError` {{domxref("DOMException")}}
  - : Thrown if `index` is greater than the number of rows.

## Examples

This example uses `insertRow(-1)` to append a new row to a table.

We then use {{domxref("HTMLTableRowElement.insertCell()")}} to insert a new cell in the
new row. (To be valid HTML, a `<tr>` must have at least one
`<td>` element.) Finally, we add some text to the cell using
{{domxref("Document.createTextNode()")}} and {{domxref("Node.appendChild()")}}.

### HTML

```html
<table id="my-table">
  <tr>
    <td>Row 1</td>
  </tr>
  <tr>
    <td>Row 2</td>
  </tr>
  <tr>
    <td>Row 3</td>
  </tr>
</table>
```

### JavaScript

```js
function addRow(tableID) {
  // Get a reference to the table
  let tableRef = document.getElementById(tableID);

  // Insert a row at the end of the table
  let newRow = tableRef.insertRow(-1);

  // Insert a cell in the row at index 0
  let newCell = newRow.insertCell(0);

  // Append a text node to the cell
  let newText = document.createTextNode("New bottom row");
  newCell.appendChild(newText);
}

// Call addRow() with the table's ID
addRow("my-table");
```

### Result

{{EmbedLiveSample("Examples")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLTableRowElement.insertCell()")}}
- {{domxref("HTMLTableSectionElement.insertRow()")}}

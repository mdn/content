---
title: "HTMLTableRowElement: insertCell() method"
short-title: insertCell()
slug: Web/API/HTMLTableRowElement/insertCell
page-type: web-api-instance-method
browser-compat: api.HTMLTableRowElement.insertCell
---

{{APIRef("HTML DOM")}}

The **`HTMLTableRowElement.insertCell()`** method inserts a new
cell ({{HtmlElement("td")}}) into a table row ({{HtmlElement("tr")}}) and returns a
reference to the cell.

> **Note:** `insertCell()` inserts the cell directly into the
> row. The cell does not need to be appended separately
> with {{domxref("Node.appendChild()")}} as would be the case if
> {{domxref("Document.createElement()")}} had been used to create the new
> `<td>` element.
>
> You can not use `insertCell()` to create a new `<th>`
> element though.

## Syntax

```js-nolint
insertCell()
insertCell(index)
```

{{domxref("HTMLTableRowElement")}} is a reference to an HTML {{HtmlElement("tr")}}
element.

### Parameters

- `index` {{optional_inline}}
  - : The cell index of the new cell. If `index` is `-1` or equal to the number of cells, the cell is appended as the last cell in the row. If `index` is omitted it defaults to `-1`.

### Return value

An {{domxref("HTMLTableCellElement")}} that references the new
cell.

### Exceptions

- `IndexSizeError` {{domxref("DOMException")}}
  - : Thrown if `index` is greater than the number of cells.

## Examples

This example uses {{domxref("HTMLTableElement.insertRow()")}} to append a new row to a
table.

We then use `insertCell(0)` to insert a new cell in the new row. (To be
valid HTML, a `<tr>` must have at least one `<td>`
element.) Finally, we add some text to the cell using
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

- {{domxref("HTMLTableElement.insertRow()")}}
- The HTML element representing cells: {{domxref("HTMLTableCellElement")}}

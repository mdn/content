---
title: "HTMLTableElement: insertRow() method"
short-title: insertRow()
slug: Web/API/HTMLTableElement/insertRow
page-type: web-api-instance-method
browser-compat: api.HTMLTableElement.insertRow
---

{{APIRef("HTML DOM")}}

The **`insertRow()`** method of the {{domxref("HTMLTableElement")}} interface creates a {{HTMLElement("tr")}} element, inserts it at the specified position in the {{domxref("HTMLTableElement.rows", "rows")}} collection, and returns it. If the `rows` collection is empty and the table also has no {{HTMLElement("tbody")}} elements, a `<tbody>` element is first created and inserted.

This method creates and inserts the element directly, without requiring separate calls to methods such as {{domxref("Document.createElement()")}}, {{domxref("Node.insertBefore()")}}, and {{domxref("Node.appendChild()")}}.

To explicitly insert a row into a specific section, use {{domxref("HTMLTableSectionElement.insertRow()")}}.

## Syntax

```js-nolint
insertRow()
insertRow(index)
```

### Parameters

- `index` {{optional_inline}}
  - : The index of the new row in the {{domxref("HTMLTableElement.rows", "rows")}} collection. If `index` is `-1` or equal to the number of rows, the row is appended as the last row. If `index` is omitted, it defaults to `-1`.

    If `rows` is empty, the new row is appended to the last `<tbody>` element (one is created if there's none). Otherwise, the new row is inserted immediately before the row at `index`, or appended to the parent of the last row if the new row is to become the last row. The new row is inserted into the same parent as the reference row, so it can be inserted directly into the `<table>` or into any table sectioning element (`<thead>`, `<tbody>`, or `<tfoot>`).

### Return value

An {{domxref("HTMLTableRowElement")}} that references the new row.

### Exceptions

- `IndexSizeError` {{domxref("DOMException")}}
  - : Thrown if `index` is greater than the number of rows or smaller than `-1`.

## Examples

This example uses `insertRow(-1)` to append a new row to a table.

We then use {{domxref("HTMLTableRowElement.insertCell()")}} to insert a new cell in the new row. Finally, we add some text to the cell using {{domxref("Document.createTextNode()")}} and {{domxref("Node.appendChild()")}}.

### HTML

```html
<table id="my-table">
  <tbody>
    <tr>
      <td>Row 1</td>
    </tr>
    <tr>
      <td>Row 2</td>
    </tr>
    <tr>
      <td>Row 3</td>
    </tr>
  </tbody>
</table>
```

### JavaScript

```js
function addRow(tableID) {
  // Get a reference to the table
  const tableRef = document.getElementById(tableID);

  // Insert a row at the end of the table
  const newRow = tableRef.insertRow(-1);

  // Insert a cell in the row at index 0
  const newCell = newRow.insertCell(0);

  // Append a text node to the cell
  const newText = document.createTextNode("New bottom row");
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

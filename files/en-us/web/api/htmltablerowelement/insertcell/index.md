---
title: "HTMLTableRowElement: insertCell() method"
short-title: insertCell()
slug: Web/API/HTMLTableRowElement/insertCell
page-type: web-api-instance-method
browser-compat: api.HTMLTableRowElement.insertCell
---

{{APIRef("HTML DOM")}}

The **`insertCell()`** method of the {{domxref("HTMLTableRowElement")}} interface creates a {{HTMLElement("td")}} element, inserts it at the specified position in the given {{HTMLElement("tr")}} element, and returns it.

This method creates and inserts the element directly, without requiring separate calls to methods such as {{domxref("Document.createElement()")}}, {{domxref("Node.insertBefore()")}}, and {{domxref("Node.appendChild()")}}. However, you cannot use `insertCell()` to create a new `<th>` element.

## Syntax

```js-nolint
insertCell()
insertCell(index)
```

### Parameters

- `index` {{optional_inline}}
  - : The index of the new cell in the {{domxref("HTMLTableRowElement.cells", "cells")}} collection. If `index` is `-1` or equal to the number of cells, the cell is appended as the last cell in the row. If `index` is omitted, it defaults to `-1`.

### Return value

An {{domxref("HTMLTableCellElement")}} that references the new cell.

### Exceptions

- `IndexSizeError` {{domxref("DOMException")}}
  - : Thrown if `index` is greater than the number of cells or smaller than `-1`.

## Examples

This example uses `HTMLTableRowElement.insertCell()` to append a new cell to a row.

### HTML

```html
<table>
  <thead>
    <tr>
      <th>C1</th>
      <th>C2</th>
      <th>C3</th>
      <th>C4</th>
      <th>C5</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Cell 1</td>
      <td>Cell 2</td>
    </tr>
  </tbody>
</table>

<button id="add">Add a cell</button>
<button id="remove">Remove last cell</button>
<div>This first row has <output>2</output> cell(s).</div>
```

```css hidden
table {
  border-collapse: collapse;
}

th,
td,
table {
  border: 1px solid black;
}

button {
  margin: 1em 1em 1em 0;
}
```

### JavaScript

```js
// Obtain relevant interface elements
const bodySection = document.querySelectorAll("tbody")[0];
const row = bodySection.rows[0]; // Select the first row of the body section
const cells = row.cells; // The collection is live, therefore always up-to-date
const cellNumberDisplay = document.querySelectorAll("output")[0];

const addButton = document.getElementById("add");
const removeButton = document.getElementById("remove");

function updateCellNumber() {
  cellNumberDisplay.textContent = cells.length;
}

addButton.addEventListener("click", () => {
  // Add a new cell at the end of the first row
  const newCell = row.insertCell();
  newCell.textContent = `Cell ${cells.length}`;

  // Update the row counter
  updateCellNumber();
});

removeButton.addEventListener("click", () => {
  // Delete the row from the body
  row.deleteCell(-1);

  // Update the row counter
  updateCellNumber();
});
```

### Result

{{EmbedLiveSample("Examples", "100%", 175)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLTableElement.insertRow()")}}
- {{domxref("HTMLTableRowElement.deleteCell()")}}
- The HTML element representing cells: {{domxref("HTMLTableCellElement")}}

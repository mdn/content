---
title: "HTMLTableRowElement: deleteCell() method"
short-title: deleteCell()
slug: Web/API/HTMLTableRowElement/deleteCell
page-type: web-api-instance-method
browser-compat: api.HTMLTableRowElement.deleteCell
---

{{APIRef("HTML DOM")}}

The **`deleteCell()`** method of the {{domxref("HTMLTableRowElement")}} interface removes a
specific row cell from a given {{htmlelement("tr")}}.

## Syntax

```js-nolint
deleteCell(index)
```

### Parameters

- `index`
  - : The cell index of the cell to remove. If `index` is `-1` or equal to the number of cells, the last cell of the row is removed.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- `IndexSizeError` {{domxref("DOMException")}}
  - : Thrown if `index` is greater than the number of cells or if it is smaller than `-1`.

## Examples

This example uses {{domxref("HTMLTableRowElement.insertCell()")}} to append a new cell to a
row.

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
- The HTML element representing cells: {{domxref("HTMLTableCellElement")}}

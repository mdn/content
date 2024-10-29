---
title: "HTMLTableSectionElement: rows property"
short-title: rows
slug: Web/API/HTMLTableSectionElement/rows
page-type: web-api-instance-property
browser-compat: api.HTMLTableSectionElement.rows
---

{{APIRef("HTML DOM")}}

The **`rows`** read-only property of the {{domxref("HTMLTableSectionElement")}} interface returns a live {{domxref("HTMLCollection")}} containing the rows in the section. The `HTMLCollection` is live and is automatically updated when rows are added or removed.

## Value

A live {{domxref("HTMLCollection")}} of {{domxref("HTMLTableRowElement")}} objects.

## Examples

In this example, two buttons allow you to add and remove rows from the table body section; it also updates a {{HTMLElement("output")}} element with the number of rows currently in the table.

### HTML

```html
<table>
  <thead>
    <th>Col 1</th>
    <th>Col 2</th>
    <th>Col 3</th>
  </thead>
  <tbody>
    <tr>
      <td>X</td>
      <td>Y</td>
      <td>Z</td>
    </tr>
  </tbody>
</table>
<button id="add">Add a row</button>
<button id="remove">Remove last row</button>
<div>This table's body has <output>1</output> row(s).</div>
```

```css hidden
table {
  border-collapse: collapse;
}

th,
td {
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
const rows = bodySection.rows; // The collection is live, therefore always up-to-date
const rowNumberDisplay = document.querySelectorAll("output")[0];

const addButton = document.getElementById("add");
const removeButton = document.getElementById("remove");

function updateRowNumber() {
  rowNumberDisplay.textContent = rows.length;
}

addButton.addEventListener("click", () => {
  // Add a new row at the end of the body
  const newRow = bodySection.insertRow();

  // Add cells inside the new row
  ["A", "B", "C"].forEach(
    (elt) => (newRow.insertCell().textContent = `${elt}${rows.length}`),
  );

  // Update the row counter
  updateRowNumber();
});

removeButton.addEventListener("click", () => {
  // Delete the row from the body
  bodySection.deleteRow(-1);

  // Update the row counter
  updateRowNumber();
});
```

### Result

{{EmbedLiveSample("Examples", "100%", 175)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("text-align")}}

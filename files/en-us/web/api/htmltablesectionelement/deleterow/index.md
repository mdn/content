---
title: "HTMLTableSectionElement: deleteRow() method"
short-title: deleteRow()
slug: Web/API/HTMLTableSectionElement/deleteRow
page-type: web-api-instance-method
browser-compat: api.HTMLTableSectionElement.deleteRow
---

{{APIRef("HTML DOM")}}

The **`deleteRow()`** method of the {{domxref("HTMLTableSectionElement")}} interface removes a
specific row ({{HtmlElement("tr")}}) from a given {{HtmlElement("section")}}.

## Syntax

```js-nolint
deleteRow(index)
```

### Parameters

- `index`
  - : `index` is an integer representing the row that should be deleted.
    However, the special index `-1` can be used to remove the very last row of
    the section.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- `IndexSizeError` {{domxref("DOMException")}}
  - : Thrown if `index` is greater than or equal to the number of available rows or is a negative value other than `-1`.

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

- {{domxref("HTMLTableElement.deleteRow()")}}

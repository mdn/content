---
title: "HTMLTableSectionElement: insertRow() method"
short-title: insertRow()
slug: Web/API/HTMLTableSectionElement/insertRow
page-type: web-api-instance-method
browser-compat: api.HTMLTableSectionElement.insertRow
---

{{APIRef("HTML DOM")}}

The **`insertRow()`** method of the {{domxref("HTMLTableSectionElement")}} interface inserts a new row
({{HtmlElement("tr")}}) in the given table sectioning element ({{HTMLElement("thead")}}, {{HTMLElement("tfoot")}}, or
{{HTMLElement("tbody")}}), then returns a reference to this new row.

> **Note:** `insertRow()` inserts the row directly into the
> section. The row does not need to be appended separately as would be the case if
> {{domxref("Document.createElement()")}} had been used to create the new
> `<tr>` element.

## Syntax

```js-nolint
insertRow()
insertRow(index)
```

### Parameters

- `index` {{optional_inline}}
  - : The row index of the new row. If `index` is `-1` or equal to
    the number of rows, the row is appended as the last row.
    If `index` is omitted it defaults to `-1`.

### Return value

An {{domxref("HTMLTableRowElement")}} that references the new row.

### Exceptions

- `IndexSizeError` {{domxref("DOMException")}}
  - : Thrown if `index` is greater than the number of rows, or smaller than `-1`.

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

- {{domxref("HTMLTableRowElement.insertCell()")}}
- {{domxref("HTMLTableElement.insertRow()")}}

---
title: "HTMLTableCellElement: cellIndex property"
short-title: cellIndex
slug: Web/API/HTMLTableCellElement/cellIndex
page-type: web-api-instance-property
browser-compat: api.HTMLTableCellElement.cellIndex
---

{{ APIRef("HTML DOM") }}

The **`cellIndex`** read-only property of the {{domxref("HTMLTableCellElement")}} interface
represents the position of a cell within its row ({{htmlelement("tr")}}). The first cell has an index of `0`.

## Value

Returns the index of the cell, or `-1` if the cell is not part of any row.

## Examples

This example adds a label to all the cell numbers of the first row of the `tbody`.

### HTML

```html
<table>
  <thead>
    <tr>
      <th>Item</th>
      <th>Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Bananas</td>
      <td>$2</td>
    </tr>
    <tr>
      <td>Rice</td>
      <td>$2.5</td>
    </tr>
  </tbody>
</table>
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
const rows = document.querySelectorAll("tbody tr");
const cells = rows[0].cells;

for (const cell of cells) {
  cell.textContent = `${cell.textContent} (cell #${cell.cellIndex})`;
}
```

### Result

{{EmbedLiveSample("Examples")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

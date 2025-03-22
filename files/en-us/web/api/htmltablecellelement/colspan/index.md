---
title: "HTMLTableCellElement: colSpan property"
short-title: colSpan
slug: Web/API/HTMLTableCellElement/colSpan
page-type: web-api-instance-property
browser-compat: api.HTMLTableCellElement.colSpan
---

{{ APIRef("HTML DOM") }}

The **`colSpan`** read-only property of the {{domxref("HTMLTableCellElement")}} interface represents the number of columns this cell must span; this lets the cell occupy space across multiple columns of the table. It reflects the [`colspan`](/en-US/docs/Web/HTML/Element/td#colspan) attribute.

## Value

A positive number representing the number of columns.

> [!NOTE]
> When setting a new value, the value is _clamped_ to the nearest strictly positive number.

## Examples

This example provides two buttons to modify the column span of the first cell of the body.

### HTML

```html
<table>
  <thead>
    <tr>
      <th>Col 1</th>
      <th>Col 2</th>
      <th>Col 3</th>
      <th>Col 4</th>
      <th>Col 5</th>
      <th>Col 6</th>
      <th>Col 7</th>
      <th>Col 8</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="2">1</td>
      <td>2</td>
      <td>3</td>
      <td>4</td>
      <td>5</td>
      <td>6</td>
      <td>7</td>
      <td>8</td>
    </tr>
  </tbody>
</table>
<button id="increase">Increase colspan</button>
<button id="decrease">Decrease colspan</button>
<div>The first cell spans <output>2</output> column(s).</div>
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
const cell = document.querySelectorAll("tbody tr td")[0];
const output = document.querySelectorAll("output")[0];

const increaseButton = document.getElementById("increase");
const decreaseButton = document.getElementById("decrease");

increaseButton.addEventListener("click", () => {
  cell.colSpan = cell.colSpan + 1;

  // Update the display
  output.textContent = cell.colSpan;
});

decreaseButton.addEventListener("click", () => {
  cell.colSpan = cell.colSpan - 1;

  // Update the display
  output.textContent = cell.colSpan;
});
```

### Result

{{EmbedLiveSample("Examples", "100%", 175)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLTableCellElement.rowSpan")}}
- {{domxref("HTMLTableColElement.span")}}

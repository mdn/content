---
title: "HTMLTableRowElement: rowIndex property"
short-title: rowIndex
slug: Web/API/HTMLTableRowElement/rowIndex
page-type: web-api-instance-property
browser-compat: api.HTMLTableRowElement.rowIndex
---

{{ APIRef("HTML DOM") }}

The **`HTMLTableRowElement.rowIndex`** read-only property
represents the position of a row in relation to the whole {{HtmlElement("table")}}.

Even when the {{HtmlElement("thead")}}, {{HtmlElement("tbody")}}, and
{{HtmlElement("tfoot")}} elements are out of order in the HTML, browsers render the
table in the right order. Therefore the rows count from `<thead>` to
`<tbody>`, from `<tbody>` to
`<tfoot>`.

## Value

Returns the index of the row, or `-1` if the row is not part of a table.

## Examples

This example uses JavaScript to label all the row numbers in a table.

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
      <td>Oranges</td>
      <td>$8</td>
    </tr>
    <tr>
      <td>Top Sirloin</td>
      <td>$20</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Total</td>
      <td>$30</td>
    </tr>
  </tfoot>
</table>
```

### JavaScript

```js
let rows = document.querySelectorAll("tr");

rows.forEach((row) => {
  let z = document.createElement("td");
  z.textContent = `(row #${row.rowIndex})`;
  row.appendChild(z);
});
```

### Result

{{EmbedLiveSample("Examples")}}

## Browser compatibility

{{Compat}}

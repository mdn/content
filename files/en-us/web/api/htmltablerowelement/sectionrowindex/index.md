---
title: "HTMLTableRowElement: sectionRowIndex property"
short-title: sectionRowIndex
slug: Web/API/HTMLTableRowElement/sectionRowIndex
page-type: web-api-instance-property
browser-compat: api.HTMLTableRowElement.sectionRowIndex
---

{{ APIRef("HTML DOM") }}

The **`sectionRowIndex`** read-only property of the {{domxref("HTMLTableRowElement")}} interface
represents the position of a row within the current section ({{htmlelement("thead")}}, {{htmlelement("tbody")}}, or {{htmlelement("tfoot")}}).

## Value

The index of the row, or `-1` if the row is not part of the section.

## Examples

This example uses JavaScript to label all the row numbers of the `tbody`.

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
const rows = document.querySelectorAll("tbody tr");

rows.forEach((row) => {
  const z = document.createElement("td");
  z.textContent = `(row #${row.sectionRowIndex})`;
  row.appendChild(z);
});
```

### Result

{{EmbedLiveSample("Examples")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLTableRowElement.rowIndex")}}

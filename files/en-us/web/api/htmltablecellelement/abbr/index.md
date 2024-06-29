---
title: "HTMLTableCellElement: abbr property"
short-title: abbr
slug: Web/API/HTMLTableCellElement/abbr
page-type: web-api-instance-property
browser-compat: api.HTMLTableCellElement.abbr
---

{{ APIRef("HTML DOM") }}

The **`abbr`** property of the {{domxref("HTMLTableCellElement")}} interface
indicates an abbreviation associated with the cell. If the cell does not represent a header cell {{HTMLElement("th")}}, it is ignored.

It reflects the `abbr` attribute of the {{HTMLElement("th")}} element.

> **Note:** this property doesn't have a visual effect in browsers. It adds information to help assistive technology like screenreaders that can use this abbreviation

## Value

A string.

## Examples

This example adds prefixes with the abbreviation associated with the row header of each first cell.

### HTML

```html
<table>
  <thead>
    <tr>
      <th abbr="Maker">Manufacturer</th>
      <th abbr="Model">Car model</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Tesla</td>
      <td>3</td>
    </tr>
    <tr>
      <td>BYD</td>
      <td>Dolphin</td>
    </tr>
    <tr>
      <td>VW</td>
      <td>ID.3</td>
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
const rows = document.querySelectorAll("thead tr");
const cells = rows[0].cells;

for (const cell of cells) {
  cell.textContent = `${cell.textContent} (${cell.abbr})`;
}
```

### Results

{{EmbedLiveSample("Examples", "100%", 220)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

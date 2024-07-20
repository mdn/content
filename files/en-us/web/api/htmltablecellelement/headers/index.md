---
title: "HTMLTableCellElement: headers property"
short-title: headers
slug: Web/API/HTMLTableCellElement/headers
page-type: web-api-instance-property
browser-compat: api.HTMLTableCellElement.headers
---

{{ APIRef("HTML DOM") }}

The **`headers`** property of the {{domxref("HTMLTableCellElement")}} interface
contains a list of IDs of {{HTMLElement("th")}} elements that are _headers_ for this specific cell.

## Value

A string containing space-separated IDs.

## Examples

This example lists the ID of the last clicked cell of the table:

### HTML

```html
<table>
  <tr>
    <th rowspan="2" id="h">Homework (ID = h)</th>
    <th colspan="3" id="e">Exams (ID = e)</th>
    <th colspan="3" id="p">Projects (ID = p)</th>
  </tr>
  <tr>
    <th id="e1" headers="e">1 (ID = e1)</th>
    <th id="e2" headers="e">2 (ID = e2)</th>
    <th id="ef" headers="e">Final (ID = ef)</th>
    <th id="p1" headers="p">1 (ID = p1)</th>
    <th id="p2" headers="p">2 (ID = p2)</th>
    <th id="pf" headers="p">Final (ID = pf)</th>
  </tr>
  <tr>
    <td headers="h">15%</td>
    <td headers="e e1">15%</td>
    <td headers="e e2">15%</td>
    <td headers="e ef">20%</td>
    <td headers="p p1">10%</td>
    <td headers="p p2">10%</td>
    <td headers="p pf">15%</td>
  </tr>
</table>
IDs of headers of the last clicked cell: <output>none</output>.
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
const table = document.querySelector("table");
const output = document.querySelector("output");

table.addEventListener("click", (ev) => {
  output.textContent = ev.target.headers ? ev.target.headers : "none";
});
```

### Result

{{EmbedLiveSample("Examples")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

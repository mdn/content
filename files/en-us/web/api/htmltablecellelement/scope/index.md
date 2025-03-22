---
title: "HTMLTableCellElement: scope property"
short-title: scope
slug: Web/API/HTMLTableCellElement/scope
page-type: web-api-instance-property
browser-compat: api.HTMLTableCellElement.scope
---

{{ APIRef("HTML DOM") }}

The **`scope`** property of the {{domxref("HTMLTableCellElement")}} interface
indicates the scope of a {{HTMLElement("th")}} cell.

Header cells can be configured, using the `scope` attribute, to apply to a specified row or column, or to the not-yet-scoped cells within the current row group (that is, the same ancestor {{HTMLElement("thead")}}, {{HTMLElement("tbody")}}, or {{HTMLElement("tfoot")}} element). If no value is specified for `scope`, the header is not associated directly with cells in this way. Permitted values for `scope` are:

> [!NOTE]
> This property doesn't have a visual effect in browsers. It adds semantic information to help assistive technology like screen readers to present the table in a more coherent way.

## Value

One of the following values:

- `col`
  - : The header cell applies to the following cells in the same column (or columns, if `colspan` is used as well), until either the end of the column or another `<th>` in the column establishes a new scope.
- `colgroup`
  - : The header cell applies to all cells in the current column group that do not already have a scope applied to them. This value is only allowed if the cell is in a column group.
- `row`
  - : The header cell applies to the following cells in the same row (or rows, if `rowspan` is used as well), until either the end of the row or another `<th>` in the same row establishes a new scope.
- `rowgroup`
  - : The header cell applies to all cells in the current row group that do not already have a scope applied to them. This value is only allowed if the cell is in a row group.
- The empty string (`""`)
  - : The header cell has no predefined scope; the user agent will establish the scope based on contextual clues.

## Examples

This example adds a label all the cell numbers of the first row of the `tbody`.

### HTML

```html
<table>
  <caption>
    Tallest Dams
  </caption>
  <tr>
    <td></td>
    <th scope="col">Dam</th>
    <th scope="col">Country</th>
    <th scope="col">Height</th>
  </tr>
  <tr>
    <td>1.</td>
    <th scope="row">Jinping-I Dam</th>
    <td>China</td>
    <td>305 m</td>
  </tr>
  <tr>
    <td>2.</td>
    <th scope="row">Nurek Dam</th>
    <td>Tajikistan</td>
    <td>300 m</td>
  </tr>
  <tr>
    <td>3.</td>
    <th scope="row">Lianghekou Dam</th>
    <td>China</td>
    <td>295 m</td>
  </tr>
  <tr>
    <td>4.</td>
    <th scope="row">Xiowan Dam</th>
    <td>China</td>
    <td>292 m</td>
  </tr>
  <tr>
    <td>5.</td>
    <th scope="row">Balhetan Dam</th>
    <td>China</td>
    <td>289 m</td>
  </tr>
  <tr>
    <td>6.</td>
    <th scope="row">Xiluodu Dam</th>
    <td>China</td>
    <td>285.5 m</td>
  </tr>
  <tr>
    <td>7.</td>
    <th scope="row">Grande-Dixence Dam</th>
    <td>Switzerland</td>
    <td>285 m</td>
  </tr>
</table>
```

### Results

{{EmbedLiveSample("Examples", "100%", 220)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

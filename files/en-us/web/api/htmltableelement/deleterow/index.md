---
title: "HTMLTableElement: deleteRow() method"
short-title: deleteRow()
slug: Web/API/HTMLTableElement/deleteRow
page-type: web-api-instance-method
browser-compat: api.HTMLTableElement.deleteRow
---

{{APIRef("HTML DOM")}}

The **`deleteRow()`** method of the {{domxref("HTMLTableElement")}} interface removes a specific row ({{HTMLElement("tr")}}) from a given {{HTMLElement("table")}}.

## Syntax

```js-nolint
deleteRow(index)
```

### Parameters

- `index`
  - : The index of the row to remove in the {{domxref("HTMLTableElement.rows", "rows")}} collection. If `index` is `-1`, the last row is removed.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- `IndexSizeError` {{domxref("DOMException")}}
  - : Thrown if `index` is greater than or equal to the number of rows or smaller than `-1`.

## Examples

This example uses JavaScript to delete a table's second row.

### HTML

```html
<table>
  <tbody>
    <tr>
      <td>Cell 1.1</td>
      <td>Cell 1.2</td>
      <td>Cell 1.3</td>
    </tr>
    <tr>
      <td>Cell 2.1</td>
      <td>Cell 2.2</td>
      <td>Cell 2.3</td>
    </tr>
    <tr>
      <td>Cell 3.1</td>
      <td>Cell 3.2</td>
      <td>Cell 3.3</td>
    </tr>
  </tbody>
</table>
```

### JavaScript

```js
const table = document.querySelector("table");

// Delete second row
table.deleteRow(1);
```

### Result

{{EmbedLiveSample("Examples")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLTableRowElement.deleteCell()")}}
- {{domxref("HTMLTableSectionElement.deleteRow()")}}

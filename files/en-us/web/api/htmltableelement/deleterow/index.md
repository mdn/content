---
title: "HTMLTableElement: deleteRow() method"
short-title: deleteRow()
slug: Web/API/HTMLTableElement/deleteRow
page-type: web-api-instance-method
browser-compat: api.HTMLTableElement.deleteRow
---

{{APIRef("HTML DOM")}}

The **`HTMLTableElement.deleteRow()`** method removes a
specific row ({{HtmlElement("tr")}}) from a given {{HtmlElement("table")}}.

## Syntax

```js-nolint
deleteRow(index)
```

### Parameters

- `index`
  - : `index` is an integer representing the row that should be deleted.
    However, the special index `-1` can be used to remove the very last row of
    a table.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- `IndexSizeError` {{domxref("DOMException")}}
  - : Thrown if `index` is greater than or equal to the number of available rows or is a negative value other than `-1`.

## Examples

This example uses JavaScript to delete a table's second row.

### HTML

```html
<table>
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
</table>
```

### JavaScript

```js
let table = document.querySelector("table");

// Delete second row
table.deleteRow(1);
```

### Result

{{EmbedLiveSample("Examples")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

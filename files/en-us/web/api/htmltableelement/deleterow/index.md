---
title: HTMLTableElement.deleteRow()
slug: Web/API/HTMLTableElement/deleteRow
tags:
  - API
  - HTML DOM
  - HTMLTableElement
  - Method
  - NeedsSpecTable
  - Reference
browser-compat: api.HTMLTableElement.deleteRow
---
{{APIRef("HTML DOM")}}

The **`HTMLTableElement.deleteRow()`** method removes a
specific row ({{HtmlElement("tr")}}) from a given {{HtmlElement("table")}}.

## Syntax

```js
HTMLTableElement.deleteRow(index)
```

### Parameters

- `index`
  - : `index` is an integer representing the row that should be deleted.
    However, the special index `-1` can be used to remove the very last row of
    a table.

### Return value

No return value

### Errors thrown

If the number of the row to delete, specified by the parameter, is greater or equal to
the number of available rows, or if it is negative and not equal to the special index
`-1`, representing the last row of the table, the exception
`INDEX_SIZE_ERR` is thrown.

## Example

This example uses JavaScript to delete a table's second row.

### HTML

```html
<table>
  <tr><td>Cell 1.1</td><td>Cell 1.2</td><td>Cell 1.3</td></tr>
  <tr><td>Cell 2.1</td><td>Cell 2.2</td><td>Cell 2.3</td></tr>
  <tr><td>Cell 3.1</td><td>Cell 3.2</td><td>Cell 3.3</td></tr>
</table>
```

### JavaScript

```js
let table = document.querySelector('table');

// Delete second row
table.deleteRow(1);
```

### Result

{{EmbedLiveSample("Example")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

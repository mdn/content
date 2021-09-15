---
title: HTMLTableElement.deleteTFoot()
slug: Web/API/HTMLTableElement/deleteTFoot
tags:
  - API
  - HTML DOM
  - HTMLTableElement
  - Method
  - NeedsSpecTable
  - Reference
browser-compat: api.HTMLTableElement.deleteTFoot
---
{{APIRef("HTML DOM")}}

The **`HTMLTableElement.deleteTFoot()`** method removes the
{{HTMLElement("tfoot")}} element from a given {{HtmlElement("table")}}.

## Syntax

```js
HTMLTableElement.deleteTFoot();
```

## Example

This example uses JavaScript to delete a table's footer.

### HTML

```html
<table>
  <thead><th>Name</th><th>Score</th></thead>
  <tr><td>Bob</td><td>541</td></tr>
  <tr><td>Jim</td><td>225</td></tr>
  <tfoot><th>Average</th><td>383</td></tfoot>
</table>
```

### JavaScript

```js
let table = document.querySelector('table');
table.deleteTFoot();
```

### Result

{{EmbedLiveSample("Example")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

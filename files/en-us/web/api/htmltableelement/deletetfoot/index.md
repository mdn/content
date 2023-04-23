---
title: "HTMLTableElement: deleteTFoot() method"
short-title: deleteTFoot()
slug: Web/API/HTMLTableElement/deleteTFoot
page-type: web-api-instance-method
browser-compat: api.HTMLTableElement.deleteTFoot
---

{{APIRef("HTML DOM")}}

The **`HTMLTableElement.deleteTFoot()`** method removes the
{{HTMLElement("tfoot")}} element from a given {{HtmlElement("table")}}.

## Syntax

```js-nolint
deleteTFoot()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

## Examples

This example uses JavaScript to delete a table's footer.

### HTML

```html
<table>
  <thead>
    <th>Name</th>
    <th>Score</th>
  </thead>
  <tr>
    <td>Bob</td>
    <td>541</td>
  </tr>
  <tr>
    <td>Jim</td>
    <td>225</td>
  </tr>
  <tfoot>
    <th>Average</th>
    <td>383</td>
  </tfoot>
</table>
```

### JavaScript

```js
let table = document.querySelector("table");
table.deleteTFoot();
```

### Result

{{EmbedLiveSample("Examples")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

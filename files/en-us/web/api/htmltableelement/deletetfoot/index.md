---
title: "HTMLTableElement: deleteTFoot() method"
short-title: deleteTFoot()
slug: Web/API/HTMLTableElement/deleteTFoot
page-type: web-api-instance-method
browser-compat: api.HTMLTableElement.deleteTFoot
---

{{APIRef("HTML DOM")}}

The **`deleteTFoot()`** method of the {{domxref("HTMLTableElement")}} interface removes the first {{HTMLElement("tfoot")}} element child from a given {{HTMLElement("table")}}, if any.

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
    <tr>
      <th>Name</th>
      <th>Score</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Bob</td>
      <td>541</td>
    </tr>
    <tr>
      <td>Jim</td>
      <td>225</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th>Average</th>
      <td>383</td>
    </tr>
  </tfoot>
</table>
```

### JavaScript

```js
const table = document.querySelector("table");
table.deleteTFoot();
```

### Result

{{EmbedLiveSample("Examples")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLTableElement.createTFoot()")}}
- {{domxref("HTMLTableElement.deleteCaption()")}}
- {{domxref("HTMLTableElement.deleteTHead()")}}

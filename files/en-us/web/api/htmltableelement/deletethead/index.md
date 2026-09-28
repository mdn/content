---
title: "HTMLTableElement: deleteTHead() method"
short-title: deleteTHead()
slug: Web/API/HTMLTableElement/deleteTHead
page-type: web-api-instance-method
browser-compat: api.HTMLTableElement.deleteTHead
---

{{APIRef("HTML DOM")}}

The **`deleteTHead()`** method of the {{domxref("HTMLTableElement")}} interface removes the first {{HTMLElement("thead")}} element child from a given {{HTMLElement("table")}}, if any.

## Syntax

```js-nolint
deleteTHead()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

## Examples

This example uses JavaScript to delete a table's header.

### HTML

```html
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Occupation</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Bob</td>
      <td>Plumber</td>
    </tr>
    <tr>
      <td>Jim</td>
      <td>Roofer</td>
    </tr>
  </tbody>
</table>
```

### JavaScript

```js
const table = document.querySelector("table");
table.deleteTHead();
```

### Result

{{EmbedLiveSample("Examples")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLTableElement.createTHead()")}}
- {{domxref("HTMLTableElement.deleteCaption()")}}
- {{domxref("HTMLTableElement.deleteTFoot()")}}

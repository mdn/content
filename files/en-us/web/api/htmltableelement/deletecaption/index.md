---
title: "HTMLTableElement: deleteCaption() method"
short-title: deleteCaption()
slug: Web/API/HTMLTableElement/deleteCaption
page-type: web-api-instance-method
browser-compat: api.HTMLTableElement.deleteCaption
---

{{APIRef("HTML DOM")}}

The **`deleteCaption()`** method of the {{domxref("HTMLTableElement")}} interface removes the first {{HTMLElement("caption")}} element child from a given {{HTMLElement("table")}}, if any.

## Syntax

```js-nolint
deleteCaption()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

## Examples

This example uses JavaScript to delete a table's caption.

### HTML

```html
<table>
  <caption>
    This caption will be deleted!
  </caption>
  <tbody>
    <tr>
      <td>Cell 1.1</td>
      <td>Cell 1.2</td>
    </tr>
    <tr>
      <td>Cell 2.1</td>
      <td>Cell 2.2</td>
    </tr>
  </tbody>
</table>
```

### JavaScript

```js
const table = document.querySelector("table");
table.deleteCaption();
```

### Result

{{EmbedLiveSample("Examples")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLTableElement.createCaption()")}}
- {{domxref("HTMLTableElement.deleteTFoot()")}}
- {{domxref("HTMLTableElement.deleteTHead()")}}

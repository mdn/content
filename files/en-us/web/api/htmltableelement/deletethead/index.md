---
title: "HTMLTableElement: deleteTHead() method"
short-title: deleteTHead()
slug: Web/API/HTMLTableElement/deleteTHead
page-type: web-api-instance-method
browser-compat: api.HTMLTableElement.deleteTHead
---

{{APIRef("HTML DOM")}}

The **`HTMLTableElement.deleteTHead()`** removes the
{{HTMLElement("thead")}} element from a given {{HtmlElement("table")}}.

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
    <th>Name</th>
    <th>Occupation</th>
  </thead>
  <tr>
    <td>Bob</td>
    <td>Plumber</td>
  </tr>
  <tr>
    <td>Jim</td>
    <td>Roofer</td>
  </tr>
</table>
```

### JavaScript

```js
let table = document.querySelector("table");
table.deleteTHead();
```

### Result

{{EmbedLiveSample("Examples")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

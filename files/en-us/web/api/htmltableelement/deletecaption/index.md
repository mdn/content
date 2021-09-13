---
title: HTMLTableElement.deleteCaption()
slug: Web/API/HTMLTableElement/deleteCaption
tags:
  - API
  - HTML DOM
  - HTMLTableElement
  - Method
  - NeedsSpecTable
  - Reference
browser-compat: api.HTMLTableElement.deleteCaption
---
{{APIRef("HTML DOM")}}

The **`HTMLTableElement.deleteCaption()`** method removes the
{{HtmlElement("caption")}} element from a given {{HtmlElement("table")}}. If there is no
`<caption>` element associated with the table, this method does
nothing.

## Syntax

```js
HTMLTableElement.deleteCaption()
```

## Example

This example uses JavaScript to delete a table's caption.

### HTML

```html
<table>
  <caption>This caption will be deleted!</caption>
  <tr><td>Cell 1.1</td><td>Cell 1.2</td></tr>
  <tr><td>Cell 2.1</td><td>Cell 2.2</td></tr>
</table>
```

### JavaScript

```js
let table = document.querySelector('table');
table.deleteCaption();
```

### Result

{{EmbedLiveSample("Example")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

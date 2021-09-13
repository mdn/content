---
title: HTMLTableElement.createCaption()
slug: Web/API/HTMLTableElement/createCaption
tags:
  - API
  - HTML DOM
  - HTMLTableElement
  - Method
  - NeedsSpecTable
  - Reference
browser-compat: api.HTMLTableElement.createCaption
---
{{APIRef("HTML DOM")}}

The **`HTMLTableElement.createCaption()`** method returns the
{{HtmlElement("caption")}} element associated with a given {{HtmlElement("table")}}.
If no `<caption>` element exists on the table, this method creates
it, and then returns it.

> **Note:** If no caption exists, `createCaption()` inserts a
> new caption directly into the table. The caption does not need to be added
> separately as would be the case if {{domxref("Document.createElement()")}} had
> been used to create the new `<caption>` element.

## Syntax

```js
HTMLTableElement = table.createCaption();
```

### Return value

{{domxref("HTMLTableCaptionElement")}}

## Example

This example uses JavaScript to add a caption to a table that initially lacks one.

### HTML

```html
<table>
  <tr><td>Cell 1.1</td><td>Cell 1.2</td><td>Cell 1.3</td></tr>
  <tr><td>Cell 2.1</td><td>Cell 2.2</td><td>Cell 2.3</td></tr>
</table>
```

### JavaScript

```js
let table = document.querySelector('table');
let caption = table.createCaption();
caption.textContent = 'This caption was created by JavaScript!';
```

### Result

{{EmbedLiveSample("Example")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

---
title: "HTMLOListElement: reversed property"
short-title: reversed
slug: Web/API/HTMLOListElement/reversed
page-type: web-api-instance-property
browser-compat: api.HTMLOListElement.reversed
---

{{ApiRef("HTML DOM")}}

The **`reversed`** property of the {{domxref("HTMLOListElement")}} interface indicates order of a list.

It reflects the [`reversed`](/en-US/docs/Web/HTML/Element/ol#reversed) attribute of the {{HTMLElement("ol")}} element.

## Value

A `boolean` value. If `true`, it indicates that the list is a descending list (..., 3, 2, 1).

## Examples

### HTML

```html
<ol id="order-list">
  <li>Fee</li>
  <li>Fi</li>
  <li>Fo</li>
  <li>Fum</li>
</ol>
```

### JavaScript

```js
const olElement = document.querySelector("#order-list");
console.log(olElement.reversed); // Output: "false"
olElement.reversed = "true";
console.log(olElement.reversed); // Output: "true"
```

### Result

{{EmbedLiveSample("Examples", 400, 100)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

---
title: "HTMLOListElement: start property"
short-title: start
slug: Web/API/HTMLOListElement/start
page-type: web-api-instance-property
browser-compat: api.HTMLOListElement.start
---

{{ApiRef("HTML DOM")}}

The **`start`** property of the {{domxref("HTMLOListElement")}} interface indicates starting value of the ordered list, with default value of 1.

It reflects the [`start`](/en-US/docs/Web/HTML/Element/ol#start) attribute of the {{HTMLElement("ol")}} element.

> [!NOTE]
> The `start` property value is independent of the {{domxref("HTMLOListElement.type")}} property; it is always numeric, even when type is letters or Roman numerals.

## Value

A `long` value.

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
console.log(olElement.start); // Output: "1"
olElement.start = "11";
console.log(olElement.start); // Output: "11"
```

### Result

{{EmbedLiveSample("Examples", 400, 100)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

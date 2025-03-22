---
title: "HTMLOListElement: type property"
short-title: type
slug: Web/API/HTMLOListElement/type
page-type: web-api-instance-property
browser-compat: api.HTMLOListElement.type
---

{{ApiRef("HTML DOM")}}

The **`type`** property of the {{domxref("HTMLOListElement")}} interface indicates the kind of marker to be used to display ordered list.

It reflects the [`type`](/en-US/docs/Web/HTML/Element/ol#type) attribute of the {{HTMLElement("ol")}} element.

> [!NOTE]
> The `type` can be defined in CSS with the {{CSSxRef("list-style-type")}} property. The `list-style-type` property provides many more values.

## Value

A string representing the type.

Its possible values are listed in the attribute [marker types](/en-US/docs/Web/HTML/Element/ol#type) section.

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
// if type is not specified then return empty string
console.log(olElement.type); // Output: ""
olElement.type = "i"; // Using roman numeral type
console.log(olElement.type); // Output: "i"
```

### Result

{{EmbedLiveSample("Examples", 400, 100)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

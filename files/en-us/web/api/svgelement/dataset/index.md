---
title: "SVGElement: dataset property"
short-title: dataset
slug: Web/API/SVGElement/dataset
page-type: web-api-instance-property
browser-compat: api.SVGElement.dataset
---

{{APIRef("SVG")}}

The **`dataset`** read-only property of the {{DOMxRef("SVGElement")}} interface provides read/write access to [custom data attributes](/en-US/docs/Web/SVG/Attribute/data-*) (`data-*`) on elements. It exposes a map of strings ({{domxref("DOMStringMap")}}) with an entry for each `data-*` attribute.

For more information on the behavior of `dataset`, see {{domxref("HTMLElement.dataset")}}.

## Value

A {{domxref("DOMStringMap")}}.

## Examples

```html
<div>
  <svg viewBox="0 0 120 30" xmlns="http://www.w3.org/2000/svg">
    <text x="20" y="20" id="user" data-id="1234567890" data-user="carinaanand">
      Carina Anand
    </text>
  </svg>
</div>
```

```js
const el = document.querySelector("#user");

console.log(el.dataset.id); // "1234567890"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`data-*`](/en-US/docs/Web/SVG/Attribute/data-*) SVG attributes
- [Using data attributes](/en-US/docs/Learn/HTML/Howto/Use_data_attributes)

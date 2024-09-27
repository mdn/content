---
title: "Element: ariaOrientation property"
short-title: ariaOrientation
slug: Web/API/Element/ariaOrientation
page-type: web-api-instance-property
browser-compat: api.Element.ariaOrientation
---

{{APIRef("DOM")}}

The **`ariaOrientation`** property of the {{domxref("Element")}} interface reflects the value of the [`aria-orientation`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-orientation) attribute, which indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.

## Value

A string with one of the following values:

- `"horizontal"`
  - : The element is horizontal.
- `"vertical"`
  - : The element is vertical.
- `"undefined"`
  - : The element's orientation is unknown.

## Examples

In this example the [`aria-orientation`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-orientation) attribute on the element with an ID of `handle_zoomSlider` is set to `"vertical"`. Using `ariaOrientation` we update the value to `"horizontal"`.

```html
<div
  id="handle_zoomSlider"
  role="slider"
  aria-orientation="vertical"
  aria-valuemin="0"
  aria-valuemax="17"
  aria-valuenow="14"
  tabindex="0">
  <span>11</span>
</div>
```

```js
let el = document.getElementById("handle_zoomSlider");
console.log(el.ariaOrientation); // "vertical"
el.ariaOrientation = "horizontal";
console.log(el.ariaOrientation); // "horizontal"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

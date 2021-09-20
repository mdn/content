---
title: Element.ariaOrientation
slug: Web/API/Element/ariaOrientation
tags:
  - API
  - Property
  - Reference
  - ariaOrientation
  - AriaAttributes
  - AriaMixin
  - Element
browser-compat: api.Element.ariaOrientation
---
{{DefaultAPISidebar("DOM")}}

The **`ariaOrientation`** property of the {{domxref("Element")}} interface reflects the value of the [`aria-orientation`](/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-orientation_attribute) attribute, which indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.

## Syntax

    var ariaOrientation = element.ariaOrientation;
    element.ariaOrientation = ariaOrientation

### Value

A {{domxref("DOMString")}} with one of the following values:

- `"horizontal"`
  - : The element is horizontal.
- `"vertical"`
  - : The element is vertical.
- `"undefined"`
  - : The element's orientation is unknown.

## Examples

In this example the `aria-orientation` attribute on the element with an ID of `handle_zoomSlider` is set to "`vertical`". Using `ariaOrientation` we update the value to "`horizontal`".

```html
<div id="handle_zoomSlider"
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
let el = document.getElementById('handle_zoomSlider');
console.log(el.ariaOrientation); // "vertical"
el.ariaOrientation = "horizontal"
console.log(el.ariaOrientation); // "horizontal"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

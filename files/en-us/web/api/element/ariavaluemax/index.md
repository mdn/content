---
title: Element.ariaValueMax
slug: Web/API/Element/ariaValueMax
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - ariaValueMax
  - AriaAttributes
  - AriaMixin
  - Element
browser-compat: api.Element.ariaValueMax
---
{{DefaultAPISidebar("DOM")}}

The **`ariaValueMax`** property of the {{domxref("Element")}} interface reflects the value of the [`aria-valuemax`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax) attribute, which defines the maximum allowed value for a range widget.

## Value

A string which contains a number.

## Examples

In this example the [`aria-valuemax`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax) attribute on the element with an ID of `slider` is set to "7". Using `ariaValueMax` we update the value to "6".

```html
<div role="slider" aria-valuenow="1"
  aria-valuemin="1" aria-valuemax="7"
  aria-valuetext="Sunday">
```

```js
let el = document.getElementById('slider');
console.log(el.ariaValueMax); // 7
el.ariaValueMax = "6";
console.log(el.ariaValueMax); // 6
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

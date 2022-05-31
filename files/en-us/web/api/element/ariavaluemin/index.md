---
title: Element.ariaValueMin
slug: Web/API/Element/ariaValueMin
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - ariaValueMin
  - AriaAttributes
  - AriaMixin
  - Element
browser-compat: api.Element.ariaValueMin
---
{{DefaultAPISidebar("DOM")}}

The **`ariaValueMin`** property of the {{domxref("Element")}} interface reflects the value of the [`aria-valuemin`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuemin) attribute, which defines the minimum allowed value for a range widget.

## Value

A string which contains a number.

## Examples

In this example the `aria-valuemin` attribute on the element with an ID of `slider` is set to "1". Using `ariaValueMin` we update the value to "2".

```html
<div role="slider" aria-valuenow="1"
  aria-valuemin="1" aria-valuemax="7"
  aria-valuetext="Sunday">
```

```js
let el = document.getElementById('slider');
console.log(el.ariaValueMin); // 1
el.ariaValueMin = "2";
console.log(el.ariaValueMin); // 2
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

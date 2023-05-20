---
title: "Element: ariaValueNow property"
short-title: ariaValueNow
slug: Web/API/Element/ariaValueNow
page-type: web-api-instance-property
browser-compat: api.Element.ariaValueNow
---

{{DefaultAPISidebar("DOM")}}

The **`ariaValueNow`** property of the {{domxref("Element")}} interface reflects the value of the [`aria-valuenow`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuenow) attribute, which defines the current value for a range widget.

## Value

A string which contains a number.

## Examples

In this example the [`aria-valuenow`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuenow) attribute on the element with an ID of `slider` is set to "1". Using `ariaValueNow` we update the value to "2".

```html
<div
  role="slider"
  aria-valuenow="1"
  aria-valuemin="1"
  aria-valuemax="7"
  aria-valuetext="Sunday"></div>
```

```js
let el = document.getElementById("slider");
console.log(el.ariaValueNow); // 1
el.ariaValueNow = "2";
console.log(el.ariaValueNow); // 2
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

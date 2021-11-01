---
title: Element.ariaValueNow
slug: Web/API/Element/ariaValueNow
tags:
  - API
  - Property
  - Reference
  - ariaValueNow
  - AriaAttributes
  - AriaMixin
  - Element
browser-compat: api.Element.ariaValueNow
---
{{DefaultAPISidebar("DOM")}}

The **`ariaValueNow`** property of the {{domxref("Element")}} interface reflects the value of the [`aria-valuenow`](/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-valuenow_attribute) attribute, which defines the current value for a range widget.

## Syntax

    var ariaValueNow = element.ariaValueNow;
    element.ariaValueNow = ariaValueNow

### Value

A {{domxref("DOMString")}} which contains a number.

## Examples

In this example the `aria-valuenow` attribute on the element with an ID of `slider` is set to "1". Using `ariaValueNow` we update the value to "2".

```html
<div role="slider" aria-valuenow="1"
  aria-valuemin="1" aria-valuemax="7"
	aria-valuetext="Sunday">
```

```js
let el = document.getElementById('slider');
console.log(el.ariaValueNow); // 1
el.ariaValueNow = "2";
console.log(el.ariaValueNow); // 2
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

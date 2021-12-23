---
title: Element.ariaValueText
slug: Web/API/Element/ariaValueText
tags:
  - API
  - Property
  - Reference
  - ariaValueText
  - AriaAttributes
  - AriaMixin
  - Element
browser-compat: api.Element.ariaValueText
---
{{DefaultAPISidebar("DOM")}}

The **`ariaValueText`** property of the {{domxref("Element")}} interface reflects the value of the [`aria-valuetext`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuetext) attribute, which defines the human readable text alternative of aria-valuenow for a range widget.

## Syntax

```js
var ariaValueText = element.ariaValueText;
element.ariaValueText = ariaValueText
```

### Value

A {{domxref("DOMString")}}.

## Examples

In this example the `aria-valuetext` attribute on the element with an ID of `slider` is set to "Sunday" to give a human-readable value for the range. Using `ariaValueText` we update the value to "Monday".

```html
<div role="slider" aria-valuenow="1"
  aria-valuemin="1" aria-valuemax="7"
	aria-valuetext="Sunday">
```

```js
let el = document.getElementById('slider');
console.log(el.ariaValueText); // Sunday
el.ariaValueText = "Monday";
console.log(el.ariaValueText); // Monday
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

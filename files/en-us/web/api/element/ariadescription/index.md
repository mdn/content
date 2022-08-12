---
title: Element.ariaDescription
slug: Web/API/Element/ariaDescription
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - ariaDescription
  - AriaAttributes
  - AriaMixin
  - Element
browser-compat: api.Element.ariaDescription
---
{{DefaultAPISidebar("DOM")}}

The **`ariaDescription`** property of the {{domxref("Element")}} interface reflects the value of the [`aria-description`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-description) attribute, which defines a string value that describes or annotates the current element.

## Value

A string.

## Examples

In this example the `aria-description` attribute on the element with an ID of `close-button` is set to the string "A longer description of the function of this element". Using `ariaDescription` we can update the value.

```html
<button aria-label="Close" aria-description="A longer description of the function of this element" id="close-button">X</button>
```

```js
let el = document.getElementById('close-button');
console.log(el.ariaDescription); // "A longer description of the function of this element"
el.ariaDescription = "A different description"
console.log(el.ariaDescription); // "A different description"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

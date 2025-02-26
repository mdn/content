---
title: "Element: ariaLabel property"
short-title: ariaLabel
slug: Web/API/Element/ariaLabel
page-type: web-api-instance-property
browser-compat: api.Element.ariaLabel
---

{{APIRef("DOM")}}

The **`ariaLabel`** property of the {{domxref("Element")}} interface reflects the value of the [`aria-label`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label) attribute, which defines a string value that labels the current element.

## Value

A string or `null`.

## Examples

In this example the [`aria-label`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label) attribute on the element with an ID of `close-button` is set to "Close". Using `ariaLabel` we update the value to "Close dialog".

```html
<button aria-label="Close" id="close-button">X</button>
```

```js
let el = document.getElementById("close-button");
console.log(el.ariaLabel); // "Close"
el.ariaLabel = "Close dialog";
console.log(el.ariaLabel); // "Close dialog"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

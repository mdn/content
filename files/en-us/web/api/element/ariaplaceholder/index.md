---
title: "Element: ariaPlaceholder property"
short-title: ariaPlaceholder
slug: Web/API/Element/ariaPlaceholder
page-type: web-api-instance-property
browser-compat: api.Element.ariaPlaceholder
---

{{DefaultAPISidebar("DOM")}}

The **`ariaPlaceholder`** property of the {{domxref("Element")}} interface reflects the value of the `aria-placeholder` attribute, which defines a short hint intended to aid the user with data entry when the control has no value.

> **Note:** Where possible use an HTML {{htmlelement("input")}} element with `type="text"` or a {{htmlelement("textarea")}} as these have built in semantics and do not require ARIA attributes.

## Value

A string.

## Examples

In this example the `aria-placeholder` attribute on the element with an ID of `txtBoxInput` has been set to a string. Using `ariaPlaceholder` we update the string to another value.

```html
<div id="txtboxLabel">Enter your five-digit zipcode</div>
<div
  role="textbox"
  id="txtBoxInput"
  contenteditable="true"
  aria-placeholder="5-digit zipcode"
  aria-labelledby="txtboxLabel"></div>
```

```js
let el = document.getElementById("txtBoxInput");
console.log(el.ariaPlaceholder); // "5-digit zipcode"
el.ariaPlaceholder = "12345";
console.log(el.ariaPlaceholder); // "12345"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [ARIA: textbox role](/en-US/docs/Web/Accessibility/ARIA/Roles/textbox_role)

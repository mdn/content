---
title: "HTMLInputElement: defaultChecked property"
short-title: defaultChecked
slug: Web/API/HTMLInputElement/defaultChecked
page-type: web-api-instance-property
browser-compat: api.HTMLInputElement.defaultChecked
---

{{ APIRef("HTML DOM") }}

The **`defaultChecked`** property of the {{DOMxRef("HTMLInputElement")}} interface specifies the default checkedness state of the element. This property represents the {{htmlelement("input")}} element's default[`checked`](/en-US/docs/Web/HTML/Element/input#checked) state as originally specified in HTML that created this object.

The boolean `checked` attribute is valid for the `radio`([`<input type="radio">`](/en-US/docs/Web/HTML/Element/input/radio)) and `checkbox` ([`<input type="checkbox">`](/en-US/docs/Web/HTML/Element/input/checkbox)) input types.

## Value

A boolean.

## Examples

```js
const inputElement = document.getElementById("contactMail");
console.log(inputElement.defaultChecked);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTMLElement("input")}}
- {{cssxref(":default")}} pseudo-class
- {{cssxref(":checked")}} pseudo-class

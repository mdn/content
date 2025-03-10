---
title: "HTMLInputElement: defaultChecked property"
short-title: defaultChecked
slug: Web/API/HTMLInputElement/defaultChecked
page-type: web-api-instance-property
browser-compat: api.HTMLInputElement.defaultChecked
---

{{ APIRef("HTML DOM") }}

The **`defaultChecked`** property of the {{DOMxRef("HTMLInputElement")}} interface specifies the default checkedness state of the element. This property reflects the {{htmlelement("input")}} element's [`checked`](/en-US/docs/Web/HTML/Element/input#checked) attribute.

The boolean [`checked`](/en-US/docs/Web/HTML/Element/input#checked) attribute is valid for the `radio` ([`<input type="radio">`](/en-US/docs/Web/HTML/Element/input/radio)) and `checkbox` ([`<input type="checkbox">`](/en-US/docs/Web/HTML/Element/input/checkbox)) input types. The presence of the attribute sets the `defaultChecked` property to `true`.

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

---
title: "HTMLInputElement: checked property"
short-title: checked
slug: Web/API/HTMLInputElement/checked
page-type: web-api-instance-property
browser-compat: api.HTMLInputElement.checked
---

{{ APIRef("HTML DOM") }}

The **`checked`** property of the {{DOMxRef("HTMLInputElement")}} interface specifies the current checkedness of the element; that is, whether the form control is checked or not.

The boolean `checked` property is relevant to the `radio` ([`<input type="radio">`](/en-US/docs/Web/HTML/Element/input/radio)) and `checkbox` ([`<input type="checkbox">`](/en-US/docs/Web/HTML/Element/input/checkbox)) input types.

The presence of the HTML [`checked`](/en-US/docs/Web/HTML/Element/input#checked) attribute indicates the checkbox is checked by default. It does not indicate whether this checkbox is currently checked: if the checkbox's state is changed, this content attribute does not reflect the change; only the `HTMLInputElement`'s `checked` IDL property is updated. The `checked` attribute is reflected by the {{domxref("HTMLInputElement.defaultChecked", "defaultChecked")}} property.

When a radio input `checked` property is `true`, all other radio inputs with the same {{DOMxRef("HTMLInputElement.name", "name")}} are `false`. If any radio button in a same-named group of radio buttons is {{DOMxRef("HTMLInputElement.required", "required")}}, as long as one button in the group is `checked`, the {{domxref('ValidityState')}} object's read-only {{domxref('ValidityState.valueMissing','valueMissing')}} property for each radio button in the group will be `false`.

A checkbox's value is only included in the submitted data upon form submission if `checked` is true. The value of the {{DOMxRef("HTMLInputElement.indeterminate")}} property has no effect on a checkbox's `checked` value.

## Value

A boolean.

## Examples

```js
const inputElement = document.getElementById("contactMail");
console.log(inputElement.checked);
inputElement.checked = true;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTMLElement("input")}}
- {{DOMXref("HTMLInputElement.validity")}}
- {{cssxref(":checked")}} pseudo-class

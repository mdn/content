---
title: "HTMLButtonElement: validity property"
short-title: validity
slug: Web/API/HTMLButtonElement/validity
page-type: web-api-instance-property
browser-compat: api.HTMLButtonElement.validity
---

{{APIRef("HTML DOM")}}

The **`validity`** read-only property of the {{domxref("HTMLButtonElement")}} interface returns a {{domxref("ValidityState")}} object that represents the validity states this element is in.

## Value

A {{domxref("ValidityState")}} object.

## Examples

The following example demonstrates that a `<button>` is in an invalid state when a {{domxref("ValidityState/customError", "customError")}} is set; in this state, the `validityState`'s `validity` property is `false`, while {{domxref("HTMLButtonElement/checkValidity", "checkValidity()")}} returns `true` if the button's {{domxref("HTMLButtonElement/type", "type")}} is not `"submit"`, because such buttons are not candidates for [constraint validation](/en-US/docs/Web/HTML/Constraint_validation).

```js
const button = document.getElementById("myButton");
button.setCustomValidity("This button is invalid.");
const validityState = button.validity;
console.log(validityState.valid); // false
console.log(validityState.customError); // true
console.log(button.checkValidity()); // false if the button is of the "submit" type, true otherwise
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLButtonElement.checkValidity()")}}
- {{HTMLElement("button")}}
- {{HTMLElement("form")}}
- [Learn: Client-side form validation](/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Guide: Constraint validation](/en-US/docs/Web/HTML/Constraint_validation)

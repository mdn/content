---
title: "HTMLObjectElement: validity property"
short-title: validity
slug: Web/API/HTMLObjectElement/validity
page-type: web-api-instance-property
browser-compat: api.HTMLObjectElement.validity
---

{{APIRef("HTML DOM")}}

The **`validity`** read-only property of the {{domxref("HTMLObjectElement")}} interface returns a {{domxref("ValidityState")}} object that represents the validity states this element is in. Although {{HTMLElement("object")}} elements are never candidates for [constraint validation](/en-US/docs/Web/HTML/Constraint_validation), the validity state may still be invalid if a custom validity message has been set.

## Value

A {{domxref("ValidityState")}} object.

## Examples

The following example demonstrates that an `<object>` is in an invalid state when a {{domxref("ValidityState/customError", "customError")}} is set; in this state, {{domxref("HTMLObjectElement/checkValidity", "checkValidity()")}} returns `true` while the `validityState`'s `validity` property is `false`.

```js
const objectElem = document.getElementById("myObjectElm");
objectElem.setCustomValidity("This object element is invalid.");
const validityState = objectElem.validity;
console.log(validityState.valid); // false
console.log(validityState.customError); // true
console.log(objectElem.checkValidity()); // true
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLObjectElement.checkValidity()")}}
- {{HTMLElement("object")}}
- {{HTMLElement("form")}}
- [Learn: Client-side form validation](/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Guide: Constraint validation](/en-US/docs/Web/HTML/Constraint_validation)

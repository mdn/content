---
title: "HTMLFieldSetElement: validity property"
short-title: validity
slug: Web/API/HTMLFieldSetElement/validity
page-type: web-api-instance-property
browser-compat: api.HTMLFieldSetElement.validity
---

{{APIRef("HTML DOM")}}

The **`validity`** read-only property of the {{domxref("HTMLFieldSetElement")}} interface returns a {{domxref("ValidityState")}} object that represents the validity states this element is in. Although {{HTMLElement("fieldset")}} elements are never candidates for [constraint validation](/en-US/docs/Web/HTML/Constraint_validation), the validity state may still be invalid if a custom validity message has been set.

> [!NOTE]
> The {{cssxref(":valid")}} and {{cssxref(":invalid")}} CSS pseudo-classes are applied to `<fieldset>` elements based on the validity of its descendant form controls, not the fieldset itself.

## Value

A {{domxref("ValidityState")}} object.

## Examples

The following example demonstrates that a `<fieldset>` is in an invalid state when a {{domxref("ValidityState/customError", "customError")}} is set; in this state, {{domxref("HTMLFieldSetElement/checkValidity", "checkValidity()")}} returns `true` while the `validityState`'s `validity` property is `false`.

```js
const fieldSet = document.getElementById("myFieldSet");
fieldSet.setCustomValidity("This fieldset is invalid.");
const validityState = fieldSet.validity;
console.log(validityState.valid); // false
console.log(validityState.customError); // true
console.log(fieldSet.checkValidity()); // true
```

> [!NOTE]
> The {{cssxref(":valid")}} and {{cssxref(":invalid")}} CSS pseudo-classes are applied to `<fieldset>` elements based on the validity of its descendant form controls, not the fieldset itself.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLFieldSetElement.checkValidity()")}}
- {{HTMLElement("fieldset")}}
- {{HTMLElement("form")}}
- [Learn: Client-side form validation](/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Guide: Constraint validation](/en-US/docs/Web/HTML/Constraint_validation)

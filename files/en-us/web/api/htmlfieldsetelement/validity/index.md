---
title: "HTMLFieldSetElement: validity property"
short-title: validity
slug: Web/API/HTMLFieldSetElement/validity
page-type: web-api-instance-property
browser-compat: api.HTMLFieldSetElement.validity
---

{{APIRef("HTML DOM")}}

The **`validity`** read-only property of the {{domxref("HTMLFieldSetElement")}} interface returns a {{domxref("ValidityState")}} with the validity states that this element is in. Although {{HTMLElement("fieldset")}} elements are never candidates for [constraint validation](/en-US/docs/Web/HTML/Constraint_validation), the validity state may still be invalid if a custom validity message has been set.

> [!NOTE]
> The {{cssxref(":valid")}} and {{cssxref(":invalid")}} CSS pseudo-classes are applied to `<fieldset>` elements based on the validity of its descendant form controls, not the fieldset itself.

## Value

A {{domxref("ValidityState")}} object.

## Examples

The following example shows how you can have a `<fieldset>` in an invalid state, even when {{domxref("HTMLFieldSetElement/checkValidity", "checkValidity()")}} returns `true`.

```js
const fieldSet = document.getElementById("myFieldSet");
fieldSet.setCustomValidity("This fieldset is invalid.");
console.log(fieldSet.validity.valid); // false
console.log(fieldSet.validity.checkValidity()); // true
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLFieldSetElement.checkValidity()")}}
- {{HTMLElement("fieldset")}}
- {{HTMLElement("form")}}
- [Learn: Client-side form validation](/en-US/docs/Learn/Forms/Form_validation)
- [Guide: Constraint validation](/en-US/docs/Web/HTML/Constraint_validation)

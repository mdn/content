---
title: "ValidityState: valueMissing property"
short-title: valueMissing
slug: Web/API/ValidityState/valueMissing
page-type: web-api-instance-property
browser-compat: api.ValidityState.valueMissing
---

{{APIRef("HTML DOM")}}

The read-only **`valueMissing`** property of a **[`ValidityState`](/en-US/docs/Web/API/ValidityState)** object indicates if a [`required`](/en-US/docs/Web/HTML/Attributes/required) control, such as an {{HTMLElement("input")}}, {{HTMLElement("select")}}, or {{HTMLElement("textarea")}}, has an empty value.

If the `required` attribute is set, and no {{HTMLElement("option")}} is selected or a `<textarea>` or user-editable `<input>` is empty, the `valueMissing` property will be `true`. The property is only `true` if the field is required and has no value; if the field is not required, or if the field is required and has a value, the value is `false`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Constraint validation](/en-US/docs/Web/HTML/Constraint_validation)
- [Forms: Data form validation](/en-US/docs/Learn/Forms/Form_validation)
- [Regular Expressions](/en-US/docs/Web/JavaScript/Guide/Regular_expressions)

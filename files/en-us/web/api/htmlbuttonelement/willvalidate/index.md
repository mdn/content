---
title: "HTMLButtonElement: willValidate property"
short-title: willValidate
slug: Web/API/HTMLButtonElement/willValidate
page-type: web-api-instance-property
browser-compat: api.HTMLButtonElement.willValidate
---

{{APIRef("HTML DOM")}}

The **`willValidate`** read-only property of the {{domxref("HTMLButtonElement")}} interface indicates whether the button is a candidate for [constraint validation](/en-US/docs/Web/HTML/Constraint_validation). It is `false` if any conditions bar it from constraint validation, including: its {{domxref("HTMLButtonElement.type", "type")}} is `reset` or `button`; it has a {{HTMLElement("datalist")}} ancestor; or the {{domxref("HTMLButtonElement.disabled", "disabled")}} property is set to `true`.

## Value

A boolean value.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLButtonElement.checkValidity()")}}
- {{HTMLElement("button")}}
- {{HTMLElement("form")}}
- [Learn: Client-side form validation](/en-US/docs/Learn/Forms/Form_validation)
- [Guide: Constraint validation](/en-US/docs/Web/HTML/Constraint_validation)

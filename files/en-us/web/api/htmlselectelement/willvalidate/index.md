---
title: "HTMLSelectElement: willValidate property"
short-title: willValidate
slug: Web/API/HTMLSelectElement/willValidate
page-type: web-api-instance-property
browser-compat: api.HTMLSelectElement.willValidate
---

{{APIRef("HTML DOM")}}

The **`willValidate`** read-only property of the {{domxref("HTMLSelectElement")}} interface indicates whether the {{htmlelement("select")}} element is a candidate for [constraint validation](/en-US/docs/Web/HTML/Constraint_validation). It is `false` if any conditions bar it from constraint validation, such as when its {{domxref("HTMLSelectElement.disabled", "disabled")}} property is `true`.

## Value

A boolean value.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLSelectElement.checkValidity()")}}
- {{HTMLElement("select")}}
- {{HTMLElement("form")}}
- [Learn: Client-side form validation](/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Guide: Constraint validation](/en-US/docs/Web/HTML/Constraint_validation)

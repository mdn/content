---
title: "HTMLInputElement: willValidate property"
short-title: willValidate
slug: Web/API/HTMLInputElement/willValidate
page-type: web-api-instance-property
browser-compat: api.HTMLInputElement.willValidate
---

{{APIRef("HTML DOM")}}

The **`willValidate`** read-only property of the {{domxref("HTMLInputElement")}} interface indicates whether the {{htmlelement("input")}} element is a candidate for [constraint validation](/en-US/docs/Web/HTML/Constraint_validation). It is `false` if any conditions bar it from constraint validation, including:

- Its {{domxref("HTMLInputElement.type", "type")}} is one of `hidden`, `reset` or `button`;
- It has a {{HTMLElement("datalist")}} ancestor;
- Its {{domxref("HTMLInputElement.disabled", "disabled")}} property is `true`.

## Value

A boolean value.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLInputElement.checkValidity()")}}
- {{HTMLElement("input")}}
- {{HTMLElement("form")}}
- [Learn: Client-side form validation](/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Guide: Constraint validation](/en-US/docs/Web/HTML/Constraint_validation)

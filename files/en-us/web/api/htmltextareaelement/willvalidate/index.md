---
title: "HTMLTextAreaElement: willValidate property"
short-title: willValidate
slug: Web/API/HTMLTextAreaElement/willValidate
page-type: web-api-instance-property
browser-compat: api.HTMLTextAreaElement.willValidate
---

{{APIRef("HTML DOM")}}

The **`willValidate`** read-only property of the {{domxref("HTMLTextAreaElement")}} interface indicates whether the {{htmlelement("textarea")}} element is a candidate for [constraint validation](/en-US/docs/Web/HTML/Constraint_validation). It is `false` if any conditions bar it from constraint validation, such as when its {{domxref("HTMLTextAreaElement.disabled", "disabled")}} or {{domxref("HTMLTextAreaElement.readOnly", "readOnly")}} property is `true`.

## Value

A boolean value.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLTextAreaElement.checkValidity()")}}
- {{HTMLElement("textarea")}}
- {{HTMLElement("form")}}
- [Learn: Client-side form validation](/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Guide: Constraint validation](/en-US/docs/Web/HTML/Constraint_validation)

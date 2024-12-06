---
title: "HTMLButtonElement: willValidate property"
short-title: willValidate
slug: Web/API/HTMLButtonElement/willValidate
page-type: web-api-instance-property
browser-compat: api.HTMLButtonElement.willValidate
---

{{APIRef("HTML DOM")}}

The **`willValidate`** read-only property of the {{domxref("HTMLButtonElement")}} interface indicates whether the {{htmlelement("button")}} element is a candidate for [constraint validation](/en-US/docs/Web/HTML/Constraint_validation). It is `false` if any conditions bar it from constraint validation, including:

- Its {{domxref("HTMLButtonElement.type", "type")}} is `reset` or `button`;
- It has a {{HTMLElement("datalist")}} ancestor;
- The {{domxref("HTMLButtonElement.disabled", "disabled")}} property is `true`.

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
- [Learn: Client-side form validation](/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Guide: Constraint validation](/en-US/docs/Web/HTML/Constraint_validation)

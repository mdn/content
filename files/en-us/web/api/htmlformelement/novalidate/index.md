---
title: "HTMLFormElement: noValidate property"
short-title: noValidate
slug: Web/API/HTMLFormElement/noValidate
page-type: web-api-instance-property
browser-compat: api.HTMLFormElement.noValidate
---

{{APIRef("HTML DOM")}}

The **`noValidate`** property of the {{domxref("HTMLFormElement")}} interface is a boolean value indicating if the {{htmlelement("form")}} will bypass [constraint validation](/en-US/docs/Web/HTML/Constraint_validation) when submitted. It reflects the `<form>` element's [`novalidate`](/en-US/docs/Web/HTML/Element/form#novalidate) attribute; if the attribute present, the value is `true`.

If this attribute is not set or the value is set to `false`, the form is validated. This can be overridden by setting the {{domxref("HTMLInputElement.formNoValidate")}} or {{domxref("HTMLButtonElement.formNoValidate")}} property to `true`, either via JavaScript or the HTML `formnovalidate` attribute, for the control used to submit the form.

This property can be retrieved or set.

## Value

A boolean.

## Examples

```js
const element = document.getElementById("myForm");
console.log(element.noValidate);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLFormElement.reportValidity()")}}
- {{domxref("HTMLFormElement.checkValidity()")}}
- {{domxref("HTMLFormElement.action")}}
- {{domxref("HTMLFormElement.enctype")}}
- {{domxref("HTMLFormElement.method")}}
- {{domxref("HTMLFormElement.target")}}
- {{HTMLElement("form")}}
- [Learn: Client-side form validation](/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Guide: Constraint validation](/en-US/docs/Web/HTML/Constraint_validation)

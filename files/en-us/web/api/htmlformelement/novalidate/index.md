---
title: "HTMLFormElement: noValidate method"
short-title: noValidate
slug: Web/API/HTMLFormElement/noValidate
page-type: web-api-instance-method
browser-compat: api.HTMLFormElement.noValidate
---

{{APIRef("HTML DOM")}}

The **`noValidate`** property of the {{domxref("HTMLFormElement")}} interface is boolean value indicating if the {{htmlelement("form")}} will bypass [constraint validation](/en-US/docs/Web/HTML/Constraint_validation) when submitted. It reflects the `<form>` element's [`novalidate`](/en-US/docs/Web/HTML/Element/form#novalidate) attribute; if the attribute present, the value is `true`.

If this attribute is not set or the value is set to `false`, the form is validated. This can be overridden by setting the {{domxref("HTMLInputElement.formnovalidate")}} and {{domxref("HTMLButtonElement.formnovalidate")}} properties to `true`, or by including `formnovalidate` attributes on {{htmlelement("button")}} or {{htmlelement("button")}} that are used to submit the form.

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
- [Learn: Client-side form validation](/en-US/docs/Learn/Forms/Form_validation)
- [Guide: Constraint validation](/en-US/docs/Web/HTML/Constraint_validation)

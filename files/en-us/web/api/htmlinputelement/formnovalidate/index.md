---
title: "HTMLInputElement: formNoValidate property"
short-title: formNoValidate
slug: Web/API/HTMLInputElement/formNoValidate
page-type: web-api-instance-property
browser-compat: api.HTMLInputElement.formNoValidate
---

{{APIRef("HTML DOM")}}

The **`formNoValidate`** property of the {{domxref("HTMLInputElement")}} interface is a boolean value indicating if the {{htmlelement("form")}} will bypass [constraint validation](/en-US/docs/Web/HTML/Constraint_validation) when submitted via the {{htmlelement("input")}}. It reflects the `<input>` element's [`formnovalidate`](/en-US/docs/Web/HTML/Element/input#formnovalidate) attribute.

This property is valid only for [`submit`](/en-US/docs/Web/HTML/Element/input/submit) and [`image`](/en-US/docs/Web/HTML/Element/input/image) `<input>` elements.

Its value overrides the {{domxref("HTMLFormElement.noValidate", "noValidate")}} property of the {{domxref("HTMLFormElement")}} interface if the form is submitted via the input. This property can be retrieved or set.

## Value

A boolean.

## Examples

```js
const inputElement = document.getElementById("myInput");
console.log(inputElement.formNoValidate);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLInputElement.reportValidity()")}}
- {{domxref("HTMLInputElement.checkValidity()")}}
- {{domxref("HTMLInputElement.formAction")}}
- {{domxref("HTMLInputElement.formEnctype")}}
- {{domxref("HTMLInputElement.formMethod")}}
- {{domxref("HTMLInputElement.formTarget")}}
- [`<input type="submit">`](/en-US/docs/Web/HTML/Element/input/submit)
- [`<input type="image">`](/en-US/docs/Web/HTML/Element/input/image)
- {{HTMLElement("form")}}
- {{domxref("HTMLFormElement.noValidate")}}
- {{domxref("HTMLButtonElement.formNoValidate")}}
- [Learn: Client-side form validation](/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Guide: Constraint validation](/en-US/docs/Web/HTML/Constraint_validation)

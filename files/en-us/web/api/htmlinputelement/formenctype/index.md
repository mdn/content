---
title: "HTMLInputElement: formEnctype property"
short-title: formEnctype
slug: Web/API/HTMLInputElement/formEnctype
page-type: web-api-instance-property
browser-compat: api.HTMLInputElement.formEnctype
---

{{APIRef("HTML DOM")}}

The **`formEnctype`** property of the {{domxref("HTMLInputElement")}} interface is the {{Glossary("MIME_type", "MIME type")}} of the content sent to the server when the `<input>` with the `formEnctype` is the method of form submission. It reflects the value of the `<input>`'s [`formenctype`](/en-US/docs/Web/HTML/Element/input#formenctype) attribute.

This property is valid only for [`submit`](/en-US/docs/Web/HTML/Element/input/submit) and [`image`](/en-US/docs/Web/HTML/Element/input/image) `<input>` elements.

Its value overrides the {{domxref("HTMLFormElement.enctype", "enctype")}} property of the {{domxref("HTMLFormElement")}} interface if the form is submitted via the input. This property can be retrieved or set. If not set, the value is the empty string (`""`).

## Value

A string.

## Examples

```js
inputElement.formEnctype = "application/x-www-form-urlencoded";
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLInputElement.formAction")}}
- {{domxref("HTMLInputElement.formMethod")}}
- {{domxref("HTMLInputElement.formNoValidate")}}
- {{domxref("HTMLInputElement.formTarget")}}
- {{domxref("HTMLFormElement.enctype")}}
- [`<input type="submit">`](/en-US/docs/Web/HTML/Element/input/submit)
- [`<input type="image">`](/en-US/docs/Web/HTML/Element/input/image)
- [Sending form data](/en-US/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data)

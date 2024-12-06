---
title: "HTMLButtonElement: formEnctype property"
short-title: formEnctype
slug: Web/API/HTMLButtonElement/formEnctype
page-type: web-api-instance-property
browser-compat: api.HTMLButtonElement.formEnctype
---

{{APIRef("HTML DOM")}}

The **`formEnctype`** property of the {{domxref("HTMLButtonElement")}} interface is the {{Glossary("MIME_type", "MIME type")}} of the content sent to the server when the form is submitted. It reflects the value of the `<button>`'s [`formenctype`](/en-US/docs/Web/HTML/Element/button#formenctype) attribute.

The value overrides the {{domxref("HTMLFormElement.enctype", "enctype")}} property of the {{domxref("HTMLFormElement")}} interface if the form is submitted via the submit button. This property can be retrieved or set. If not set, the value is the empty string (`""`).

## Value

A string.

## Examples

```js
btnEl.formEnctype = "application/x-www-form-urlencoded";
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLButtonElement.formAction")}}
- {{domxref("HTMLButtonElement.formMethod")}}
- {{domxref("HTMLButtonElement.formNoValidate")}}
- {{domxref("HTMLButtonElement.formTarget")}}
- {{domxref("HTMLFormElement.enctype")}}
- [Sending form data](/en-US/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data)

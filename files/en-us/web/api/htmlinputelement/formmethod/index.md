---
title: "HTMLInputElement: formMethod property"
short-title: formMethod
slug: Web/API/HTMLInputElement/formMethod
page-type: web-api-instance-property
browser-compat: api.HTMLInputElement.formMethod
---

{{APIRef("HTML DOM")}}

The **`formMethod`** property of the {{domxref("HTMLInputElement")}} interface represents the form method of the {{HTMLElement("input")}} element. The form method is the {{Glossary("HTTP")}} method used to submit the {{HtmlElement("form")}} when the form is submitted. It reflects the value of the `<input>`'s [`formmethod`](/en-US/docs/Web/HTML/Element/input#formmethod) attribute.

The value overrides the {{domxref("HTMLFormElement.method", "method")}} property of the {{domxref("HTMLFormElement")}} interface if the form is submitted via the input. This property can be retrieved or set. If set with an empty or invalid value, the invalid default value is `"get"`. If not set at all, the value is the empty string (`""`).

## Value

A string; `"post"`, `"get"`, `"dialog"`, or `""`.

## Examples

```js
inputElement.formMethod = "post";
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLInputElement.formAction")}}
- {{domxref("HTMLInputElement.formEnctype")}}
- {{domxref("HTMLInputElement.formNoValidate")}}
- {{domxref("HTMLInputElement.formTarget")}}
- [`<input type="submit">`](/en-US/docs/Web/HTML/Element/input/submit)
- [`<input type="image">`](/en-US/docs/Web/HTML/Element/input/submit)
- [Sending form data](/en-US/docs/Learn/Forms/Sending_and_retrieving_form_data)

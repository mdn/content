---
title: "HTMLButtonElement: formMethod property"
short-title: formMethod
slug: Web/API/HTMLButtonElement/formMethod
page-type: web-api-instance-property
browser-compat: api.HTMLButtonElement.formMethod
---

{{APIRef("HTML DOM")}}

The **`formMethod`** property of the {{domxref("HTMLButtonElement")}} interface is the {{Glossary("HTTP")}} method used to submit the {{HtmlElement("form")}} if the {{HTMLElement("button")}} element is the control that submits the form. It reflects the value of the `<button>`'s [`formmethod`](/en-US/docs/Web/HTML/Element/button#formmethod) attribute.

The value overrides the {{domxref("HTMLFormElement.method", "method")}} property of the {{domxref("HTMLFormElement")}} interface if the form is submitted via the button. This property can be retrieved or set. If set with an empty or invalid value, the invalid default value is `"get"`. If not set at all, the value is the empty string (`""`).

## Value

A string; `"post"`, `"get"`, `"dialog"`, or `""`.

## Examples

```js
btnEl.formMethod = "post";
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLButtonElement.formAction")}}
- {{domxref("HTMLButtonElement.formEnctype")}}
- {{domxref("HTMLButtonElement.formNoValidate")}}
- {{domxref("HTMLButtonElement.formTarget")}}
- {{domxref("HTMLFormElement.method")}}
- [Sending form data](/en-US/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data)

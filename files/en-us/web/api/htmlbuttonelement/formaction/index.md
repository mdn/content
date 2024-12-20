---
title: "HTMLButtonElement: formAction property"
short-title: formAction
slug: Web/API/HTMLButtonElement/formAction
page-type: web-api-instance-property
browser-compat: api.HTMLButtonElement.formAction
---

{{APIRef("HTML DOM")}}

The **`formAction`** property of the {{domxref("HTMLButtonElement")}} interface is the URL of the program that is executed on the server when the form that owns this control is submitted. It reflects the value of the `<button>`'s [`formaction`](/en-US/docs/Web/HTML/Element/button#formaction) attribute.

The value overrides the {{domxref("HTMLFormElement.action", "action")}} property of the {{domxref("HTMLFormElement")}} interface if the form is submitted via the button. This property can be retrieved or set.

## Value

A string. The URL for form submission.

## Examples

```js
btnEl.formAction = "/cgi-bin/publish";
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLButtonElement.formEnctype")}}
- {{domxref("HTMLButtonElement.formMethod")}}
- {{domxref("HTMLButtonElement.formNoValidate")}}
- {{domxref("HTMLButtonElement.formTarget")}}
- [Sending form data](/en-US/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data)

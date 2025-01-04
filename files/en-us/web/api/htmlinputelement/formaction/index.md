---
title: "HTMLInputElement: formAction property"
short-title: formAction
slug: Web/API/HTMLInputElement/formAction
page-type: web-api-instance-property
browser-compat: api.HTMLInputElement.formAction
---

{{APIRef("HTML DOM")}}

The **`formAction`** property of the {{domxref("HTMLInputElement")}} interface is the URL of the program that is executed on the server when the form that owns this control is submitted. It reflects the value of the `<input>`'s [`formaction`](/en-US/docs/Web/HTML/Element/input#formaction) attribute.

This property is valid only for [`submit`](/en-US/docs/Web/HTML/Element/input/submit) and [`image`](/en-US/docs/Web/HTML/Element/input/image) `<input>` elements.

Its value overrides the {{domxref("HTMLFormElement.action", "action")}} property of the {{domxref("HTMLFormElement")}} interface if the form is submitted via the input. This property can be retrieved or set.

## Value

A string. The URL for form submission.

## Examples

```js
inputElement.formAction = "/cgi-bin/publish";
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLInputElement.formEnctype")}}
- {{domxref("HTMLInputElement.formMethod")}}
- {{domxref("HTMLInputElement.formNoValidate")}}
- {{domxref("HTMLInputElement.formTarget")}}
- [`<input type="submit">`](/en-US/docs/Web/HTML/Element/input/submit)
- [`<input type="image">`](/en-US/docs/Web/HTML/Element/input/image)
- [Sending form data](/en-US/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data)

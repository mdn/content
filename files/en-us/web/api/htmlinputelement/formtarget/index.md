---
title: "HTMLInputElement: formTarget property"
short-title: formTarget
slug: Web/API/HTMLInputElement/formTarget
page-type: web-api-instance-property
browser-compat: api.HTMLInputElement.formTarget
---

{{APIRef("HTML DOM")}}

The **`formTarget`** property of the {{domxref("HTMLInputElement")}} interface represents the form target of the {{HTMLElement("input")}} element. The `formtarget` is the tab, window, or iframe where the response of the submitted form {{HtmlElement("form")}} is to be displayed when the `<input>` is the method of form submission. It reflects the value of the `<input>`'s [`formtarget`](/en-US/docs/Web/HTML/Element/input#formtarget) attribute.

The value overrides the {{domxref("HTMLFormElement.target", "target")}} property of the {{domxref("HTMLFormElement")}} interface if the form is submitted via the input. This property can be retrieved or set. If not set, the value is the empty string (`""`).

## Value

A string..

## Examples

```js
btnEl.formTarget = "post";
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLInputElement.formAction")}}
- {{domxref("HTMLInputElement.formEnctype")}}
- {{domxref("HTMLInputElement.formNoValidate")}}
- {{domxref("HTMLInputElement.formMethod")}}
- [`<input type="submit">`](/en-US/docs/Web/HTML/Element/input/submit)
- [`<input type="image">`](/en-US/docs/Web/HTML/Element/input/submit)
- [Sending form data](/en-US/docs/Learn/Forms/Sending_and_retrieving_form_data)

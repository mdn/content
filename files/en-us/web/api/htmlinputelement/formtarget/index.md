---
title: "HTMLInputElement: formTarget property"
short-title: formTarget
slug: Web/API/HTMLInputElement/formTarget
page-type: web-api-instance-property
browser-compat: api.HTMLInputElement.formTarget
---

{{APIRef("HTML DOM")}}

The **`formTarget`** property of the {{domxref("HTMLInputElement")}} interface is the tab, window, or iframe where the response of the submitted {{HtmlElement("form")}} is to be displayed. It reflects the value of the {{HTMLElement("input")}} element's [`formtarget`](/en-US/docs/Web/HTML/Element/input#formtarget) attribute.

This property is valid only for [`submit`](/en-US/docs/Web/HTML/Element/input/submit) and [`image`](/en-US/docs/Web/HTML/Element/input/image) `<input>` elements.

Its value overrides the {{domxref("HTMLFormElement.target", "target")}} property of the {{domxref("HTMLFormElement")}} interface if the form is submitted via the input. This property can be retrieved or set. If not set, the value is the empty string (`""`).

## Value

A string.

## Examples

```js
inputElement.formTarget = "_blank";
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
- {{domxref("HTMLFormElement.target")}}
- [`<input type="submit">`](/en-US/docs/Web/HTML/Element/input/submit)
- [`<input type="image">`](/en-US/docs/Web/HTML/Element/input/image)
- [Sending form data](/en-US/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data)

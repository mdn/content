---
title: "HTMLButtonElement: formTarget property"
short-title: formTarget
slug: Web/API/HTMLButtonElement/formTarget
page-type: web-api-instance-property
browser-compat: api.HTMLButtonElement.formTarget
---

{{APIRef("HTML DOM")}}

The **`formTarget`** property of the {{domxref("HTMLButtonElement")}} interface is the tab, window, or iframe where the response of the submitted {{HtmlElement("form")}} is to be displayed. It reflects the value of the {{HTMLElement("button")}} element's [`formtarget`](/en-US/docs/Web/HTML/Element/button#formtarget) attribute.

The value overrides the {{domxref("HTMLFormElement.target", "target")}} property of the {{domxref("HTMLFormElement")}} interface if the form is submitted via the button. This property can be retrieved or set. If not set, the value is the empty string (`""`).

## Value

A string.

## Examples

```js
btnEl.formTarget = "_self";
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLButtonElement.formAction")}}
- {{domxref("HTMLButtonElement.formEnctype")}}
- {{domxref("HTMLButtonElement.formNoValidate")}}
- {{domxref("HTMLButtonElement.formMethod")}}
- {{domxref("HTMLFormElement.target")}}
- [Sending form data](/en-US/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data)

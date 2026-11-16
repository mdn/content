---
title: "HTMLTextAreaElement: dirName property"
short-title: dirName
slug: Web/API/HTMLTextAreaElement/dirName
page-type: web-api-instance-property
browser-compat: api.HTMLTextAreaElement.dirName
---

{{APIRef("HTML DOM")}}

The **`dirName`** property of the {{domxref("HTMLTextAreaElement")}} interface is the directionality of the element. It reflects the value of the {{htmlelement("textarea")}} element's [`dirName`](/en-US/docs/Web/HTML/Reference/Attributes/dirname) attribute. This property can be retrieved or set.

The `dirname` attribute controls how the element's directionality is submitted. When included, the form control will submit with two name/value pairs: the first being the [`name`](/en-US/docs/Web/API/HTMLTextAreaElement/name) and [`value`](/en-US/docs/Web/API/HTMLTextAreaElement/value) of the `<textarea>`, and the second being the value of the [`dirname`](/en-US/docs/Web/HTML/Reference/Elements/textarea#dirname) attribute as the name, with a value of `ltr` or `rtl` as set by the browser.

## Value

A string. The direction of the element.

## Examples

```js
textareaElement.dirName = "rtl";
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLInputElement.dirName")}}
- [`dir` attribute](/en-US/docs/Web/HTML/Reference/Global_attributes/dir)
- [Sending form data](/en-US/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data)

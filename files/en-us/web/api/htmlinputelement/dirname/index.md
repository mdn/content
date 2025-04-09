---
title: "HTMLInputElement: dirName property"
short-title: dirName
slug: Web/API/HTMLInputElement/dirName
page-type: web-api-instance-property
browser-compat: api.HTMLInputElement.dirName
---

{{APIRef("HTML DOM")}}

The **`dirName`** property of the {{domxref("HTMLInputElement")}} interface is the directionality of the element and enables the submission of that value. It reflects the value of the {{htmlelement("input")}} element's [`dirName`](/en-US/docs/Web/HTML/Reference/Attributes/dirname) attribute. This property can be retrieved or set.

Valid only for [`hidden`](/en-US/docs/Web/HTML/Reference/Elements/input/hidden), [`text`](/en-US/docs/Web/HTML/Reference/Elements/input/text), [`search`](/en-US/docs/Web/HTML/Reference/Elements/input/search), [`url`](/en-US/docs/Web/HTML/Reference/Elements/input/url), [`tel`](/en-US/docs/Web/HTML/Reference/Elements/input/tel), and [`email`](/en-US/docs/Web/HTML/Reference/Elements/input/email) `<input>` types, the `dirname` attribute controls how the element's directionality is submitted. When included, the form control will submit with two name/value pairs: the first being the [`name`](/en-US/docs/Web/HTML/Reference/Elements/input#name) and [`value`](/en-US/docs/Web/HTML/Reference/Elements/input#value), and the second being the value of the [`dirname`](/en-US/docs/Web/HTML/Reference/Elements/input#dirname) attribute as the name, with a value of `ltr` or `rtl` as set by the browser.

## Value

A string. The direction of the element.

## Examples

```js
inputElement.dirName = "rtl";
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLTextAreaElement.dirName")}}
- [`dir` attribute](/en-US/docs/Web/HTML/Global_attributes/dir)
- [Sending form data](/en-US/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data)

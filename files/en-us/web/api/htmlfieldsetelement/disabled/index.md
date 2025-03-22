---
title: "HTMLFieldSetElement: disabled property"
short-title: disabled
slug: Web/API/HTMLFieldSetElement/disabled
page-type: web-api-instance-property
browser-compat: api.HTMLFieldSetElement.disabled
---

{{ APIRef("HTML DOM") }}

The **`disabled`** property of the {{domxref("HTMLFieldSetElement")}} interface is a boolean value that reflects the {{htmlelement("fieldset")}} element's [`disabled`](/en-US/docs/Web/HTML/Element/fieldset#disabled) attribute, which indicates whether the control is disabled.

When disabled, all the form control descendants of the `<fieldset>` element, excluding elements that are descendants of the {{htmlelement("legend")}} child of the `<fieldset>`, if any, are disabled. A disabled element is unusable and un-clickable, and match the {{cssxref(":disabled")}} selector, even if their `disabled` property value is false.

## Value

A boolean value.

## Examples

```js
const fs = document.getElementById("billing-address");
console.log(fs.disabled);
fs.disabled = true;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- HTML [`disabled`](/en-US/docs/Web/HTML/Attributes/disabled) attribute
- CSS {{cssxref(":disabled")}} and {{cssxref(":enabled")}} pseudoclasses

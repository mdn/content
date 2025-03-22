---
title: "HTMLOptGroupElement: disabled property"
short-title: disabled
slug: Web/API/HTMLOptGroupElement/disabled
page-type: web-api-instance-property
browser-compat: api.HTMLOptGroupElement.disabled
---

{{ APIRef("HTML DOM") }}

The **`disabled`** property of the {{domxref("HTMLOptGroupElement")}} interface is a boolean value that reflects the {{htmlelement("optgroup")}} element's [`disabled`](/en-US/docs/Web/HTML/Element/optgroup#disabled) attribute, which indicates whether the control is disabled.

When disabled, the {{htmlelement("option")}} element descendants of the `<optgroup>` element are unusable, un-clickable, and unselectable. These disabled `<option>`s will match the {{cssxref(":disabled")}} selector, even if their `disabled` property value is false.

## Value

A boolean value.

## Examples

```js
const optionGroup = document.getElementById("groupB");
console.log(optionGroup.disabled);
optionGroup.disabled = true;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- HTML [`disabled`](/en-US/docs/Web/HTML/Attributes/disabled) attribute
- CSS {{cssxref(":disabled")}} and {{cssxref(":enabled")}} pseudoclasses

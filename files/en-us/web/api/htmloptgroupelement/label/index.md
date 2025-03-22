---
title: "HTMLOptGroupElement: label property"
short-title: label
slug: Web/API/HTMLOptGroupElement/label
page-type: web-api-instance-property
browser-compat: api.HTMLOptGroupElement.label
---

{{ APIRef("HTML DOM") }}

The **`label`** property of the {{domxref("HTMLOptGroupElement")}} interface is a string value that reflects the {{htmlelement("optgroup")}} element's [`label`](/en-US/docs/Web/HTML/Element/optgroup#label) attribute, which provides a textual label to the group of options.

## Value

A string.

## Examples

```js
const optionGroup = document.getElementById("groupB");
console.log(optionGroup.label);
optionGroup.label = `${optionGroup.label} (${optionGroup.children.length})`;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{htmlelement("optgroup")}}
- HTML [`label`](/en-US/docs/Web/HTML/Element/optgroup#label) attribute

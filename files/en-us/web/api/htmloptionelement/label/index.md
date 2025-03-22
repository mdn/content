---
title: "HTMLOptionElement: label property"
short-title: label
slug: Web/API/HTMLOptionElement/label
page-type: web-api-instance-property
browser-compat: api.HTMLOptionElement.label
---

{{ApiRef("HTML DOM")}}

The **`label`** property of the {{domxref("HTMLOptionElement")}} represents the text displayed for an option in a {{htmlelement("select")}} element or as part of a list of suggestions in a {{htmlelement("datalist")}} element. It reflects the {{htmlelement("option")}} element's [`label`](/en-US/docs/Web/HTML/Element/option#label) attribute.

If the attribute is omitted or the empty string, the `label` property returns the element's {{domxref("HTMLOptionElement.text", "text")}} content.

## Value

A string.

## Example

```js
const optionElement = document.getElementById("exampleOption");
console.log(`Option's label: ${optionElement.label}`);
optionElement.label = "Updated label";
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLOptionElement.value")}}
- {{HTMLElement("select")}}
- {{HTMLElement("datalist")}}
- {{HTMLElement("optgroup")}}

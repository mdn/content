---
title: "HTMLOptionElement: value property"
short-title: value
slug: Web/API/HTMLOptionElement/value
page-type: web-api-instance-property
browser-compat: api.HTMLOptionElement.value
---

{{ APIRef("HTML DOM") }}

The **`value`** property of the {{DOMxRef("HTMLOptionElement")}} interface represents the value of the {{htmlelement("option")}} element as a string, or the empty string if no value is set. It reflects the element's [`value`](/en-US/docs/Web/HTML/Element/option#value) attribute, if present. Otherwise, it returns or sets the contents of the element, similar to the {{domxref("Node.textContent","textContent")}} property.

## Value

A string containing the `value` attribute value, if present, or the contents of the element.

## Examples

```js
const optionElement = document.querySelector("datalist option:first-of-type");
const oldValue = optionElement.value;
optionElement.value = oldValue.toUpperCase();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTMLElement("option")}}
- {{DOMXref("HTMLOptionElement.selected")}}
- {{DOMXref("HTMLOptionElement.defaultSelected")}}
- {{DOMXref("HTMLOptionElement.label")}}

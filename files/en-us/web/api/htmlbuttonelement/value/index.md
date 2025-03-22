---
title: "HTMLButtonElement: value property"
short-title: value
slug: Web/API/HTMLButtonElement/value
page-type: web-api-instance-property
browser-compat: api.HTMLButtonElement.value
---

{{ APIRef("HTML DOM") }}

The **`value`** property of the {{DOMxRef("HTMLButtonElement")}} interface represents the value of the {{htmlelement("button")}} element as a string, or the empty string if no value is set. It reflects the element's [`value`](/en-US/docs/Web/HTML/Element/button#value) attribute.

## Value

A string containing the value of the {{htmlelement("button")}} element.

## Examples

```js
const buttonElement = document.getElementById("given-name");
console.log(`value: ${buttonElement.value}`);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTMLElement("button")}}
- {{DOMXref("HTMLButtonElement.type")}}
- {{DOMXref("HTMLButtonElement.labels")}}

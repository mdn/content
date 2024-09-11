---
title: "HTMLOutputElement: value property"
short-title: value
slug: Web/API/HTMLOutputElement/value
page-type: web-api-instance-property
browser-compat: api.HTMLOutputElement.value
---

{{ APIRef("HTML DOM") }}

The **`value`** property of the {{DOMxRef("HTMLOutputElement")}} interface represents the value of the {{htmlelement("output")}} element as a string, or the empty string if no value is set. It returns or sets the contents of the element, similar to the {{domxref("Node.textContent","textContent")}} property.

> [!NOTE]
> When the `value` property of an `<output>` element is set, the element goes into value mode and the default value is accessible only through the {{DOMXref("HTMLOutputElement.defaultValue")}} property.

## Value

A string containing the contents of the {{htmlelement("output")}} element.

## Examples

```js
const outputElement = document.getElementById("log");
console.log(`value: ${outputElement.value}`);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTMLElement("output")}}
- {{DOMXref("HTMLOutputElement.defaultValue")}}
- {{DOMXref("HTMLOutputElement.labels")}}
- {{DOMXref("HTMLOutputElement.htmlFor")}}

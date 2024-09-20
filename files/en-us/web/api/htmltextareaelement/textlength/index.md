---
title: "HTMLTextAreaElement: textLength property"
short-title: textLength
slug: Web/API/HTMLTextAreaElement/textLength
page-type: web-api-instance-property
browser-compat: api.HTMLTextAreaElement.textLength
---

{{ APIRef("HTML DOM") }}

The **`textLength`** read-only property of the {{DOMxRef("HTMLTextAreaElement")}} interface is a non-negative integer representing the number of characters, in UTF-16 code units, of the {{htmlelement("textarea")}} element's value. It is a shortcut of accessing {{jsxref("String/length", "length")}} on its {{domxref("HTMLTextAreaElement/value", "value")}} property.

## Value

A non-negative integer.

## Examples

```js
const textareaElement = document.getElementById("comment");
console.log(textArea.textLength);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTMLElement("textarea")}}
- {{DOMXref("HTMLTextAreaElement.rows")}}
- {{DOMXref("HTMLTextAreaElement.cols")}}
- {{DOMXref("HTMLTextAreaElement.minLength")}}
- {{DOMXref("HTMLTextAreaElement.maxLength")}}

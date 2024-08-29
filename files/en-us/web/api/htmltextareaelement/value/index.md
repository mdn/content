---
title: "HTMLTextAreaElement: value property"
short-title: value
slug: Web/API/HTMLTextAreaElement/value
page-type: web-api-instance-property
browser-compat: api.HTMLTextAreaElement.value
---

{{ APIRef("HTML DOM") }}

The **`value`** property of the {{DOMxRef("HTMLTextAreaElement")}} interface represents the value of the {{htmlelement("textarea")}} element as a string, which is an empty string if the widget contains no content. It reflects the raw value contained in the control.

This property can also be set directly, for example to set or update the value based on some condition.

## Value

A string containing the contents of the {{htmlelement("textarea")}} element, .

## Examples

```js
const textareaElement = document.getElementById("comment");
const oldText = textArea.value;
textArea.value = oldText.toUpperCase();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTMLElement("textarea")}}
- {{DOMXref("HTMLTextAreaElement.textLength")}}
- {{DOMXref("HTMLTextAreaElement.labels")}}
- {{DOMXref("HTMLTextAreaElement.selectionStart")}}
- {{DOMXref("HTMLTextAreaElement.selectionEnd")}}

---
title: "HTMLTextAreaElement: defaultValue property"
short-title: defaultValue
slug: Web/API/HTMLTextAreaElement/defaultValue
page-type: web-api-instance-property
browser-compat: api.HTMLTextAreaElement.defaultValue
---

{{ APIRef("HTML DOM") }}

The **`defaultValue`** property of the {{DOMxRef("HTMLTextAreaElement")}} interface represents the default text content of this text area. Getting and setting this value is equivalent to getting and setting its {{domxref("Node.textContent", "textContent")}}.

## Value

A string.

## Examples

In the example below, even when the text area has been modified by the user, the `defaultValue` still returns the value originally written in the HTML. If `defaultValue` is set, any user input is overwritten.

```js
const textareaElement = document.getElementById("comment");
console.log(textArea.defaultValue);
textArea.defaultValue = "This is now the default text";
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTMLElement("textarea")}}
- {{DOMXref("HTMLTextAreaElement.value")}}

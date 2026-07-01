---
title: "HTMLTextAreaElement: defaultValue property"
short-title: defaultValue
slug: Web/API/HTMLTextAreaElement/defaultValue
page-type: web-api-instance-property
browser-compat: api.HTMLTextAreaElement.defaultValue
---

{{ APIRef("HTML DOM") }}

The **`defaultValue`** property of the {{DOMxRef("HTMLTextAreaElement")}} interface represents the default text content of this text area. Getting and setting this value is equivalent to getting and setting {{domxref("Node.textContent", "textContent")}} on the {{htmlelement("textarea")}}.

## Value

A string.

## Examples

In the example below, the `defaultValue` still returns the value originally written in the HTML. If a default value is set, either via HTML or the `defaultValue` property, user input will update the `value` but will not overwrite the `defaultValue`.

```js
const textareaElement = document.getElementById("comment");
console.log(textArea.defaultValue);
textArea.defaultValue = "This is the default text now!";
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTMLElement("textarea")}}
- {{DOMXref("HTMLTextAreaElement.value")}}

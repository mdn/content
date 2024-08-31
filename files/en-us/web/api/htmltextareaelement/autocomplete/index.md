---
title: "HTMLTextAreaElement: autocomplete property"
short-title: autocomplete
slug: Web/API/HTMLTextAreaElement/autocomplete
page-type: web-api-instance-property
browser-compat: api.HTMLTextAreaElement.autocomplete
---

{{ APIRef("HTML DOM") }}

The **`autocomplete`** property of the {{DOMxRef("HTMLTextAreaElement")}} interface indicates whether the value of the control can be automatically completed by the browser. It reflects the `<textarea>` element's [`autocomplete`](/en-US/docs/Web/HTML/Element/textarea#autocomplete) attribute.

## Value

A string that is `"on"`, `"off"`, or the empty string `""` if unspecified.

## Examples

```js
const textareaElement = document.getElementById("comment");
console.log(textArea.autocomplete);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTMLElement("textarea")}}

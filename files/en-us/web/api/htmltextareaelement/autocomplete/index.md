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

A string representing the value of the `autocomplete` attribute (`"on"`, `"off"`, or a [`<token-list>`](/en-US/docs/Web/HTML/Attributes/autocomplete#token_list_tokens)) or the empty string (`""`) if unspecified.

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
- HTML [`autocomplete`](/en-US/docs/Web/HTML/Attributes/autocomplete) attribute
- ARIA [`aria-autocomplete`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-autocomplete) attribute
- [Turning off autocompletion](/en-US/docs/Web/Security/Practical_implementation_guides/Turning_off_form_autocompletion)

---
title: "HTMLInputElement: autocomplete property"
short-title: autocomplete
slug: Web/API/HTMLInputElement/autocomplete
page-type: web-api-instance-property
browser-compat: api.HTMLInputElement.autocomplete
---

{{ APIRef("HTML DOM") }}

The **`autocomplete`** property of the {{DOMxRef("HTMLInputElement")}} interface indicates whether the value of the control can be automatically completed by the browser. It reflects the {{htmlelement("input")}} element's [`autocomplete`](/en-US/docs/Web/HTML/Attributes/autocomplete) attribute.

## Value

A string; the value of the `autocomplete` attribute (`"on"`, `"off"`, a [`<token-list>`](/en-US/docs/Web/HTML/Attributes/autocomplete#token_list_tokens)), or the empty string `""` if unspecified.

## Examples

```js
const inputElement = document.getElementById("name");
console.log(inputElement.autocomplete);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTMLElement("input")}}
- {{DOMxRef("HTMLInputElement.value")}}
- HTML [`autocomplete`](/en-US/docs/Web/HTML/Attributes/autocomplete) attribute
- ARIA [`aria-autocomplete`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-autocomplete) attribute
- [Turning off autocompletion](/en-US/docs/Web/Security/Practical_implementation_guides/Turning_off_form_autocompletion)

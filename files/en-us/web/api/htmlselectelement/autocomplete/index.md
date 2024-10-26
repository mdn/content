---
title: "HTMLSelectElement: autocomplete property"
short-title: autocomplete
slug: Web/API/HTMLSelectElement/autocomplete
page-type: web-api-instance-property
browser-compat: api.HTMLSelectElement.autocomplete
---

{{ APIRef("HTML DOM") }}

The **`autocomplete`** property of the {{DOMxRef("HTMLSelectElement")}} interface indicates whether the value of the control can be automatically completed by the browser. It reflects the `<select>` element's [`autocomplete`](/en-US/docs/Web/HTML/Element/select#autocomplete) attribute.

## Value

A string representing the value of the `autocomplete` attribute (`"on"`, `"off"`, or a [`<token-list>`](/en-US/docs/Web/HTML/Attributes/autocomplete#token_list_tokens)) or the empty string (`""`) if unspecified.

## Examples

```js
const selectElement = document.getElementById("favorite-fruit");
console.log(textArea.autocomplete);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTMLElement("select")}}
- {{HTMLElement("option")}}
- HTML [`autocomplete`](/en-US/docs/Web/HTML/Attributes/autocomplete) attribute
- ARIA [`aria-autocomplete`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-autocomplete) attribute
- [Turning off autocompletion](/en-US/docs/Web/Security/Practical_implementation_guides/Turning_off_form_autocompletion)

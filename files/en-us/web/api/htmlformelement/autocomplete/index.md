---
title: "HTMLFormElement: autocomplete property"
short-title: autocomplete
slug: Web/API/HTMLFormElement/autocomplete
page-type: web-api-instance-property
browser-compat: api.HTMLFormElement.autocomplete
---

{{ APIRef("HTML DOM") }}

The **`autocomplete`** property of the {{DOMxRef("HTMLFormElement")}} interface indicates whether the value of the form's controls can be automatically completed by the browser. It reflects the {{htmlelement("form")}} element's [`autocomplete`](/en-US/docs/Web/HTML/Attributes/autocomplete) attribute.

## Value

A string; the value `"off"` if explicitly set to `"off"`, and otherwise always `"on"`.

## Examples

```js
const formElement = document.getElementById("name");
console.log(formElement.autocomplete);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTMLElement("form")}}
- HTML [`autocomplete`](/en-US/docs/Web/HTML/Attributes/autocomplete) attribute
- ARIA [`aria-autocomplete`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-autocomplete) attribute
- [Turning off autocompletion](/en-US/docs/Web/Security/Practical_implementation_guides/Turning_off_form_autocompletion)

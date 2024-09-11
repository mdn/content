---
title: "HTMLTextAreaElement: required property"
short-title: required
slug: Web/API/HTMLTextAreaElement/required
page-type: web-api-instance-property
browser-compat: api.HTMLTextAreaElement.required
---

{{ APIRef("HTML DOM") }}

The **`required`** property of the {{DOMxRef("HTMLTextAreaElement")}} interface specifies that the user must fill in a value before submitting a form. It reflects the {{htmlelement("textarea")}} element's [`required`](/en-US/docs/Web/HTML/Element/textarea#required) attribute.

## Value

A boolean.

## Examples

```js
const textareaElement = document.getElementById("comment");
console.log(textArea.required);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTMLElement("textarea")}}
- {{DOMXref("HTMLTextAreaElement.validity")}}
- {{cssxref(":required")}} pseudo-class

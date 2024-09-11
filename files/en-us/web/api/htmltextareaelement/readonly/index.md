---
title: "HTMLTextAreaElement: readOnly property"
short-title: readOnly
slug: Web/API/HTMLTextAreaElement/readOnly
page-type: web-api-instance-property
browser-compat: api.HTMLTextAreaElement.readOnly
---

{{ APIRef("HTML DOM") }}

The **`readOnly`** property of the {{DOMxRef("HTMLTextAreaElement")}} interface indicates that the user cannot modify the value of the control. Unlike the {{domxref("HTMLTextAreaElement.disabled", "disabled")}} attribute, the `readonly` attribute does not prevent the user from clicking or selecting in the control. It reflects the {{htmlelement("textarea")}} element's [`readonly`](/en-US/docs/Web/HTML/Element/textarea#readonly) attribute.

## Value

A boolean.

## Examples

```js
const textareaElement = document.getElementById("comment");
console.log(textArea.readOnly);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTMLElement("textarea")}}
- {{DOMXref("HTMLTextAreaElement.disabled")}}
- {{cssxref(":read-only")}} pseudo-class

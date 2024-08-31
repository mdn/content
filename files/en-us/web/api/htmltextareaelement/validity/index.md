---
title: "HTMLTextAreaElement: validity property"
short-title: validity
slug: Web/API/HTMLTextAreaElement/validity
page-type: web-api-instance-property
browser-compat: api.HTMLTextAreaElement.validity
---

{{APIRef("HTML DOM")}}

The **`validity`** read-only property of the {{domxref("HTMLTextAreaElement")}} interface returns a {{domxref("ValidityState")}} with the validity states that this element is in.

## Value

A {{domxref("ValidityState")}} object.

## Examples

The following example gets the validity state of a text area element and processes it if it is not valid:

```js
const textArea = document.getElementById("myTextArea");
if (!textArea.validity.valid) {
  // Test each validity state
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLTextAreaElement.checkValidity()")}}
- {{HTMLElement("textarea")}}
- {{HTMLElement("form")}}
- [Learn: Client-side form validation](/en-US/docs/Learn/Forms/Form_validation)
- [Guide: Constraint validation](/en-US/docs/Web/HTML/Constraint_validation)

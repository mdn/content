---
title: "HTMLTextAreaElement: validity property"
short-title: validity
slug: Web/API/HTMLTextAreaElement/validity
page-type: web-api-instance-property
browser-compat: api.HTMLTextAreaElement.validity
---

{{APIRef("HTML DOM")}}

The **`validity`** read-only property of the {{domxref("HTMLTextAreaElement")}} interface returns a {{domxref("ValidityState")}} object that represents the validity states this element is in.

## Value

A {{domxref("ValidityState")}} object.

## Examples

The following example gets the validity state of a text area element and processes it if it is not valid:

```js
const textArea = document.getElementById("myTextArea");
const validityState = textArea.validity;
if (!validityState.valid) {
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
- [Learn: Client-side form validation](/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Guide: Constraint validation](/en-US/docs/Web/HTML/Constraint_validation)

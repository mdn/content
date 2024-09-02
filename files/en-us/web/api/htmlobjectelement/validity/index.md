---
title: "HTMLObjectElement: validity property"
short-title: validity
slug: Web/API/HTMLObjectElement/validity
page-type: web-api-instance-property
browser-compat: api.HTMLObjectElement.validity
---

{{APIRef("HTML DOM")}}

The **`validity`** read-only property of the {{domxref("HTMLObjectElement")}} interface returns a {{domxref("ValidityState")}} with the validity states that this element is in. Although {{HTMLElement("object")}} elements are never candidates for [constraint validation](/en-US/docs/Web/HTML/Constraint_validation), the validity state may still be invalid if a custom validity message has been set.

## Value

A {{domxref("ValidityState")}} object.

## Examples

The following example shows how you can have an `<object>` in an invalid state, even when {{domxref("HTMLObjectElement/checkValidity", "checkValidity()")}} returns `true`.

```js
const object = document.getElementById("myObjectElement");
object.setCustomValidity("This object is invalid.");
console.log(object.validity.valid); // false
console.log(object.validity.checkValidity()); // true
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

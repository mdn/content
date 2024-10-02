---
title: "HTMLInputElement: readOnly property"
short-title: readOnly
slug: Web/API/HTMLInputElement/readOnly
page-type: web-api-instance-property
browser-compat: api.HTMLInputElement.readOnly
---

{{ APIRef("HTML DOM") }}

The **`readOnly`** property of the {{DOMxRef("HTMLInputElement")}} interface indicates that the user cannot modify the value of the {{htmlelement("input")}}. It reflects the {{htmlelement("input")}} element's [`readonly`](/en-US/docs/Web/HTML/Element/input#readonly) boolean attribute; returning `true` if the attribute is present and `false` when omitted.

Unlike a form control with a true {{domxref("HTMLInputElement.disabled", "disabled")}} property, a true `readOnly` property value does not prevent the user from clicking or selecting in the control.

While the HTML `readonly` attribute is ignored if the type is `hidden`, `range`, `color`, `checkbox`, `radio`, `file`, `submit`, `reset`, `button`, and `image`, the `readOnly` property is `true` for these input types if the attribute is present, `false` otherwise.

## Value

A boolean.

## Examples

```js
const inputElement = document.getElementById("total");
console.log(inputElement.readOnly);
inputElement.readOnly = true;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTMLElement("input")}}
- {{DOMXref("HTMLInputElement.disabled")}}
- {{cssxref(":read-only")}} pseudo-class

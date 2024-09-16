---
title: "HTMLInputElement: pattern property"
short-title: pattern
slug: Web/API/HTMLInputElement/pattern
page-type: web-api-instance-property
browser-compat: api.HTMLInputElement.pattern
---

{{ APIRef("HTML DOM") }}

The **`pattern`** property of the {{DOMxRef("HTMLInputElement")}} interface represents a [regular expression](/en-US/docs/Web/JavaScript/Guide/Regular_expressions) a non-null {{HTMLElement("input")}} value should match. It reflects the {{htmlelement("input")}} element's [`pattern`](/en-US/docs/Web/HTML/Attributes/pattern) attribute.

The `pattern` property is valid for `text`, `search`, `url`, `tel`, `email`, and `password` types. It defines a regular expression that the input's {{DOMxRef("HTMLInputElement.value", "value")}} must match in order for the value to pass [constraint validation](/en-US/docs/Web/HTML/Constraint_validation).

If a non-`null` value doesn't conform to the constraints set by the `pattern` value, the {{domxref('ValidityState')}} object's read-only {{domxref('ValidityState.patternMismatch','patternMismatch')}} property will be true.

## Value

A string.

## Examples

```js
const inputElement = document.getElementById("year");
console.log(input.pattern);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTMLElement("input")}}
- {{DOMXref("HTMLInputElement.value")}}
- [Client-side validation](/en-US/docs/Web/HTML/Element/input#client-side_validation)
- {{CSSXref(":valid")}} and {{CSSXref(":invalid")}} pseudo-classes

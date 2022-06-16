---
title: ElementInternals.validationMessage
slug: Web/API/ElementInternals/validationMessage
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - validationMessage
  - ElementInternals
browser-compat: api.ElementInternals.validationMessage
---
{{DefaultAPISidebar("DOM")}}

The **`validationMessage`** read-only property of the {{domxref("ElementInternals")}} interface returns the validation message for the element.

## Value

A string containing the validation message of this element.

## Examples

In the following example the validation message is set with {{domxref("ElementInternals.setValidity()")}}, and then returned with `validationMessage`.

```js
this.internals_.setValidity({'valueMissing':true},"my message");
console.log(this.internals_.validationMessage); // "my message"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

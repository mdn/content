---
title: HTMLObjectElement.validationMessage
slug: Web/API/HTMLObjectElement/validationMessage
tags:
  - API
  - HTML DOM
  - HTMLObjectElement
  - NeedsExample
  - Property
  - Reference
  - validationMessage
browser-compat: api.HTMLObjectElement.validationMessage
---
{{APIRef("HTML DOM")}}

The **`validationMessage`** read-only property
of the {{domxref("HTMLObjectElement")}} interface returns a {{domxref("DOMString")}}
representing a localized message that describes the validation constraints that the
control does not satisfy (if any). This is the empty string if the control is not a
candidate for constraint validation (willValidate is false), or it satisfies its
constraints.

## Syntax

```js
var String = HTMLObjectElement.validationMessage;
```

### Value

A {{domxref('DOMString')}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

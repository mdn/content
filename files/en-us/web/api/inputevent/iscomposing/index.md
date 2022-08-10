---
title: InputEvent.isComposing
slug: Web/API/InputEvent/isComposing
page-type: web-api-instance-property
tags:
  - API
  - InputEvent
  - Property
  - Read-only
  - Reference
browser-compat: api.InputEvent.isComposing
---
{{APIRef("UI Events")}}

The **`InputEvent.isComposing`** read-only property returns a
boolean value indicating if the event is fired after
{{domxref("Element/compositionstart_event", "compositionstart")}} and before {{domxref("Element/compositionend_event", "compositionend")}}.

## Value

A boolean.

## Examples

```js
const inputEvent = new InputEvent('syntheticInput', false);
console.log(inputEvent.isComposing); // return false
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Element/compositionstart_event", "compositionstart")}} and {{domxref("Element/compositionend_event", "compositionend")}}
- {{domxref("InputEvent")}}

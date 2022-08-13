---
title: KeyboardEvent.isComposing
slug: Web/API/KeyboardEvent/isComposing
page-type: web-api-instance-property
tags:
  - API
  - DOM
  - KeyboardEvent
  - Property
  - Read-only
  - Reference
browser-compat: api.KeyboardEvent.isComposing
---
{{APIRef("UI Events")}}

The **`KeyboardEvent.isComposing`** read-only property returns
a boolean value indicating if the event is fired within a composition
session, i.e. after {{domxref("Element/compositionstart_event", "compositionstart")}}
and before {{domxref("Element/compositionend_event", "compositionend")}}.

## Value

A boolean.

## Examples

```js
const kbdEvent = new KeyboardEvent("syntheticKey", false);
console.log(kbdEvent.isComposing); // return false
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Element/compositionstart_event", "compositionstart")}} and {{domxref("Element/compositionend_event", "compositionend")}}
- {{domxref("KeyboardEvent")}}

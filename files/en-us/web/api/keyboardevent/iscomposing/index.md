---
title: KeyboardEvent.isComposing
slug: Web/API/KeyboardEvent/isComposing
tags:
  - API
  - DOM
  - KeyboardEvent
  - Property
  - Read-only
  - Reference
browser-compat: api.KeyboardEvent.isComposing
---
{{APIRef("DOM Events")}}

The **`KeyboardEvent.isComposing`** read-only property returns
a boolean value indicating if the event is fired within a composition
session, i.e. after {{domxref("Element/compositionstart_event", "compositionstart")}}
and before {{domxref("Element/compositionend_event", "compositionend")}}.

## Syntax

```js
var bool = event.isComposing;
```

## Example

```js
var kbdEvent = new KeyboardEvent("syntheticKey", false);
console.log(kbdEvent.isComposing); // return false
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{ event("compositionstart") }} and {{ event("compositionend")}}
- {{domxref("KeyboardEvent")}}

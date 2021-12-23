---
title: InputEvent.isComposing
slug: Web/API/InputEvent/isComposing
tags:
  - API
  - InputEvent
  - Property
  - Read-only
  - Reference
browser-compat: api.InputEvent.isComposing
---
{{APIRef("DOM Events")}}

The **`InputEvent.isComposing`** read-only property returns a
boolean value indicating if the event is fired after
{{event("compositionstart")}} and before {{event("compositionend")}}.

## Syntax

```js
var bool = event.isComposing;
```

## Example

```js
var inputEvent = new InputEvent('syntheticInput', false);
console.log(inputEvent.isComposing); // return false
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{ event("compositionstart") }} and {{ event("compositionend")}}
- {{domxref("InputEvent")}}

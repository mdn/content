---
title: CompositionEvent.initCompositionEvent()
slug: Web/API/CompositionEvent/initCompositionEvent
tags:
  - API
  - CompositionEvent
  - Deprecated
  - Method
  - Reference
  - initCompositionEvent
browser-compat: api.CompositionEvent.initCompositionEvent
---
{{deprecated_header}}{{APIRef("DOM Events")}}

The **`initCompositionEvent()`**
method of the {{domxref("CompositionEvent")}} interface initializes the attributes of a
`CompositionEvent` object instance.

> **Note:** The correct way of creating a {{domxref("CompositionEvent")}} is to use
> the constructor {{domxref("CompositionEvent.CompositionEvent", "CompositionEvent()")}}.

## Syntax

```js
 compositionEventInstance.initCompositionEvent(typeArg, canBubbleArg, cancelableArg, viewArg, dataArg, localeArg)
```

### Parameters

- `typeArg`
  - : A {{domxref("DOMString")}} representing the type of composition event; this will be
    one of `compositionstart`, `compositionupdate`, or
    `compositionend`.
- `canBubbleArg`
  - : A boolean value specifying whether or not the event can bubble.
- `cancelableArg`
  - : A boolean value indicating whether or not the event can be canceled.
- `viewArg`
  - : The {{domxref("Window")}} object from which the event was generated.
- `dataArg`
  - : A {{domxref("DOMString")}} representing the value of the `data`
    attribute.
- `localeArg`
  - : A {{domxref("DOMString")}} representing the value of the `locale`
    attribute.

### Return value

Void.

## Specifications

This method is no longer on a standardization track. It is kept for compatibility purposes. Use the constructor {{domxref("CompositionEvent.CompositionEvent", "CompositionEvent()")}}.

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CompositionEvent")}}

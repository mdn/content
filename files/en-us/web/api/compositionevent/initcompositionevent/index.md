---
title: "CompositionEvent: initCompositionEvent() method"
short-title: initCompositionEvent()
slug: Web/API/CompositionEvent/initCompositionEvent
page-type: web-api-instance-method
status:
  - deprecated
browser-compat: api.CompositionEvent.initCompositionEvent
---

{{deprecated_header}}{{APIRef("UI Events")}}

The **`initCompositionEvent()`**
method of the {{domxref("CompositionEvent")}} interface initializes the attributes of a
`CompositionEvent` object instance.

> [!NOTE]
> The correct way of creating a {{domxref("CompositionEvent")}} is to use
> the constructor {{domxref("CompositionEvent.CompositionEvent", "CompositionEvent()")}}.

## Syntax

```js-nolint
initCompositionEvent(type, canBubble, cancelable, view, data, locale)
```

### Parameters

- `type`
  - : A string representing the type of composition event; this will be
    one of `compositionstart`, `compositionupdate`, or
    `compositionend`.
- `canBubble`
  - : A boolean value specifying whether or not the event can bubble.
- `cancelable`
  - : A boolean value indicating whether or not the event can be canceled.
- `view`
  - : The {{domxref("Window")}} object from which the event was generated.
- `data`
  - : A string representing the value of the `data`
    attribute.
- `locale`
  - : A string representing the value of the `locale`
    attribute.

### Return value

None ({{jsxref("undefined")}}).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CompositionEvent")}}

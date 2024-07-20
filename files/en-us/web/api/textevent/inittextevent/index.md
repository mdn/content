---
title: "TextEvent: initTextEvent() method"
short-title: initTextEvent()
slug: Web/API/TextEvent/initTextEvent
page-type: web-api-instance-method
browser-compat: api.TextEvent.initTextEvent
---

{{APIRef("UI Events")}}

The **`initTextEventEvent()`** method of the {{domxref("TextEvent")}} interface initializes the value of a `TextEvent` after it has been created.

This method must be called to set the event before it is dispatched, using {{ domxref("EventTarget.dispatchEvent()") }}.

> **Note:** In general, you won't create these events yourself; they are created by the browser.

## Syntax

```js-nolint
initTextEvent(type)
initTextEvent(type, bubbles)
initTextEvent(type, bubbles, cancelable)
initTextEvent(type, bubbles, cancelable, view)
initTextEvent(type, bubbles, cancelable, view, data)
```

### Parameters

- `type`
  - : A string to set the event's {{domxref("Event.type", "type")}} to.
    There is only one event type for a {{domxref("TextEvent")}}: `textInput`.
- `bubbles` {{optional_inline}}
  - : A boolean indicating whether or not the event can bubble. `false` by default. Sets the value of {{domxref("Event.bubbles")}}.
- `cancelable` {{optional_inline}}
  - : A boolean indicating whether or not the event's default action can be prevented. `false` by default. Sets the value of {{domxref("Event.cancelable")}}.
- `view` {{optional_inline}}
  - : The {{glossary("WindowProxy")}} object from which the event was generated. `null` by default.
- `data` {{optional_inline}}
  - : A string to set event's data attribute.

### Return value

None ({{jsxref("undefined")}}).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

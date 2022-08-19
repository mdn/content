---
title: UIEvent()
slug: Web/API/UIEvent/UIEvent
page-type: web-api-constructor
tags:
  - API
  - Constructor
  - Reference
  - UIEvent
browser-compat: api.UIEvent.UIEvent
---
{{APIRef("UI Events")}}

The **`UIEvent()`** constructor creates a new {{domxref("UIEvent")}} object.

> **Note:** If you construct a synthetic event using this constructor, that event will not be _trusted_, for security reasons.
> Only browser-generated `UIEvent` objects are trusted and only trusted events trigger default actions.

## Syntax

```js
new UIEvent(type)
new UIEvent(type, options)
```

### Parameters

- `type`
  - : A string with the name of the event.
    It is case-sensitive and browsers set it to `load`, `unload`, `abort`, `error`, or `select`.
- `options` {{optional_inline}}

  - : An object that, _in addition of the properties defined in {{domxref("Event/Event", "Event()")}}_, can have the following properties:
    - `detail` {{optional_inline}}
      - : A number that is a event-dependent value associated with the event.
        It defaults to `0` and {{domxref("UIEvent.detail")}} lists the semantic for standard events.
    - `view` {{optional_inline}}
      - : The {{domxref("Window")}} associated with the event. Its default value is `null`.
    - `sourceCapabilities` {{optional_inline}} {{non-standard_inline}}
      - : An {{domxref("InputDeviceCapabilities")}} object which provides information
        about the physical device responsible for generating a touch event.

### Result value

A new {{domxref("UIEvent")}} object.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("UIEvent")}}, the interface of the objects it constructs.

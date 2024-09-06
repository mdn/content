---
title: "CommandEvent: CommandEvent() constructor"
short-title: CommandEvent()
slug: Web/API/CommandEvent/CommandEvent
page-type: web-api-constructor
status:
  - experimental
browser-compat: api.CommandEvent.CommandEvent
---

The **`CommandEvent()`** constructor creates a new {{domxref("CommandEvent")}} object.

## Syntax

```js-nolint
new CommandEvent(type)
new CommandEvent(type, options)
```

### Parameters

- `type`
  - : A string with the name of the event.
    It is case-sensitive and browsers set it to `beforeinput`, or `input`.
- `options` {{optional_inline}}
  - : An object that, _in addition of the properties defined in {{domxref("Event/Event", "Event()")}}_, can have the following properties:
    - `source` {{optional_inline}}
      - : A {{domxref("HTMLButtonElement", "button")}} element representing the
        control button that was interacted with to cause this event.
    - `command` {{optional_inline}}
      - : A string containing the command for the controlled element to take.

### Return value

A new {{domxref("CommandEvent")}} object.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CommandEvent")}}, the interface of the objects it constructs.
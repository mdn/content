---
title: "CommandEvent: CommandEvent() constructor"
short-title: CommandEvent()
slug: Web/API/CommandEvent/CommandEvent
page-type: web-api-constructor
status:
  - experimental
browser-compat: api.CommandEvent.CommandEvent
---

{{APIRef("Invoker Commands API")}}{{SeeCompatTable}}

The **`CommandEvent()`** constructor creates a new {{domxref("CommandEvent")}} object.

## Syntax

```js-nolint
new CommandEvent(type)
new CommandEvent(type, options)
```

### Parameters

- `type`
  - : A string with the name of the event.
    It is case-sensitive and browsers set it to `beforeinput` or `input`.
- `options` {{optional_inline}}
  - : An object that, _in addition of the properties defined in {{domxref("Event/Event", "Event()")}}_, can have the following properties:
    - `source` {{optional_inline}}
      - : An {{domxref("HTMLButtonElement")}} representing the button that was interacted with to cause this event. This can be any element but we recommend only using button as a source to avoid surprises.
    - `command` {{optional_inline}}
      - : A string containing the command for the controlled element to take. While manually instantiating a `CommandEvent` it is possible to use any string value, but it is recommended to use one of the built-in names or prefix with two dashes (`--`) to ensure forward compatibility.

### Return value

A new {{domxref("CommandEvent")}} object.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Invoker Commands API", "Invoker Commands API", "", "nocode")}}
- {{domxref("HTMLButtonElement.command")}}
- {{domxref("HTMLButtonElement.commandForElement")}}
- {{domxref("CommandEvent")}}

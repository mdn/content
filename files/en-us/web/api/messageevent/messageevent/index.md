---
title: "MessageEvent: MessageEvent() constructor"
short-title: MessageEvent()
slug: Web/API/MessageEvent/MessageEvent
page-type: web-api-constructor
browser-compat: api.MessageEvent.MessageEvent
---

{{APIRef("HTML DOM")}}

The **`MessageEvent()`** constructor creates a new {{domxref("MessageEvent")}} object.

## Syntax

```js-nolint
new MessageEvent(type)
new MessageEvent(type, options)
```

### Parameters

- `type`
  - : A string with the name of the event.
    It is case-sensitive and browsers always set it to `message`.
- `options` {{optional_inline}}
  - : An object that, _in addition of the properties defined in {{domxref("Event/Event", "Event()")}}_, can have the following properties:
    - `data` {{optional_inline}}
      - : The data you want contained in the MessageEvent.
        This can be of any data type, and will default to `null` if not specified.
    - `origin` {{optional_inline}}
      - : A string representing the origin of the message emitter.
        This defaults to an empty string (`''`) if not specified.
    - `lastEventId` {{optional_inline}}
      - : A string representing a unique ID for the event.
        This defaults to an empty string ("") if not specified.
    - `source` {{optional_inline}}
      - : A `MessageEventSource` (which can be a {{domxref("Window")}}, a {{domxref("MessagePort")}},
        or a {{domxref("ServiceWorker")}} object) representing the message emitter.
        This defaults to `null` if not set.
    - `ports` {{optional_inline}}
      - : An array of {{domxref("MessagePort")}} objects representing
        the ports associated with the channel the message is being sent through where appropriate
        (E.g. in channel messaging or when sending a message to a shared worker).
        This defaults to an empty array (`[]`) if not specified.

## Return value

A new {{domxref("MessageEvent")}} object.

## Examples

```js
const myMessage = new MessageEvent("message", {
  data: "hello",
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("ExtendableMessageEvent")}} — similar to this interface but used in interfaces that needs to give more flexibility to authors.

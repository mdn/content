---
title: MessageEvent()
slug: Web/API/MessageEvent/MessageEvent
tags:
  - API
  - Constructor
  - DOM
  - MessageEvent
  - Reference
  - messaging
browser-compat: api.MessageEvent.MessageEvent
---
{{APIRef("HTML DOM")}}

The **`MessageEvent()`** constructor creates a new {{domxref("MessageEvent")}} object instance.

## Syntax

```js
new MessageEvent(type)
new MessageEvent(type, init)
```

### Parameters

- **`type`**
  - : A string indicating the type of `MessageEvent` that will be created.
    Some of the more common types are: `message`, `messageerror`, `connect`.
- **`init`** {{optional_inline}}

  - : A dictionary object that can contain the following properties:

    - `data`: The data you want contained in the MessageEvent.
      This can be of any data type, and will default to `null` if not specified.
    - `origin`: A {{domxref("USVString")}} representing the origin of the
      message emitter. This defaults to an empty string ("") if not specified.
    - `lastEventId`: A {{domxref("DOMString")}} representing a unique ID
      for the event. This defaults to an empty string ("") if not specified.
    - `source`: An `MessageEventSource` (which can be a
      {{domxref("WindowProxy")}}, {{domxref("MessagePort")}}, or
      {{domxref("ServiceWorker")}} object) representing the message emitter. This
      defaults to `null` if not set.
    - `ports`: An array of {{domxref("MessagePort")}} objects representing
      the ports associated with the channel the message is being sent through (where
      appropriate, e.g. in channel messaging or when sending a message to a shared
      worker). This defaults to an empty array (`[]`) if not specified.

## Example

```js
var myMessage = new MessageEvent('message', {
  data : 'hello'
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("ExtendableMessageEvent")}} — similar to this interface but used in interfaces that needs to give more flexibility to authors.

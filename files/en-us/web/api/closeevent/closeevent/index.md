---
title: CloseEvent()
slug: Web/API/CloseEvent/CloseEvent
tags:
  - API
  - CloseEvent
  - Constructor
  - Reference
browser-compat: api.CloseEvent.CloseEvent
---
{{APIRef("Websockets API")}}

The **`CloseEvent()`** constructor creates a new
{{domxref("CloseEvent")}}.

## Syntax

```js
new CloseEvent(typeArg);
new CloseEvent(typeArg, closeEventInit);
```

### Values

- `typeArg`
  - : Is a string representing the name of the event.
- `closeEventInit` {{optional_inline}}

  - : Is a `CloseEventInit` dictionary, having the following fields:

    - `"wasClean"`, optional and defaulting to `false`, of type
      `boolean`, indicates if the connection has been closed cleanly or not.
    - `"code"`, optional and defaulting to `0`, of type
      `unsigned short`, that is the connection close code sent by the server.
    - `"reason"`, optional and defaulting to `''`, of type
      string, that is a human-readable reason why the server closed
      the connection.

    > **Note:** The `CloseEventInit` dictionary also accepts fields from the
    > {{domxref("Event.Event", "EventInit")}} dictionary.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CloseEvent")}}, the interface of the objects it constructs.

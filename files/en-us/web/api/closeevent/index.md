---
title: CloseEvent
slug: Web/API/CloseEvent
page-type: web-api-interface
browser-compat: api.CloseEvent
---

{{APIRef("Websockets API")}}

A `CloseEvent` is sent to clients using {{Glossary("WebSockets")}} when the connection is closed. This is delivered to the listener indicated by the `WebSocket` object's `onclose` attribute.

{{InheritanceDiagram}}

## Constructor

- {{domxref("CloseEvent.CloseEvent", "CloseEvent()")}}
  - : Creates a new `CloseEvent`.

## Instance properties

_This interface also inherits properties from its parent, {{domxref("Event")}}._

- {{domxref("CloseEvent.code")}} {{ReadOnlyInline}}
  - : Returns an `unsigned short` containing the close code sent by the server.
- {{domxref("CloseEvent.reason")}} {{ReadOnlyInline}}
  - : Returns a string indicating the reason the server closed the connection. This is specific to the particular server and sub-protocol.
- {{domxref("CloseEvent.wasClean")}} {{ReadOnlyInline}}
  - : Returns a boolean value that Indicates whether or not the connection was cleanly closed.

## Instance methods

_This interface also inherits methods from its parent, {{domxref("Event")}}._

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebSocket")}}

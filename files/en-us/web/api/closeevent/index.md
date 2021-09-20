---
title: CloseEvent
slug: Web/API/CloseEvent
tags:
  - API
  - Interface
  - Reference
  - Web
  - WebSocket
  - WebSockets
browser-compat: api.CloseEvent
---
{{APIRef("Websockets API")}}

A `CloseEvent` is sent to clients using {{Glossary("WebSockets")}} when the connection is closed. This is delivered to the listener indicated by the `WebSocket` object's `onclose` attribute.

## Constructor

- {{domxref("CloseEvent.CloseEvent", "CloseEvent()")}}
  - : Creates a new `CloseEvent`.

## Properties

_This interface also inherits properties from its parent, {{domxref("Event")}}._

- {{domxref("CloseEvent.code")}}{{readOnlyInline}}
  - : Returns an `unsigned short` containing the close code sent by the server.
- {{domxref("CloseEvent.reason")}}{{readOnlyInline}}
  - : Returns a {{domxref("DOMString")}} indicating the reason the server closed the connection. This is specific to the particular server and sub-protocol.
- {{domxref("CloseEvent.wasClean")}}{{readOnlyInline}}
  - : Returns a boolean value that Indicates whether or not the connection was cleanly closed.

## Methods

_This interface also inherits methods from its parent, {{domxref("Event")}}._

- {{domxref("CloseEvent.initCloseEvent()")}} {{Non-standard_inline}} {{deprecated_inline}}
  - : Initializes the value of a `CloseEvent` created. If the event has already being dispatched, this method does nothing. Do not use this method anymore, use the {{domxref("CloseEvent.CloseEvent", "CloseEvent()")}} constructor instead.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebSocket")}}

---
title: RTCSctpTransport.state
slug: Web/API/RTCSctpTransport/state
tags:
  - API
  - Draft
  - Experimental
  - NeedsCompatTable
  - NeedsExample
  - Property
  - RTCSctpTransport
  - RTCSctpTransportState
  - Read-only
  - Reference
  - WebRTC
  - state
browser-compat: api.RTCSctpTransport.state
---
{{APIRef("WebRTC")}}{{SeeCompatTable}}

The **`state`** read-only property of the
{{DOMxRef("RTCSctpTransport")}} interface provides information which describes a Stream
Control Transmission Protocol (**{{Glossary("SCTP")}}**) transport state.

## Syntax

```js
var myState = sctpTransport.state;
```

### Value

A string whose value is taken from the `RTCSctpTransportState` enumerated
type. Its value is one of the following:

- `connecting`
  - : The initial state when the connection is being estabilished.
- `connected`
  - : The connection is open for data transmission.
- `closed`
  - : The connection is closed and can no longer be used.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{DOMxRef("RTCSctpTransport")}}

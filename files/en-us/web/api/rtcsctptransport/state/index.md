---
title: "RTCSctpTransport: state property"
short-title: state
slug: Web/API/RTCSctpTransport/state
page-type: web-api-instance-property
browser-compat: api.RTCSctpTransport.state
---

{{APIRef("WebRTC")}}

The **`state`** read-only property of the {{DOMxRef("RTCSctpTransport")}} interface provides information which describes a Stream Control Transmission Protocol ({{Glossary("SCTP")}}) transport state.

## Value

A string whose value is one of the following:

- `connecting`
  - : The initial state when the connection is being established.
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

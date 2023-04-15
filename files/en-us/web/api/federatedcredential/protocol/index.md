---
title: "FederatedCredential: protocol property"
short-title: protocol
slug: Web/API/FederatedCredential/protocol
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.FederatedCredential.protocol
---

{{SeeCompatTable}}{{APIRef("Credential Management API")}}{{securecontext_header}}

The **`protocol`** property of the
{{domxref("FederatedCredential")}} interface returns a read-only
string containing a credential's federated identity protocol. If this
property is [`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null), the protocol may be inferred from the
{{domxref("FederatedCredential.provider")}} property.

## Value

A string containing a credential's federated identity protocol (e.g.
`openidconnect`).

## Examples

```js
// TBD
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

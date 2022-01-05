---
title: FederatedCredential.protocol
slug: Web/API/FederatedCredential/protocol
tags:
  - API
  - Credential Management API
  - Experimental
  - FederatedCredential
  - NeedsExample
  - Property
  - Reference
  - credential management
browser-compat: api.FederatedCredential.protocol
---
{{SeeCompatTable}}{{APIRef("Credential Management API")}}{{securecontext_header}}

The **`protocol`** property of the
{{domxref("FederatedCredential")}} interface returns a read-only
{{domxref("DOMString")}} containing a credential's federated identity protocol. If this
property is {{jsxref("null")}}, the protocol may be inferred from the
{{domxref("FederatedCredential.provider")}} property.

## Syntax

```js
var protocol = FederatedCredential.protocol
```

### Value

A {{domxref("DOMString")}} containing a credential's federated identity protocol (e.g.
`openidconnect`).

## Examples

```js
// TBD
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

---
title: "FederatedCredential: provider property"
short-title: provider
slug: Web/API/FederatedCredential/provider
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.FederatedCredential.provider
---

{{SeeCompatTable}}{{APIRef("Credential Management API")}}{{SecureContext_Header}}

The **`provider`** read-only property of the {{domxref("FederatedCredential")}} interface returns a string containing a credential's federated identity provider.

## Value

A string containing a credential's federated identity provider.

## Examples

### Reading the provider

```js
const credential = new FederatedCredential({
  id: "alex@example.com",
  provider: "https://accounts.example.com",
});

console.log(credential.provider); // "https://accounts.example.com"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

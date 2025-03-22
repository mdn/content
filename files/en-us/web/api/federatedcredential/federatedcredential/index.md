---
title: "FederatedCredential: FederatedCredential() constructor"
short-title: FederatedCredential()
slug: Web/API/FederatedCredential/FederatedCredential
page-type: web-api-constructor
status:
  - experimental
browser-compat: api.FederatedCredential.FederatedCredential
---

{{APIRef("Credential Management API")}}{{SeeCompatTable}}{{SecureContext_Header}}

The **`FederatedCredential()`**
constructor creates a new {{domxref("FederatedCredential")}} object. In
supporting browsers, an instance of this class may be passed the `credential`
received from the `init` object for global {{domxref("Window/fetch", "fetch()")}}.

## Syntax

```js-nolint
new FederatedCredential(init)
```

### Parameters

- `init`

  - : Options are:

    - `provider`
      - : A string; identifying the credential
        provider.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

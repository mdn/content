---
title: FederatedCredential()
slug: Web/API/FederatedCredential/FederatedCredential
page-type: web-api-constructor
tags:
  - API
  - Constructor
  - Credential Management API
  - FederatedCredential
  - NeedsExample
  - Reference
  - credential management
  - Experimental
browser-compat: api.FederatedCredential.FederatedCredential
---
{{APIRef("Credential Management API")}}{{SeeCompatTable}}

The **`FederatedCredential()`**
constructor creates a new {{domxref("FederatedCredential")}} object. In
supporting browsers, an instance of this class may be passed the `credential`
received from the `init` object for global {{domxref('fetch()')}}.

## Syntax

```js
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

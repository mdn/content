---
title: FederatedCredential()
slug: Web/API/FederatedCredential/FederatedCredential
tags:
  - API
  - Constructor
  - Credential Management API
  - FederatedCredential
  - NeedsExample
  - Reference
  - credential management
browser-compat: api.FederatedCredential.FederatedCredential
---
{{APIRef("Credential Management API")}}{{Non-standard_header}}

The **`FederatedCredential()`**
constructor creates a new {{domxref("FederatedCredential")}} object. In
supporting browsers, an instance of this class may be passed the `credential`
received from the `init` object for global {{domxref('fetch()')}}.

## Syntax

```js
var myCredential = new FederatedCredential(init)
```

### Parameters

- _init_

  - : Options are:

    - `provider`: A {{domxref("USVString")}}; identifying the credential
      provider.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

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

The **`FederatedCredential()`** constructor creates a new {{domxref("FederatedCredential")}} object. In supporting browsers, an instance of this class may be passed the `credential` received from the `init` object for global {{domxref("Window/fetch", "fetch()")}}.

## Syntax

```js-nolint
new FederatedCredential(data)
```

### Parameters

- `data`
  - : A {{domxref("FederatedCredentialInit")}} object. An object with the following properties:
    - `name` {{optional_inline}}
      - : A string representing the credential username.
    - `iconURL` {{optional_inline}}
      - : A string representing the URL of an icon or avatar to be associated with the credential.
    - `origin`
      - : A string representing the credential's origin. {{domxref("FederatedCredential")}} objects are origin-bound, so they will only be usable on the origin specified here.
    - `provider`
      - : A string which identifies the credentials' federated identity provider, specified as the origin that the provider uses to sign users in (for example `"https://www.facebook.com"` or `"https://accounts.google.com"`).
    - `protocol` {{optional_inline}}
      - : A string representing the protocol of the credentials' federated identity provider (for example, `"openidconnect"`).

## Examples

### Creating a federated identity credential

```js
const credData = {
  id: "1234",
  name: "Serpentina",
  origin: "https://example.org",
  protocol: "openidconnect",
  provider: "https://provider.example.org",
};

const fedCred = new FederatedCredential(credData);

// Store it
navigator.credentials.store(fedCred).then(() => {
  // Do something else
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

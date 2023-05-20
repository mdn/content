---
title: "PublicKeyCredential: response property"
short-title: response
slug: Web/API/PublicKeyCredential/response
page-type: web-api-instance-property
browser-compat: api.PublicKeyCredential.response
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

The **`response`** read-only property of the
{{domxref("PublicKeyCredential")}} interface is an {{domxref("AuthenticatorResponse")}}
object which is sent from the authenticator to the user agent for the creation/fetching
of credentials. The information contained in this response will be used by the relying
party's server to verify the demand is legitimate.

An `AuthenticatorResponse` is either:

- an {{domxref("AuthenticatorAttestationResponse")}} (when the
  `PublicKeyCredential` is created via
  {{domxref("CredentialsContainer.create()")}})
- an {{domxref("AuthenticatorAssertionResponse")}} (when the
  `PublicKeyCredential` is obtained via
  {{domxref("CredentialsContainer.get()")}}).

In order to validate the _creation_ of credentials, a relying party's server
needs both:

- this response
- the extensions of the client (given by
  {{domxref("PublicKeyCredential.getClientExtensionResults()")}}) to validate the
  demand.

> **Note:** When validating the fetching of existing credentials, the
> whole `PublicKeyCredential` object and the client extensions are necessary
> for the relying party's server.

> **Note:** This property may only be used in top-level contexts and will
> not be available in an {{HTMLElement("iframe")}} for example.

## Value

An {{domxref("AuthenticatorResponse")}} object containing the data a relying party's
script will receive and which should be sent to the relying party's server in order to
validate the demand for creation or fetching. This object contains data from the client
({{domxref("AuthenticatorResponse/clientDataJSON")}}) and from the authenticator.

## Examples

```js
const options = {
  challenge: new Uint8Array(16) /* from the server */,
  rp: {
    name: "Example CORP",
    id: "login.example.com",
  },
  user: {
    id: new Uint8Array(16) /* from the server */,
    name: "canand@example.com",
    displayName: "Carina Anand",
  },
  pubKeyCredParams: [
    {
      type: "public-key",
      alg: -7,
    },
  ],
};

navigator.credentials
  .create({ publicKey: options })
  .then((pubKeyCredential) => {
    const response = pubKeyCredential.response;
    const clientExtResults = pubKeyCredential.getClientExtensionResults();
    // Send response and client extensions to the server so that it can validate
    // and create credentials
  })
  .catch((err) => {
    // Deal with any error
  });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

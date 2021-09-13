---
title: AuthenticatorAttestationResponse
slug: Web/API/AuthenticatorAttestationResponse
tags:
  - API
  - Authentication
  - AuthenticatorAttestationResponse
  - Interface
  - Reference
  - Web Authentication API
  - WebAuthn
browser-compat: api.AuthenticatorAttestationResponse
---
{{APIRef("Web Authentication API")}}{{securecontext_header}}

The **`AuthenticatorAttestationResponse`** interface of the [Web Authentication API](/en-US/docs/Web/API/Web_Authentication_API) is returned by {{domxref('CredentialsContainer.create()')}} when a {{domxref('PublicKeyCredential')}} is passed, and provides a cryptographic root of trust for the new key pair that has been generated. This response should be sent to the relying party's server to complete the creation of the credential.

This interface inherites from {{domxref("AuthenticatorResponse")}}.

> **Note:** This interface is restricted to top-level contexts. Use from within an {{HTMLElement("iframe")}} element will not have any effect.

## Properties

- `AuthenticatorAttestationResponse.clientDataJSON` {{securecontext_inline}}{{readonlyinline}}
  - : Client data for the authentication, such as origin and challenge. The {{domxref("AuthenticatorResponse.clientDataJSON","clientDataJSON")}} property is inherited from the {{domxref("AuthenticatorResponse")}}.
- {{domxref("AuthenticatorAttestationResponse.attestationObject")}} {{securecontext_inline}}{{readonlyinline}}
  - : An {{jsxref("ArrayBuffer")}} containing authenticator data and an attestation statement for a newly-created key pair.

## Methods

- {{domxref("AuthenticatorAttestationResponse.getTransports()")}}{{securecontext_inline}}
  - : Returns an {{jsxref("Array")}} of strings describing which transport methods (e.g. `usb`, `nfc`) are believed to be supported with the authenticator. The array may be empty if the information is not available.

## Examples

```js
var publicKey = {
  challenge: /* from the server */,
  rp: {
    name: "Example CORP",
    id  : "login.example.com"
  },
  user: {
    id: new Uint8Array(16),
    name: "jdoe@example.com",
    displayName: "John Doe"
  },
  pubKeyCredParams: [
    {
      type: "public-key",
      alg: -7
    }
  ]
};

navigator.credentials.create({ publicKey })
  .then(function (newCredentialInfo) {
    var response = newCredentialInfo.response;
    // Do something with the response
    // (sending it back to the relying party server maybe?)
  }).catch(function (err) {
     console.error(err);
  });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("AuthenticatorAssertionResponse")}}: the interface for the type of response given when retrieving an existing credential
- {{domxref("AuthenticatorResponse")}}: the parent interface

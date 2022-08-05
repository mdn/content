---
title: AuthenticatorAssertionResponse.signature
slug: Web/API/AuthenticatorAssertionResponse/signature
page-type: web-api-instance-property
tags:
  - API
  - AuthenticatorAssertionResponse
  - Property
  - Reference
  - Web Authentication API
  - WebAuthn
browser-compat: api.AuthenticatorAssertionResponse.signature
---
{{APIRef("Web Authentication API")}}{{securecontext_header}}

The **`signature`** read-only property of the
{{domxref("AuthenticatorAssertionResponse")}} interface is an {{jsxref("ArrayBuffer")}}
object which is the signature of the authenticator for both
{{domxref("AuthenticatorAssertionResponse.authenticatorData")}} and a SHA-256 hash of
the client data
({{domxref("AuthenticatorResponse.clientDataJSON","AuthenticatorAssertionResponse.clientDataJSON")}}).

This signature will be sent to the server for control, as part of the response. It
provides the proof that an authenticator does possess the private key which was used for
the credential's generation.

> **Note:** An `AuthenticatorAssertionResponse` instance is
> available on {{domxref("PublicKeyCredential.response")}} after calling
> {{domxref("CredentialsContainer.get()","navigator.credentials.get()")}}.

> **Note:** This property may only be used in top-level contexts and will
> not be available in an {{HTMLElement("iframe")}} for example.

## Value

An {{jsxref("ArrayBuffer")}} object which the signature of the authenticator (using its
private key) for both {{domxref("AuthenticatorAssertionResponse.authenticatorData")}}
and a SHA-256 hash given by the client for its data (the challenge, the origin, etc. and
available from
{{domxref("AuthenticatorResponse.clientDataJSON","AuthenticatorAssertionResponse.clientDataJSON")}}).

## Examples

```js
const options = {
  challenge: new Uint8Array(26), // will be another value, provided by the relying party server
  timeout: 60000
};

navigator.credentials.get({  publicKey: options })
  .then((assertionPKCred) => {
    const signature = assertionPKCred.response.signature;

    // Send response and client extensions to the server so that it can
    // go on with the authentication

  })
  .catch((err) => console.error(err));
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

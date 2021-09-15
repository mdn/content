---
title: PublicKeyCredentialRequestOptions.challenge
slug: Web/API/PublicKeyCredentialRequestOptions/challenge
tags:
  - API
  - Property
  - PublicKeyCredentialRequestOptions
  - Reference
  - Web Authentication API
  - WebAuthn
browser-compat: api.PublicKeyCredentialRequestOptions.challenge
---
{{APIRef("Web Authentication API")}}{{securecontext_header}}

The **`challenge`** property of the
{{domxref("PublicKeyCredentialRequestOptions")}} dictionary is a
{{domxref("BufferSource")}} used as [a
cryptographic challenge](https://en.wikipedia.org/wiki/Challenge%E2%80%93response_authentication). This is randomly generated then sent from the relying
party's server. This value (among other client data) will be signed by the
authenticator's private key and produce
{{domxref("AuthenticatorAssertionResponse.signature")}} which should be sent back to the
server as part of the response.

> **Note:** When the credential is created with a
> {{domxref("CredentialsContainer.create()","navigator.credentials.create()")}} call,
> the signature of the challenge is contained within
> {{domxref("AuthenticatorAttestationResponse.attestationObject")}}.

> **Note:** A challenge will be at least 16 bytes long.

## Syntax

```js
challenge = publicKeyCredentialRequestOptions.challenge
```

### Value

A {{domxref("BufferSource")}} which is at least 16 bytes long. Contains a cryptographic
challenge emitted from the relying party's server which must be signed by the
authenticator's private key and sent back (within the
{{domxref("AuthenticatorAssertionResponse.signature","response","",1)}}) to the relying
party's server for verification.

## Examples

```js
var options = {
  challenge: new Uint8Array([/* bytes sent from the server */])
};

navigator.credentials.get({ "publicKey": options })
    .then(function (credentialInfoAssertion) {
    // send assertion response back to the server
    // to proceed with the control of the credential
}).catch(function (err) {
     console.error(err);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("AuthenticatorAssertionResponse.signature")}} which is produced using the
  challenge and the private key of the authenticator when fetching a credential.
- {{domxref("PublicKeyCredentialCreationOptions.challenge")}}, the analogous option
  property used when creating a credential.
- {{domxref("AuthenticatorAttestationResponse.attestationObject")}} which contains the
  signature of the challenge within its `attStmt` property when creating a
  credential.

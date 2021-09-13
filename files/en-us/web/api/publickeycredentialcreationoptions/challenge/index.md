---
title: PublicKeyCredentialCreationOptions.challenge
slug: Web/API/PublicKeyCredentialCreationOptions/challenge
tags:
  - API
  - Property
  - PublicKeyCredentialCreationOptions
  - Reference
  - Web Authentication API
  - WebAuthn
browser-compat: api.PublicKeyCredentialCreationOptions.challenge
---
{{APIRef("Web Authentication API")}}{{securecontext_header}}

The **`challenge`** property of the
{{domxref("PublicKeyCredentialCreationOptions")}} dictionary is a
{{domxref("BufferSource")}} used as [a
cryptographic challenge](https://en.wikipedia.org/wiki/Challenge%E2%80%93response_authentication). This is randomly generated then sent from the relying
party's server. This value (among other client data) will be signed by the
authenticator, using its private key, and must be sent back for verification to the
server as part of {{domxref("AuthenticatorAttestationResponse.attestationObject")}}.

> **Note:** When the credential is retrieved with a
> {{domxref("CredentialsContainer.get()","navigator.credentials.get()")}} call, the
> signature of the challenge is contained in
> {{domxref("AuthenticatorAssertionResponse.signature")}}.

> **Note:** A challenge will be at least 16 bytes long.

## Syntax

```js
challenge = publicKeyCredentialCreationOptions.challenge
```

### Value

A {{domxref("BufferSource")}} which is at least 16 bytes long. Contains a cryptographic
challenge emitted from the relying party's server which must be signed by the
authenticator's private key and sent back (within the
{{domxref("AuthenticatorAttestationResponse.attestationObject","response","",1)}}) to
the relying party's server for verification.

## Examples

```js
var publicKey = {
  challenge: new Uint8Array(26) /* this actually is given from the server */,
  rp: {
    name: "Example CORP",
    id  : "login.example.com"
  },
  user: {
    id: new Uint8Array(26), /* To be changed for each user */
    name: "jdoe@example.com",
    displayName: "John Doe",
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
    // send attestation response and client extensions
    // to the server to proceed with the registration
    // of the credential
  }).catch(function (err) {
     console.error(err);
  });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("AuthenticatorAttestationResponse.attestationObject")}} which contains the
  signature of the challenge within its `attStmt` property.
- {{domxref("PublicKeyCredentialRequestOptions.challenge")}}, the analogous option
  property used when fetching a credential.
- {{domxref("AuthenticatorAssertionResponse.signature")}} which is produced using the
  challenge and the private key of the authenticator when fetching a credential.

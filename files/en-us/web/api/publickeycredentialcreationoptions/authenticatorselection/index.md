---
title: PublicKeyCredentialCreationOptions.authenticatorSelection
slug: Web/API/PublicKeyCredentialCreationOptions/authenticatorSelection
tags:
  - API
  - Property
  - PublicKeyCredentialCreationOptions
  - Reference
  - Web Authentication API
  - WebAuthn
browser-compat: api.PublicKeyCredentialCreationOptions.authenticatorSelection
---
{{APIRef("Web Authentication API")}}{{securecontext_header}}

**`authenticatorSelection`**, an optional property of the
{{domxref("PublicKeyCredentialCreationOptions")}} dictionary, is an object giving
criteria to filter out the authenticators to be used for the creation operation.

## Syntax

```js
authenticatorSelection = publicKeyCredentialCreationOptions.authenticatorSelection
```

### Value

An object with the following properties:

- `authenticatorAttachment`{{optional_inline}}
  - : A string which is either "`platform`" or "`cross-platform`".
    The former describes an authenticator which is bound to the client and which is
    generally not removable. The latter describes a device which may be used across
    different platform (such as a USB or NFC device).
- `requireResidentKey`{{optional_inline}}
  - : A boolean which indicated that the credential private key must be stored in the
    authenticator, the client or in a client device. The default value is
    `false`.
- `userVerification`{{optional_inline}}

  - : A string qualifying how the user verification should be part of the authentication
    process. The values may be:

    - "`required`": user verification is required, the operation will fail
      if the {{domxref("AuthenticatorAttestationResponse","response","",1)}} does not
      have the UV flag (as part of the `authenticatorData` property of
      {{domxref("AuthenticatorAttestationResponse.attestationObject")}})
    - "`preferred`": user verification is preferred, the operation will not
      fail if the {{domxref("AuthenticatorAttestationResponse","response","",1)}} does
      not have the UV flag (as part of the `authenticatorData` property of
      {{domxref("AuthenticatorAttestationResponse.attestationObject")}})
    - "`discouraged`": user verification should not be employed as to
      minimize the user interaction during the process.

    The default value is "`preferred`".

The authenticator used for the creation of the public key credential must comply with
the requirements.

> **Note:** See
> {{domxref("PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable()")}}
> which resolves to `true` when a user-verifiying platform authenticator is
> available.

## Examples

```js
var publicKey = {
  authenticatorSelection:{
    authenticatorAttachment: "cross-platform",
    requireResidentKey: true,
    userVerification: "required"
  },
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
  pubKeyCredParams: [ {
    type: "public-key",
    alg: -7 } ]
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

- {{domxref("PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable()")}}
- {{domxref("AuthenticatorAssertionResponse.authenticatorData")}} whose structure
  contains the UV flag (please note that for the creation operation,
  {{domxref("AuthenticatorAttestationResponse.attestationObject")}} only contains a CBOR
  encoded version of this data and does not give an immediate access to the flag).

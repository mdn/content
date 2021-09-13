---
title: PublicKeyCredentialCreationOptions.pubKeyCredParams
slug: Web/API/PublicKeyCredentialCreationOptions/pubKeyCredParams
tags:
  - API
  - Property
  - PublicKeyCredentialCreationOptions
  - Reference
  - Web Authentication API
  - WebAuthn
browser-compat: api.PublicKeyCredentialCreationOptions.pubKeyCredParams
---
{{APIRef("Web Authentication API")}}{{securecontext_header}}

The **`pubKeyCredParams`** property of the
{{domxref("PublicKeyCredentialCreationOptions")}} dictionary is an {{jsxref("Array")}}
whose elements are objects describing the desired features of the credential to be
created. These objects define the type of public-key and the algorithm used for [cryptographic signature](https://en.wikipedia.org/wiki/Digital_signature)
operations.

If this array contains multiple elements, they are sorted by descending order of
preference.

## Syntax

```js
pubKeyCredParams = publicKeyCredentialCreationOptions.pubKeyCredParams
```

### Value

An {{jsxref("Array")}} whose elements are objects with the following properties:

- `type`
  - : A string describing type of public-key credential to be created. As of this writing
    (March 2019), only `"public-key"` may be used.
- `alg`
  - : A numeric identifier for the algorithm to be used to generate the key pair. The
    links between identifier and algorithms are defined in [this IANA
    registry](https://www.iana.org/assignments/cose/cose.xhtml#algorithms). Targeting ES256 (`-7`) and RS256 (`-257`) provides
    coverage for the vast majority of authenticators.

Though those elements are sorted by preference (the first element being the most
preferred), it is up to the client to choose among those elements for building the
credential.

## Examples

```js
var publicKey = {
  pubKeyCredParams: [
    // We would like an elliptic curve to be used if possible
    {
      type: "public-key",
      alg: -7
    },
    // If not, then we will fallback on an RSA algorithm
    {
      type: "public-key",
      alg: -37
    }
  ],
  challenge: new Uint8Array(26) /* this actually is given from the server */,
  rp: {
    name: "Example CORP",
    id  : "login.example.com"
  },
  user: {
    id: new Uint8Array(26), /* To be changed for each user */
    name: "jdoe@example.com",
    displayName: "John Doe",
  }
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

- [The IANA COSE
  Algorithms registry](https://www.iana.org/assignments/cose/cose.xhtml#algorithms) which describes the cryptographic algorithms and their
  corresponding identifier (used as the `"alg"` key here)

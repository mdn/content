---
title: PublicKeyCredentialCreationOptions.excludeCredentials
slug: Web/API/PublicKeyCredentialCreationOptions/excludeCredentials
tags:
  - API
  - Property
  - PublicKeyCredentialCreationOptions
  - Reference
  - Web Authentication API
  - WebAuthn
browser-compat: api.PublicKeyCredentialCreationOptions.excludeCredentials
---
{{APIRef("Web Authentication API")}}{{securecontext_header}}

**`excludeCredentials`**, an optional property of the
{{domxref("PublicKeyCredentialCreationOptions")}} dictionary, is an {{jsxref("Array")}}
whose elements are descriptors for the public keys already existing for a given user.
This is provided by the relying party's server if it wants to prevent creation of new
credentials for an existing user.

## Syntax

```js
excludeCredentials = publicKeyCredentialCreationOptions.excludeCredentials
```

### Value

An {{jsxref("Array")}} whose elements are objects with the following properties:

- `type`
  - : A string describing type of public-key credential to be created. As of this writing
    (March 2019), only "`public-key`" may be used.
- `id`
  - : A {{domxref("BufferSource")}} matching an existing public key credential identifier
    ({{domxref("PublicKeyCredential.rawId")}}). This identifier is generated during the
    creation of the `PublicKeyCredential` instance.
- `transports` {{optional_inline}}

  - : An {{jsxref("Array")}} of strings describing the possible transports between the
    client and the authenticator. The value of the strings may be:

    - "`usb`": the authenticator can be contacted via a removable USB link
    - "`nfc`": the authenticator may be used over [NFC (Near Field
      Communication)](https://en.wikipedia.org/wiki/Near-field_communication)
    - "`ble`": the authenticator may be used over [BLE (Bluetooth Low
      Energy)](https://en.wikipedia.org/wiki/Bluetooth_Low_Energy)
    - "`internal`": the authenticator is specifically bound to the client
      device (cannot be removed).

If the authenticator already contains one of such a public key credential, the client
will throw a {{domxref("DOMException")}} or asks the user if they want to create a new
credential.

## Examples

```js
var publicKey = {
  excludeCredentials: [
    {
      type: "public-key",
      // the id for john.doe@example.com
      id  : new Uint8Array(26) /* this actually is given by the server */
    },
    {
      type: "public-key",
      // the id for john-doe@example.com
      id : new Uint8Array(26) /* another id */
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

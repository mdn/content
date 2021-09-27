---
title: PublicKeyCredentialRequestOptions.allowCredentials
slug: Web/API/PublicKeyCredentialRequestOptions/allowCredentials
tags:
  - API
  - Property
  - PublicKeyCredentialRequestOptions
  - Reference
  - Web Authentication API
  - WebAuthn
browser-compat: api.PublicKeyCredentialRequestOptions.allowCredentials
---
{{APIRef("Web Authentication API")}}{{securecontext_header}}

**`allowCredentials`** is an optional property of the
{{domxref("PublicKeyCredentialRequestOptions")}} dictionary which indicates the
existing credentials acceptable for retrieval. This is an {{jsxref("Array")}} of
credential descriptors.

> **Note:** {{domxref("PublicKeyCredentialCreationOptions.excludeCredentials")}} may be used
> during the creation of the credentials in order to avoid creating new credentials
> for an existing user with existing public key credential. Contrary to
> `allowCredentials`, it is used to _filter out_ credentials.

## Syntax

```js
allowCredentials = publicKeyCredentialRequestOptions.allowCredentials
```

### Value

An {{jsxref("Array")}} whose elements are objects with the following properties:

- `type`
  - : A string describing type of public-key credential to be created. As of this
    writing (March 2019), only `"public-key"` may be used.
- `id`
  - : A {{domxref("BufferSource")}} matching an existing public key credential
    identifier ({{domxref("PublicKeyCredential.rawId")}}). This identifier is
    generated during the creation of the `PublicKeyCredential` instance.
- `transports` {{optional_inline}}

  - : An {{jsxref("Array")}} of strings describing the possible transports between the
    client and the authenticator. The value of the strings may be:

    - `"usb"`: the authenticator can be contacted via a removable USB
      link
    - `"nfc"`: the authenticator may be used over [NFC
      (Near Field Communication)](https://en.wikipedia.org/wiki/Near-field_communication)
    - `"ble"`: the authenticator may be used over [BLE
      (Bluetooth Low Energy)](https://en.wikipedia.org/wiki/Bluetooth_Low_Energy)
    - `"internal"`: the authenticator is specifically bound to the
      client device (cannot be removed).

If the authenticator does not contain any of these public key credentials, the client
will throw a {{domxref("DOMException")}} `"NotAllowedError"`.

## Examples

```js
var options = {
  allowCredentials: [
    {
      transports: ["usb"],
      type: "public-key",
      id: new Uint8Array(26) // actually provided by the server
    },
    {
      transports: ["internal"],
      type: "public-key",
      id: new Uint8Array(26) // actually provided by the server
    }
  ],
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

- {{domxref("PublicKeyCredentialCreationOptions.excludeCredentials")}} which is used
  to filter out existing credentials during creation and avoid creating new
  credentials for an existing user

---
title: AuthenticatorAttestationResponse.getTransports()
slug: Web/API/AuthenticatorAttestationResponse/getTransports
tags:
  - API
  - AuthenticatorAttestationResponse
  - Method
  - Reference
  - Web Authentication API
  - WebAuthn
browser-compat: api.AuthenticatorAttestationResponse.getTransports
---
{{APIRef("Web Authentication API")}}{{securecontext_header}}

**`getTransports()`** is a method of the
{{domxref("AuthenticatorAttestationResponse")}} interface that returns an
{{jsxref("Array")}} containing strings describing the different transports which may be
used by the authenticator.

Such transports may be USB, NFC, BLE or internal (applicable when the authenticator is
not removable from the device).

> **Note:** An `AuthenticatorAttestationResponse` instance is
> available on {{domxref("PublicKeyCredential.response")}} after calling
> {{domxref("CredentialsContainer.create()","navigator.credentials.create()")}}.

> **Note:** This method may only be used in top-level contexts and will
> not be available in an {{HTMLElement("iframe")}} for example.

## Syntax

```js
arrTransports = authenticatorAttestationResponse.getTransports()
```

### Parameters

None.

### Return value

An {{jsxref("Array")}} containing the different transports supported by the
authenticator or nothing if this information is not available.of the processing of the
different extensions by the client. The elements of this array are supposed to be in
lexicographical order. Their values may be :

- `"usb"`: the authenticator can be contacted via a removable USB link
- `"nfc"`: the authenticator may be used over [NFC (Near Field
  Communication)](https://en.wikipedia.org/wiki/Near-field_communication)
- `"ble"`: the authenticator may be used over [BLE (Bluetooth Low
  Energy)](https://en.wikipedia.org/wiki/Bluetooth_Low_Energy)
- `"internal"`: the authenticator is specifically bound to the client
  device (cannot be removed).

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
    var transports = newCredentialInfo.response.getTransports();
    console.table(transports); // may be something like ["internal", "nfc", "usb"]
  }).catch(function (err) {
     console.error(err);
  });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

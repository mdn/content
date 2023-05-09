---
title: "AuthenticatorAttestationResponse: getTransports() method"
short-title: getTransports()
slug: Web/API/AuthenticatorAttestationResponse/getTransports
page-type: web-api-instance-method
browser-compat: api.AuthenticatorAttestationResponse.getTransports
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

The **`getTransports()`** method of the {{domxref("AuthenticatorAttestationResponse")}} interface returns an array of strings describing the different transports which may be used by the authenticator.

Such transports may be USB, NFC, BLE, internal (applicable when the authenticator is not removable from the device), or a hybrid approach. Sites should not interpret this array but instead store it along with the rest of the credential information. In a subsequent {{domxref("CredentialsContainer.get()", "navigator.credentials.get()")}} call, the `transports` value(s) specified inside `publicKey.allowCredentials` should be set to the stored array value. This provides a hint to the browser as to which types of authenticators to try when making an assertion for this credential.

## Syntax

```js-nolint
getTransports()
```

### Parameters

None.

### Return value

An {{jsxref("Array")}} of strings representing the different transports supported by the authenticator, in lexicographical order. Values may include:

- `"ble"`: The authenticator may be used over [BLE (Bluetooth Low Energy)](https://en.wikipedia.org/wiki/Bluetooth_Low_Energy).
- `"hybrid"`: The authenticator can be used over a combination of (often separate) data transport and proximity mechanisms. This supports, for example, authentication on a desktop computer using a smartphone.
- `"internal"`: The authenticator is specifically bound to the client device (cannot be removed).
- `"nfc"`: The authenticator may be used over [NFC (Near Field Communication)](https://en.wikipedia.org/wiki/Near-field_communication).
- `"usb"`: The authenticator can be contacted over USB.

## Examples

See [Creating a public key credential using the WebAuthn API](/en-US/docs/Web/API/CredentialsContainer/create#creating_a_public_key_credential_using_the_webauthn_api) for a detailed example.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

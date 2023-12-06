---
title: "AuthenticatorAttestationResponse: getPublicKey() method"
short-title: getPublicKey()
slug: Web/API/AuthenticatorAttestationResponse/getPublicKey
page-type: web-api-instance-method
browser-compat: api.AuthenticatorAttestationResponse.getPublicKey
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

The **`getPublicKey()`** method of the {{domxref("AuthenticatorAttestationResponse")}} interface returns an {{jsxref("ArrayBuffer")}} containing the DER `SubjectPublicKeyInfo` of the new credential (see [Subject Public Key Info](https://www.rfc-editor.org/rfc/rfc5280#section-4.1.2.7)), or `null` if this is not available.

This is a convenience function, created to allow easy access to the public key. This key will need to be stored in order to verify future authentication operations (i.e., using {{domxref("CredentialsContainer.get()","navigator.credentials.get()")}}).

## Syntax

```js-nolint
getPublicKey()
```

### Parameters

None.

### Return value

An {{jsxref("ArrayBuffer")}} containing the DER `SubjectPublicKeyInfo` of the new credential (see [Subject Public Key Info](https://www.rfc-editor.org/rfc/rfc5280#section-4.1.2.7)), or `null` if this is not available.

## Examples

See [Creating a public key credential using the WebAuthn API](/en-US/docs/Web/API/CredentialsContainer/create#creating_a_public_key_credential_using_the_webauthn_api) for a detailed example.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

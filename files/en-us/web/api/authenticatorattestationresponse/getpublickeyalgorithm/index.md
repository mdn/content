---
title: "AuthenticatorAttestationResponse: getPublicKeyAlgorithm() method"
short-title: getPublicKeyAlgorithm()
slug: Web/API/AuthenticatorAttestationResponse/getPublicKeyAlgorithm
page-type: web-api-instance-method
browser-compat: api.AuthenticatorAttestationResponse.getPublicKeyAlgorithm
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

The **`getPublicKeyAlgorithm()`** method of the {{domxref("AuthenticatorAttestationResponse")}} interface returns a number that is equal to a [COSE Algorithm Identifier](https://www.iana.org/assignments/cose/cose.xhtml#algorithms), representing the cryptographic algorithm used for the new credential.

This is a convenience function created to allow easy access to the algorithm type. This information will need to be stored in order to verify future authentication operations (i.e., using {{domxref("CredentialsContainer.get()","navigator.credentials.get()")}}).

## Syntax

```js-nolint
getPublicKeyAlgorithm()
```

### Parameters

None.

### Return value

A number that is equal to a [COSE Algorithm Identifier](https://www.iana.org/assignments/cose/cose.xhtml#algorithms), representing the cryptographic algorithm used for the new credential.

## Examples

See [Creating a public key credential using the WebAuthn API](/en-US/docs/Web/API/CredentialsContainer/create#creating_a_public_key_credential_using_the_webauthn_api) for a detailed example.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

---
title: "AuthenticatorAttestationResponse: getAuthenticatorData() method"
short-title: getAuthenticatorData()
slug: Web/API/AuthenticatorAttestationResponse/getAuthenticatorData
page-type: web-api-instance-method
browser-compat: api.AuthenticatorAttestationResponse.getAuthenticatorData
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

The **`getAuthenticatorData()`** method of the {{domxref("AuthenticatorAttestationResponse")}} interface returns an {{jsxref("ArrayBuffer")}} containing the authenticator data contained within the {{domxref("AuthenticatorAttestationResponse.attestationObject")}} property.

This is a convenience function, created to allow easy access to the authenticator data without having to write extra parsing code to extract it from the `attestationObject`.

## Syntax

```js-nolint
getAuthenticatorData()
```

### Parameters

None.

### Return value

An {{jsxref("ArrayBuffer")}} with a {{jsxref("ArrayBuffer.byteLength")}} of at least 37 bytes, which contains the data structure explained in [Authenticator data](/en-US/docs/Web/API/Web_Authentication_API/Authenticator_data).

This will be equivalent to the authenticator data contained within the {{domxref("AuthenticatorAttestationResponse.attestationObject")}} property.

## Examples

See [Creating a public key credential using the WebAuthn API](/en-US/docs/Web/API/CredentialsContainer/create#creating_a_public_key_credential_using_the_webauthn_api) for a detailed example.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

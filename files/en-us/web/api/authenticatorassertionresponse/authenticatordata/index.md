---
title: "AuthenticatorAssertionResponse: authenticatorData property"
short-title: authenticatorData
slug: Web/API/AuthenticatorAssertionResponse/authenticatorData
page-type: web-api-instance-property
browser-compat: api.AuthenticatorAssertionResponse.authenticatorData
---

{{securecontext_header}}{{APIRef("Web Authentication API")}}

The **`authenticatorData`** property of the {{domxref("AuthenticatorAssertionResponse")}} interface returns an {{jsxref("ArrayBuffer")}} containing information from the authenticator such as the Relying Party ID Hash (rpIdHash), a signature counter, test of user presence, user verification flags, and any extensions processed by the authenticator.

## Value

An {{jsxref("ArrayBuffer")}} with a {{jsxref("ArrayBuffer.byteLength")}} of at least 37 bytes, which contains the data structure explained in [Authenticator data](/en-US/docs/Web/API/Web_Authentication_API/Authenticator_data).

## Examples

See [User login using the WebAuthn API](/en-US/docs/Web/API/CredentialsContainer/get#user_login_using_the_webauthn_api) for a detailed example.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

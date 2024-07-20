---
title: "AuthenticatorAssertionResponse: signature property"
short-title: signature
slug: Web/API/AuthenticatorAssertionResponse/signature
page-type: web-api-instance-property
browser-compat: api.AuthenticatorAssertionResponse.signature
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

The **`signature`** read-only property of the
{{domxref("AuthenticatorAssertionResponse")}} interface is an {{jsxref("ArrayBuffer")}}
object which is the signature of the authenticator for both
{{domxref("AuthenticatorAssertionResponse.authenticatorData")}} and a SHA-256 hash of
the client data
({{domxref("AuthenticatorResponse.clientDataJSON","AuthenticatorAssertionResponse.clientDataJSON")}}).

This signature will be sent to the server for control, as part of the response. It
provides the proof that an authenticator does possess the private key which was used for
the credential's generation.

## Value

An {{jsxref("ArrayBuffer")}} object which the signature of the authenticator (using its
private key) for both {{domxref("AuthenticatorAssertionResponse.authenticatorData")}}
and a SHA-256 hash given by the client for its data (the challenge, the origin, etc. and
available from
{{domxref("AuthenticatorResponse.clientDataJSON","AuthenticatorAssertionResponse.clientDataJSON")}}).

## Examples

See [User login using the WebAuthn API](/en-US/docs/Web/API/CredentialsContainer/get#user_login_using_the_webauthn_api) for a detailed example.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

---
title: "AuthenticatorAssertionResponse: userHandle property"
short-title: userHandle
slug: Web/API/AuthenticatorAssertionResponse/userHandle
page-type: web-api-instance-property
browser-compat: api.AuthenticatorAssertionResponse.userHandle
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

The **`userHandle`** read-only property of the {{domxref("AuthenticatorAssertionResponse")}} interface is an {{jsxref("ArrayBuffer")}} object providing an opaque identifier for the given user. Such an identifier can be used by the relying party's server to link the user account with its corresponding credentials and other data.

This value is specified as `user.id` in the options passed to the originating {{domxref("CredentialsContainer.create()","navigator.credentials.create()")}} call.

## Value

An {{jsxref("ArrayBuffer")}} object representing an identifier for the current user. This is not intended to be human-readable. The relying party should make sure that the `user.id` passed into the originating `create()` call does **not** contain any personally identifying information (for example user name, email, or phone number).

For {{domxref("CredentialsContainer.create()","navigator.credentials.create()")}} calls made with a non-empty `allowCredentials` properties, the returned `userHandle` may be null.

## Examples

See [User login using the WebAuthn API](/en-US/docs/Web/API/CredentialsContainer/get#user_login_using_the_webauthn_api) for a detailed example.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CredentialsContainer.create()")}} that sets the value of this property

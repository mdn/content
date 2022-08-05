---
title: AuthenticatorAssertionResponse.userHandle
slug: Web/API/AuthenticatorAssertionResponse/userHandle
page-type: web-api-instance-property
tags:
  - API
  - AuthenticatorAssertionResponse
  - Property
  - Reference
  - Web Authentication API
  - WebAuthn
browser-compat: api.AuthenticatorAssertionResponse.userHandle
---
{{APIRef("Web Authentication API")}}{{securecontext_header}}

The **`userHandle`** read-only property of the
{{domxref("AuthenticatorAssertionResponse")}} interface is an {{jsxref("ArrayBuffer")}}
object which is an opaque identifier for the given user. Such an identifier can be used
by the relying party's server to link the user account with its corresponding
credentials and other data.

The same value may be found on the `id` property of the
{{domxref("PublicKeyCredentialCreationOptions.user","options.user")}} object (used for
the creation of the `PublicKeyCredential` instance).

> **Note:** An `AuthenticatorAssertionResponse` instance is
> available on {{domxref("PublicKeyCredential.response")}} after calling
> {{domxref("CredentialsContainer.get()","navigator.credentials.get()")}}.

> **Note:** This property may only be used in top-level contexts and will
> not be available in an {{HTMLElement("iframe")}} for example.

## Value

An {{jsxref("ArrayBuffer")}} object which is an opaque identifier for the current user.
This is not human-readable and does **not** contain any personally
identifying information (e.g. username, e-mail, phone number, etc.)

## Examples

```js
const options = {
  challenge: new Uint8Array(26), // will be another value, provided by the relying party server
  timeout: 60000
};

navigator.credentials.get({  publicKey: options })
  .then((assertionPKCred) => {
    const userHandle = assertionPKCred.response.userHandle;

    // Send response and client extensions to the server so that it can
    // go on with the authentication

  })
  .catch((err) => console.error(err));
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("PublicKeyCredentialCreationOptions.user")}} and its `id`
  property which contains the same data

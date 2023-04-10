---
title: AuthenticatorAssertionResponse.userHandle
slug: Web/API/AuthenticatorAssertionResponse/userHandle
page-type: web-api-instance-property
browser-compat: api.AuthenticatorAssertionResponse.userHandle
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

The **`userHandle`** read-only property of the
{{domxref("AuthenticatorAssertionResponse")}} interface is an {{jsxref("ArrayBuffer")}}
object which is an opaque identifier for the given user. Such an identifier can be used
by the relying party's server to link the user account with its corresponding
credentials and other data.

This value specified as `user.id` in the options passed to the originating {{domxref("CredentialsContainer.create()","navigator.credentials.create()")}} call.

## Value

An {{jsxref("ArrayBuffer")}} object which is an opaque identifier for the current user.
This is not human-readable and does **not** contain any personally
identifying information (e.g. username, email, phone number, etc.)

## Examples

```js
const options = {
  challenge: new Uint8Array(26), // will be another value, provided by the relying party server
  timeout: 60000,
};

navigator.credentials
  .get({ publicKey: options })
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

- {{domxref("CredentialsContainer.create()")}} that sets the value of this property

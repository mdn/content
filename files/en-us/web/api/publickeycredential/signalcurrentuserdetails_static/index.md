---
title: "PublicKeyCredential: signalCurrentUserDetails() static method"
short-title: signalCurrentUserDetails()
slug: Web/API/PublicKeyCredential/signalCurrentUserDetails_static
page-type: web-api-static-method
status:
  - experimental
browser-compat: api.PublicKeyCredential.signalCurrentUserDetails_static
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}{{seecompattable}}

The **`signalCurrentUserDetails()`** static method of the {{domxref("PublicKeyCredential")}} interface signals to the authenticator that a particular user has updated their user name and/or display name on the [relying party](https://en.wikipedia.org/wiki/Relying_party) (RP) server.

This allows the authenticator to update user account details, to make sure they stay in sync with those held by the RP. It should only be used when the current user is authenticated — after sign in, or when they change the metadata associated with their credentials on the RP web app.

## Syntax

```js-nolint
signalCurrentUserDetails(options)
```

### Parameters

- `options`
  - : An object representing the updated user information, which contains the following properties:
    - `displayName`
      - : A string representing the updated user [`displayName`](/en-US/docs/Web/API/PublicKeyCredentialCreationOptions#displayname).
    - `name`
      - : A string representing the updated user [`name`](/en-US/docs/Web/API/PublicKeyCredentialCreationOptions#name_2).
    - `rpId`
      - : A string representing the [`id` of the RP](/en-US/docs/Web/API/PublicKeyCredentialCreationOptions#id_2) that sent the signal.
    - `userId`
      - : A base64url-encoded string representing the [`id` of the user](/en-US/docs/Web/API/PublicKeyCredentialCreationOptions#id_3) the credentials relate to.

### Return value

A {{jsxref("Promise")}} that resolves to {{jsxref("undefined")}}.

### Exceptions

The promise rejects with the following exceptions:

- `SecurityError` {{domxref("DOMException")}}
  - : The RP domain is not valid.
- `TypeError` {{domxref("DOMException")}}
  - : The `credentialId` is not a valid base64url-encoded string.

## Description

It is possible for the information stored in a user's authenticator about a [discoverable credential](/en-US/docs/Web/API/Web_Authentication_API#discoverable_credentials_and_conditional_mediation) (for example, [a passkey](https://passkeys.dev/)) to go out sync with the RP server. This can occur when the user updates their user name or display name on the RP web app without updating the authenticator.

The next time they try to sign in with a discoverable credential, the credential will still be presented to them with the old user name/display name in the relevant UI, which can result in a confusing user experience.

To avoid this issue, `signalCurrentUserDetails()` should be called on the RP web app each time a user updates their user account details or signs in, to tell the authenticator that the user information has been updated. It is up to the authenticator how to handle this information, but the expectation is that it will synchronize its user information with the provided update.

## Examples

### Signaling the current user details

In this example, we invoke the `signalCurrentUserDetail()` method, passing it the details of a credential the user has just edited on the RP. As a result, the authenticator should update its own copy of the credential so that it stays in sync with the RP.

```js
if (PublicKeyCredential.signalCurrentUserDetails) {
  await PublicKeyCredential.signalCurrentUserDetails({
    rpId: "example.com",
    userId: "M2YPl-KGnA8", // base64url-encoded user ID
    name: "a.new.email.address@example.com", // username
    displayName: "John Doe",
  });
} else {
  // Encourage the user to update their details in the authenticator
}
```

For a complete example, see [WebAuthn Signal API Demo](https://signal-api-demo.glitch.me/) (see [the source code](https://glitch.com/edit/#!/signal-api-demo?path=site.js)).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("PublicKeyCredential.signalAllAcceptedCredentials_static", "PublicKeyCredential.signalAllAcceptedCredentials()")}}
- {{domxref("PublicKeyCredential.signalUnknownCredential_static", "PublicKeyCredential.signalUnknownCredential()")}}
- [Keep passkeys consistent with credentials on your server with the Signal API](https://developer.chrome.com/docs/identity/webauthn-signal-api) on developer.chrome.com (2024)

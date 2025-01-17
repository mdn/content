---
title: "PublicKeyCredential: signalAllAcceptedCredentials() static method"
short-title: signalAllAcceptedCredentials()
slug: Web/API/PublicKeyCredential/signalAllAcceptedCredentials_static
page-type: web-api-static-method
browser-compat: api.PublicKeyCredential.signalAllAcceptedCredentials_static
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

The **`signalAllAcceptedCredentials()`** static method of the {{domxref("PublicKeyCredential")}} interface signals to the authenticator all of the valid [credential IDs](/en-US/docs/Web/API/PublicKeyCredentialRequestOptions#id) that the [relying party](https://en.wikipedia.org/wiki/Relying_party) server still holds for a particular user.

## Description

It is possible for the information stored in a user's authenticator about a [discoverable credential](/en-US/docs/Web/API/Web_Authentication_API#discoverable_credentials_and_conditional_mediation) (for example, [a passkey](https://passkeys.dev/)) to go out sync with the relying party's server. This usually occurs when the user deletes a credential from the relying party's site without updating the authenticator.

The next time they try to sign in with a discoverable credential, the deleted credential will still be presented in the relevant UI, but the sign-in attempt will fail because the server won't recognize it. This results in a confusing user experience.

To avoid this issue, `signalAllAcceptedCredentials()` should be called on the relying party site each time a user deletes a credential or signs in, to tell the authenticator which credentials are still valid for the given user. It is up to the authenticator how to handle this information, but the expectation is that it will synchronize its information with the provided credentials list. Credentials that don't appear in the list should be removed so that the user won't be offered credentials that don't exist in the sign-in UI.

> [!WARNING]
> Exercise caution when invoking `signalAllAcceptedCredentials()` — any valid credentials not included in the list are intended to be removed from the authenticator, which will prevent the user from signing in with them. Passing an empty list may remove all of the user's credentials. Some authenticators may support restoring credentials via a subsequent call to `signalAllAcceptedCredentials()` with the previously removed credential IDs included in the list.

### `signalAllAcceptedCredentials()` versus `signalUnknownCredential()`

It may seem like `signalAllAcceptedCredentials()` and {{domxref("PublicKeyCredential.signalUnknownCredential_static", "PublicKeyCredential.signalUnknownCredential()")}} have similar purposes, so which one should be used when?

To be clear, `signalAllAcceptedCredentials()` should only be used in cases where authentication is _successful_ and you want to update the state of a user's credentials. Don't use it in cases where authentication failed, for example because the user deleted a credential from the relying party but later tried to sign in with it because it was still showing in the authenticator. Using `signalAllAcceptedCredentials()` for this purpose would share the entire list of `credentialId`s for a given user with an unauthenticated party, which may not be desirable.

In cases where authentication _failed_, you should instead use `signalUnknownCredential()`. It only passes a single `credentialId` to the authenticator, minimizing the data shared with an unauthenticated party.

## Syntax

```js-nolint
signalAllAcceptedCredentials(options)
```

### Parameters

- `options`
  - : An object representing the valid credentials, which contains the following properties:
    - `allAcceptedCredentialIds`
      - : An array of base64url-encoded strings representing the [`id`s of the credentials](/en-US/docs/Web/API/PublicKeyCredentialRequestOptions#id) that are still valid.
    - `rpId`
      - : A string representing the [`id` of the relying party](/en-US/docs/Web/API/PublicKeyCredentialCreationOptions#id_2) that sent the signal.
    - `userId`
      - : A base64url-encoded string representing the [`id` of the user](/en-US/docs/Web/API/PublicKeyCredentialCreationOptions#id_3) the credentials relate to.

### Return value

A {{jsxref("Promise")}} that resolves to {{jsxref("undefined")}}.

### Exceptions

The promise rejects with a `TypeError` {{domxref("DOMException")}} if the `userId` or any of the `allAcceptedCredentialIds` elements are not valid base64url-encoded strings.

## Examples

The following snippet shows typical usage of `signalAllAcceptedCredentials()`:

```js
// Feature detection
if (PublicKeyCredential.signalAllAcceptedCredentials) {
  await PublicKeyCredential.signalAllAcceptedCredentials({
    rpId: "example.com",
    userId: "M2YPl-KGnA8", // base64url-encoded user ID
    allAcceptedCredentialIds: [
      // A list of base64url-encoded credential IDs
      "vI0qOggiE3OT01ZRWBYz5l4MEgU0c7PmAA",
      // ...
    ],
  });
}
```

For a complete example, see [WebAuthn Signal API Demo](https://signal-api-demo.glitch.me/) (see [the source code](https://glitch.com/edit/#!/signal-api-demo?path=site.js)).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("PublicKeyCredential.signalCurrentUserDetails_static", "PublicKeyCredential.signalCurrentUserDetails()")}}
- {{domxref("PublicKeyCredential.signalUnknownCredential_static", "PublicKeyCredential.signalUnknownCredential()")}}
- [Keep passkeys consistent with credentials on your server with the Signal API](https://developer.chrome.com/docs/identity/webauthn-signal-api) on developer.chrome.com (2024)

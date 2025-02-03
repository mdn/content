---
title: "PublicKeyCredential: signalAllAcceptedCredentials() static method"
short-title: signalAllAcceptedCredentials()
slug: Web/API/PublicKeyCredential/signalAllAcceptedCredentials_static
page-type: web-api-static-method
status:
  - experimental
browser-compat: api.PublicKeyCredential.signalAllAcceptedCredentials_static
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}{{seecompattable}}

The **`signalAllAcceptedCredentials()`** static method of the {{domxref("PublicKeyCredential")}} interface signals to the authenticator all of the valid [credential IDs](/en-US/docs/Web/API/PublicKeyCredentialRequestOptions#id) that the [relying party](https://en.wikipedia.org/wiki/Relying_party) (RP) server still holds for a particular user.

This allows the authenticator to update credential information, removing all credentials that are no longer recognized by the RP, such as those for deleted accounts. The method should be called each time a user authenticates with the RP.

`signalAllAcceptedCredentials()` should _only_ be called when the current user is authenticated — after sign up or sign-in, or when the user deletes a credential — as it exposes sensitive information belonging to the user.

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
  - : The `userId` or any of the `allAcceptedCredentialIds` elements are not valid base64url-encoded strings.

## Description

It is possible for the information stored in a user's authenticator about a [discoverable credential](/en-US/docs/Web/API/Web_Authentication_API#discoverable_credentials_and_conditional_mediation) (for example, [a passkey](https://passkeys.dev/)) to go out sync with the server. This usually occurs when the user deletes a credential from the RP web app without updating the authenticator.

When a user attempts to log in using discoverable credentials, they are presented with a set of credentials from the authenticator to choose from, and the selected credential is returned to the RP web app to log in with. If the user selects a credential that has been deleted from the RP server, it won't be recognized, and the login will fail. This is a confusing experience for users, who expect to only be offered credentials that should succeed.

To mitigate this issue, `signalAllAcceptedCredentials()` should be called by the RP web app each time a user deletes a credential or signs in, to tell the authenticator which credentials are still valid for the given user. It is up to the authenticator how to handle this information, but the expectation is that it will synchronize its information with the provided credentials list. Credentials that don't appear in the list should be removed so that the user won't be offered credentials that don't exist in the sign-in UI.

> [!WARNING]
> Exercise caution when invoking `signalAllAcceptedCredentials()` — any valid credentials not included in the list are intended to be removed from the authenticator, which will prevent the user from signing in with them. Passing an empty list may remove all of the user's credentials. Some authenticators may support restoring credentials via a subsequent call to `signalAllAcceptedCredentials()` with the previously removed credential IDs included in the list.

`signalAllAcceptedCredentials()` should _only_ be called when the current user is authenticated because it exposes sensitive information belonging to the user. If the user is not authenticated because they tried to log in with a credential that does not exist on the RP server, you should instead call {{domxref("PublicKeyCredential.signalUnknownCredential_static", "PublicKeyCredential.signalUnknownCredential()")}} with the unrecognized credential, so the authenticator can delete it. See [Discoverable credential synchronization methods](/en-US/docs/Web/API/Web_Authentication_API#discoverable_credential_synchronization_methods) for a more detailed comparison.

## Examples

### Signaling the accepted credentials

In this example, we invoke the `signalAllAcceptedCredentials()` method, passing it the details of all credentials belonging to the user, including those they just logged in with. As a result, the authenticator should update its own copy of the credentials so that they stay in sync with the RP.

```js
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

---
title: "PublicKeyCredential: signalUnknownCredential() static method"
short-title: signalUnknownCredential()
slug: Web/API/PublicKeyCredential/signalUnknownCredential_static
page-type: web-api-static-method
status:
  - experimental
browser-compat: api.PublicKeyCredential.signalUnknownCredential_static
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}{{seecompattable}}

The **`signalUnknownCredential()`** static method of the {{domxref("PublicKeyCredential")}} interface signals to the authenticator that a [credential ID](/en-US/docs/Web/API/PublicKeyCredentialRequestOptions#id) was not recognized by the [relying party](https://en.wikipedia.org/wiki/Relying_party) (RP) server.

This allows the authenticator to remove credentials that are not allowed by the RP, such as those for deleted accounts, or accounts that were created and stored on the authenticator but not properly updated on the server. Generally the method is called after sign in fails because the account details were not available to the RP. It can be used even when the current user is not authenticated because it does not expose sensitive information.

## Syntax

```js-nolint
signalUnknownCredential(options)
```

### Parameters

- `options`
  - : An object representing the unrecognized credential, which contains the following properties:
    - `credentialId`
      - : A base64url-encoded string representing the [`id` of the credential](/en-US/docs/Web/API/PublicKeyCredentialRequestOptions#id) that was unrecognized.
    - `rpId`
      - : A string representing the [`id` of the RP](/en-US/docs/Web/API/PublicKeyCredentialCreationOptions#id_2) that sent the signal.

### Return value

A {{jsxref("Promise")}} that resolves to {{jsxref("undefined")}}.

### Exceptions

The promise rejects with the following exceptions:

- `SecurityError` {{domxref("DOMException")}}
  - : The RP domain is not valid.
- `TypeError` {{domxref("DOMException")}}
  - : The `credentialId` is not a valid base64url-encoded string.

## Description

It is possible for the information stored in a user's authenticator about a [discoverable credential](/en-US/docs/Web/API/Web_Authentication_API#discoverable_credentials_and_conditional_mediation) (for example, [a passkey](https://passkeys.dev/)) to go out sync with the RP server. This usually occurs when the user deletes a credential from the RP web app without updating the authenticator.

When a user attempts to log in using discoverable credentials, they are presented with a set of credentials from the authenticator to choose from, and the selected credential is returned to the RP web app to log in with. If the user selects a credential that has been deleted from the RP server, it won't be recognized, and the login will fail. This is a confusing experience for users, who expect to only be offered credentials that should succeed.

To mitigate this issue, `signalUnknownCredential()` should be called on the RP web app each time a discoverable credential-based sign-in fails, to inform the authenticator that the credential ID was not recognized.

It is up to the authenticator how to handle this information, but the expectation is that it will delete the relevant credential so that there is no mismatch in the data stored on the authenticator and relying party.

In addition, `signalUnknownCredential()` might also be called if a web app is able to create a discoverable credential on the authenticator but is, for any reason, unable to upload the credential information to the server.

`signalUnknownCredential()` can be called even when the current user is not authenticated because it does not expose sensitive information.

## Examples

### Signaling an unknown credential

In this example, a login attempt is made using discoverable credentials via a [`get()`](/en-US/docs/Web/API/CredentialsContainer/get) call. The credential is returned successfully, and the credential ID and payload are stored in constants.

The payload is sent to the RP server via a [`fetch()`](/en-US/docs/Web/API/Window/fetch) request to log the user in, but the request fails with a {{httpstatus("404")}} response because the RP doesn't recognize that user (for example because that credential was previously deleted from the RP).

As a result of this, we invoke the `signalUnknownCredential()` method, passing it the `rpId` and credential ID, to inform the authenticator that the credential is unknown to the RP. The authenticator should then delete the credential so it does not cause the same problem again.

```js
const credential = await navigator.credentials.get({
  challenge: new Uint8Array([139, 66, 181, 87, 7, 203, ...]),
  rpId: "example.com",
  allowCredentials: []
  // Empty allowCredentials list means only discoverable
  // credentials are presented to the user
});

// Retrieve base64url-encoded credential ID,
// such as "vI0qOggiE3OT01ZRWBYz5l4MEgU0c7PmAA"
const credID = credential.id;
// Retrieve payload to send to the RP server
const payload = credential.toJSON();

const result = await fetch("/login", {
  // fetch() options, will include the payload in the request body
});

// Detect authentication failure due to lack of the credential
if (result.status === 404) {
  if (PublicKeyCredential.signalUnknownCredential) {
    await PublicKeyCredential.signalUnknownCredential({
      rpId: "example.com",
      credentialId: credID
    });
  } else {
    // Encourage the user to delete the credential from the authenticator
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("PublicKeyCredential.signalAllAcceptedCredentials_static", "PublicKeyCredential.signalAllAcceptedCredentials()")}}
- {{domxref("PublicKeyCredential.signalCurrentUserDetails_static", "PublicKeyCredential.signalCurrentUserDetails()")}}
- [Keep passkeys consistent with credentials on your server with the Signal API](https://developer.chrome.com/docs/identity/webauthn-signal-api) on developer.chrome.com (2024)

---
title: "PublicKeyCredential: signalUnknownCredential() static method"
short-title: signalUnknownCredential()
slug: Web/API/PublicKeyCredential/signalUnknownCredential_static
page-type: web-api-static-method
browser-compat: api.PublicKeyCredential.signalUnknownCredential_static
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

The **`signalUnknownCredential()`** static method of the {{domxref("PublicKeyCredential")}} interface signals to the authenticator that a [credential ID](/en-US/docs/Web/API/PublicKeyCredentialRequestOptions#id) was not recognized by the [relying party](https://en.wikipedia.org/wiki/Relying_party) server.

## Description

It is possible for the information stored in a user's authenticator about a [discoverable credential](/en-US/docs/Web/API/Web_Authentication_API#discoverable_credentials_and_conditional_mediation) (for example, [a passkey](https://passkeys.dev/)) to go out sync with the relying party's server. This usually occurs when the user deletes a credential from the relying party's site without updating the authenticator.

The next time they try to sign in with a discoverable credential, the deleted credential will still be presented in the relevant UI, but the attempt to sign in will fail because the server won't recognize it. This results in a confusing user experience.

`signalUnknownCredential()` can then be called on the relying party site to tell the authenticator that the credential ID was not recognized. It is up to the authenticator how to handle this information, but the expectation is that it will delete the relevant credential so that the same confusion does not occur again.

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
      - : A string representing the [`id` of the relying party](/en-US/docs/Web/API/PublicKeyCredentialCreationOptions#id_2) that sent the signal.

### Return value

A {{jsxref("Promise")}} that resolves to {{jsxref("undefined")}}.

### Exceptions

The promise rejects with a `TypeError` {{domxref("DOMException")}} if the `credentialId` is not a valid base64url-encoded string.

## Examples

The following snippet shows typical usage of `signalUnknownCredential()`:

```js
const credential = await navigator.credentials.get({
  // get() options
});

const payload = credential.toJSON();

const result = await fetch("/login", {
  // fetch() options, will include the payload in the request body
});

// Detect authentication failure due to lack of the credential
if (result.status === 404) {
  // Feature detection
  if (PublicKeyCredential.signalUnknownCredential) {
    await PublicKeyCredential.signalUnknownCredential({
      rpId: "example.com",
      credentialId: "vI0qOggiE3OT01ZRWBYz5l4MEgU0c7PmAA", // base64url-encoded credential ID
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

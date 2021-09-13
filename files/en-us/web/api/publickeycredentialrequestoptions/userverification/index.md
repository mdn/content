---
title: PublicKeyCredentialRequestOptions.userVerification
slug: Web/API/PublicKeyCredentialRequestOptions/userVerification
tags:
  - API
  - Property
  - PublicKeyCredentialRequestOptions
  - Reference
  - Web Authentication API
  - WebAuthn
browser-compat: api.PublicKeyCredentialRequestOptions.userVerification
---
{{APIRef("Web Authentication API")}}{{securecontext_header}}

**`userVerification`** is an optional property of the
{{domxref("PublicKeyCredentialRequestOptions")}}. This is a string which indicates how
the user verification should be part of the authentication process.

> **Note:** An analogous option exists for the creation operation
> ({{domxref("CredentialsContainer.create","navigators.credentials.create()")}}), see
> the `userVerification` property of
> {{domxref("PublicKeyCredentialCreationOptions.authenticatorSelection")}}.

## Syntax

```js
userVerification = publicKeyCredentialRequestOptions.userVerification
```

### Value

A string qualifying how the user verification should be part of the authentication
process. The values may be:

- `"required"`: user verification is required, the operation will fail if
  the {{domxref("AuthenticatorAssertionResponse","response","",1)}} does not have the UV
  flag (as part of {{domxref("AuthenticatorAssertionResponse.authenticatorData")}})
- `"preferred"`: user verification is preferred, the operation will not
  fail if the {{domxref("AuthenticatorAssertionResponse","response","",1)}} does not
  have the UV flag (as part of
  {{domxref("AuthenticatorAssertionResponse.authenticatorData")}})
- `"discouraged"`: user verification should not be employed as to minimize
  the user interaction during the process.

The default value is `"preferred"`.

## Examples

```js
var options = {
  userVerification: "preferred",
  challenge: new Uint8Array([/* bytes sent from the server */]),
};

navigator.credentials.get({ "publicKey": options })
    .then(function (credentialInfoAssertion) {
    // send assertion response back to the server
    // to proceed with the control of the credential
}).catch(function (err) {
     console.error(err);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("PublicKeyCredentialCreationOptions.authenticatorSelection")}} whose
  `userVerification` property serves the same purpose for credential
  creation.

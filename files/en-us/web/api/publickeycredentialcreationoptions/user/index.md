---
title: PublicKeyCredentialCreationOptions.user
slug: Web/API/PublicKeyCredentialCreationOptions/user
tags:
  - API
  - Property
  - PublicKeyCredentialCreationOptions
  - Reference
  - Web Authentication API
  - WebAuthn
browser-compat: api.PublicKeyCredentialCreationOptions.user
---
{{APIRef("Web Authentication API")}}{{securecontext_header}}

The **`user`** property of the
{{domxref("PublicKeyCredentialCreationOptions")}} dictionary is an object describing the
user account for which the credentials are generated (via
{{domxref("CredentialsContainer.create()","navigator.credentials.create()")}}).

## Syntax

```js
userAccount = publicKeyCredentialCreationOptions.user
```

## Properties

- `displayName`
  - : A {{domxref("DOMString")}} which is human readable and intended for display. It may
    be the full name of the user (e.g. `"John Doe"`). This is not intended to
    store the login of the user (see `name` below).
- `icon` {{optional_inline}}
  - : An URL as a {{domxref("USVString")}} value which points to an image resource which
    can be the avatar image for the user.
- `id`
  - : A {{domxref("BufferSource")}} uniquely identifying a given user. This an opaque
    identifier which can be used by the authenticator to link the user account with its
    corresponding credentials. This value will later be used when fetching the credentials
    in {{domxref("AuthenticatorAssertionResponse.userHandle")}}.
- `name`
  - : A {{domxref("DOMString")}} giving a human-readable name for the user's identifier
    (e.g. `"jdoe@example.com"`).This property is intended for display and may
    be use to distinguish different account with the same `displayName`.

## Examples

```js
var publicKey = {
  challenge: new Uint8Array(26) /* this actually is given from the server */,
  rp: {
    name: "Example CORP",
    id  : "login.example.com"
  },
  user: {
    // To be changed for each user
    id: new Uint8Array.from(window.atob("LAEGMLKJNRLKGNAMLAFALFKA="), c=>c.charCodeAt(0));

    name: "jdoe@example.com",
    displayName: "John Doe",
    icon: "https://gravatar.com/avatar/jdoe.png"
  },
  pubKeyCredParams: [
    {
      type: "public-key",
      alg: -7
    }
  ]
};

navigator.credentials.create({ publicKey })
  .then(function (newCredentialInfo) {
    // send attestation response and client extensions
    // to the server to proceed with the registration
    // of the credential
  }).catch(function (err) {
     console.error(err);
  });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("AuthenticatorAssertionResponse.userHandle")}} which should match the
  `id` property of `user` for the same user/credential.

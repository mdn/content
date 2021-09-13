---
title: PublicKeyCredentialRequestOptions.rpId
slug: Web/API/PublicKeyCredentialRequestOptions/rpId
tags:
  - API
  - Property
  - PublicKeyCredentialRequestOptions
  - Reference
  - Web Authentication API
  - WebAuthn
browser-compat: api.PublicKeyCredentialRequestOptions.rpId
---
{{APIRef("Web Authentication API")}}{{securecontext_header}}

The **`rpId`** property, of the
{{domxref("PublicKeyCredentialRequestOptions")}} dictionary, is an optional property
which indicates the relying party's identifier as a {{domxref("USVString")}}. Its value
can only be a suffix of the current origin's domain. For example, if you are browsing on
`foo.example.com`, the `rpId` value may be
`"example.com"` but not `"bar.org"` or
`"baz.example.com"`.

This property is optional. If it is not explicitly provided, the user agent will use
the value of the current origin's domain.

> **Note:** An analogous option exists for the creation operation
> ({{domxref("CredentialsContainer.create","navigators.credentials.create()")}}), see
> the `id` property of {{domxref("PublicKeyCredentialCreationOptions.rp")}}.

## Syntax

```js
rpId = publicKeyCredentialRequestOptions.rpId
```

### Value

A {{domxref("USVString")}} for the identifier of the relying party. Its value can only
be a suffix of the current origin's domain.

## Examples

```js
var options = {
  challenge: new Uint8Array([/* bytes sent from the server */]),
  rpId: "example.com" // will only work if the current domain
                      // is something like foo.example.com
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

- {{domxref("PublicKeyCredentialCreationOptions.rp")}} which represents the relying
  party (including its ID) for the creation operation

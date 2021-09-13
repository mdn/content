---
title: PublicKeyCredentialCreationOptions.timeout
slug: Web/API/PublicKeyCredentialCreationOptions/timeout
tags:
  - API
  - Property
  - PublicKeyCredentialCreationOptions
  - Reference
  - Web Authentication API
  - WebAuthn
browser-compat: api.PublicKeyCredentialCreationOptions.timeout
---
{{APIRef("Web Authentication API")}}{{securecontext_header}}

The **`timeout`** property, of the
{{domxref("PublicKeyCredentialCreationOptions")}} dictionary, represents an hint, given
in milliseconds, for the time the script is willing to wait for the completion of the
creation operation.

This property is optional and merely is a _hint_ which may be overridden by the
browser.

> **Note:** An analogous option exists for the fetching operation
> ({{domxref("CredentialsContainer.get","navigators.credentials.get()")}}), see
> {{domxref("PublicKeyCredentialRequestOptions.timeout")}}.

## Syntax

```js
timeout = publicKeyCredentialCreationOptions.timeout
```

### Value

A numerical hint, expressed in milliseconds, giving the time to wait for the creation
operation to complete.

## Examples

```js
var publicKey = {
  timeout: 60000, // Accepting to wait for a minute before giving up.
  challenge: new Uint8Array(26) /* this actually is given from the server */,
  rp: {
    name: "Example CORP",
    id  : "login.example.com"
  },
  user: {
    id: new Uint8Array(26), /* To be changed for each user */
    name: "jdoe@example.com",
    displayName: "John Doe",
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

- {{domxref("PublicKeyCredentialRequestOptions.timeout")}}, the analogous option
  property used when fetching a credential.

---
title: PublicKeyCredentialRequestOptions.timeout
slug: Web/API/PublicKeyCredentialRequestOptions/timeout
tags:
  - API
  - Property
  - PublicKeyCredentialRequestOptions
  - Reference
  - Web Authentication API
  - WebAuthn
browser-compat: api.PublicKeyCredentialRequestOptions.timeout
---
{{APIRef("Web Authentication API")}}{{securecontext_header}}

The **`timeout`** property, of the
{{domxref("PublicKeyCredentialRequestOptions")}} dictionary, represents an hint, given
in milliseconds, for the time the script is willing to wait for the completion of the
retrieval operation.

This property is optional and merely is a _hint_ which may be overridden by the
browser.

> **Note:** An analogous option exists for the creation operation
> ({{domxref("CredentialsContainer.create","navigators.credentials.create()")}}), see
> {{domxref("PublicKeyCredentialCreationOptions.timeout")}}.

## Syntax

```js
timeout = publicKeyCredentialRequestOptions.timeout
```

### Value

A numerical hint, expressed in milliseconds, giving the time to wait for the creation
operation to complete.

## Examples

```js
var options = {
  challenge: new Uint8Array([/* bytes sent from the server */]),
  timeout: 6000  // Wait a minute for the fetching operation
                 // and maybe fail if it takes longer
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

- {{domxref("PublicKeyCredentialCreationOptions.timeout")}}, the analogous option
  property used when creating a credential.

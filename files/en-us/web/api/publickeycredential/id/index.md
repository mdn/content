---
title: PublicKeyCredential.id
slug: Web/API/PublicKeyCredential/id
tags:
  - API
  - Credential Management API
  - Property
  - PublicKeyCredential
  - Reference
  - Web Authentication API
  - WebAuthn
browser-compat: api.PublicKeyCredential.id
---
{{APIRef("Web Authentication API")}}{{securecontext_header}}

The **`id`** read-only property of the
{{domxref("PublicKeyCredential")}} interface is a {{domxref("DOMString")}}, inherited
from {{domxref("Credential")}}, which represents the identifier of the current
`PublicKeyCredential` instance.

This property is a [base64url
encoded](/en-US/docs/Glossary/Base64) version of {{domxref("PublicKeyCredential.rawId")}}.

> **Note:** This property may only be used in top-level contexts and will
> not be available in an {{HTMLElement("iframe")}} for example.

## Syntax

```js
id = publicKeyCredential.id
```

### Value

A {{domxref("DOMString")}} being the [base64url
encoded](/en-US/docs/Glossary/Base64) version of {{domxref("PublicKeyCredential.rawId")}}.

## Examples

```js
var publicKey = {
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
    var id = newCredentialInfo.id;
    // Do something with the id

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

- {{domxref("Credential.id")}}

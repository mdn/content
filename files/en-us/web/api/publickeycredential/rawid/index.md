---
title: "PublicKeyCredential: rawId property"
short-title: rawId
slug: Web/API/PublicKeyCredential/rawId
page-type: web-api-instance-property
browser-compat: api.PublicKeyCredential.rawId
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

The **`rawId`** read-only property of the
{{domxref("PublicKeyCredential")}} interface is an {{jsxref("ArrayBuffer")}} object
containing the identifier of the credentials.

The {{domxref("PublicKeyCredential.id")}} property is a [base64url encoded](/en-US/docs/Glossary/Base64) version of this identifier.

> [!NOTE]
> This property may only be used in top-level contexts and will
> not be available in an {{HTMLElement("iframe")}} for example.

## Value

A {{jsxref("ArrayBuffer")}} containing the identifier of the credentials. This
identifier is expected to be globally unique and is appointed for the current
`PublicKeyCredential` and its associated
{{domxref("AuthenticatorAssertionResponse")}}.

## Examples

```js
const options = {
  challenge: new Uint8Array(26) /* from the server */,
  rp: {
    name: "Example CORP",
    id: "login.example.com",
  },
  user: {
    id: new Uint8Array(26) /* To be changed for each user */,
    name: "canand@example.com",
    displayName: "Carina Anand",
  },
  pubKeyCredParams: [
    {
      type: "public-key",
      alg: -7,
    },
  ],
};

navigator.credentials
  .create({ publicKey: options })
  .then((pubKeyCredential) => {
    const rawId = pubKeyCredential.rawId;
    // Do something with rawId
  })
  .catch((err) => {
    // Deal with any error
  });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

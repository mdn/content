---
title: AuthenticatorResponse
slug: Web/API/AuthenticatorResponse
tags:
  - API
  - Authentication
  - AuthenticatorResponse
  - Interface
  - Reference
  - Web Authentication API
  - WebAuthn
browser-compat: api.AuthenticatorResponse
---
{{APIRef("Web Authentication API")}}{{securecontext_header}}

The **`AuthenticatorResponse`** interface of the [Web Authentication API](/en-US/docs/Web/API/Web_Authentication_API) is the base interface for interfaces that provide a cryptographic root of trust for a key pair. The child interfaces include information from the browser such as the challenge origin and either may be returned from {{domxref("PublicKeyCredential.response")}}.

## Interfaces based on AuthenticatorResponse

Below is a list of interfaces based on the AuthenticatorResponse interface.

- {{domxref("AuthenticatorAssertionResponse")}}
- {{domxref("AuthenticatorAttestationResponse")}}

## Properties

- {{domxref("AuthenticatorResponse.clientDataJSON")}}
  - : A [JSON](/en-US/docs/Learn/JavaScript/Objects/JSON) string in an {{jsxref("ArrayBuffer")}}, representing the client data that was passed to {{domxref("CredentialsContainer.create()")}} or {{domxref("CredentialsContainer.get()")}}.

## Methods

None.

## Examples

### Getting an AuthenticatorAssertionResponse

```js
var options = {
  challenge: new Uint8Array([/* bytes sent from the server */])
};

navigator.credentials.get({ "publicKey": options })
    .then(function (credentialInfoAssertion) {
    var assertionResponse = credentialInfoAssertion.response;
    // send assertion response back to the server
    // to proceed with the control of the credential
}).catch(function (err) {
     console.error(err);
});
```

### Getting an AuthenticatorAttestationResponse

```js
var publicKey = {
  challenge: /* from the server */,
  rp: {
    name: "Example CORP",
    id  : "login.example.com"
  },
  user: {
    id: new Uint8Array(16),
    name: "jdoe@example.com",
    displayName: "John Doe"
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
    var attestationResponse = newCredentialInfo.response;
  }).catch(function (err) {
     console.error(err);
  });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("AuthenticatorAttestationResponse")}}
- {{domxref("AuthenticatorAssertionResponse")}}
- {{domxref("PublicKeyCredential.response")}}

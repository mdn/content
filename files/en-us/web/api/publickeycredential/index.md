---
title: PublicKeyCredential
slug: Web/API/PublicKeyCredential
tags:
  - API
  - Authentication
  - Interface
  - PublicKeyCredential
  - Reference
  - Web Authentication API
  - WebAuthn
browser-compat: api.PublicKeyCredential
---
{{APIRef("Web Authentication API")}}{{securecontext_header}}

The **`PublicKeyCredential`** interface provides information about a public key / private key pair, which is a credential for logging in to a service using an un-phishable and data-breach resistant asymmetric key pair instead of a password. It inherits from {{domxref("Credential")}}, and was created by the [Web Authentication API](/en-US/docs/Web/API/Web_Authentication_API) extension to the [Credential Management API](/en-US/docs/Web/API/Credential_Management_API). Other interfaces that inherit from {{domxref("Credential")}} are {{domxref("PasswordCredential")}} and {{domxref("FederatedCredential")}}.

> **Note:** This API is restricted to top-level contexts. Use from within an {{HTMLElement("iframe")}} element will not have any effect.

## Properties

- `PublicKeyCredential.type` {{ReadOnlyInline()}}{{securecontext_inline}}
  - : Inherited from {{domxref("Credential")}}. Always set to `public-key` for `PublicKeyCredential` instances.
- {{domxref("PublicKeyCredential.id")}} {{ReadOnlyInline()}}{{securecontext_inline}}
  - : Inherited from {{domxref("Credential")}} and overridden to be the [base64url encoding](/en-US/docs/Glossary/Base64) of {{domxref("PublicKeyCredential.rawId")}}.
- {{domxref("PublicKeyCredential.rawId")}} {{ReadOnlyInline()}}{{securecontext_inline}}
  - : An {{jsxref("ArrayBuffer")}} that holds the globally unique identifier for this `PublicKeyCredential`. This identifier can be used to look up credentials for future calls to {{domxref("CredentialsContainer.get")}}.
- {{domxref("PublicKeyCredential.response")}} {{ReadOnlyInline()}} {{securecontext_inline}}
  - : An instance of an {{domxref("AuthenticatorResponse")}} object. It is either of type {{domxref("AuthenticatorAttestationResponse")}} if the `PublicKeyCredential` was the results of a {{domxref("CredentialsContainer.create()","navigator.credentials.create()")}} call, or of type {{domxref("AuthenticatorAssertionResponse")}} if the `PublicKeyCredential` was the result of a {{domxref("CredentialsContainer.get()","navigator.credentials.get()")}} call.

## Methods

- {{domxref("PublicKeyCredential.getClientExtensionResults()")}}{{securecontext_inline}}
  - : If any extensions were requested, this method will return the results of processing those extensions.
- {{domxref("PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable()")}}{{securecontext_inline}}
  - : A static method returning a {{jsxref("Promise")}} which resolves to `true` if an authenticator bound to the platform is capable of _verifying_ the user.

## Examples

### Creating a new instance of PublicKeyCredential

Here, we use {{domxref("CredentialsContainer.create()","navigator.credentials.create()")}} to generate a new credential.

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
    var response = newCredentialInfo.response;
    var clientExtensionsResults = newCredentialInfo.getClientExtensionResults();
  }).catch(function (err) {
     console.error(err);
  });
```

### Getting an existing instance of PublicKeyCredential

Here, we fetch an existing credential from an authenticator, using {{domxref("CredentialsContainer.get()","navigator.credentials.get()")}}.

```js
var options = {
  challenge: new Uint8Array([/* bytes sent from the server */])
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

- The parent interface {{domxref("Credential")}}

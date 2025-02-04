---
title: PublicKeyCredential
slug: Web/API/PublicKeyCredential
page-type: web-api-interface
browser-compat: api.PublicKeyCredential
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

The **`PublicKeyCredential`** interface provides information about a public key / private key pair, which is a credential for logging in to a service using an un-phishable and data-breach resistant asymmetric key pair instead of a password. It inherits from {{domxref("Credential")}}, and is part of the [Web Authentication API](/en-US/docs/Web/API/Web_Authentication_API) extension to the [Credential Management API](/en-US/docs/Web/API/Credential_Management_API).

{{InheritanceDiagram}}

> [!NOTE]
> This API is restricted to top-level contexts. Use from within an {{HTMLElement("iframe")}} element will not have any effect.

## Instance properties

- {{domxref("PublicKeyCredential.authenticatorAttachment")}} {{ReadOnlyInline}}

  - : A string that indicates the mechanism by which the WebAuthn implementation is attached to the authenticator at the time the associated {{domxref("CredentialsContainer.create()","navigator.credentials.create()")}} or {{domxref("CredentialsContainer.get()","navigator.credentials.get()")}} call completes.

- {{domxref("PublicKeyCredential.id")}} {{ReadOnlyInline}}

  - : Inherited from {{domxref("Credential")}} and overridden to be the [base64url encoding](/en-US/docs/Glossary/Base64) of {{domxref("PublicKeyCredential.rawId")}}.

- {{domxref("PublicKeyCredential.rawId")}} {{ReadOnlyInline}}
  - : An {{jsxref("ArrayBuffer")}} that holds the globally unique identifier for this `PublicKeyCredential`. This identifier can be used to look up credentials for future calls to {{domxref("CredentialsContainer.get()","navigator.credentials.get()")}}.
- {{domxref("PublicKeyCredential.response")}} {{ReadOnlyInline}}
  - : An instance of an {{domxref("AuthenticatorResponse")}} object. It is either of type {{domxref("AuthenticatorAttestationResponse")}} if the `PublicKeyCredential` was the results of a {{domxref("CredentialsContainer.create()","navigator.credentials.create()")}} call, or of type {{domxref("AuthenticatorAssertionResponse")}} if the `PublicKeyCredential` was the result of a {{domxref("CredentialsContainer.get()","navigator.credentials.get()")}} call.
- `PublicKeyCredential.type` {{ReadOnlyInline}}
  - : Inherited from {{domxref("Credential")}}. Always set to `public-key` for `PublicKeyCredential` instances.

## Static methods

- {{domxref("PublicKeyCredential.getClientCapabilities_static", "PublicKeyCredential.getClientCapabilities()")}}
  - : Returns a {{jsxref("Promise")}} that resolves with an object that can be used to check whether or not particular WebAuthn capabilities and [extensions](/en-US/docs/Web/API/Web_Authentication_API/WebAuthn_extensions) are supported.
- {{domxref("PublicKeyCredential.isConditionalMediationAvailable_static", "PublicKeyCredential.isConditionalMediationAvailable()")}}
  - : Returns a {{jsxref("Promise")}} which resolves to `true` if conditional mediation is available.
- {{domxref("PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable_static", "PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable()")}}
  - : Returns a {{jsxref("Promise")}} which resolves to `true` if an authenticator bound to the platform is capable of _verifying_ the user.
- {{domxref("PublicKeyCredential.parseCreationOptionsFromJSON_static", "PublicKeyCredential.parseCreationOptionsFromJSON()")}}
  - : Convenience method for deserializing server-sent credential registration data when [registering a user with credentials](/en-US/docs/Web/API/Web_Authentication_API#creating_a_key_pair_and_registering_a_user).
- {{domxref("PublicKeyCredential.parseRequestOptionsFromJSON_static", "PublicKeyCredential.parseRequestOptionsFromJSON()")}}
  - : Convenience method for deserializing server-sent credential request data when [authenticating a (registered) user](/en-US/docs/Web/API/Web_Authentication_API#authenticating_a_user).
- {{domxref("PublicKeyCredential.signalAllAcceptedCredentials_static", "PublicKeyCredential.signalAllAcceptedCredentials()")}} {{experimental_inline}}
  - : Signals to the authenticator all of the valid [credential IDs](/en-US/docs/Web/API/PublicKeyCredentialRequestOptions#id) that the [relying party](https://en.wikipedia.org/wiki/Relying_party) server still holds for a particular user.
- {{domxref("PublicKeyCredential.signalCurrentUserDetails_static", "PublicKeyCredential.signalCurrentUserDetails()")}} {{experimental_inline}}
  - : Signals to the authenticator that a particular user has updated their user name and/or display name.
- {{domxref("PublicKeyCredential.signalUnknownCredential_static", "PublicKeyCredential.signalUnknownCredential()")}} {{experimental_inline}}
  - : Signals to the authenticator that a [credential ID](/en-US/docs/Web/API/PublicKeyCredentialRequestOptions#id) was not recognized by the [relying party](https://en.wikipedia.org/wiki/Relying_party) server, for example because it was deleted.

## Instance methods

- {{domxref("PublicKeyCredential.getClientExtensionResults()")}}
  - : If any extensions were requested, this method will return the results of processing those extensions.
- {{domxref("PublicKeyCredential.toJSON()")}}
  - : Convenience method for creating a JSON string representation of a `PublicKeyCredential` for sending to the server when [registering a user with credentials](/en-US/docs/Web/API/Web_Authentication_API#creating_a_key_pair_and_registering_a_user) and [authenticating a registered user](/en-US/docs/Web/API/Web_Authentication_API#authenticating_a_user).

## Examples

### Creating a new instance of PublicKeyCredential

Here, we use {{domxref("CredentialsContainer.create()","navigator.credentials.create()")}} to generate a new credential.

```js
const createCredentialOptions = {
  publicKey: {
    challenge: new Uint8Array([
      21, 31, 105 /* 29 more random bytes generated by the server */,
    ]),
    rp: {
      name: "Example CORP",
      id: "login.example.com",
    },
    user: {
      id: new Uint8Array(16),
      name: "canand@example.com",
      displayName: "Carina Anand",
    },
    pubKeyCredParams: [
      {
        type: "public-key",
        alg: -7,
      },
    ],
  },
};

navigator.credentials
  .create(createCredentialOptions)
  .then((newCredentialInfo) => {
    const response = newCredentialInfo.response;
    const clientExtensionsResults =
      newCredentialInfo.getClientExtensionResults();
  })
  .catch((err) => {
    console.error(err);
  });
```

### Getting an existing instance of PublicKeyCredential

Here, we fetch an existing credential from an authenticator, using {{domxref("CredentialsContainer.get()","navigator.credentials.get()")}}.

```js
const requestCredentialOptions = {
  publicKey: {
    challenge: new Uint8Array([
      /* bytes sent from the server */
    ]),
  },
};

navigator.credentials
  .get(requestCredentialOptions)
  .then((credentialInfoAssertion) => {
    // send assertion response back to the server
    // to proceed with the control of the credential
  })
  .catch((err) => {
    console.error(err);
  });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The parent interface {{domxref("Credential")}}

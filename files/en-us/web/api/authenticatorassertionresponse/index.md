---
title: AuthenticatorAssertionResponse
slug: Web/API/AuthenticatorAssertionResponse
page-type: web-api-interface
tags:
  - API
  - Authentication
  - AuthenticatorAssertionResponse
  - Interface
  - Reference
  - Web Authentication API
  - WebAuthn
browser-compat: api.AuthenticatorAssertionResponse
---
{{APIRef("Web Authentication API")}}{{securecontext_header}}

The **`AuthenticatorAssertionResponse`** interface of the [Web Authentication API](/en-US/docs/Web/API/Web_Authentication_API) is returned by {{domxref('CredentialsContainer.get()')}} when a {{domxref('PublicKeyCredential')}} is passed, and provides proof to a service that it has a key pair and that the authentication request is valid and approved.

This interface inherits from {{domxref("AuthenticatorResponse")}}.

{{InheritanceDiagram}}

> **Note:** This interface is restricted to top-level contexts. Use from within an {{HTMLElement("iframe")}} element will not have any effect.

## Properties

- `AuthenticatorAssertionResponse.clientDataJSON` {{securecontext_inline}} {{ReadOnlyInline}}
  - : The client data for the authentication, such as origin and challenge. The {{domxref("AuthenticatorAttestationResponse.clientDataJSON","clientDataJSON")}} property is inherited from the {{domxref("AuthenticatorResponse")}}.
- {{domxref("AuthenticatorAssertionResponse.authenticatorData")}} {{securecontext_inline}} {{ReadOnlyInline}}
  - : An {{jsxref("ArrayBuffer")}} containing information from the authenticator such as the Relying Party ID Hash (rpIdHash), a signature counter, test of user presence and user verification flags, and any extensions processed by the authenticator.
- {{domxref("AuthenticatorAssertionResponse.signature")}} {{securecontext_inline}} {{ReadOnlyInline}}
  - : An assertion signature over {{domxref("AuthenticatorAssertionResponse.authenticatorData")}} and {{domxref("AuthenticatorResponse.clientDataJSON")}}. The assertion signature is created with the private key of keypair that was created during the {{domxref("CredentialsContainer.create()","navigator.credentials.create()")}} call and verified using the public key of that same keypair.
- {{domxref("AuthenticatorAssertionResponse.userHandle")}} {{securecontext_inline}} {{ReadOnlyInline}}
  - : An {{jsxref("ArrayBuffer")}} containing an opaque user identifier.

## Methods

None.

## Examples

```js
const options = {
  challenge: new Uint8Array([/* bytes sent from the server */])
};

navigator.credentials.get({ "publicKey": options })
    .then((credentialInfoAssertion) => {
    const assertionResponse = credentialInfoAssertion.response;
    // Do something specific with the response

    // send assertion response back to the server
    // to proceed with the control of the credential
  })
  .catch((err) => console.error(err));
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("AuthenticatorAttestationResponse")}}: the interface for the type of response given when creating a new credential
- {{domxref("AuthenticatorResponse")}}: the parent interface

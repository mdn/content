---
title: AuthenticatorAssertionResponse
slug: Web/API/AuthenticatorAssertionResponse
page-type: web-api-interface
browser-compat: api.AuthenticatorAssertionResponse
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

The **`AuthenticatorAssertionResponse`** interface of the [Web Authentication API](/en-US/docs/Web/API/Web_Authentication_API) contains a [digital signature](/en-US/docs/Glossary/Signature/Security) from the private key of a particular WebAuthn credential. The relying party's server can verify this signature to authenticate a user, for example when they sign in.

An `AuthenticatorAssertionResponse` object instance is available in the {{domxref("PublicKeyCredential.response", "response")}} property of a {{domxref("PublicKeyCredential")}} object returned by a successful {{domxref("CredentialsContainer.get()", "navigator.credentials.get()")}} call.

This interface inherits from {{domxref("AuthenticatorResponse")}}.

{{InheritanceDiagram}}

> **Note:** This interface is restricted to top-level contexts. Use from within an {{HTMLElement("iframe")}} element will not have any effect.

## Instance properties

_Also inherits properties from its parent, {{domxref("AuthenticatorResponse")}}._

- {{domxref("AuthenticatorAssertionResponse.authenticatorData")}} {{securecontext_inline}} {{ReadOnlyInline}}
  - : An {{jsxref("ArrayBuffer")}} containing information from the authenticator such as the Relying Party ID Hash (rpIdHash), a signature counter, test of user presence and user verification flags, and any extensions processed by the authenticator.
- {{domxref("AuthenticatorResponse.clientDataJSON")}} {{securecontext_inline}} {{ReadOnlyInline}}
  - : Contains the JSON-compatible serialization of the data passed from the browser to the authenticator in order to authenticate with this credential — i.e., when {{domxref("CredentialsContainer.get()")}} is called with a `publicKey` option. This data contains some information from the options passed into the `get()` call, and some information controlled by the browser.
- {{domxref("AuthenticatorAssertionResponse.signature")}} {{securecontext_inline}} {{ReadOnlyInline}}
  - : An assertion signature over {{domxref("AuthenticatorAssertionResponse.authenticatorData")}} and {{domxref("AuthenticatorResponse.clientDataJSON")}}. The assertion signature is created with the private key of the key pair that was created during the originating {{domxref("CredentialsContainer.create()","navigator.credentials.create()")}} call and verified using the public key of that same key pair.
- {{domxref("AuthenticatorAssertionResponse.userHandle")}} {{securecontext_inline}} {{ReadOnlyInline}}
  - : An {{jsxref("ArrayBuffer")}} containing an opaque user identifier, specified as `user.id` in the options passed to the originating {{domxref("CredentialsContainer.create()","navigator.credentials.create()")}} call.

## Instance methods

None.

## Examples

See [User login using the WebAuthn API](/en-US/docs/Web/API/CredentialsContainer/get#user_login_using_the_webauthn_api) for a detailed example.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("AuthenticatorAttestationResponse")}}: the interface for the type of response given when creating a new credential
- {{domxref("AuthenticatorResponse")}}: the parent interface

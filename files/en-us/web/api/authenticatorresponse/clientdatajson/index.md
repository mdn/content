---
title: AuthenticatorResponse.clientDataJSON
slug: Web/API/AuthenticatorResponse/clientDataJSON
page-type: web-api-instance-property
tags:
  - API
  - AuthenticatorResponse
  - Property
  - Reference
  - Web Authentication API
  - WebAuthn
browser-compat: api.AuthenticatorResponse.clientDataJSON
---
{{APIRef("Web Authentication API")}}{{securecontext_header}}

The **`clientDataJSON`** property of the
{{domxref("AuthenticatorResponse")}} interface stores a [JSON](/en-US/docs/Learn/JavaScript/Objects/JSON) string in an
{{jsxref("ArrayBuffer")}}, representing the client data that was passed to
{{domxref("CredentialsContainer.create()")}} or
{{domxref("CredentialsContainer.get()")}}. This property is only accessed on one of the
child objects of `AuthenticatorResponse`, specifically
{{domxref("AuthenticatorAttestationResponse")}} or
{{domxref("AuthenticatorAssertionResponse")}}.

## Value

An {{jsxref("ArrayBuffer")}}.

## Properties

After the `clientDataJSON` object is converted from an
`ArrayBuffer` to a JavaScript object, it will have the following properties:

- `type`
  - : A string which is either `"webauthn.get"` when an existing credential is
    retrieved or `"webauthn.create"` when a new credential is created.
- `challenge`
  - : The [base64url](/en-US/docs/Glossary/Base64)
    encoded version of the cryptographic challenge sent from the relying party's server.
    The original value is passed via
    {{domxref("PublicKeyCredentialRequestOptions.challenge")}} or
    {{domxref("PublicKeyCredentialCreationOptions.challenge")}}.
- `origin`
  - : The fully qualified origin of the requester which has been given by the
    client/browser to the authenticator. We should expect the _relying party's
    id_ to be a suffix of this value.
- `tokenBindingId` {{optional_inline}}

  - : An object describing the state of [the token binding protocol](https://datatracker.ietf.org/doc/html/rfc8471) for the communication with the relying party. It has
    two properties:

    - `status`: A string which is either `"supported"` which
      indicates the client support token binding but did not negotiate with the relying
      party or `"present"` when token binding was used already
    - `id`: A string which is the [base64url](/en-US/docs/Glossary/Base64)
      encoding of the token binding ID which was used for the communication.

    Should this property be absent, it would indicate that the client does not support
    token binding.

## Examples

```js
function arrayBufferToStr(buf) {
    return String.fromCharCode.apply(null, new Uint8Array(buf));
}

// pk is a PublicKeyCredential that is the result of a create() or get() Promise
const clientDataStr = arrayBufferToStr(pk.clientDataJSON);
const clientDataObj = JSON.parse(clientDataStr);

console.log(clientDataObj.type);      // "webauthn.create" or "webauthn.get"
console.log(clientDataObj.challenge); // base64 encoded String containing the original challenge
console.log(clientDataObj.origin);    // the window.origin
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

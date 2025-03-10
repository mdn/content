---
title: "AuthenticatorResponse: clientDataJSON property"
short-title: clientDataJSON
slug: Web/API/AuthenticatorResponse/clientDataJSON
page-type: web-api-instance-property
browser-compat: api.AuthenticatorResponse.clientDataJSON
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

The **`clientDataJSON`** property of the {{domxref("AuthenticatorResponse")}} interface stores a [JSON](/en-US/docs/Learn_web_development/Core/Scripting/JSON) string in an
{{jsxref("ArrayBuffer")}}, representing the client data that was passed to {{domxref("CredentialsContainer.create()", "navigator.credentials.create()")}} or {{domxref("CredentialsContainer.get()", "navigator.credentials.get()")}}. This property is only accessed on one of the child objects of `AuthenticatorResponse`, specifically {{domxref("AuthenticatorAttestationResponse")}} or {{domxref("AuthenticatorAssertionResponse")}}.

## Value

An {{jsxref("ArrayBuffer")}}.

## Instance properties

After the `clientDataJSON` object is converted from an
`ArrayBuffer` to a JavaScript object, it will have the following properties:

- `challenge`

  - : The [base64url](/en-US/docs/Glossary/Base64)
    encoded version of the cryptographic challenge sent from the relying party's server.
    The original value are passed as the `challenge` option in
    {{domxref("CredentialsContainer.get()")}} or
    {{domxref("CredentialsContainer.create()")}}.

- `crossOrigin` {{optional_inline}}

  - : A boolean. If set to `true`, it means that the calling context is an {{htmlelement("iframe")}} that is not same origin with its ancestor frames.

- `origin`

  - : The fully qualified origin of the relying party which has been given by the
    client/browser to the authenticator. We should expect the _relying party's
    id_ to be a suffix of this value.

- `tokenBinding` {{optional_inline}} {{deprecated_inline}}

  - : An object describing the state of [the token binding protocol](https://datatracker.ietf.org/doc/html/rfc8471) for the communication with the relying party. It has two properties:

    - `status`: A string which is either `"supported"` which
      indicates the client support token binding but did not negotiate with the relying
      party or `"present"` when token binding was used already
    - `id`: A string which is the [base64url](/en-US/docs/Glossary/Base64)
      encoding of the token binding ID which was used for the communication.

    Should this property be absent, it would indicate that the client does not support
    token binding.

    > **Note:** `tokenBinding` is deprecated as of Level 3 of the spec, but the field is reserved so that it won't be reused for a different purpose.

- `topOrigin` {{optional_inline}}

  - : Contains the fully qualified top-level origin of the relying party. It is set only if it `crossOrigin` is `true`.

- `type`
  - : A string which is either `"webauthn.get"` when an existing credential is
    retrieved or `"webauthn.create"` when a new credential is created.

## Examples

```js
function arrayBufferToStr(buf) {
  return String.fromCharCode.apply(null, new Uint8Array(buf));
}

// pk is a PublicKeyCredential that is the result of a create() or get() Promise
const clientDataStr = arrayBufferToStr(pk.response.clientDataJSON);
const clientDataObj = JSON.parse(clientDataStr);

console.log(clientDataObj.type); // "webauthn.create" or "webauthn.get"
console.log(clientDataObj.challenge); // base64 encoded String containing the original challenge
console.log(clientDataObj.origin); // the window.origin
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

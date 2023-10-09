---
title: "PublicKeyCredential: parseRequestOptionsFromJSON() static method"
short-title: parseRequestOptionsFromJSON()
slug: Web/API/PublicKeyCredential/parseRequestOptionsFromJSON_static
page-type: web-api-static-method
status:
  - experimental
browser-compat: api.PublicKeyCredential.parseRequestOptionsFromJSON_static
---

{{APIRef("Web Authentication API")}} {{SeeCompatTable}}{{securecontext_header}}

The **`parseRequestOptionsFromJSON()`** static method of the {{domxref("PublicKeyCredential")}} interface converts a particular JSON-friendly representation of the [`publicKey` request credentials options object structure](/en-US/docs/Web/API/CredentialsContainer/get#publickey_object_structure) into the `publicKey` structure.

The method is a convenience function for deserializing information provided by a relying server to a web app in order to request an existing credential.

## Syntax

```js-nolint
PublicKeyCredential.parseRequestOptionsFromJSON(options)
```

### Parameters

- `options`

  - : An object with the same structure as the Web Authentication API [`publicKey` request credentials options object structure](/en-US/docs/Web/API/CredentialsContainer/get#publickey_object_structure), but with [base64url](/en-US/docs/Glossary/Base64) encoded strings used in place of buffer properties.

### Return value

An object with the Web Authentication API [`publicKey` request credentials options object structure](/en-US/docs/Web/API/CredentialsContainer/get#publickey_object_structure).

### Exceptions

- `EncodingError` {{domxref("DOMException")}}
  - : Thrown if any part of the `options` object cannot be converted into the [`publicKey` request credentials options object structure](/en-US/docs/Web/API/CredentialsContainer/get#publickey_object_structure).

## Description

The Web Authentication process for [authenticating a (registering) user](/en-US/docs/Web/API/Web_Authentication_API#authenticating_a_user) involves a relying party server sending the web app information needed to find an existing the credential, including details about the user identity, the relying party, a "challenge", and optionally where to look for the credential: for example on a local built-in authenticator, or on an external one over USB, BLE, and so on.
The web app passes this information to an authenticator to find the credential, by calling [`navigator.credentials.get()`](/en-US/docs/Web/API/CredentialsContainer/get) with an argument that contains the server-supplied data in the [`publicKey` request credentials options object structure](/en-US/docs/Web/API/CredentialsContainer/get#publickey_object_structure).

The specification does not define how the information needed for requesting a credential is sent.
A convenient approach is to first encapulate the information in an object that mirrors the structure of the [`publicKey` request credentials options object structure](/en-US/docs/Web/API/CredentialsContainer/get#publickey_object_structure), encoding buffer properties such as the `challenge` as [base64url](/en-US/docs/Glossary/Base64) strings.
This object can be serialized to [JSON](/en-US/docs/Glossary/JSON) and then deserialized by the web app to the [`publicKey` request credentials options object structure](/en-US/docs/Web/API/CredentialsContainer/get#publickey_object_structure) using **`parseRequestOptionsFromJSON()`**.

## Examples

Consider a server might create JSON credentials something like this (taken from the [`AuthenticatorResponse` example "getting an AuthenticatorAttestationResponse"](/en-US/docs/Web/API/AuthenticatorResponse#getting_an_authenticatorattestationresponse)):

```js
const publicRequestKey =  {
    challenge: new Uint8Array([139, 66, 181, 87, 7, 203, ...]),
    rpId: "acme.com",
    allowCredentials: [{
      type: "public-key",
      id: new Uint8Array([64, 66, 25, 78, 168, 226, 174, ...])
    }],
    userVerification: "required",
  }

//Stringify to serialize/send
const publicKeyJSON = JSON.stringify(publicRequestKey);
```

The `publicKeypublicRequestKeyJSON` can be send to the web app, which will parse the JSON back into an object.
Below we show how you might use `parseRequestOptionsFromJSON()` to convert this parsed object "`receivedPublicKeyJSON`" to the correct form to use in `navigator.credentials.get()`:

```js
const publicKey = PublicKeyCredential.parseRequestOptionsFromJSON(
  receivedPublicKeyJSON,
);

navigator.credentials
  .get({ publicKey })
  .then((returnedCredentialInfo) => {
    // Handle the returned credential information here.
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

- {{domxref("PublicKeyCredential.parseCreationOptionsFromJSON_static", "PublicKeyCredential.parseCreationOptionsFromJSON()")}}
- {{domxref("PublicKeyCredential.toJSON()")}}

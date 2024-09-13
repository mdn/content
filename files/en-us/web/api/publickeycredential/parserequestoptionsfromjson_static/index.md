---
title: "PublicKeyCredential: parseRequestOptionsFromJSON() static method"
short-title: parseRequestOptionsFromJSON()
slug: Web/API/PublicKeyCredential/parseRequestOptionsFromJSON_static
page-type: web-api-static-method
browser-compat: api.PublicKeyCredential.parseRequestOptionsFromJSON_static
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

The **`parseRequestOptionsFromJSON()`** static method of the {{domxref("PublicKeyCredential")}} interface converts a {{glossary("JSON type representation")}} into a {{domxref("PublicKeyCredentialRequestOptions")}} instance.

The method is a convenience function for converting information provided by a relying server to a web app in order to request an existing credential.

## Syntax

```js-nolint
PublicKeyCredential.parseRequestOptionsFromJSON(options)
```

### Parameters

- `options`

  - : An object with the same structure as a {{domxref("PublicKeyCredentialRequestOptions")}} instance, but with [base64url](/en-US/docs/Glossary/Base64)-encoded strings used in place of buffer properties.

### Return value

A {{domxref("PublicKeyCredentialRequestOptions")}} instance.

### Exceptions

- `EncodingError` {{domxref("DOMException")}}
  - : Thrown if any part of the `options` object cannot be converted into a {{domxref("PublicKeyCredentialRequestOptions")}} instance.

## Description

The Web Authentication process for [authenticating a (registered) user](/en-US/docs/Web/API/Web_Authentication_API#authenticating_a_user) involves a relying party server sending the web app information needed to find an existing credential, including details about the user identity, the relying party, a "challenge", and optionally where to look for the credential: for example on a local built-in authenticator, or on an external one over USB, BLE, and so on.
The web app passes this information to an authenticator to find the credential, by calling [`navigator.credentials.get()`](/en-US/docs/Web/API/CredentialsContainer/get) with an argument that contains the server-supplied data as a {{domxref("PublicKeyCredentialRequestOptions")}} instance

The specification does not define how the information needed for requesting a credential is sent.
A convenient approach is for the server to encapsulate the information in a {{glossary("JSON type representation")}} of a {{domxref("PublicKeyCredentialRequestOptions")}} instance, that mirrors its structure but encodes buffer properties such as the `challenge` as [base64url](/en-US/docs/Glossary/Base64) strings.
This object can be serialized to a [JSON](/en-US/docs/Glossary/JSON) string, sent to the web app and deserialized, and then converted to a {{domxref("PublicKeyCredentialRequestOptions")}} instance using **`parseRequestOptionsFromJSON()`**.

## Examples

When authorizing an already registered user, a relying party server will supply the web app with information about the requested credentials, the relying party, and a challenge.
The code below defines this information in the form described in the [`options` parameter](#options) above:

```js
const requestCredentialOptionsJSON =  {
    challenge: new Uint8Array([139, 66, 181, 87, 7, 203, ...]),
    rpId: "acme.com",
    allowCredentials: [{
      type: "public-key",
      id: new Uint8Array([64, 66, 25, 78, 168, 226, 174, ...])
    }],
    userVerification: "required",
  }
```

Because this object only uses JSON data types, it can be serialized to JSON using [`JSON.stringify()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) and sent to the web app.

```js
JSON.stringify(requestCredentialOptionsJSON);
```

The web app can deserialize the JSON string back to a `requestCredentialOptionsJSON` object (not shown).
The **`parseRequestOptionsFromJSON()`** method is used to convert that object to the form that can be used in `navigator.credentials.get()`:

```js
// Convert options to form used by get()
const publicKey = PublicKeyCredential.parseRequestOptionsFromJSON(
  requestCredentialOptionsJSON, // JSON-type representation
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

- [Web Authentication API](/en-US/docs/Web/API/Web_Authentication_API)
- {{domxref("PublicKeyCredential.parseCreationOptionsFromJSON_static", "PublicKeyCredential.parseCreationOptionsFromJSON()")}}

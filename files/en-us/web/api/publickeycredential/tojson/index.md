---
title: "PublicKeyCredential: toJSON() method"
short-title: toJSON()
slug: Web/API/PublicKeyCredential/toJSON
page-type: web-api-instance-method
browser-compat: api.PublicKeyCredential.toJSON
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

The **`toJSON()`** method of the {{domxref("PublicKeyCredential")}} interface returns a JSON-serializable plain object representing the `PublicKeyCredential` object.

The method is automatically called by {{jsxref("JSON.stringify()")}} when a `PublicKeyCredential` object is encountered during [JSON](/en-US/docs/Glossary/JSON) serialization.

## Syntax

```js-nolint
toJSON()
```

### Parameters

None.

### Return value

A JSON-serializable plain object containing the following properties:

- {{domxref("PublicKeyCredential/authenticatorAttachment", "authenticatorAttachment")}} {{optional_inline}}: not present if its value is `null`
- `clientExtensionResults`: a JSON-serializable object representing the values returned by {{domxref("PublicKeyCredential/getClientExtensionResults", "getClientExtensionResults()")}}, with buffer values encoded as base64url strings
- {{domxref("PublicKeyCredential/id", "id")}}
- {{domxref("PublicKeyCredential/rawId", "rawId")}}: encoded as a [base64url](/en-US/docs/Glossary/Base64) string
- {{domxref("PublicKeyCredential/response", "response")}}: a JSON-serializable object representing the {{domxref("AuthenticatorResponse")}} value, with buffer values encoded as base64url strings. Namely:
  - When it's a {{domxref("AuthenticatorAssertionResponse")}}, contains the following properties:
    - {{domxref("AuthenticatorAssertionResponse/authenticatorData", "authenticatorData")}}
    - {{domxref("AuthenticatorResponse/clientDataJSON", "clientDataJSON")}}
    - {{domxref("AuthenticatorAssertionResponse/signature", "signature")}}
    - {{domxref("AuthenticatorAssertionResponse/userHandle", "userHandle")}} {{optional_inline}}: not present if its value is `null`
  - When it's a {{domxref("AuthenticatorAttestationResponse")}}, contains the following properties:
    - {{domxref("AuthenticatorAttestationResponse/attestationObject", "attestationObject")}}
    - `authenticatorData`: the value returned by {{domxref("AuthenticatorAttestationResponse.getAuthenticatorData()", "getAuthenticatorData()")}}
    - {{domxref("AuthenticatorResponse/clientDataJSON", "clientDataJSON")}}
    - `publicKey` {{optional_inline}}: the value returned by {{domxref("AuthenticatorAttestationResponse.getPublicKey()", "getPublicKey()")}}, omitted if it is `null`
    - `publicKeyAlgorithm`: the value returned by {{domxref("AuthenticatorAttestationResponse.getPublicKeyAlgorithm()", "getPublicKeyAlgorithm()")}}
    - `transports`: the value returned by {{domxref("AuthenticatorAttestationResponse.getTransports()", "getTransports()")}}
- {{domxref("Credential/type", "type")}}

Unless stated otherwise, each property's value is copied as-is.

### Exceptions

- `SecurityError` {{domxref("DOMException")}}
  - : The RP domain is not valid.

## Examples

### Calling toJSON() directly

When registering a new user, a relying party server will supply information about the expected credentials to the web app.
The web app calls [`navigator.credentials.create()`](/en-US/docs/Web/API/CredentialsContainer/create) with the received information (`createCredentialOptions` below), which returns a promise that fulfills with the new credential (a {{domxref("PublicKeyCredential")}}).

Calling `toJSON()` directly returns a plain object. Its properties have the same values as the corresponding properties of the original object.

```js
const credential = await navigator.credentials.create({
  publicKey: createCredentialOptions,
});

const json = credential.toJSON();
console.log(json); // A plain object
console.log(typeof json); // "object"
console.log(json.id); // Same value as credential.id
```

### Serializing to a JSON string

The returned credential is serialized using {{jsxref("JSON.stringify()")}}, which calls the `toJSON()` method automatically. The web app posts the serialized credential back to the server.

```js
const jsonString = JSON.stringify(credential);
console.log(jsonString);

const registrationURL = "https://example.com/registration";
const apiRegOptsResp = await fetch(registrationURL, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: jsonString,
});
```

This would log a JSON string like so (formatted for readability):

```json
{
  "authenticatorAttachment": "platform",
  "clientExtensionResults": {},
  "id": "...",
  "rawId": "...",
  "response": {
    "attestationObject": "...",
    "authenticatorData": "...",
    "clientDataJSON": "...",
    "publicKey": "...",
    "publicKeyAlgorithm": -7,
    "transports": ["internal"]
  },
  "type": "public-key"
}
```

The base64url-encoded values are abbreviated as `"..."` for readability.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Authentication API](/en-US/docs/Web/API/Web_Authentication_API)
- {{domxref("PublicKeyCredential.parseCreationOptionsFromJSON_static", "PublicKeyCredential.parseCreationOptionsFromJSON()")}}
- {{domxref("PublicKeyCredential.parseRequestOptionsFromJSON_static", "PublicKeyCredential.parseRequestOptionsFromJSON()")}}

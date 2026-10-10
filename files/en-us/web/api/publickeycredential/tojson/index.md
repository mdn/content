---
title: "PublicKeyCredential: toJSON() method"
short-title: toJSON()
slug: Web/API/PublicKeyCredential/toJSON
page-type: web-api-instance-method
browser-compat: api.PublicKeyCredential.toJSON
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

The **`toJSON()`** method of the {{domxref("PublicKeyCredential")}} interface returns a JSON-serializable plain object representing the `PublicKeyCredential` object.

The `toJSON()` method is automatically called by {{jsxref("JSON.stringify()")}} when a `PublicKeyCredential` object is stringified. This method is generally intended to, by default, usefully serialize `PublicKeyCredential` objects during [JSON](/en-US/docs/Glossary/JSON) serialization.

## Syntax

```js-nolint
toJSON()
```

### Parameters

None.

### Return value

A JSON-serializable plain object, containing the following properties:

- {{domxref("PublicKeyCredential/authenticatorAttachment", "authenticatorAttachment")}} {{optional_inline}}
- `clientExtensionResults`
- {{domxref("PublicKeyCredential/id", "id")}}
- {{domxref("PublicKeyCredential/rawId", "rawId")}}
- {{domxref("PublicKeyCredential/response", "response")}}
- {{domxref("Credential/type", "type")}}

The `id` and `type` values are copied as-is. The `authenticatorAttachment` value is copied as-is if it is not `null`; otherwise, the property is omitted. The `rawId` value is encoded as a [base64url](/en-US/docs/Glossary/Base64) string.

The `clientExtensionResults` property contains a JSON-serializable object representing the values returned by {{domxref("PublicKeyCredential/getClientExtensionResults", "getClientExtensionResults()")}}, with buffer values encoded as base64url strings.

The `response` property contains a JSON-serializable object representing {{domxref("AuthenticatorAttestationResponse")}} when the credential was returned by {{domxref("CredentialsContainer/create", "navigator.credentials.create()")}}, or {{domxref("AuthenticatorAssertionResponse")}} when it was returned by {{domxref("CredentialsContainer/get", "navigator.credentials.get()")}}. Buffer values are encoded as base64url strings.

### Exceptions

- `SecurityError` {{domxref("DOMException")}}
  - : The RP domain is not valid.

## Examples

### Calling toJSON() directly

When registering a new user, a relying party server will supply information about the expected credentials to the web app.
The web app calls [`navigator.credentials.create()`](/en-US/docs/Web/API/CredentialsContainer/create) with the received information (`createCredentialOptions` below), which returns a promise that fulfills with the new credential (a {{domxref("PublicKeyCredential")}}).

Calling `toJSON()` directly returns a plain object. You can access its properties, which is the same as accessing them on the original object.

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

The returned credential is automatically serialized by {{jsxref("JSON.stringify()")}}, which calls the `toJSON()` method. The web app posts the serialized credential back to the server.

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

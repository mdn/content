---
title: "PublicKeyCredential: toJSON() method"
short-title: toJSON()
slug: Web/API/PublicKeyCredential/toJSON
page-type: web-api-instance-method
browser-compat: api.PublicKeyCredential.toJSON
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

The **`toJSON()`** method of the {{domxref("PublicKeyCredential")}} interface returns a {{glossary("JSON type representation")}} of a {{domxref("PublicKeyCredential")}}.

The properties of the returned object depend on whether the credential is returned by [`navigator.credentials.create()`](/en-US/docs/Web/API/CredentialsContainer/create) when [creating a key pair and registering a user](/en-US/docs/Web/API/Web_Authentication_API#creating_a_key_pair_and_registering_a_user), or [`navigator.credentials.get()`](/en-US/docs/Web/API/CredentialsContainer/get) when [authenticating a user](/en-US/docs/Web/API/Web_Authentication_API#authenticating_a_user).

This method is automatically invoked when web app code calls [`JSON.stringify()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) to serialize a {{domxref("PublicKeyCredential")}} so that it can be sent to relying party server when registering or authenticating a user.
It not intended to be called directly in web app code.

## Syntax

```js-nolint
toJSON()
```

### Parameters

None.

### Return value

A {{glossary("JSON type representation")}} of a [`PublicKeyCredential`](/en-US/docs/Web/API/PublicKeyCredential) object.

The included properties depend on whether the credential was returned by [`navigator.credentials.create()`](/en-US/docs/Web/API/CredentialsContainer/create) on registration, or [`navigator.credentials.get()`](/en-US/docs/Web/API/CredentialsContainer/get) when authenticating a user.
The values and types of included properties are the same as for [`PublicKeyCredential`](/en-US/docs/Web/API/PublicKeyCredential), with the exception that [base64url](/en-US/docs/Glossary/Base64)-encoded strings are used in place of buffer properties.

The object properties are:

- `id`
  - : The value returned by {{domxref("PublicKeyCredential.id")}}.
- `rawId`
  - : A [base64url](/en-US/docs/Glossary/Base64)-encoded version of {{domxref("PublicKeyCredential.rawId")}}.
- `authenticatorAttachment` {{optional_inline}}
  - : The value returned by {{domxref("PublicKeyCredential.authenticatorAttachment")}}.
- `type`
  - : The string `"public-key"`.
- `clientExtensionResults`
  - : An array containing [base64url](/en-US/docs/Glossary/Base64)-encoded versions of the values returned by {{domxref("PublicKeyCredential.getClientExtensionResults()")}}.
- `response`

  - : The response property object depends on whether the credentials are returned following a registration or authentication operation.

    - When registering a new user `response` will be a JSON-type representation of {{domxref("AuthenticatorAttestationResponse")}} where buffer values have been [base64url](/en-US/docs/Glossary/Base64) encoded.

    - When authenticating a user the returned value will be a JSON-type representation version of {{domxref("AuthenticatorAssertionResponse")}} where buffer values have been [base64url](/en-US/docs/Glossary/Base64) encoded.

## Examples

When registering a new user, a relying party server will supply information about the expected credentials to the web app.
The web app calls [`navigator.credentials.create()`](/en-US/docs/Web/API/CredentialsContainer/create) with the received information (`createCredentialOptions` below), which returns a promise that fulfills with the new credential (a {{domxref("PublicKeyCredential")}}).

```js
const newCredentialInfo = await navigator.credentials.create({
  createCredentialOptions,
});
```

The web app then serializes the returned credential using `JSON.stringify()` (which in turn calls `toJSON()`) and posts it back to the server.

```js
const registration_url = "https://example.com/registration";
const apiRegOptsResp = await fetch(registration_url, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(newCredentialInfo), //Calls newCredentialInfo.toJSON
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Authentication API](/en-US/docs/Web/API/Web_Authentication_API)
- {{domxref("PublicKeyCredential.parseCreationOptionsFromJSON_static", "PublicKeyCredential.parseCreationOptionsFromJSON()")}}
- {{domxref("PublicKeyCredential.parseRequestOptionsFromJSON_static", "PublicKeyCredential.parseRequestOptionsFromJSON()")}}

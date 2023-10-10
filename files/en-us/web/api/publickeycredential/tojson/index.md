---
title: "PublicKeyCredential: toJSON() method"
short-title: toJSON()
slug: Web/API/PublicKeyCredential/toJSON
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.PublicKeyCredential.toJSON
---

{{APIRef("Web Authentication API")}} {{SeeCompatTable}}{{securecontext_header}}

The **`toJSON()`** method of the {{domxref("PublicKeyCredential")}} interface returns a JSON-friendly representation of a {{domxref("PublicKeyCredential")}}.

The method is a convenient way for a web app to create credential objects that can be serialized and sent to the relying party server as an application/json payload.
Note that `toJSON()` is called when [JSON.stringify()](/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) is used to serialize an object: in this case a credential.

The properties of the returned object depend on whether the credential is returned by [`navigator.credentials.create()`](/en-US/docs/Web/API/CredentialsContainer/create) when [creating a key pair and registering a user](/en-US/docs/Web/API/Web_Authentication_API#creating_a_key_pair_and_registering_a_user), or [`navigator.credentials.get()`](/en-US/docs/Web/API/CredentialsContainer/get) when [authenticating a user](/en-US/docs/Web/API/Web_Authentication_API#authenticating_a_user).

## Syntax

```js-nolint
toJSON()
```

### Parameters

None.

### Return value

A JSON-friendly representation of a [`PublicKeyCredential`](/en-US/docs/Web/API/PublicKeyCredential) object, with included properties that depend on whether the credential was returned by [`navigator.credentials.create()`](/en-US/docs/Web/API/CredentialsContainer/create) on registration or [`navigator.credentials.get()`](/en-US/docs/Web/API/CredentialsContainer/get) when [authenticating a user](/en-US/docs/Web/API/Web_Authentication_API#authenticating_a_user).

The values and types are the same as for [`PublicKeyCredential`](/en-US/docs/Web/API/PublicKeyCredential), with the exception that [base64url](/en-US/docs/Glossary/Base64)-encoded strings are used in place of buffer properties.

The object properties are:

- `id`
  - : The value returned by {{domxref("PublicKeyCredential.id")}}.
- `rawId`
  - : The value returned by {{domxref("PublicKeyCredential.rawId")}} and then [base64url](/en-US/docs/Glossary/Base64) encoding the returned value.
- `authenticatorAttachment` {{optional_inline}}
  - : The value returned by {{domxref("PublicKeyCredential.authenticatorAttachment")}}.
- `type`
  - : The string `"public-key"`.
- `clientExtensionResults`
  - : The result of calling {{domxref("PublicKeyCredential.getClientExtensionResults()")}} and [base64url](/en-US/docs/Glossary/Base64) encoding the values of each array entry.
- `response`

  - : The response property object depends on whether the credentials are returned following a registration or authentication operation.

    - When registering a new user `response` will be a JSON-friendly version of {{domxref("AuthenticatorAttestationResponse")}} where buffer values have been [base64url](/en-US/docs/Glossary/Base64) encoded.

    - When authenticating a user the returned value will be a JSON-friendly version of {{domxref("AuthenticatorAssertionResponse")}} where buffer values have been [base64url](/en-US/docs/Glossary/Base64) encoded.

## Examples

When registering a new user the server will supply information about the expected credentials (below shown as the already parsed object `publicKey`).
First we pass these to [`navigator.credentials.create()`](/en-US/docs/Web/API/CredentialsContainer/create), which returns a promise that eventually resolves to a {{domxref("PublicKeyCredential")}}.

```js
const newCredentialInfo = await navigator.credentials.create({ publicKey });
```

The credentials are then posted back to the server as JSON data.
We call [JSON.stringify()](/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) to serialize the credential object (which in turn calls `toJSON()`).

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

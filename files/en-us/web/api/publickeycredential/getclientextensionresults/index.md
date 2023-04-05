---
title: PublicKeyCredential.getClientExtensionResults()
slug: Web/API/PublicKeyCredential/getClientExtensionResults
page-type: web-api-instance-method
browser-compat: api.PublicKeyCredential.getClientExtensionResults
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

The **`getClientExtensionResults()`** method of the
{{domxref("PublicKeyCredential")}} interface returns a map between the identifiers of extensions requested during credential creation or authentication, and their results after processing by the client.

During the creation or fetching of a `PublicKeyCredential` (via
{{domxref("CredentialsContainer.create()","navigator.credentials.create()")}} and
{{domxref("CredentialsContainer.get()","navigator.credentials.get()")}} respectively), it is possible
to request "custom" processing by the client for different extensions, specified in the `publicKey` option's `extensions` property. You can find more information about requesting the different extensions in the following dictionary pages:

- {{domxref("PublicKeyCredentialCreationOptions")}} (the required object structure of the {{domxref("CredentialsContainer.create()","create()")}}) `publicKey` option.
- {{domxref("PublicKeyCredentialRequestOptions")}} (the required object structure of the {{domxref("CredentialsContainer.get()","get()")}}) `publicKey` option.

> **Note:** Extensions are optional and different browsers may recognize
> different extensions. Processing extensions is always optional for the client: if a
> browser does not recognize a given extension, it will just ignore it.

## Syntax

```js-nolint
getClientExtensionResults()
```

### Parameters

None.

### Return value

A {{jsxref("Map", "map")}}, with each entry being an extensions' identifier string as the key,
and the output from the processing of the extension by the client as the value.

The following extensions are currently supported:

| Identifying string | Expected output                                                                                                                                                                                                                                     | More information                                                                                                                  |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `appid`            | A boolean — `true` if the AppID was used, `false` if not.                                                                                                                                                                                           | [FIDO AppID Extension (appid)](https://w3c.github.io/webauthn/#sctn-appid-extension)                                              |
| `appidExclude`     | A boolean — `true` if the extension was acted upon, `false` if not.                                                                                                                                                                                 | [FIDO AppID Exclusion Extension (appidExclude)](https://w3c.github.io/webauthn/#sctn-appid-exclude-extension)                     |
| `credProps`        | An object containing credential properties defined when the extension was requested. Currently there is one available, `rk`, which is a boolean defining whether a resident key has been specified as a requirement (`true` if so, `false` if not). | [Credential Properties Extension (credProps)](https://w3c.github.io/webauthn/#sctn-authenticator-credential-properties-extension) |
| `largeBlob`        | FILL IN EXPLANATION                                                                                                                                                                                                                                 | [Large blob storage extension (largeBlob)](https://w3c.github.io/webauthn/#sctn-large-blob-extension)                             |

## Examples

```js
const publicKey = {
  // Here are the extension "inputs"
  extensions: {
    appid: "34tj5p698hyjoigrjfowejlkh...",
  },
  challenge: new Uint8Array(16) /* from the server */,
  rp: {
    name: "Example CORP",
    id: "login.example.com",
  },
  user: {
    id: new Uint8Array(16) /* from the server */,
    name: "canand@example.com",
    displayName: "Carina Anand",
  },
  pubKeyCredParams: [
    {
      type: "public-key",
      alg: -7,
    },
  ],
};

navigator.credentials
  .create({ publicKey })
  .then((newCredentialInfo) => {
    const myResults = newCredentialInfo.getClientExtensionResults();
    // myResults will contain the result of any of the processing of the "appid" extension
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

- [The list of the currently defined extensions](https://www.w3.org/TR/webauthn/#sctn-defined-extensions)
- {{domxref("AuthenticatorAssertionResponse.authenticatorData")}} which contains the
  result of the authenticator's extensions processing
- {{domxref("PublicKeyCredentialCreationOptions")}}, which contains the
  client extensions' input values for the creation of the credential
- {{domxref("PublicKeyCredentialRequestOptions")}}, which contains the
  client extensions' input values for the retrieval of the credential

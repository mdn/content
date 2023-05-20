---
title: "PublicKeyCredential: getClientExtensionResults() method"
short-title: getClientExtensionResults()
slug: Web/API/PublicKeyCredential/getClientExtensionResults
page-type: web-api-instance-method
browser-compat: api.PublicKeyCredential.getClientExtensionResults
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

The **`getClientExtensionResults()`** method of the
{{domxref("PublicKeyCredential")}} interface returns a map between the identifiers of extensions requested during credential creation or authentication, and their results after processing by the user agent.

During the creation or fetching of a `PublicKeyCredential` (via
{{domxref("CredentialsContainer.create()","navigator.credentials.create()")}} and
{{domxref("CredentialsContainer.get()","navigator.credentials.get()")}} respectively), it is possible
to request "custom" processing by the client for different extensions, specified in the `publicKey` option's `extensions` property. You can find more information about requesting the different extensions in [Web Authentication extensions](/en-US/docs/Web/API/Web_Authentication_API/WebAuthn_extensions).

> **Note:** `getClientExtensionResults()` only returns the results from extensions processed by the user agent (client). The results from extensions processed by the authenticator can be found in the [authenticator data](/en-US/docs/Web/API/Web_Authentication_API/Authenticator_data) available in {{domxref("AuthenticatorAssertionResponse.authenticatorData")}}.

## Syntax

```js-nolint
getClientExtensionResults()
```

### Parameters

None.

### Return value

A {{jsxref("Map", "map")}}, with each entry being an extensions' identifier string as the key, and the output from the processing of the extension by the client as the value.

## Examples

```js
const publicKey = {
  // Here are the extension "inputs"
  extensions: {
    appid: "https://accounts.example.com"
  },
  allowCredentials: {
    id: "fgrt46jfgd...",
    transports: ["usb", "nfc"]
    type: "public-key"
  },
  challenge: new Uint8Array(16) /* from the server */
};

navigator.credentials
  .get({ publicKey })
  .then((publicKeyCred) => {
    const myResults = publicKeyCred.getClientExtensionResults();
    // myResults will contain the output of processing the "appid" extension
  })
  .catch((err) => {
    console.error(err);
  });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

> **Note:** Extensions are optional and different browsers may recognize different extensions. Processing extensions is always optional for the client: if a browser does not recognize a given extension, it will just ignore it. For information on which extensions are supported by which browsers, see [Web Authentication extensions](/en-US/docs/Web/API/Web_Authentication_API/WebAuthn_extensions).

## See also

- [The list of the currently defined extensions](https://www.w3.org/TR/webauthn/#sctn-defined-extensions)
- {{domxref("AuthenticatorAssertionResponse.authenticatorData")}} which contains the
  result of the authenticator's extensions processing

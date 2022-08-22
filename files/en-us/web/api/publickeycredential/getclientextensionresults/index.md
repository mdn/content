---
title: PublicKeyCredential.getClientExtensionResults()
slug: Web/API/PublicKeyCredential/getClientExtensionResults
page-type: web-api-instance-method
tags:
  - API
  - Method
  - PublicKeyCredential
  - Reference
  - Web Authentication API
  - WebAuthn
browser-compat: api.PublicKeyCredential.getClientExtensionResults
---
{{APIRef("Web Authentication API")}}{{securecontext_header}}

**`getClientExtensionResults()`** is a method of the
{{domxref("PublicKeyCredential")}} interface that returns an {{jsxref("ArrayBuffer")}}
which contains a map between the extensions identifiers and their results after having
being processed by the client.

During the creation or fetching of a `PublicKeyCredential` (respectively via
{{domxref("CredentialsContainer.create()","navigator.credentials.create()")}} and
{{domxref("CredentialsContainer.get()","navigator.credentials.get()")}}), it is possible
to have "custom" processing by the client for different extensions which are
respectively given by {{domxref("PublicKeyCredentialCreationOptions.extensions")}} and
{{domxref("PublicKeyCredentialRequestOptions.extensions")}}.

> **Note:** Extensions are optional and different browsers may recognize
> different extensions. All extensions are optional for the client to process them: if a
> browser does not know of a given extension, that will not cause any failure.

> **Note:** This method may only be used in top-level contexts and will
> not be available in an {{HTMLElement("iframe")}} for example.

## Syntax

```js
getClientExtensionResults()
```

### Parameters

None.

### Return value

An {{jsxref("ArrayBuffer")}} containing the result of the processing of the different
extensions by the client. This object contains a map between the extensions' identifiers
and their results from the processing.

> **Warning:** As of March 2019, only `appId` (used during
> creation with {{domxref("PublicKeyCredentialRequestOptions.extensions")}}) is
> supported by [Chromium](https://bugs.chromium.org/p/chromium/issues/detail?id=818303) and
> Firefox does not seem to [support any extension](https://bugzilla.mozilla.org/show_bug.cgi?id=1370728).

## Examples

```js
const publicKey = {
  // Here are the extensions (as "inputs")
  extensions: {
    "loc": true, // This extension has been defined to include location information in attestation
    "uvi": true  // user verification index: how the user was verified
  },
  challenge: new Uint8Array(16) /* from the server */,
  rp: {
    name: "Example CORP",
    id  : "login.example.com"
  },
  user: {
    id: new Uint8Array(16) /* from the server */,
    name: "jdoe@example.com",
    displayName: "John Doe"
  },
  pubKeyCredParams: [
    {
      type: "public-key",
      alg: -7
    }
  ]
};

navigator.credentials.create({ publicKey })
  .then((newCredentialInfo) => {
    const myBuffer = newCredentialInfo.getClientExtensionResults();
    // myBuffer will contain the result of any of the processing of the "loc" and "uvi" extensions
  }).catch((err) => {
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
- {{domxref("PublicKeyCredentialCreationOptions.extensions")}} which contains the
  client extensions' input values for the creation of the credential
- {{domxref("PublicKeyCredentialRequestOptions.extensions")}} which contains the
  client extensions' input values for the retrieval of the credential

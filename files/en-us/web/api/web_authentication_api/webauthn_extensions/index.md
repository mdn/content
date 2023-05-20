---
title: Web Authentication extensions
slug: Web/API/Web_Authentication_API/WebAuthn_extensions
page-type: guide
browser-compat:
  - api.CredentialsContainer.create.publicKey_option.extensions
  - api.CredentialsContainer.get.publicKey_option.extensions
---

{{DefaultAPISidebar("Web Authentication API")}}

The [Web Authentication API](/en-US/docs/Web/API/Web_Authentication_API) has a system of extensions — extra functionality that can be requested during credential creation ({{domxref("CredentialsContainer.create()", "navigator.credentials.create()")}}) or authentication ({{domxref("CredentialsContainer.get()", "navigator.credentials.get()")}}) operations. This article explains how to request WebAuthn extensions, retrieve information about the responses from those requests, and the available extensions — including browser support and expected inputs and outputs.

## How to use WebAuthn extensions

When invoking {{domxref("CredentialsContainer.create()", "navigator.credentials.create()")}} or {{domxref("CredentialsContainer.get()", "navigator.credentials.get()")}}, the `publicKey` object parameter required to initiate a WebAuthn flow can include an `extensions` property. The value of `extensions` is itself an object, the properties of which are the input values for any extensions the relying party wishes to request the use of in the method you call.

Behind the scenes, the inputs are processed by the user agent and/or the authenticator.

For example, in a `publicKey` object for a `create()` call, we might want to request the use of two extensions:

1. The `credProps` extension. Relying parties set `credProps` to request that the browser tells the relying party whether the credential is resident/discoverable after registration. This is useful when calling `create()` with `publicKey.authenticatorSelection.residentKey = "preferred"`. To request it, you also need to set `publicKey.extensions.credProps = true` when. The browser makes a credential and, depending on the type of authenticator used, it will be discoverable (for example, the FIDO2 authenticator would typically make it discoverable; FIDO1/U2F security key would be non-discoverable). `credProps` is processed by the user agent only.
2. The `minPinLength` extension allows relying parties to request the authenticator's minimum PIN length. This requires `extensions.minPinLength` to be set to `true`. `minPinLength` is processed by the authenticator, with the user agent only serving to pass the input data along to it.

```js
const publicKey = {
  challenge: new Uint8Array([117, 61, 252, 231, 191, 241, ...]),
  rp: { id: "acme.com", name: "ACME Corporation" },
  user: {
    id: new Uint8Array([79, 252, 83, 72, 214, 7, 89, 26]),
    name: "jamiedoe",
    displayName: "Jamie Doe"
  },
  pubKeyCredParams: [ {type: "public-key", alg: -7} ],
  authenticatorSelection: {
    residentKey: "preferred"
  },
  extensions: {
    credProps: true,
    minPinLength: true
  }
}
```

We can then pass the `publicKey` object into a `create()` call to initiate the credential creation flow:

```js
navigator.credentials.create({ publicKey });
```

## Retrieving extension request results

If successful, the `create()` call will return a {{jsxref("Promise")}} that resolves with a {{domxref("PublicKeyCredential")}} object. Once extension processing has completed, the results of the processing are communicated in the response (although not in all cases — it is possible for extensions to have no output).

```js
navigator.credentials
  .create({ publicKey })
  .then((publicKeyCred) => {
    const myClientExtResults = publicKeyCred.getClientExtensionResults();
    // myClientExtResults will contain the output of processing
    // the "credProps" extension

    const authData = publicKeyCred.response.getAuthenticatorData();
    // authData will contain authenticator data, which will include
    // authenticator extension processing results, i.e., minPinLength
  })
  .catch((err) => {
    console.error(err);
  });
```

As demonstrated by the above code snippet, there are two different places to find your output extension results:

1. You can find the results of client (user agent) extension processing by calling the {{domxref("PublicKeyCredential.getClientExtensionResults()")}} method. This returns a {{jsxref("Map", "map")}}, with each entry being an extensions' identifier string as the key, and the output from the processing of the extension by the client as the value. In the example above, if the browser supported the `credProps` extension and it was processed correctly, the `myClientExtResults` map object would contain one entry, `"credProps"`, with a value of `{ rk: true }`. This would verify that the created credential is indeed discoverable.

2. You can find the results of authenticator extension processing in the authenticator data for the operation:

   - In the case of `PublicKeyCredential`s returned from successful `create()` calls, this can be returned via a call to {{domxref("AuthenticatorAttestationResponse.getAuthenticatorData", "publicKeyCredential.response.getAuthenticatorData()")}}.
   - In the case of `PublicKeyCredential`s returned from successful `get()` calls, this can be found in the {{domxref("AuthenticatorAssertionResponse.authenticatorData", "publicKeyCredential.response.authenticatorData")}} property.

   Authenticator data takes the form of an {{jsxref("ArrayBuffer")}} with a consistent structure — see [authenticator data](/en-US/docs/Web/API/Web_Authentication_API/Authenticator_data). The authenticator extension results data is always found in a section at the end, as a [CBOR map](https://cbor.io/) representing the results. See {{domxref("AuthenticatorAssertionResponse.authenticatorData")}} for a detailed description of the complete authenticator data structure.

   Back to our example, if the relying party is authorized to receive the `minPinLength` value, the authenticator data would contain a representation of it in the following form: `"minPinLength": uint`.

## Available extensions

The extensions below do not represent an exhaustive list of all the extensions available. We have elected to document extensions that we know to be standardized and supported by at least one rendering engine.

### `appid`

- Usable in: Authentication ({{domxref("CredentialsContainer.get()","get()")}})
- Processed by: User agent
- Specification: [FIDO AppID Extension (appid)](https://w3c.github.io/webauthn/#sctn-appid-extension)

Allows a relying party to request an assertion for a credential previously registered using the legacy FIDO U2F JavaScript API, avoiding the hassle of re-registering the credential. The `appid` is that API's equivalent to the `rpId` in WebAuthn (although bear in mind that `appid`s are in the form of URLs, whereas `rpId`s are in the form of domains).

#### Input

The `publicKey`'s `extensions` property must contain an `appid` property, the value of which is the application identifier used in the legacy API. For example:

```js
extensions: {
  appid: "https://accounts.example.com";
}
```

You must also list the FIDO U2F credential IDs in the `publicKey`'s `allowCredentials` property, for example:

```js
allowCredentials: {
  [
    id: arrayBuffer, // needs to contain decoded binary form of id
    transports: ["nfc", "usb"]
    type: "public-key"
  ]
}
```

#### Output

Outputs `appid: true` if the `appid` was successfully used for the assertion, or `appid: false` otherwise.

### `appidExclude`

- Usable in: Registration ({{domxref("CredentialsContainer.create()","create()")}})
- Processed by: User agent
- Specification: [FIDO AppID Exclusion Extension (appidExclude)](https://w3c.github.io/webauthn/#sctn-appid-exclude-extension)

Allows a relying party to exclude authenticators containing specified credentials previously registered using the legacy FIDO U2F JavaScript API during registration. This is required because by default the contents of the `excludeCredentials` field are assumed to be WebAuthn credentials. When using this extension, you can include legacy FIDO U2F credentials inside `excludeCredentials`, and they will be recognized as such.

#### Input

The `publicKey`'s `extensions` property must contain an `appidExclude` property, the value of which is the identifier of the relying party requesting to exclude authenticators by legacy FIDO U2F credentials. For example:

```js
extensions: {
  appidExclude: "https://accounts.example.com";
}
```

You can then list FIDO U2F credentials in the `publicKey`'s `excludeCredentials` property, for example:

```js
excludeCredentials: {
  [
    id: arrayBuffer, // needs to contain decoded binary form of id
    transports: ["nfc", "usb"]
    type: "public-key"
  ]
}
```

#### Output

Outputs `appidExclude: true` if the extension was acted upon, or `appidExclude: false` otherwise.

### `credProps`

- Usable in: Registration ({{domxref("CredentialsContainer.create()","create()")}})
- Processed by: User agent
- Specification: [Credential Properties Extension (credProps)](https://w3c.github.io/webauthn/#sctn-authenticator-credential-properties-extension)

Allows a relying party to request additional information/properties about the credential that was created. This is currently only useful when calling `create()` with `publicKey.authenticatorSelection.residentKey = "preferred"`; it requests information on whether the created credential is discoverable.

#### Input

The `publicKey`'s `extensions` property must contain a `credProps` property with a value of `true`:

```js
extensions: {
  credProps: true;
}
```

You must also set `authenticatorSelection.requireResidentKey` to `true`, which indicates that a resident key is required.

```js
authenticatorSelection: {
  requireResidentKey: true;
}
```

#### Output

Outputs the following if the registered {{domxref("PublicKeyCredential")}} is a client-side discoverable credential:

```js
credProps: {
  rk: true;
}
```

If `rk` is set to `false` in the output, the credential is a server-side credential. If `rk` is not present in the output, then it is not known whether the credential is client-side discoverable or server-side.

### `credProtect`

- Usable in: Registration ({{domxref("CredentialsContainer.create()","create()")}})
- Processed by: Authenticator
- Specification: [Credential Protection (credProtect)](https://fidoalliance.org/specs/fido-v2.1-ps-20210615/fido-client-to-authenticator-protocol-v2.1-ps-20210615.html#sctn-credProtect-extension)

Allows a relying party to specify a minimum credential protection policy when creating a credential.

#### Input

The `publicKey`'s `extensions` property must contain a `credentialProtectionPolicy` property specifying the protection level of the credential to be created, and a boolean `enforceCredentialProtectionPolicy` property specifying whether the `create()` call should fail rather than creating a credential that does not conform to the specified policy:

```js
extensions: {
  credentialProtectionPolicy: "userVerificationOptional",
  enforceCredentialProtectionPolicy: true
}
```

The available `credentialProtectionPolicy` values are as follows:

- `"userVerificationOptional"` {{Experimental_Inline}}
  - : User verification is optional. The equivalent `credProtect` value sent to the authenticator for processing is `0x01`.
- `"userVerificationOptionalWithCredentialIDList"`
  - : User verification is optional only if the credential is discoverable (i.e., it is client-side discoverable). The equivalent `credProtect` value sent to the authenticator for processing is `0x02`.
- `"userVerificationRequired"`
  - : User verification is always required. The equivalent `credProtect` value sent to the authenticator for processing is `0x03`.

> **Note:**
> Chromium will default to `userVerificationOptionalWithCredentialIDList` or `userVerificationRequired`, depending on the type of request:
>
> - Chromium will request a protection level of `userVerificationOptionalWithCredentialIDList` when creating a credential if `residentKey` is set to `preferred` or `required`. (Setting `requireResidentKey` is treated the same as required.) This ensures that simple physical possession of a security key does not allow the presence of a discoverable credential for a given `rpId` to be queried.
> - Additionally, if `residentKey` is `required` and `userVerification` is preferred, the protection level will be increased to `userVerificationRequired`. This ensures that physical possession of a security key does not allow sign-in to a site that doesn't require user verification. (This is not complete protection; sites should still carefully consider the security of their users.)
> - If the site requests an explicit `credProtect` level, that will override these defaults. These defaults never cause the protection level to be lower than the security key's default if that is higher.
>
> Suppose the `enforceCredentialProtectionPolicy` value is `true`. In that case, the `create()` call will fail if the policy cannot be adhered to (for example, it requires user verification, but the authenticator does not support user verification). If it is `false`, the system will make the best attempt to create a credential that conforms to the policy, but it will still create one that conforms as closely as it can if this is not possible.

#### Output

If the `create()` call is successful, the authenticator data will contain a representation of the `credProtect` value representing the set policy in the following form:

```
{ "credProtect": 0x01 }
```

### `largeBlob`

- Usable in: Registration ({{domxref("CredentialsContainer.create()","create()")}}) and authentication ({{domxref("CredentialsContainer.get()","get()")}})
- Processed by: User agent
- Specification: [Large blob storage extension (largeBlob)](https://w3c.github.io/webauthn/#sctn-large-blob-extension)

Allows a relying party to store blobs associated with a credential on the authenticator — for example, it may wish to directly store certificates rather than run a centralized authentication service.

#### Input

During a `create()` call, the `publicKey`'s `extensions` property must contain a `largeBlob` property with the following object structure:

```js
extensions: {
  largeBlob: {
    support: "required";
  }
}
```

The `support` property's value is a string, which can be one of the following:

- `"preferred"`: The credential will be created with an authenticator that can store blobs if possible, but it will still create one if not. The output' supported' property reports the authenticator's ability to store blobs.
- `"required"`: The credential will be created with an authenticator to store blobs. The `create()` call will fail if this is impossible.

During a `get()` call, the `publicKey`'s `extensions` property must contain a `largeBlob` property with one of two sub-properties — `read` or `write` (`get()` fails if both are present):

The `read` property is a boolean. A value of `true` indicates that the relying party would like to fetch a previously-written blob associated with the asserted credential:

```js
extensions: {
  largeBlob: {
    read: true;
  }
}
```

The `write` property takes as a value an {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}}, or {{jsxref("DataView")}} representing a blob that the relying party wants to store alongside an existing credential:

```js
extensions: {
  largeBlob: {
    write: arrayBuffer;
  }
}
```

> **Note:** For a write authentication operation to be successful, `publicKey.allowCredentials` must contain only a single element representing the credential you want the blob stored alongside.

#### Output

A successful `create()` call provides the following extension output if the registered credential is capable of storing blobs:

```js
largeBlob: {
  supported: true; // false if it cannot store blobs
}
```

A `get()` read call makes the blob available as an {{jsxref("ArrayBuffer")}} in the extension output if successful:

```js
largeBlob: {
  blob: arrayBuffer;
}
```

> **Note:** if unsuccessful, the `largeBlob` object will be returned, but `blob` will not be present.

A `get()` write call indicates whether the write operation was successful with a `written` boolean value in the extension output. A `true` value means it was written successfully to the associated authenticator, and `false` means it was unsuccessful.

```js
largeBlob: {
  written: true;
}
```

### `minPinLength`

- Usable in: Registration ({{domxref("CredentialsContainer.create()","create()")}})
- Processed by: Authenticator
- Specification: [Minimum PIN Length Extension (minPinLength)](https://fidoalliance.org/specs/fido-v2.1-ps-20210615/fido-client-to-authenticator-protocol-v2.1-ps-20210615.html#sctn-minpinlength-extension)

Allows relying parties to request the authenticator's minimum PIN length.

#### Input

The `publicKey`'s `extensions` property must contain a `minPinLength` property with a value of `true`:

```js
extensions: {
  minPinLength: true;
}
```

#### Output

If the relying party is authorized to receive the `minPinLength` value (if its `rpId` is present on the authenticator's authorized relying party list), the authenticator data will contain a representation of it in the following form:

```
"minPinLength": uint
```

If the relying party is not authorized, the extension is ignored, and no `"minPinLength"` output value is provided.

## Specifications

There are a number of places that WebAuthn extensions are specified. IANA's [WebAuthn Extension Identifiers](https://www.iana.org/assignments/webauthn/webauthn.xhtml#webauthn-extension-ids) provides a registry of all extensions, but bear in mind that some may be deprecated.

Places where extensions are specified:

- [Web Authentication Level 3, Section 10: Defined extensions](https://w3c.github.io/webauthn/#sctn-defined-extensions)
- [Client to Authenticator Protocol (CTAP) 2, Section 12: Defined Extensions](https://fidoalliance.org/specs/fido-v2.1-ps-20210615/fido-client-to-authenticator-protocol-v2.1-ps-20210615.html#sctn-defined-extensions)

## Browser compatibility

The compatibility data for WebAuthn extensions has been broken down into two tables — extensions that can be used during credential registration ({{domxref("CredentialsContainer.create()","create()")}}), and extensions that can be used during authentication ({{domxref("CredentialsContainer.get()","get()")}}). Some extensions are usable during both operations.

{{Compat}}

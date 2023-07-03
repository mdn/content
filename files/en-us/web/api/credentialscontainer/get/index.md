---
title: "CredentialsContainer: get() method"
short-title: get()
slug: Web/API/CredentialsContainer/get
page-type: web-api-instance-method
browser-compat: api.CredentialsContainer.get
---

{{APIRef("Credential Management API")}}

The **`get()`** method of the {{domxref("CredentialsContainer")}} interface returns a {{jsxref("Promise")}} that fulfills with a single credential instance that matches the provided parameters, which the browser can then use to authenticate with a relying party. This is used by several different credential-related APIs with significantly different purposes:

- The [Credential Management API](/en-US/docs/Web/API/Credential_Management_API) uses `get()` to authenticate using basic federated credentials or username/password credentials.
- The [Web Authentication API](/en-US/docs/Web/API/Web_Authentication_API) uses `get()` to authenticate or provide additional factors during MFA with public key credentials (based on asymmetric cryptography).
- The [Federated Credential Management API (FedCM)](/en-US/docs/Web/API/FedCM_API) uses `get()` to authenticate with federated identity providers.

The below reference page starts with a syntax section that explains the general method call structure and parameters that apply to all the different APIs. After that, it is split into separate sections providing parameters, return values, and examples specific to each API.

## General syntax

```js-nolint
get()
get(options)
```

### Parameters

- `options` {{optional_inline}}

  - : An object that contains options for the request. The options include criteria that the credentials are required or allowed to have, and options for interacting with the user. It can contain the following properties:

    - "Credential type"

      - : An object or boolean defining the type of credential being requested — this can be one of one of:

        - `federated`: An object containing requirements for a requested credential from a federated identify provider. Bear in mind that the Federated Credential Management API (the `identity` credential type) supersedes this credential type. See the [Credential Management API](#credential_management_api) section below for more details.
        - `password`: A boolean value indicating that a password credential is being requested. See the [Credential Management API](#credential_management_api) section below for more details.
        - `identity`: An object containing details of federated identity providers (IdPs) that a relying party (RP) website can use to sign users in. Causes the `get()` call to initiate a request for a user to sign in to a relying party with an IdP. See the [Federated Credential Management API](#federated_credential_management_api) section below for more details.
        - `publicKey`: An object containing requirements for returned public key credentials. Causes the `get()` call to use an existing set of public key credentials to authenticate to a relying party. See the [Web Authentication API](#web_authentication_api) section below for more details.

    - `mediation` {{optional_inline}}

      - : A string indicating whether the user will be required to login for every visit to a client app. The value can be one of the following:

        - `"conditional"`: Discovered credentials are presented to the user in a non-modal dialog box along with an indication of the origin requesting credentials. In practice, this means autofilling available credentials; see [Sign in with a passkey through form autofill](https://web.dev/passkey-form-autofill/) for more details of how this is used; {{domxref("PublicKeyCredential.isConditionalMediationAvailable()")}} also provides some useful information.

        - `"optional"`: If credentials can be handed over for a given operation without user mediation, they will be. If user mediation is required, then the user agent will ask the user to authenticate. This value is intended for situations where you have reasonable confidence that a user won't be surprised or confused at seeing a login dialog box — for example on a site that doesn't automatically log users in, when a user has just clicked a "Login/Signup" button.

        - `"required"`: The user will always be asked to authenticate, even if prevent silent access (see {{domxref("CredentialsContainer.preventSilentAccess()")}}) is set to `false`. This value is intended for situations where you want to force user authentication — for example if you want a user to reauthenticate when a sensitive operation is being performed (like confirming a credit card payment), or when switching users.

        - `"silent"`: The user will not be asked to authenticate. The user agent will automatically log the user in if possible; if consent is required, the promise will fulfill with `null`. This value is intended for situations where you would want to automatically sign a user in upon visiting a web app if possible, but if not, you don't want to present them with a confusing login dialog box. Instead, you'd want to wait for them to explicitly click a "Login/Signup" button.

        If `mediation` is omitted, it will default to `"optional"`.

    - `signal` {{optional_inline}}

      - : An {{domxref("AbortSignal")}} object instance that allows an ongoing `get()` operation to be aborted. An aborted operation may complete normally (generally if the abort was received after the operation finished) or reject with an "`AbortError`" {{domxref("DOMException")}}.

## Credential Management API

The [Credential Management API](/en-US/docs/Web/API/Credential_Management_API) lets a website store and retrieve password and federated credentials. These capabilities allow users to sign in without typing passwords, see the federated account they used to sign in to a site, and resume a session without the explicit sign-in flow of an expired session.

### `federated` object structure

`federated` will contain the following properties:

- `protocols`
  - : An array of strings representing the protocols of the requested credentials' federated identity providers (for example, `"openidconnect"`).
- `providers`
  - : An array of strings representing the credentials' federated identity providers (for example `"https://www.facebook.com"` or `"https://accounts.google.com"`).

### `password` boolean value

`password` is a single boolean value. If set to `true`, it indicates that the requested credential is a password credential.

### Return value

A {{jsxref("Promise")}} that resolves with a {{domxref("Credential")}} instance matching the provided parameters:

- If the provided credential type was a `federated` object, the returned instance will be a {{domxref("FederatedCredential")}}.
- If the provided credential type was a `password` boolean value of `true`, the returned instance will be a {{domxref("PasswordCredential")}}.

If a single credential cannot be unambiguously obtained, the Promise will resolve to `null`.

### Examples

```js
navigator.credentials
  .get({
    protocols: ["openidconnect"],
    providers: ["https://www.facebook.com", "https://accounts.google.com"],
  })
  .then((fedCred) => {
    console.log(fedCred.provider);
  });
```

## Federated Credential Management API

The [Federated Credential Management API (FedCM)](/en-US/docs/Web/API/FedCM_API) provides a standard mechanism for identity providers to enable identity federation services in a privacy-preserving way without relying on third-party cookies and redirects, and a JavaScript API for sites that depend on those services for sign-in functionality to make use of them. Check out the linked API landing page for more usage information.

> **Note:** Usage of `get()` with the `identity` parameter may be blocked by an {{httpheader("Permissions-Policy/identity-credentials-get", "identity-credentials-get")}} [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy) set on your server.

### `identity` object structure

`identity` can contain a single property, `providers`, which contains an array of objects each specifying the details of a separate IdP:

- `configURL`
  - : A string specifying the URL of the IdP's config file. See [Provide a config file](/en-US/docs/Web/API/FedCM_API#provide_a_config_file) for more information.
- `clientId`
  - : A string specifying the RP's client identifier, issued by the IdP to the RP in a completely separate process specific to the IdP.
- `nonce` {{optional_inline}}
  - : A random string that can be included to ensure the response is issued for this specific request, and prevent {{glossary("replay attack", "replay attacks")}}.

### Return value

A {{jsxref("Promise")}} that resolves with an {{domxref("IdentityCredential")}} instance matching the provided parameters. If a single credential cannot be unambiguously obtained, the Promise will resolve to `null`.

### Exceptions

- `NetworkError` {{domxref("DOMException")}}
  - : The IdP did not respond within 60 seconds, or the provided credentials were not valid/found.
- `NotAllowedError` {{domxref("DOMException")}}
  - : Use of this feature was blocked by an {{HTTPHeader("Permissions-Policy/identity-credentials-get","identity-credentials-get")}} [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy).

### Examples

Relying parties can call `get()` with the `identity` option to make a request for users to login to the relying party via an identity provider (IdP), using identity federation. A typical request would look like this:

```js
async function signIn() {
  const identityCredential = await navigator.credentials.get({
    identity: {
      providers: [
        {
          configURL: "https://accounts.idp.example/config.json",
          clientId: "********",
          nonce: "******",
        },
      ],
    },
  });
}
```

Check out [Federated Credential Management API (FedCM)](/en-US/docs/Web/API/FedCM_API) for more details on how this works. This call will start off the sign-in flow described in [FedCM sign-in flow](/en-US/docs/Web/API/FedCM_API#fedcm_sign-in_flow).

## Web Authentication API

The [Web Authentication API](/en-US/docs/Web/API/Web_Authentication_API) enables strong authentication with public key cryptography, enabling passwordless authentication and/or secure multi-authentication (MFA) without SMS texts. Check out the linked API landing page for more usage information.

> **Note:** Usage of `get()` with the `publicKey` parameter may be blocked by a {{HTTPHeader("Permissions-Policy/publickey-credentials-get","publickey-credentials-get")}} [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy) set on your server.

### `publicKey` object structure

`publicKey` can contain the following properties:

- `allowCredentials` {{optional_inline}}

  - : An array of objects defining a restricted list of the acceptable credentials for retrieval. Each object will contain the following properties:

    - `id`: An {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}}, or {{jsxref("DataView")}} representing the ID of the public key credential to retrieve. This value is mirrored by the {{domxref("PublicKeyCredential.rawId", "rawId")}} property of the {{domxref("PublicKeyCredential")}} object returned by a successful `get()` call.

    - `transports`: An array of strings providing hints as to the methods the client could use to communicate with the relevant authenticator of the public key credential to retrieve. Possible transports are: `"ble"`, `"hybrid"`, `"internal"`, `"nfc"`, and `"usb"` (see {{domxref("AuthenticatorAttestationResponse.getTransports", "getTransports()")}} for more details).

      > **Note:** This value is mirrored by the return value of the {{domxref("AuthenticatorAttestationResponse.getTransports", "PublicKeyCredential.response.getTransports()")}} method of the {{domxref("PublicKeyCredential")}} object returned by the `create()` call that originally created the credential. At that point, it should be stored by the app for later use.

    - `type`: A string defining the type of the public key credential to retrieve. This can currently take a single value, `"public-key"`, but more values may be added in the future. This value is mirrored by the {{domxref("Credential.type", "type")}} property of the {{domxref("PublicKeyCredential")}} object returned by a successful `get()` call.

    If `allowCredentials` is omitted, it will default to an empty array, meaning that any credential is potentially acceptable for retrieval without the relying party first providing an ID.

- `attestation` {{optional_inline}}

  - : A string specifying the relying party's preference for how the attestation statement (i.e., provision of verifiable evidence of the authenticity of the authenticator and its data) is conveyed during authentication. The value can be one of the following:

    - `"none"`: Specifies that the relying party is not interested in authenticator attestation. This might be to avoid additional user consent for round trips to the relying party server to relay identifying information, or round trips to an attestation certificate authority (CA), with the aim of making the authentication process smoother. If `"none"` is chosen as the `attestation` value, and the authenticator signals that it uses a CA to generate its attestation statement, the client app will replace it with a "None" attestation statement, indicating that no attestation statement is available.

    - `"direct"`: Specifies that the relying party wants to receive the attestation statement as generated by the authenticator.

    - `"enterprise"`: Specifies that the Relying Party wants to receive an attestation statement that may include uniquely identifying information. This is intended for controlled deployments within an enterprise where the organization wishes to tie registrations to specific authenticators.

    - `"indirect"`: Specifies that the relying party wants to receive a verifiable attestation statement, but it will allow the client to decide how to receive it. For example, the client could choose to replace the authenticator's assertion statement with one generated by an Anonymization CA to protect user privacy.

    If `attestation` is omitted, it will default to `"none"`.

- `attestationFormats` {{optional_inline}}

  - : An array of strings specifying the relying party's preference for the attestation statement format used by the authenticator. Values should be ordered from highest to lowest preference, and should be considered hints — the authenticator may choose to issue an attestation statement in a different format. For a list of valid formats, see [WebAuthn Attestation Statement Format Identifiers](https://www.iana.org/assignments/webauthn/webauthn.xhtml#webauthn-attestation-statement-format-ids).

    If omitted, `attestationFormats` defaults to an empty array.

- `challenge`

  - : An {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}}, or {{jsxref("DataView")}} originating from the relying party's server and used as a [cryptographic challenge](https://en.wikipedia.org/wiki/Challenge%E2%80%93response_authentication). This value will be signed by the authenticator and the signature will be sent back as part of the {{domxref("AuthenticatorAssertionResponse.signature")}} (available in the {{domxref("PublicKeyCredential.response", "response")}} property of the {{domxref("PublicKeyCredential")}} object returned by a successful `get()` call).

- `extensions` {{optional_inline}}

  - : An object containing properties representing the input values for any requested extensions. These extensions are used to specific additional processing by the client or authenticator during the authentication process. Examples include dealing with legacy FIDO API credentials, and evaluating outputs from a pseudo-random function (PRF) associated with a credential.

    Extensions are optional and different browsers may recognize different extensions. Processing extensions is always optional for the client: if a browser does not recognize a given extension, it will just ignore it. For information on using extensions, and which ones are supported by which browsers, see [Web Authentication extensions](/en-US/docs/Web/API/Web_Authentication_API/WebAuthn_extensions).

- `rpId` {{optional_inline}}

  - : A string that specifies the relying party's identifier (for example `"login.example.org"`). For security purposes:

    - The calling web app verifies that `rpId` matches the relying party's origin.
    - The authenticator verifies that `rpId` matches the `rpId` of the credential used for the authentication ceremony.

    If `rpId` is omitted, it will default to the current origin's domain.

- `timeout` {{optional_inline}}

  - : A numerical hint, in milliseconds, indicating the time the relying party is willing to wait for the retrieval operation to complete. This hint may be overridden by the browser.

- `userVerification` {{optional_inline}}

  - : A string specifying the relying party's requirements for user verification of the authentication process. This verification is initiated by the authenticator, which will request the user to provide an available factor (for example a PIN or a biometric input of some kind).

    The value can be one of the following:

    - `"required"`: The relying party requires user verification, and the operation will fail if it does not occur.
    - `"preferred"`: The relying party prefers user verification if possible, but the operation will not fail if it does not occur.
    - `"discouraged"`: The relying party does not want user verification, in the interests of making user interaction as smooth as possible.

    If `userVerification` is omitted, it will default to `"preferred"`.

### Return value

A {{jsxref("Promise")}} that resolves with an {{domxref("PublicKeyCredential")}} instance matching the provided parameters. If a single credential cannot be unambiguously obtained, the Promise will resolve to `null`.

### Exceptions

- `SecurityError` {{domxref("DOMException")}}
  - : Usage was blocked by a {{HTTPHeader("Permissions-Policy/publickey-credentials-get","publickey-credentials-get")}} [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy).

### Examples

The following snippet shows a typical `get()` call with the WebAuthn `publicKey` option:

```js
const publicKey = {
  challenge: new Uint8Array([139, 66, 181, 87, 7, 203, ...]),
  rpId: "acme.com",
  allowCredentials: [{
    type: "public-key",
    id: new Uint8Array([64, 66, 25, 78, 168, 226, 174, ...])
  }],
  userVerification: "required",
}

navigator.credentials.get({ publicKey })
```

A successful `get()` call returns a promise that resolves with a {{domxref("PublicKeyCredential")}} object instance, representing a public key credential previously created via a WebAuthn {{domxref("CredentialsContainer.create()", "create()")}} that has now been used to authenticate a user. Its {{domxref("PublicKeyCredential.response")}} property contains an {{domxref("AuthenticatorAssertionResponse")}} object providing access to several useful pieces of information including the authenticator data, signature, and user handle.

```js
navigator.credentials.get({ publicKey }).then((publicKeyCredential) => {
  const response = publicKeyCredential.response;

  // Access authenticator data ArrayBuffer
  const authenticatorData = response.authenticatorData;

  // Access client JSON
  const clientJSON = response.clientDataJSON;

  // Access signature ArrayBuffer
  const clientJSON = response.signature;

  // Access userHandle ArrayBuffer
  const clientJSON = response.userHandle;
});
```

Some of this data will need to be stored on the server — for example the `signature` to provide proof that authenticator possesses the genuine private key used to create the credential, and the `userHandle` to link the user with the credential, sign in attempt, and other data.

> **Note:** See [Authenticating a user](/en-US/docs/Web/API/Web_Authentication_API#authenticating_a_user) for more information about how the overall flow works.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

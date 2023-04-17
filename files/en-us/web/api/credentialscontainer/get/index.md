---
title: "CredentialsContainer: get() method"
short-title: get()
slug: Web/API/CredentialsContainer/get
page-type: web-api-instance-method
browser-compat: api.CredentialsContainer.get
---

{{APIRef("Credential Management API")}}

The **`get()`** method of the
{{domxref("CredentialsContainer")}} interface returns a {{jsxref("Promise")}} to a
single {{domxref("Credential")}} instance that matches the provided parameters.

This method first collects all credentials in the {{domxref("CredentialsContainer")}}
that meet the necessary criteria (defined in the **`options`**
argument). From the resulting set of credentials, it then selects the best one.
Depending on the options, it may display a dialog to the user and ask the user to make
the selection.

> **Note:** Usage of this feature may be blocked by an {{httpheader("Permissions-Policy/identity-credentials-get", "identity-credentials-get")}} or {{HTTPHeader("Permissions-Policy/publickey-credentials-get","publickey-credentials-get")}} [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy) set on your server.

## Syntax

```js-nolint
get()
get(options)
```

> **Note:** When providing an `options` object, you should only provide a single property containing the properties that define the type of credential being requested — this means only one of `federated`, `identity`, `password`, or `publicKey`.

### Parameters

- `options` {{optional_inline}}

  - : An object that contains options for the request. The options include criteria that the credentials are required or allowed to have, and options for interacting with the user. It can contain the following properties:

    - `federated` {{optional_inline}}

      - : An object (see [`federated` object structure](#federated_object_structure)) containing requirements for returned {{domxref("FederatedCredential")}}s.

    - `identity` {{optional_inline}}

      - : An object (see [`identity` object structure](#identity_object_structure)) containing details of federated identity providers (IdPs) that a relying party (RP) website can use to sign users in. Causes the `get()` call to initiate a request for a user to sign in to a RP with an IdP (see [Federated Credential Management API (FedCM)](/en-US/docs/Web/API/FedCM_API)).

    - `mediation` {{optional_inline}}

      - : A string indicating whether the user will be required to login for every visit to a client app. The value can be one of the following:

        - `"conditional"`: Discovered credentials are presented to the user in a non-modal dialog box along with an indication of the origin requesting credentials. If the user makes a gesture outside of the dialog, it closes without resolving or rejecting the Promise and without causing a user-visible error condition. If the user selects a credential, that credential is returned to the caller. `"conditional"` behavior always involves user mediation of some sort if applicable credentials are discovered ({{domxref("CredentialsContainer.preventSilentAccess()")}} is treated as being `true` regardless of its actual value). If no credentials are discovered, the user agent can prompt the user to take action in a way that depends on the type of credential (e.g. to insert a device containing credentials).

        - `"optional"`: If credentials can be handed over for a given operation without user mediation, they will be. If user mediation is required, then the user agent will ask the user to authenticate. This value is intended for situations where you have reasonable confidence that a user won't be surprised or confused at seeing a login dialog box — for example on a site that doesn't automatically log users in, when a user has just clicked a "Login/Signup" button.

        - `"required"`: The user will always be asked to authenticate, even if prevent silent access (see {{domxref("CredentialsContainer.preventSilentAccess()")}}) is set to `false`. This value is intended for situations where you want to force user authentication — for example if you want a user to reauthenticate when a sensitive operation is being performed (like confirming a credit card payment), or when switching users.

        - `"silent"`: The user will not be asked to authenticate. The user agent will automatically log the user in if possible; if consent is required, the promise will fulfill with `null`. This value is intended for situations where you would want to automatically sign a user in upon visiting a web app if possible, but if not, you don't want to present them with a confusing login dialog box. Instead, you'd want to wait for them to explicitly click a "Login/Signup" button.

        If `mediation` is omitted, it will default to `"optional"`.

    - `password` {{optional_inline}}

      - : A boolean value. If set to `true`, it indicates that the requested credential is a {{domxref("PasswordCredential")}} as opposed to another kind of credential.

    - `publicKey` {{optional_inline}}

      - : An object (see [`publicKey` object structure](#publickey_object_structure)) containing requirements for returned public key credentials (see [WebAuthn](/en-US/docs/Web/API/Web_Authentication_API) for more information). Causes the `get()` call to use an existing set of public key credentials to authenticate to a relying party.

    - `signal` {{optional_inline}}

      - : An {{domxref("AbortSignal")}} object instance that allows an ongoing `get()` operation to be aborted. An aborted operation may complete normally (generally if the abort was received after the operation finished) or reject with an "`AbortError`" {{domxref("DOMException")}}.

### `federated` object structure

`federated` will contain the following properties:

- `protocols`
  - : An array of strings representing the protocols of the requested credentials' federated identity providers (for example, `"openidconnect"`).
- `providers`
  - : An array of strings representing the credentials' federated identity providers (for example `"https://www.facebook.com"` or `"https://accounts.google.com"`).

### `identity` object structure

`identity` can contain a single property, `providers`, which contains an array of objects each specifying the details of a separate IdP:

- `configURL`
  - : A string specifying the URL of the IdP's config file. See [Provide a config file](/en-US/docs/Web/API/FedCM_API#provide_a_config_file) for more information.
- `clientId`
  - : A string specifying the the RP's client identifier, issued by the IdP to the RP in a completely separate process specific to the IdP.
- `nonce` {{optional_inline}}
  - : A random string that can be included to ensure the response is issued for this specific request, and prevent {{glossary("replay attack", "replay attacks")}}.

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

  - : A string specifying the relying party's preference for how the attestation statement (i.e. provision of verifiable evidence of the authenticity of the authenticator and its data) is conveyed during authentication. The value can be one of the following:

    - `"none"`: Specifies that the relying party is not interested in authenticator attestation. This might be to avoid additional user consent for round trips to the relying party server to relay identifying information, or round trips to an attestation certificate authority (CA), with the aim of making the authentication process smoother. If `"none"` is chosen as the `attestation` value, and the authenticator signals that it uses a CA to generate its attestation statement, the client app will replace it with a "None" attestation statement, indicating that no attestation statement is available.

    - `"direct"`: Specifies that the relying party wants to receive the attestation statement as generated by the authenticator.

    - `"enterprise"`: Specifies that the Relying Party wants to receive an attestation statement that may include uniquely identifying information. This is intended for controlled deployments within an enterprise where the organization wishes to tie registrations to specific authenticators.

    - `"indirect"`: Specifies that the relying party wants to receive a verifiable attestation statement, but it will allow the client to decide how to receive it. For example, the client could choose to replace the authenticator's assertation statement with one generated by an Anonymization CA to protect user privacy.

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

    - `"discouraged"`: The relying party requires user verification, and the operation will fail if it does not occur.
    - `"preferred"`: The relying party prefers user verification if possible, but the operation will not fail if it does not occur.
    - `"required"`: The relying party does not want user verification, in the interests of making user interaction as smooth as possible.

    If `userVerification` is omitted, it will default to `"preferred"`.

### Return value

A {{jsxref("Promise")}} that resolves with a {{domxref("Credential")}} instance that
matches the provided parameters.

- If the `get()` call includes the `identity` option, the promise fulfills with an {{domxref("IdentityCredential")}} instance (see the [Federated Credential Management API (FedCM)](/en-US/docs/Web/API/FedCM_API) for more details).
- If the `get()` call includes the `publicKey` option, the promise fulfills with a {{domxref("PublicKeyCredential")}} instance (see the [Web Authentication API](/en-US/docs/Web/API/Web_Authentication_API) for more details).

If a single credential cannot be unambiguously obtained, the Promise will resolve to `null`.

### Exceptions

- `NetworkError` {{domxref("DOMException")}}
  - : In the case of a `get()` call with an `identity` option, this exception is thrown if the IdP does not respond within 60 seconds, or if the provided credentials are not valid/found.
- `NotAllowedError` {{domxref("DOMException")}}
  - : Use of this feature was blocked by an {{HTTPHeader("Permissions-Policy/identity-credentials-get","identity-credentials-get")}} [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy).
- `SecurityError` {{domxref("DOMException")}}
  - : Use of this feature was blocked by a {{HTTPHeader("Permissions-Policy/publickey-credentials-get","publickey-credentials-get")}} [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy).

## Examples

### User login using the WebAuthn API

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

### User login using the FedCM API

Relying parties (RPs) can call `get()` with the `identity` option to make a request for users to login to the RP via an identity provider (IdP), using identity federation. A typical request would look like this:

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

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Authentication API](/en-US/docs/Web/API/Web_Authentication_API)
- [Federated Credential Management API (FedCM)](/en-US/docs/Web/API/FedCM_API)
- {{HTTPHeader("Permissions-Policy")}} directives:
  - {{HTTPHeader("Permissions-Policy/identity-credentials-get","identity-credentials-get")}}
  - {{HTTPHeader("Permissions-Policy/publickey-credentials-get","publickey-credentials-get")}}

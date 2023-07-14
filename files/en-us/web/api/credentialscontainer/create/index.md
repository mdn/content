---
title: "CredentialsContainer: create() method"
short-title: create()
slug: Web/API/CredentialsContainer/create
page-type: web-api-instance-method
browser-compat: api.CredentialsContainer.create
---

{{APIRef("Credential Management API")}}

The **`create()`** method of the {{domxref("CredentialsContainer")}} interface returns a {{jsxref("Promise")}} that resolves with a new credential instance based on the provided options, the information from which can then be stored and later used to authenticate users via {{domxref("CredentialsContainer.get", "navigator.credentials.get()")}}.

This is used by multiple different credential-related APIs with significantly different purposes:

- The [Credential Management API](/en-US/docs/Web/API/Credential_Management_API) uses `create()` to create basic federated credentials or username/password credentials.
- The [Web Authentication API](/en-US/docs/Web/API/Web_Authentication_API) uses `create()` to create public key credentials (based on asymmetric cryptography).

The below reference page starts with a syntax section that explains the general method call structure and parameters that apply to all the different APIs. After that, it is split into separate sections providing parameters, return values, and examples specific to each API.

> **Note:** This method is restricted to top-level {{glossary("browsing context", "browsing contexts")}} (i.e., a document running directly inside a browser tab, and not embedded inside another document). Calls to it from within an `<iframe>` element will resolve without effect.

## General syntax

```js-nolint
create()
create(options)
```

### Parameters

- `options` {{optional_inline}}

  - : An object that contains options for the requested new `Credentials` object. It can contain the following properties:

    - A _credential type_

      - : An object defining the type of credential being requested — this can be one of one of:

        - `federated`: An object containing requirements for creating a federated identify provider credential. Bear in mind that the [Federated Credential Management API (FedCM)](/en-US/docs/Web/API/FedCM_API) supersedes this credential type. See the [Credential Management API](#credential_management_api) section below for more details.
        - `password`: An object containing requirements for creating a password credential. See the [Credential Management API](#credential_management_api) section below for more details.
        - `publicKey`: An object containing requirements for creating a public key credential. Causes the `create()` call to request that the user agent creates new credentials via an authenticator — either for registering a new account or for associating a new asymmetric key pair with an existing account. See the [Web Authentication API](#web_authentication_api) section below for more details.

    - `signal` {{optional_inline}}

      - : An {{domxref("AbortSignal")}} object instance that allows an ongoing `create()` operation to be aborted. An aborted operation may complete normally (generally if the abort was received after the operation finished) or reject with an "`AbortError`" {{domxref("DOMException")}}.

## Credential Management API

The [Credential Management API](/en-US/docs/Web/API/Credential_Management_API) lets a website store and retrieve password and federated credentials. These capabilities allow users to sign in without typing passwords, see the federated account they used to sign in to a site, and resume a session without the explicit sign-in flow of an expired session.

### `federated` object structure

`federated` can contain the following properties:

- `iconURL` {{optional_inline}}
  - : A string representing the URL of an icon or avatar to be associated with the credential.
- `id`
  - : A string representing a unique ID for the credential.
- `name` {{optional_inline}}
  - : A string representing the credential username.
- `origin`
  - : A string representing the credential's origin. {{domxref("FederatedCredential")}} objects are origin-bound, which means that they will only be usable on the specified origin they were intended to be used on.
- `protocol` {{optional_inline}}
  - : A string representing the protocol of the credentials' federated identity provider (for example, `"openidconnect"`).
- `provider`
  - : A string representing the credentials' federated identity provider (for example `"https://www.facebook.com"` or `"https://accounts.google.com"`).

### `password` object structure

A `password` object can be a reference to an object literal or an {{domxref("HTMLFormElement")}}. In both cases, they need to provide the following data:

- `iconURL` {{optional_inline}}
  - : A string representing the URL of an icon or avatar to be associated with the credential.
- `id`
  - : A string representing a unique ID for the credential.
- `name` {{optional_inline}}
  - : A string representing the credential username.
- `origin`
  - : A string representing the credential's origin. {{domxref("PasswordCredential")}} objects are origin-bound, which means that they will only be usable on the specified origin they were intended to be used on.
- `password`
  - : A string representing the credential password.

In the case of the string literal, the properties are provided as-is. In the case of the {{domxref("HTMLFormElement")}}, the values need to be provided in form input fields (this can include {{htmlelement("input")}}, {{htmlelement("select")}}, or {{htmlelement("textarea")}} elements) with the following `name` attribute values:

- `id`: `"username"`
- `name`: `"name"` or `"nickname"`
- `iconURL`: `"photo"`
- `password`: `"new-password"` or `"current-password"`

The exception to this is `origin` — this is set to the origin of the document the {{domxref("HTMLFormElement")}} is contained within.

### Return value

A {{jsxref("Promise")}} that resolves with a {{domxref("Credential")}} instance matching the provided parameters:

- If the created credential type was a `federated` object, the returned instance will be a {{domxref("FederatedCredential")}}.
- If the created credential type was a `password` object, the returned instance will be a {{domxref("PasswordCredential")}}.

If a single credential cannot be successfully created, the Promise will resolve to `null`.

### Exceptions

- {{jsxref("TypeError")}}
  - : In the case of a {{domxref("PasswordCredential")}} creation request, `id`, `origin`, or `password` were not provided (empty).

### Examples

```js
navigator.credentials
  .create({
    id: "ergnjregoith5y9865jhokmfdskl;vmfdl;kfd...",
    name: "fluffybunny",
    origin: "example.com",
    password: "fluffyhaxx0r",
  })
  .then((pwdCred) => {
    console.log(pwdCred.name);
  });
```

## Web Authentication API

The [Web Authentication API](/en-US/docs/Web/API/Web_Authentication_API) enables strong authentication with public key cryptography, enabling passwordless authentication and/or secure multi-authentication (MFA) without SMS texts. Check out the linked API landing page for more usage information.

> **Note:** Usage of `create()` with the `publicKey` parameter may be blocked by a {{HTTPHeader("Permissions-Policy/publickey-credentials-create","publickey-credentials-create")}} [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy) set on your server.

### `publicKey` object structure

The `publicKey` object can contain the following properties:

- `attestation` {{optional_inline}}

  - : A string specifying the relying party's preference for how the attestation statement (i.e., provision of verifiable evidence of the authenticity of the authenticator and its data) is conveyed during credential creation. The value can be one of the following:

    - `"none"`: Specifies that the relying party is not interested in authenticator attestation. This might be to avoid additional user consent for round trips to the relying party server to relay identifying information, or round trips to an attestation certificate authority (CA), with the aim of making the authentication process smoother. If `"none"` is chosen as the `attestation` value, and the authenticator signals that it uses a CA to generate its attestation statement, the client app will replace it with a "None" attestation statement, indicating that no attestation statement is available.

    - `"direct"`: Specifies that the relying party wants to receive the attestation statement as generated by the authenticator.

    - `"enterprise"`: Specifies that the Relying Party wants to receive an attestation statement that may include uniquely identifying information. This is intended for controlled deployments within an enterprise where the organization wishes to tie registrations to specific authenticators.

    - `"indirect"`: Specifies that the relying party wants to receive a verifiable attestation statement, but it will allow the client to decide how to receive it. For example, the client could choose to replace the authenticator's assertion statement with one generated by an Anonymization CA to protect user privacy.

    If `attestation` is omitted, it will default to `"none"`.

- `attestationFormats` {{optional_inline}}

  - : An array of strings specifying the relying party's preference for the attestation statement format used by the authenticator. Values should be ordered from highest to lowest preference, and should be considered hints — the authenticator may choose to issue an attestation statement in a different format. For a list of valid formats, see [WebAuthn Attestation Statement Format Identifiers](https://www.iana.org/assignments/webauthn/webauthn.xhtml#webauthn-attestation-statement-format-ids).

    If omitted, `attestationFormats` defaults to an empty array.

- `authenticatorSelection` {{optional_inline}}

  - : An object whose properties are criteria used to filter out the potential authenticators for the credential creation operation. This object can contain the properties:

    - `authenticatorAttachment` {{optional_inline}}: A string indicating which authenticator attachment type should be permitted for the chosen authenticator. Possible values are: Allowed values are:

      - `"platform"`: The authenticator is part of the device WebAuthn is running on (termed a **platform authenticator**), therefore WebAuthn will communicate with it using a transport available to that platform, such as a platform-specific API. A public key credential bound to a platform authenticator is called a **platform credential**.
      - `"cross-platform"`: The authenticator is not a part of the device WebAuthn is running on (termed a **roaming authenticator** as it can roam between different devices), therefore WebAuthn will communicate with it using a cross-platform transport protocol such as Bluetooth or NFC. A public key credential bound to a roaming authenticator is called a **roaming credential**.

    - `requireResidentKey` {{optional_inline}} : A boolean. If set to `true`, it indicates that a resident key is required (see `residentKey`) This property is deprecated, but still available in some implementations for backwards compatibility with WebAuthn Level 1. The value should be set to `true` if `residentKey` is set to `"required"`.

      If omitted, `requireResidentKey` defaults to `false`.

    - `residentKey` {{optional_inline}}: A string that specifies the extent to which the relying party desires to create a **client-side discoverable credential** (i.e., one that is usable in authentication requests where the relying party does not provide credential IDs — {{domxref("CredentialsContainer.get()", "navigator.credentials.get()")}} is called with an empty `allowCredentials` value). The alternative is a **server-side credential**, where the relying party must provide credential IDs in the `get()` `allowCredentials` value. Possible values are:

      - `"discouraged"`: The relying party prefers creation of a server-side credential, but will accept a client-side discoverable credential.
      - `"preferred"`: The relying party strongly prefers creation of a client-side discoverable credential, but will accept a server-side credential. The user agent should guide the user through setting up user verification, if needed, to create a discoverable credential. This takes precedence over the `userVerification` setting.
      - `"required"`: The relying party requires a client-side discoverable credential. If one cannot be created, an error is thrown.

      If omitted, `residentKey` defaults to `"required"` if `requireResidentKey` is `true`, otherwise the default value is `"discouraged"`.

    - `userVerification` {{optional_inline}}: A string that specifies the relying party's requirements for user verification for the `create()` operation. Possible values are:

      - `"discouraged"`: The relying party prefers no user verification for the `create()` operation, in the interests of minimizing disruption to the user experience.
      - `"preferred"`: The relying party prefers user verification for the `create()` operation, but it will not fail if user verification cannot be performed.
      - `"required"`: The relying party requires user verification for the `create()` operation — if user verification cannot be performed, an error is thrown.

      If omitted, `userVerification` defaults to `"preferred"`.

- `challenge`

  - : An {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}}, or {{jsxref("DataView")}} provided by the relying party's server and used as a [cryptographic challenge](https://en.wikipedia.org/wiki/Challenge%E2%80%93response_authentication). This value will be signed by the authenticator and the signature will be sent back as part of {{domxref("AuthenticatorAttestationResponse.attestationObject")}}.

- `excludeCredentials` {{optional_inline}}

  - : An {{jsxref("Array")}} of objects describing existing credentials that are already mapped to this user account (as identified by `user.id`). This is provided by the relying party, and checked by the user agent to avoid creating a new public key credential on an authenticator that already has a credential mapped to the specified user account. for an existing user who already has some. Each item should be of the form:

    - `id`: An {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}}, or {{jsxref("DataView")}} representing the existing credential ID.

    - `transports` {{optional_inline}}: An {{jsxref("Array")}} of strings representing allowed transports. Possible transports are: `"ble"`, `"hybrid"`, `"internal"`, `"nfc"`, and `"usb"` (see {{domxref("AuthenticatorAttestationResponse.getTransports", "getTransports()")}} for more details).

    - `type`: A string defining the type of public key credential to create. This can currently take a single value, `"public-key"`, but more values may be added in the future.

    If the `create()` call is attempting to create a duplicate public key credential on an authenticator, the user agent will guide to user to create the credential using a different authenticator, or fail if that is not possible.

    If `excludeCredentials` is omitted, it defaults to an empty array.

- `extensions` {{optional_inline}}

  - : An object containing properties representing the input values for any requested extensions. These extensions are used to specific additional processing by the client or authenticator during the credential creation process. Examples include specifying whether a returned credential is discoverable, or whether the relying party will be able to store large blob data associated with a credential.

    Extensions are optional and different browsers may recognize different extensions. Processing extensions is always optional for the client: if a browser does not recognize a given extension, it will just ignore it. For information on using extensions, and which ones are supported by which browsers, see [Web Authentication extensions](/en-US/docs/Web/API/Web_Authentication_API/WebAuthn_extensions).

- `pubKeyCredParams`

  - : An {{jsxref("Array")}} of objects which specify the key types and signature algorithms the Relying Party supports, ordered from most preferred to least preferred. The client and authenticator will make a best-effort to create a credential of the most preferred type possible. These objects will contain the following properties:

    - `alg`: A number that is equal to a [COSE Algorithm Identifier](https://www.iana.org/assignments/cose/cose.xhtml#algorithms), representing the cryptographic algorithm to use for this credential type. It is recommended that relying parties that wish to support a wide range of authenticators should include at least the following values in the provided choices:

      - `-8`: Ed25519
      - `-7`: ES256
      - `-257`: RS256

    - `type`: A string defining the type of public key credential to create. This can currently take a single value, `"public-key"`, but more values may be added in the future.

    If none of the listed credential types can be created, the `create()` operation fails.

- `rp`

  - : An object describing the relying party that requested the credential creation. It can contain the following properties:

    - `id` {{optional_inline}}: A string representing the ID of the relying party. A public key credential can only be used for authentication with the same relying party (as identified by the `publicKey.rpId` in a {{domxref("CredentialsContainer.get()", "navigator.credentials.get()")}} call) it was registered with — the IDs need to match.

      The `id` cannot include a port or scheme like a standard origin, but the domain scheme must be `https` scheme. The `id` needs to equal the origin's effective domain, or a domain suffix thereof. So for example if the relying party's origin is `https://login.example.com:1337`, the following `id`s are valid:

      - `login.example.com`
      - `example.com`

      But not:

      - `m.login.example.com`
      - `com`

      If omitted, `id` defaults to the document origin — which would be `login.example.com` in the above example.

    - `name`: A string representing the name of the relying party (e.g. `"Facebook"`). This is the name the user will be presented with when creating or validating a WebAuthn operation.

- `timeout` {{optional_inline}}

  - : A numerical hint, in milliseconds, which indicates the time the calling web app is willing to wait for the creation operation to complete. This hint may be overridden by the browser.

- `user`

  - : An object describing the user account for which the credential is generated. It can contain the following properties:

    - `displayName`: A string providing a human-friendly user display name (example: `"John Doe"`), which will have been set by user during initial registration with the relying party.

    - `id`: An {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}}, or {{jsxref("DataView")}} representing a unique ID for the user account. This value has a maximum length of 64 bytes, and is not intended to be displayed to the user.

    - `name`: A string providing a human-friendly identifier for the user's account, to help distinguish between different accounts with similar `displayName`s. This could be an email address (such as `"john.doe@example.com"`), phone number (for example `"+12345678901"`), or some other kind of user account identifier (for example `"johndoe667"`).

### Return value

A {{jsxref("Promise")}} that resolves with an {{domxref("PublicKeyCredential")}} instance matching the provided parameters. If no credential object can be created, the promise resolves with `null`.

### Exceptions

- `SecurityError` {{domxref("DOMException")}}
  - : Usage was blocked by a {{HTTPHeader("Permissions-Policy/publickey-credentials-create","publickey-credentials-create")}} [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy).

## Examples

The following snippet shows a typical `create()` call with the WebAuthn `publicKey` option:

```js
const publicKey = {
  challenge: new Uint8Array([117, 61, 252, 231, 191, 241, ...]),
  rp: { id: "acme.com", name: "ACME Corporation" },
  user: {
    id: new Uint8Array([79, 252, 83, 72, 214, 7, 89, 26]),
    name: "jamiedoe",
    displayName: "Jamie Doe"
  },
  pubKeyCredParams: [ {type: "public-key", alg: -7} ]
}

navigator.credentials.create({ publicKey })
```

A successful `create()` call returns a promise that resolves with a {{domxref("PublicKeyCredential")}} object instance, representing a public key credential that can later be used to authenticate a user via a WebAuthn {{domxref("CredentialsContainer.get()", "get()")}} call. Its {{domxref("PublicKeyCredential.response")}} property contains an {{domxref("AuthenticatorAttestationResponse")}} object providing access to several useful pieces of information including the authenticator data, public key, transport mechanisms, and more.

```js
navigator.credentials.create({ publicKey }).then((publicKeyCredential) => {
  const response = publicKeyCredential.response;

  // Access attestationObject ArrayBuffer
  const attestationObj = response.attestationObject;

  // Access client JSON
  const clientJSON = response.clientDataJSON;

  // Return authenticator data ArrayBuffer
  const authenticatorData = response.getAuthenticatorData();

  // Return public key ArrayBuffer
  const pk = response.getPublicKey();

  // Return public key algorithm identifier
  const pkAlgo = response.getPublicKeyAlgorithm();

  // Return permissible transports array
  const transports = response.getTransports();
});
```

Some of this data will need to be stored on the server for future authentication operations against this credential — for example the public key, the algorithm used, and the permissible transports.

> **Note:** See [Creating a key pair and registering a user](/en-US/docs/Web/API/Web_Authentication_API#creating_a_key_pair_and_registering_a_user) for more information about how the overall flow works.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

---
title: "CredentialsContainer: get() method"
short-title: get()
slug: Web/API/CredentialsContainer/get
page-type: web-api-instance-method
browser-compat: api.CredentialsContainer.get
---

{{APIRef("Credential Management API")}}{{SecureContext_Header}}

The **`get()`** method of the {{domxref("CredentialsContainer")}} interface returns a {{jsxref("Promise")}} that fulfills with a single credential instance that matches the provided parameters, which the browser can then use to authenticate with a relying party. This is used by several different credential-related APIs with significantly different purposes:

- The [Credential Management API](/en-US/docs/Web/API/Credential_Management_API) uses `get()` to authenticate using basic federated credentials or username/password credentials.
- The [Web Authentication API](/en-US/docs/Web/API/Web_Authentication_API) uses `get()` to authenticate or provide additional factors during MFA with public key credentials (based on asymmetric cryptography).
- The [Federated Credential Management (FedCM) API](/en-US/docs/Web/API/FedCM_API) uses `get()` to authenticate with federated identity providers (IdPs).
- The [WebOTP API](/en-US/docs/Web/API/WebOTP_API) uses `get()` to request retrieval of a one-time password (OTP) from a specially-formatted SMS message sent by an app server.

The below reference page starts with a syntax section that explains the general method call structure and parameters that apply to all the different APIs. After that, it is split into separate sections providing parameters, return values, and examples specific to each API.

## General syntax

```js-nolint
get()
get(options)
```

### Parameters

- `options` {{optional_inline}}

  - : An object that contains options for the request. The options include criteria that the credentials are required or allowed to have, and options for interacting with the user. It can contain the following properties:

    - `mediation` {{optional_inline}}

      - : A string indicating whether the user will be required to login for every visit to a client app. The value can be one of the following:

        - `"conditional"`: Discovered credentials are presented to the user in a non-modal dialog box along with an indication of the origin requesting credentials. In practice, this means autofilling available credentials; see [Sign in with a passkey through form autofill](https://web.dev/articles/passkey-form-autofill) for more details of how this is used; {{domxref("PublicKeyCredential.isConditionalMediationAvailable()")}} also provides some useful information.

        - `"optional"`: If credentials can be handed over for a given operation without user mediation, they will be, enabling automatic reauthentication without user mediation. If user mediation is required, then the user agent will ask the user to authenticate. This value is intended for situations where you have reasonable confidence that a user won't be surprised or confused at seeing a login dialog box — for example on a site that doesn't automatically log users in, when a user has just clicked a "Login/Signup" button.

        - `"required"`: The user will always be asked to authenticate, even if prevent silent access (see {{domxref("CredentialsContainer.preventSilentAccess()")}}) is set to `false`. This value is intended for situations where you want to force user authentication — for example if you want a user to reauthenticate when a sensitive operation is being performed (like confirming a credit card payment), or when switching users.

        - `"silent"`: The user will not be asked to authenticate. The user agent will automatically reauthenticate the user and log them in if possible. If consent is required, the promise will fulfill with `null`. This value is intended for situations where you would want to automatically sign a user in upon visiting a web app if possible, but if not, you don't want to present them with a confusing login dialog box. Instead, you'd want to wait for them to explicitly click a "Login/Signup" button.

        If `mediation` is omitted, it will default to `"optional"`.

        > **Note:** In the case of a [federated authentication (FedCM API)](/en-US/docs/Web/API/FedCM_API) request, a `mediation` value of `optional` or `silent` may result in attempted [auto-reauthentication](/en-US/docs/Web/API/FedCM_API/RP_sign-in#auto-reauthentication). Whether this occurred is communicated to the identity provider (IdP) via the [`is_auto_selected`](/en-US/docs/Web/API/FedCM_API/IDP_integration#is_auto_selected) parameter sent to the IdP's `id_assertion_endpoint` during validation and the relying party (RP) via the {{domxref("IdentityCredential.isAutoSelected")}} property. This is useful for performance evaluation, security requirements (the IdP may wish to reject automatic reauthentication requests and always require user mediation), and general UX (an IdP or RP may wish to present different UX for auto and non-auto login experiences).

    - `signal` {{optional_inline}}

      - : An {{domxref("AbortSignal")}} object instance that allows an ongoing `get()` operation to be aborted. An aborted operation may complete normally (generally if the abort was received after the operation finished) or reject with an "`AbortError`" {{domxref("DOMException")}}.

    Each of the following properties represents a _credential type_ being requested:

    - `federated` {{optional_inline}}
      - : An object containing requirements for a requested credential from a federated identify provider. Bear in mind that the Federated Credential Management API (the `identity` credential type) supersedes this credential type. See the [Credential Management API](#credential_management_api) section below for more details.
    - `password` {{optional_inline}}
      - : A boolean value indicating that a password credential is being requested. See the [Credential Management API](#credential_management_api) section below for more details.
    - `identity` {{optional_inline}}
      - : An object containing details of federated identity providers (IdPs) that a relying party (RP) website can use for purposes such as signing in or signing up on a website. It causes the `get()` call to initiate a request for a user to sign in to an RP with an IdP. See the [Federated Credential Management API](#federated_credential_management_api) section below for more details.
    - `otp` {{optional_inline}}
      - : An object containing transport type hints. Causes the `get()` call to initiate a request for the retrieval of an OTP. See the [WebOTP API](#webotp_api) section below for more details.
    - `publicKey` {{optional_inline}}
      - : An object containing requirements for returned public key credentials. Causes the `get()` call to use an existing set of public key credentials to authenticate to a relying party. See the [Web Authentication API](#web_authentication_api) section below for more details.

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
    federated: {
      protocols: ["openidconnect"],
      providers: ["https://www.facebook.com", "https://accounts.google.com"],
    },
  })
  .then((fedCred) => {
    console.log(fedCred.provider);
  });
```

## Federated Credential Management API

The [Federated Credential Management (FedCM) API](/en-US/docs/Web/API/FedCM_API) provides a standard mechanism to delegate authentication or authorization of an individual (user or entity) to trusted external parties called identity providers (IdPs) in a privacy-preserving way, without relying on [third-party cookies](/en-US/docs/Web/Privacy/Third-party_cookies) and redirects.

An individual can then use an existing IdP account (that they are already signed into on the browser) to sign into a website (a relying party or RP). The RP handles this by calling `get()` with an `identity` option.

> **Note:** Usage of `get()` with the `identity` parameter may be blocked by an {{httpheader("Permissions-Policy/identity-credentials-get", "identity-credentials-get")}} [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy) set on your server.

### `identity` object structure

`identity` can contain the following properties:

- `context` {{optional_inline}}
  - : An enumerated value specifying the context in which the user is authenticating with FedCM. The browser uses this value to vary the text in its FedCM UI to better suit the context. Possible values are:
    - `continue`: Suitable for situations where the user is choosing an identity to continue to the next page in the flow, which requires a sign-in. Browsers will provide a text string similar to "Continue to \<page-origin\> with \<IdP\>".
    - `signin`: Suitable for general situations where the user is signing in with an IdP account they've already used on this origin. Browsers will provide a text string similar to "Sign in to \<page-origin\> with \<IdP\>". This is the default value.
    - `signup`: An option for situations where the user is signing in to the origin with a new IdP account they've not used here before. Browsers will provide a text string similar to "Sign up to \<page-origin\> with \<IdP\>".
    - `use`: Suitable for situations where a different action, such as validating a payment, is being performed. Browsers will provide a text string similar to "Use \<page-origin\> with \<IdP\>".
- `providers`

  - : An array containing a single object specifying details of an IdP to be used to sign in. This object can contain the following properties:

    - `configURL`
      - : A string specifying the URL of the IdP's config file. See [Provide a config file](/en-US/docs/Web/API/FedCM_API/IDP_integration#provide_a_config_file_and_endpoints) for more information.
    - `clientId`
      - : A string specifying the RP's client identifier. This information is issued by the IdP to the RP in a separate process that is specific to the IdP.
    - `loginHint` {{optional_inline}}
      - : A string providing a hint about the account option(s) the browser should provide for the user to sign in with. This is useful in cases where the user has already signed in and the site asks them to reauthenticate. Otherwise, the reauthentication process can be confusing when a user has multiple accounts and can't remember which one they used to sign in previously. The value for the `loginHint` property can be taken from the user's previous sign-in, and is matched against the `login_hints` values provided by the IdP in the array of user information returned from the IdP's [accounts list endpoint](/en-US/docs/Web/API/FedCM_API/IDP_integration#the_accounts_list_endpoint).
    - `nonce` {{optional_inline}}
      - : A random string that can be included to ensure the response is issued specifically for this request and prevent {{glossary("replay attack", "replay attacks")}}.

    > **Note:** Currently FedCM only allows the API to be invoked with a single IdP, i.e. the `identity.providers` array has to have a length of 1. Multiple IdPs must be supported via different `get()` calls.

### Return value

A {{jsxref("Promise")}} that resolves with an {{domxref("IdentityCredential")}} instance matching the provided parameters if the user identity is successfully validated by the IdP.

This object contains a token that includes user identity information that has been signed with the IdP's {{glossary("digital certificate")}}.

The RP sends the token to its server to validate the certificate, and on success can use the (now trusted) identity information in the token to sign them into their service (starting a new session), sign them up to their service if they are a new user, etc.

If the `get()` method's promise rejects, the RP can direct the user to the IdP login page to sign in or create an account.

> **Note:** The exact nature of the token is opaque to the FedCM API, and to the browser. The IdP decides on the syntax and usage of it, and the RP needs to follow the instructions provided by the IdP (see [Verify the Google ID token on your server side](https://developers.google.com/identity/gsi/web/guides/verify-google-id-token), for example) to make sure they are using it correctly.

### Exceptions

- `IdentityCredentialError` {{domxref("DOMException")}}
  - : The request to the [ID assertion endpoint](/en-US/docs/Web/API/FedCM_API/IDP_integration#the_id_assertion_endpoint) is unable to validate the authentication, and rejects with an error response containing information about why. See the [Error API example](#example_including_error_api_information) below for more information on how it can be used.
- `NetworkError` {{domxref("DOMException")}}

  - : The IdP did not respond within 60 seconds, the provided credentials were not valid/found, or the browser's login status for the IdP is set to `"logged-out"` (see [Update login status using the Login Status API](/en-US/docs/Web/API/FedCM_API/IDP_integration#update_login_status_using_the_login_status_api) for more information about FedCM login status). In the latter case, there may be some delay in the rejection to avoid leaking the IdP login status to the RP.

- `NotAllowedError` {{domxref("DOMException")}}
  - : Use of this feature was blocked by an {{HTTPHeader("Permissions-Policy/identity-credentials-get","identity-credentials-get")}} [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy).

### Examples

#### Basic example

Relying parties can call `get()` with the `identity` option to make a request for users to sign in to the relying party via an identity provider (IdP), using identity federation. A typical request would look like this:

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

Check out [Federated Credential Management (FedCM) API](/en-US/docs/Web/API/FedCM_API) for more details on how this works. This call will start off the sign-in flow described in [FedCM sign-in flow](/en-US/docs/Web/API/FedCM_API/RP_sign-in#fedcm_sign-in_flow).

#### Example including context and login hint

A similar call including the `context` and `loginHint` extensions would look like so:

```js
async function signIn() {
  const identityCredential = await navigator.credentials.get({
    identity: {
      context: "signup",
      providers: [
        {
          configURL: "https://accounts.idp.example/config.json",
          clientId: "********",
          nonce: "******",
          loginHint: "user1@example.com",
        },
      ],
    },
  });
}
```

> **Note:** After a user has signed in with an IdP, the IdP can call the static {{domxref("IdentityProvider.getUserInfo_static", "IdentityProvider.getUserInfo()")}} method to retrieve their details. `getUserInfo()` must be called from within an IdP-origin {{htmlelement("iframe")}} to ensure that RP scripts cannot access the data. This information can then be used to display a personalized welcome message and sign-in button. This approach is already common on sites that use identity federation for sign-in. However, `getUserInfo()` offers a way to achieve this without relying on [third-party cookies](/en-US/docs/Web/Privacy/Third-party_cookies).

#### Example including Error API information

If the IdP is unable to validate the authentication for a request to the [ID assertion endpoint](/en-US/docs/Web/API/FedCM_API/IDP_integration#the_id_assertion_endpoint) it will respond with an error.

The error may be handled in code as shown:

```js
async function signIn() {
  try {
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
  } catch (e) {
    // Handle the error in some way, for example provide information
    // to help the user succeed in a future sign-in attempt
    console.error(e);
  }
}
```

## WebOTP API

The [WebOTP API](/en-US/docs/Web/API/WebOTP_API) lets a web client request an OTP from an SMS sent by the web app's server. This capability is intended to streamline usage of OTPs in web apps, for example when using phone numbers as additional factors in sign-in flows. The OTP is retrieved from the SMS and can be set as a verification input value automatically after the user gives consent, avoiding the need for the user to manually go into their SMS app and copy and paste it.

### `otp` object structure

`otp` will contain the following properties:

- `transport`
  - : An array of strings representing transport hints for how the OTP should ideally be transmitted. This will always contain a single hint — `"sms"`. Unknown values will be ignored.

### Return value

A {{jsxref("Promise")}} that resolves with an {{domxref("OTPCredential")}} object instance.

### Exceptions

- `AbortError` {{domxref("DOMException")}}
  - : The `get()` operation is associated with an {{domxref("AbortSignal")}} (i.e., set in the `signal` property) that has already been aborted.
- `NotAllowedError` {{domxref("DOMException")}}
  - : The calling origin is an [opaque origin](/en-US/docs/Web/HTTP/Headers/Origin#null).
- `SecurityError` {{domxref("DOMException")}}
  - : Either the usage is blocked by a {{HTTPHeader("Permissions-Policy/otp-credentials","otp-credentials")}} [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy) or the calling domain is not a valid domain.

### Examples

The below code triggers the browser's permission flow when an SMS message arrives. If permission is granted, then the promise resolves with an `OTPCredential` object. The contained `code` value is then set as the value of an {{htmlelement("input")}} form element, which is then submitted.

```js
navigator.credentials
  .get({
    otp: { transport: ["sms"] },
    signal: ac.signal,
  })
  .then((otp) => {
    input.value = otp.code;
    if (form) form.submit();
  })
  .catch((err) => {
    console.error(err);
  });
```

> **Note:** For a full explanation of the code, see the {{domxref('WebOTP API','','',' ')}} landing page. You can also [see this code as part of a full working demo](https://web-otp.glitch.me/).

## Web Authentication API

The [Web Authentication API](/en-US/docs/Web/API/Web_Authentication_API) enables strong authentication with public key cryptography, enabling passwordless authentication and/or secure multi-authentication (MFA) without SMS texts. Check out the linked API landing page for more usage information.

> **Note:** Usage of `get()` with the `publicKey` parameter may be blocked by a {{HTTPHeader("Permissions-Policy/publickey-credentials-get","publickey-credentials-get")}} [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy) set on your server.

### `publicKey` object structure

`publicKey` can contain the following properties:

- `allowCredentials` {{optional_inline}}

  - : An array of objects defining a restricted list of the acceptable credentials for retrieval. Each object will contain the following properties:

    - `id`

      - : An {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}}, or {{jsxref("DataView")}} representing the ID of the public key credential to retrieve. This value is mirrored by the {{domxref("PublicKeyCredential.rawId", "rawId")}} property of the {{domxref("PublicKeyCredential")}} object returned by a successful `get()` call.

    - `transports`

      - : An array of strings providing hints as to the methods the client could use to communicate with the relevant authenticator of the public key credential to retrieve. Possible transports are: `"ble"`, `"hybrid"`, `"internal"`, `"nfc"`, and `"usb"`.

        > **Note:** This value is mirrored by the return value of the {{domxref("AuthenticatorAttestationResponse.getTransports", "PublicKeyCredential.response.getTransports()")}} method of the {{domxref("PublicKeyCredential")}} object returned by the `create()` call that originally created the credential.
        > At that point, it should be stored by the app for later use.

    - `type`
      - : A string defining the type of the public key credential to retrieve. This can currently take a single value, `"public-key"`, but more values may be added in the future. This value is mirrored by the {{domxref("Credential.type", "type")}} property of the {{domxref("PublicKeyCredential")}} object returned by a successful `get()` call.

    If `allowCredentials` is omitted, it will default to an empty array, meaning that any credential is potentially acceptable for retrieval without the relying party first providing an ID.

- `attestation` {{optional_inline}}

  - : A string specifying the relying party's preference for how the attestation statement (i.e., provision of verifiable evidence of the authenticity of the authenticator and its data) is conveyed during authentication. The value can be one of the following:

    - `"none"`

      - : Specifies that the relying party is not interested in authenticator attestation. This might be to avoid additional user consent for round trips to the relying party server to relay identifying information, or round trips to an attestation certificate authority (CA), with the aim of making the authentication process smoother. If `"none"` is chosen as the `attestation` value, and the authenticator signals that it uses a CA to generate its attestation statement, the client app will replace it with a "None" attestation statement, indicating that no attestation statement is available.

    - `"direct"`

      - : Specifies that the relying party wants to receive the attestation statement as generated by the authenticator.

    - `"enterprise"`

      - : Specifies that the relying party wants to receive an attestation statement that may include uniquely identifying information. This is intended for controlled deployments within an enterprise where the organization wishes to tie registrations to specific authenticators.

    - `"indirect"`
      - : Specifies that the relying party wants to receive a verifiable attestation statement, but it will allow the client to decide how to receive it. For example, the client could choose to replace the authenticator's assertion statement with one generated by an anonymization CA to protect user privacy.

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

    - `"required"`
      - : The relying party requires user verification, and the operation will fail if it does not occur.
    - `"preferred"`
      - : The relying party prefers user verification if possible, but the operation will not fail if it does not occur.
    - `"discouraged"`
      - : The relying party does not want user verification, in the interests of making user interaction as smooth as possible.

    If `userVerification` is omitted, it will default to `"preferred"`.

- `hints` {{optional_inline}}

  - : An array of strings providing hints as to what authentication UI the user-agent should provide for the user.

    The values can be any of the following:

    - `"security-key"`
      - : Authentication requires a separate dedicated physical device to provide the key.
    - `"client-device"`
      - : The user authenticates using their own device, such as a phone.
    - `"hybrid"`
      - : Authentication relies on a combination of authorization/authentication methods, potentially relying on both user and server-based mechanisms.

### Return value

A {{jsxref("Promise")}} that resolves with an {{domxref("PublicKeyCredential")}} instance matching the provided parameters. If a single credential cannot be unambiguously obtained, the Promise will resolve to `null`.

### Exceptions

- `NotAllowedError` {{domxref("DOMException")}}
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
  const signature = response.signature;

  // Access userHandle ArrayBuffer
  const userHandle = response.userHandle;
});
```

Some of this data will need to be stored on the server — for example the `signature` to provide proof that authenticator possesses the genuine private key used to create the credential, and the `userHandle` to link the user with the credential, sign in attempt, and other data.

> **Note:** See [Authenticating a user](/en-US/docs/Web/API/Web_Authentication_API#authenticating_a_user) for more information about how the overall flow works.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

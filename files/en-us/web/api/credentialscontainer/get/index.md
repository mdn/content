---
title: "CredentialsContainer: get() method"
short-title: get()
slug: Web/API/CredentialsContainer/get
page-type: web-api-instance-method
browser-compat: api.CredentialsContainer.get
---

{{APIRef("Credential Management API")}}{{SecureContext_Header}}

The **`get()`** method of the {{domxref("CredentialsContainer")}} interface returns a {{jsxref("Promise")}} that fulfills with a single {{glossary("credential")}}, which can then be used to authenticate a user to a website.

The method accepts a single optional `options` argument, which may include:

- A `mediation` property indicating how and whether the user should be asked to participate in the operation.
  This controls, for example, whether the site can silently sign a user in using a stored credential.
- A `signal` property enabling the operation to be cancelled using an {{domxref("AbortController")}}.
- One or more properties — `password`, `federated`, `identity`, `otp`, `publicKey` — which indicate the [types of credential](/en-US/docs/Web/API/Credential_Management_API/Credential_types) being requested. If set, the values of these properties include any parameters that the browser needs in order to find an appropriate credential of the requested type.

The API always fulfills with a single credential or `null`. If multiple credentials are available and user mediation is allowed, then the browser will ask the user to select a single credential.

## Syntax

```js-nolint
get()
get(options)
```

### Parameters

- `options` {{optional_inline}}

  - : An object that contains options for the request. It can contain the following properties:

    - `mediation` {{optional_inline}}

      - : A string indicating whether the user will be required to login for every visit to a client app. The value can be one of the following:

        - `"conditional"`

          - : Discovered credentials are presented to the user in a non-modal dialog box along with an indication of the origin requesting credentials. In practice, this means autofilling available credentials; see [Sign in with a passkey through form autofill](https://web.dev/articles/passkey-form-autofill) for more details of how this is used; {{domxref("PublicKeyCredential.isConditionalMediationAvailable_static", "PublicKeyCredential.isConditionalMediationAvailable()")}} also provides some useful information.

        - `"optional"`

          - : If credentials can be handed over for a given operation without user mediation, they will be, enabling automatic reauthentication without user mediation. If user mediation is required, then the user agent will ask the user to authenticate. This value is intended for situations where you have reasonable confidence that a user won't be surprised or confused at seeing a login dialog box — for example on a site that doesn't automatically log users in, when a user has just clicked a "Login/Signup" button.

        - `"required"`

          - : The user will always be asked to authenticate, even if prevent silent access (see {{domxref("CredentialsContainer.preventSilentAccess()")}}) is set to `false`. This value is intended for situations where you want to force user authentication — for example if you want a user to reauthenticate when a sensitive operation is being performed (like confirming a credit card payment), or when switching users.

        - `"silent"`
          - : The user will not be asked to authenticate. The user agent will automatically reauthenticate the user and log them in if possible. If consent is required, the promise will fulfill with `null`. This value is intended for situations where you would want to automatically sign a user in upon visiting a web app if possible, but if not, you don't want to present them with a confusing login dialog box. Instead, you'd want to wait for them to explicitly click a "Login/Signup" button.

        The default value is `"optional"`.

        > [!NOTE]
        > In the case of a [federated authentication (FedCM API)](/en-US/docs/Web/API/FedCM_API) request, a `mediation` value of `optional` or `silent` may result in attempted [auto-reauthentication](/en-US/docs/Web/API/FedCM_API/RP_sign-in#auto-reauthentication). Whether this occurred is communicated to the identity provider (IdP) via the [`is_auto_selected`](/en-US/docs/Web/API/FedCM_API/IDP_integration#is_auto_selected) parameter sent to the IdP's `id_assertion_endpoint` during validation and the relying party (RP) via the {{domxref("IdentityCredential.isAutoSelected")}} property. This is useful for performance evaluation, security requirements (the IdP may wish to reject automatic reauthentication requests and always require user mediation), and general UX (an IdP or RP may wish to present different UX for auto and non-auto login experiences).

    - `signal` {{optional_inline}}

      - : An {{domxref("AbortSignal")}} object instance that allows an ongoing `get()` operation to be aborted. An aborted operation may complete normally (generally if the abort was received after the operation finished) or reject with an `AbortError` {{domxref("DOMException")}}.

    - `password` {{optional_inline}}
      - : This option asks the browser to retrieve a stored [password](/en-US/docs/Web/API/Credential_Management_API/Credential_types#passwords) as a {{domxref("PasswordCredential")}} object. It is a boolean value.
    - `identity` {{optional_inline}}

      - : This option asks the browser to retrieve a [federated identity credential](/en-US/docs/Web/API/Credential_Management_API/Credential_types#federated_identity_credentials) as an {{domxref("IdentityCredential")}} object, using the [Federated Credential Management API](/en-US/docs/Web/API/FedCM_API).

        This option's value is an {{domxref("IdentityCredentialRequestOptions")}} object containing details of the specific identity providers that the website wants to use.

    - `federated` {{optional_inline}}

      - : This option asks the browser to retrieve a [federated identity credential](/en-US/docs/Web/API/Credential_Management_API/Credential_types#federated_identity_credentials) as a {{domxref("FederatedCredential")}} object. This interface is now superseded, and developers should prefer to use the `identity` option, if it is available.

        This option's value is an object with the following properties:

        - `protocols`
          - : An array of strings representing the protocols of the requested credentials' federated identity providers (for example, `"openidconnect"`).
        - `providers`
          - : An array of strings representing the credentials' federated identity providers (for example `"https://www.facebook.com"` or `"https://accounts.google.com"`).

    - `otp` {{optional_inline}}

      - : This option asks the browser to retrieve a [one-time password (OTP)](/en-US/docs/Web/API/Credential_Management_API/Credential_types#one-time_passwords) as an {{domxref("OTPCredential")}} object.

        This option's value is an array of strings which may only contain the string value `"sms"`.

    - `publicKey` {{optional_inline}}

      - : This option asks the browser to retrieve an [assertion signed using the Web Authentication API](/en-US/docs/Web/API/Credential_Management_API/Credential_types#web_authentication_assertions) as a {{domxref("PublicKeyCredential")}}.

        This option's value is a {{domxref("PublicKeyCredentialRequestOptions")}} object.

### Return value

A {{jsxref("Promise")}} that resolves with one of the following subclasses of {{domxref("Credential")}}:

- {{domxref("PasswordCredential")}}
- {{domxref("IdentityCredential")}}
- {{domxref("FederatedCredential")}}
- {{domxref("OTPCredential")}}
- {{domxref("PublicKeyCredential")}}

If [conditional mediation](#mediation) was specified in the `get()` call, the browser UI dialog is shown and the promise remains pending until the user picks an account to sign-in with from available autofill suggestions:

- If the user then makes a gesture outside of the browser UI dialog, it closes without resolving or rejecting the promise and without causing a user-visible error condition.
- If the user selects a credential, the relevant {{domxref("PublicKeyCredential")}} is returned to the caller.

If a single credential cannot be unambiguously obtained, the promise resolves with `null`.

### Exceptions

- `AbortError` {{domxref("DOMException")}}

  - : The request was aborted by a call to the {{domxref("AbortController.abort", "abort()")}} method of the {{domxref("AbortController")}} associated with this method's [`signal`](#signal) option.

- `IdentityCredentialError` {{domxref("DOMException")}}

  - : When requesting an {{domxref("IdentityCredential")}}, the request to the [ID assertion endpoint](/en-US/docs/Web/API/FedCM_API/IDP_integration#the_id_assertion_endpoint) is unable to validate the authentication, and rejects with an error response containing information about the reason.

- `NetworkError` {{domxref("DOMException")}}

  - : When requesting an {{domxref("IdentityCredential")}}, the {{glossary("identity provider")}} (IdP) did not respond within 60 seconds, the provided credentials were not valid/found, or the browser's login status for the IdP is set to `"logged-out"` (see [Update login status using the Login Status API](/en-US/docs/Web/API/FedCM_API/IDP_integration#update_login_status_using_the_login_status_api) for more information about FedCM login status). In the latter case, there may be some delay in the rejection to avoid leaking the IdP login status to the RP.

- `NotAllowedError` {{domxref("DOMException")}}

  - : Thrown in one of the following situations:

    - Use of this API was blocked by one of the following [permissions policies](/en-US/docs/Web/HTTP/Permissions_Policy):

      - {{HTTPHeader("Permissions-Policy/identity-credentials-get","identity-credentials-get")}}
      - {{HTTPHeader("Permissions-Policy/publickey-credentials-get","publickey-credentials-get")}}
      - {{HTTPHeader("Permissions-Policy/otp-credentials","otp-credentials")}}

    - The calling origin is an [opaque origin](/en-US/docs/Web/HTTP/Headers/Origin#null).

- `SecurityError` {{domxref("DOMException")}}

  - : The calling domain is not a valid domain.

## Examples

### Retrieving a federated identity credential

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

If the IdP is unable to validate a request to the [ID assertion endpoint](/en-US/docs/Web/API/FedCM_API/IDP_integration#the_id_assertion_endpoint) it will reject the promise returned from `CredentialsContainer.get()`:

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

### Retrieving a public key credential

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

See [Authenticating a user](/en-US/docs/Web/API/Web_Authentication_API#authenticating_a_user) for more information about how the overall flow works.

### Retrieving a one-time password

The code below triggers the browser's permission flow when an SMS message arrives. If permission is granted, then the promise resolves with an `OTPCredential` object. The contained `code` value is then set as the value of an {{htmlelement("input")}} form element, which is then submitted.

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

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

---
title: Web Authentication API
slug: Web/API/Web_Authentication_API
page-type: web-api-overview
browser-compat: api.PublicKeyCredential
---

{{securecontext_header}}{{DefaultAPISidebar("Web Authentication API")}}

The Web Authentication API (WebAuthn) is an extension of the [Credential Management API](/en-US/docs/Web/API/Credential_Management_API) that enables strong authentication with public key cryptography, enabling passwordless authentication and secure multi-factor authentication (MFA) without SMS texts.

## WebAuthn concepts and usage

WebAuthn uses [asymmetric (public-key) cryptography](https://en.wikipedia.org/wiki/Public-key_cryptography) instead of passwords or SMS texts for registering, authenticating, and [multi-factor authentication](https://en.wikipedia.org/wiki/Multi-factor_authentication) with websites. This has some benefits:

- **Protection against phishing:** An attacker who creates a fake login website can't login as the user because the signature changes with the [origin](/en-US/docs/Glossary/Origin) of the website.
- **Reduced impact of data breaches:** Developers don't need to hash the public key, and if an attacker gets access to the public key used to verify the authentication, it can't authenticate because it needs the private key.
- **Invulnerable to password attacks:** Some users might reuse passwords, and an attacker may obtain the user's password for another website (e.g. via a data breach). Also, text passwords are much easier to brute-force than a digital signature.

Many websites already have pages that allow users to register new accounts or log into an existing account, and WebAuthn acts as a replacement or enhancement for the authentication part of the system. It extends the [Credential Management API](/en-US/docs/Web/API/Credential_Management_API), abstracting communication between the user agent and an authenticator and providing the following new functionality:

- When {{domxref("CredentialsContainer.create()", "navigator.credentials.create()")}} is used with the `publicKey` option, the user agent creates new credentials via an authenticator — either for registering a new account or for associating a new asymmetric key pair with an existing account.
  - When registering a new account, these credentials are stored on a server (also referred to as a service or a [relying party](https://en.wikipedia.org/wiki/Relying_party)) and can be subsequently used to log a user in.
  - The asymmetric key pair is stored in the authenticator, which can then be used to authenticate a user with a relying party for example during MFA. The authenticator may be embedded into the user agent, into an operating system, such as Windows Hello, or it may be a physical token, such as a USB or Bluetooth Security Key.
- When {{domxref("CredentialsContainer.get()", "navigator.credentials.get()")}} is used with the `publicKey` option, the user agent uses an existing set of credentials to authenticate to a relying party (either as the primary login or to provide an additional factor during MFA as described above).

In their most basic forms, both `create()` and `get()` receive a very large random number called the "challenge" from the server and return the challenge signed by the private key back to the server. This proves to the server that a user has the private key required for authentication without revealing any secrets over the network.

> [!NOTE]
> The "challenge" must be a buffer of random information at least 16 bytes in size.

### Creating a key pair and registering a user

To illustrate how the credential creation process works, let's describe the typical flow that occurs when a user wants to register a credential to a relying party:

1. The relying party server sends user and relying party information to the web app handling the registration process, along with the "challenge", using an appropriate secure mechanism (for example [Fetch](/en-US/docs/Web/API/Fetch_API) or [XMLHttpRequest](/en-US/docs/Web/API/XMLHttpRequest)).

   > [!NOTE]
   > The format for sharing information between the relying party server and the web app is up to the application.
   > A recommended approach is to exchange {{glossary("JSON type representation")}} objects for credentials and credential options.
   > Convenience methods have been created in `PublicKeyCredential` for converting from the JSON representations to the form required by the authentication APIs: {{domxref("PublicKeyCredential.parseCreationOptionsFromJSON_static", "parseCreationOptionsFromJSON()")}}, {{domxref("PublicKeyCredential.parseRequestOptionsFromJSON_static", "parseRequestOptionsFromJSON()")}} and {{domxref("PublicKeyCredential.toJSON()")}}.

2. The web app initiates generation of a new credential via the authenticator, on behalf of the relying party, via a {{domxref("CredentialsContainer.create()", "navigator.credentials.create()")}} call. This call is passed a `publicKey` option specifying device capabilities, e.g., whether the device provides its own user authentication (for example with biometrics).

   A typical `create()` call might look like so:

   ```js
   let credential = await navigator.credentials.create({
     publicKey: {
       challenge: new Uint8Array([117, 61, 252, 231, 191, 241, ...]),
       rp: { id: "acme.com", name: "ACME Corporation" },
       user: {
         id: new Uint8Array([79, 252, 83, 72, 214, 7, 89, 26]),
         name: "jamiedoe",
         displayName: "Jamie Doe"
       },
       pubKeyCredParams: [ {type: "public-key", alg: -7} ]
     }
   });
   ```

   The parameters of the `create()` call are passed to the authenticator, along with a SHA-256 hash that is signed to ensure that it isn't tampered with.

3. After the authenticator obtains user consent, it generates a key pair and returns the public key and optional signed attestation to the web app. This is provided when the {{jsxref("Promise")}} returned by the `create()` call fulfills, in the form of a {{domxref("PublicKeyCredential")}} object instance (the {{domxref("PublicKeyCredential.response")}} property contains the attestation information).

4. The web app forwards the {{domxref("PublicKeyCredential")}} to the relying party server, again using an appropriate mechanism.

5. The relying party server stores the public key, coupled with the user identity, to remember the credential for future authentications. During this process, it performs a series of checks to ensure that the registration was complete and not tampered with. These include:

   1. Verifying that the challenge is the same as the challenge that was sent.
   2. Ensuring that the origin was the origin expected.
   3. Validating that the signature and attestation are using the correct certificate chain for the specific model of the authenticator used to generate the key pair in the first place.

> [!WARNING]
> Attestation provides a way for a relying party to determine the provenance of an authenticator. Relying parties should not attempt to maintain allowlists of authenticators.

### Authenticating a user

After a user has registered with WebAuthn, they can authenticate (login) with the service. The authentication flow looks similar to the registration flow, the main differences being that authentication:

1. Doesn't require user or relying party information
2. Creates an assertion using the previously-generated key pair for the service, rather than the authenticator's key pair.

A typical authentication flow is as follows:

1. The relying party generates a "challenge" and sends it to the user agent using an appropriate secure mechanism, along with a list of relying party and user credentials. It can also indicate where to look for the credential, e.g., on a local built-in authenticator, or on an external one over USB, BLE, etc.

2. The browser asks the authenticator to sign the challenge via a {{domxref("CredentialsContainer.get()", "navigator.credentials.get()")}} call, which is passed the credentials in a `publicKey` option.

   A typical `get()` call might look like so:

   ```js
   let credential = await navigator.credentials.get({
     publicKey: {
       challenge: new Uint8Array([139, 66, 181, 87, 7, 203, ...]),
       rpId: "acme.com",
       allowCredentials: [{
         type: "public-key",
         id: new Uint8Array([64, 66, 25, 78, 168, 226, 174, ...])
       }],
       userVerification: "required",
     }
   });
   ```

   The parameters of the `get()` call are passed to the authenticator to handle the authentication.

3. If the authenticator contains one of the given credentials and is able to successfully sign the challenge, it returns a signed assertion to the web app after receiving user consent. This is provided when the {{jsxref("Promise")}} returned by the `get()` call fulfills, in the form of a {{domxref("PublicKeyCredential")}} object instance (the {{domxref("PublicKeyCredential.response")}} property contains the assertion information).

4. The web app forwards the signed assertion to the relying party server for the relying party to validate. The validation checks include:

   1. Using the public key that was stored during the registration request to validate the signature by the authenticator.
   2. Ensuring that the challenge that was signed by the authenticator matches the challenge that was generated by the server.
   3. Checking that the Relying Party ID is the one expected for this service.

5. Once verified by the server, the authentication flow is considered successful.

### Discoverable credentials and conditional mediation

**Discoverable credentials** are retrieved from an authenticator — _discovered_ by the browser — to offer as login options when the user is logging in to a relying party web app. In contrast, non-discoverable credentials are provided by the relying party server for the browser to offer as login options.

Discoverable credential IDs and associated metadata such as [user names](/en-US/docs/Web/API/PublicKeyCredentialCreationOptions#name_2) and [display names](/en-US/docs/Web/API/PublicKeyCredentialCreationOptions#displayname) are stored in a client-side authenticator such as a browser password manager, authenticator app, or hardware solution such as a YubiKey. Having this information available in the authenticator means that the user can log in conveniently without having to supply credentials, and the relying party does not have to provide a [`credentialId`](/en-US/docs/Web/API/PublicKeyCredentialRequestOptions#id) when asserting it (although it can do if desired; if the credential is asserted by the RP then the non-discoverable workflow is followed).

A discoverable credential is created via a [`create()`](/en-US/docs/Web/API/CredentialsContainer/create) call with a specified [`residentKey`](/en-US/docs/Web/API/PublicKeyCredentialCreationOptions#residentkey). The `credentialId`, user metadata, and public key for the new credential is stored by the authenticator as discussed above, but also returned to the web app and stored on the RP server.

In order to authenticate, the RP server calls [`get()`](/en-US/docs/Web/API/CredentialsContainer/get) with **conditional mediation** specified, that is [`mediation`](/en-US/docs/Web/API/CredentialsContainer/get#mediation) set to `conditional`, an empty [`allowCredentials`](/en-US/docs/Web/API/PublicKeyCredentialRequestOptions#allowcredentials) list (meaning only discoverable credentials can be shown), and a challenge.

Conditional mediation results in discoverable credentials found in the authenticator being presented to the user in a non-modal UI along with an indication of the origin requesting credentials, rather than a modal dialog. In practice, this means autofilling available credentials in your login forms. The metadata stored in discoverable credentials can be displayed to help users choose a credential when logging in. To display discoverable credentials in your login forms, you also need to include [`autocomplete="webauthn"`](/en-US/docs/Web/HTML/Attributes/autocomplete#webauthn) on your form fields.

To reiterate, the relying party doesn't tell the authenticator what credentials to offer to the user — instead, the authenticator supplies the list it has available. Once the user selects a credential, the authenticator uses it to sign the challenge with the associated private key, and the browser returns the signed challenge and its `credentialId` to the RP server.

The subsequent authentication process on the RP server is the same as for non-discoverable credentials.

> [!NOTE]
> You can check whether conditional mediation is available on a specific user agent by calling the {{domxref("PublicKeyCredential.isConditionalMediationAvailable()")}} method.

[Passkeys](https://passkeys.dev/) are a significant use case for discoverable credentials; see [Create a passkey for passwordless logins](https://web.dev/articles/passkey-registration) and [Sign in with a passkey through form autofill](https://web.dev/articles/passkey-form-autofill) for implementation details. See also [Discoverable credentials deep dive](https://web.dev/articles/webauthn-discoverable-credentials) for more general information on discoverable credentials.

When conditional mediation is used for authentication, the prevent silent access flag (see {{domxref("CredentialsContainer.preventSilentAccess()")}}) is treated as being `true` regardless of its actual value: the conditional behavior always involves user mediation of some sort if applicable credentials are discovered.

> [!NOTE]
> If no credentials are discovered, the non-modal dialog will not be visible, and the user agent can prompt the user to take action in a way that depends on the type of credential (for example, to insert a device containing credentials).

#### Discoverable credential synchronization methods

It is possible for the information stored in a user's authenticator about a discoverable credential to go out sync with the relying party's server. This might happen when the user deletes a credential or modifies their user/display name on the RP web app without updating the authenticator.

The API provides methods to allow the relying party server to signal changes to the authenticator, so it can update its stored credentials:

- {{domxref("PublicKeyCredential.signalAllAcceptedCredentials_static", "PublicKeyCredential.signalAllAcceptedCredentials()")}}: Signals to the authenticator all of the valid credential IDs that the RP server still holds for a particular user.
- {{domxref("PublicKeyCredential.signalCurrentUserDetails_static", "PublicKeyCredential.signalCurrentUserDetails()")}}: Signals to the authenticator that a particular user has updated their user name and/or display name on the RP server.
- {{domxref("PublicKeyCredential.signalUnknownCredential_static", "PublicKeyCredential.signalUnknownCredential()")}}: Signals to the authenticator that a credential ID was not recognized by the RP server.

It may seem like `signalUnknownCredential()` and `signalAllAcceptedCredentials()` have similar purposes, so what situation should each one be used in?

- `signalAllAcceptedCredentials()` should be called after every successful sign-in, and when the user is logged in and you want to update the state of their credentials. It must only be called when a user is authenticated, as it shares the entire list of `credentialId`s for a given user. This would cause a privacy leak if the user is not authenticated.
- `signalUnknownCredential()` should be called after an unsuccessful login, to signal to the authenticator that the `credentialId` of the selected credential cannot be validated, and should be removed. The method can safely be called when the user is not authenticated as it passes a single `credentialId` to the authenticator — the one the client just tried to authenticate with — and no user information.

### Customizing workflows based on client capabilities

The signup and login workflows can be customized based on the capabilities of the WebAuthn client (browser). The {{domxref("PublicKeyCredential.getClientCapabilities_static", "PublicKeyCredential.getClientCapabilities()")}} static method can be used to query those capabilities; it returns an object where each key refers to a WebAuthn capability or extension, and each value is a boolean indicating support for that feature.

This can be used, for example, to check:

- Client support for various authenticators such as passkeys or biometric user verification.
- Whether the client [supports methods to keep relying party and authenticator credentials in sync](/en-US/docs/Web/API/Web_Authentication_API#discoverable_credential_synchronization_methods).
- Whether the client allows a single passkey to be used on different websites with the same origin.

The code below shows how you might use `getClientCapabilities()` to check if the client supports authenticators that offer biometric user verification.
Note that the actual actions performed depend on your site.
For sites that _require_ biometric authentication, you might replace the login UI with a message indicating that biometric authentication is needed, and the user should try a different browser or device.

```js
async function checkIsUserVerifyingPlatformAuthenticatorAvailable() {
  const capabilities = await PublicKeyCredential.getClientCapabilities();
  // Check the capability: userVerifyingPlatformAuthenticator
  if (capabilities.userVerifyingPlatformAuthenticator) {
    // Perform actions if biometric support is available
  } else {
    // Perform actions if biometric support is not available.
  }
}
```

## Controlling access to the API

The availability of WebAuthn can be controlled using a [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy), specifying two directives in particular:

- {{httpheader("Permissions-Policy/publickey-credentials-create", "publickey-credentials-create")}}: Controls the availability of {{domxref("CredentialsContainer.create", "navigator.credentials.create()")}} with the `publicKey` option.
- {{httpheader("Permissions-Policy/publickey-credentials-get", "publickey-credentials-get")}}: Controls the availability of {{domxref("CredentialsContainer.get", "navigator.credentials.get()")}} with the `publicKey` option.

Both directives have a default allowlist value of `"self"`, meaning that by default these methods can be used in top-level document contexts.
In addition, `get()` can be used in nested browsing contexts loaded from the same origin as the top-most document.
`get()` and `create()` can be used in nested browsing contexts loaded from the different origins to the top-most document (i.e. in cross-origin `<iframes>`), if allowed by the [`publickey-credentials-get`](/en-US/docs/Web/HTTP/Headers/Permissions-Policy/publickey-credentials-get) and [`publickey-credentials-create`](/en-US/docs/Web/HTTP/Headers/Permissions-Policy/publickey-credentials-create) `Permission-Policy` directives, respectively.
For cross-origin `create()` calls, where the permission was granted by [`allow=` on an iframe](/en-US/docs/Web/HTTP/Headers/Permissions-Policy#iframes), the frame must also have {{glossary("Transient activation")}}.

> [!NOTE]
> Where a policy forbids use of these methods, the {{jsxref("Promise", "promises", "", 1)}} returned by them will reject with a `NotAllowedError` {{domxref("DOMException")}}.

### Basic access control

If you wish to allow access to a specific subdomain only, you could provide it like this:

```http
Permissions-Policy: publickey-credentials-get=("https://subdomain.example.com")
Permissions-Policy: publickey-credentials-create=("https://subdomain.example.com")
```

### Allowing embedded `create` and `get()` calls in an `<iframe>`

If you wish to authenticate with `get()` or `create()` in an `<iframe>`, there are a couple of steps to follow:

1. The site embedding the relying party site must provide permission via an `allow` attribute:

   - If using `get()`:

     ```html
     <iframe
       src="https://auth.provider.com"
       allow="publickey-credentials-get *">
     </iframe>
     ```

   - If using `create()`:

     ```html
     <iframe
       src="https://auth.provider.com"
       allow="publickey-credentials-create 'self' https://a.auth.provider.com https://b.auth.provider.com">
     </iframe>
     ```

     The `<iframe>` must also have {{glossary("Transient activation")}} if `create()` is called cross-origin.

2. The relying party site must provide permission for the above access via a `Permissions-Policy` header:

   ```http
   Permissions-Policy: publickey-credentials-get=*
   Permissions-Policy: publickey-credentials-create=*
   ```

   Or to allow only a specific URL to embed the relying party site in an `<iframe>`:

   ```http
   Permissions-Policy: publickey-credentials-get=("https://subdomain.example.com")
   Permissions-Policy: publickey-credentials-create=("https://*.auth.provider.com")
   ```

## Interfaces

- {{domxref("AuthenticatorAssertionResponse")}}
  - : Provides proof to a service that an authenticator has the necessary key pair to successfully handle an authentication request initiated by a {{domxref("CredentialsContainer.get()")}} call. Available in the {{domxref("PublicKeyCredential.response", "response")}} property of the {{domxref("PublicKeyCredential")}} instance obtained when the `get()` {{jsxref("Promise")}} fulfills.
- {{domxref("AuthenticatorAttestationResponse")}}
  - : The result of a WebAuthn credential registration (i.e., a {{domxref("CredentialsContainer.create()")}} call). It contains information about the credential that the server needs to perform WebAuthn assertions, such as its credential ID and public key. Available in the {{domxref("PublicKeyCredential.response", "response")}} property of the {{domxref("PublicKeyCredential")}} instance obtained when the `create()` {{jsxref("Promise")}} fulfills.
- {{domxref("AuthenticatorResponse")}}
  - : The base interface for {{domxref("AuthenticatorAttestationResponse")}} and {{domxref("AuthenticatorAssertionResponse")}}.
- {{domxref("PublicKeyCredential")}}
  - : Provides information about a public key / private key pair, which is a credential for logging into a service using an un-phishable and data-breach resistant asymmetric key pair instead of a password. Obtained when the {{jsxref("Promise")}} returned via a {{domxref("CredentialsContainer.create", "create()")}} or {{domxref("CredentialsContainer.get", "get()")}} call fulfills.

## Extensions to other interfaces

- {{domxref("CredentialsContainer.create()")}}, the `publicKey` option
  - : Calling `create()` with a `publicKey` option initiates the creation of new asymmetric key credentials via an authenticator, as explained above.
- {{domxref("CredentialsContainer.get()")}}, the `publicKey` option
  - : Calling `get()` with a `publicKey` option instructs the user agent uses an existing set of credentials to authenticate to a relying party.

## Examples

### Demo sites

- [Mozilla Demo](https://webauthn.bin.coffee/) website and its [source code](https://github.com/jcjones/webauthn.bin.coffee).
- [Google Demo](https://try-webauthn.appspot.com/) website and its [source code](https://github.com/google/webauthndemo).
- [WebAuthn.io demo](https://webauthn.io/) website and its [source code](https://github.com/duo-labs/webauthn.io).
- [github.com/webauthn-open-source](https://github.com/webauthn-open-source) and its [client source code](https://github.com/webauthn-open-source/webauthn-simple-app) and [server source code](https://github.com/webauthn-open-source/fido2-lib)

### Usage example

> [!NOTE]
> For security reasons, the Web Authentication API calls ({{domxref("CredentialsContainer.create", "create()")}} and {{domxref("CredentialsContainer.get","get()")}}) are canceled if the browser window loses focus while the call is pending.

```js
// sample arguments for registration
const createCredentialDefaultArgs = {
  publicKey: {
    // Relying Party (a.k.a. - Service):
    rp: {
      name: "Acme",
    },
    // User:
    user: {
      id: new Uint8Array(16),
      name: "carina.p.anand@example.com",
      displayName: "Carina P. Anand",
    },
    pubKeyCredParams: [
      {
        type: "public-key",
        alg: -7,
      },
    ],
    attestation: "direct",
    timeout: 60000,
    challenge: new Uint8Array([
      // must be a cryptographically random number sent from a server
      0x8c, 0x0a, 0x26, 0xff, 0x22, 0x91, 0xc1, 0xe9, 0xb9, 0x4e, 0x2e, 0x17,
      0x1a, 0x98, 0x6a, 0x73, 0x71, 0x9d, 0x43, 0x48, 0xd5, 0xa7, 0x6a, 0x15,
      0x7e, 0x38, 0x94, 0x52, 0x77, 0x97, 0x0f, 0xef,
    ]).buffer,
  },
};

// sample arguments for login
const getCredentialDefaultArgs = {
  publicKey: {
    timeout: 60000,
    // allowCredentials: [newCredential] // see below
    challenge: new Uint8Array([
      // must be a cryptographically random number sent from a server
      0x79, 0x50, 0x68, 0x71, 0xda, 0xee, 0xee, 0xb9, 0x94, 0xc3, 0xc2, 0x15,
      0x67, 0x65, 0x26, 0x22, 0xe3, 0xf3, 0xab, 0x3b, 0x78, 0x2e, 0xd5, 0x6f,
      0x81, 0x26, 0xe2, 0xa6, 0x01, 0x7d, 0x74, 0x50,
    ]).buffer,
  },
};

// register / create a new credential
navigator.credentials
  .create(createCredentialDefaultArgs)
  .then((cred) => {
    console.log("NEW CREDENTIAL", cred);
    // normally the credential IDs available for an account would come from a server
    // but we can just copy them from above…
    const idList = [
      {
        id: cred.rawId,
        transports: ["usb", "nfc", "ble"],
        type: "public-key",
      },
    ];
    getCredentialDefaultArgs.publicKey.allowCredentials = idList;
    return navigator.credentials.get(getCredentialDefaultArgs);
  })
  .then((assertion) => {
    console.log("ASSERTION", assertion);
  })
  .catch((err) => {
    console.log("ERROR", err);
  });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

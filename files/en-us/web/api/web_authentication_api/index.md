---
title: Web Authentication API
slug: Web/API/Web_Authentication_API
page-type: web-api-overview
browser-compat: api.PublicKeyCredential
---

{{securecontext_header}}{{DefaultAPISidebar("Web Authentication API")}}

The Web Authentication API (WebAuthn) is an extension of the [Credential Management API](/en-US/docs/Web/API/Credential_Management_API) that enables strong authentication with public key cryptography, enabling passwordless authentication and secure multi-factor authentication (MFA) without SMS texts.

> **Note:** [Passkeys](https://passkeys.dev/) are a significant use case for web authentication; see [Create a passkey for passwordless logins](https://web.dev/passkey-registration/) and [Sign in with a passkey through form autofill](https://web.dev/passkey-form-autofill/) for implementation details. See also [Google Identity > Passwordless login with passkeys](https://developers.google.com/identity/passkeys).

## WebAuthn concepts and usage

WebAuthn uses [asymmetric (public-key) cryptography](https://en.wikipedia.org/wiki/Public-key_cryptography) instead of passwords or SMS texts for registering, authenticating, and [multi-factor authentication](https://en.wikipedia.org/wiki/Multi-factor_authentication) with websites. This has some benefits:

- **Protection against phishing:** An attacker who creates a fake login website can't login as the user because the signature changes with the [origin](/en-US/docs/Glossary/Origin) of the website.
- **Reduced impact of data breaches:** Developers don't need to hash the public key, and if an attacker gets access to the public key used to verify the authentication, it can't authenticate because it needs the private key.
- **Invulnerable to password attacks:** Some users might reuse passwords, and an attacker may obtain the user's password for another website (e.g. via a data breach). Also, text passwords are much easier to brute-force than a digital signature.

Many websites already have pages that allow users to register new accounts or sign into an existing account, and WebAuthn acts as a replacement or enhancement for the authentication part of the system. It extends the [Credential Management API](/en-US/docs/Web/API/Credential_Management_API), abstracting communication between the user agent and an authenticator and providing the following new functionality:

- When {{domxref("CredentialsContainer.create()", "navigator.credentials.create()")}} is used with the `publicKey` option, the user agent creates new credentials via an authenticator — either for registering a new account or for associating a new asymmetric key pair with an existing account.
  - When registering a new account, these credentials are stored on a server (also referred to as a service or a [relying party](https://en.wikipedia.org/wiki/Relying_party)) and can be subsequently used to log a user in.
  - The asymmetric key pair is stored in the authenticator, which can then be used to authenticate a user with a relying party for example during MFA. The authenticator may be embedded into the user agent, into an operating system, such as Windows Hello, or it may be a physical token, such as a USB or Bluetooth Security Key.
- When {{domxref("CredentialsContainer.get()", "navigator.credentials.get()")}} is used with the `publicKey` option, the user agent uses an existing set of credentials to authenticate to a relying party (either as the primary login or to provide an additional factor during MFA as described above).

In their most basic forms, both `create()` and `get()` receive a very large random number called the "challenge" from the server and return the challenge signed by the private key back to the server. This proves to the server that a user has the private key required for authentication without revealing any secrets over the network.

> **Note:** The "challenge" must be a buffer of random information at least 16 bytes in size.

### Creating a key pair and registering a user

To illustrate how the credential creation process works, let's describe the typical flow that occurs when a user wants to register a credential to a relying party:

1. The relying party server sends user and relying party information to the web app handling the registration process, along with the "challenge", using an appropriate secure mechanism (for example [XMLHttpRequest](/en-US/docs/Web/API/XMLHttpRequest) or [Fetch](/en-US/docs/Web/API/Fetch_API)).

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

4. The web app forwards the {{domxref("PublicKeyCredential")}} to the server, again using an appropriate mechanism.

5. The server stores the public key, coupled with the user identity, to remember the credential for future authentications. During this process, it performs a series of checks to ensure that the registration was complete and not tampered with. These include:

   1. Verifying that the challenge is the same as the challenge that was sent.
   2. Ensuring that the origin was the origin expected.
   3. Validating that the signature and attestation are using the correct certificate chain for the specific model of the authenticator used to generated the key par in the first place.

> **Warning:** Attestation provides a way for a relying party to determine the provenance of an authenticator. Relying parties should not attempt to maintain allowlists of authenticators.

### Authenticating a user

After a user has registered with WebAuthn, they can authenticate (i.e., login) with the service. The authentication flow looks similar to the registration flow, the main differences being that authentication:

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

## Controlling access to the API

The availability of WebAuthn can be controlled using a [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy), specifying two directives in particular:

- {{httpheader("Permissions-Policy/publickey-credentials-create", "publickey-credentials-create")}}: Controls the availability of {{domxref("CredentialsContainer.create", "navigator.credentials.create()")}} with the `publicKey` option.
- {{httpheader("Permissions-Policy/publickey-credentials-get", "publickey-credentials-get")}}: Controls the availability of {{domxref("CredentialsContainer.get", "navigator.credentials.get()")}} with the `publicKey` option.

Both directives have a default allowlist value of `"self"`, meaning that by default these methods can be used in top-level document contexts. In addition, `get()` can be used in nested browsing contexts loaded from the same origin as the top-most document; `create()` on the other hand cannot be used in {{htmlelement("iframe")}}s.

> **Note:** Where a policy forbids use of these methods, the {{jsxref("Promise", "promises")}} returned by them will reject with a `SecurityError` {{domxref("DOMException")}}.

### Basic access control

If you wish to allow access to a specific subdomain only, you could provide it like this:

```http
Permissions-Policy: publickey-credentials-get=("https://subdomain.example.com")
Permissions-Policy: publickey-credentials-create=("https://subdomain.example.com")
```

### Allowing embedded `get()` calls in an `<iframe>`

If you wish to authenticate with `get()` in an `<iframe>`, there are a couple of steps to follow:

1. The site embedding the relying party site must provide permission via an `allow` attribute:

   ```html
   <iframe
     src="https://auth.provider.com"
     allow="publickey-credentials-get *" />
   ```

2. The relying party site must provide permission for the above access via a `Permissions-Policy` header:

   ```http
   Permissions-Policy: publickey-credentials-get=*
   ```

   Or to allow only a specific URL to embed the relying party site in an `<iframe>`:

   ```http
   Permissions-Policy: publickey-credentials-get=("https://subdomain.example.com")
   ```

## Interfaces

- {{domxref("AuthenticatorAssertionResponse")}}
  - : Provides proof to a service that an authenticator has the necessary key pair to successfully handle an authentication request initiated by a {{domxref("CredentialsContainer.get()")}} call. Available in the {{domxref("PublicKeyCredential.response", "response")}} property of the {{domxref("PublicKeyCredential")}} instance obtained when the `get()` {{jsxref("Promise")}} fulfills.
- {{domxref("AuthenticatorAttestationResponse")}}
  - : The result of a WebAuthn credential registration (i.e., a {{domxref("CredentialsContainer.create()")}} call). It contains information about the credential that the server needs to perform WebAuthn assertions, such as its credential ID and public key. Available in the {{domxref("PublicKeyCredential.response", "response")}} property of the {{domxref("PublicKeyCredential")}} instance obtained when the `create()` {{jsxref("Promise")}} fulfills.
- {{domxref("AuthenticatorResponse")}}
  - : The base interface for {{domxref("AuthenticatorAttestationResponse")}} and {{domxref("AuthenticatorAssertionResponse")}}.
- {{domxref("PublicKeyCredential")}}
  - : Provides information about a public key / private key pair, which is a credential for logging in to a service using an un-phishable and data-breach resistant asymmetric key pair instead of a password. Obtained when the {{jsxref("Promise")}} returned via a {{domxref("CredentialsContainer.create", "create()")}} or {{domxref("CredentialsContainer.get", "get()")}} call fulfills.

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

> **Note:** For security reasons, the Web Authentication API calls ({{domxref("CredentialsContainer.create", "create()")}} and {{domxref("CredentialsContainer.get","get()")}}) are canceled if the browser window loses focus while the call is pending.

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
      0x8c, 0x0a, 0x26, 0xff, 0x22, 0x91, 0xc1, 0xe9, 0xb9, 0x4e, 0x2e, 0x17, 0x1a,
      0x98, 0x6a, 0x73, 0x71, 0x9d, 0x43, 0x48, 0xd5, 0xa7, 0x6a, 0x15, 0x7e, 0x38,
      0x94, 0x52, 0x77, 0x97, 0x0f, 0xef,
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
      0x79, 0x50, 0x68, 0x71, 0xda, 0xee, 0xee, 0xb9, 0x94, 0xc3, 0xc2, 0x15, 0x67,
      0x65, 0x26, 0x22, 0xe3, 0xf3, 0xab, 0x3b, 0x78, 0x2e, 0xd5, 0x6f, 0x81, 0x26,
      0xe2, 0xa6, 0x01, 0x7d, 0x74, 0x50,
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

---
title: "CredentialsContainer: create() method"
short-title: create()
slug: Web/API/CredentialsContainer/create
page-type: web-api-instance-method
browser-compat: api.CredentialsContainer.create
---

{{APIRef("Credential Management API")}}{{SecureContext_Header}}

The **`create()`** method of the {{domxref("CredentialsContainer")}} interface creates a new {{glossary("credential")}}, which can then be stored and later retrieved using the {{domxref("CredentialsContainer.get", "navigator.credentials.get()")}} method. The retrieved credential can then be used by a website to authenticate a user.

This method supports three different types of credential:

- A password credential, which enables a user to sign in using a password.
- A federated credential, which enables a user to sign in using a federated identity provider.
- A public key credential, which enables a user to sign in with an authenticator such as a biometric reader built into the platform or a removable hardware token.

Note that the [Federated Credential Management API (FedCM)](/en-US/docs/Web/API/FedCM_API) supersedes the federated credential type.

## Syntax

```js-nolint
create()
create(options)
```

### Parameters

- `options` {{optional_inline}}

  - : An object that contains options for the requested new `Credentials` object. It can contain the following properties:

    - `signal` {{optional_inline}}
      - : An {{domxref("AbortSignal")}} object instance that allows an ongoing `create()` operation to be aborted. An aborted operation may complete normally (generally if the abort was received after the operation finished) or reject with an `AbortError` {{domxref("DOMException")}}.

    Each of the following properties represents a _credential type_ being created. One and only one of them must be specified:

    - `federated` {{optional_inline}}
      - : A {{domxref("FederatedCredentialInit")}} object containing requirements for creating a federated identify provider credential.
    - `password` {{optional_inline}}
      - : A {{domxref("PasswordCredentialInit")}} object containing requirements for creating a password credential.
    - `publicKey` {{optional_inline}}

      - : A {{domxref("PublicKeyCredentialCreationOptions")}} object containing requirements for creating a public key credential. Causes the `create()` call to request that the user agent creates new credentials via an authenticator — either for registering a new account or for associating a new asymmetric key pair with an existing account.

        > [!NOTE]
        > Usage of `create()` with the `publicKey` parameter may be blocked by a {{HTTPHeader("Permissions-Policy/publickey-credentials-create","publickey-credentials-create")}} [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy) set on your server.

### Return value

A {{jsxref("Promise")}} that resolves with one of the following:

- A {{domxref("FederatedCredential")}}, if the credential type was `federated`.
- A {{domxref("PasswordCredential")}}, if the credential type was `password`.
- A {{domxref("PublicKeyCredential")}}, if the credential type was `publicKey`.

If no credential object can be created, the promise resolves with `null`.

### Exceptions

- {{jsxref("TypeError")}}
  - : In the case of a {{domxref("PasswordCredential")}} creation request, `id`, `origin`, or `password` were not provided (empty).
- `NotAllowedError` {{domxref("DOMException")}}
  - : Possible causes include:
    - Usage was blocked by a {{HTTPHeader("Permissions-Policy/publickey-credentials-create","publickey-credentials-create")}} [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy).
    - The function is called cross-origin but the iframe's [`allow`](/en-US/docs/Web/HTML/Element/iframe#allow) attribute does not set an appropriate {{HTTPHeader("Permissions-Policy/publickey-credentials-create","publickey-credentials-create")}} policy.
    - The function is called cross-origin and the `<iframe>` does not have {{glossary("transient activation")}}.
    - An attempt is made to create a [discoverable credential](/en-US/docs/Web/API/Web_Authentication_API#discoverable_credentials_and_conditional_mediation) ([`residentKey`](/en-US/docs/Web/API/PublicKeyCredentialCreationOptions#residentkey) is set to `required` in the `create()` call's {{domxref("PublicKeyCredentialCreationOptions")}} option), but the user does not have a security key that supports discoverable credentials, and cancels the operation.
- `AbortError` {{domxref("DOMException")}}
  - : The operation was aborted.

## Examples

### Creating a password credential

This example creates a password credential from a {{domxref("PasswordCredentialInit")}} object.

```js
const credInit = {
  id: "1234",
  name: "Serpentina",
  origin: "https://example.org",
  password: "the last visible dog",
};

const makeCredential = document.querySelector("#make-credential");

makeCredential.addEventListener("click", async () => {
  const cred = await navigator.credentials.create({
    password: credInit,
  });
  console.log(cred.name);
  // Serpentina
  console.log(cred.password);
  // the last visible dog
});
```

### Creating a federated credential

This example creates a federated credential from a {{domxref("FederatedCredentialInit")}} object.

```js
const credInit = {
  id: "1234",
  name: "Serpentina",
  origin: "https://example.org",
  protocol: "openidconnect",
  provider: "https://provider.example.org",
};

const makeCredential = document.querySelector("#make-credential");

makeCredential.addEventListener("click", async () => {
  const cred = await navigator.credentials.create({
    federated: credInit,
  });
  console.log(cred.name);
  console.log(cred.provider);
});
```

### Creating a public key credential

This example creates a public key credential from a {{domxref("PublicKeyCredentialCreationOptions")}} object.

```js
const publicKey = {
  challenge: challengeFromServer,
  rp: { id: "acme.com", name: "ACME Corporation" },
  user: {
    id: new Uint8Array([79, 252, 83, 72, 214, 7, 89, 26]),
    name: "jamiedoe",
    displayName: "Jamie Doe",
  },
  pubKeyCredParams: [{ type: "public-key", alg: -7 }],
};

const publicKeyCredential = await navigator.credentials.create({ publicKey });
```

The `create()` call, if successful, returns a promise that resolves with a {{domxref("PublicKeyCredential")}} object instance, representing a public key credential that can later be used to authenticate a user via a WebAuthn {{domxref("CredentialsContainer.get()", "get()")}} call. Its {{domxref("PublicKeyCredential.response")}} property contains an {{domxref("AuthenticatorAttestationResponse")}} object providing access to several useful pieces of information including the authenticator data, public key, transport mechanisms, and more.

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

> [!NOTE]
> See [Creating a key pair and registering a user](/en-US/docs/Web/API/Web_Authentication_API#creating_a_key_pair_and_registering_a_user) for more information about how the overall flow works.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

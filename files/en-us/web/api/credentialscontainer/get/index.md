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

### Parameters

- `options` {{optional_inline}}

  - : An object that contains options for
    the request. The options include criteria that the credentials are required or allowed
    to have, and options for interacting with the user. It can contain the following
    properties:

    - `password` {{optional_inline}}
      - : a boolean value indicating that returned
        {{domxref("Credential")}} instances should include user (as opposed to federated)
        credentials.
    - `federated` {{optional_inline}}

      - : An object containing requirements for returned federated credentials. The available
        options are:

        - `providers`
          - : An array of string instances of
            identity providers to search for.

    - `identity` {{optional_inline}}

      - : An object containing details of federated identity providers (IdPs) that a relying party (RP) website can use to sign users in. Causes a `get()` call to initiate a request for a user to sign in to a RP with an IdP (see [Federated Credential Management API (FedCM)](/en-US/docs/Web/API/FedCM_API)). `identity` can contain a single property, `providers`, which contains an array of objects each specifying the details of a separate IdP:

        - `configURL`
          - : A string specifying the URL of the IdP's config file. See [Provide a config file](/en-US/docs/Web/API/FedCM_API#provide_a_config_file) for more information.
        - `clientId`
          - : A string specifying the the RP's client identifier, issued by the IdP to the RP in a completely separate process specific to the IdP.
        - `nonce` {{optional_inline}}
          - : A random string that can be included to ensure the response is issued for this specific request, and prevent {{glossary("replay attack", "replay attacks")}}.

    - `publicKey` {{optional_inline}}
      - : An object containing requirements for returned [WebAuthn](/en-US/docs/Web/API/Web_Authentication_API) credentials. The available options are:
        - `challenge`
          - : An {{jsxref("ArrayBuffer")}}, a {{jsxref("TypedArray")}}, or a {{jsxref("DataView")}} emitted by the relying party's server and used as a [cryptographic challenge](https://en.wikipedia.org/wiki/Challenge%E2%80%93response_authentication). This value will be signed by the authenticator and the signature will be sent back as part of {{domxref("AuthenticatorAssertionResponse.signature")}}.
        - `timeout` {{optional_inline}}
          - : A numerical hint, in milliseconds, which indicates the time the caller is willing to wait for the retrieval operation to complete. This hint may be overridden by the browser.
        - `rpId` {{optional_inline}}
          - : A string which indicates the relying party's identifier (ex. `"login.example.org"`). If this option is not provided, the client will use the current origin's domain.
        - `allowCredentials` {{optional_inline}}
          - : An {{jsxref("Array")}} of credentials descriptor which restricts the acceptable existing credentials for retrieval.
        - `userVerification` {{optional_inline}}
          - : A string qualifying how the user verification should be part of the authentication process.
        - `extensions` {{optional_inline}}
          - : An object with several client extensions' inputs. Those extensions are used to request additional processing (e.g. dealing with legacy FIDO APIs credentials, prompting a specific text on the authenticator, etc.).
    - `mediation` {{optional_inline}}
      - : A {{jsxref("String")}} indicating whether the user will
        be required to log on for every visit to the website. Valid values are
        `"silent"`, `"optional"`, `"conditional"`, or `"required"`.
    - `unmediated` {{optional_inline}} {{deprecated_inline}}
      - : A boolean value
        indicating the returned {{domxref("Credential")}} instance should not require user
        mediation.
    - `signal` {{optional_inline}}
      - : An instance of {{domxref("AbortSignal")}} that can indicate
        that an ongoing `get()` operation should be halted. An aborted
        operation may complete normally (generally if the abort was received after the
        operation finished) or reject with an "`AbortError`"
        {{domxref("DOMException")}}.

### Return value

A {{jsxref("Promise")}} that resolves with a {{domxref("Credential")}} instance that
matches the provided parameters. If a single credential cannot be unambiguously
obtained, the Promise will resolve to `null`.

### Exceptions

- `NetworkError` {{domxref("DOMException")}}
  - : In the case of a `get()` call with an `identity` option, this exception is thrown if the IdP does not respond within 60 seconds, or if the provided credentials are not valid/found.
- `NotAllowedError` {{domxref("DOMException")}}
  - : Use of this feature was blocked by an {{HTTPHeader("Permissions-Policy/identity-credentials-get","identity-credentials-get")}} [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy).
- `SecurityError` {{domxref("DOMException")}}
  - : Use of this feature was blocked by a {{HTTPHeader("Permissions-Policy/publickey-credentials-get","publickey-credentials-get")}} [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy).

## Examples

### Relying party sign-in using the FedCM API

Relying parties (RPs) can call `navigator.credentials.get()` with the `identity` option to make a request for users to sign in to the RP via an identity provider (IdP), using identity federation. A typical request would look like this:

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

- [Federated Credential Management API (FedCM)](/en-US/docs/Web/API/FedCM_API)
- {{HTTPHeader("Permissions-Policy")}} directives:
  - {{HTTPHeader("Permissions-Policy/identity-credentials-get","identity-credentials-get")}}
  - {{HTTPHeader("Permissions-Policy/publickey-credentials-get","publickey-credentials-get")}}

---
title: CredentialsContainer.get()
slug: Web/API/CredentialsContainer/get
page-type: web-api-instance-method
tags:
  - API
  - Credential Management API
  - CredentialsContainer
  - Method
  - NeedsExample
  - Reference
  - credential management
browser-compat: api.CredentialsContainer.get
---
{{APIRef("Credential Management API")}}

The **`get()`** method of the
{{domxref("CredentialsContainer")}} interface returns a {{jsxref("Promise")}} to a
single {{domxref("Credential")}} instance that matches the provided parameters. If no
match is found the Promise will resolve to null.

This method first collects all credentials in the {{domxref("CredentialsContainer")}}
that meet the necessary criteria (defined in the **`options`**
argument). From the resulting set of credentials, it then selects the best one.
Depending on the options, it may display a dialog to the user and ask the user to make
the selection.

This method collects credentials by calling the "CollectFromCredentialStore" method for
each credential type allowed by the **`options`** argument. For
example: if options.password exists, then the
{{domxref("PasswordCredential")}}.\[\[CollectFromCredentialStore]] is called.

> **Note:** This method is restricted to top-level contexts. Calls to it within an
> `<iframe>` element will resolve without effect.

## Syntax

```js
get()
get(options)
```

### Parameters

- `options` {{optional_inline}}

  - : An object of type {{domxref("CredentialRequestOptions")}} that contains options for
    the request. The options include criteria that the credentials are required or allowed
    to have, and options for interacting with the user. It can contain the following
    properties:

    - `password`
      - : a boolean value indicating that returned
        {{domxref("Credential")}} instances should include user (as opposed to federated)
        credentials.
    - `federated`
      - : An object containing requirements for returned federated credentials. The available
        options are:

        - `providers`
          - : An array of string instances of
            identity providers to search for.
        - `protocols`
          - : An array of string instances of
            federation protocols to search for.

    - `publicKey`
      - : An object containing requirements for returned [WebAuthn](/en-US/docs/Web/API/Web_Authentication_API) credentials. The available options are:
        - `challenge`
          - :An {{jsxref("ArrayBuffer")}}, a {{jsxref("TypedArray")}}, or a {{jsxref("DataView")}} emitted by the relying party's server and used as a [cryptographic challenge](https://en.wikipedia.org/wiki/Challenge%E2%80%93response_authentication). This value will be signed by the authenticator and the signature will be sent back as part of {{domxref("AuthenticatorAssertionResponse.signature")}}.
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
    - `mediation`
      - : A {{jsxref("String")}} indicating whether the user will
        be required to log on for every visit to the website. Valid values are
        `"silent"`, `"optional"`, or `"required"`.
    - `unmediated` {{deprecated_inline}}
      - : A boolean value
        indicating the returned {{domxref("Credential")}} instance should not require user
        mediation.
    - `signal`
      - : An instance of {{domxref("AbortSignal")}} that can indicate
        that an ongoing `get()` operation should be halted. An aborted
        operation may complete normally (generally if the abort was received after the
        operation finished) or reject with an "`AbortError`"
        {{domxref("DOMException")}}.

### Return value

A {{jsxref("Promise")}} that resolves with a {{domxref("Credential")}} instance that
matches the provided parameters. If a single Credential cannot be unambiguously
obtained, the Promise will resolve to null.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Feature-Policy")}} directive
  {{HTTPHeader("Feature-Policy/publickey-credentials-get","publickey-credentials-get")}}

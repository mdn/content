---
title: CredentialsContainer.create()
slug: Web/API/CredentialsContainer/create
page-type: web-api-instance-method
tags:
  - API
  - Credential Management API
  - CredentialsContainer
  - Method
  - Reference
  - credential management
browser-compat: api.CredentialsContainer.create
---
{{APIRef("Credential Management API")}}

The **`create()`** method of the
{{domxref("CredentialsContainer")}} interface returns a {{jsxref("Promise")}} that
resolves with a new {{domxref("Credential")}} instance based on the provided options, or
`null` if no `Credential` object can be created.

> **Note:** This method is restricted to top-level contexts. Calls to it within an
> `<iframe>` element will resolve without effect.

## Syntax

```js
create()
create(options)
```

### Parameters

- `options` {{optional_inline}}

  - : An object of type {{domxref("CredentialCreationOptions")}} that contains options for
    the requested new `Credentials` object. It must include one of the options
    "password", "federated", or "publicKey". The options are:

    - `password` {{optional_inline}}
      - : Either an
        {{domxref("HTMLFormElement")}}, or a {{domxref("PasswordCredentialData")}} object.
        TBD

        - `id`: (required) string Inherited from
          {{domxref("CredentialData")}}.
        - `name`: string {{optional_inline}} TBD
        - `iconURL`: string {{optional_inline}} TBD
        - `password`: (required) string TBD

    - `federated` {{optional_inline}}
      - : An
        {{domxref("FederatedCredentialInit")}} object. Contains requirements for
        creating/obtaining federated credentials. The available options are:

        - `id`: (required) string Inherited from
          {{domxref("CredentialData")}}.
        - `name`: string {{optional_inline}} TBD
        - `iconURL`: string {{optional_inline}} TBD
        - `provider`: (required) string TBD
        - `protocol`: string {{optional_inline}} TBD

    - `publicKey` {{optional_inline}}
      - : An object that describes the options for creating a [WebAuthn](/en-US/docs/Web/API/Web_Authentication_API) credential containing the following properties:
        - `rp`
          - : An object describing the relying party which requested the credential creation.
        - `user`
          - : An object describing the user account for which the credential is generated.
        - `challenge`
          - : An {{jsxref("ArrayBuffer")}}, a {{jsxref("TypedArray")}}, or a {{jsxref("DataView")}}
          emitted by the relying party's server and used as a [cryptographic challenge](https://en.wikipedia.org/wiki/Challenge%E2%80%93response_authentication). This value will be signed by the authenticator and the signature will be sent back as part of {{domxref("AuthenticatorAttestationResponse.attestationObject")}}.
        - `pubKeyCredParams`
          - : An {{jsxref("Array")}} of element which specify the desired features of the credential, including its type and the algorithm used for the cryptographic signature operations. This array is sorted by descending order of preference.
        - `timeout` {{optional_inline}}
          - : A numerical hint, in milliseconds, which indicates the time the caller is willing to wait for the creation operation to complete. This hint may be overridden by the browser.
        - `excludeCredentials` {{optional_inline}}
          - : An {{jsxref("Array")}} of descriptors for existing credentials. This is provided by the relying party to avoid creating new public key credentials for an existing user who already have some.
        - `authenticatorSelection` {{optional_inline}}
          - : An object whose properties are criteria used to filter out the potential authenticators for the creation operation.
        - `attestation` {{optional_inline}}
          - : A {{jsxref("String")}} which indicates how the attestation (for the authenticator's origin) should be transported.
        - `extensions` {{optional_inline}}
          - : An object with several client extensions' inputs. Those extensions are used to request additional processing (e.g. dealing with legacy FIDO APIs credentials, prompting a specific text on the authenticator, etc.).

### Return value

A {{jsxref("Promise")}} that resolves with a {{domxref("Credential")}} instance, such
as {{domxref("PasswordCredential")}}, {{domxref("FederatedCredential")}},
or {{domxref("PublicKeyCredential")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

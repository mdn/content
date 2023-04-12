---
title: "CredentialsContainer: create() method"
short-title: create()
slug: Web/API/CredentialsContainer/create
page-type: web-api-instance-method
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

```js-nolint
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
          - : An object describing the relying party which requested the credential creation. It can contain the following properties:
            - `id` {{optional_inline}}
              - : The ID of the relying party. If omitted, the document origin will be used as the default value.
            - `name`
              - : The name of the relying party. This is the name the user will be presented with when creating or validating a WebAuthn operation.
        - `user`
          - : An object describing the user account for which the credential is generated. It can contain the following properties:
            - `id`: A unique user id of type {{jsxref("BufferSource")}}. This value cannot exceed 64 bytes.
            - `name`: A user handle (ex: `john34`).
            - `displayName`: A human-friendly user display name (example: `John Doe`).
        - `challenge`
          - : An {{jsxref("ArrayBuffer")}}, a {{jsxref("TypedArray")}}, or a {{jsxref("DataView")}}
            emitted by the relying party's server and used as a [cryptographic challenge](https://en.wikipedia.org/wiki/Challenge%E2%80%93response_authentication). This value will be signed by the authenticator and the signature will be sent back as part of {{domxref("AuthenticatorAttestationResponse.attestationObject")}}.
        - `pubKeyCredParams`
          - : An {{jsxref("Array")}} of items which specify the desired features of the credential, including its type and the algorithm used for the cryptographic signature operations. This array is sorted by descending order of preference. Each item can be composed of the following properties:
            - `alg`: A [COSE Algorithm Identifier](https://www.iana.org/assignments/cose/cose.xhtml#algorithms). For instance, -257 refers to the algorithm RS256.
            - `type`: Must be the string `public-key`.
        - `timeout` {{optional_inline}}
          - : A numerical hint, in milliseconds, which indicates the time the caller is willing to wait for the creation operation to complete. This hint may be overridden by the browser.
        - `excludeCredentials` {{optional_inline}}
          - : An {{jsxref("Array")}} of descriptors for existing credentials. This is provided by the relying party to avoid creating new public key credentials for an existing user who already has some. Each item should be of the form:
            - `id`: The credential ID as a {{jsxref("BufferSource")}}.
            - `type`: Must be the string `public-key`.
            - `transports`: An {{jsxref("Array")}} of allowed transports. Possible transports are: `usb`, `nfc`, `ble`, and `internal`.
        - `authenticatorSelection` {{optional_inline}}
          - : An object whose properties are criteria used to filter out the potential authenticators for the creation operation. Can contain the properties:
            - `authenticatorAttachment` {{optional_inline}} : Allowed values are `platform` or `cross-platform`.
            - `residentKey` {{optional_inline}} : Allowed values are `discouraged`, `preferred`, or `required`. The default value is `required` if `requireResidentKey` is `true`; otherwise the default value is `discouraged`.
            - `requireResidentKey` {{optional_inline}} : This property is deprecated. The value should be set to `true` if the `residentKey` is set to `required`.
            - `userVerification` {{optional_inline}} : Allowed values are `discouraged`, `preferred`, or `required`.
        - `attestation` {{optional_inline}}
          - : A {{jsxref("String")}} which indicates how the attestation (for the authenticator's origin) should be transported. Should be one of `none`, `indirect`, `direct`, or `enterprise`. The default value is `none`.
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

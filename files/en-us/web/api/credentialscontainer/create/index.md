---
title: CredentialsContainer.create()
slug: Web/API/CredentialsContainer/create
tags:
  - API
  - Credential Management API
  - CredentialsContainer
  - Method
  - Reference
  - credential management
browser-compat: api.CredentialsContainer.create
---
{{APIRef("Credential Management API")}}{{SeeCompatTable}}

The **`create()`** method of the
{{domxref("CredentialsContainer")}} interface returns a {{jsxref("Promise")}} that
resolves with a new {{domxref("Credential")}} instance based on the provided options, or
`null` if no `Credential` object can be created.

> **Note:** This method is restricted to top-level contexts. Calls to it within an
> `<iframe>` element will resolve without effect.

## Syntax

```js
var promise = CredentialsContainer.create([options])
```

### Parameters

- options

  - : An object of type {{domxref("CredentialCreationOptions")}} that contains options for
    the requested new `Credentials` object. It must include one of the options
    "password", "federated", or "publicKey". The options are:

    - `password`: {{optional_inline}} Either an
      {{domxref("HTMLFormElement")}}, or a {{domxref("PasswordCredentialData")}} object.
      TBD

      - `id`: (required) {{domxref("USVString")}} Inherited from
        {{domxref("CredentialData")}}.
      - `name`: {{optional_inline}} {{domxref("USVString")}} TBD
      - `iconURL`: {{optional_inline}} {{domxref("USVString")}} TBD
      - `password`: (required) {{domxref("USVString")}} TBD

    - `federated`: {{optional_inline}} An
      {{domxref("FederatedCredentialInit")}} object. Contains requirements for
      creating/obtaining federated credentials. The available options are:

      - `id`: (required) {{domxref("USVString")}} Inherited from
        {{domxref("CredentialData")}}.
      - `name`: {{optional_inline}} {{domxref("USVString")}} TBD
      - `iconURL`: {{optional_inline}} {{domxref("USVString")}} TBD
      - `provider`: (required) {{domxref("USVString")}} TBD
      - `protocol`: {{optional_inline}} {{domxref("USVString")}} TBD

    - `publicKey`: {{optional_inline}}
      a {{domxref("PublicKeyCredentialCreationOptions")}} object that describes the
      options for creating a [WebAuthn](/en-US/docs/Web/API/Web_Authentication_API) credential.

### Returns

A {{jsxref("Promise")}} that resolves with a {{domxref("Credential")}} instance, such
as {{domxref("PasswordCredential")}}, {{domxref("FederatedCredential")}},
or {{domxref("PublicKeyCredential")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

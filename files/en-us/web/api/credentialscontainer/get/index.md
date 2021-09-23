---
title: CredentialsContainer.get()
slug: Web/API/CredentialsContainer/get
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
{{APIRef("Credential Management API")}}{{SeeCompatTable}}

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

> **Note:** This method is restricted to top-level contexts. Calls to it within an
> `<iframe>` element will resolve without effect.

## Syntax

```js
var promise = CredentialsContainer.get([options])
```

### Parameters

- options {{optional_inline}}

  - : An object of type {{domxref("CredentialRequestOptions")}} that contains options for
    the request. The options include criteria that the credentials are required or allowed
    to have, and options for interacting with the user. It can contain the following
    properties:

    - `password`: a boolean value indicating that returned
      {{domxref("Credential")}} instances should include user (as opposed to federated)
      credentials.
    - `federated`: A {{domxref("FederatedCredentialRequestOptions")}}
      object containing requirements for returned federated credentials. The available
      options are:

      - `providers`: An array of {{domxref("DOMString")}} instances of
        identity providers to search for.
      - `protocols` An array of {{domxref("DOMString")}} instances of
        federation protocols to search for.

    - `publicKey`: An {{domxref("PublicKeyCredentialRequestOptions")}}
      object containing requirements for returned [WebAuthn](/en-US/docs/Web/API/Web_Authentication_API) credentials.
    - `mediation`: A {{jsxref("String")}} indicating whether the user will
      be required to log on for every visit to the website. Valid values are
      `"silent"`, `"optional"`, or `"required"`.
    - `unmediated`: {{deprecated_inline}} A boolean value
      indicating the returned {{domxref("Credential")}} instance should not require user
      mediation.
    - `signal`: An instance of {{domxref("AbortSignal")}} that can indicate
      that an ongoing `get()` operation should be halted. An aborted
      operation may complete normally (generally if the abort was received after the
      operation finished) or reject with an "`AbortError`"
      {{domxref("DOMException")}}.

### Returns

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

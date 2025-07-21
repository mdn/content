---
title: "IdentityCredential: disconnect() static method"
short-title: disconnect()
slug: Web/API/IdentityCredential/disconnect_static
page-type: web-api-static-method
status:
  - experimental
browser-compat: api.IdentityCredential.disconnect_static
---

{{APIRef("FedCM API")}}{{SeeCompatTable}}{{SecureContext_Header}}

The **`disconnect()`** static method of the {{domxref("IdentityCredential")}} interface disconnects a specified federated sign-in account from the {{glossary("Identity provider", "IdP")}} used to obtain the credential.

Afterwards, using that account for federated login requires starting the federated sign-in process again.

## Syntax

```js-nolint
IdentityCredential.disconnect(options)
```

### Parameters

- `options`
  - : An options object, which can contain the following properties:
    - `accountHint`
      - : A string specifying an account hint that the IdP uses to identify the account to disconnect. The hint can be an arbitrary string as long as the [disconnect endpoint](/en-US/docs/Web/API/FedCM_API/IDP_integration#the_disconnect_endpoint) can identify the account — for example an email address or user ID. This will not necessarily match the account ID provided by the [accounts list endpoint](/en-US/docs/Web/API/FedCM_API/IDP_integration#the_accounts_list_endpoint).
    - `clientId`
      - : A string specifying the {{glossary("Relying party", "RP")}}'s client identifier, as specified in the `providers` [`clientId`](/en-US/docs/Web/API/IdentityCredentialRequestOptions#clientid) property during sign-in.
    - `configURL`
      - : A string specifying the config file URL of the IdP, as specified in the `providers` [`configURL`](/en-US/docs/Web/API/IdentityCredentialRequestOptions#configurl) property during sign-in.

### Return value

A {{jsxref("Promise")}} that fulfills with {{jsxref("undefined")}}.

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if:
    - The IdP's `configURL` is invalid or missing the `disconnect_enpoint`.
    - The document's origin does not match the `configURL`.
- `NetworkError` {{domxref("DOMException")}}
  - : Thrown if:
    - The browser is unable to connect to the IdP.
    - The request is disallowed by a [`connect-src`](/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/connect-src) {{httpheader("Content-Security-Policy")}}.
    - Another `disconnect()` call was previously made that has not yet resolved.
    - The FedCM API has been disabled globally.
    - The IdP's `configURL` is not trustworthy
- `NotAllowedError` {{domxref("DOMException")}}
  - : Thrown if the embedding `<iframe>` does not have a {{httpheader("Permissions-Policy/identity-credentials-get", "identity-credentials-get")}} [Permissions-Policy](/en-US/docs/Web/HTTP/Guides/Permissions_Policy) set to allow the use of `disconnect()` or if the FedCM API is disabled globally by a policy set on the top-level document.

## Examples

### Basic `disconnect()` usage

The RP may disconnect a specified federated sign-in account from the associated IdP by invoking `disconnect()`. This function can be called from a top-level RP frame.

```js
IdentityCredential.disconnect({
  configURL: "https://idp.example.com/config.json",
  clientId: "rp123",
  accountHint: "account456",
});
```

For a `disconnect()` call to work, the IdP must include a [`disconnect_endpoint`](/docs/Web/API/FedCM_API/IDP_integration#disconnect_endpoint) in its config file. See [The disconnect endpoint](/en-US/docs/Web/API/FedCM_API/IDP_integration#the_disconnect_endpoint) for more details of the underlying HTTP communication.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Federated Credential Management API](https://privacysandbox.google.com/cookies/fedcm) on privacysandbox.google.com (2023)

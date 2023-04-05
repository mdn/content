---
title: IdentityCredential
slug: Web/API/IdentityCredential
page-type: web-api-interface
status:
  - experimental
browser-compat: api.IdentityCredential
---

{{APIRef("FedCM API")}}{{SeeCompatTable}}

The **`IdentityCredential`** interface of the [Federated Credential Management API (FedCM)](/en-US/docs/Web/API/FedCM_API) represents a user identity credential arising from a successful federated sign-in.

A successful {{domxref("CredentialsContainer.get", "navigator.credentials.get()")}} call that includes an `identity` option fulfills with an `IdentityCredential` instance.

{{InheritanceDiagram}}

## Instance properties

_Inherits properties from its ancestor, {{domxref("Credential")}}._

- {{domxref("IdentityCredential.token")}} {{experimental_inline}}
  - : Returns a {{jsxref("Promise")}} that resolves with the {{domxref("Credential")}} instance that matches the provided parameters.

## Examples

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

If successful, this call will fulfill with an `IdentityCredential` instance. From this, you could return the {{domxref("IdentityCredential.token")}} value, for example:

```js
console.log(identityCredential.token);
```

Check out [Federated Credential Management API (FedCM)](/en-US/docs/Web/API/FedCM_API) for more details on how this works. This call will start off the sign-in flow described in [FedCM sign-in flow](/en-US/docs/Web/API/FedCM_API#fedcm_sign-in_flow).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Federated Credential Management API](https://developer.chrome.com/docs/privacy-sandbox/fedcm/)

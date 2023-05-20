---
title: "IdentityCredential: token property"
short-title: token
slug: Web/API/IdentityCredential/token
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.IdentityCredential.token
---

{{APIRef("FedCM API")}}{{SeeCompatTable}}

The **`token`** read-only property of the {{domxref("IdentityCredential")}} interface returns the token used to validate the associated sign-in.

## Value

A string.

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

  console.log(identityCredential.token);
}
```

A successful {{domxref("CredentialsContainer.get", "navigator.credentials.get()")}} call that includes an `identity` option fulfills with an `IdentityCredential` instance, which can be used to access the token used to validate the sign-in.

Check out [Federated Credential Management API (FedCM)](/en-US/docs/Web/API/FedCM_API) for more details on how this works. This call will start off the sign-in flow described in [FedCM sign-in flow](/en-US/docs/Web/API/FedCM_API#fedcm_sign-in_flow).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Federated Credential Management API](https://developer.chrome.com/docs/privacy-sandbox/fedcm/)

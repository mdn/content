---
title: "IdentityCredential: isAutoSelected property"
short-title: isAutoSelected
slug: Web/API/IdentityCredential/isAutoSelected
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.IdentityCredential.isAutoSelected
---

{{APIRef("FedCM API")}}{{SeeCompatTable}}

The **`isAutoSelected`** read-only property of the {{domxref("IdentityCredential")}} interface indicates whether the federated sign-in was carried out using automatic reauthentication (i.e. without user mediation) or not.

Automatic reauthentication can occur when a {{domxref("CredentialsContainer.get", "navigator.credentials.get()")}} call is issued with a [`mediation`](/en-US/docs/Web/API/CredentialsContainer/get#mediation) option value of `"optional"` or `"silent"`. It is useful for a relying party (RP) to know whether auto reauthentication occurred for performance evaluation and for UX purposes — automatic sign-in may warrant a different UI flow to non-automatic sign-in.

## Value

A boolean value. `true` indicates that automatic reauthentication was used; `false` indicates that it was not.

## Examples

RPs can call `navigator.credentials.get()` with the `identity` option to make a request for users to sign in to the RP via an identity provider (IdP), using identity federation. A typical request would look like this:

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

  if (identityCredential.isAutoSelected) {
    // Build UI related to successful automatic sign-in
  } else {
    // Build UI related to successful non-automatic sign-in
  }
}
```

A successful `get()` call that includes an `identity` option fulfills with an `IdentityCredential` instance, which can be used to access the `isAutoSelected` value. This can then be used to run code for automatic or non-automatic sign-in cases, as appropriate.

Check out [Federated Credential Management API (FedCM)](/en-US/docs/Web/API/FedCM_API) for more details on how this works. This call will start off the sign-in flow described in [FedCM sign-in flow](/en-US/docs/Web/API/FedCM_API/RP_sign-in#fedcm_sign-in_flow).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Federated Credential Management API](https://developer.chrome.com/docs/privacy-sandbox/fedcm/)

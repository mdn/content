---
title: "IdentityCredential: isAutoSelected property"
short-title: isAutoSelected
slug: Web/API/IdentityCredential/isAutoSelected
page-type: web-api-instance-property
status:
  - experimental
  - non-standard
browser-compat: api.IdentityCredential.isAutoSelected
---

{{securecontext_header}}{{APIRef("FedCM API")}}{{SeeCompatTable}}{{non-standard_header}}

The **`isAutoSelected`** read-only property of the {{domxref("IdentityCredential")}} interface indicates whether the federated sign-in flow was carried out using [auto-reauthentication](/en-US/docs/Web/API/FedCM_API/RP_sign-in#auto-reauthentication) (i.e. without user mediation) or not.

Automatic reauthentication can occur when a {{domxref("CredentialsContainer.get", "navigator.credentials.get()")}} call is issued with a [`mediation`](/en-US/docs/Web/API/CredentialsContainer/get#mediation) option value of `"optional"` or `"silent"`. It is useful for a relying party (RP) to know whether auto reauthentication occurred for analytics/performance evaluation and for UX purposes — automatic sign-in may warrant a different UI flow to non-automatic sign-in.

## Value

A boolean value. `true` indicates that automatic reauthentication was used; `false` indicates that it was not.

## Examples

RPs can call `navigator.credentials.get()` with the `identity` option to make a request for users to sign in to the RP via an identity provider (IdP), using identity federation. Auto-reauthentication behavior is controlled by the [`mediation`](/en-US/docs/Web/API/CredentialsContainer/get#mediation) option in the `get()` call:

```js
async function signIn() {
  const identityCredential = await navigator.credentials.get({
    identity: {
      providers: [
        {
          configURL: "https://accounts.idp.example/config.json",
          clientId: "********",
        },
      ],
    },
    mediation: "optional", // this is the default
  });

  // isAutoSelected is true if auto-reauthentication occurred.
  const isAutoSelected = identityCredential.isAutoSelected;
}
```

Check out [Federated Credential Management API (FedCM)](/en-US/docs/Web/API/FedCM_API) for more details on how this works. This call will start off the sign-in flow described in [FedCM sign-in flow](/en-US/docs/Web/API/FedCM_API/RP_sign-in#fedcm_sign-in_flow).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Federated Credential Management API](https://developers.google.com/privacy-sandbox/cookies/fedcm)

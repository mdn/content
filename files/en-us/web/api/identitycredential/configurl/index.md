---
title: "IdentityCredential: configURL property"
short-title: configURL
slug: Web/API/IdentityCredential/configURL
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.IdentityCredential.configURL
---

{{APIRef("FedCM API")}}{{SeeCompatTable}}{{SecureContext_Header}}

The **`configURL`** read-only property of the {{domxref("IdentityCredential")}} interface returns a string specifying the config file URL of the {{glossary("Identity provider", "identity provider")}} (IdP) used for sign-in.

See [Provide a config file](/en-US/docs/Web/API/FedCM_API/IDP_integration#provide_a_config_file_and_endpoints) for more information.

## Value

A string.

## Examples

### Basic federated sign-in and `configURL` access

{{glossary("Relying party", "Relying parties")}} (RPs) can call `navigator.credentials.get()` with the `identity` option to make a request for users to sign in to the RP via an identity provider (IdP), using identity federation. A request indicating a single provider would look like this:

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

  console.log(identityCredential.configURL);
}
```

A successful {{domxref("CredentialsContainer.get", "navigator.credentials.get()")}} call that includes an `identity` option fulfills with an `IdentityCredential` instance, which can be used to access the `configURL` of the IdP used for sign-in.

Check out [Federated Credential Management API (FedCM)](/en-US/docs/Web/API/FedCM_API) for more details on how this works. This call will start off the sign-in flow described in [FedCM sign-in flow](/en-US/docs/Web/API/FedCM_API/RP_sign-in#fedcm_sign-in_flow).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Federated Credential Management API](https://developer.chrome.com/docs/identity/fedcm/overview)

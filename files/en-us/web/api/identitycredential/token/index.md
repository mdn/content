---
title: "IdentityCredential: token property"
short-title: token
slug: Web/API/IdentityCredential/token
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.IdentityCredential.token
---

{{APIRef("FedCM API")}}{{SeeCompatTable}}{{SecureContext_Header}}

The **`token`** read-only property of the {{domxref("IdentityCredential")}} interface returns the token used to validate the associated sign-in.

The token includes user identity information that has been signed with the identity provider (IdP)'s {{glossary("digital certificate")}}.

The relying party (RP) sends the token to its server to validate the certificate, and on success can use the (now trusted) identity information in the token to sign them into their service (starting a new session), sign them up to their service if they are a new user, etc.

If the user has never signed into the IdP or is logged out, the associated {{domxref("CredentialsContainer.get", "get()")}} call rejects with an error and the RP can direct the user to the IdP login page to sign in or create an account.

> **Note:** The exact structure and content of the validation token is opaque to the FedCM API, and to the browser. The IdP decides on the syntax and usage of it, and the RP needs to follow the instructions provided by the IdP (see [Verify the Google ID token on your server side](https://developers.google.com/identity/gsi/web/guides/verify-google-id-token), for example) to make sure they are using it correctly.

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

Check out [Federated Credential Management API (FedCM)](/en-US/docs/Web/API/FedCM_API) for more details on how this works. This call will start off the sign-in flow described in [FedCM sign-in flow](/en-US/docs/Web/API/FedCM_API/RP_sign-in#fedcm_sign-in_flow).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Federated Credential Management API](https://developer.chrome.com/docs/privacy-sandbox/fedcm/)

---
title: Relying party federated sign-in
slug: Web/API/FedCM_API/RP_sign-in
page-type: guide
---

{{DefaultAPISidebar("FedCM API")}}

This article describes the process by which a relying party (RP) can use the [Federated Credential Management (FedCM) API](/en-US/docs/Web/API/FedCM_API) to perform a federated sign-in via an identity provider (IdP).

## Calling the get() method

RPs can call {{domxref("CredentialsContainer.get", "navigator.credentials.get()")}} with an `identity` option to request that a user signs in to the RP with an existing IdP account that they are already signed in to on the device. The user to sign in is identified by their `clientId`, issued by the IdP to the RP in a separate process that is specific to the IdP.

The method returns a promise that fulfills with an {{domxref("IdentityCredential")}} object if the user identity is successfully validated by the IdP. This object contains a token that the RP can then send to its server to validate the user on their service. Once the RP validates the user, they can sign them in, sign them up to their service, etc.

> **Note:** The exact nature of the token is opaque to the FedCM API, and to browser. The IdP decides on the syntax and usage of it, and the RP needs to follow the instructions provided by the IdP (see the [Google Sign In instructions](https://developers.google.com/identity/gsi/web/guides/fedcm-migration), for example) to make sure they are using it correctly.

A typical request might look like this:

```js
async function signIn() {
  const identityCredential = await navigator.credentials.get({
    identity: {
      context: "signup",
      providers: [
        {
          configURL: "https://accounts.idp.example/config.json",
          clientId: "********",
          nonce: "******",
          loginHint: "user1@example.com",
        },
      ],
    },
  });
}
```

The `identity.providers` property takes an array of objects containing the path to an IdP config file (`configURL`) and the RP's client identifier (`clientId`) issued by the IdP.

> **Note:** Currently FedCM only allows the API to be invoked with a single IdP, i.e. the `identity.providers` array has to have a length of 1. Multiple IdPs must be supported via different `get()` calls. This may change in the future.

The example above also includes a couple of optional features:

- `identity.context` specifies the context in which the user is authenticating with FedCM. For example, is it a first-time signup for this account, or a sign-in with an existing account? The browser uses this information to vary the text in its FedCM UI to better suit the context.
- The IdP `nonce` property provides a random nonce value that ensures the response is issued for this specific request, preventing {{glossary("replay attack", "replay attacks")}}.
- The IdP `loginHint` property provides a hint about the account option(s) the browser should present for user sign-in. This hint is matched against the `login_hints` values that the IdP provides from the [accounts list endpoint](/en-US/docs/Web/API/FedCM_API/IDP_integration#the_accounts_list_endpoint).

The browser requests the IdP config file and carries out the sign-in flow detailed below. For more information on the kind of interaction a user might expect from the browser-supplied UI, see [Sign in to the relying party with the identity provider](https://developers.google.com/privacy-sandbox/3pcd/fedcm#sign-in).

## FedCM sign-in flow

1. The RP invokes {{domxref("CredentialsContainer.get", "navigator.credentials.get()")}} to start off the sign-in flow.

2. From the `configURL` provided in the `get()` call, the browser requests two files:

   1. The well-known file (`/.well-known/web-identity`), available from `/.well-known/web-identity` at the [eTLD+1](https://web.dev/articles/same-site-same-origin#site) of the `configURL`.
   2. The [IdP config file](/en-US/docs/Web/API/FedCM_API/IDP_integration#provide_a_config_file_and_endpoints) (`/config.json`), available at the `configURL`.

   These are both [`GET`](/en-US/docs/Web/HTTP/Methods/GET) requests, which don't have cookies and don't follow redirects. This effectively prevents the IdP from learning who made the request and which RP is attempting to connect.

   All requests sent from the browser via FedCM include a `{{httpheader("Sec-Fetch-Dest")}}: webidentity` header to prevent {{glossary("CSRF")}} attacks. All IdP endpoints must confirm this header is included.

3. The IdP responds with the requested files. The brower validates the config file URL against the list of valid config URLs inside the well-known file.

4. If the browser has the [IdP's login status](/en-US/docs/Web/API/FedCM_API/IDP_integration#update_login_status_using_the_login_status_api) set to `"logged-in"`, it makes a credentialed request (i.e. with a cookie that identifies the user that is signed in) to the [`accounts_endpoint`](/en-US/docs/Web/API/FedCM_API/IDP_integration#the_accounts_list_endpoint) inside the IdP config file for the user's account details. This is a `GET` request with cookies, but without a `client_id` parameter or the {{httpheader("Origin")}} header. This effectively prevents the IdP from learning which RP the user is trying to sign in to. As a result, the list of accounts returned is RP-agnostic.

   > **Note:** If the IdP login status is `"logged-out"`, the `get()` call fails without making a request to the IdP's accounts list endpoint. In such a case it is up to the developer to handle the flow, for example by prompting the user to go and sign in to a suitable IdP. Note that in such cases the `get()` call rejects with a `NetworkError` {{domxref("DOMException")}}; there may be some delay in the rejection to avoid leaking the IdP login status to the RP.

5. The IdP responds with the account information.

6. {{optional_inline}} If included in the IdP config file, the browser makes an uncredentialed request to the [`client_metadata_endpoint`](/en-US/docs/Web/API/FedCM_API/IDP_integration#the_client_metadata_endpoint) for the location of the IdP terms of service and privacy policy pages. This is a `GET` request sent with the `clientId` passed into the `get()` call as a parameter, without cookies.

7. {{optional_inline}} The IdP responds with the requested URLs.

8. The browser uses the information obtained by the previous two requests to create the UI asking the user to choose an account to sign in to the RP with (in the case where there is more than one available). The UI also asks the user for permission to sign in to the RP using their chosen federated IdP account.

9. If the user grants permission to do so, the browser makes a credentialed request to the [`id_assertion_endpoint`](/en-US/docs/Web/API/FedCM_API/IDP_integration#the_id_assertion_endpoint) to request a validation token from the IdP.

   The credentials are sent in an HTTP [`POST`](/en-US/docs/Web/HTTP/Methods/POST) request with cookies and a content type of `application/x-www-form-urlencoded`.

   If the call fails, an error payload is returned as explained in [The ID assertion endpoint](/en-US/docs/Web/API/FedCM_API/IDP_integration#the_id_assertion_endpoint).

10. The IdP checks that the account ID sent by the RP matches the ID for the account that is already signed in, and that the `Origin` matches the origin of the RP, which will have been registered in advance with the IdP. If everything looks good, it responds with a validation token.

> **Note:** The origin of the RP will be registered with the IdP in a completely separate process when the RP first integrates with the IdP. This process will be specific to each IdP.

When the flow is complete, the `get()` promise resolves with an {{domxref("IdentityCredential")}} object, which provides further RP functionality. Most notably, this object contains a token that the RP can then send to its server to validate the user on their service. Once the RP validates the user, they can sign them in and start a new session, sign them up to their service, etc. The nature of this validation is decided on by the IdP and has nothing to do with the FedCM API. The RP needs to follow the IdP's instructions.

## Features available via IdentityCredential

The {{domxref("IdentityCredential")}} object obtained from a successful FedCM sign-in provides access to the token used to validate the sign-in (see {{domxref("IdentityCredential.token")}}) and an indication of whether the federated sign-in was carried out using automatic reauthentication, i.e. without user mediation (see {{domxref("IdentityCredential.isAutoSelected")}}).

## See also

- [Federated Credential Management API](https://developer.chrome.com/docs/privacy-sandbox/fedcm/) on developer.chrome.com (2023)

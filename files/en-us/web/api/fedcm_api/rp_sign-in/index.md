---
title: Relying party federated sign-in
slug: Web/API/FedCM_API/RP_sign-in
page-type: guide
---

{{DefaultAPISidebar("FedCM API")}}

This article describes the process by which a relying party (RP) can use the Federated Credential Management (FedCM) API to perform a federated sign-in via an identity provider (IdP).

## Calling the get() method

RPs can call {{domxref("CredentialsContainer.get", "navigator.credentials.get()")}} with an `identity` option to make a request for users to sign in to the RP with an IdP, using the available IdP config and endpoints ([as described above](#provide_a_config_file_and_endpoints)). A typical request might look like this:

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

The `identity.providers` property takes an array of objects containing the path to an IdP config file and the RP's client identifier issued by the IdP; the example above also includes a couple of optional features:

- `identity.context` specifies the context in which the user is authenticating with FedCM. For example, is it a first-time signup for this account, or a sign-in with an existing account? The browser uses this information to vary the text in its FedCM UI to better suit the context.
- `identity.providers.nonce` provides a random nonce value that ensures the response is issued for this specific request, preventing {{glossary("replay attack", "replay attacks")}}.
- `identity.providers.loginHint` provides a hint about the account option(s) the browser should present for user sign-in. This hint is matched against the `login_hints` values that the IdP provides from the [accounts list endpoint](#the_accounts_list_endpoint).

The browser requests the IdP config file and carries out the sign-in flow detailed below. For more information on the kind of interaction a user might expect from the browser-supplied UI, see [Sign in to the relying party with the identity provider](https://developer.chrome.com/docs/privacy-sandbox/fedcm/#sign-into-rp).

## FedCM sign-in flow

1. The RP invokes {{domxref("CredentialsContainer.get", "navigator.credentials.get()")}} to start off the sign-in flow.

2. From the `configURL` provided in the `get()` call, the browser requests two files:

   1. The well-known file (`/.well-known/web-identity`), available from `/.well-known/web-identity` at the [eTLD+1](https://web.dev/articles/same-site-same-origin#site) of the `configURL`.
   2. The config file (`/config.json`), available at the `configURL`.

   These are both a [`GET`](/en-US/docs/Web/HTTP/Methods/GET) requests, which don't have cookies and don't follow redirects. This effectively prevents the IdP from learning who made the request and which RP is attempting to connect.

   For example, the config file request would look like so:

   ```http
   GET /config.json HTTP/1.1
   Host: accounts.idp.example
   Accept: application/json
   Sec-Fetch-Dest: webidentity
   ```

   > **Note:** All requests sent from the browser via FedCM include a `Sec-Fetch-Dest: webidentity` header to prevent {{glossary("CSRF")}} attacks. All IdP endpoints must confirm this header is included.

3. The IdP responds with the requested files. The config file URL is validated against the list of valid config URLs inside the well-known file.

4. If the browser has the [IdP's login status](#update_login_status_using_the_login_status_api) set to `"logged-in"`, it makes a request to the `accounts_endpoint` inside the [IdP config file](#provide_a_config_file_and_endpoints) for the list of accounts that the user is currently signed in to (if the login status is `"logged-out"`, the `get()` call silently fails). This is a `GET` request with cookies, but without a `client_id` parameter or the {{httpheader("Origin")}} header. This effectively prevents the IdP from learning which RP the user is trying to sign in to.

   For example:

   ```http
   GET /accounts.php HTTP/1.1
   Host: accounts.idp.example
   Accept: application/json
   Cookie: 0x23223
   Sec-Fetch-Dest: webidentity
   ```

5. The IdP responds with the account information.

6. {{optional_inline}} If included in the IdP config file, the browser makes a request to the `client_metadata_endpoint` for the location of the IdP terms of service and privacy policy pages. This is a `GET` request sent with the `clientId` passed into the `get()` call as a parameter, without cookies.

   For example:

   ```http
   GET /client_metadata.php?client_id=1234 HTTP/1.1
   Host: accounts.idp.example
   Origin: https://rp.example/
   Accept: application/json
   Sec-Fetch-Dest: webidentity
   ```

7. {{optional_inline}} The IdP responds with the requested URLs.

8. The browser uses the information obtained by the previous two requests to create the UI asking the user for permission to sign in to the RP using their federated IdP account.

9. If the user grants permission to do so, the browser sends some credentials to the `id_assertion_endpoint` and requests a validation token from the IdP.

   The credentials are sent in an HTTP [`POST`](/en-US/docs/Web/HTTP/Methods/POST) request with cookies and a content type of `application/x-www-form-urlencoded`. It should look something like this:

   ```http
   POST /assertion.php HTTP/1.1
   Host: accounts.idp.example
   Origin: https://rp.example/
   Content-Type: application/x-www-form-urlencoded
   Cookie: 0x23223
   Sec-Fetch-Dest: webidentity
   account_id=123&client_id=client1234&nonce=Ct60bD&disclosure_text_shown=true&is_auto_selected=true
   ```

   The payload should contain the following:

   - `client_id`
     - : The RP's client identifier.
   - `account_id`
     - : The unique ID of the user account to be signed in.
   - `nonce` {{optional_inline}}
     - : The request nonce, provided by the RP.
   - `disclosure_text_shown`
     - : A string of `"true"` or `"false"` indicating whether the disclosure text was shown or not. The disclosure text is the information shown to the user (which can include the terms of service and privacy policy links, if provided) if the user is signed in to the IdP but doesn't have an account specifically on the current RP (in which case they'd need to choose to "Continue as..." their IdP identity and then create a corresponding account on the RP).
   - `is_auto_selected`
     - : A string of `"true"` or `"false"` indicating whether the authentication validation request has been issued as a result of automatic reauthentication, i.e. without user mediation. This can occur when the {{domxref("CredentialsContainer.get", "get()")}} call is issued with a [`mediation`](/en-US/docs/Web/API/CredentialsContainer/get#mediation) option value of `"optional"` or `"silent"`. It is useful for the IdP to know whether auto reauthentication occurred for performance evaluation and in case higher security is desired. For example, the IdP could return an error code telling the RP that it requires explicit user mediation (`mediation="required"`).

   > **Note:** If the {{domxref("CredentialsContainer.get", "get()")}} call succeeds, the `is_auto_selected` value is also communicated to the RP via the {{domxref("IdentityCredential.isAutoSelected")}} property.

   If the call fails, an error payload is returned as explained in [The ID assertion endpoint](/en-US/docs/Web/API/FedCM_API#the_id_assertion_endpoint).

10. The IdP checks that the account ID sent by the RP matches the ID for the account that is already signed in, and that the `Origin` matches the origin of the RP, which will have been registered in advance with the IdP. If everything looks good, it responds with the validation token.

> **Note:** The origin of the RP will be registered with the IdP in a completely separate process when the RP first integrates with the IdP. This process will be specific to each IdP.

When the flow is complete, the RP validates the validation token. If validation is successful, the `get()` promise resolves with an {{domxref("IdentityCredential")}} object, which provides further RP functionality. Additionally, at this point the RP may register the user or let them sign in and start a new session.

## Features available via IdentityCredential

The {{domxref("IdentityCredential")}} object obtained from a successful FedCM sign-in provides access to the token used to validate the sign-in (see {{domxref("IdentityCredential.token")}}) and an indication of whether the federated sign-in was carried out using automatic reauthentication, i.e. without user mediation (see {{domxref("IdentityCredential.isAutoSelected")}}).

## See also

- [Federated Credential Management API](https://developer.chrome.com/docs/privacy-sandbox/fedcm/) on developer.chrome.com (2023)

---
title: Federated Credential Management (FedCM) API
slug: Web/API/FedCM_API
page-type: web-api-overview
status:
  - experimental
browser-compat: api.IdentityCredential
---

{{SeeCompatTable}}{{DefaultAPISidebar("FedCM API")}}

The **Federated Credential Management API** (or _FedCM API_) provides a standard mechanism for identity providers (IdPs) to make identity federation services available on the web in a privacy-preserving way, without the need for third-party cookies and redirects. This includes a JavaScript API that enables the use of federated authentication for activities such as signing in or signing up on a website.

## FedCM concepts

Identity federation is the delegation of user authentication from a website requiring user sign-up or sign-in, such as an e-commerce or social networking site (also known as a relying party or RP), to a trusted third-party IdP. Users register an account with the IdP, which can then be used for signing in on multiple RPs. Identity federation via a small set of dedicated IdPs has improved web authentication in terms of security, consumer confidence, and user experience, as compared to each site managing its own sign-in needs with separate usernames and passwords.

The problem is that traditional identity federation relies on {{htmlelement("iframe")}}s, redirects, and third-party cookies, which are also used for third-party tracking. Browsers are limiting the usage of these features in an effort to preserve user privacy, but a side effect is that this makes valid, non-tracking uses more difficult to implement, and this includes identity federation.

Affected identity federation use cases that rely on third-party cookies:

- [OIDC front-channel logout](https://openid.net/specs/openid-connect-frontchannel-1_0.html): This flow requires the IDP to embed several RP `<iframe>`s, which rely on RP cookies.
- Social Widgets: In order to provide social widgets, the IdP third-party cookie must be provided from the RP top-level origin.
- Personalized buttons: The display of personalized sign in information on a {{htmlelement("button")}} in the RP origin is implemented as an IdP `<iframe>` that requires third party cookies.
- Session Refresh without top-level navigation or popups.

FedCM aims to work around this problem, providing a dedicated mechanism for federated identity flows on the web, and enabling supporting browsers to provide special UI elements on RPs, allowing users to choose an IdP account to use for sign-in.

There are two parts to using the FedCM API: IdP integration with FedCM and RP sign-in using the JavaScript API.

## IdP integration with FedCM

To integrate with FedCM, an IdP needs to do the following:

1. Provide a well-known file to identify the IdP.
2. Provide a config file and endpoints for accounts list and assertion issuance (and optionally, client metadata).

### Provide a well-known file

There is a potential privacy issue whereby an [IdP is able to discern whether a user visited an RP without explicit consent](https://github.com/fedidcg/FedCM/issues/230). This has tracking implications, so an IdP is required to provide a well-known file to verify its identity and mitigate this issue.

The well-known file must be served from the [eTLD+1](https://web.dev/articles/same-site-same-origin#site) of the IdP at `/.well-known/web-identity`.

For example, if the IdP endpoints are served under `https://accounts.idp.example/`, they must serve a well-known file at `https://idp.example/.well-known/web-identity`. The well-known file's content should have the following JSON structure:

```json
{
  "provider_urls": ["https://accounts.idp.example/config.json"]
}
```

The `provider_urls` member should contain an array of URLs pointing to valid IdP config files that can be used by RPs to interact with the IdP. The array length is currently limited to one.

### Provide a config file

The IdP config file provides a list of the endpoints the browser needs to process the identity federation flow and manage the sign-ins. IdPs will host both this config file and the required endpoints.

The config file (hosted at `https://accounts.idp.example/config.json` in our example) should have the following JSON structure:

```json
{
  "accounts_endpoint": "/accounts.php",
  "client_metadata_endpoint": "/client_metadata.php",
  "id_assertion_endpoint": "/assertion.php",
  "branding": {
    "background_color": "green",
    "color": "0xFFEEAA",
    "icons": [
      {
        "url": "https://idp.example/icon.ico",
        "size": 25
      }
    ]
  }
}
```

The properties are as follows:

- `accounts_endpoint`
  - : The URL for the accounts list endpoint, which returns a list of accounts that the user is currently signed in to on the IdP. The browser uses these to create a list of sign-in choices to show to the user in the browser-provided FedCM UI.
- `client_metadata_endpoint` {{optional_inline}}
  - : The URL for the client metadata endpoint, which provides URLs pointing to the RP's metadata and terms of service pages, to be used in the FedCM UI.
- `id_assertion_endpoint`
  - : The URL for the ID assertion endpoint, which when sent valid user credentials should respond with a validation token that the RP can use to validate the authentication.
- `branding` {{optional_inline}}
  - : Contains branding information that will be used in the browser-supplied FedCM UI to customize its appearance as desired by the IdP.

#### The accounts list endpoint

This endpoint returns a list of all the IdP accounts that the user is currently signed in with, with a JSON structure that matches the following:

```json
{
  "accounts": [
    {
      "id": "john_doe",
      "given_name": "John",
      "name": "John Doe",
      "email": "john_doe@idp.example",
      "picture": "https://idp.example/profile/123",
      "approved_clients": ["123", "456", "789"],
      "login_hints": ["john_doe", "john_doe@idp.example"]
    },
    {
      "id": "johnny",
      "given_name": "Johnny",
      "name": "Johnny",
      "email": "johnny@idp.example",
      "picture": "https://idp.example/profile/456",
      "approved_clients": ["abc", "def", "ghi"],
      "login_hints": ["johnny", "johnny@idp.example"]
    }
  ]
}
```

This includes the following information:

- `id`
  - : The unique ID of the user.
- `name`
  - : The family name of the user.
- `email`
  - : The email address of the user.
- `given_name` {{optional_inline}}
  - : The given name of the user.
- `picture` {{optional_inline}}
  - : The URL of the user's avatar image.
- `approved_clients` {{optional_inline}}
  - : An array of RP clients that the user has registered with.
- `login_hints` {{optional_inline}}
  - : An array of strings representing the account. These strings are used to filter the list of account options that the browser offers for the user to sign-in. This occurs when the `loginHint` property is provided within [`identity.providers`](/en-US/docs/Web/API/CredentialsContainer/get#identity_object_structure) in a related `get()` call. Any account with a string in its `login_hints` array that matches the provided `loginHint` is included.

> **Note:**: If the user is not signed in to any IdP accounts, the endpoint should respond with [HTTP 401 (Unauthorized)](/en-US/docs/Web/HTTP/Status/401).

#### The client metadata endpoint

Provides URLs pointing to the RP's metadata and terms of service pages, to be used in the browser-supplied FedCM UI. This should follow the JSON structure seen below:

```json
{
  "privacy_policy_url": "https://rp.example/privacy_policy.html",
  "terms_of_service_url": "https://rp.example/terms_of_service.html"
}
```

#### The ID assertion endpoint

When sent valid user credentials, this endpoint should respond with a validation token that the RP can use to validate the authentication:

```json
{
  "token": "***********"
}
```

## RP sign-in using the JavaScript API

RPs can call {{domxref("CredentialsContainer.get", "navigator.credentials.get()")}} with an `identity` option to make a request for users to sign in to the RP with the IdP, using the available IdP config and endpoints (as described above). A typical request might look like this:

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

### FedCM sign-in flow

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

4. The browser makes a request to the `accounts_endpoint` inside the config file for the list of accounts that the user is currently signed in to on the IdP. This is a `GET` request with cookies, but without a `client_id` parameter or the {{httpheader("Origin")}} header. This effectively prevents the IdP from learning which RP the user is trying to sign in to.

   For example:

   ```http
   GET /accounts.php HTTP/1.1
   Host: accounts.idp.example
   Accept: application/json
   Cookie: 0x23223
   Sec-Fetch-Dest: webidentity
   ```

5. The IdP responds with the account information.

6. {{optional_inline}} If included in the config file, the browser makes a request to the `client_metadata_endpoint` for the location of the RP's terms of service and privacy policy pages. This is a `GET` request sent with the `clientId` passed into the `get()` call as a parameter, without cookies.

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
   account_id=123&client_id=client1234&nonce=Ct60bD&disclosure_text_shown=true
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

10. The IdP checks that the account ID sent by the RP matches the ID for the account that is already signed in, and that the `Origin` matches the origin of the RP, which will have been registered in advance with the IdP. If everything looks good, it responds with the validation token.

> **Note:** The origin of the RP will be registered with the IdP in a completely separate process when the RP first integrates with the IdP. This process will be specific to each IdP.

When the flow is complete, the RP validates the validation token. If validation is successful, the `get()` promise resolves with an {{domxref("IdentityCredential")}} object, which provides further RP functionality. Additionally, at this point the RP may register the user or let them sign in and start a new session.

### Features available via IdentityCredential

The {{domxref("IdentityCredential")}} object obtained from a successful FedCM sign-in provides access to the token used to validate the sign-in (see {{domxref("IdentityCredential.token")}}).

## Permissions Policy integration and IFrame support

The {{httpheader("Permissions-Policy/identity-credentials-get", "identity-credentials-get")}} [Permissions-Policy](/en-US/docs/Web/HTTP/Permissions_Policy) can be used to control permission to use FedCM, more specifically usage of the {{domxref("CredentialsContainer.get", "navigator.credentials.get()")}} method.

Developers can explicitly grant permission for an {{htmlelement("iframe")}} to use FedCM via the `allow` attribute:

```html
<iframe src="3rd-party.example" allow="identity-credentials-get"></iframe>
```

The availability of FedCM within `<iframe>`s enables a couple of use cases:

- Larger sites won't want a third-party sign-in script to gain control over the top-level frame; instead they will want to add that script and invoke FedCM from within an {{htmlelement("iframe")}}.
- Some `<iframes>` may themselves require federated authentication.

## Interfaces

- {{domxref("IdentityCredential")}}
  - : Represents a user identity credential arising from successful federated authentication. A successful {{domxref("CredentialsContainer.get", "navigator.credentials.get()")}} call that includes an `identity` option fulfills with an {{domxref("IdentityCredential")}} instance.
- {{domxref("IdentityProvider")}}
  - : Represents an IdP and provides access to related information. The static {{domxref("IdentityProvider.getUserInfo_static", "IdentityProvider.getUserInfo()")}} method returns information about a user who was previously signed in, when they return to an IdP. This information can be used to display a personalized welcome message and sign-in button.

## Extensions to other interfaces

- {{domxref("CredentialsContainer.get()")}}, the `identity` option.
  - : `identity` is an object containing details of federated IdPs that a relying party (RP) website can use to sign users in. It causes a `get()` call to initiate a request for a user to sign in to an RP with an IdP.

## Examples

- [FedCM sign-in example](https://fedcm-rp-demo.glitch.me/)
  - [RP source code](https://glitch.com/edit/#!/fedcm-rp-demo?path=server.js%3A1%3A0)
  - [IdP source code](https://glitch.com/edit/#!/fedcm-idp-demo?path=server.js%3A1%3A0)
- [FedCM `<iframe>` sign-in](https://fedcm-main-frame.glitch.me/)
  - [RP `<iframe>` page source code](https://glitch.com/edit/#!/fedcm-main-frame?path=index.html%3A1%3A0)
  - [IdP source code](https://glitch.com/edit/#!/webid-fcm-idp-single?path=server.js%3A1%3A0)

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Federated Credential Management API](https://developer.chrome.com/docs/privacy-sandbox/fedcm/)

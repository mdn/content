---
title: Identity provider integration with FedCM
slug: Web/API/FedCM_API/IDP_integration
page-type: guide
---

{{DefaultAPISidebar("FedCM API")}}

This article details all the steps an identity provider (IdP) needs to take to integrate with the Federated Credential Management (FedCM) API.

## IdP integration steps

To integrate with FedCM, an IdP needs to do the following:

1. [Provide a well-known file](#provide_a_well-known_file) to identify the IdP.
2. [Provide a config file and endpoints](#provide_a_config_file_and_endpoints) for accounts list and assertion issuance (and optionally, client metadata).
3. [Update its login status](#update_login_status_using_the_login_status_api) using the Login Status API.

## Provide a well-known file

There is a potential privacy issue whereby an [IdP is able to discern whether a user visited an RP without explicit consent](https://github.com/w3c-fedid/FedCM/issues/230). This has tracking implications, so an IdP is required to provide a well-known file to verify its identity and mitigate this issue.

The well-known file is requested via an uncredentialed [`GET`](/en-US/docs/Web/HTTP/Methods/GET) request, which doesn't follow redirects. This effectively prevents the IdP from learning who made the request and which RP is attempting to connect.

The well-known file must be served from the [eTLD+1](https://web.dev/articles/same-site-same-origin#site) of the IdP at `/.well-known/web-identity`. For example, if the IdP endpoints are served under `https://accounts.idp.example/`, they must serve a well-known file at `https://idp.example/.well-known/web-identity`. The well-known file's content should have the following JSON structure:

```json
{
  "provider_urls": ["https://accounts.idp.example/config.json"]
}
```

The `provider_urls` member should contain an array of URLs pointing to valid IdP config files that can be used by RPs to interact with the IdP. The array length is currently limited to one.

## The `Sec-Fetch-Dest` HTTP header

All requests sent from the browser via FedCM include a `{{httpheader("Sec-Fetch-Dest")}}: webidentity` header. All IdP endpoints that receive credentialed requests (i.e. `accounts_endpoint` and `id_assertion_endpoint`) must confirm this header is included to protect against {{glossary("CSRF")}} attacks.

## Provide a config file and endpoints

The IdP config file provides a list of the endpoints the browser needs to process the identity federation flow and manage the sign-ins. The endpoints need to be same-origin with the config.

The browser makes an uncredentialed request for the config file via the [`GET`](/en-US/docs/Web/HTTP/Methods/GET) method, which doesn't follow redirects. This effectively prevents the IdP from learning who made the request and which RP is attempting to connect.

The config file (hosted at `https://accounts.idp.example/config.json` in our example) should have the following JSON structure:

```json
{
  "accounts_endpoint": "/accounts.php",
  "client_metadata_endpoint": "/client_metadata.php",
  "id_assertion_endpoint": "/assertion.php",
  "login_url": "/login",
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
- `login_url`
  - : The login page URL for the user to sign into the IdP.
- `branding` {{optional_inline}}
  - : Contains branding information that will be used in the browser-supplied FedCM UI to customize its appearance as desired by the IdP.

The following table summarizes the different requests made by the FedCM API:

| Endpoint/resource          | Method | Credentialed (with cookies) | Includes {{httpheader("Origin")}} |
| -------------------------- | ------ | --------------------------- | --------------------------------- |
| `well-known`/`config.json` | `GET`  | No                          | No                                |
| `accounts_endpoint`        | `GET`  | Yes                         | No                                |
| `client_metadata_endpoint` | `GET`  | No                          | Yes                               |
| `id_assertion_endpoint`    | `POST` | Yes                         | Yes                               |

> [!NOTE]
> For a description of the FedCM flow in which these endpoints are accessed, see [FedCM sign-in flow](/en-US/docs/Web/API/FedCM_API/RP_sign-in#fedcm_sign-in_flow).

> [!NOTE]
> None of the requests made by the FedCM API to the endpoints detailed here allow for following redirects, for privacy purposes.

### The accounts list endpoint

The browser sends credentialed requests (i.e. with a cookie that identifies the user that is signed in) to this endpoint via the `GET` method. The request has no `client_id` parameter, {{httpheader("Origin")}} header, or {{httpheader("Referer")}} header. This effectively prevents the IdP from learning which RP the user is trying to sign in to. The list of accounts returned is RP-agnostic.

For example:

```http
GET /accounts.php HTTP/1.1
Host: idp.example
Accept: application/json
Cookie: 0x23223
Sec-Fetch-Dest: webidentity
```

The response to a successful request returns a list of all the IdP accounts that the user is currently signed in with (not specific to any particular RP), with a JSON structure that matches the following:

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
  - : An array of strings representing the account. These strings are used to filter the list of account options that the browser offers for the user to sign-in. This occurs when the `loginHint` property is provided within [`identity.providers`](/en-US/docs/Web/API/CredentialsContainer/get#providers_2) in a related `get()` call. Any account with a string in its `login_hints` array that matches the provided `loginHint` is included.

> [!NOTE]
> If the user is not signed in to any IdP accounts, the endpoint should respond with [HTTP 401 (Unauthorized)](/en-US/docs/Web/HTTP/Status/401).

### The client metadata endpoint

The browser sends uncredentialed requests to this endpoint via the `GET` method, with the `clientId` passed into the `get()` call as a parameter.

For example:

```http
GET /client_metadata.php?client_id=1234 HTTP/1.1
Host: idp.example
Origin: https://rp.example/
Accept: application/json
Sec-Fetch-Dest: webidentity
```

The response to a successful request includes URLs pointing to the RP's metadata and terms of service pages, to be used in the browser-supplied FedCM UI. This should follow the JSON structure seen below:

```json
{
  "privacy_policy_url": "https://rp.example/privacy_policy.html",
  "terms_of_service_url": "https://rp.example/terms_of_service.html"
}
```

### The ID assertion endpoint

The browser sends credentialed requests to this endpoint via the [`POST`](/en-US/docs/Web/HTTP/Methods/POST) method, with a content type of `application/x-www-form-urlencoded`. The request also includes a payload including details about the attempted sign-in and the account to be validated.

It should look something like this:

```http
POST /assertion.php HTTP/1.1
Host: idp.example
Origin: https://rp.example/
Content-Type: application/x-www-form-urlencoded
Cookie: 0x23223
Sec-Fetch-Dest: webidentity
account_id=123&client_id=client1234&nonce=Ct60bD&disclosure_text_shown=true&is_auto_selected=true
```

A request to this endpoint is sent as a result of the user choosing an account to sign in with from the relevant browser UI. When sent valid user credentials, this endpoint should respond with a validation token that the RP can use to validate the user on its own server, according to the usage instructions outlined by the IdP they are using for identity federation. Once the RP validates the user, they can sign them in, sign them up to their service, etc.

```json
{
  "token": "***********"
}
```

The request payload contains the following params:

- `client_id`
  - : The RP's client identifier (which matches the `clientId` from the original `get()` request).
- `account_id`
  - : The unique ID of the user account to be signed in (which matches the user's `id` from the accounts list endpoint response).
- `nonce` {{optional_inline}}
  - : The request nonce, provided by the RP.
- `disclosure_text_shown`
  - : A string of `"true"` or `"false"` indicating whether the disclosure text was shown or not. The disclosure text is the information shown to the user (which can include the terms of service and privacy policy links, if provided) if the user is signed in to the IdP but doesn't have an account specifically on the current RP (in which case they'd need to choose to "Continue as..." their IdP identity and then create a corresponding account on the RP).
- `is_auto_selected`
  - : A string of `"true"` or `"false"` indicating whether the authentication validation request has been issued as a result of [auto-reauthentication](/en-US/docs/Web/API/FedCM_API/RP_sign-in#auto-reauthentication), i.e. without user mediation. This can occur when the {{domxref("CredentialsContainer.get", "get()")}} call is issued with a [`mediation`](/en-US/docs/Web/API/CredentialsContainer/get#mediation) option value of `"optional"` or `"silent"`. It is useful for the IdP to know whether auto reauthentication occurred for performance evaluation and in case higher security is desired. For example, the IdP could return an error code telling the RP that it requires explicit user mediation (`mediation="required"`).

> [!NOTE]
> If the {{domxref("CredentialsContainer.get", "get()")}} call succeeds, the `is_auto_selected` value is also communicated to the RP via the {{domxref("IdentityCredential.isAutoSelected")}} property.

#### ID assertion error responses

If the IdP cannot issue a token — for example if the client is unauthorized — the ID assertion endpoint will respond with an error response containing information about the nature of the error. For example:

```json
{
  "error": {
    "code": "access_denied",
    "url": "https://idp.example/error?type=access_denied"
  }
}
```

The error response fields are as follows:

- `code` {{optional_inline}}
  - : A string. This can be either a known error from the [OAuth 2.0 specified error list](https://datatracker.ietf.org/doc/html/rfc6749#section-4.1.2.1) or an arbitrary string.
- `url` {{optional_inline}}
  - : A URL. This should be a web page containing human-readable information about the error to display to users, such as how to fix the error or contact customer. The URL must be same-site with the IdP's config URL.

This information can be used in a couple of different ways:

- The browser can display a custom UI to the user informing them of what went wrong (see the [Chrome documentation](https://developers.google.com/privacy-sandbox/blog/fedcm-chrome-120-updates#error-api) for an example). Bear in mind that if the request failed because the IdP server is unavailable, it obviously can't return any information. In such cases, the browser will report this via a generic message.
- The associated RP {{domxref("CredentialsContainer.get", "navigator.credentials.get()")}} call used to attempt sign-in will reject its promise with an `IdentityCredentialError`, which contains the error information. An RP can catch this error and then follow up the browser's custom UI with some information to help the user succeed in a future sign-in attempt.

## Update login status using the Login Status API

The **Login Status API** allows an IdP to inform a browser of its login (sign-in) status in that particular browser — by this, we mean "whether any users are logged into the IdP on the current browser or not". The browser stores this state for each IdP; the FedCM API then uses it to reduce the number of requests it makes to the IdP (because it does not need to waste time requesting accounts when there are no users logged in to the IdP). It also mitigates [potential timing attacks](https://github.com/w3c-fedid/FedCM/issues/447).

For each known IdP (identified by its config URL) the browser keeps a tri-state variable representing the login state with three possible values:

- `"logged-in"`: The IdP has at least one user account signed in. Note that, at this stage, the RP and browser don't know which user that is. Information on specific users is returned from the IdP's [`accounts_endpoint`](#the_accounts_list_endpoint) at a later point in the FedCM flow.
- `"logged-out"`: All IdP accounts are currently signed out.
- `"unknown"`: The sign-in status of this IdP is not known. This is the default value.

### Setting login status

The IdP should update its login status when a user signs into or out of the IdP. This can be done in two different ways:

- The {{httpheader("Set-Login")}} HTTP response header can be set in a top-level navigation or a same-origin subresource request:

  ```http
  Set-Login: logged-in

  Set-Login: logged-out
  ```

- The {{domxref("NavigatorLogin.setStatus", "Navigator.login.setStatus()")}} method can be called from the IdP origin:

  ```js
  /* Set logged-in status */
  navigator.login.setStatus("logged-in");

  /* Set logged-out status */
  navigator.login.setStatus("logged-out");
  ```

### How login status affects federated sign-in flow

When an [RP attempts federated sign-in](/en-US/docs/Web/API/FedCM_API/RP_sign-in), the login status is checked:

- If the login status is `"logged-in"`, a request is made to the IdP's [accounts list endpoint](#the_accounts_list_endpoint) and available accounts for sign-in are displayed to the user in the browser-provided FedCM dialog.
- If the login status is `"logged-out"`, the promise returned by the FedCM `get()` request rejects without making a request to the accounts list endpoint. In such a case it is up to the developer to handle the flow, for example by prompting the user to go and sign in to a suitable IdP.
- If the login status is `"unknown"`, a request is made to the IdP's accounts list endpoint and the login status is updated depending on the response:
  - If the endpoint returns a list of available accounts for sign-in, update the status to `"logged-in"` and display the sign-in options to the user in the browser-provided FedCM dialog.
  - If the endpoint returns no accounts, update the status to `"logged-out"`; the promise returned by the FedCM `get()` request then rejects.

### What if the browser and the IdP login status become out of sync?

Despite the Login Status API informing the browser of the IdP's login status, it is possible for the browser and IdP to become out of sync. For example, the IdP sessions might expire, meaning that all user accounts end up signed out but the login status is still set to `"logged-in"` (the application was not able to set the login status to `"logged-out"`). In such a case, when federated sign-in is attempted, a request will be made to the IdP's accounts list endpoint but no available accounts will be returned because the session is no longer available.

When this occurs, the browser can dynamically let a user sign into the IdP by opening the IdP's sign-in page in a dialog (the sign-in URL is found in the IdP's [config file](#provide_a_config_file_and_endpoints) `login_url` ). The exact nature of this flow is up to the browser; for example, [Chrome handles it like this](https://developers.google.com/privacy-sandbox/blog/fedcm-chrome-120-updates#what_if_the_user_session_expires_let_the_user_sign_in_through_a_dynamic_login_flow).

Once the user is signed in to the IdP, the IdP should:

- Inform the browser that the user has signed in by [setting login status](#setting_login_status) to `"logged-in"`.
- Close the sign-in dialog by calling the {{domxref("IdentityProvider.close_static", "IdentityProvider.close()")}} method.

## See also

- [Federated Credential Management API](https://developers.google.com/privacy-sandbox/cookies/fedcm) on developers.google.com (2023)

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

There is a potential privacy issue whereby an [IdP is able to discern whether a user visited an RP without explicit consent](https://github.com/fedidcg/FedCM/issues/230). This has tracking implications, so an IdP is required to provide a well-known file to verify its identity and mitigate this issue.

The well-known file must be served from the [eTLD+1](https://web.dev/articles/same-site-same-origin#site) of the IdP at `/.well-known/web-identity`.

For example, if the IdP endpoints are served under `https://accounts.idp.example/`, they must serve a well-known file at `https://idp.example/.well-known/web-identity`. The well-known file's content should have the following JSON structure:

```json
{
  "provider_urls": ["https://accounts.idp.example/config.json"]
}
```

The `provider_urls` member should contain an array of URLs pointing to valid IdP config files that can be used by RPs to interact with the IdP. The array length is currently limited to one.

## Provide a config file and endpoints

The IdP config file provides a list of the endpoints the browser needs to process the identity federation flow and manage the sign-ins. IdPs will host both this config file and the required endpoints.

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

### The accounts list endpoint

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
  - : An array of strings representing the account. These strings are used to filter the list of account options that the browser offers for the user to sign-in. This occurs when the `loginHint` property is provided within [`identity.providers`](/en-US/docs/Web/API/CredentialsContainer/get#providers_2) in a related `get()` call. Any account with a string in its `login_hints` array that matches the provided `loginHint` is included.

> **Note:**: If the user is not signed in to any IdP accounts, the endpoint should respond with [HTTP 401 (Unauthorized)](/en-US/docs/Web/HTTP/Status/401).

### The client metadata endpoint

Provides URLs pointing to the RP's metadata and terms of service pages, to be used in the browser-supplied FedCM UI. This should follow the JSON structure seen below:

```json
{
  "privacy_policy_url": "https://rp.example/privacy_policy.html",
  "terms_of_service_url": "https://rp.example/terms_of_service.html"
}
```

### The ID assertion endpoint

When sent valid user credentials, this endpoint should respond with a validation token that the RP can use to validate the authentication:

```json
{
  "token": "***********"
}
```

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

- `code`
  - : A string. This can be either a known error from the [OAuth 2.0 specified error list](https://datatracker.ietf.org/doc/html/rfc6749#section-4.1.2.1) or an arbitrary string.
- `url`
  - : A URL. This should be a web page containing human-readable information about the error to display to users, such as how to fix the error or contact customer. The URL must be same-site with the IdP's config URL.

This information can be used in a couple of different ways:

- The browser can use the information to display a custom UI to the user informing them what went wrong (see the [Chrome documentation](https://developers.google.com/privacy-sandbox/blog/fedcm-chrome-120-updates#error-api) for an example). Bear in mind that if the request failed because the IdP server is unavailable, it obviously can't return any information. In such cases, the browser will report this via a generic message.
- The associated RP {{domxref("CredentialsContainer.get", "navigator.credentials.get()")}} call used to attempt sign-in will return the above information when the promise rejects. The [`get()` Error API example](/en-US/docs/Web/API/CredentialsContainer/get#example_including_error_api_information) shows what this looks like.

## Update login status using the Login Status API

The **Login Status API** allows an IdP to inform a browser of the current user's login (sign-in) status with that IdP. This allows the browser to reduce the number of requests it makes to the IdP and mitigates [potential timing attacks](https://github.com/fedidcg/FedCM/issues/447). It also means that an IdP no longer needs to rely on third-party cookies to keep track of its login status on different browsers, which helps to improve user privacy.

For each known IdP (identified by its config URL) the browser keeps a tri-state variable representing the login state with three possible values:

- `"logged-in"`: The user has at least one account signed in to this IdP.
- `"logged-out"`: The user is signed out of this IdP from all accounts.
- `"unknown"`: The sign-in status of this user with this IdP is not known. This is the default value.

### Setting login status

The IdP should update the user's login status when they sign in to or out of the IdP. This can be done in two different ways:

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

Later on, when an [RP attempts federated sign-in](/en-US/docs/Web/API/FedCM_API/RP_sign-in), the login status is checked:

- If the login status is `"logged-in"`, a request is made to the IdP's [accounts list endpoint](#the_accounts_list_endpoint) and available accounts for sign-in are displayed to the user in the browser-provided FedCM dialog.
- If the login status is `"logged-out"`, no HTTP request is made, and the FedCM request fails silently. In such a case it is up to the developer to handle the flow, for example by prompting the user to go and sign in to a suitable IdP.
- If the login status is `"unknown"`, a request is made to the IdP's accounts list endpoint and the login status is updated depending on the response:
  - If the endpoint returns a list of available accounts for sign-in, update the status to `"logged-in"` and display the sign-in options to the user in the browser-provided FedCM dialog.
  - If the endpoint returns no accounts, update the status to `"logged-out"`; the FedCM request then fails silently.

### What if the browser and the IdP login status become out of sync?

Despite the Login Status API informing the browser of the user's login status with an IdP, it is possible for the browser and IdP to become out of sync. For example, the IdP session might expire, meaning that the user ends up signed out without the application having a chance to set the login status to `"logged-out"`. When federated sign-in is attempted, a request will then be made to the IdP's accounts list endpoint but no available accounts will be returned because the session is no longer available.

In such a case, the browser can dynamically let the user sign in to the IdP via a specific flow, involving redirecting the user to the IdP's sign-in page (the sign-in URL is found in the IdP's [config file](#provide_a_config_file_and_endpoints)). The exact nature of this flow is up to the browser; for example, [Chrome handles it like this](https://developers.google.com/privacy-sandbox/blog/fedcm-chrome-120-updates#what_if_the_user_session_expires_let_the_user_sign_in_through_a_dynamic_login_flow).

Once the user is signed in to the IdP, the IdP should:

- Inform the browser that the user has signed in by [setting login status](#setting_login_status) to `"logged-in"`.
- Close the sign in dialog by calling the {{domxref("IdentityProvider.close_static", "IdentityProvider.close()")}} method.

## See also

- [Federated Credential Management API](https://developer.chrome.com/docs/privacy-sandbox/fedcm/) on developer.chrome.com (2023)

---
title: identity.launchWebAuthFlow
slug: Mozilla/Add-ons/WebExtensions/API/identity/launchWebAuthFlow
page-type: webextension-api-function
browser-compat: webextensions.api.identity.launchWebAuthFlow
---

{{AddonSidebar}}

Performs the first part of an [OAuth2](https://oauth.net/2/) flow, including user authentication and client authorization.

This function's only mandatory parameter is the service provider's authorization URL, which must contain a number of URL parameters including the [redirect URL](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/identity#getting_the_redirect_url) and the extension's [client ID](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/identity#registering_your_extension). The service provider then:

- authenticates the user with the service provider, if necessary (that is: if they are not already signed in)
- asks the user to authorize the extension to access the requested data, if necessary (that is: if the user has not already authorized the extension)

Note that if neither authentication or authorization are needed, then this function will complete silently, without any user interaction.

This function also takes an optional parameter `interactive`: if this is omitted or set to false, then the flow is forced to complete silently. In this case, if the user has to authenticate or authorize, then the operation will just fail.

This function returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise): if authentication and authorization were successful, the promise is fulfilled with a redirect URL that contains a number of URL parameters. Depending on the OAuth2 flow implemented by the service provider in question, the extension will need to go through further steps to get a valid access code, which it can then use to access the user's data.

If there's any error, the promise is rejected with an error message. Error conditions may include:

- the service provider's URL could not be reached
- the client ID did not match the ID of a registered client
- the redirect URL did not match any redirect URLs registered for this client
- the user did not authenticate successfully
- the user did not authorize the extension
- the `interactive` parameter was omitted or false, but user interaction would have been needed to authorize the extension.

## Syntax

```js-nolint
let authorizing = browser.identity.launchWebAuthFlow(
  details   // object
)
```

### Parameters

- `details`

  - : `object`. Options for the flow, containing the following properties:

    - `url`
      - : `string`. The URL offered by the OAuth2 service provider to get an access token. The details of this URL should be given in the documentation for the service provider in question, but the URL parameters should always include: the [redirect URL](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/identity#getting_the_redirect_url) and the extension's [client ID](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/identity#registering_your_extension).
    - `redirect_uri` {{optional_inline}}
      - : `string`. This represents the URI your extension is redirected to when the flow has finished. Not required for the flow to work on the browser side if it matches the generated redirect URL. See [Getting the redirect URL](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/identity#getting_the_redirect_url).
    - `interactive` {{optional_inline}}

      - : `boolean`. If omitted or `false`, forces the flow to complete silently, without any user interaction.

        If the user is already signed in and has already granted access for the extension, then `launchWebAuthFlow()` can complete silently, without any user interaction. Otherwise (if the service provider needs the user to sign in, or to authorize the extension), then `launchWebAuthFlow()` will prompt the user: that is, the flow will be interactive.

        Extensions should not launch interactive flows except in response to a user action. However, sometimes extensions still want to access the user's data without a direct user action (for example, imagine an extension that wants to access data when the browser launches).

        This is the purpose of `interactive`: if you omit `interactive` or set it to `false`, then the flow is forced to conclude silently: if the service provider needs to interact with the user, the flow will just fail. So as a general rule: set `interactive` to `true` if you're launching the flow in response to a user action, and omit it otherwise.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise). If the extension is authorized successfully, this will be fulfilled with a string containing the redirect URL. The URL will include a parameter that either is an access token or can be exchanged for an access token, using the documented flow for the particular service provider.

## Browser compatibility

{{Compat}}

## Examples

This function authorizes an extension to access a user's Google data, according to the documentation at <https://developers.google.com/identity/protocols/oauth2/javascript-implicit-flow>. Validation of the returned access token isn't shown here:

```js
function validate(redirectURL) {
  // validate the access token
}

function authorize() {
  const redirectURL = browser.identity.getRedirectURL();
  const clientID =
    "664583959686-fhvksj46jkd9j5v96vsmvs406jgndmic.apps.googleusercontent.com";
  const scopes = ["openid", "email", "profile"];
  let authURL = "https://accounts.google.com/o/oauth2/auth";
  authURL += `?client_id=${clientID}`;
  authURL += `&response_type=token`;
  authURL += `&redirect_uri=${encodeURIComponent(redirectURL)}`;
  authURL += `&scope=${encodeURIComponent(scopes.join(" "))}`;

  return browser.identity.launchWebAuthFlow({
    interactive: true,
    url: authURL,
  });
}

function getAccessToken() {
  return authorize().then(validate);
}
```

{{WebExtExamples}}

> [!NOTE]
> This API is based on Chromium's [`identity`](https://developer.chrome.com/docs/extensions/reference/api/identity) API.

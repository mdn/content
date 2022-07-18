---
title: identity.getRedirectURL()
slug: Mozilla/Add-ons/WebExtensions/API/identity/getRedirectURL
tags:
  - API
  - Add-ons
  - Extensions
  - Identity
  - Method
  - Reference
  - WebExtensions
  - getRedirectURL
browser-compat: webextensions.api.identity.getRedirectURL
---
{{AddonSidebar()}}

Generates a URL that you can use as a redirect URL.

The URL is derived from your extension's ID, so if you use this function you should probably set your extension's ID explicitly using the [`browser_specific_settings`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) key (otherwise, each time you [temporarily install the extension](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/), you'll get a different redirect URL).

See [Getting a redirect URL](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/identity#getting_the_redirect_url) for more information on redirect URLs.

## Syntax

```js
let redirectURL = browser.identity.getRedirectURL()
```

### Parameters

None.

### Return value

A string containing a redirect URL value.

## Browser compatibility

{{Compat}}

## Examples

Get the redirect URL:

```js
let redirectURL = browser.identity.getRedirectURL();
```

{{WebExtExamples}}

> **Note:** This API is based on Chromium's [`identity`](https://developer.chrome.com/docs/extensions/reference/identity/) API.
>
> Microsoft Edge compatibility data is supplied by Microsoft Corporation and is included here under the Creative Commons Attribution 3.0 United States License.

---
title: identity
slug: Mozilla/Add-ons/WebExtensions/API/identity
page-type: webextension-api
browser-compat: webextensions.api.identity
---

{{AddonSidebar}}

Use the identity API to get an [OAuth2](https://oauth.net/2/) authorization code or access token, which an extension can then use to access user data from a service that supports OAuth2 access (such as Google or Facebook).

OAuth2 flows vary between service provider so, to use this API with a particular service provider, consult their documentation. For example:

- [Google](https://developers.google.com/identity/protocols/oauth2/javascript-implicit-flow)
- [GitHub](https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/authorizing-oauth-apps)

The identity API provides the {{WebExtAPIRef("identity.launchWebAuthFlow()")}} function. This authenticates the user with the service, if necessary, and asks the user to authorize the extension to access data, if necessary. The function completes with an access token or authorization code, depending on the provider.

The extension then completes the OAuth2 flow to get a validated access token, and uses the token in HTTPS requests to access the user's data according to the authorization the user gave.

To use this API, you must have the "identity" [API permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions).

## Setup

There's some setup you must do before publishing your extension.

### Getting the redirect URL

The [redirect URL](https://www.oauth.com/oauth2-servers/redirect-uris/) represents the end point of {{WebExtAPIRef("identity.launchWebAuthFlow()")}}, in which the access token or authorization code is delivered to the extension. The browser extracts the result from the redirect URL without loading its response.

You get the redirect URL by calling {{WebExtAPIRef("identity.getRedirectURL()")}}. This function derives a redirect URL from the add-on's ID. To simplify testing, set your add-on's ID explicitly using the [`browser_specific_settings`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) key (otherwise, each time you [temporarily install the add-on](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/), you get a different redirect URL).

{{WebExtAPIRef("identity.getRedirectURL()")}} returns a URL at a fixed domain name and a subdomain derived from the add-on's ID. Some OAuth servers (such as Google) only accept domains with a verified ownership as the redirect URL. As the dummy domain cannot be controlled by extension developers, the default domain cannot always be used.

However, loopback addresses are an accepted alternative that do not require domain validation (based on [RFC 8252, section 7.3](https://datatracker.ietf.org/doc/html/rfc8252#section-7.3)). Starting from Firefox 86, a loopback address with the format `http://127.0.0.1/mozoauth2/[subdomain of URL returned by identity.getRedirectURL()]` is permitted as a value for the redirect URL.

> [!NOTE]
> Starting with Firefox 75, you must use the redirect URL returned by {{WebExtAPIRef("identity.getRedirectURL()")}}. Earlier versions allowed you to supply any redirect URL.
>
> Starting with Firefox 86, the special loopback address described above can be used too.

You'll use the redirect URL in two places:

- supply it when registering your extension as an OAuth2 client.
- pass it into `identity.launchWebAuthFlow()`, as a URL parameter added to that function's `url` argument.

### Registering your extension

Before you use OAuth2 with a service provider, you must register the extension with the provider as an OAuth2 client.

This will tend to be specific to the service provider, but in general it means creating an entry for your extension on the provider's website. In this process you supply your redirect URL, and receive a client ID (and sometimes also a secret). You need to pass both of these into {{WebExtAPIRef("identity.launchWebAuthFlow()")}}.

## Functions

- {{WebExtAPIRef("identity.getRedirectURL()")}}
  - : Gets the redirect URL.
- {{WebExtAPIRef("identity.launchWebAuthFlow()")}}
  - : Launches WAF.

## Browser compatibility

{{Compat}}

{{WebExtExamples("h2")}}

> [!NOTE]
> This API is based on Chromium's [`chrome.identity`](https://developer.chrome.com/docs/extensions/reference/api/identity) API.

<!--
// Copyright 2015 The Chromium Authors. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//    * Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
//    * Redistributions in binary form must reproduce the above
// copyright notice, this list of conditions and the following disclaimer
// in the documentation and/or other materials provided with the
// distribution.
//    * Neither the name of Google Inc. nor the names of its
// contributors may be used to endorse or promote products derived from
// this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
-->

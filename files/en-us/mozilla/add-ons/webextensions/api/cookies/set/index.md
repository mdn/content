---
title: cookies.set()
slug: Mozilla/Add-ons/WebExtensions/API/cookies/set
tags:
  - API
  - Add-ons
  - Cookies
  - Extensions
  - Method
  - Non-standard
  - Reference
  - WebExtensions
  - set
browser-compat: webextensions.api.cookies.set
---
{{AddonSidebar()}}

The **`set()`** method of the {{WebExtAPIRef("cookies")}} API sets a cookie containing the specified cookie data. This method is equivalent to issuing an HTTP `Set-Cookie` header during a request to a given URL.

The call succeeds only if you include the "cookies" [API permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) in your [manifest.json](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json) file, as well as [host permissions](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) for the given URL specified in its manifest. The given URL also needs the necessary permissions to create a cookie with the given parameters.

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js
let setting = browser.cookies.set(
  details               // object
)
```

### Parameters

- `details`

  - : An `object` containing the details of the cookie you wish to set. It can have the following properties:

    - `domain` {{optional_inline}}
      - : A `string` representing the domain of the cookie. If omitted, the cookie becomes a host-only cookie.
    - `expirationDate` {{optional_inline}}
      - : A `number` that represents the expiration date of the cookie as the number of seconds since the UNIX epoch. If omitted, the cookie becomes a session cookie.
    - `firstPartyDomain` {{optional_inline}}
      - : A `string` representing the first-party domain with which the cookie to will be associated. This property must be supplied if the browser has first-party isolation enabled. See [First-party isolation](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/cookies#first-party_isolation).
    - `httpOnly` {{optional_inline}}
      - : A `boolean` that specifies whether the cookie should be marked as HttpOnly (`true`), or not (false). If omitted, it defaults to false.
    - `name` {{optional_inline}}
      - : A `string` representing the name of the cookie. If omitted, this is empty by default.
    - `partitionKey` {{optional_inline}}

      - : An `object` representing the [storage partition](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/cookies#storage_partitioning) to set the cookie in. Include this object to set a cookie in partitioned storage. This object contains:

        - `topLevelSite` {{optional_inline}}
          - : A `string` representing the first-party URL of the top-level site storage partition containing the cookie.

    - `path` {{optional_inline}}
      - : A `string` representing the path of the cookie. If omitted, this defaults to the path portion of the URL parameter.
    - `sameSite` {{optional_inline}}
      - : A {{WebExtAPIRef("cookies.SameSiteStatus")}} value that indicates the SameSite state of the cookie. If omitted, it defaults to 0, 'no_restriction'.
    - `secure` {{optional_inline}}
      - : A `boolean` that specifies whether the cookie should be marked as secure (`true`), or not (false). If omitted, it defaults to false.
    - `storeId` {{optional_inline}}
      - : A `string` representing the ID of the cookie store in which to set the cookie. If omitted, the cookie is set in the current execution context's cookie store by default.
    - `url`
      - : A `string` representing the request-URI to associate with the cookie. This value can affect the default domain and path values of the created cookie. If host permissions for this URL are not specified in the manifest file, the method call will fail.
    - `value` {{optional_inline}}
      - : A `string` representing the value of the cookie. If omitted, this is empty by default.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be fulfilled with a {{WebExtAPIRef('cookies.Cookie')}} object containing details about the cookie that's been set. If the call fails for any reason, the promise will be rejected with an error message.

## Browser compatibility

{{Compat}}

## Examples

This example sets a cookie for the document hosted by the currently active tab:

```js
let getActive = browser.tabs.query({active: true, currentWindow: true});
getActive.then(setCookie);

function setCookie(tabs) {
  browser.cookies.set({
    url: tabs[0].url,
    name: "favorite-color",
    value: "red"
  });
}
```

{{WebExtExamples}}

> **Note:** This API is based on Chromium's [`chrome.cookies`](https://developer.chrome.com/docs/extensions/reference/cookies/#method-set) API. This documentation is derived from [`cookies.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/cookies.json) in the Chromium code.
>
> Microsoft Edge compatibility data is supplied by Microsoft Corporation and is included here under the Creative Commons Attribution 3.0 United States License.

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

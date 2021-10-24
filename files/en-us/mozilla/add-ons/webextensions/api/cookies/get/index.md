---
title: cookies.get()
slug: Mozilla/Add-ons/WebExtensions/API/cookies/get
tags:
  - API
  - Add-ons
  - Cookies
  - Extensions
  - Method
  - Non-standard
  - Reference
  - WebExtensions
  - get
browser-compat: webextensions.api.cookies.get
---
{{AddonSidebar()}}

The **`get()`** method of the {{WebExtAPIRef("cookies")}} API retrieves information about a single cookie, given its name and URL.

If more than one cookie with the same name exists for a given URL, the one with the longest path will be returned. For cookies with the same path length, the cookie with the earliest creation time will be returned. If no matching cookie could be found, `null` is returned.

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js
var getting = browser.cookies.get(
  details                // object
)
```

### Parameters

- `details`

  - : An `object` containing details that can be used to match a cookie to be retrieved. It can include the following properties:

    - `firstPartyDomain`{{optional_inline}}
      - : A `string` representing the first-party domain with which the cookie to retrieve is associated. This property must be supplied if the browser has first-party isolation enabled. See [First-party isolation](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/cookies#first-party_isolation).
    - `name`
      - : A `string` representing the name of the cookie to retrieve.
    - `partitionKey`{{optional_inline}}

      - : An `object` representing the [storage partition](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/cookies#Storage_partitioning) containing the cookie. Include this object with `topLevelSite` to obtain a cookie from partitioned storage. Otherwise, returns the cookie from unpartitioned storage. This object contains:

        - `topLevelSite`{{optional_inline}}
          - : A `string` representing the first-party URL of the top-level site storage partition containing the cookie.

    - `storeId`{{optional_inline}}
      - : A `string` representing the ID of the {{WebExtAPIRef("cookies.CookieStore", "cookie store")}} in which to look for the cookie (as returned by {{WebExtAPIRef("cookies.getAllCookieStores()")}}). By default, the current execution context's cookie store will be used.
    - `url`
      - : A `string` representing the URL with which the cookie to retrieve is associated. This argument may be a full URL, in which case any data following the URL path (e.g. the query string) is ignored. If [host permissions](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) for this URL are not specified in the extension's [manifest file](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json), the API call will fail.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be fulfilled with a {{WebExtAPIRef('cookies.Cookie', 'Cookie')}} object containing details about the cookie, or `null` if the cookie was not found.

## Browser compatibility

{{Compat}}

## Examples

This example tries to get the cookie named "favorite-color", associated with the URL for the currently active tab:

```js
function logCookie(cookie) {
  if (cookie) {
    console.log(cookie.value);
  }
}

function getCookie(tabs) {
  var getting = browser.cookies.get({
    url: tabs[0].url,
    name: "favorite-color"
  });
  getting.then(logCookie);
}

var getActive = browser.tabs.query({
  active: true,
  currentWindow: true
});
getActive.then(getCookie);
```

{{WebExtExamples}}

> **Note:** This API is based on Chromium's [`chrome.cookies`](https://developer.chrome.com/extensions/cookies#method-get) API. This documentation is derived from [`cookies.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/cookies.json) in the Chromium code.
>
> Microsoft Edge compatibility data is supplied by Microsoft Corporation and is included here under the Creative Commons Attribution 3.0 United States License.

<div class="hidden"><pre>// Copyright 2015 The Chromium Authors. All rights reserved.
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
</pre></div>

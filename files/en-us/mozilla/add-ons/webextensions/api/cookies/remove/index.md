---
title: cookies.remove()
slug: Mozilla/Add-ons/WebExtensions/API/cookies/remove
tags:
  - API
  - Add-ons
  - Cookies
  - Extensions
  - Method
  - Non-standard
  - Reference
  - WebExtensions
  - remove
browser-compat: webextensions.api.cookies.remove
---
{{AddonSidebar()}}

The **`remove()`** method of the {{WebExtAPIRef("cookies")}} API deletes a cookie, given its name and URL.

The call succeeds only if you include the "cookies" [API permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) in your [manifest.json](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json) file, as well as [host permissions](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) for the given URL specified in its manifest.

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js
let removing = browser.cookies.remove(
  details               // object
)
```

### Parameters

- `details`

  - : An `object` containing information to identify the cookie to remove. It contains the following properties:

    - `firstPartyDomain` {{optional_inline}}
      - : A `string` representing the first-party domain with which the cookie to remove is associated. This property must be supplied if the browser has first-party isolation enabled. See [First-party isolation](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/cookies#first-party_isolation).
    - `name`
      - : A `string` representing the name of the cookie to remove.
    - `partitionKey` {{optional_inline}}

      - : An `object` representing the [storage partition](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/cookies#storage_partitioning) containing the cookie. Include this object to remove a cookie from partitioned storage. This object contains:

        - `topLevelSite` {{optional_inline}}
          - : A `string` representing the first-party URL of the top-level site storage partition containing the cookie.

    - `storeId` {{optional_inline}}
      - : A `string` representing the ID of the cookie store to find the cookie in. If unspecified, the cookie is looked for by default in the current execution context's cookie store.
    - `url`
      - : A `string` representing the URL associated with the cookie. If the extension does not have [host permissions](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) for this URL, the API call will fail.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be fulfilled with a {{WebExtAPIRef('cookies.Cookie')}} object containing details about the cookie that's been removed. If a cookie matching the `details` parameter could not be found, the promise is fulfilled with `null`.  If the call fails for any reason, the promise will be rejected with an error message.

## Browser compatibility

{{Compat}}

## Examples

This example tries to remove the cookie named "favorite-color", whose URL matches the URL of the document hosted by the currently active tab:

```js
function onRemoved(cookie) {
  console.log(`Removed: ${cookie}`);
}

function onError(error) {
  console.log(`Error removing cookie: ${error}`);
}

function removeCookie(tabs) {
  let removing = browser.cookies.remove({
    url: tabs[0].url,
    name: "favorite-color"
  });
  removing.then(onRemoved, onError);
}

let getActive = browser.tabs.query({active: true, currentWindow: true});
getActive.then(removeCookie);
```

{{WebExtExamples}}

> **Note:** This API is based on Chromium's [`chrome.cookies`](https://developer.chrome.com/docs/extensions/reference/cookies/#method-remove) API. This documentation is derived from [`cookies.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/cookies.json) in the Chromium code.
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

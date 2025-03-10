---
title: cookies.remove()
slug: Mozilla/Add-ons/WebExtensions/API/cookies/remove
page-type: webextension-api-function
browser-compat: webextensions.api.cookies.remove
---

{{AddonSidebar}}

The **`remove()`** method of the {{WebExtAPIRef("cookies")}} API deletes a cookie, given its name and URL.

To use this method, an extension must have the `"cookies"` permission and relevant host permissions. See [`cookie` permissions](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/cookies#permissions) for more details.

If there is more than one cookie with the same name for a URL, the cookie with the longest path is deleted. For cookies with the same path length, the cookie with the earliest creation time is deleted. If no matching cookie is found, `null` is returned.

> [!NOTE]
> Before Firefox 133, when there was more than one cookie with the same name, Firefox deleted the cookie with the earliest creation time.

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js-nolint
let removing = browser.cookies.remove(
  details               // object
)
```

### Parameters

- `details`

  - : An `object` containing information to identify the cookie to remove. It contains these properties:

    - `firstPartyDomain` {{optional_inline}}
      - : A `string` representing the first-party domain with which the cookie to remove is associated. This property must be supplied if the browser has first-party isolation enabled. See [First-party isolation](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/cookies#first-party_isolation).
    - `name`
      - : A `string` representing the name of the cookie to remove.
    - `partitionKey` {{optional_inline}}

      - : An `object` representing the [storage partition](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/cookies#storage_partitioning) containing the cookie. Include this object to remove a cookie from partitioned storage. This object contains:

        - `topLevelSite` {{optional_inline}}
          - : A `string` representing the first-party URL of the top-level site storage partition containing the cookie.

    - `storeId` {{optional_inline}}
      - : A `string` representing the ID of the cookie store to find the cookie in. If unspecified, the cookie is looked for in the current execution context's cookie store.
    - `url`
      - : A `string` representing the URL associated with the cookie. The API call fails if the extension does not have [host permissions](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) for this URL.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that is fulfilled with a {{WebExtAPIRef('cookies.Cookie')}} object containing details about the cookie removed. If a cookie matching the `details` parameter is not found, the promise is fulfilled with `null`. If the call fails, the promise is rejected with an error message.

## Examples

This example tries to remove the cookie named "favorite-color" whose URL matches the URL of the document hosted by the active tab:

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
    name: "favorite-color",
  });
  removing.then(onRemoved, onError);
}

let getActive = browser.tabs.query({ active: true, currentWindow: true });
getActive.then(removeCookie);
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}

> [!NOTE]
> This API is based on Chromium's [`chrome.cookies`](https://developer.chrome.com/docs/extensions/reference/api/cookies#method-remove) API. This documentation is derived from [`cookies.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/cookies.json) in the Chromium code.

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

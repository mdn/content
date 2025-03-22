---
title: cookies.getAll()
slug: Mozilla/Add-ons/WebExtensions/API/cookies/getAll
page-type: webextension-api-function
browser-compat: webextensions.api.cookies.getAll
---

{{AddonSidebar}}

The **`getAll()`** method of the {{WebExtAPIRef("cookies")}} API retrieves all cookies from a cookie store that match the details provided.

To use this method, an extension must have the `"cookies"` permission and relevant host permissions. See [`cookie` permissions](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/cookies#permissions) for more details.

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js-nolint
let getting = browser.cookies.getAll(
  details                // object
)
```

### Parameters

- `details`

  - : An `object` containing details that are used to match cookies to retrieve. Included properties are as follows (see [Cookie type](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/cookies/Cookie#type) for more information on these):

    - `domain` {{optional_inline}}
      - : A `string` representing a domain that cookies must be associated with (they can be associated either with this exact domain or one of its subdomains).
    - `firstPartyDomain` {{optional_inline}}

      - : A `string` representing the first-party domain with which the cookie to retrieve is associated.

        This property must be supplied if the browser has first-party isolation enabled. If you pass `null`, cookies with any value for `firstPartyDomain` and cookies that do not have `firstPartyDomain` set are included in the results. See [First-party isolation](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/cookies#first-party_isolation).

    - `name` {{optional_inline}}
      - : A `string` representing a name that the cookies must have.
    - `partitionKey` {{optional_inline}}

      - : An `object` defining which [storage partitions](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/cookies#storage_partitioning) to return cookies from:

        - If omitted, only cookies from unpartitioned storage are returned.
        - If included without `topLevelSite', all cookies from partitioned and unpartitioned storage are returned.
        - If included with the specified `topLevelSite', cookies from the specified partition storage are returned.

        This object contains:

        - `topLevelSite` {{optional_inline}}
          - : A `string` representing the first-party URL of the top-level site storage partition containing the cookies.

    - `path` {{optional_inline}}
      - : A `string` representing a path — the cookies' path must be identical to this one.
    - `secure` {{optional_inline}}
      - : A `boolean` — filters cookies by their `secure` property, allowing you to filter secure or non-secure cookies.
    - `session` {{optional_inline}}
      - : A `boolean` — filters the cookies by their `session` property, allowing you to filter session or persistent cookies.
    - `storeId` {{optional_inline}}
      - : A `string` representing the cookie store to retrieve cookies from. If omitted, the current execution context's cookie store is used.
    - `url` {{optional_inline}}
      - : A `string` representing a URL that the retrieved cookies must be associated with.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that is fulfilled with an array of `{{WebExtAPIRef('cookies.Cookie')}}` objects that match the properties given in the `details` parameter. Only unexpired cookies are returned. The cookies returned are sorted by path length, longest to shortest. If multiple cookies have the same path length, those with the earliest creation time are first.

> [!NOTE]
> Before Firefox 133, Firefox returned the cookie sorted by creation time, with the earliest creation time first.

## Examples

This example gets all of the cookies the browser has stored with the name "favorite-color". When the result is returned, the code prints the value of each result to the console.

```js
function logCookies(cookies) {
  for (const cookie of cookies) {
    console.log(cookie.value);
  }
}

browser.cookies
  .getAll({
    name: "favorite-color",
  })
  .then(logCookies);
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}

> [!NOTE]
> This API is based on Chromium's [`chrome.cookies`](https://developer.chrome.com/docs/extensions/reference/api/cookies#method-getAll) API. This documentation is derived from [`cookies.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/cookies.json) in the Chromium code.

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

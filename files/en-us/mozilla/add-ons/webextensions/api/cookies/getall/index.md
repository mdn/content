---
title: cookies.getAll()
slug: Mozilla/Add-ons/WebExtensions/API/cookies/getAll
tags:
  - API
  - Add-ons
  - Cookies
  - Extensions
  - Method
  - Non-standard
  - Reference
  - WebExtensions
  - getAll
browser-compat: webextensions.api.cookies.getAll
---
{{AddonSidebar()}}

The **`getAll()`** method of the {{WebExtAPIRef("cookies")}} API retrieves all cookies from a single cookie store that match the given information.

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js
let getting = browser.cookies.getAll(
  details                // object
)
```

### Parameters

- `details`

  - : An `object` containing details that can be used to match cookies to be retrieved. Included properties are as follows (see [Cookie type](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/cookies/Cookie#type) for more information on these):

    - `domain` {{optional_inline}}
      - : A `string` representing a domain that cookies must be associated with (they can be associated either with this exact domain or one of its subdomains).
    - `firstPartyDomain` {{optional_inline}}

      - : A `string` representing the first-party domain with which the cookie to retrieve is associated.

        This property must be supplied if the browser has first-party isolation enabled. You can however pass `null` in this situation. If you do this, then cookies with any value for `firstPartyDomain`, as well as cookies which do not have `firstPartyDomain` set at all, will be included in the results. See [First-party isolation](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/cookies#first-party_isolation).

    - `name` {{optional_inline}}
      - : A `string` representing a name that the cookies should have.
    - `partitionKey` {{optional_inline}}

      - : An `object` defining which [storage partitions](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/cookies#storage_partitioning) to return cookies from:

        - if omitted, returns only cookies from unpartitioned storage.
        - if included without `topLevelSite`, returns all cookies from partitioned and unpartitioned storage.
        - if included with `topLevelSite` specified, returns cookies from the specified partition storage.

        This object contains:

        - `topLevelSite` {{optional_inline}}
          - : A `string` representing the first-party URL of the top-level site storage partition containing the cookies.

    - `path` {{optional_inline}}
      - : A `string` representing a path — the cookies' path must be identical to this one.
    - `secure` {{optional_inline}}
      - : A `boolean` — filters cookies by their `secure` property, allowing you to filter secure cookies vs. non-secure cookies.
    - `session` {{optional_inline}}
      - : A `boolean`— filters the cookies by their `session` property, allowing you to filter session cookies vs. persistent cookies.
    - `storeId` {{optional_inline}}
      - : A `string` representing the cookie store to retrieve cookies from. If omitted, the current execution context's cookie store will be used.
    - `url` {{optional_inline}}
      - : A `string` representing a URL that the retrieved cookies must be associated with.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be fulfilled with an array of `{{WebExtAPIRef('cookies.Cookie')}}` objects that match the properties given in the `details` parameter. Only unexpired cookies are returned. The cookies returned will be sorted by path length, longest to shortest. If multiple cookies have the same path length, those with the earliest creation time will be first.

## Browser compatibility

{{Compat}}

## Examples

In the following snippet, we are making a call to get all of the cookies the browser currently has stored that have a name of "favorite-color". When the result is returned, we are printing the value of each result to the console.

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

> **Note:** This API is based on Chromium's [`chrome.cookies`](https://developer.chrome.com/docs/extensions/reference/cookies/#method-getAll) API. This documentation is derived from [`cookies.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/cookies.json) in the Chromium code.
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

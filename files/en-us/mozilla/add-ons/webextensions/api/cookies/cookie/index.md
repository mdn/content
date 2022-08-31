---
title: cookies.Cookie
slug: Mozilla/Add-ons/WebExtensions/API/cookies/Cookie
tags:
  - API
  - Add-ons
  - Cookies
  - Extensions
  - Non-standard
  - Reference
  - Type
  - WebExtensions
  - cookie
browser-compat: webextensions.api.cookies.Cookie
---
{{AddonSidebar()}}

The `Cookie` type of the {{WebExtAPIRef("cookies")}} API represents information about an HTTP cookie.

## Type

Values of this type are objects, which can contain the following properties:

- `domain`
  - : A `string` representing the domain the cookie belongs to (e.g. "www\.google.com", "example.com").
- `expirationDate` {{optional_inline}}
  - : A `number` representing the expiration date of the cookie as the number of seconds since the UNIX epoch. Not provided for session cookies.
- `firstPartyDomain`
  - : A `string` representing the first-party domain associated with the cookie. This will be an empty string if the cookie was set while first-party isolation was off. See [First-party isolation](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/cookies#first-party_isolation).
- `hostOnly`
  - : A `boolean`, `true` if the cookie is a host-only cookie (i.e. the request's host must exactly match the domain of the cookie), or `false` otherwise.
- `httpOnly`
  - : A `boolean`, `true` if the cookie is marked as HttpOnly (i.e. the cookie is inaccessible to client-side scripts), or `false` otherwise.
- `name`
  - : A `string` representing the name of the cookie.
- `partitionKey` {{optional_inline}}

  - : An `object` representing the description of the [storage partition](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/cookies#storage_partitioning) containing the cookie. This object is omitted (null) if the cookie is not in partitioned storage. This object contains the following properties:

    - `topLevelSite`
      - : A `string` representing the first-party URL of the cookie's storage partition, if the cookie is in storage that is partitioned by top-level site.

- `path`
  - : A `string` representing the path of the cookie.
- `secure`
  - : A `boolean`, `true` if the cookie is marked as secure (i.e. its scope is limited to secure channels, typically HTTPS), or `false` otherwise.
- `session`
  - : A `boolean`, `true` if the cookie is a session cookie, or `false` if it is a persistent cookie with an expiration date.
- `sameSite`
  - : A {{WebExtAPIRef("cookies.SameSiteStatus")}} value that indicates the SameSite state of the cookie.
- `storeId`
  - : A `string` representing the ID of the cookie store containing this cookie, as provided by {{WebExtAPIRef("cookies.getAllCookieStores()")}}.
- `value`
  - : A `string` representing the value of the cookie.

## Browser compatibility

{{Compat}}

## Examples

Most methods in the cookies API involve a `Cookie` object being used either as an input parameter or as part of the return value. For example, a call to {{WebExtAPIRef("cookies.getAll()")}} returns an array of `Cookie` objects.

In the example below we've asked for all cookies, then logged some of the values of each of the resulting `Cookie` objects:

```js
function logCookies(cookies) {
  for (cookie of cookies) {
    console.log(`Domain: ${cookie.domain}`);
    console.log(`Name: ${cookie.name}`);
    console.log(`Value: ${cookie.value}`);
    console.log(`Persistent: ${!cookie.session}`);
  }
}

let gettingAll = browser.cookies.getAll({});
gettingAll.then(logCookies);
```

{{WebExtExamples}}

> **Note:** This API is based on Chromium's [`chrome.cookies`](https://developer.chrome.com/docs/extensions/reference/cookies/#type-Cookie) API. This documentation is derived from [`cookies.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/cookies.json) in the Chromium code.
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

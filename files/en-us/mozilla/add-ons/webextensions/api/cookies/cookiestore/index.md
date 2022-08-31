---
title: cookies.CookieStore
slug: Mozilla/Add-ons/WebExtensions/API/cookies/CookieStore
tags:
  - API
  - Add-ons
  - CookieStore
  - Cookies
  - Extensions
  - Non-standard
  - Reference
  - Type
  - WebExtensions
browser-compat: webextensions.api.cookies.CookieStore
---
{{AddonSidebar()}}

The `CookieStore` type of the {{WebExtAPIRef("cookies")}} API represents a cookie store in the browser.

Windows in different browsing modes may use different cookie stores — a private browsing/incognito mode window, for instance, will use a separate cookie store from a non-incognito/private window.

## Type

Values of this type are objects, which can contain the following properties:

- `id`
  - : A `string` representing the unique identifier for the cookie store.
- `incognito`
  - : A boolean value that indicates whether this is an incognito cookie store.
- `tabIds`
  - : An `array` of `integers`, which identifies all of the browser tabs that share this cookie store.

## Browser compatibility

{{Compat}}

## Examples

In the following snippet, the {{WebExtAPIRef("cookies.getAllCookieStores()")}} method is used to retrieve all the cookie stores currently available in the browser, and print out each cookie store ID, and the tabs that currently share each cookie store.

```js
function logStores(cookieStores) {
  for (const store of cookieStores) {
    console.log(`Cookie store: ${store.id}\n Tab IDs: ${store.tabIds}`);
  }
}

browser.cookies.getAllCookieStores().then(logStores);
```

The following code snippet gets all cookie stores and then logs the total number of stores and how many of those stores are incognito.

```js
browser.cookies.getAllCookieStores().then((stores) => {
  const incognitoStores = stores.map((store) => store.incognito);
  console.log(`Of ${stores.length} cookie stores, ${incognitoStores.length} are incognito.`);
});
```

{{WebExtExamples}}

> **Note:** This API is based on Chromium's [`chrome.cookies`](https://developer.chrome.com/docs/extensions/reference/cookies/#type-CookieStore) API. This documentation is derived from [`cookies.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/cookies.json) in the Chromium code.
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

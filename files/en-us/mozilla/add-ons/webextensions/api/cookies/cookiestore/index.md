---
title: cookies.CookieStore
slug: Mozilla/Add-ons/WebExtensions/API/cookies/CookieStore
page-type: webextension-api-type
browser-compat: webextensions.api.cookies.CookieStore
---

{{AddonSidebar}}

The `CookieStore` type of the {{WebExtAPIRef("cookies")}} API represents a cookie store in the browser.

Windows in different browsing modes may use different cookie stores. For example, a private browsing (or incognito) mode window uses a separate cookie store from a non-private window. Also, a window may have several cookie stores in Firefox when using [container tabs](https://wiki.mozilla.org/Security/Contextual_Identity_Project/Containers).

See [Work with the Cookies API](/en-US/docs/Mozilla/Add-ons/WebExtensions/Work_with_the_Cookies_API#cookie_stores) for more information about cookie stores.

## Type

Values of this type are objects that can contain these properties:

- `id`
  - : A `string` containing the cookie store's unique identifier.
- `incognito` {{optional_inline}}
  - : A boolean value that indicates whether this is an incognito cookie store.
    This property is not supported in Chrome or Safari. However, you can identify incognito cookie stores in Chrome because their `id` is always "1".
- `tabIds`
  - : An `array` of `integers` that identifies all the browser tabs that share this cookie store.

## Examples

In this snippet, the {{WebExtAPIRef("cookies.getAllCookieStores()")}} method is used to retrieve all the cookie stores available in the browser. Then, it prints out each cookie store ID and the tabs that share each cookie store.

```js
function logStores(cookieStores) {
  for (const store of cookieStores) {
    console.log(`Cookie store: ${store.id}\n Tab IDs: ${store.tabIds}`);
  }
}

browser.cookies.getAllCookieStores().then(logStores);
```

This code snippet gets all cookie stores and then logs the total number of stores and how many of those stores are incognito.

```js
browser.cookies.getAllCookieStores().then((stores) => {
  const incognitoStores = stores.map((store) => store.incognito);
  console.log(
    `Of ${stores.length} cookie stores, ${incognitoStores.length} are incognito.`,
  );
});
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}

> [!NOTE]
> This API is based on Chromium's [`chrome.cookies`](https://developer.chrome.com/docs/extensions/reference/api/cookies#type-CookieStore) API. This documentation is derived from [`cookies.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/cookies.json) in the Chromium code.

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

---
title: cookies.getAllCookieStores()
slug: Mozilla/Add-ons/WebExtensions/API/cookies/getAllCookieStores
tags:
  - API
  - Add-ons
  - Cookies
  - Extensions
  - Method
  - Non-standard
  - Reference
  - WebExtensions
  - getAllCookieStores
browser-compat: webextensions.api.cookies.getAllCookieStores
---
{{AddonSidebar()}}

The **`getAllCookieStores()`** method of the {{WebExtAPIRef("cookies")}} API returns a list of all cookie stores.

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js
var gettingStores = browser.cookies.getAllCookieStores()
```

### Parameters

None.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be fulfilled with an `array` of {{WebExtAPIRef('cookies.CookieStore')}} objects representing all the existing cookie stores.

## Browser compatibility

{{Compat}}

## Examples

In the following snippet, the `getAllCookieStores()` method is used to retrieve all the cookie stores currently available in the browser, and print out each cookie store ID, and the tabs that currently share each cookie store.

```js
function logStores(cookieStores) {
  for (let store of cookieStores) {
    console.log(`Cookie store: ${store.id}\n Tab IDs: ${store.tabIds}`);
  }
}

var getting = browser.cookies.getAllCookieStores();
getting.then(logStores);
```

Each member of the `cookieStores` array is a {{WebExtAPIRef("cookies.CookieStore")}} object.

{{WebExtExamples}}

> **Note:** This API is based on Chromium's [`chrome.cookies`](https://developer.chrome.com/extensions/cookies#method-getAllCookieStores) API. This documentation is derived from [`cookies.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/cookies.json) in the Chromium code.
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

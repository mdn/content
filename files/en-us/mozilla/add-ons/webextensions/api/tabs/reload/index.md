---
title: tabs.reload()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/reload
page-type: webextension-api-function
browser-compat: webextensions.api.tabs.reload
---

{{AddonSidebar}}

Reload a tab, optionally bypassing the local web cache.

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js-nolint
let reloading = browser.tabs.reload(
  tabId,            // optional integer
  reloadProperties  // optional object
)
```

### Parameters

- `tabId` {{optional_inline}}
  - : `integer`. The ID of the tab to reload. Defaults to the selected tab of the current window.
- `reloadProperties` {{optional_inline}}

  - : An object with the following properties:

    - `bypassCache` {{optional_inline}}
      - : `boolean`. Bypass the local web cache. Default is `false`.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be fulfilled with no arguments when the tab has been reloaded. If any error occurs, the promise will be rejected with an error message.

## Examples

Reload the active tab of the current window:

```js
browser.tabs.reload();
```

Reload the active tab of the current window, bypassing the cache:

```js
browser.tabs.reload({ bypassCache: true });
```

Reload the tab whose ID is 2, bypassing the cache and calling a callback when done:

```js
function onReloaded() {
  console.log(`Reloaded`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

let reloading = browser.tabs.reload(2, { bypassCache: true });
reloading.then(onReloaded, onError);
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}

> [!NOTE]
> This API is based on Chromium's [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/api/tabs#method-reload) API. This documentation is derived from [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) in the Chromium code.

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

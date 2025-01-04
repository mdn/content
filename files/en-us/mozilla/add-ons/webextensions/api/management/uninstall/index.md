---
title: management.uninstall()
slug: Mozilla/Add-ons/WebExtensions/API/management/uninstall
page-type: webextension-api-function
browser-compat: webextensions.api.management.uninstall
---

{{AddonSidebar}}

Uninstalls an add-on, given its ID.

This API requires the "management" [API permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions).

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js-nolint
let uninstalling = browser.management.uninstall(
  id,                  // string
  options              // object
)
```

### Parameters

- `id`
  - : `string`. ID of the add-on to uninstall.
- `options` {{optional_inline}}
  - : `object`. Object which may contain a single property, `showConfirmDialog`. If `showConfirmDialog` is `true`, the browser will show a dialog asking the user to confirm that the add-on should be uninstalled.

<!---->

- If `id` is the calling add-on's ID, `showConfirmDialog` defaults to `false`.
- If `id` is the ID of a different add-on, the `showConfirmDialog` option is ignored and the confirmation dialog is always shown.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be rejected with an error message if the user canceled the uninstallation.

## Browser compatibility

{{Compat}}

## Examples

Uninstall the add-on whose ID is "addon-id" and ask the user to confirm. In the callback, we check whether the user canceled the uninstallation or if the operation succeeded.

```js
let id = "addon-id";

function onCanceled(error) {
  console.log(`Canceled: ${error}`);
}

function onUninstalled() {
  console.log("Uninstalled");
}

let uninstalling = browser.management.uninstall(id);
uninstalling.then(onUninstalled, onCanceled);
```

{{WebExtExamples}}

> [!NOTE]
> This API is based on Chromium's [`chrome.management`](https://developer.chrome.com/docs/extensions/reference/api/management#method-uninstall) API. This documentation is derived from [`management.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/management.json) in the Chromium code.

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

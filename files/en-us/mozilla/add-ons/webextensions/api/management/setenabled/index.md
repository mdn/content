---
title: management.setEnabled()
slug: Mozilla/Add-ons/WebExtensions/API/management/setEnabled
page-type: webextension-api-function
browser-compat: webextensions.api.management.setEnabled
---

{{AddonSidebar}}

Enables or disables the given add-on.

This function must usually be called in the context of a user action, such as the click handler for a button. The browser may also ask the user to confirm the change.

This API requires the "management" [API permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions).

It is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

The function allows enabling/disabling of theme addons, but will return an error if used to enable or disable other types of web extension.

## Syntax

```js-nolint
let settingEnabled = browser.management.setEnabled(
  id,              // string
  enabled         // boolean
)
```

### Parameters

- `id`
  - : `string`. ID of the add-on to enable/disable.
- `enabled`
  - : `boolean`. Whether to enable or disable the add-on.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be fulfilled with no arguments when the add-on has been disabled or enabled.

## Browser compatibility

{{Compat}}

## Examples

Toggle enable/disable for the add-on whose ID is "my-add-on":

```js
let id = "my-add-on";

function toggleEnabled(id) {
  let getting = browser.management.get(id);
  getting.then((info) => {
    browser.management.setEnabled(id, !info.enabled);
  });
}

toggleEnabled(id);
```

{{WebExtExamples}}

> [!NOTE]
> This API is based on Chromium's [`chrome.management`](https://developer.chrome.com/docs/extensions/reference/api/management#method-setEnabled) API. This documentation is derived from [`management.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/management.json) in the Chromium code.

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

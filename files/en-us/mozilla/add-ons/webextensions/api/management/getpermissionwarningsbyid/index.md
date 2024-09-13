---
title: management.getPermissionWarningsById()
slug: Mozilla/Add-ons/WebExtensions/API/management/getPermissionWarningsById
page-type: webextension-api-function
browser-compat: webextensions.api.management.getPermissionWarningsById
---

{{AddonSidebar}}

When the user installs or upgrades an add-on, the browser may warn the user about any particularly powerful [permissions](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) that the add-on has requested. Not all permissions result in warnings, and this behavior is not standardized across browsers.

Given the ID of an add-on, this function returns the permission warnings for it as an array of strings.

This API requires the "management" [API permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions).

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js-nolint
let gettingWarnings = browser.management.getPermissionWarningsById(
  id                  // string
)
```

### Parameters

- `id`
  - : `string`. ID of the add-on whose permission warnings you want to retrieve.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be fulfilled with an array of strings, each of which contains the text of a permission warning.

## Browser compatibility

{{Compat}}

## Examples

Log the permission warnings for the add-on whose ID is "my-add-on":

```js
let id = "my-add-on";

function gotWarnings(warnings) {
  for (const warning of warnings) {
    console.log(warning);
  }
}

browser.management.getPermissionWarningsById(id).then(gotWarnings);
```

{{WebExtExamples}}

> [!NOTE]
> This API is based on Chromium's [`chrome.management`](https://developer.chrome.com/docs/extensions/reference/api/management#method-getPermissionWarningsById) API. This documentation is derived from [`management.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/management.json) in the Chromium code.

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

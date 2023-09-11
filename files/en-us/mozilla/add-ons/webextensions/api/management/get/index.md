---
title: management.get()
slug: Mozilla/Add-ons/WebExtensions/API/management/get
page-type: webextension-api-function
browser-compat: webextensions.api.management.get
---

{{AddonSidebar()}}

Retrieves an {{WebExtAPIRef("management.ExtensionInfo", "ExtensionInfo")}} object containing information about the specified add-on.

This API requires the "management" [API permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions).

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js-nolint
let gettingInfo = browser.management.get(
  id                  // string
)
```

### Parameters

- `id`
  - : `string`. ID of the add-on whose info you want to retrieve.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be fulfilled with an {{WebExtAPIRef("management.ExtensionInfo", "ExtensionInfo")}} object, containing information about the add-on. The promise will be rejected if no extension with the given ID is installed or the extension is not allowed to be accessed by the caller.

## Browser compatibility

{{Compat}}

## Examples

Log the name of the add-on whose ID is "my-add-on":

```js
let id = "my-add-on";

function got(info) {
  console.log(info.name);
}

let getting = browser.management.get(id);
getting.then(got);
```

{{WebExtExamples}}

> **Note:** This API is based on Chromium's [`chrome.management`](https://developer.chrome.com/docs/extensions/reference/management/#method-get) API. This documentation is derived from [`management.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/management.json) in the Chromium code.

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

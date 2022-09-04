---
title: downloads.setShelfEnabled()
slug: Mozilla/Add-ons/WebExtensions/API/downloads/setShelfEnabled
tags:
  - API
  - Add-ons
  - Extensions
  - Method
  - Non-standard
  - Reference
  - WebExtensions
  - downloads
  - setShelfEnabled
browser-compat: webextensions.api.downloads.setShelfEnabled
---
{{AddonSidebar()}}

The **`setShelfEnabled()`** function of the {{WebExtAPIRef("downloads")}} API enables or disables the gray shelf at the bottom of every window associated with the current browser profile. The shelf will be disabled as long as at least one extension has disabled it.

If you try to enable the shelf when at least one other extension has already disabled it, the call will fail and {{WebExtAPIRef("runtime.lastError")}} will be set with an appropriate error message.

> **Note:** To use this function in your extension you must ask for the `"downloads.shelf"` [manifest permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions), as well as the `"downloads"` permission.

## Syntax

```js
chrome.downloads.setShelfEnabled(enabled);
```

This API is also available as `browser.downloads.setShelfEnabled()`.

### Parameters

- `enabled`
  - : A `boolean` representing the state that you want to set `setShelfEnabled()` to — `true` for enable, and `false` for disable.

## Browser compatibility

{{Compat}}

{{WebExtExamples}}

> **Note:** This API is based on Chromium's [`chrome.downloads`](https://developer.chrome.com/docs/extensions/reference/downloads/#method-setShelfEnabled) API.
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

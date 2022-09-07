---
title: extension.getExtensionTabs()
slug: Mozilla/Add-ons/WebExtensions/API/extension/getExtensionTabs
tags:
  - API
  - Add-ons
  - Extension
  - Extensions
  - Method
  - Non-standard
  - Reference
  - WebExtensions
  - getExtensionTabs
browser-compat: webextensions.api.extension.getExtensionTabs
---
{{AddonSidebar()}}

> **Warning:** This method has been deprecated. Use {{WebExtAPIRef("extension.getViews()")}} instead.

Returns an array of the JavaScript [Window](/en-US/docs/Web/API/Window) objects for each of the tabs running inside the current extension. If `windowId` is specified, returns only the Window objects of tabs attached to the specified window.

## Syntax

```js
chrome.extension.getExtensionTabs(
  windowId // optional integer
)
```

This API is also available as `browser.extension.getExtensionTabs()`.

### Parameters

- `windowId` {{optional_inline}}
  - : `integer`.

### Return value

`array` of `object`. Array of global window objects

## Browser compatibility

{{Compat}}

{{WebExtExamples}}

> **Note:** This API is based on Chromium's [`chrome.extension`](https://developer.chrome.com/docs/extensions/reference/extension/#method-getExtensionTabs) API. This documentation is derived from [`extension.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/extension.json) in the Chromium code.
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

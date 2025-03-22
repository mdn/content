---
title: downloads.showDefaultFolder()
slug: Mozilla/Add-ons/WebExtensions/API/downloads/showDefaultFolder
page-type: webextension-api-function
browser-compat: webextensions.api.downloads.showDefaultFolder
---

{{AddonSidebar}}

The **`showDefaultFolder()`** function of the {{WebExtAPIRef("downloads")}} API opens the default downloads folder in the platform's file manager.

## Syntax

```js-nolint
browser.downloads.showDefaultFolder();
```

### Parameters

None.

## Browser compatibility

{{Compat}}

## Examples

The following snippet contains a show button, which when clicked invokes `showDefaultFolder()` to open the default downloads folder in the platform's file manager:

```js
let showBtn = document.querySelector(".show");

showBtn.onclick = () => {
  browser.downloads.showDefaultFolder();
};
```

{{WebExtExamples}}

> [!NOTE]
> This API is based on Chromium's [`chrome.downloads`](https://developer.chrome.com/docs/extensions/reference/api/downloads#method-showDefaultFolder) API.

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

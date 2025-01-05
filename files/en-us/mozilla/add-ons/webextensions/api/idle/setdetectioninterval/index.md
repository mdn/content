---
title: idle.setDetectionInterval()
slug: Mozilla/Add-ons/WebExtensions/API/idle/setDetectionInterval
page-type: webextension-api-function
browser-compat: webextensions.api.idle.setDetectionInterval
---

{{AddonSidebar}}

Sets the interval, in seconds, used to determine when the system is in an idle state for {{WebExtAPIRef("idle.onStateChanged")}} events. The default interval is 60 seconds.

The detection interval is specific to the extension that calls the method. Changing the interval in one extension will not affect the detection interval in another extension.

## Syntax

```js-nolint
browser.idle.setDetectionInterval(
  intervalInSeconds // integer
)
```

### Parameters

- `intervalInSeconds`
  - : `integer`. Threshold, in seconds, used to determine when the system is in an idle state. The minimum value you can supply here is 15.

## Browser compatibility

{{Compat}}

## Examples

```js
browser.idle.setDetectionInterval(15);
```

{{WebExtExamples}}

> [!NOTE]
> This API is based on Chromium's [`chrome.idle`](https://developer.chrome.com/docs/extensions/reference/api/idle#method-setDetectionInterval) API. This documentation is derived from [`idle.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/idle.json) in the Chromium code.

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

---
title: clear()
slug: Mozilla/Add-ons/WebExtensions/API/types/BrowserSetting/clear
page-type: webextension-api-function
---

{{AddonSidebar}}

Use `BrowserSetting.clear()` to clear any changes the extension has made to the browser setting. The browser setting will revert to its previous value.

The extension will also give up control of the setting, allowing an extension with lower precedence (that is, an extension that was installed before this one) to modify the setting. See [`BrowserSetting.set()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/types/BrowserSetting/set) to learn more about controlling settings.

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise). If clearing the value failed, the promise resolves to `false`. If clearing the value succeeded it resolves to `true`.

## Syntax

```js-nolint
let clearing = setting.clear(
  details     // object
)
```

### Parameters

- `details`
  - : An empty object.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be fulfilled with a `boolean`: `true` if the setting was cleared, `false` otherwise.

## Browser compatibility

See {{WebExtAPIRef("types.BrowserSetting")}}.

## Example

Clear the `webRTCIPHandlingPolicy` setting:

```js
function onCleared(result) {
  if (result) {
    console.log("Setting was cleared");
  } else {
    console.log("Setting was not cleared");
  }
}

let clearing = browser.privacy.network.webRTCIPHandlingPolicy.clear({});
clearing.then(onCleared);
```

{{WebExtExamples}}

> **Note:**
>
> This API is based on Chromium's [`chrome.types`](https://developer.chrome.com/docs/extensions/reference/types/) API.

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

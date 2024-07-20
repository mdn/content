---
title: tabs.setZoomSettings()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/setZoomSettings
page-type: webextension-api-function
browser-compat: webextensions.api.tabs.setZoomSettings
---

{{AddonSidebar}}

Sets zoom settings for the specified tab. These settings are reset to the default settings upon navigating the tab.

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js-nolint
let settingZoomSettings = browser.tabs.setZoomSettings(
  tabId,           // optional integer
  zoomSettings     // ZoomSettings
)
```

### Parameters

- `tabId` {{optional_inline}}
  - : `integer`. The ID of the tab to change the zoom settings for. Defaults to the active tab of the current window.
- `zoomSettings`
  - : {{WebExtAPIRef('tabs.ZoomSettings')}}. Defines how zoom changes are handled and at what scope.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be fulfilled with no arguments after the zoom settings have been changed. If the tab could not be found or some other error occurs, the promise will be rejected with an error message.

## Examples

Disable zooming for the current tab:

```js
function onSet() {
  console.log(`Set zoom factor`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

let setting = browser.tabs.setZoomSettings({ mode: "disabled" });
setting.then(onSet, onError);
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}

> **Note:** This API is based on Chromium's [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/tabs/#method-setZoomSettings) API. This documentation is derived from [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) in the Chromium code.

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

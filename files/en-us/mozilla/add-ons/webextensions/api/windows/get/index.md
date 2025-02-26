---
title: windows.get()
slug: Mozilla/Add-ons/WebExtensions/API/windows/get
page-type: webextension-api-function
browser-compat: webextensions.api.windows.get
---

{{AddonSidebar}}

Gets details about a window, given its ID. The details are passed into a callback.

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js-nolint
let getting = browser.windows.get(
  windowId,              // integer
  getInfo                // optional object
)
```

### Parameters

- `windowId`
  - : `integer`. The ID of the window object you want returned.
- `getInfo` {{optional_inline}}

  - : `object`. Contains options to filter the type of window.

    - `populate` {{optional_inline}}
      - : `boolean`. If `true`, the {{WebExtAPIRef('windows.Window')}} object will have a `tabs` property that contains a list of {{WebExtAPIRef('tabs.Tab')}} objects representing the tabs open in the window. The `Tab` objects only contain the `url`, `title` and `favIconUrl` properties if the extension's manifest file includes the `"tabs"` permission or a matching [host permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions).
    - `windowTypes` {{optional_inline}}
      - : `array` of {{WebExtAPIRef('windows.WindowType')}} objects. If set, the {{WebExtAPIRef('windows.Window')}} returned will be filtered based on its type. If unset the default filter is set to `['normal', 'panel', 'popup']`, with `'panel'` window types limited to the extension's own windows.

> [!NOTE]
> If supplied, the `windowTypes` component of `getInfo` is ignored. The use of `windowTypes` has been deprecated as of Firefox 62.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be fulfilled with a {{WebExtAPIRef('windows.Window')}} object containing the details of the window. If any error occurs, the promise will be rejected with an error message.

## Browser compatibility

{{Compat}}

## Examples

This example gets the current window and logs the URLs of the tabs it contains. Note that you'll need the "tabs" [permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) or matching [host permissions](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) to access tab URLs.

> [!NOTE]
> This example is a bit unrealistic: in this situation you would more probably use {{WebExtAPIRef("windows.getCurrent()")}}.

```js
function logTabs(windowInfo) {
  for (const tabInfo of windowInfo.tabs) {
    console.log(tabInfo.url);
  }
}

function onError(error) {
  console.error(`Error: ${error}`);
}

browser.browserAction.onClicked.addListener((tab) => {
  browser.windows.get(tab.windowId, { populate: true }).then(logTabs, onError);
});
```

{{WebExtExamples}}

> [!NOTE]
> This API is based on Chromium's [`chrome.windows`](https://developer.chrome.com/docs/extensions/reference/api/windows#method-get) API. This documentation is derived from [`windows.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/windows.json) in the Chromium code.

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

---
title: windows.getAll()
slug: Mozilla/Add-ons/WebExtensions/API/windows/getAll
page-type: webextension-api-function
browser-compat: webextensions.api.windows.getAll
---

{{AddonSidebar()}}

Gets information about all open windows, passing them into a callback.

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js-nolint
let gettingAll = browser.windows.getAll(
  getInfo                // optional object
)
```

### Parameters

- `getInfo` {{optional_inline}}

  - : `object`. This controls what {{WebExtAPIRef('windows.Window')}} objects are retrieved.

    - `populate` {{optional_inline}}
      - : `boolean`. Defaults to `false`. If set to `true`, each {{WebExtAPIRef('windows.Window')}} object will have a `tabs` property that contains a list of {{WebExtAPIRef('tabs.Tab')}} objects representing the tabs in that window. The `Tab` objects will contain the `url`, `title` and `favIconUrl` properties only if the extension's manifest file includes the `"tabs"` permission or [host permissions](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) that match the tab's URL.
    - `windowTypes` {{optional_inline}}
      - : An `array` of {{WebExtAPIRef('windows.WindowType')}} objects. If set, the {{WebExtAPIRef('windows.Window')}} objects returned will be filtered based on their type. If unset the default filter is set to `['normal', 'panel', 'popup']`, with `'panel'` window types limited to the extension's own windows.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be fulfilled with an array of {{WebExtAPIRef('windows.Window')}} objects, representing all windows that match the given criteria. If any error occurs, the promise will be rejected with an error message.

## Browser compatibility

{{Compat}}

## Examples

Log the URLs for the tabs across all "normal" browser windows. Note that you'll need the "tabs" [permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) or matching [host permissions](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) to access tab URLs.

```js
function logTabsForWindows(windowInfoArray) {
  for (const windowInfo of windowInfoArray) {
    console.log(`Window: ${windowInfo.id}`);
    console.log(windowInfo.tabs.map((tab) => tab.url));
  }
}

function onError(error) {
  console.error(`Error: ${error}`);
}

browser.browserAction.onClicked.addListener((tab) => {
  browser.windows
    .getAll({
      populate: true,
      windowTypes: ["normal"],
    })
    .then(logTabsForWindows, onError);
});
```

{{WebExtExamples}}

> **Note:** This API is based on Chromium's [`chrome.windows`](https://developer.chrome.com/docs/extensions/reference/windows/#method-getAll) API. This documentation is derived from [`windows.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/windows.json) in the Chromium code.

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

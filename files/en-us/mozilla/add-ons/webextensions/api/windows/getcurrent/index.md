---
title: windows.getCurrent()
slug: Mozilla/Add-ons/WebExtensions/API/windows/getCurrent
tags:
  - API
  - Add-ons
  - Extensions
  - Method
  - Non-standard
  - Reference
  - WebExtensions
  - Windows
  - getCurrent
browser-compat: webextensions.api.windows.getCurrent
---
{{AddonSidebar()}}

Gets the current browser window, passing its details into a callback.

The "current" window is not necessarily the same as the currently focused window. If this function is called from a background script, then it returns the currently focused window. But if it is called from a script whose document is associated with a particular browser window, then it returns that browser window. For example, if the browser is displaying a sidebar, then every browser window has its own instance of the sidebar document. If a script running in the sidebar document calls `getCurrent()`, then it will return that sidebar document's window.

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js
var gettingCurrent = browser.windows.getCurrent(
  getInfo               // optional object
)
```

### Parameters

- `getInfo`{{optional_inline}}

  - : `object`.

    - `populate`{{optional_inline}}
      - : `boolean`. If true, the {{WebExtAPIRef('windows.Window')}} object will have a `tabs` property that contains a list of {{WebExtAPIRef('tabs.Tab')}} objects representing the tabs in the window. The `Tab` objects only contain the `url`, `title` and `favIconUrl` properties if the extension's manifest file includes the `"tabs"` permission or [host permissions](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) that match the tab's URL.
    - `windowTypes`{{deprecated_inline}}{{optional_inline}}
      - : An `array` of `{{WebExtAPIRef('windows.WindowType')}}` objects. If set, the {{WebExtAPIRef('windows.Window')}} returned will be filtered based on its type. If unset the default filter is set to `['normal', 'panel', 'popup']`, with `'panel'` window types limited to the extension's own windows.

> **Note:** If supplied, the `windowTypes` component of `getInfo` is ignored. The use of `windowTypes` has been deprecated as of Firefox 62.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be fulfilled with a [`windows.Window`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/windows/Window "Information about a browser window.") object containing the details of the window. If any error occurs, the promise will be rejected with an error message.

## Browser compatibility

{{Compat}}

## Examples

When the user clicks a browser action's icon, this example gets the current window and logs the URLs of the tabs it contains. Note that you'll need the "tabs" [permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) or matching [host permissions](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) to access tab URLs.

```js
function logTabs(windowInfo) {
  for (let tabInfo of windowInfo.tabs) {
    console.log(tabInfo.url);
  }
}

function onError(error) {
  console.log(`Error: ${error}`);
}

browser.browserAction.onClicked.addListener((tab) => {
  var getting = browser.windows.getCurrent({populate: true});
  getting.then(logTabs, onError);
});
```

{{WebExtExamples}}

> **Note:** This API is based on Chromium's [`chrome.windows`](https://developer.chrome.com/extensions/windows#method-getCurrent) API. This documentation is derived from [`windows.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/windows.json) in the Chromium code.
>
> Microsoft Edge compatibility data is supplied by Microsoft Corporation and is included here under the Creative Commons Attribution 3.0 United States License.

<div class="hidden"><pre>// Copyright 2015 The Chromium Authors. All rights reserved.
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
</pre></div>

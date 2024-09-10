---
title: pageAction.getPopup()
slug: Mozilla/Add-ons/WebExtensions/API/pageAction/getPopup
page-type: webextension-api-function
browser-compat: webextensions.api.pageAction.getPopup
---

{{AddonSidebar}}

Gets the URL for the HTML document set as the popup for this page action.

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js-nolint
let gettingPopup = browser.pageAction.getPopup(
  details               // object
)
```

### Parameters

- `details`

  - : `object`.

    - `tabId`
      - : `integer`. ID of the tab whose popup you want to get.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be fulfilled with a string containing the popup's URL.

## Browser compatibility

{{Compat}}

## Examples

Add a context menu item that logs the popup URL for the current tab. Note that you'll need the `contextMenus` [permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) in your [manifest](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json) to create context menu items.

```js
function gotPopup(popupURL) {
  console.log(popupURL);
}

browser.contextMenus.create({
  id: "get-popup",
  title: "Get popup URL",
});

browser.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "get-popup") {
    let gettingPopup = browser.pageAction.getPopup({ tabId: tab.id });
    gettingPopup.then(gotPopup);
  }
});
```

{{WebExtExamples}}

> [!NOTE]
> This API is based on Chromium's [`chrome.pageAction`](https://developer.chrome.com/docs/extensions/mv2/reference/pageAction#method-getPopup) API. This documentation is derived from [`page_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/page_action.json) in the Chromium code.

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

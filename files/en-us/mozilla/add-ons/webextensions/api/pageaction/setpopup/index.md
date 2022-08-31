---
title: pageAction.setPopup()
slug: Mozilla/Add-ons/WebExtensions/API/pageAction/setPopup
tags:
  - API
  - Add-ons
  - Extensions
  - Method
  - Non-standard
  - Reference
  - WebExtensions
  - pageAction
  - setPopup
browser-compat: webextensions.api.pageAction.setPopup
---
{{AddonSidebar()}}

Sets the HTML document to be opened as a popup when the user clicks on the page action's icon.

## Syntax

```js
browser.pageAction.setPopup(
  details // object
)
```

### Parameters

- `details`

  - : `object`.

    - `tabId`
      - : `integer`. The ID of the tab for which you want to set the popup.
    - `popup`

      - : `string` or `null`. URL to the HTML file to show in a popup.

        If an empty string (`""`) is passed here, the popup is disabled, and the extension will receive {{WebExtAPIRef("pageAction.onClicked")}} events.

        If `null` is passed here, the popup is reset to the popup that was specified in the [`page_action`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) manifest key.

## Browser compatibility

{{Compat}}

## Examples

Listen for {{WebExtAPIRef("tabs.onUpdated")}} events, and switch the popup if the loading status changes:

```js
browser.tabs.onUpdated.addListener((tabId, changeInfo, tabInfo) => {
  if (changeInfo.status) {
    browser.pageAction.show(tabId);
    if (changeInfo.status === "loading") {
      browser.pageAction.setPopup({
        tabId,
        popup: "/popup/loading.html"
      });
    } else {
      browser.pageAction.setPopup({
        tabId,
        popup: "/popup/complete.html"
      });
    }
  }
});
```

{{WebExtExamples}}

> **Note:** This API is based on Chromium's [`chrome.pageAction`](https://developer.chrome.com/docs/extensions/reference/pageAction/#method-setPopup) API. This documentation is derived from [`page_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/page_action.json) in the Chromium code.
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

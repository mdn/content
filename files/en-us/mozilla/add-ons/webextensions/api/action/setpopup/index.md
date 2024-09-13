---
title: action.setPopup()
slug: Mozilla/Add-ons/WebExtensions/API/action/setPopup
page-type: webextension-api-function
browser-compat: webextensions.api.action.setPopup
---

{{AddonSidebar}}

Sets the HTML document that is opened as a popup when the user clicks on the browser action's icon. Tabs without a specific popup will inherit the global popup, which defaults to the [`default_popup`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) specified in the manifest.

> [!NOTE]
> This API is available in Manifest V3 or higher.

## Syntax

```js-nolint
browser.action.setPopup(
  details // object
)
```

### Parameters

- `details`

  - : An object with the following properties:

    - `tabId` {{optional_inline}}
      - : `integer`. Sets the popup only for a specific tab. The popup is reset when the user navigates this tab to a new page.
    - `windowId` {{optional_inline}}
      - : `integer`. Sets the popup only for the specified window.
    - `popup`

      - : `string` or `null`. The HTML file to show in a popup, specified as a URL.

        This can point to a file packaged within the extension (for example, created using {{WebExtAPIRef("extension.getURL")}}), or a remote document (e.g. `https://example.org/`).

        If an empty string (`""`) is passed here, the popup is disabled, and the extension will receive {{WebExtAPIRef("action.onClicked")}} events.

        If `popup` is `null`:

        - If `tabId` is specified, removes the tab-specific popup so that the tab inherits the global popup.
        - If `windowId` is specified, removes the window-specific popup so that the window inherits the global popup.
        - If `tabId` and `windowId` are both omitted, reverts the global popup to the default value.

<!---->

- If `windowId` and `tabId` are both supplied, the function fails and the popup is not set.
- If `windowId` and `tabId` are both omitted, the global popup is set.

## Examples

This code adds a pair of context menu items that you can use to switch between two popups. Note that you'll need the "contextMenus" [permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) set in the extension's manifest to create context menu items.

```js
function onCreated() {
  if (browser.runtime.lastError) {
    console.log("error creating item:", browser.runtime.lastError);
  } else {
    console.log("item created successfully");
  }
}

browser.contextMenus.create(
  {
    id: "popup-1",
    type: "radio",
    title: "Popup 1",
    contexts: ["all"],
    checked: true,
  },
  onCreated,
);

browser.contextMenus.create(
  {
    id: "popup-2",
    type: "radio",
    title: "Popup 2",
    contexts: ["all"],
    checked: false,
  },
  onCreated,
);

browser.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "popup-1") {
    browser.action.setPopup({ popup: "/popup/popup1.html" });
  } else if (info.menuItemId === "popup-2") {
    browser.action.setPopup({ popup: "/popup/popup2.html" });
  }
});
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}

> [!NOTE]
> This API is based on Chromium's [`chrome.action`](https://developer.chrome.com/docs/extensions/reference/api/action#method-setPopup) API. This documentation is derived from [`browser_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/browser_action.json) in the Chromium code.

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

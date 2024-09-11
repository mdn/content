---
title: browserAction.setTitle()
slug: Mozilla/Add-ons/WebExtensions/API/browserAction/setTitle
page-type: webextension-api-function
browser-compat: webextensions.api.browserAction.setTitle
---

{{AddonSidebar}}

Sets the browser action's title. The title is displayed in a tooltip over the browser action's icon. You can pass a `tabId` in or a `windowId` as an optional parameter — if you do this then the title is changed only for the given tab or the given window. Tabs or windows without a specific title will inherit the global title text, which defaults to the [`default_title`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) or [`name`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/name) specified in the manifest.

## Syntax

```js-nolint
browser.browserAction.setTitle(
  details // object
)
```

### Parameters

- `details`

  - : `object`. The new title and optionally the ID of the tab or window to target.

    - `title`

      - : `string` or `null`. The string the browser action should display when moused over.

        If `title` is an empty string, the used title will be the extension name, but {{WebExtAPIRef("browserAction.getTitle")}} will still provide the empty string.

        If `title` is `null`:

        - If `tabId` is specified, and the tab has a tab-specific title set, then the tab will inherit the title from the window to which it belongs.
        - if `windowId` is specified, and the window has a window-specific title set, then the window will inherit the global title.
        - Otherwise, the global title will be reset to the manifest title.

    - `tabId` {{optional_inline}}
      - : `integer`. Sets the title only for the given tab.
    - `windowId` {{optional_inline}}
      - : `integer`. Sets the title for the given window.

<!---->

- If `windowId` and `tabId` are both supplied, the function fails and the title is not set.
- If `windowId` and `tabId` are both omitted, the global title is set.

## Browser compatibility

{{Compat}}

## Examples

This code switches the title between "this" and "that" each time the user clicks the browser action:

```js
function toggleTitle(title) {
  if (title === "this") {
    browser.browserAction.setTitle({ title: "that" });
  } else {
    browser.browserAction.setTitle({ title: "this" });
  }
}

browser.browserAction.onClicked.addListener(() => {
  let gettingTitle = browser.browserAction.getTitle({});
  gettingTitle.then(toggleTitle);
});
```

{{WebExtExamples}}

> [!NOTE]
> This API is based on Chromium's [`chrome.browserAction`](https://developer.chrome.com/docs/extensions/mv2/reference/browserAction#method-setTitle) API. This documentation is derived from [`browser_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/browser_action.json) in the Chromium code.

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

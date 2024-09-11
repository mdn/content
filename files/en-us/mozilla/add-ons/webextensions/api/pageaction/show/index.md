---
title: pageAction.show()
slug: Mozilla/Add-ons/WebExtensions/API/pageAction/show
page-type: webextension-api-function
browser-compat: webextensions.api.pageAction.show
---

{{AddonSidebar}}

Shows the {{WebExtAPIRef("pageAction")}} for a given {{WebExtAPIRef("tabs/Tab", "tab")}}. The page action is shown whenever the given tab is the active tab.

`show()` overrides pattern matching, so the page action will be shown in the specified tab even if [`show_matches`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) does not match the URL or [`hide_matches`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) does.

Note that calling `show()` has no effect on a tab with no content loaded.

## Syntax

```js-nolint
browser.pageAction.show(
  tabId // integer
)
```

### Parameters

- `tabId`
  - : `integer`. The ID of the {{WebExtAPIRef("tabs/Tab", "tab")}} for which you want to show the page action.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be fulfilled with `undefined`.

## Browser compatibility

{{Compat}}

## Examples

This example shows the {{WebExtAPIRef("pageAction")}} for the active tab when the user selects a context menu item.

> [!NOTE]
> You'll need the `contextMenus` [permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) in your [manifest](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json) to create context menu items.

```js
browser.contextMenus.create({
  id: "show",
  title: "Show page action",
});

browser.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "show") {
    browser.pageAction.show(tab.id);
  }
});
```

{{WebExtExamples}}

> [!NOTE]
> This API is based on Chromium's [`chrome.pageAction`](https://developer.chrome.com/docs/extensions/mv2/reference/pageAction#method-show) API. This documentation is derived from [`page_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/page_action.json) in the Chromium code.

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

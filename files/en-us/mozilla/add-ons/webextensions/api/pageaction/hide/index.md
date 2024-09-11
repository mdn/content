---
title: pageAction.hide()
slug: Mozilla/Add-ons/WebExtensions/API/pageAction/hide
page-type: webextension-api-function
browser-compat: webextensions.api.pageAction.hide
---

{{AddonSidebar}}

Hides the page action for a given tab.

`hide()` overrides pattern matching, so the page action will not be shown in the specified tab even if its URL is matched by [`show_matches`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action).

## Syntax

```js-nolint
browser.pageAction.hide(
  tabId // integer
)
```

### Parameters

- `tabId`
  - : `integer`. The ID of the tab for which you want to hide the page action.

## Browser compatibility

{{Compat}}

## Examples

Hide the page action for the current tab when the user clicks it:

```js
browser.pageAction.onClicked.addListener((tab) => {
  browser.pageAction.hide(tab.id);
});
```

{{WebExtExamples}}

> [!NOTE]
> This API is based on Chromium's [`chrome.pageAction`](https://developer.chrome.com/docs/extensions/mv2/reference/pageAction#method-hide) API. This documentation is derived from [`page_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/page_action.json) in the Chromium code.

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

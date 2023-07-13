---
title: sidebarAction.setTitle()
slug: Mozilla/Add-ons/WebExtensions/API/sidebarAction/setTitle
page-type: webextension-api-function
browser-compat: webextensions.api.sidebarAction.setTitle
---

{{AddonSidebar()}}

Sets the sidebar's title. The title is displayed anywhere the browser lists available sidebars. For example, Firefox will show it in the "View > Sidebar" menu. It's also shown at the top o the sidebar when the sidebar is open.

## Types of title

Your extension should specify an title for the sidebar in the [sidebar_action](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action) manifest key. This is called the _"manifest title"_. If you don't specify the manifest title, it will default to the extension name.

If you set a new title using `setTitle()`, and include the `tabId` option, then the title is set only for the given tab. This title is called the _"tab-specific title"_.

If you set a new title using `setTitle()`, and include the `windowId` option, then the title is set only for the given window. This title is called the _"window-specific title"_, and will appear in all tabs of that window that do not have a tab-specific title set.

If you set a new title using `setTitle()`, and omit both the `tabId` and `windowId` options, then this sets the _"global title"_. The global title will then appear in all tabs that do not have a tab-specific title set and whose window does not have a window-specific title.

## Syntax

```js-nolint
browser.sidebarAction.setTitle(
  details // object
)
```

### Parameters

- `details`

  - : `object`. An object with the following properties:

    - `title`

      - : `string` or `null`. The sidebar's new title.

        If `title` is an empty string, the used title will be the extension name, but {{WebExtAPIRef("sidebarAction.getTitle")}} will still provide the empty string.

        If `title` is `null`, then a previously set title will be removed, so that:

        - If `tabId` is specified, and the tab has a tab-specific title set, then the tab will inherit the title from the window it belongs to.
        - If `windowId` is specified, and the window has a window-specific title set, then the window will inherit the global title.
        - Otherwise, the global title will be reset to the manifest title.

    - `tabId` {{optional_inline}}
      - : `integer`. Sets the title only for the given tab.
    - `windowId` {{optional_inline}}
      - : `integer`. Sets the title only for the given window.

<!---->

- If `windowId` and `tabId` are both supplied, the function fails and the title is not set.
- If `windowId` and `tabId` are both omitted, the global title is set.

## Browser compatibility

{{Compat}}

## Examples

This code changes the title for the sidebar when the user clicks a browser action, but only for the current tab:

```js
let title = "A different title";

function setTitleForTab(tab) {
  browser.sidebarAction.setTitle({ title, tabId: tab.id });
}

browser.browserAction.onClicked.addListener(setTitleForTab);
```

{{WebExtExamples}}

> **Note:** This API is based on Opera's [`chrome.sidebarAction`](https://dev.opera.com/extensions/sidebar-action-api/) API.

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

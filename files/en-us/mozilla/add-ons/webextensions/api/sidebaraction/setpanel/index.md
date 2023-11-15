---
title: sidebarAction.setPanel()
slug: Mozilla/Add-ons/WebExtensions/API/sidebarAction/setPanel
page-type: webextension-api-function
browser-compat: webextensions.api.sidebarAction.setPanel
---

{{AddonSidebar()}}

Sets the sidebar's panel: that is, the HTML document that defines the content of this sidebar.

## Types of panel

Sidebars always have a _"manifest panel"_, which is the panel defined in the [`sidebar_action`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action) manifest key.

If you set a new panel using `setPanel()`, and include the `tabId` option, then the panel is set only for the given tab. This panel is referred to as the _"tab-specific panel"_.

If you set a new panel using `setPanel()`, and include the `windowId` option, then the panel is set only for the given window. This panel is referred to as the _"window-specific panel"_, and will appear in all tabs of that window that do not have a tab-specific panel set.

If you set a new panel using `setPanel()`, and omit both the `tabId` and `windowId` options, then this sets the _"global panel"_. The global panel will then appear in all tabs that do not have a tab-specific panel set and whose window does not have a window-specific panel.

## Syntax

```js-nolint
browser.sidebarAction.setPanel(
  details // object
)
```

### Parameters

- `details`

  - : `object`. An object with the following properties:

    - `panel`

      - : `string` or `null`. The panel to load into the sidebar, specified as a URL pointing to an HTML document, or `null`, or an empty string.

        This can point to a file packaged within the extension (for example, created using {{WebExtAPIRef("runtime.getURL")}}), or a remote document (e.g. `https://example.org/`). It must be a valid URL.

        If `panel` is `null` or `""`, then a previously set panel will be removed, so that:

        - If `tabId` is specified, and the tab has a tab-specific panel set, then the tab will inherit the panel from the window it belongs to.
        - If `windowId` is specified, and the window has a window-specific panel set, then the window will inherit the global panel.
        - Otherwise, the global panel will be reset to the manifest panel.

    - `tabId` {{optional_inline}}
      - : `integer`. Sets the panel only for the given tab.
    - `windowId` {{optional_inline}}
      - : `integer`. Sets the panel only for the given window.

<!---->

- If `windowId` and `tabId` are both specified, the function fails and the panel is not set.
- If `windowId` and `tabId` are both omitted, the global panel is set.

## Examples

This code toggles the sidebar document when the user clicks a browser action:

```js
let thisPanel = browser.runtime.getURL("/this.html");
let thatPanel = browser.runtime.getURL("/that.html");

function toggle(panel) {
  if (panel === thisPanel) {
    browser.sidebarAction.setPanel({ panel: thatPanel });
  } else {
    browser.sidebarAction.setPanel({ panel: thisPanel });
  }
}

browser.browserAction.onClicked.addListener(() => {
  browser.sidebarAction.getPanel({}).then(toggle);
});
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}

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

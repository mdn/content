---
title: tabs.update()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/update
page-type: webextension-api-function
browser-compat: webextensions.api.tabs.update
---

{{AddonSidebar}}

Navigate the tab to a new URL, or modify other properties of the tab.

To use this function, pass the ID of the tab to update, and an `updateProperties` object containing the properties you want to update. Properties that are not specified in `updateProperties` are not modified.

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js-nolint
let updating = browser.tabs.update(
  tabId,              // optional integer
  updateProperties    // object
)
```

### Parameters

- `tabId` {{optional_inline}}
  - : `integer`. Defaults to the selected tab of the current window.
- `updateProperties`

  - : `object`. The set of properties to update for this tab. To learn more about these properties, see the {{WebExtAPIRef("tabs.Tab")}} documentation.

    - `active` {{optional_inline}}
      - : `boolean`. Whether the tab should become active. Does not affect whether the window is focused (see {{WebExtAPIRef('windows.update')}}). If `true`, non-active highlighted tabs will stop being highlighted. If `false`, does nothing.
    - `autoDiscardable` {{optional_inline}}
      - : `boolean`. Whether the tab can be discarded by the browser. The default value is `true`. When set to `false`, the browser cannot automatically discard the tab. However, the tab can be discarded by {{WebExtAPIRef("tabs.discard")}}.
    - `highlighted` {{optional_inline}}

      - : `boolean`. Adds or removes the tab from the current selection. If `true` and the tab is not highlighted, it will become active by default.

        If you only want to highlight the tab without activating it, Firefox accepts setting `highlighted` to `true` and `active` to `false`. Other browsers may activate the tab even in this case.

    - `loadReplace` {{optional_inline}}

      - : `boolean`. Whether the new URL should replace the old URL in the tab's navigation history, as accessed via the "Back" button.

        For example, suppose the user creates a new tab using Ctrl+T. By default, in Firefox, this would load "about:newtab". If your extension then updates this page using `tabs.update`, without `loadReplace`, the "Back" button will be enabled and will take the user back to "about:newtab". If the extension sets `loadReplace`, then the "Back" button will be disabled and it will be just as if the URL supplied by the extension was the first page visited in that tab.

        Note though that the original URL will still appear in the browser's global history.

    - `muted` {{optional_inline}}
      - : `boolean`. Whether the tab should be muted.
    - `openerTabId` {{optional_inline}}
      - : `integer`. The ID of the tab that opened this tab. If specified, the opener tab must be in the same window as this tab. Set to `-1` to clear the set `openerTabId`.
    - `pinned` {{optional_inline}}
      - : `boolean`. Whether the tab should be pinned.
    - `selected` {{deprecated_inline}} {{optional_inline}}
      - : `boolean`. Whether the tab should be selected. This property has been replaced by `active` and `highlighted`.
    - `successorTabId` {{optional_inline}}
      - : `integer`. The id of the tab's successor.
    - `url` {{optional_inline}}

      - : `string`. A URL to navigate the tab to.

        For security reasons, in Firefox, this may not be a privileged URL. So passing any of the following URLs will fail, with {{WebExtAPIRef("runtime.lastError")}} being set to an error message:

        - chrome: URLs
        - [javascript: URLs](/en-US/docs/Web/URI/Reference/Schemes/javascript)
        - [data: URLs](/en-US/docs/Web/URI/Reference/Schemes/data)
        - file: URLs (i.e., files on the filesystem. However, to use a file packaged inside the extension, see below)
        - privileged about: URLs (for example, `about:config`, `about:addons`, `about:debugging`, `about:newtab`). Non-privileged URLs (e.g., `about:blank`) are allowed.

        To load a page that's packaged with your extension, specify an absolute URL starting at the extension's manifest.json file. For example: '/path/to/my-page.html'. If you omit the leading '/', the URL is treated as a relative URL, and different browsers may construct different absolute URLs.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be fulfilled with a {{WebExtAPIRef('tabs.Tab')}} object containing details about the updated tab. The {{WebExtAPIRef('tabs.Tab')}} object doesn't contain `url`, `title` and `favIconUrl` unless matching [host permissions](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) or the `"tabs"` permission has been requested. If the tab could not be found or some other error occurs, the promise will be rejected with an error message.

## Examples

Navigate the active tab in the current window to `https://developer.mozilla.org`:

```js
function onUpdated(tab) {
  console.log(`Updated tab: ${tab.id}`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

let updating = browser.tabs.update({ url: "https://developer.mozilla.org" });
updating.then(onUpdated, onError);
```

Activate the first tab in the current window, and navigate it to `https://developer.mozilla.org`:

```js
function onUpdated(tab) {
  console.log(`Updated tab: ${tab.id}`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

function updateFirstTab(tabs) {
  let updating = browser.tabs.update(tabs[0].id, {
    active: true,
    url: "https://developer.mozilla.org",
  });
  updating.then(onUpdated, onError);
}

let querying = browser.tabs.query({ currentWindow: true });
querying.then(updateFirstTab, onError);
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}

> [!NOTE]
> This API is based on Chromium's [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/api/tabs#method-update) API. This documentation is derived from [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) in the Chromium code.

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

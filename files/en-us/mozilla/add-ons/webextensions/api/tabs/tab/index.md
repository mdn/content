---
title: tabs.Tab
slug: Mozilla/Add-ons/WebExtensions/API/tabs/Tab
page-type: webextension-api-type
browser-compat: webextensions.api.tabs.Tab
---

{{AddonSidebar()}}

The type **`tabs.Tab`** contains information about a tab. This provides access to information about what content is in the tab, how large the content is, what special states or restrictions are in effect, and so forth.

## Type

Values of this type are objects. They contain the following properties:

- `active`

  - : `boolean`. Whether the tab is active in its window. This may be true even if the tab's window is not currently focused.

    The active tab is usually the selected one. However, on Firefox for Android, extension popups open in a new tab. When this popup tab is selected, the active tab will instead be the one in which the popup opened.

- `attention` {{optional_inline}}
  - : `boolean`. Indicates whether the tab is drawing attention. For example, when the tab displays a modal dialog, `attention` will be `true`.
- `audible` {{optional_inline}}
  - : `boolean`. Indicates whether the tab is producing sound. However, the user will not hear the sound if the tab is muted (see the `mutedInfo` property).
- `autoDiscardable` {{optional_inline}}
  - : `boolean`. Whether the tab can be discarded by the browser. The default value is `true`. When set to `false`, the browser cannot automatically discard the tab. However, the tab can be discarded by {{WebExtAPIRef("tabs.discard")}}.
- `cookieStoreId` {{optional_inline}}
  - : `string`. The cookie store of the tab. If different tabs can have different cookie stores (for example, to support [contextual identity](https://wiki.mozilla.org/Security/Contextual_Identity_Project/Containers)), you can pass this as the `storeId` option into various methods of the {{WebExtAPIRef("cookies")}} API, to set and get cookies associated with this tab's cookie store. Only present if the extension has the `"cookies"` [permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions).
- `discarded` {{optional_inline}}
  - : `boolean`. Whether the tab is discarded. A discarded tab is one whose content has been unloaded from memory, but is still visible in the tab strip. Its content gets reloaded the next time it's activated.
- `favIconUrl` {{optional_inline}}
  - : `string`. The URL of the tab's favicon. Only present if the extension has the `"tabs"` [permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) or [host permissions](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions). It may also be `undefined` if the page has no favicon, or an empty string if the tab is loading.
- `height` {{optional_inline}}
  - : `integer`. The height of the tab in pixels.
- `hidden`
  - : `boolean`. Whether the tab is hidden.
- `highlighted`

  - : `boolean`. Whether the tab is highlighted, i.e. part of the current tab selection. An active tab is always highlighted, but some browsers may allow additional tabs to be highlighted, for example by clicking them while holding <kbd>Ctrl</kbd>, <kbd>Shift</kbd> or <kbd>⌘ Command</kbd> keys.

    Firefox for Android doesn't support highlighting multiple tabs.

- `id` {{optional_inline}}
  - : `integer`. The tab's ID. Tab IDs are unique within a browser session. The tab ID may also be set to {{WebExtAPIRef('tabs.TAB_ID_NONE')}} for browser windows that don't host content tabs (for example, devtools windows).
- `incognito`
  - : `boolean`. Whether the tab is in a private browsing window.
- `index`
  - : `integer`. The zero-based index of the tab within its window.
- `isArticle`
  - : `boolean`. True if the tab can be [rendered in Reader Mode](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/toggleReaderMode), false otherwise.
- `isInReaderMode`
  - : `boolean`. True if the tab is currently being [rendered in Reader Mode](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/toggleReaderMode), false otherwise.
- `lastAccessed`
  - : `double`. Time at which the tab was last accessed, in [milliseconds since the epoch](https://en.wikipedia.org/wiki/Unix_time).
- `mutedInfo` {{optional_inline}}
  - : {{WebExtAPIRef('tabs.MutedInfo')}}. The current muted state for the tab and the reason for the last state change.
- `openerTabId` {{optional_inline}}
  - : `integer`. The ID of the tab that opened this tab, if any. This property is only present if the opener tab still exists and is in the same window.
- `pinned`
  - : `boolean`. Whether the tab is pinned.
- `selected` {{deprecated_inline}}
  - : `boolean`. Whether the tab is selected. This property has been replaced by `active` and `highlighted`.
- `sessionId` {{optional_inline}}
  - : `string`. The session ID used to uniquely identify a `Tab` obtained from the {{WebExtAPIRef('sessions')}} API.
- `status` {{optional_inline}}
  - : `string`. Either _loading_ or _complete_.
- `successorTabId` {{optional_inline}}
  - : `integer` The ID of the tab's successor.
- `title` {{optional_inline}}
  - : `string`. The title of the tab. Only present if the extension has the `"tabs"` [permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) or [host permissions](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) that matches the tab's URL.
- `url` {{optional_inline}}
  - : `string`. The URL of the document that the tab is displaying. Only present if the extension has the `"tabs"` [permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) or a matching [host permissions](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions).
- `width` {{optional_inline}}
  - : `integer`. The width of the tab in pixels.
- `windowId`
  - : `integer`. The ID of the window that hosts this tab.

## Browser compatibility

{{Compat}}

{{WebExtExamples}}

> **Note:** This API is based on Chromium's [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/tabs/#type-Tab) API. This documentation is derived from [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) in the Chromium code.

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

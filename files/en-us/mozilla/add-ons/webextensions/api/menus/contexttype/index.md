---
title: menus.ContextType
slug: Mozilla/Add-ons/WebExtensions/API/menus/ContextType
page-type: webextension-api-type
browser-compat: webextensions.api.menus.ContextType
---

{{AddonSidebar}}

The different contexts a menu item can appear in.

## Type

Values of this type are strings. The item is displayed when the given context applies. Possible values are:

- all
  - : Specifying 'all' is equivalent to the combination of all other contexts except for 'bookmark', 'tab' and 'tools_menu'.
- action
  - : Applies when the user context-clicks your browser action in a Manifest V3 extension. The maximum number of items that can be added to the top-level browser action context menu is {{WebExtAPIRef("menus.ACTION_MENU_TOP_LEVEL_LIMIT")}}, but you can add any number of items to submenus.
- audio
  - : Applies when the user context-clicks an [audio](/en-US/docs/Web/HTML/Element/audio) element.
- bookmark

  - : Applies when the user context-clicks a bookmark item in the bookmarks toolbar, bookmarks menu, bookmarks sidebar (<kbd>Ctrl</kbd>+<kbd>B</kbd>) and the Library window (<kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>B</kbd>). The latter two are supported as of Firefox 66. Requires the "bookmarks" [API permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) in the manifest.

- browser_action
  - : Applies when the user context-clicks your browser action in a Manifest V2 extension. The maximum number of items that can be added to the top-level browser action context menu is {{WebExtAPIRef("menus.ACTION_MENU_TOP_LEVEL_LIMIT")}}, but you can add any number of items to submenus.
- editable
  - : Applies when the user context-clicks an editable element, like a [textarea](/en-US/docs/Web/HTML/Element/textarea).
- frame
  - : Applies when the user context-clicks in a nested [iframe](/en-US/docs/Web/HTML/Element/iframe).
- image
  - : Applies when the user context-clicks an image.
- link
  - : Applies when the user context-clicks on a link.
- page
  - : Applies when the user context-clicks in the page, but none of the other page contexts apply (for example, the click is not on an image or a nested iframe or a link).
- page_action
  - : Applies when the user context-clicks your page action. The maximum number of items that can be added to the top-level page action context menu is {{WebExtAPIRef("menus.ACTION_MENU_TOP_LEVEL_LIMIT")}}, but you can add any number of items to submenus.
- password
  - : Applies when the user context-clicks on a [password input element](/en-US/docs/Web/HTML/Element/input/password).
- selection
  - : Applies when part of the page is selected.
- tab

  - : Applies when the user context-clicks on a tab (specifically, this refers to the tab-strip or other user interface element enabling the user to switch from one browser tab to another, not to the page itself).

    From Firefox 63, clicking the menu item on a tab grants the [activeTab](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission) permission for the tab clicked, even if that isn't the currently active tab.

- tools_menu
  - : The item will be added to the browser's tools menu. Note that this is only available if you access `ContextType` through the `menus` namespace. It is not available if you access it through the `contextMenus` namespace.
- video
  - : Applies when the user context-clicks a [video](/en-US/docs/Web/HTML/Element/video) element.

Note that "launcher" is not supported.

## Browser compatibility

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> This API is based on Chromium's [`chrome.contextMenus`](https://developer.chrome.com/docs/extensions/reference/api/contextMenus#type-ContextType) API. This documentation is derived from [`context_menus.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/context_menus.json) in the Chromium code.

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

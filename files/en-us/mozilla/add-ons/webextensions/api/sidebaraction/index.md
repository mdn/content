---
title: sidebarAction
slug: Mozilla/Add-ons/WebExtensions/API/sidebarAction
page-type: webextension-api
browser-compat: webextensions.api.sidebarAction
---

{{AddonSidebar}}

Gets and sets properties of an extension's sidebar.

A [sidebar](/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Sidebars) is a pane that is displayed at the left-hand or right-hand side of the browser window, next to the web page. The browser provides a UI that enables the user to see the currently available sidebars and to select a sidebar to display. Using the [`sidebar_action`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action) manifest.json key, an extension can define its own sidebar. Using the `sidebarAction` API described here, an extension can get and set the sidebar's properties.

The `sidebarAction` API is closely modeled on the {{WebExtAPIRef("browserAction")}} API.

The sidebarAction API is based on Opera's [sidebarAction API](https://dev.opera.com/extensions/sidebar-action-api/). However, note that the following are not yet supported: `setBadgeText()`, `getBadgeText()`, `setBadgeBackgroundColor()`, `getBadgeBackgroundColor()`, `onFocus`, `onBlur`.

## Types

- {{WebExtAPIRef("sidebarAction.ImageDataType")}}
  - : Pixel data for an image. Must be an [`ImageData`](/en-US/docs/Web/API/ImageData) object (for example, from a {{htmlelement("canvas")}} element).

## Functions

- {{WebExtAPIRef("sidebarAction.close()")}}
  - : Closes the sidebar.
- {{WebExtAPIRef("sidebarAction.getPanel()")}}
  - : Gets the sidebar's panel.
- {{WebExtAPIRef("sidebarAction.getTitle()")}}
  - : Gets the sidebar's title.
- {{WebExtAPIRef("sidebarAction.isOpen()")}}
  - : Checks whether the sidebar is open or not.
- {{WebExtAPIRef("sidebarAction.open()")}}
  - : Opens the sidebar.
- {{WebExtAPIRef("sidebarAction.setIcon()")}}
  - : Sets the sidebar's icon.
- {{WebExtAPIRef("sidebarAction.setPanel()")}}
  - : Sets the sidebar's panel.
- {{WebExtAPIRef("sidebarAction.setTitle()")}}
  - : Sets the sidebar's title. This will be displayed in any UI provided by the browser to list sidebars, such as a menu.
- {{WebExtAPIRef("sidebarAction.toggle()")}}
  - : Toggles the visibility of the sidebar.

## Browser compatibility

{{Compat}}

## Example add-ons

- [annotate-page](https://github.com/mdn/webextensions-examples/tree/main/annotate-page)

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

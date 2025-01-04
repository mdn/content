---
title: action
slug: Mozilla/Add-ons/WebExtensions/API/action
page-type: webextension-api
browser-compat: webextensions.api.action
---

{{AddonSidebar}}

Read and modify attributes of and listen to clicks on the browser toolbar button defined with the [`action`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/action) manifest key.

> [!NOTE]
> This API is available in Manifest V3 or higher. It replaces the Manifest V2 APIs {{WebExtAPIRef("browserAction")}} and, in Chrome and Safari, {{WebExtAPIRef("pageAction")}}.

A [browser action](/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button) is a button in the browser's toolbar.

You can associate a popup with the button. Like a web page, the popup is specified using HTML, CSS, and JavaScript. JavaScript running in the popup gets access to the same WebExtension APIs as your background scripts, but its global context is the popup, not the current page displayed in the browser. To affect web pages, you need to communicate with them via [messages](/en-US/docs/Mozilla/Add-ons/WebExtensions/Modify_a_web_page#messaging).

If you specify a popup, it is shown — and the content loaded — when the user clicks the icon. If you do not specify a popup, an event is dispatched to your extension when the user clicks the icon.

The button also has a context menu, and you can add items to this menu with the {{WebExtAPIRef("menus")}} API using the `action` {{WebExtAPIRef("menus.ContextType")}}.

With the `action` API, you can:

- use {{WebExtAPIRef("action.onClicked")}} to listen for clicks on the icon.
- get and set the icon's properties — icon, title, popup, and so on. You can get and set these globally across all tabs or for a tab by passing the tab ID as an additional argument.

## Types

- {{WebExtAPIRef("action.ColorArray")}}
  - : An array of four integers in the range 0-255 defining an RGBA color.
- {{WebExtAPIRef("action.ImageDataType")}}
  - : Pixel data for an image. Must be an [`ImageData`](/en-US/docs/Web/API/ImageData) object (for example, from a {{htmlelement("canvas")}} element).

## Functions

- {{WebExtAPIRef("action.setTitle()")}}
  - : Sets the browser action's title. This will be displayed in a tooltip.
- {{WebExtAPIRef("action.getTitle()")}}
  - : Gets the browser action's title.
- {{WebExtAPIRef("action.setIcon()")}}
  - : Sets the browser action's icon.
- {{WebExtAPIRef("action.setPopup()")}}
  - : Sets the HTML document to be opened as a popup when the user clicks on the browser action's icon.
- {{WebExtAPIRef("action.getPopup()")}}
  - : Gets the HTML document set as the browser action's popup.
- {{WebExtAPIRef("action.openPopup()")}}
  - : Open the browser action's popup.
- {{WebExtAPIRef("action.setBadgeText()")}}
  - : Sets the browser action's badge text. The badge is displayed on top of the icon.
- {{WebExtAPIRef("action.getBadgeText()")}}
  - : Gets the browser action's badge text.
- {{WebExtAPIRef("action.setBadgeBackgroundColor()")}}
  - : Sets the badge's background color.
- {{WebExtAPIRef("action.getBadgeBackgroundColor()")}}
  - : Gets the badge's background color.
- {{WebExtAPIRef("action.setBadgeTextColor()")}}
  - : Sets the badge's text color.
- {{WebExtAPIRef("action.getBadgeTextColor()")}}
  - : Gets the badge's text color.
- {{WebExtAPIRef("action.getUserSettings()")}}
  - : Gets the user-specified settings for the browser action.
- {{WebExtAPIRef("action.enable()")}}
  - : Enables the browser action for a tab. By default, browser actions are enabled for all tabs.
- {{WebExtAPIRef("action.disable()")}}
  - : Disables the browser action for a tab, meaning that it cannot be clicked when that tab is active.
- {{WebExtAPIRef("action.isEnabled()")}}
  - : Checks whether the browser action is enabled or not.

## Events

- {{WebExtAPIRef("action.onClicked")}}
  - : Fired when a browser action icon is clicked. This event will not fire if the browser action has a popup.

{{WebExtExamples("h2")}}

## Browser compatibility

{{Compat}}

> [!NOTE]
> This API is based on Chromium's [`chrome.action`](https://developer.chrome.com/docs/extensions/reference/api/action) API. This documentation is derived from [`action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/action.json) in the Chromium code.

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

---
title: pageAction
slug: Mozilla/Add-ons/WebExtensions/API/pageAction
tags:
  - API
  - Add-ons
  - Extensions
  - Interface
  - Non-standard
  - Reference
  - WebExtensions
  - pageAction
browser-compat: webextensions.api.pageAction
---
{{AddonSidebar}}

A [page action](/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions) is a clickable icon inside the browser's address bar.

![](page-action.png)

You can listen for clicks on the icon, or specify a [popup](/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Popups) that will open when the icon is clicked.

If you specify a popup, you can define its contents and behavior using HTML, CSS, and JavaScript—just like a normal web page. JavaScript running in the popup gets access to all the same WebExtension APIs as your background scripts.

You can define most of a page action's properties declaratively using the [`page_action` key](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) in your [`manifest.json`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json), but can also redefine them programmatically using this API.

Page actions are for actions that are only relevant to particular pages (such as "bookmark the current tab"). If they are relevant to the browser as a whole (such as "show all bookmarks"), use a browser action instead.

## Types

- {{WebExtAPIRef("pageAction.ImageDataType")}}
  - : Pixel data for an image.

## Functions

- {{WebExtAPIRef("pageAction.show()")}}
  - : Shows the page action for a given tab.
- {{WebExtAPIRef("pageAction.hide()")}}
  - : Hides the page action for a given tab.
- {{WebExtAPIRef("pageAction.isShown()")}}
  - : Checks whether the page action is shown or not.
- {{WebExtAPIRef("pageAction.setTitle()")}}
  - : Sets the page action's title. This is displayed in a tooltip over the page action.
- {{WebExtAPIRef("pageAction.getTitle()")}}
  - : Gets the page action's title.
- {{WebExtAPIRef("pageAction.setIcon()")}}
  - : Sets the page action's icon.
- {{WebExtAPIRef("pageAction.setPopup()")}}
  - : Sets the URL for the page action's popup.
- {{WebExtAPIRef("pageAction.getPopup()")}}
  - : Gets the URL for the page action's popup.
- {{WebExtAPIRef("pageAction.openPopup()")}}
  - : Opens the page action's popup.

## Events

- {{WebExtAPIRef("pageAction.onClicked")}}
  - : Fired when a page action icon is clicked. This event will not fire if the page action has a popup.

## Browser compatibility

{{Compat}}

{{WebExtExamples("h2")}}

> **Note:** This API is based on Chromium's [`chrome.pageAction`](https://developer.chrome.com/docs/extensions/reference/pageAction/) API. This documentation is derived from [`page_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/page_action.json) in the Chromium code.
>
> Microsoft Edge compatibility data is supplied by Microsoft Corporation and is included here under the Creative Commons Attribution 3.0 United States License.

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

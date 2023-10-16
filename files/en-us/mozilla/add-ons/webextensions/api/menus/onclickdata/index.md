---
title: menus.OnClickData
slug: Mozilla/Add-ons/WebExtensions/API/menus/OnClickData
page-type: webextension-api-type
browser-compat: webextensions.api.menus.OnClickData
---

{{AddonSidebar()}}

Information passed to the {{WebExtAPIRef("menus.onClicked")}} event listener when a menu item is clicked.

## Type

Values of this type are objects. They contain the following properties:

- `bookmarkId` {{optional_inline}}
  - : `string`. The ID of the bookmark where the context menu was clicked.
- `button` {{optional_inline}}
  - : `integer`. Which mouse button was pressed. The values are the same as for [`MouseEvent.button`](/en-US/docs/Web/API/MouseEvent/button).
- `checked` {{optional_inline}}
  - : `boolean`. A flag indicating whether a checkbox or radio item was checked after it was clicked.
- `editable`
  - : `boolean`. A flag indicating whether the element is editable: for example, if it is a [textarea](/en-US/docs/Web/HTML/Element/textarea).
- `frameId` {{optional_inline}}
  - : `integer`. The ID of the frame in which the item was clicked. The frame ID can be used in other APIs that accept frame IDs, such as {{WebExtAPIRef("tabs.sendMessage()")}}. If the item was clicked in the top level document, `frameId` is zero. If the item was clicked outside the page entirely (for example, in the `tools_menu` or `tab` context), then `frameId` is `undefined`.
- `frameUrl` {{optional_inline}}
  - : `string`. The URL of the frame of the element where the context menu was clicked, if it was in a frame.
- `linkText` {{optional_inline}}
  - : `string`. If the element is a link, the text for the link. If the link contains no text, the URL itself is given here.
- `linkUrl` {{optional_inline}}
  - : `string`. If the element is a link, the URL it points to.
- `mediaType` {{optional_inline}}
  - : `string`. One of "image", "video", or "audio" if the context menu was activated on one of these types of elements.
- `menuItemId`
  - : `integer` or `string`. The ID of the menu item that was clicked.
- `modifiers`
  - : `array` of `string`. An array containing any modifier keys that were pressed when the item was clicked. Possible values are: "Alt", "Command", "Ctrl", "MacCtrl", and "Shift". On a Mac, if the user has the Control key pressed, then both "Ctrl" and "MacCtrl" are included.
- `pageUrl` {{optional_inline}}
  - : `string`. The URL of the page in which the menu item was clicked. This property is not present if the click occurred in a context where there is no current page, such as on a browser action.
- `parentMenuItemId` {{optional_inline}}
  - : `integer` or `string`. The parent ID, if any, for the item clicked.
- `selectionText` {{optional_inline}}
  - : `string`. If some text was selected in the page, this contains the selected text.
- `srcUrl` {{optional_inline}}
  - : `string`. If present, the `src` value for the media in the clicked element.
- `targetElementId` {{optional_inline}}
  - : `integer`. An identifier of the element, if any, over which the context menu was created. Use {{WebExtAPIRef("menus.getTargetElement()")}} in the content script to locate the element. Note that this is not the [id](/en-US/docs/Web/HTML/Global_attributes/id) attribute of the page element.
- `viewType` {{optional_inline}}
  - : {{WebExtAPIRef("extension.ViewType", "ViewType")}}. The type of extension view.
- `wasChecked` {{optional_inline}}
  - : `boolean`. A flag indicating whether a checkbox or radio item was checked before it was clicked.

## Browser compatibility

{{Compat}}

{{WebExtExamples}}

> **Note:** This API is based on Chromium's [`chrome.contextMenus`](https://developer.chrome.com/docs/extensions/reference/contextMenus/#type-OnClickData) API. This documentation is derived from [`context_menus.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/context_menus.json) in the Chromium code.

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

---
title: menus.ItemType
slug: Mozilla/Add-ons/WebExtensions/API/menus/ItemType
page-type: webextension-api-type
browser-compat: webextensions.api.menus.ItemType
---

{{AddonSidebar}}

The type of menu item.

## Type

Values of this type are strings. Possible values are:

- normal
  - : A menu item that just displays a label.
- checkbox
  - : A menu item that represents a binary state. It displays a checkmark next to the label. Clicking the item toggles the checkmark. The {{WebExtAPIRef("menus.onClicked")}} listener will be passed two extra properties: "checked", indicating whether the item is checked now, and "wasChecked", indicating whether the item was checked before the click event.
- radio
  - : A menu item that represents one of a group of choices. Just like a checkbox, this also displays a checkmark next to the label, and its {{WebExtAPIRef("menus.onClicked")}} listener is passed "checked" and "wasChecked". However, if you create more than one radio item, then the items function as a group of radio items: only one item in the group can be checked, and clicking an item makes it the checked item.
- separator
  - : A line separating a group of items.

## Browser compatibility

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> This API is based on Chromium's [`chrome.contextMenus`](https://developer.chrome.com/docs/extensions/reference/api/contextMenus#type-ItemType) API. This documentation is derived from [`context_menus.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/context_menus.json) in the Chromium code.

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

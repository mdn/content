---
title: menus.onClicked
slug: Mozilla/Add-ons/WebExtensions/API/menus/onClicked
page-type: webextension-api-event
browser-compat: webextensions.api.menus.onClicked
---

{{AddonSidebar()}}

Fired when a menu item is clicked.

For compatibility with other browsers, Firefox makes this event available via the `contextMenus` namespace as well as the `menus` namespace.

## Syntax

```js-nolint
browser.menus.onClicked.addListener(listener)
browser.menus.onClicked.removeListener(listener)
browser.menus.onClicked.hasListener(listener)
```

Events have three functions:

- `addListener(listener)`
  - : Adds a listener to this event.
- `removeListener(listener)`
  - : Stop listening to this event. The `listener` argument is the listener to remove.
- `hasListener(listener)`
  - : Check whether `listener` is registered for this event. Returns `true` if it is listening, `false` otherwise.

## addListener syntax

### Parameters

- `listener`

  - : The function called when this event occurs. The function is passed these arguments:

    - `info`
      - : {{WebExtAPIRef('menus.OnClickData')}}. Information about the item clicked and the context where the click happened.
    - `tab`
      - : {{WebExtAPIRef('tabs.Tab')}}. The details of the tab where the click took place. If the click did not take place in or on a tab, this parameter will be missing.

## Browser compatibility

{{Compat}}

## Examples

This example listens for clicks on a menu item, then log the item's ID and the tab ID:

```js
browser.menus.create({
  id: "click-me",
  title: "Click me!",
  contexts: ["all"],
});

browser.menus.onClicked.addListener((info, tab) => {
  console.log(`Item ${info.menuItemId} clicked in tab ${tab.id}`);
});
```

{{WebExtExamples}}

> **Note:** This API is based on Chromium's [`chrome.contextMenus`](https://developer.chrome.com/docs/extensions/reference/contextMenus/#event-onClicked) API. This documentation is derived from [`context_menus.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/context_menus.json) in the Chromium code.

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

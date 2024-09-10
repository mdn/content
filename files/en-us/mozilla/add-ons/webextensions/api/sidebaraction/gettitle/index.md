---
title: sidebarAction.getTitle()
slug: Mozilla/Add-ons/WebExtensions/API/sidebarAction/getTitle
page-type: webextension-api-function
browser-compat: webextensions.api.sidebarAction.getTitle
---

{{AddonSidebar}}

Gets the sidebar's title.

Just as you can set the title on a per-tab basis using {{WebExtAPIRef("sidebarAction.setTitle()")}}, so you can retrieve a tab-specific title by passing the tab's ID into this function.

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js-nolint
let gettingTitle = browser.sidebarAction.getTitle(
  details               // object
)
```

### Parameters

- `details`

  - : `object`. An object with the following properties:

    - `tabId` {{optional_inline}}
      - : `integer`. Get the title for the sidebar specific to the given tab.
    - `windowId` {{optional_inline}}
      - : `integer`. Get the title for the sidebar specific to the given window.

<!---->

- If `windowId` and `tabId` are both supplied, the function fails and the promise it returns is rejected.
- If `windowId` and `tabId` are both omitted, the global title is returned.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be fulfilled with a string containing the sidebar's title.

## Browser compatibility

{{Compat}}

## Examples

This code switches the title between "this" and "that" each time the user clicks the browser action

```js
function toggleTitle(title) {
  if (title === "this") {
    browser.sidebarAction.setTitle({ title: "that" });
  } else {
    browser.sidebarAction.setTitle({ title: "this" });
  }
}

browser.browserAction.onClicked.addListener(() => {
  let gettingTitle = browser.sidebarAction.getTitle({});
  gettingTitle.then(toggleTitle);
});
```

{{WebExtExamples}}

> [!NOTE]
> This API is based on Opera's [`chrome.sidebarAction`](https://help.opera.com/en/extensions/sidebar-action-api/) API.

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

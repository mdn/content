---
title: tabs.onHighlighted
slug: Mozilla/Add-ons/WebExtensions/API/tabs/onHighlighted
page-type: webextension-api-event
browser-compat: webextensions.api.tabs.onHighlighted
---

{{AddonSidebar()}}

Fired when the set of highlighted tabs in a window changes.

Note that before version 63, Firefox didn't have the concept of highlighting multiple tabs, so this event was just an alias for {{WebExtAPIRef("tabs.onActivated")}}.

## Syntax

```js-nolint
browser.tabs.onHighlighted.addListener(listener)
browser.tabs.onHighlighted.removeListener(listener)
browser.tabs.onHighlighted.hasListener(listener)
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

  - : The function called when this event occurs. The function is passed this argument:

    - `highlightInfo`
      - : `object`. ID(s) of the highlighted tabs, and ID of their window. See the [highlightInfo](#highlightinfo_2) section for more details.

## Additional objects

### highlightInfo

- `windowId`
  - : `integer`. ID of the window whose tabs changed.
- `tabIds`
  - : `array` of `integer`. IDs of the highlighted tabs in the window.

## Examples

Listen for highlighting events, and log the IDs of highlighted tabs:

```js
function handleHighlighted(highlightInfo) {
  console.log(`Highlighted tabs: ${highlightInfo.tabIds}`);
}

browser.tabs.onHighlighted.addListener(handleHighlighted);
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}

> **Note:** This API is based on Chromium's [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/tabs/#event-onHighlighted) API. This documentation is derived from [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) in the Chromium code.

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

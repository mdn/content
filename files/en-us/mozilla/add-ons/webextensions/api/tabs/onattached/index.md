---
title: tabs.onAttached
slug: Mozilla/Add-ons/WebExtensions/API/tabs/onAttached
page-type: webextension-api-event
browser-compat: webextensions.api.tabs.onAttached
---

{{AddonSidebar}}

Fired when a tab is attached to a window, for example because it was moved between windows.

## Syntax

```js-nolint
browser.tabs.onAttached.addListener(listener)
browser.tabs.onAttached.removeListener(listener)
browser.tabs.onAttached.hasListener(listener)
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

    - `tabId`
      - : `integer`. ID of the tab that was attached to a new window.
    - `attachInfo`
      - : `object`. ID of the new window, and index of the tab within it. See the [attachInfo](#attachinfo_2) section for more details.

## Additional objects

### attachInfo

- `newWindowId`
  - : `integer`. ID of the new window.
- `newPosition`
  - : `integer`. Index position that the tab has in the new window.

## Examples

Listen for attach events, and log the info:

```js
function handleAttached(tabId, attachInfo) {
  console.log(`Tab: ${tabId} attached`);
  console.log(`New window: ${attachInfo.newWindowId}`);
  console.log(`New index: ${attachInfo.newPosition}`);
}

browser.tabs.onAttached.addListener(handleAttached);
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}

> [!NOTE]
> This API is based on Chromium's [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/api/tabs#event-onAttached) API. This documentation is derived from [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) in the Chromium code.

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

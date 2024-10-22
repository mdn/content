---
title: tabs.onZoomChange
slug: Mozilla/Add-ons/WebExtensions/API/tabs/onZoomChange
page-type: webextension-api-event
browser-compat: webextensions.api.tabs.onZoomChange
---

{{AddonSidebar}}

Fired when a tab is zoomed.

## Syntax

```js-nolint
browser.tabs.onZoomChange.addListener(listener)
browser.tabs.onZoomChange.removeListener(listener)
browser.tabs.onZoomChange.hasListener(listener)
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

    - `ZoomChangeInfo`
      - : `object`. Information about the zoom event. See the [ZoomChangeInfo](#zoomchangeinfo_2) section for more details.

## Additional objects

### ZoomChangeInfo

- `tabId`
  - : `integer`. ID of the tab that was zoomed.
- `oldZoomFactor`
  - : `number`. The previous zoom factor.
- `newZoomFactor`
  - : `number`. The new zoom factor.
- `zoomSettings`
  - : {{WebExtAPIRef('tabs.ZoomSettings')}}. Zoom settings for the tab.

## Examples

Listen for zoom events and log the info:

```js
function handleZoomed(zoomChangeInfo) {
  console.log(`Tab: ${zoomChangeInfo.tabId} zoomed`);
  console.log(`Old zoom: ${zoomChangeInfo.oldZoomFactor}`);
  console.log(`New zoom: ${zoomChangeInfo.newZoomFactor}`);
}

browser.tabs.onZoomChange.addListener(handleZoomed);
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}

> [!NOTE]
> This API is based on Chromium's [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/api/tabs#event-onZoomChange) API. This documentation is derived from [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) in the Chromium code.

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

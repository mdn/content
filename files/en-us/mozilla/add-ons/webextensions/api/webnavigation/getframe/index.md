---
title: webNavigation.getFrame()
slug: Mozilla/Add-ons/WebExtensions/API/webNavigation/getFrame
page-type: webextension-api-function
browser-compat: webextensions.api.webNavigation.getFrame
---

{{AddonSidebar()}}

Retrieves information about a particular frame. A frame may be the top-level frame in a tab or a nested [`<iframe>`](/en-US/docs/Web/HTML/Element/iframe), and is uniquely identified by a tab ID and a frame ID.

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js-nolint
let gettingFrame = browser.webNavigation.getFrame(
  details                // object
)
```

### Parameters

- `details`

  - : `object`. Information about the frame to retrieve information about.

    - `tabId`
      - : `integer`. The ID of the tab in which the frame is.
    - `processId` {{optional_inline}} {{deprecated_inline}}
      - : `integer`. This value is not set in modern browsers. When it was set, it represented the ID of the process running the renderer for this tab.
    - `frameId`
      - : `integer`. The ID of the frame in the given tab.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be fulfilled with an object containing the following properties:

- `errorOccurred`
  - : `boolean`. True if the last navigation in this frame was interrupted by an error, i.e. the {{WebExtAPIRef("webNavigation.onErrorOccurred", "onErrorOccurred")}} event fired.
- `url`
  - : `string`. The URL currently associated with this frame, if the frame identified by `frameId` existed at one point in the tab identified by `tabId`. The fact that a URL is associated with a given `frameId` does not imply that the corresponding frame still exists.
- `parentFrameId`
  - : `integer`. ID of this frame's parent. This is -1 if there is no parent frame: that is, if this frame is the top-level browsing context in the tab.

If the tab is discarded, the promise will instead resolve with a `null` value. If the specified tab or frame ID could not be found, or some other error occurs, the promise will be rejected with an error message.

## Browser compatibility

{{Compat}}

## Examples

```js
function onGot(frameInfo) {
  console.log(frameInfo);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

let gettingFrame = browser.webNavigation.getFrame({
  tabId: 19,
  frameId: 1537,
});

// Edge specific - processId is required not optional, must be integer not null
//let gettingFrame = browser.webNavigation.getFrame({ tabId: 19, processId: 0, frameId: 1537 });

gettingFrame.then(onGot, onError);
```

{{WebExtExamples}}

> **Note:** This API is based on Chromium's [`chrome.webNavigation`](https://developer.chrome.com/docs/extensions/reference/webNavigation/#method-getFrame) API. This documentation is derived from [`web_navigation.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/web_navigation.json) in the Chromium code.

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

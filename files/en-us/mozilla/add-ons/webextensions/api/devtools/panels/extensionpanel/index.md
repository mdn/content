---
title: devtools.panels.ExtensionPanel
slug: Mozilla/Add-ons/WebExtensions/API/devtools/panels/ExtensionPanel
page-type: webextension-api-type
browser-compat: webextensions.api.devtools.panels.ExtensionPanel
---

{{AddonSidebar()}}

An `ExtensionPanel` represents a panel added to the devtools. It's the resolution of the [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) returned by [`browser.devtools.panels.create()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels/create).

## Type

Values of this type are objects. The define two events, `onShown` and `onHidden`.

- `onShown` is emitted when the panel is shown in the devtools (for example, because the user clicked on the panel's tab in the devtools window).
- `onHidden` is emitted when the panel is hidden (for example, because the user switched to a different tab in the devtools window).

## Browser compatibility

{{Compat}}

## Examples

This code creates a new panel, then adds handlers for its `onShown` and `onHidden` events.

```js
function handleShown(e) {
  console.log(e);
  console.log("panel is being shown");
}

function handleHidden(e) {
  console.log(e);
  console.log("panel is being hidden");
}

browser.devtools.panels
  .create(
    "My Panel", // title
    "icons/star.png", // icon
    "devtools/panel/panel.html", // content
  )
  .then((newPanel) => {
    newPanel.onShown.addListener(handleShown);
    newPanel.onHidden.addListener(handleHidden);
  });
```

{{WebExtExamples}}

> **Note:** This API is based on Chromium's [`chrome.devtools.panels`](https://developer.chrome.com/docs/extensions/reference/devtools_panels/) API.

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

---
title: bookmarks.onImportBegan
slug: Mozilla/Add-ons/WebExtensions/API/bookmarks/onImportBegan
tags:
  - API
  - Add-ons
  - Bookmarks
  - Event
  - Extensions
  - Non-standard
  - Reference
  - WebExtensions
  - onImportBegan
browser-compat: webextensions.api.bookmarks.onImportBegan
---
{{AddonSidebar()}}

Fired when the browser has started importing a set of bookmarks.

While a set of bookmarks is being imported, {{WebExtAPIRef("bookmarks.onCreated", "onCreated")}} may fire a lot of times. If your extension is listening to `onCreated`, and the listener is expensive, you should also listen for `onImportBegan` and {{WebExtAPIRef("bookmarks.onImportEnded", "onImportEnded")}}. When you receive `onImportBegan`, ignore `onCreated` until you receive `onImportEnded`. You can handle all other notifications as usual.

## Syntax

```js
browser.bookmarks.onImportBegan.addListener(listener)
browser.bookmarks.onImportBegan.removeListener(listener)
browser.bookmarks.onImportBegan.hasListener(listener)
```

Events have three functions:

- `addListener(callback)`
  - : Adds a listener to this event.
- `removeListener(listener)`
  - : Stop listening to this event. The `listener` argument is the listener to remove.
- `hasListener(listener)`
  - : Check whether `listener` is registered for this event. Returns `true` if it is listening, `false` otherwise.

## addListener syntax

### Parameters

- `callback`
  - : Function that will be called when this event occurs. It's passed no parameters.

## Browser compatibility

{{Compat}}

## Examples

```js
function handleImportBegan() {
  console.log("Importing…");
}

function handleImportEnded() {
  console.log("Import finished.");
}

function handleClick() {
  browser.bookmarks.onImportBegan.addListener(handleImportBegan);
  browser.bookmarks.onImportEnded.addListener(handleImportEnded);
}

browser.browserAction.onClicked.addListener(handleClick);
```

{{WebExtExamples}}

> **Note:** This API is based on Chromium's [`chrome.bookmarks`](https://developer.chrome.com/docs/extensions/reference/bookmarks/#event-onImportBegan) API. This documentation is derived from [`bookmarks.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/bookmarks.json) in the Chromium code.
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

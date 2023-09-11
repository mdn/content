---
title: bookmarks.onMoved
slug: Mozilla/Add-ons/WebExtensions/API/bookmarks/onMoved
page-type: webextension-api-event
browser-compat: webextensions.api.bookmarks.onMoved
---

{{AddonSidebar()}}

Fired when a bookmark or folder is moved to a different parent folder or position within a folder.

> **Note:** If you're moving multiple bookmarks, because this API is asynchronous, the move calls may get processed in any order. Consequently, the value of each bookmark's index may change or be unknown until all the move calls are completed. If the index associated with a bookmark matters to your extension, then – when moving multiple bookmarks – the extension should wait for each `bookmarks.move` call to complete before moving the next bookmark. Waiting ensures that the index associated with each bookmark is not affected by a move call executing concurrently while the original call is in progress.

## Syntax

```js-nolint
browser.bookmarks.onMoved.addListener(listener)
browser.bookmarks.onMoved.removeListener(listener)
browser.bookmarks.onMoved.hasListener(listener)
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

    - `id`
      - : `string`. ID of the item that was moved.
    - `moveInfo`
      - : `object`. Object containing more details about the move. See the [moveInfo](#moveinfo_2) section for more details.

## Additional objects

### moveInfo

- `parentId`
  - : `string`. The new parent folder.
- `index`
  - : `integer`. The new index of this item in its parent.
- `oldParentId`
  - : `string`. The old parent folder.
- `oldIndex`
  - : `integer`. The old index of the item in its parent.

## Browser compatibility

{{Compat}}

## Examples

```js
function handleMoved(id, moveInfo) {
  console.log(`Item: ${id} moved`);
  console.log(`Old index: ${moveInfo.oldIndex}`);
  console.log(`New index: ${moveInfo.index}`);
  console.log(`Old folder: ${moveInfo.oldParentId}`);
  console.log(`New folder: ${moveInfo.parentId}`);
}

function handleClick() {
  browser.bookmarks.onMoved.addListener(handleMoved);
}

browser.browserAction.onClicked.addListener(handleClick);
```

{{WebExtExamples}}

> **Note:** This API is based on Chromium's [`chrome.bookmarks`](https://developer.chrome.com/docs/extensions/reference/bookmarks/#event-onMoved) API. This documentation is derived from [`bookmarks.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/bookmarks.json) in the Chromium code.

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

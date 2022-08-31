---
title: bookmarks.onChildrenReordered
slug: Mozilla/Add-ons/WebExtensions/API/bookmarks/onChildrenReordered
tags:
  - API
  - Add-ons
  - Bookmarks
  - Event
  - Extensions
  - Non-standard
  - Reference
  - WebExtensions
  - onChildrenReordered
browser-compat: webextensions.api.bookmarks.onChildrenReordered
---
{{AddonSidebar()}}

Fired when the children of a folder have changed their order due to the order being sorted in the UI. This is not called as a result of a call to {{WebExtAPIRef("bookmarks.move()")}} or a drag operation in the UI.

## Syntax

```js
browser.bookmarks.onChildrenReordered.addListener(listener)
browser.bookmarks.onChildrenReordered.removeListener(listener)
browser.bookmarks.onChildrenReordered.hasListener(listener)
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

  - : Function that will be called when this event occurs. The function will be passed the following arguments:

    - `id`
      - : `string`. ID of the folder whose children were reordered.
    - `reorderInfo`
      - : [`object`](#reorderinfo). Object containing Additional objects.

## Additional objects

### reorderInfo

- `childIds`
  - : `array` of `string`. Array containing the IDs of all the bookmark items in this folder, in the order they now appear in the UI.

## Browser compatibility

{{Compat}}

## Examples

```js
function handleChildrenReordered(id, reorderInfo) {
  console.log(`Item: ${id} children reordered`);
  console.log(`Children: ${reorderInfo.childIds}`);
}

function handleClick() {
  browser.bookmarks.onChildrenReordered.addListener(handleChildrenReordered);
}

browser.browserAction.onClicked.addListener(handleClick);
```

{{WebExtExamples}}

> **Note:** This API is based on Chromium's [`chrome.bookmarks`](https://developer.chrome.com/docs/extensions/reference/bookmarks/#event-onChildrenReordered) API. This documentation is derived from [`bookmarks.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/bookmarks.json) in the Chromium code.
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

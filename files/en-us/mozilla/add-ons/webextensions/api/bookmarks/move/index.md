---
title: bookmarks.move()
slug: Mozilla/Add-ons/WebExtensions/API/bookmarks/move
tags:
  - API
  - Add-ons
  - Bookmarks
  - Extensions
  - Method
  - Non-standard
  - Reference
  - WebExtensions
  - move
browser-compat: webextensions.api.bookmarks.move
---
{{AddonSidebar()}}

The **`bookmarks.move()`** method moves the specified {{WebExtAPIRef("bookmarks.BookmarkTreeNode", "BookmarkTreeNode")}} to the specified destination within the tree of bookmarks. This lets you move a bookmark to a new folder and/or position within the folder.

> **Warning:** If your extension attempts to move a bookmark into the bookmarks tree root node, the call will raise an error with the message: "_The bookmark root cannot be modified_" and the move won't be completed.

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js
let movingBookmark = browser.bookmarks.move(
  id,                    // string
  destination           // object
)
```

### Parameters

- `id`
  - : A {{jsxref("string")}} containing the ID of the bookmark or folder to move.
- `destination`

  - : An {{jsxref("object")}} which specifies the destination for the bookmark. This object must contain one or both of the following fields:

    - `parentId` {{optional_inline}}
      - : A {{jsxref("string")}} which specifies the ID of the destination folder. If this value is left out, the bookmark is moved to a new location within its current folder.
    - `index` {{optional_inline}}
      - : A 0-based index specifying the position within the folder to which to move the bookmark. A value of 0 moves the bookmark to the top of the folder. If this value is omitted, the bookmark is placed at the end of the new parent folder.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be fulfilled with a single [`bookmarks.BookmarkTreeNode`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks/BookmarkTreeNode) object, describing the moved node.

If the node corresponding to the `id` parameter can't be found, the promise is rejected with an error message.

> **Note:** If you move multiple bookmarks, because this API is asynchronous, the move calls may get processed in any order. Consequently, the value of each bookmark's index returned in {{WebExtAPIRef('bookmarks.BookmarkTreeNode', 'BookmarkTreeNode')}} may change or be unknown until all the move calls are completed. If the index associated with a bookmark matters to your extension, then – when moving multiple bookmarks – the extension should wait for each `bookmarks.move` call to complete before moving the next bookmark. Waiting ensures that the index associated with each bookmark is not affected by a move call executing concurrently while the original call is in progress.

## Examples

This example moves a bookmark so that it's the first bookmark in its current folder.

```js
function onMoved(bookmarkItem) {
  console.log(bookmarkItem.index);
}

function onRejected(error) {
  console.log(`An error: ${error}`);
}

let bookmarkId = "abcdefghijkl";

let movingBookmark = browser.bookmarks.move(bookmarkId, {index: 0});
movingBookmark.then(onMoved, onRejected);
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}

> **Note:** This API is based on Chromium's [`chrome.bookmarks`](https://developer.chrome.com/docs/extensions/reference/bookmarks/#method-move) API. This documentation is derived from [`bookmarks.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/bookmarks.json) in the Chromium code.
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

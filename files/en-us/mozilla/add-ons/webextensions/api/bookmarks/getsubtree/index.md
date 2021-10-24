---
title: bookmarks.getSubTree()
slug: Mozilla/Add-ons/WebExtensions/API/bookmarks/getSubTree
tags:
  - API
  - Add-ons
  - Bookmarks
  - Extensions
  - Method
  - Non-standard
  - Reference
  - WebExtensions
  - getSubTree
browser-compat: webextensions.api.bookmarks.getSubTree
---
{{AddonSidebar()}}

The **`bookmarks.getSubTree()`** method asynchronously retrieves a {{WebExtAPIRef("bookmarks.BookmarkTreeNode")}}, given its ID.

If the item is a folder, you can access all its descendants recursively using its `children` property and the `children` property of its descendants, if they are themselves folders.

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js
var gettingSubTree = browser.bookmarks.getSubTree(
  id                     // string
)
```

### Parameters

- `id`
  - : A {{jsxref("string")}} specifying the ID of the root of the subtree to retrieve.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be fulfilled with an array containing a single object, a {{WebExtAPIRef('bookmarks.BookmarkTreeNode')}} object, representing the item with the given ID.

If a node corresponding to `id` could not be found, the promise will be rejected with an error message.

## Examples

This example recursively prints out the subtree under a given node:

```js
function makeIndent(indentLength) {
  return ".".repeat(indentLength);
}

function logItems(bookmarkItem, indent) {
  if (bookmarkItem.url) {
    console.log(makeIndent(indent) + bookmarkItem.url);
  } else {
    console.log(makeIndent(indent) + "Folder: " + bookmarkItem.id);
    indent++;
  }
  if (bookmarkItem.children) {
    for (var child of bookmarkItem.children) {
      logItems(child, indent);
    }
  }
}

function logSubTree(bookmarkItems) {
  logItems(bookmarkItems[0], 0);
}

function onRejected(error) {
  console.log(`An error: ${error}`);
}

var subTreeID = "root_____";

var gettingSubTree = browser.bookmarks.getSubTree(subTreeID);
gettingSubTree.then(logSubTree, onRejected);
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}

> **Note:** This API is based on Chromium's [`chrome.bookmarks`](https://developer.chrome.com/extensions/bookmarks#method-getSubTree) API. This documentation is derived from [`bookmarks.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/bookmarks.json) in the Chromium code.
>
> Microsoft Edge compatibility data is supplied by Microsoft Corporation and is included here under the Creative Commons Attribution 3.0 United States License.

<div class="hidden"><pre>// Copyright 2015 The Chromium Authors. All rights reserved.
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
</pre></div>

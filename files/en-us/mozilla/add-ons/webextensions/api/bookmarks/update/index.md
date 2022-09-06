---
title: bookmarks.update()
slug: Mozilla/Add-ons/WebExtensions/API/bookmarks/update
tags:
  - API
  - Add-ons
  - Bookmarks
  - Extensions
  - Method
  - Non-standard
  - Reference
  - Update
  - WebExtensions
browser-compat: webextensions.api.bookmarks.update
---
{{AddonSidebar()}}

**`bookmarks.update()`** updates the title and/or URL of a bookmark, or the name of a bookmark folder.

> **Warning:** If your extension attempts to update a bookmark in the bookmarks tree root node, the call will raise an error with the message: "The bookmark root cannot be modified" and the bookmark won't be updated.

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js
let updating = browser.bookmarks.update(
  id,                    // string
  changes                // object
)
```

### Parameters

- `id`
  - : A {{jsxref("string")}} specifying the ID of the bookmark or bookmark folder to update.
- `changes`

  - : An {{jsxref("object")}} specifying the changes to apply, with some combination of the following fields. Any items not specified aren't changed in the referenced bookmark or folder:

    - `title` {{optional_inline}}
      - : A {{jsxref("string")}} containing the new title of the bookmark, or the new name of the folder if `id` refers to a folder.
    - `url` {{optional_inline}}
      - : A {{jsxref("string")}} providing a new URL for the bookmark.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be fulfilled with a single [`bookmarks.BookmarkTreeNode`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks/BookmarkTreeNode) object, representing the updated bookmark. If the bookmark item corresponding to the `id` parameter can't be found, the promise is rejected.

## Examples

This example renames all folders named "MDN" to "Mozilla Developer Network (MDN)".

```js
function onFulfilled(bookmarkItem) {
  console.log(bookmarkItem.title);
}

function onRejected(error) {
  console.error(`Error: ${error}`);
}

function updateFolders(items) {
  for (const item of items) {
    // only folders, so skip items with a `url`
    if (!item.url) {
      browser.bookmarks
        .update(item.id, {
          title: "Mozilla Developer Network (MDN)",
        })
        .then(onFulfilled, onRejected);
    }
  }
}

browser.bookmarks.search({ title: "MDN" }).then(updateFolders, onRejected);
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}

> **Note:** This API is based on Chromium's [`chrome.bookmarks`](https://developer.chrome.com/docs/extensions/reference/bookmarks/#method-update) API. This documentation is derived from [`bookmarks.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/bookmarks.json) in the Chromium code.
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

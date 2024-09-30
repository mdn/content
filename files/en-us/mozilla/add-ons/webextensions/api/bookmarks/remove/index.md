---
title: bookmarks.remove()
slug: Mozilla/Add-ons/WebExtensions/API/bookmarks/remove
page-type: webextension-api-function
browser-compat: webextensions.api.bookmarks.remove
---

{{AddonSidebar}}

The **`bookmarks.remove()`** method removes a single bookmark or an empty bookmark folder.

> [!WARNING]
> If your extension attempts to remove a bookmark from the bookmarks tree root node, the call will raise an error with the message: "The bookmark root cannot be modified" and the bookmark won't be removed.

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js-nolint
let removingBookmark = browser.bookmarks.remove(
  id                 // string
)
```

### Parameters

- `id`
  - : A {{jsxref("string")}} specifying the ID of the bookmark or empty folder to remove.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be fulfilled with no arguments.

If the node corresponding to the `id` parameter can't be found or was a non-empty folder, the promise is rejected with an error message.

## Examples

```js
function onRemoved() {
  console.log("Removed!");
}

function onRejected(error) {
  console.log(`An error: ${error}`);
}

let bookmarkId = "abcdefghijkl";

let removingBookmark = browser.bookmarks.remove(bookmarkId);
removingBookmark.then(onRemoved, onRejected);
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}

> [!NOTE]
> This API is based on Chromium's [`chrome.bookmarks`](https://developer.chrome.com/docs/extensions/reference/api/bookmarks#method-remove) API. This documentation is derived from [`bookmarks.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/bookmarks.json) in the Chromium code.

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

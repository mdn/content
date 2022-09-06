---
title: bookmarks.removeTree()
slug: Mozilla/Add-ons/WebExtensions/API/bookmarks/removeTree
tags:
  - API
  - Add-ons
  - Bookmarks
  - Extensions
  - Method
  - Non-standard
  - Reference
  - WebExtensions
  - removeTree
browser-compat: webextensions.api.bookmarks.removeTree
---
{{AddonSidebar()}}

The **`bookmarks.removeTree()`** method recursively removes a bookmark folder and all of its contents.

> **Warning:** If your extension attempts to remove a bookmark tree from the bookmarks tree root node, the call will raise an error with the message: "The bookmark root cannot be modified" and the bookmark won't be removed.

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js
let removingTree = browser.bookmarks.removeTree(
  id                // string
)
```

### Parameters

- `id`
  - : A {{jsxref("string")}} specifying the ID of the folder node to be deleted along with its descendants.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be fulfilled with no arguments when the tree has been removed.

If the node corresponding to the `id` parameter can't be found, the promise is rejected with an error message.

## Examples

This example locates a bookmark folder named "MDN" and deletes it along with all of its contents.

```js
function onRemoved() {
  console.log("bookmark item removed!");
}

function onRejected(error) {
  console.log(`An error: ${error}`);
}

function removeMDN(searchResults) {
  if (searchResults.length) {
    let removing = browser.bookmarks.removeTree(searchResults[0].id);
    removing.then(onRemoved, onRejected);
  }
}

let searchingBookmarks = browser.bookmarks.search({ title: "MDN" });
searchingBookmarks.then(removeMDN, onRejected);
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}

> **Note:** This API is based on Chromium's [`chrome.bookmarks`](https://developer.chrome.com/docs/extensions/reference/bookmarks/#method-removeTree) API. This documentation is derived from [`bookmarks.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/bookmarks.json) in the Chromium code.
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

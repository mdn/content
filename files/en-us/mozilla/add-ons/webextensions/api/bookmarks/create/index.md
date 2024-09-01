---
title: bookmarks.create()
slug: Mozilla/Add-ons/WebExtensions/API/bookmarks/create
page-type: webextension-api-function
browser-compat: webextensions.api.bookmarks.create
---

{{AddonSidebar}}

Creates a bookmark or folder as a child of the {{WebExtAPIRef("bookmarks.BookmarkTreeNode", "BookmarkTreeNode")}} with the specified `parentId`. To create a folder, omit or leave empty the {{WebExtAPIRef("bookmarks.CreateDetails", "CreateDetails", "url")}} parameter.

> [!WARNING]
> If your extension tries to create a new bookmark in the bookmark tree's root node, it raises an error: "_The bookmark root cannot be modified_" and the bookmark won't be created.

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js-nolint
let createBookmark = browser.bookmarks.create(
  bookmark                  // CreateDetails object
)
```

### Parameters

- `bookmark`
  - : A {{WebExtAPIRef("bookmarks.CreateDetails")}} object.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be fulfilled with a {{WebExtAPIRef('bookmarks.BookmarkTreeNode', 'BookmarkTreeNode')}} that describes the new bookmark node.

> [!NOTE]
> If you create multiple bookmarks, because this API is asynchronous, the create calls may get processed in any order. Consequently, the value of each bookmark's index returned in {{WebExtAPIRef('bookmarks.BookmarkTreeNode', 'BookmarkTreeNode')}} may change or be unknown until all the create calls are completed. If the index associated with a bookmark matters to your extension, then – when creating multiple bookmarks – the extension should wait for each `bookmarks.create` call to complete before creating the next bookmark. Waiting ensures that the index associated with each bookmark is not affected by a create call executing concurrently while the original call is in progress.

## Examples

This example creates a bookmark for this page, placing it in the default folder ("Other Bookmarks" in Firefox and Chrome).

```js
function onCreated(node) {
  console.log(node);
}

let createBookmark = browser.bookmarks.create({
  title: "bookmarks.create() on MDN",
  url: "https://developer.mozilla.org/Add-ons/WebExtensions/API/bookmarks/create",
});

createBookmark.then(onCreated);
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}

> [!NOTE]
> This API is based on Chromium's [`chrome.bookmarks`](https://developer.chrome.com/docs/extensions/reference/api/bookmarks#method-create) API. This documentation is derived from [`bookmarks.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/bookmarks.json) in the Chromium code.

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

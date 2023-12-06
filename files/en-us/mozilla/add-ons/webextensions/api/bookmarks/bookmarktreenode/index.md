---
title: bookmarks.BookmarkTreeNode
slug: Mozilla/Add-ons/WebExtensions/API/bookmarks/BookmarkTreeNode
page-type: webextension-api-type
browser-compat: webextensions.api.bookmarks.BookmarkTreeNode
---

{{AddonSidebar()}}

An object of type `bookmarks.BookmarkTreeNode` represents a node in the bookmark tree, where each node is a bookmark, a bookmark folder, or a separator. Child nodes are ordered by an `index` within their respective parent folders.

## Type

An {{jsxref("object")}} with the following properties:

- `children` {{optional_inline}}
  - : An {{jsxref("array")}} of {{WebExtAPIRef('bookmarks.BookmarkTreeNode')}} objects which represent the node's children. The list is ordered in the list in which the children appear in the user interface. This field is omitted if the node isn't a folder.
- `dateAdded` {{optional_inline}}
  - : A number representing the creation date of the node in [milliseconds since the epoch](https://en.wikipedia.org/wiki/Unix_time).
- `dateGroupModified` {{optional_inline}}
  - : A number representing the date and time the contents of this folder last changed, in [milliseconds since the epoch](https://en.wikipedia.org/wiki/Unix_time).
- `id`
  - : A {{jsxref("string")}} which uniquely identifies the node. Each ID is unique within the user's profile and remains unchanged across browser restarts.
- `index` {{optional_inline}}
  - : A number which represents the zero-based position of this node within its parent folder, where zero represents the first entry.
    > **Note:** If you create or move multiple bookmarks, because the {{WebExtAPIRef("bookmarks.create()")}} and {{WebExtAPIRef("bookmarks.move()")}} methods are asynchronous, the requests may get processed in any order. Consequently, the value of each bookmark's index may change or be unknown until all the requests are completed. If the index associated with a bookmark matters to your extension, then – when creating or moving multiple bookmarks – the extension should wait for each `bookmarks.create` or `bookmarks.move` call to complete before creating or moving the next bookmark. Waiting ensures that the index associated with each bookmark is not affected by a create or move call executing concurrently while the original call is in progress.
- `parentId` {{optional_inline}}
  - : A {{jsxref("string")}} which specifies the ID of the parent folder. This property is not present in the root node.
- `title`
  - : A {{jsxref("string")}} which contains the text displayed for the node in menus and lists of bookmarks.
- `type` {{optional_inline}}
  - : A {{WebExtAPIRef("bookmarks.BookmarkTreeNodeType")}} object indicating whether this is a bookmark, a folder, or a separator. Defaults to `"bookmark"` unless `url` is omitted, in which case it defaults to `"folder"`.
- `unmodifiable` {{optional_inline}}
  - : A {{jsxref("string")}} as described by the type {{WebExtAPIRef('bookmarks.BookmarkTreeNodeUnmodifiable')}}. Represents the reason that the node can't be changed. If the node can be changed, this is omitted.
- `url` {{optional_inline}}
  - : A {{jsxref("string")}} which represents the URL for the bookmark. If the node represents a folder, this property is omitted.

## Browser compatibility

{{Compat}}

{{WebExtExamples}}

> **Note:** This API is based on Chromium's [`chrome.bookmarks`](https://developer.chrome.com/docs/extensions/reference/bookmarks/#type-BookmarkTreeNode) API. This documentation is derived from [`bookmarks.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/bookmarks.json) in the Chromium code.

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

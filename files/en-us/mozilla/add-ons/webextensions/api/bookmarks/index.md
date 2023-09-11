---
title: bookmarks
slug: Mozilla/Add-ons/WebExtensions/API/bookmarks
page-type: webextension-api
browser-compat: webextensions.api.bookmarks
---

{{AddonSidebar}}

The [WebExtensions](/en-US/docs/Mozilla/Add-ons/WebExtensions) {{WebExtAPIRef("bookmarks")}} API lets an extension interact with and manipulate the browser's bookmarking system. You can use it to bookmark pages, retrieve existing bookmarks, and edit, remove, and organize bookmarks.

To use this API, an extension must request the "bookmarks" [permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) in its [`manifest.json`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json) file.

Extensions cannot create, modify, or delete bookmarks in the root node of the bookmarks tree. Doing so causes an error with the message: "_The bookmark root cannot be modified_"

## Types

- {{WebExtAPIRef("bookmarks.BookmarkTreeNode")}}
  - : Represents a bookmark or folder in the bookmarks tree.
- {{WebExtAPIRef("bookmarks.BookmarkTreeNodeType")}}
  - : A {{jsxref("String")}} enum which describes whether a node in the tree is a bookmark, a folder, or a separator.
- {{WebExtAPIRef("bookmarks.BookmarkTreeNodeUnmodifiable")}}
  - : A {{jsxref("String")}} enum which specifies why a bookmark or folder is unmodifiable.
- {{WebExtAPIRef("bookmarks.CreateDetails")}}
  - : Contains information which is passed to the {{WebExtAPIRef("bookmarks.create()")}} function when creating a new bookmark.

## Functions

- {{WebExtAPIRef("bookmarks.create()")}}
  - : Creates a bookmark or folder.
- {{WebExtAPIRef("bookmarks.get()")}}
  - : Retrieves one or more {{WebExtAPIRef("bookmarks.BookmarkTreeNode", "BookmarkTreeNode")}}s, given a bookmark's ID or an array of bookmark IDs.
- {{WebExtAPIRef("bookmarks.getChildren()")}}
  - : Retrieves the children of the specified {{WebExtAPIRef("bookmarks.BookmarkTreeNode", "BookmarkTreeNode")}}.
- {{WebExtAPIRef("bookmarks.getRecent()")}}
  - : Retrieves a requested number of recently added bookmarks.
- {{WebExtAPIRef("bookmarks.getSubTree()")}}
  - : Retrieves part of the bookmarks tree, starting at the specified node.
- {{WebExtAPIRef("bookmarks.getTree()")}}
  - : Retrieves the entire bookmarks tree into an array of {{WebExtAPIRef("bookmarks.BookmarkTreeNode", "BookmarkTreeNode")}} objects.
- {{WebExtAPIRef("bookmarks.move()")}}
  - : Moves the specified {{WebExtAPIRef("bookmarks.BookmarkTreeNode", "BookmarkTreeNode")}} to a new location in the bookmark tree.
- {{WebExtAPIRef("bookmarks.remove()")}}
  - : Removes a bookmark or an empty bookmark folder, given the node's ID.
- {{WebExtAPIRef("bookmarks.removeTree()")}}
  - : Recursively removes a bookmark folder; that is, given the ID of a folder node, removes that node and all its descendants.
- {{WebExtAPIRef("bookmarks.search()")}}
  - : Searches for {{WebExtAPIRef("bookmarks.BookmarkTreeNode", "BookmarkTreeNode")}}s matching a specified set of criteria.
- {{WebExtAPIRef("bookmarks.update()")}}
  - : Updates the title and/or URL of a bookmark, or the name of a bookmark folder, given the bookmark's ID.

## Events

- {{WebExtAPIRef("bookmarks.onCreated")}}
  - : Fired when a bookmark or folder is created.
- {{WebExtAPIRef("bookmarks.onRemoved")}}
  - : Fired when a bookmark or folder is removed. When a folder is removed recursively, a single notification is fired for the folder, and none for its contents.
- {{WebExtAPIRef("bookmarks.onChanged")}}
  - : Fired when a bookmark or folder changes. Currently, only `title` and `url` changes trigger this.
- {{WebExtAPIRef("bookmarks.onMoved")}}
  - : Fired when a bookmark or folder is moved to a different parent folder or to a new offset within its folder.
- {{WebExtAPIRef("bookmarks.onChildrenReordered")}}
  - : Fired when the user has sorted the children of a folder in the browser's UI. This is not called as a result of a {{WebExtAPIRef("bookmarks.move", "move()")}}.
- {{WebExtAPIRef("bookmarks.onImportBegan")}}
  - : Fired when a bookmark import session is begun. Expensive observers should ignore {{WebExtAPIRef("bookmarks.onCreated")}} updates until {{WebExtAPIRef("bookmarks.onImportEnded")}} is fired. Observers should still handle other notifications immediately.
- {{WebExtAPIRef("bookmarks.onImportEnded")}}
  - : Fired when a bookmark import session has finished.

## Browser compatibility

{{Compat}}

{{WebExtExamples("h2")}}

> **Note:** This API is based on Chromium's [`chrome.bookmarks`](https://developer.chrome.com/docs/extensions/reference/bookmarks/) API. This documentation is derived from [`bookmarks.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/bookmarks.json) in the Chromium code.

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

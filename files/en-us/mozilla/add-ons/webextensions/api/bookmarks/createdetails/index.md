---
title: bookmarks.CreateDetails
slug: Mozilla/Add-ons/WebExtensions/API/bookmarks/CreateDetails
page-type: webextension-api-type
browser-compat: webextensions.api.bookmarks.CreateDetails
---

{{AddonSidebar}}

The `CreateDetails` type is used to describe the properties of a new, bookmark, bookmark folder, or separator when calling the {{WebExtAPIRef("bookmarks.create()")}} method.

## Type

An {{jsxref("object")}} containing some combination of the following fields:

- `index` {{optional_inline}}
  - : An integer {{jsxref("Number")}} which specifies the position at which to place the new bookmark under its parent. A value of 0 will put it at the top of the list.
- `parentId` {{optional_inline}}
  - : A {{jsxref("string")}} which indicates the ID of the parent folder into which to place the new bookmark or bookmark folder. On Chrome and Firefox, the default is the "Other Bookmarks" folder on the Bookmarks menu.
- `title` {{optional_inline}}
  - : A {{jsxref("string")}} which specifies the title for the bookmark or the name of the folder to be created. If this isn't specified, the title is `""`.
- `type` {{optional_inline}}
  - : A {{WebExtAPIRef("bookmarks.BookmarkTreeNodeType")}} object indicating whether this is a bookmark, a folder, or a separator. Defaults to `"bookmark"` unless `url` is omitted, in which case it defaults to `"folder"`.
- `url` {{optional_inline}}
  - : `string`. A {{jsxref("string")}} which specifies the URL of the page to bookmark. If this is omitted or is `null`, a folder is created instead of a bookmark.

## Browser compatibility

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> This API is based on Chromium's [`chrome.bookmarks`](https://developer.chrome.com/docs/extensions/reference/api/bookmarks#type-CreateDetails) API. This documentation is derived from [`bookmarks.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/bookmarks.json) in the Chromium code.

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

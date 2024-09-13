---
title: bookmarks.search()
slug: Mozilla/Add-ons/WebExtensions/API/bookmarks/search
page-type: webextension-api-function
browser-compat: webextensions.api.bookmarks.search
---

{{AddonSidebar}}

The **`bookmarks.search()`** function searches for bookmark tree nodes matching the given query.

This function throws an exception if any of the input parameters are invalid or are not of an appropriate type; look in the [console](https://extensionworkshop.com/documentation/develop/debugging/) for the error message. The exceptions don't have error IDs, and the messages themselves may change, so don't write code that tries to interpret them.

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js-nolint
let searching = browser.bookmarks.search(
  query                  // string or object
)
```

### Parameters

- `query`

  - : A {{jsxref("string")}} or {{jsxref("object")}} describing the query to perform.

    If `query` is a **string**, it consists of zero or more space-delimited search terms. Each search term matches if it is a substring in the bookmark's URL or title. Matching is case-insensitive. For a bookmark to match the query, all the query's search terms must be matched.

    If `query` is an **object**, it consists of zero or more of 3 properties: `query`, `title`, and `url`, which are described below. For a bookmark to match the query, all the properties' terms must be matched.

    - `query` {{optional_inline}}
      - : A {{jsxref("string")}} specifying one or more terms to match against; the format is identical to the string form of the `query` parameter. If this isn't a string, an exception is thrown.
    - `url` {{optional_inline}}

      - : A {{jsxref("string")}} that must exactly match the bookmark's URL. Matching is case-insensitive, and trailing slashes are ignored.

        If you pass an invalid URL, the function will throw an exception.

    - `title` {{optional_inline}}
      - : A {{jsxref("string")}} that must exactly match the bookmark tree node's title. Matching is case-sensitive.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be fulfilled with an array of {{WebExtAPIRef('bookmarks.BookmarkTreeNode')}} objects, each representing a single matching bookmark tree node. Results are returned in the order that the nodes were created. The array is empty if no results were found.

The [`BookmarkTreeNodes`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks/BookmarkTreeNode)—even nodes of the `"folder"` type—returned by `bookmarks.search()` are missing the `children` property. To get a complete `BookmarkTreeNode` use [`bookmarks.getSubTree()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks/getSubTree).

## Example

This example logs the IDs of all bookmarks:

```js
function onFulfilled(bookmarkItems) {
  for (const item of bookmarkItems) {
    console.log(item.id);
  }
}

function onRejected(error) {
  console.log(`An error: ${error}`);
}

browser.bookmarks.search({}).then(onFulfilled, onRejected);
```

This example looks to see if the currently active tab is bookmarked:

```js
function onFulfilled(bookmarkItems) {
  if (bookmarkItems.length) {
    console.log("active tab is bookmarked");
  } else {
    console.log("active tab is not bookmarked");
  }
}

function onRejected(error) {
  console.log(`An error: ${error}`);
}

function checkActiveTab(tab) {
  browser.bookmarks.search({ url: tab.url }).then(onFulfilled, onRejected);
}

browser.browserAction.onClicked.addListener(checkActiveTab);
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}

> [!NOTE]
> This API is based on Chromium's [`chrome.bookmarks`](https://developer.chrome.com/docs/extensions/reference/api/bookmarks#method-search) API. This documentation is derived from [`bookmarks.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/bookmarks.json) in the Chromium code.

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

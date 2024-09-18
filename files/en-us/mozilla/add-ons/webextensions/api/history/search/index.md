---
title: history.search()
slug: Mozilla/Add-ons/WebExtensions/API/history/search
page-type: webextension-api-function
browser-compat: webextensions.api.history.search
---

{{AddonSidebar}}

Searches the browser's history for {{WebExtAPIRef("history.HistoryItem")}} objects matching the given criteria.

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js-nolint
let searching = browser.history.search(
  query                  // object
)
```

### Parameters

- `query`

  - : An object which indicates what to look for in the browser's history. This object has the following fields:

    - `text`

      - : `string`. Search history items by URL and title. The string is split up into separate search terms at space boundaries. Each search term is matched case-insensitively against the history item's URL and title. The history item will be returned if all search terms match.

        For example, consider this item:

        URL: `"http://example.org"`

        Title: `"Example Domain"`

        ```plain
        "http"              -> matches
        "domain"            -> matches
        "MAIN ample"        -> matches
        "main tt"           -> matches
        "main https"        -> does not match
        ```

        Specify an empty string (`""`) to retrieve all {{WebExtAPIRef("history.HistoryItem")}} objects that meet all the other criteria.

    - `startTime` {{optional_inline}}
      - : `number` or `string` or `object`. A value indicating a date and time. This can be represented as: a [`Date`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) object, an [ISO 8601 date string](https://www.iso.org/iso-8601-date-and-time-format.html), or the number of milliseconds since the epoch. If it is supplied, this option excludes results whose `lastVisitTime` is earlier than this time. If it is omitted, the search is limited to the last 24 hours.
    - `endTime` {{optional_inline}}
      - : `number` or `string` or `object`. A value indicating a date and time. This can be represented as: a [`Date`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) object, an [ISO 8601 date string](https://www.iso.org/iso-8601-date-and-time-format.html), or the number of milliseconds since the epoch. If it is supplied, this option limits results to those visited before this date. If it is omitted, then all entries are considered from the start time onwards.
    - `maxResults` {{optional_inline}}
      - : `number`. The maximum number of results to retrieve. Defaults to 100, with a minimum value of 1. The function will throw an error if you pass it a `maxResults` value less than 1.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) will be fulfilled with an array of objects of type {{WebExtAPIRef("history.HistoryItem")}}, each describing a single matching history item. Items are sorted in reverse chronological order.

## Examples

Logs the URL and last visit time for all history items visited in the last 24 hours:

```js
function onGot(historyItems) {
  for (const item of historyItems) {
    console.log(item.url);
    console.log(new Date(item.lastVisitTime));
  }
}

browser.history.search({ text: "" }).then(onGot);
```

Logs the URL and last visit time for all history items ever visited:

```js
function onGot(historyItems) {
  for (const item of historyItems) {
    console.log(item.url);
    console.log(new Date(item.lastVisitTime));
  }
}

browser.history
  .search({
    text: "",
    startTime: 0,
  })
  .then(onGot);
```

Logs the URL and last visit time of the most recent visit to a page that contain the string "mozilla":

```js
function onGot(historyItems) {
  for (const item of historyItems) {
    console.log(item.url);
    console.log(new Date(item.lastVisitTime));
  }
}

browser.history
  .search({
    text: "mozilla",
    startTime: 0,
    maxResults: 1,
  })
  .then(onGot);
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}

> [!NOTE]
> This API is based on Chromium's [`chrome.history`](https://developer.chrome.com/docs/extensions/reference/api/history#method-search) API. This documentation is derived from [`history.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/history.json) in the Chromium code.

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

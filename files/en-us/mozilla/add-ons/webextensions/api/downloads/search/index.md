---
title: downloads.search()
slug: Mozilla/Add-ons/WebExtensions/API/downloads/search
tags:
  - API
  - Add-ons
  - Extensions
  - Method
  - Non-standard
  - Reference
  - Search
  - WebExtensions
  - downloads
browser-compat: webextensions.api.downloads.search
---
{{AddonSidebar()}}

The **`search()`** function of the {{WebExtAPIRef("downloads")}} API queries the {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} available in the browser's downloads manager, and returns those that match the specified search criteria.

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js
var searching = browser.downloads.search(query);
```

### Parameters

- `query`
  - : A {{WebExtAPIRef('downloads.DownloadQuery')}} object.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise). The promise is fulfilled with an `array` of `{{WebExtAPIRef('downloads.DownloadItem')}}` objects that match the given criteria.

## Browser compatibility

{{Compat}}

## Examples

In general, you restrict the items retrieved using the `query` parameter.

### Get downloads matching "query"

```js
function logDownloads(downloads) {
  for (let download of downloads) {
    console.log(download.id);
    console.log(download.url);
  }
}

function onError(error) {
  console.log(`Error: ${error}`);
}

var searching = browser.downloads.search({
  query:["imgur"]
});

searching.then(logDownloads, onError);
```

### Get a specific item

To get a specific {{WebExtAPIRef("downloads.DownloadItem", "DownloadItem")}}, the easiest way is to set only the `id` field, as seen in the snippet below:

```js
function logDownloads(downloads) {
  for (let download of downloads) {
    console.log(download.id);
    console.log(download.url);
  }
}

function onError(error) {
  console.log(`Error: ${error}`);
}

var id = 13;

var searching = browser.downloads.search({id});
searching.then(logDownloads, onError);
```

### Get all downloads

If you want to return all {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}}, set `query` to an empty object.

```js
function logDownloads(downloads) {
  for (let download of downloads) {
    console.log(download.id);
    console.log(download.url);
  }
}

function onError(error) {
  console.log(`Error: ${error}`);
}

var searching = browser.downloads.search({});
searching.then(logDownloads, onError);
```

### Get the most recent download

You can get the most recent download by specifying the following search parameters:

```js
function logDownloads(downloads) {
  for (let download of downloads) {
    console.log(download.id);
    console.log(download.url);
  }
}

function onError(error) {
  console.log(`Error: ${error}`);
}

var searching = browser.downloads.search({
   limit: 1,
   orderBy: ["-startTime"]
});
searching.then(logDownloads, onError);
```

You can see this code in action in our [latest-download](https://github.com/mdn/webextensions-examples/blob/master/latest-download/popup/latest_download.js) example.

{{WebExtExamples}}

> **Note:** This API is based on Chromium's [`chrome.downloads`](https://developer.chrome.com/extensions/downloads#method-search) API.
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

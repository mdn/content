---
title: browsingData.remove()
slug: Mozilla/Add-ons/WebExtensions/API/browsingData/remove
tags:
  - API
  - Add-ons
  - Extensions
  - Method
  - Reference
  - WebExtensions
  - browsingData
  - remove
browser-compat: webextensions.api.browsingData.remove
---
{{AddonSidebar()}}

Removes the specified browsing data.

The browsing data to be removed is specified in the `dataTypes` option, which is a {{WebExtAPIRef("browsingData.DataTypeSet")}} object.

You can use the `removalOptions` option, which is a {{WebExtAPIRef("browsingData.RemovalOptions")}} object, to control how far back in time to remove data and whether to remove data only from normal web pages or to remove data from hosted apps and extensions as well.

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js
let removing = browser.browsingData.remove(
  removalOptions,            // RemovalOptions object
  dataTypes                  // DataTypeSet object
)
```

### Parameters

- `removalOptions`
  - : `object`. A {{WebExtAPIRef("browsingData.RemovalOptions")}} object, which may be used to control how far back in time to remove data, and whether to remove data from hosted web apps and extensions, or just normal web pages.
- `dataTypes`
  - : `object`. A {{WebExtAPIRef("browsingData.DataTypeSet")}} object, describing the types of data to remove (e.g. history, downloads, …).

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be fulfilled with no arguments when the removal has finished. If any error occurs, the promise will be rejected with an error message.

## Examples

Remove download history and browsing history for the last week:

```js
function onRemoved() {
  console.log("removed");
}

function onError(error) {
  console.error(error);
}

function weekInMilliseconds() {
  return 1000 * 60 * 60 * 24 * 7;
}

let oneWeekAgo = (new Date()).getTime() - weekInMilliseconds();

browser.browsingData.remove(
  {since: oneWeekAgo},
  {downloads: true, history: true}).
then(onRemoved, onError);
```

Remove all download and browsing history:

```js
function onRemoved() {
  console.log("removed");
}

function onError(error) {
  console.error(error);
}

browser.browsingData.remove({},
  {downloads: true, history: true}).
then(onRemoved, onError);
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}

> **Note:** This API is based on Chromium's [`chrome.browsingData`](https://developer.chrome.com/docs/extensions/reference/browsingData/) API.
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

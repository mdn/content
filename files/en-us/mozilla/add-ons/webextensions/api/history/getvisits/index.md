---
title: history.getVisits()
slug: Mozilla/Add-ons/WebExtensions/API/history/getVisits
page-type: webextension-api-function
browser-compat: webextensions.api.history.getVisits
---

{{AddonSidebar}}

Retrieves information about all visits to the given URL.

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js-nolint
let getting = browser.history.getVisits(
  details                // object
)
```

### Parameters

- `details`

  - : An object with the following properties:

    - `url`
      - : `string`. The URL for which to retrieve visit information.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) will be fulfilled with an array of `{{WebExtAPIRef('history.VisitItem')}}` objects each representing a visit to the given URL. Visits are sorted in reverse chronological order.

## Browser compatibility

{{Compat}}

## Examples

List all visits to the most recently-visited page:

```js
function gotVisits(visits) {
  console.log(`Visit count: ${visits.length}`);
  for (const visit of visits) {
    console.log(visit.visitTime);
  }
}

function listVisits(historyItems) {
  if (historyItems.length) {
    console.log(`URL ${historyItems[0].url}`);
    const gettingVisits = browser.history.getVisits({
      url: historyItems[0].url,
    });
    gettingVisits.then(gotVisits);
  }
}

let searching = browser.history.search({
  text: "",
  startTime: 0,
  maxResults: 1,
});

searching.then(listVisits);
```

{{WebExtExamples}}

> [!NOTE]
> This API is based on Chromium's [`chrome.history`](https://developer.chrome.com/docs/extensions/reference/api/history#method-getVisits) API. This documentation is derived from [`history.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/history.json) in the Chromium code.

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

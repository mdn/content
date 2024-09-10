---
title: history.addUrl()
slug: Mozilla/Add-ons/WebExtensions/API/history/addUrl
page-type: webextension-api-function
browser-compat: webextensions.api.history.addUrl
---

{{AddonSidebar}}

Adds a record to the browser's history of a visit to the given URL. The visit's time is recorded as the time of the call, and the {{WebExtAPIRef("history.TransitionType", "TransitionType")}} is recorded as "link".

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js-nolint
let addingUrl = browser.history.addUrl(
  details         // object
)
```

### Parameters

- `details`

  - : `object`. Object containing the URL to add.

    - `url`
      - : `string`. The URL to add.
    - `title` {{optional_inline}}
      - : string: The title of the page. If this is not supplied, the title will be recorded as `null`.
    - `transition` {{optional_inline}}
      - : {{WebExtAPIRef("history.TransitionType")}}. Describes how the browser navigated to the page on this occasion. If this is not supplied, a transition type of "link" will be recorded.
    - `visitTime` {{optional_inline}}
      - : `number` or `string` or `object`. A value indicating a date and time. This can be represented as: a [`Date`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) object, an [ISO 8601 date string](https://www.iso.org/iso-8601-date-and-time-format.html), or the number of milliseconds since the epoch. Sets the visit time to this value. If this is not supplied, the current time will be recorded.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) will be fulfilled with no parameters when the item has been added.

## Browser compatibility

{{Compat}}

## Examples

Add a record of a visit to "https\://example.org/", then check that the new visit was recorded by searching history for the most recent item and logging it:

```js
function onGot(results) {
  if (results.length) {
    console.log(results[0].url);
    console.log(new Date(results[0].lastVisitTime));
  }
}

browser.history
  .addUrl({ url: "https://example.org/" })
  .then(() =>
    browser.history.search({
      text: "https://example.org/",
      startTime: 0,
      maxResults: 1,
    }),
  )
  .then(onGot);
```

Add a record of a visit to "https\://example.org", but give it a `visitTime` 24 hours in the past, and a `transition` of "typed":

```js
const DAY = 24 * 60 * 60 * 1000;

function oneDayAgo() {
  return Date.now() - DAY;
}

function onGot(visits) {
  for (const visit of visits) {
    console.log(new Date(visit.visitTime));
    console.log(visit.transition);
  }
}

browser.history
  .addUrl({
    url: "https://example.org/",
    visitTime: oneDayAgo(),
    transition: "typed",
  })
  .then(() =>
    browser.history.getVisits({
      url: "https://example.org/",
    }),
  )
  .then(onGot);
```

{{WebExtExamples}}

> [!NOTE]
> This API is based on Chromium's [`chrome.history`](https://developer.chrome.com/docs/extensions/reference/api/history#method-addUrl) API. This documentation is derived from [`history.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/history.json) in the Chromium code.

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

---
title: history.deleteRange()
slug: Mozilla/Add-ons/WebExtensions/API/history/deleteRange
page-type: webextension-api-function
browser-compat: webextensions.api.history.deleteRange
---

{{AddonSidebar}}

Removes all visits to pages that the user made during the given time range. If this removes all visits made to a given page, then the page will be no longer appear in the browser history and {{WebExtAPIRef("history.onVisitRemoved")}} will fire for it.

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js-nolint
let deletingRange = browser.history.deleteRange(
  range           // object
)
```

### Parameters

- `range`

  - : `object`. Specification of the time range for which to delete visits.

    - `startTime`
      - : `number` or `string` or `object`. A value indicating a date and time. This can be represented as: a [`Date`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) object, an [ISO 8601 date string](https://www.iso.org/iso-8601-date-and-time-format.html), or the number of [milliseconds since the epoch](https://en.wikipedia.org/wiki/Unix_time). Specifies the start time for the range.
    - `endTime`
      - : `number` or `string` or `object`. A value indicating a date and time. This can be represented as: a [`Date`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) object, an [ISO 8601 date string](https://www.iso.org/iso-8601-date-and-time-format.html), or the number of [milliseconds since the epoch](https://en.wikipedia.org/wiki/Unix_time). Specifies the end time for the range.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) will be fulfilled with no parameters when the range has been deleted.

## Browser compatibility

{{Compat}}

## Examples

Delete all visits made in the last minute:

```js
const MINUTE = 60 * 1000;

function oneMinuteAgo() {
  return Date.now() - MINUTE;
}

browser.history.deleteRange({
  startTime: oneMinuteAgo(),
  endTime: Date.now(),
});
```

{{WebExtExamples}}

> [!NOTE]
> This API is based on Chromium's [`chrome.history`](https://developer.chrome.com/docs/extensions/reference/api/history#method-deleteRange) API. This documentation is derived from [`history.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/history.json) in the Chromium code.

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

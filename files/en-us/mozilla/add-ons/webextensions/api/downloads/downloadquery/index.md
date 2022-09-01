---
title: downloads.DownloadQuery
slug: Mozilla/Add-ons/WebExtensions/API/downloads/DownloadQuery
tags:
  - API
  - Add-ons
  - DownloadQuery
  - Extensions
  - Non-standard
  - Reference
  - Type
  - WebExtensions
  - downloads
browser-compat: webextensions.api.downloads.DownloadQuery
---
{{AddonSidebar()}}

The `DownloadQuery` type of the {{WebExtAPIRef("downloads")}} API defines a set of parameters that can be used to search the downloads manager for a specific set of downloads.

This type is used for example in {{WebExtAPIRef("downloads.search()")}} and {{WebExtAPIRef("downloads.erase()")}}, as a query object to filter the set of {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} to return or erase.

## Type

Values of this type are objects. They contain the following properties:

- `cookieStoreId` {{optional_inline}}
  - : The cookie store ID of the [contextual identity](/en-US/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities) in which the download took place.
- `query` {{optional_inline}}
  - : An `array` of `string`s. Include only {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} whose `filename` or `url` contains all of the given strings. You can also include terms beginning with a dash (-) — these terms **must not** be contained in the item's `filename` or `url` for it to be included.
- `startedBefore` {{optional_inline}}
  - : A {{WebExtAPIRef('downloads.DownloadTime', "DownloadTime")}}. Include only {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} that started before the given time.
- `startedAfter` {{optional_inline}}
  - : A {{WebExtAPIRef('downloads.DownloadTime', "DownloadTime")}}. Include only {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} that started after the given time.
- `endedBefore` {{optional_inline}}
  - : A {{WebExtAPIRef('downloads.DownloadTime', "DownloadTime")}}. Include only {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} that ended before the given time.
- `endedAfter` {{optional_inline}}
  - : A {{WebExtAPIRef('downloads.DownloadTime', "DownloadTime")}}. Include only {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} that ended after the given time.
- `totalBytesGreater` {{optional_inline}}
  - : A `number` representing a number of bytes. Include only {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} whose `totalBytes` is greater than the given number.
- `totalBytesLess` {{optional_inline}}
  - : A `number` representing a number of bytes. Include only {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} whose `totalBytes` is less than the given number.
- `filenameRegex` {{optional_inline}}
  - : A `string` representing a regular expression. Include only {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} whose `filename` value matches the given regular expression.
- `urlRegex` {{optional_inline}}
  - : A `string` representing a regular expression. Include only {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} whose `url` value matches the given regular expression.
- `limit` {{optional_inline}}
  - : An `integer` representing a number of results. Include only the specified number of {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}}.
- `orderBy` {{optional_inline}}
  - : An `array` of `string`s representing {{WebExtAPIRef("downloads.DownloadItem", "DownloadItem")}} properties the search results should be sorted by. For example, including `startTime` then `totalBytes` in the array would sort the {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} by their start time, then total bytes — in ascending order. To specify sorting by a property in descending order, prefix it with a hyphen, for example `-startTime`.
- `id` {{optional_inline}}
  - : An `integer` representing the ID of the {{WebExtAPIRef("downloads.DownloadItem")}} you want to query.
- `url` {{optional_inline}}
  - : A `string` representing the absolute URL that the download was initiated from, before any redirects.
- `filename` {{optional_inline}}
  - : A string representing the absolute local path of the download file you want to query.
- `danger` {{optional_inline}}
  - : A string representing a {{WebExtAPIRef('downloads.DangerType')}} — include only {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} with this `danger` value.
- `mime` {{optional_inline}}
  - : A `string` representing a MIME type. Include only {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} with this `mime` value.
- `startTime` {{optional_inline}}
  - : A `string` representing an [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format time. Include only {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} with this `startTime` value.
- `endTime` {{optional_inline}}
  - : A `string` representing an [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format time. Include only will limited to {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} with this `endTime` value.
- `state` {{optional_inline}}
  - : A `string` representing a download {{WebExtAPIRef('downloads.State')}} (`in_progress`, `interrupted`, or `complete`). Include only {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} with this `state` value.
- `paused` {{optional_inline}}
  - : A `boolean` that indicates whether a download is paused — i.e. has stopped reading data from the host, but kept the connection open (`true`), or not (`false`). Include only {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} with this `paused` value.
- `error` {{optional_inline}}
  - : A string representing an {{WebExtAPIRef('downloads.InterruptReason')}} — a reason why a download was interrupted. Include only {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} with this `error` value.
- `bytesReceived` {{optional_inline}}
  - : A `number` representing the number of bytes received so far from the host, without considering file compression. Include only {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} with this `bytesReceived` value.
- `totalBytes` {{optional_inline}}
  - : A `number` representing the total number of bytes in the downloaded file, without considering file compression. Include only {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} with this `totalBytes` value.
- `fileSize` {{optional_inline}}
  - : `number`. Number of bytes in the whole file post-decompression, or -1 if unknown. A `number` representing the total number of bytes in the file after decompression. Include only {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} with this `fileSize` value.
- `exists` {{optional_inline}}
  - : A `boolean` indicating whether a downloaded file still exists (`true`) or not (`false`). Include only {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} with this `exists` value.

## Browser compatibility

{{Compat}}

{{WebExtExamples}}

> **Note:** This API is based on Chromium's [`chrome.downloads`](https://developer.chrome.com/docs/extensions/reference/downloads/#type-DownloadQuery) API.
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

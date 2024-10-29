---
title: downloads.DownloadItem
slug: Mozilla/Add-ons/WebExtensions/API/downloads/DownloadItem
page-type: webextension-api-type
browser-compat: webextensions.api.downloads.DownloadItem
---

{{AddonSidebar}}

The `DownloadItem` type of the {{WebExtAPIRef("downloads")}} API represents a downloaded file.

## Type

Values of this type are objects. They contain the following properties:

- `byExtensionId` {{optional_inline}}
  - : A `string` representing the ID of the extension that triggered the download (if it was triggered by an extension). This does not change once set. If the download was not triggered by an extension this is undefined.
- `byExtensionName` {{optional_inline}}
  - : A `string` representing the name of the extension that triggered the download (if it was triggered by an extension). This may change if the extension changes its name or the user changes their locale. If the download was not triggered by an extension this is undefined.
- `bytesReceived`
  - : A `number` representing the number of bytes received so far from the host during the download; this does not take file compression into consideration.
- `canResume`
  - : A `boolean` indicating whether a currently-interrupted (e.g. paused) download can be resumed from the point where it was interrupted (`true`), or not (`false`).
- `cookieStoreId` {{optional_inline}}
  - : The cookie store ID of the [contextual identity](/en-US/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities) in which the download took place. See [Work with contextual identities](/en-US/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities) for more information.
- `danger`
  - : A string indicating whether this download is thought to be safe or known to be suspicious. Its possible values are defined in the {{WebExtAPIRef('downloads.DangerType')}} type.
- `endTime` {{optional_inline}}
  - : A `string` (in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format) representing the number of milliseconds between the UNIX epoch and when this download ended. This is undefined if the download has not yet finished.
- `error` {{optional_inline}}
  - : A string indicating why a download was interrupted. Possible values are defined in the {{WebExtAPIRef('downloads.InterruptReason')}} type. This is undefined if an error has not occurred.
- `estimatedEndTime` {{optional_inline}}
  - : A `string` (in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format) representing the estimated number of milliseconds between the UNIX epoch and when this download is estimated to be completed. This is undefined if it is not known (in particular, it is undefined in the `DownloadItem` that's passed into {{WebExtAPIRef("downloads.onCreated")}}).
- `exists`
  - : A `boolean` indicating whether a downloaded file still exists (`true`) or not (`false`). This information might be out-of-date, as browsers do not automatically watch for file removal — to check whether a file exists, call the {{WebExtAPIRef('downloads.search()')}} method, filtering for the file in question.
- `filename`
  - : A `string` representing the file's absolute local path.
- `fileSize`
  - : A `number` indicating the total number of bytes in the whole file, after decompression. A value of -1 here means that the total file size is unknown.
- `id`
  - : An `integer` representing a unique identifier for the downloaded file that is persistent across browser sessions.
- `incognito`
  - : A `boolean` that indicates whether the download is recorded in the browser's history (`false`), or not (`true`).
- `mime`
  - : A `string` representing the downloaded file's MIME type.
- `paused`
  - : A `boolean` indicating whether the download is paused, i.e. if the download has stopped reading data from the host but has kept the connection open. If so, the value is `true`, `false` if not.
- `referrer`
  - : A `string` representing the downloaded file's referrer.
- `startTime`
  - : A `string` (in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format) representing the number of milliseconds between the UNIX epoch and when this download began.
- `state`
  - : A `string` Indicating whether the download is progressing, interrupted, or complete. Possible values are defined in the {{WebExtAPIRef('downloads.State')}} type.
- `totalBytes`
  - : A `number` indicating the total number of bytes in the file being downloaded. This does not take file compression into consideration. A value of -1 here means that the total number of bytes is unknown.
- `url`
  - : A `string` representing the absolute URL from which the file was downloaded.

## Browser compatibility

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> This API is based on Chromium's [`chrome.downloads`](https://developer.chrome.com/docs/extensions/reference/api/downloads#type-DownloadItem) API.

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

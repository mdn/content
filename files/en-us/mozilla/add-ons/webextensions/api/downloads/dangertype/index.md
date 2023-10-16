---
title: downloads.DangerType
slug: Mozilla/Add-ons/WebExtensions/API/downloads/DangerType
page-type: webextension-api-type
browser-compat: webextensions.api.downloads.DangerType
---

{{AddonSidebar()}}

The `DangerType` type of the {{WebExtAPIRef("downloads")}} API defines a set of possible reasons that a downloadable file might be considered dangerous.

A {{WebExtAPIRef('downloads.DownloadItem')}}'s `danger` property will contain a string taken from the values defined in this type.

> **Note:** These string constants will never change, however the set of DangerTypes may change.

## Type

Values of this type are strings. Possible values are:

- `file`
  - : The download's filename is suspicious.
- `url`
  - : The download's URL is known to be malicious.
- `content`
  - : The downloaded file is known to be malicious.
- `uncommon`
  - : The download's URL is not commonly downloaded.
- `host`
  - : The download came from a host known to distribute malicious binaries.
- `unwanted`
  - : The download is potentially unwanted or unsafe.
- `safe`
  - : The download presents no known danger to the user's computer.
- `accepted`
  - : The user has accepted the dangerous download.

## Browser compatibility

{{Compat}}

{{WebExtExamples}}

> **Note:** This API is based on Chromium's [`chrome.downloads`](https://developer.chrome.com/docs/extensions/reference/downloads/#type-DangerType) API.

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

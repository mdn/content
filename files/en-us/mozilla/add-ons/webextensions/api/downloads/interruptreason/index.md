---
title: downloads.InterruptReason
slug: Mozilla/Add-ons/WebExtensions/API/downloads/InterruptReason
tags:
  - API
  - Add-ons
  - Extensions
  - InterruptReason
  - Non-standard
  - Reference
  - Type
  - WebExtensions
  - downloads
browser-compat: webextensions.api.downloads.InterruptReason
---
{{AddonSidebar()}}

The `InterruptReason` type of the {{WebExtAPIRef("downloads")}} API defines a set of possible reasons why a download was interrupted.

A {{WebExtAPIRef('downloads.DownloadItem')}}'s `error` property will contain a string taken from the values defined in this type.

## Type

Values of this type are strings. Possible values are split into categories, with each set having the same substring at the beginning:

File-related errors:

- `"FILE_FAILED"`
- `"FILE_ACCESS_DENIED"`
- `"FILE_NO_SPACE"`
- `"FILE_NAME_TOO_LONG"`
- `"FILE_TOO_LARGE"`
- `"FILE_VIRUS_INFECTED"`
- `"FILE_TRANSIENT_ERROR"`
- `"FILE_BLOCKED"`
- `"FILE_SECURITY_CHECK_FAILED"`
- `"FILE_TOO_SHORT"`

Network-related errors:

- `"NETWORK_FAILED"`
- `"NETWORK_TIMEOUT"`
- `"NETWORK_DISCONNECTED"`
- `"NETWORK_SERVER_DOWN"`
- `"NETWORK_INVALID_REQUEST"`

Server-related errors:

- `"SERVER_FAILED"`
- `"SERVER_NO_RANGE"`
- `"SERVER_BAD_CONTENT"`
- `"SERVER_UNAUTHORIZED"`
- `"SERVER_CERT_PROBLEM"`
- `"SERVER_FORBIDDEN"`

User-related errors:

- `"USER_CANCELED"`
- `"USER_SHUTDOWN"`

Miscellaneous:

- `"CRASH"`

## Browser compatibility

{{Compat}}

{{WebExtExamples}}

> **Note:** This API is based on Chromium's [`chrome.downloads`](https://developer.chrome.com/docs/extensions/reference/downloads/#type-InterruptReason) API.
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

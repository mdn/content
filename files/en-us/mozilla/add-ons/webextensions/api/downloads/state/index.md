---
title: downloads.State
slug: Mozilla/Add-ons/WebExtensions/API/downloads/State
page-type: webextension-api-type
browser-compat: webextensions.api.downloads.State
---

{{AddonSidebar}}

The `State` type of the {{WebExtAPIRef("downloads")}} API defines different states that a current download can be in.

A {{WebExtAPIRef('downloads.DownloadItem')}}'s `state` property will contain a string taken from the values defined in this type.

## Type

Values of this type are strings. Possible values are:

- `in_progress`
  - : The browser is currently receiving download data from the server.
- `interrupted`
  - : An error broke the connection with the server.
- `complete`
  - : The download completed successfully.

> [!NOTE]
> These string constants will never change, but new constants may be added.

## Browser compatibility

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> This API is based on Chromium's [`chrome.downloads`](https://developer.chrome.com/docs/extensions/reference/api/downloads#type-State) API.

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

---
title: topSites.MostVisitedURL
slug: Mozilla/Add-ons/WebExtensions/API/topSites/MostVisitedURL
page-type: webextension-api-type
browser-compat: webextensions.api.topSites.MostVisitedURL
---

{{AddonSidebar}}

The `MostVisitedURL` type contains two properties: the title of a page and its URL.

## Type

Values of this type are objects. They contain the following properties:

- `favicon` {{optional_inline}}
  - : `String`. A data: URL containing the favicon for the page, if `includeFavicon` was given in {{WebExtAPIRef("topSites.get()")}} and the favicon was available.
- `title`
  - : `String`. The page's title.
- `url`
  - : `String`. The page's URL.

## Browser compatibility

{{Compat}}

## Examples

{{WebExtExamples}}

> [!NOTE]
> This API is based on Chromium's [`chrome.topSites`](https://developer.chrome.com/docs/extensions/reference/api/topSites) API.

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

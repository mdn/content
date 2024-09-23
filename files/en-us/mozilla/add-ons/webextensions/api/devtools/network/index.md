---
title: devtools.network
slug: Mozilla/Add-ons/WebExtensions/API/devtools/network
page-type: webextension-api-property
browser-compat: webextensions.api.devtools.network
---

{{AddonSidebar}}

The `devtools.network` API lets a devtools extension get information about network requests associated with the window that the devtools are attached to (the inspected window).

Like all the `devtools` APIs, this API is only available to code running in the document defined in the [devtools_page](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/devtools_page) manifest.json key, or in other devtools documents created by the extension (such as the panel's own document). See [Extending the developer tools](/en-US/docs/Mozilla/Add-ons/WebExtensions/Extending_the_developer_tools) for more.

## Functions

- [`devtools.network.getHAR()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/devtools/network/getHAR)
  - : Get a [HAR log](http://www.softwareishard.com/blog/har-12-spec/#log) for the page loaded in the current tab.

## Events

- [`devtools.network.onNavigated`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/devtools/network/onNavigated)
  - : Fired when the user navigates the inspected window to a new page.
- [`devtools.network.onRequestFinished`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/devtools/network/onRequestFinished)
  - : Fired when the network request has finished and its details are available to the extension.

## Browser compatibility

{{Compat}}

{{WebExtExamples("h2")}}

> [!NOTE]
> This API is based on Chromium's [`chrome.devtools.network`](https://developer.chrome.com/docs/extensions/reference/api/devtools/network) API.

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

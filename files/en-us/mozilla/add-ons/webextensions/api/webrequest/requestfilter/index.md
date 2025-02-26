---
title: webRequest.RequestFilter
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/RequestFilter
page-type: webextension-api-type
browser-compat: webextensions.api.webRequest.RequestFilter
---

{{AddonSidebar}}

An object describing filters to apply to webRequest events.

## Type

Values of this type are objects. They contain the following properties:

- `urls`
  - : `array` of `string`. An array of [match patterns](/en-US/docs/Mozilla/Add-ons/WebExtensions/Match_patterns). The listener will only be called for requests whose targets match any of the given patterns. Only requests made using HTTP or HTTPS will trigger events, other protocols (such as data: and file:) supported by pattern matching do not trigger events. `view-source:` requests may be matched based on its inner URL.
- `types` {{optional_inline}}
  - : `array` of `{{WebExtAPIRef('webRequest.ResourceType')}}`. A list of resource types (for example, stylesheets, images, scripts). The listener will only be called for requests for resources which are one of the given types.
- `tabId` {{optional_inline}}
  - : `integer`. The listener will only be called for requests from the {{WebExtAPIRef("tabs.Tab", "tab")}} identified by this ID.
- `windowId` {{optional_inline}}
  - : `integer`. The listener will only be called for requests from the {{WebExtAPIRef("windows.Window", "window")}} identified by this ID.
- `incognito` {{optional_inline}}
  - : `boolean`. If provided, requests that do not match the incognito state (`true` or `false`) will be filtered out.

## Browser compatibility

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> This API is based on Chromium's [`chrome.webRequest`](https://developer.chrome.com/docs/extensions/reference/api/webRequest#type-RequestFilter) API. This documentation is derived from [`web_request.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/web_request.json) in the Chromium code.

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

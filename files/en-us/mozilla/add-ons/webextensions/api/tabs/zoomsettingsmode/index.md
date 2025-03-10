---
title: tabs.ZoomSettingsMode
slug: Mozilla/Add-ons/WebExtensions/API/tabs/ZoomSettingsMode
page-type: webextension-api-type
browser-compat: webextensions.api.tabs.ZoomSettingsMode
---

{{AddonSidebar}}

Defines how zoom changes are handled. Extensions can pass this value into {{WebExtAPIRef("tabs.setZoomSettings()")}} to control how the browser handles attempts to change zoom settings for a tab. Defaults to "automatic".

## Type

Values of this type are strings. Possible values are:

- "automatic"
  - : Zoom changes are handled normally by the browser.
- "disabled"
  - : Disables all zooming in the tab. The tab will revert to the default zoom level, and all attempted zoom changes will be ignored.
- "manual"
  - : The extension will handle zoom changes itself, by listening for the {{WebExtAPIRef("tabs.onZoomChange")}} event and scaling the page accordingly. This mode does not support `per-origin` zooming: it will ignore the `scope` [zoom setting](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/ZoomSettings) and always use `per-tab`.

## Browser compatibility

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> This API is based on Chromium's [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/api/tabs#type-ZoomSettingsMode) API. This documentation is derived from [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) in the Chromium code.

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

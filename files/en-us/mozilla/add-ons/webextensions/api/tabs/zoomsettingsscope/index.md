---
title: tabs.ZoomSettingsScope
slug: Mozilla/Add-ons/WebExtensions/API/tabs/ZoomSettingsScope
page-type: webextension-api-type
browser-compat: webextensions.api.tabs.ZoomSettingsScope
---

{{AddonSidebar}}

Defines whether zoom changes will persist for the page's origin, or only take effect in this tab. This defaults to `per-origin` when {{WebExtAPIRef("tabs.zoomSettingsMode")}} is "automatic", and is always `per-tab` otherwise.

## Type

Values of this type are strings. Possible values are:

- "per-origin"
  - : All other tabs with the same origin as this tab will have the zoom changes applied to them. This scope is only available if {{WebExtAPIRef("tabs.zoomSettingsMode")}} is "automatic".
- "per-tab"

  - : Zoom changes only take effect in this tab, and zoom changes in other tabs will not affect the zooming of this tab. Also:

    - in Firefox the zoom level persists across page loads and navigation within the tab.
    - in Chrome-based browsers zoom changes are reset on navigation; navigating a tab will always load pages with their per-origin zoom factors.

## Browser compatibility

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> This API is based on Chromium's [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/api/tabs#type-ZoomSettingsScope) API. This documentation is derived from [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) in the Chromium code.

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

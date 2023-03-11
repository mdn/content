---
title: windows.Window
slug: Mozilla/Add-ons/WebExtensions/API/windows/Window
page-type: webextension-api-type
browser-compat: webextensions.api.windows.Window
---

{{AddonSidebar()}}

Information about a browser window.

## Type

Values of this type are `objects`. They contain the following properties:

- `alwaysOnTop`
  - : `boolean`. Whether the window is set to be always on top.
- `focused`
  - : `boolean`. Whether the window is currently the focused window.
- `height` {{optional_inline}}
  - : `integer`. The height of the window, including the frame, in pixels.
- `id` {{optional_inline}}
  - : `integer`. The ID of the window. Window IDs are unique within a browser session.
- `incognito`
  - : `boolean`. Whether the window is incognito (private).
- `left` {{optional_inline}}
  - : `integer`. The offset of the window from the left edge of the screen in pixels.
- `sessionId` {{optional_inline}}
  - : `string`. The session ID used to uniquely identify a Window obtained from the {{WebExtAPIRef('sessions')}} API.
- `state` {{optional_inline}}
  - : A {{WebExtAPIRef('windows.WindowState')}} value representing the state of this browser window — maximized, minimized, etc.
- `tabs` {{optional_inline}}
  - : Array of {{WebExtAPIRef('tabs.Tab')}} objects representing the current tabs in the window.
- `title` {{optional_inline}}
  - : The title of the browser window. Requires "tabs" permission or [host permissions](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) for the active tab's URL. Read only.
- `top` {{optional_inline}}
  - : `integer`. The offset of the window from the top edge of the screen in pixels.
- `type` {{optional_inline}}
  - : A {{WebExtAPIRef('windows.WindowType')}} value representing the type of browser window this is — normal browser window, popup, etc.
- `width` {{optional_inline}}
  - : `integer`. The width of the window, including the frame, in pixels.

## Browser compatibility

{{Compat}}

{{WebExtExamples}}

> **Note:** This API is based on Chromium's [`chrome.windows`](https://developer.chrome.com/docs/extensions/reference/windows/#type-Window) API. This documentation is derived from [`windows.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/windows.json) in the Chromium code.

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

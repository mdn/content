---
title: sessions.Session
slug: Mozilla/Add-ons/WebExtensions/API/sessions/Session
page-type: webextension-api-type
browser-compat: webextensions.api.sessions.Session
---

{{AddonSidebar()}}

The `Session` object represents a tab or window that the user has closed in the current browsing session.

Sessions are represented as {{WebExtAPIRef("tabs.Tab", "Tab")}} objects if the tab was closed but its window was not closed: for example, because the user clicked the "Close tab" button, and this tab was not the only tab in its window.

Sessions are represented as {{WebExtAPIRef("windows.Window", "Window")}} objects if the window was closed: for example, because the user clicked the "Close window" button, or closed the only tab open in a window.

Note that different browsers might have a different idea of when a session is a Tab and when it is a Window. For example:

- In Chrome a session is recorded as a Window if the user closes a window that contained more than one tab. If the user closed a window that contained only one tab, this is recorded as a Tab.
- In Firefox, a session is recorded as a Window if the user closes a window (or a tab that was the last tab in the window), and a Tab if the user closes a tab that wasn't the last tab in its window.

The Tab object for a tab that is open will not have a `sessionId`. When the tab is closed, it will have a `sessionId` but will not have a tab `id`. If the tab is restored, it will get a new tab `id` and will lose the `sessionId`.

## Type

Values of this type are objects. They contain the following properties:

- `lastModified`
  - : `number`. The time the tab or window was closed, in [milliseconds since the epoch](https://en.wikipedia.org/wiki/Unix_time).
- `tab` {{optional_inline}}
  - : `object`. If the object represents a closed tab, then this property is present and will be a {{WebExtAPIRef("tabs.Tab")}} object. This will contain `url`, `title`, and `favIconUrl` only if the extension has the "tabs" [permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) or [host permissions](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) to access the tab's URL.
- `window` {{optional_inline}}
  - : `object`. If the object represents a closed window, then this property is present and will be a {{WebExtAPIRef("windows.Window")}} object.

## Browser compatibility

{{Compat}}

> **Note:** This API is based on Chromium's [`chrome.sessions`](https://developer.chrome.com/docs/extensions/reference/sessions/) API.

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

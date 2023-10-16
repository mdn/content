---
title: windows
slug: Mozilla/Add-ons/WebExtensions/API/windows
page-type: webextension-api
browser-compat: webextensions.api.windows
---

{{AddonSidebar}}

Interact with browser windows. You can use this API to get information about open windows and to open, modify, and close windows. You can also listen for window open, close, and activate events.

## Types

- {{WebExtAPIRef("windows.WindowType")}}
  - : The type of browser window this is.
- {{WebExtAPIRef("windows.WindowState")}}
  - : The state of this browser window.
- {{WebExtAPIRef("windows.Window")}}
  - : Contains information about a browser window.
- {{WebExtAPIRef("windows.CreateType")}}
  - : Specifies the type of browser window to create.

## Constants

- {{WebExtAPIRef("windows.WINDOW_ID_NONE")}}
  - : The `windowId` value that represents the absence of a browser window.
- {{WebExtAPIRef("windows.WINDOW_ID_CURRENT")}}
  - : A value that can be used in place of a `windowId` in some APIs to represent the current window.

## Methods

- {{WebExtAPIRef("windows.get()")}}
  - : Gets details about a window, given its ID.
- {{WebExtAPIRef("windows.getCurrent()")}}
  - : Gets the current window.
- {{WebExtAPIRef("windows.getLastFocused()")}}
  - : Gets the window that was most recently focused — typically the window 'on top'.
- {{WebExtAPIRef("windows.getAll()")}}
  - : Gets all windows.
- {{WebExtAPIRef("windows.create()")}}
  - : Creates a new window.
- {{WebExtAPIRef("windows.update()")}}
  - : Updates the properties of a window. Use this to move, resize, and (un)focus a window, etc.
- {{WebExtAPIRef("windows.remove()")}}
  - : Closes a window, and all its tabs.

## Events

- {{WebExtAPIRef("windows.onCreated")}}
  - : Fired when a window is created.
- {{WebExtAPIRef("windows.onRemoved")}}
  - : Fired when a window is closed.
- {{WebExtAPIRef("windows.onFocusChanged")}}
  - : Fired when the currently focused window changes.

## Browser compatibility

{{Compat}}

{{WebExtExamples("h2")}}

> **Note:** This API is based on Chromium's [`chrome.windows`](https://developer.chrome.com/docs/extensions/reference/windows/) API. This documentation is derived from [`windows.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/windows.json) in the Chromium code.

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

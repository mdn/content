---
title: sessions
slug: Mozilla/Add-ons/WebExtensions/API/sessions
page-type: webextension-api
browser-compat: webextensions.api.sessions
---

{{AddonSidebar}}

Use the sessions API to list, and restore, tabs and windows that have been closed while the browser has been running.

The {{WebExtAPIRef("sessions.getRecentlyClosed()")}} function returns an array of {{WebExtAPIRef("tabs.Tab")}} and {{WebExtAPIRef("windows.Window")}} objects, representing tabs and windows that have been closed since the browser was running, up to the maximum defined in {{WebExtAPIRef("sessions.MAX_SESSION_RESULTS")}}.

You can then restore a window or tab using the {{WebExtAPIRef("sessions.restore()")}} function. Restoring doesn't just reopen the tab: it also restores the tab's navigation history so the back/forward buttons will work.

This API also provides a group of functions that enable an extension to store additional state associated with a tab or a window. Then, if the tab or window is closed and subsequently restored, the extension can retrieve the state. For example, a tab grouping extension might use this to remember which group a tab is in, so as to restore it into the right group if the user restores the tab.

To use the sessions API you must have the "sessions" [API permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions).

## Types

- {{WebExtAPIRef("sessions.Filter")}}
  - : Enables you to restrict the number of {{WebExtAPIRef("sessions.Session", "Session")}} objects returned by a call to {{WebExtAPIRef("sessions.getRecentlyClosed()")}}.
- {{WebExtAPIRef("sessions.Session")}}
  - : Represents a tab or window that the user has closed in the current browsing session.

## Properties

- {{WebExtAPIRef("sessions.MAX_SESSION_RESULTS")}}
  - : The maximum number of sessions that will be returned by a call to [`sessions.getRecentlyClosed()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/sessions/getRecentlyClosed).

## Functions

- {{WebExtAPIRef("sessions.forgetClosedTab()")}}
  - : Removes a closed tab from the browser's list of recently closed tabs.
- {{WebExtAPIRef("sessions.forgetClosedWindow()")}}
  - : Removes a closed window from the browser's list of recently closed windows.
- {{WebExtAPIRef("sessions.getRecentlyClosed()")}}
  - : Returns an array of {{WebExtAPIRef("sessions.Session", "Session")}} objects, representing windows and tabs that were closed in the current browsing session (that is: the time since the browser was started).
- {{WebExtAPIRef("sessions.restore()")}}
  - : Restores a closed tab or window.
- {{WebExtAPIRef("sessions.setTabValue()")}}
  - : Store a key/value pair associated with a given tab.
- {{WebExtAPIRef("sessions.getTabValue()")}}
  - : Retrieve a previously stored value for a given tab, given its key.
- {{WebExtAPIRef("sessions.removeTabValue()")}}
  - : Remove a key/value pair from a given tab.
- {{WebExtAPIRef("sessions.setWindowValue()")}}
  - : Store a key/value pair associated with a given window.
- {{WebExtAPIRef("sessions.getWindowValue()")}}
  - : Retrieve a previously stored value for a given window, given its key.
- {{WebExtAPIRef("sessions.removeWindowValue()")}}
  - : Remove a key/value pair from a given window.

## Events

- {{WebExtAPIRef("sessions.onChanged")}}
  - : Fired when a tab or window is closed.

## Browser compatibility

{{Compat}}

{{WebExtExamples("h2")}}

> [!NOTE]
> This API is based on Chromium's [`chrome.sessions`](https://developer.chrome.com/docs/extensions/reference/api/sessions) API.

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

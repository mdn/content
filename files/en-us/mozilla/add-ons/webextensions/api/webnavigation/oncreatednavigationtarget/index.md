---
title: webNavigation.onCreatedNavigationTarget
slug: Mozilla/Add-ons/WebExtensions/API/webNavigation/onCreatedNavigationTarget
page-type: webextension-api-event
browser-compat: webextensions.api.webNavigation.onCreatedNavigationTarget
---

{{AddonSidebar()}}

Fired when a new window, or a new tab in an existing window, is created to host the target of a navigation. For example, this event is sent when:

- the user opens a link in a new tab or window
- a web page loads a resource into a new tab or window using {{domxref("window.open()")}} (but note that the event is not sent if the browser's popup blocker blocks the load).

The event is not sent if a tab or window is created without a navigation target (for example, if the user opens a new tab by pressing <kbd>Ctrl+T</kbd>).

If this event is fired, it will be fired before {{WebExtAPIRef("webNavigation.onBeforeNavigate")}}.

## Syntax

```js-nolint
browser.webNavigation.onCreatedNavigationTarget.addListener(
  listener,                   // function
  filter                      // optional object
)
browser.webNavigation.onCreatedNavigationTarget.removeListener(listener)
browser.webNavigation.onCreatedNavigationTarget.hasListener(listener)
```

Events have three functions:

- `addListener(listener)`
  - : Adds a listener to this event.
- `removeListener(listener)`
  - : Stop listening to this event. The `listener` argument is the listener to remove.
- `hasListener(listener)`
  - : Check whether `listener` is registered for this event. Returns `true` if it is listening, `false` otherwise.

## addListener syntax

### Parameters

- `listener`

  - : The function called when this event occurs. The function is passed this argument:

    - `details`
      - : `object`. Details about the navigation event. See the [details](#details_2) section for more information.

- `filter` {{optional_inline}}
  - : `object`. An object containing a single property `url`, which is an `Array` of {{WebExtAPIRef("events.UrlFilter")}} objects. If you include this parameter, then the event fires only for transitions to URLs which match at least one `UrlFilter` in the array. If you omit this parameter, the event fires for all transitions. Note that `filter` is not supported in Firefox.

## Additional objects

### details

- `sourceFrameId`
  - : `integer`. ID of the frame from which the navigation is initiated. `0` indicates that the frame is the tab's top-level browsing context, not a nested {{HTMLElement("iframe")}}. A positive value indicates that navigation is initiated from a nested iframe. Frame IDs are unique for a given tab and process.
- `processId` {{optional_inline}} {{deprecated_inline}}
  - : `integer`. This value is not set in modern browsers. When it was set, it represented the ID of the process the navigation originated from.
- `sourceTabId`
  - : `integer`. The ID of the tab from which the navigation is initiated. For example, if the user opens a link in a new tab, this will be the ID of the tab containing the link.
- `tabId`
  - : `integer`. The ID of the newly created tab.
- `timeStamp`
  - : `number`. The time when the browser created the navigation target, in [milliseconds since the epoch](https://en.wikipedia.org/wiki/Unix_time).
- `url`
  - : `string`. The URL which will be loaded in the new tab.
- `windowId`
  - : `number`. The ID of the window in which the new tab is created.

## Browser compatibility

{{Compat}}

## Examples

Logs the target URL, source Tab ID, and source frame ID for `onCreatedNavigationTarget`, if the target's hostname contains "example.com" or starts with "developer".

```js
const filter = {
  url: [{ hostContains: "example.com" }, { hostPrefix: "developer" }],
};

function logOnCreatedNavigationTarget(details) {
  console.log(`onCreatedNavigationTarget: ${details.url}`);
  console.log(details.sourceTabId);
  console.log(details.sourceFrameId);
}

browser.webNavigation.onCreatedNavigationTarget.addListener(
  logOnCreatedNavigationTarget,
  filter,
);
```

{{WebExtExamples}}

> **Note:** This API is based on Chromium's [`chrome.webNavigation`](https://developer.chrome.com/docs/extensions/reference/webNavigation/#event-onBeforeNavigate) API. This documentation is derived from [`web_navigation.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/web_navigation.json) in the Chromium code.

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

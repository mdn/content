---
title: webNavigation.onCommitted
slug: Mozilla/Add-ons/WebExtensions/API/webNavigation/onCommitted
page-type: webextension-api-event
browser-compat: webextensions.api.webNavigation.onCommitted
---

{{AddonSidebar}}

Fired when a navigation is committed. At least part of the new document has been received from the server and the browser has decided to switch to the new document.

## Syntax

```js-nolint
browser.webNavigation.onCommitted.addListener(
  listener,                 // function
  filter                    // optional object
)
browser.webNavigation.onCommitted.removeListener(listener)
browser.webNavigation.onCommitted.hasListener(listener)
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
  - : `object`. An object containing a single property `url`, which is an `Array` of {{WebExtAPIRef("events.UrlFilter")}} objects. If you include this parameter, then the event fires only for transitions to URLs which match at least one `UrlFilter` in the array. If you omit this parameter, the event fires for all transitions.

## Additional objects

### details

- `tabId`
  - : `integer`. The ID of the tab in which the navigation is about to occur.
- `url`
  - : `string`. The URL to which the given frame will navigate.
- `processId` {{optional_inline}} {{deprecated_inline}}
  - : `integer`. This value is not set in modern browsers. When it was set, it represented the ID of the process running the renderer for this tab.
- `frameId`
  - : `integer`. Frame in which the navigation will occur. `0` indicates that navigation happens in the tab's top-level browsing context, not in a nested {{HTMLElement("iframe")}}. A positive value indicates that navigation happens in a nested iframe. Frame IDs are unique for a given tab and process.
- `parentFrameId`
  - : `integer`. ID of this frame's parent. Set to `-1` if this is a top-level frame.
- `timeStamp`
  - : `number`. The time that the navigation was committed, in [milliseconds since the epoch](https://en.wikipedia.org/wiki/Unix_time).
- `transitionType`
  - : {{WebExtAPIRef("webNavigation.transitionType", "transitionType")}}. The reason for the navigation. (For example, `"link"` if the user clicked a link, or `"reload"` if the user reloaded the page.)
- `transitionQualifiers`
  - : `Array` of {{WebExtAPIRef("webNavigation.transitionQualifier", "transitionQualifier")}}. Extra information about the navigation: for example, whether there was a server or client redirect.

## Browser compatibility

{{Compat}}

## Examples

Logs the target URLs and extra transition information for `onCommitted`, if the target URL's hostname contains "example.com" or starts with "developer".

```js
const filter = {
  url: [{ hostContains: "example.com" }, { hostPrefix: "developer" }],
};

function logOnCommitted(details) {
  console.log(`target URL: ${details.url}`);
  console.log(`transition type: ${details.transitionType}`);
  console.log(`transition qualifiers: ${details.transitionQualifiers}`);
}

browser.webNavigation.onCommitted.addListener(logOnCommitted, filter);
```

{{WebExtExamples}}

> [!NOTE]
> This API is based on Chromium's [`chrome.webNavigation`](https://developer.chrome.com/docs/extensions/reference/api/webNavigation#event-onBeforeNavigate) API. This documentation is derived from [`web_navigation.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/web_navigation.json) in the Chromium code.

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

---
title: webNavigation.onBeforeNavigate
slug: Mozilla/Add-ons/WebExtensions/API/webNavigation/onBeforeNavigate
tags:
  - API
  - Add-ons
  - Event
  - Extensions
  - Non-standard
  - Reference
  - WebExtensions
  - onBeforeNavigate
  - webNavigation
browser-compat: webextensions.api.webNavigation.onBeforeNavigate
---
{{AddonSidebar()}}

Fired when the browser is about to start a navigation event.

## Syntax

```js
browser.webNavigation.onBeforeNavigate.addListener(
  listener,                   // function
  filter                      // optional object
)
browser.webNavigation.onBeforeNavigate.removeListener(listener)
browser.webNavigation.onBeforeNavigate.hasListener(listener)
```

Events have three functions:

- `addListener(callback)`
  - : Adds a listener to this event.
- `removeListener(listener)`
  - : Stop listening to this event. The `listener` argument is the listener to remove.
- `hasListener(listener)`
  - : Check whether `listener` is registered for this event. Returns `true` if it is listening, `false` otherwise.

## addListener syntax

### Parameters

- `callback`

  - : Function that will be called when this event occurs. The function will be passed the following arguments:

    - `details`
      - : [`object`](#details). Details about the navigation event.

- `filter` {{optional_inline}}
  - : `object`. An object containing a single property `url`, which is an `Array` of {{WebExtAPIRef("events.UrlFilter")}} objects. If you include this parameter, then the event will fire only for transitions to URLs which match at least one `UrlFilter` in the array. If you omit this parameter, the event will fire for all transitions.

## Additional objects

### details

- `tabId`
  - : `integer`. The ID of the tab in which the navigation is about to occur.
- `url`
  - : `string`. The URL to which the given frame will navigate.
- `processId`
  - : `integer`. The ID of the process in which this tab is being rendered (This property is **not supported on Firefox** and it is **deprecated on Chrome**).
- `frameId`
  - : `integer`. Frame in which the navigation is about to occur. `0` indicates that navigation happens in the tab's top-level browsing context, not in a nested {{HTMLElement("iframe")}}. A positive value indicates that navigation happens in a nested iframe. Frame IDs are unique for a given tab and process.
- `parentFrameId`
  - : `integer`. ID of this frame's parent. Set to `-1` if this is a top-level frame.
- `timeStamp`
  - : `number`. The time when the browser is about to start the navigation, in [milliseconds since the epoch](https://en.wikipedia.org/wiki/Unix_time).

## Browser compatibility

{{Compat}}

## Examples

Logs the target URLs for `onBeforeNavigate`, if the target's hostname contains "example.com" or starts with "developer".

```js
const filter = {
  url:
  [
    {hostContains: "example.com"},
    {hostPrefix: "developer"}
  ]
}

function logOnBefore(details) {
  console.log(`onBeforeNavigate to: ${details.url}`);
}

browser.webNavigation.onBeforeNavigate.addListener(logOnBefore, filter);
```

{{WebExtExamples}}

> **Note:** This API is based on Chromium's [`chrome.webNavigation`](https://developer.chrome.com/docs/extensions/reference/webNavigation/#event-onBeforeNavigate) API. This documentation is derived from [`web_navigation.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/web_navigation.json) in the Chromium code.
>
> Microsoft Edge compatibility data is supplied by Microsoft Corporation and is included here under the Creative Commons Attribution 3.0 United States License.

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

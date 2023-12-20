---
title: idle.onStateChanged
slug: Mozilla/Add-ons/WebExtensions/API/idle/onStateChanged
page-type: webextension-api-event
browser-compat: webextensions.api.idle.onStateChanged
---

{{AddonSidebar()}}

Fired when the system changes to an active, idle or locked state. The event listener is passed a string that has one of three values:

- "locked" if the screen is locked or the screensaver activates
- "idle" if the system is unlocked and the user has not generated any input for a specified number of seconds. This number defaults to 60, but can be set using {{WebExtAPIRef("idle.setDetectionInterval()")}}.
- "active" when the user generates input on an idle system.

## Syntax

```js-nolint
browser.idle.onStateChanged.addListener(listener)
browser.idle.onStateChanged.removeListener(listener)
browser.idle.onStateChanged.hasListener(listener)
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

    - `newState`
      - : {{WebExtAPIRef('idle.IdleState')}}. The new idle state.

## Browser compatibility

{{Compat}}

## Examples

```js
function newState(state) {
  console.log(`New state: ${state}`);
}

browser.idle.onStateChanged.addListener(newState);
```

{{WebExtExamples}}

> **Note:** This API is based on Chromium's [`chrome.idle`](https://developer.chrome.com/docs/extensions/reference/idle/#event-onStateChanged) API. This documentation is derived from [`idle.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/idle.json) in the Chromium code.

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

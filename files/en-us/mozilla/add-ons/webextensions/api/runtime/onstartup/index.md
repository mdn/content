---
title: runtime.onStartup
slug: Mozilla/Add-ons/WebExtensions/API/runtime/onStartup
page-type: webextension-api-event
browser-compat: webextensions.api.runtime.onStartup
---

{{AddonSidebar()}}

Fired when a profile that has this extension installed first starts up. This event is not fired when a private browsing (incognito) profile is started, even if this extension is operating in 'split' incognito mode.

> **Note:**
> When using an event page or background service worker, the extension must add a listener to `runtime.onStartup` on the event page for the event page to be executed at least once per browser session.

## Syntax

```js-nolint
browser.runtime.onStartup.addListener(listener)
browser.runtime.onStartup.removeListener(listener)
browser.runtime.onStartup.hasListener(listener)
```

### Event Functions

All events have three functions:

- `addListener(listener)`
  - : Adds a `listener` to the calling event.
- `removeListener(listener)`
  - : Stop listening to the calling event. The `listener` argument is the listener to remove.
- `hasListener(listener)`
  - : Checks whether a `listener` is registered for the calling event. Returns `true` if it is listening, `false` otherwise.

### Parameters

The only parameter is `listener`, used for any of the above functions.

- `listener`
  - : The function called when this event occurs.

## Examples

Open <https://giphy.com/explore/cat> when the browser starts up:

```js
function handleStartup() {
  browser.tabs.create({
    url: "https://giphy.com/explore/cat",
  });
}

browser.runtime.onStartup.addListener(handleStartup);
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}

> **Note:** This API is based on Chromium's [`chrome.runtime`](https://developer.chrome.com/docs/extensions/reference/runtime/#event-onStartup) API. This documentation is derived from [`runtime.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json) in the Chromium code.

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

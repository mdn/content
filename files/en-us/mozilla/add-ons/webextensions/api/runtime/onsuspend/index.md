---
title: runtime.onSuspend
slug: Mozilla/Add-ons/WebExtensions/API/runtime/onSuspend
page-type: webextension-api-event
browser-compat: webextensions.api.runtime.onSuspend
---

{{AddonSidebar}}

Sent to the event page just before it is unloaded. This gives the extension an opportunity to do some cleanup. Note that since the page is unloading, any asynchronous operations started while handling this event are not guaranteed to complete.

> [!NOTE]
> If something prevents the event page from being unloaded, the {{WebExtAPIRef("runtime.onSuspendCanceled")}} event will be sent and the page won't be unloaded.

## Syntax

```js-nolint
browser.runtime.onSuspend.addListener(listener)
browser.runtime.onSuspend.removeListener(listener)
browser.runtime.onSuspend.hasListener(listener)
```

Events have three functions:

- `addListener(listener)`
  - : Adds a listener to this event.
- `removeListener(listener)`
  - : Stop listening to this event. The `listener` argument is the listener to remove.
- `hasListener(listener)`
  - : Checks whether a `listener` is registered for this event. Returns `true` if it is listening, `false` otherwise.

## addListener syntax

### Parameters

- `listener`
  - : The function called when this event occurs.

## Browser compatibility

{{Compat}}

## Examples

Listen for suspend events:

```js
function handleSuspend() {
  console.log("Suspending event page");
  // handle cleanup
}

browser.runtime.onSuspend.addListener(handleSuspend);
```

{{WebExtExamples}}

> [!NOTE]
> This API is based on Chromium's [`chrome.runtime`](https://developer.chrome.com/docs/extensions/reference/api/runtime#event-onSuspend) API. This documentation is derived from [`runtime.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json) in the Chromium code.

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

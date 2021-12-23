---
title: runtime.onBrowserUpdateAvailable
slug: Mozilla/Add-ons/WebExtensions/API/runtime/onBrowserUpdateAvailable
tags:
  - API
  - Add-ons
  - Deprecated
  - Event
  - Extensions
  - Non-standard
  - Reference
  - WebExtensions
  - onBrowserUpdateAvailable
  - runtime
browser-compat: webextensions.api.runtime.onBrowserUpdateAvailable
---
{{AddonSidebar}}{{Deprecated_header}}

Fired when an update for the browser is available, but it isn't installed immediately because a browser restart is required.

## Syntax

```js
browser.runtime.onBrowserUpdateAvailable.addListener(listener)
browser.runtime.onBrowserUpdateAvailable.removeListener(listener)
browser.runtime.onBrowserUpdateAvailable.hasListener(listener)
```

Events have three functions:

- `addListener(callback)`
  - : Adds a listener to this event.
- `removeListener(listener)`
  - : Stop listening to this event. The `listener` argument is the listener to remove.
- `hasListener(listener)`
  - : Checks whether a `listener` is registered for this event. Returns `true` if it is listening, `false` otherwise.

## addListener syntax

### Parameters

- `function`
  - : A callback function that will be called when this event occurs.

## Browser compatibility

{{Compat}}

## Examples

Listen for this event:

```js
function handleBrowserUpdateAvailable() {
  // handle event
}

browser.runtime.onBrowserUpdateAvailable.addListener(handleBrowserUpdateAvailable);
```

{{WebExtExamples}}

> **Note:** This API is based on Chromium's [`chrome.runtime`](https://developer.chrome.com/extensions/runtime#event-onBrowserUpdateAvailable) API. This documentation is derived from [`runtime.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json) in the Chromium code.
>
> Microsoft Edge compatibility data is supplied by Microsoft Corporation and is included here under the Creative Commons Attribution 3.0 United States License.

<div class="hidden"><pre>// Copyright 2015 The Chromium Authors. All rights reserved.
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
</pre></div>

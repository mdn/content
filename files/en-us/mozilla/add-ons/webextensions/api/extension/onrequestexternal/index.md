---
title: extension.onRequestExternal
slug: Mozilla/Add-ons/WebExtensions/API/extension/onRequestExternal
tags:
  - API
  - Add-ons
  - Event
  - Extension
  - Extensions
  - Non-standard
  - Reference
  - WebExtensions
  - onRequestExternal
browser-compat: webextensions.api.extension.onRequestExternal
---
{{AddonSidebar()}}

> **Warning:** This is not implemented in Firefox because it has been deprecated since Chrome 33. Please use [runtime.onMessageExternal](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessageExternal) instead.

Fired when a request is sent from another extension.

## Syntax

```js
chrome.extension.onRequestExternal.addListener(function(
  request,      // optional any
  sender,       // runtime.MessageSender
  sendResponse, // function
) { })
chrome.extension.onRequestExternal.removeListener(listener)
chrome.extension.onRequestExternal.hasListener(listener)
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

    - `request`
      - : `any`. The request sent by the calling script.
    - `sender`
      - : {{WebExtAPIRef('runtime.MessageSender')}}.
    - `sendResponse`
      - : `function`. Function to call when you have a response. The argument should be any JSON-ifiable object, or undefined if there is no response.

## Browser compatibility

{{Compat}}

{{WebExtExamples}}

> **Note:** This API is based on Chromium's [`chrome.extension`](https://developer.chrome.com/docs/extensions/reference/extension/#event-onRequestExternal) API. This documentation is derived from [`extension.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/extension.json) in the Chromium code.
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

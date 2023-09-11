---
title: idle.queryState()
slug: Mozilla/Add-ons/WebExtensions/API/idle/queryState
page-type: webextension-api-function
browser-compat: webextensions.api.idle.queryState
---

{{AddonSidebar()}}

Returns `"locked"` if the system is locked, `"idle"` if the user has not generated any input for a specified number of seconds, or `"active"` otherwise.

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js-nolint
let querying = browser.idle.queryState(
  detectionIntervalInSeconds // integer
)
```

### Parameters

- `detectionIntervalInSeconds`
  - : `integer`. The system is considered idle if `detectionIntervalInSeconds` seconds have elapsed since the last user input detected.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be fulfilled with an {{WebExtAPIRef('idle.IdleState')}} string, indicating the current state.

## Browser compatibility

{{Compat}}

## Examples

In this simple snippet, we call `queryState()` and then check if the returned `newState` is `idle` or `active`, logging a message as appropriate. Because we have specified a `detectionIntervalInSeconds` of 15, an `idle` state will only be reported if there has been no user activity for at least 15 seconds

```js
function onGot(newState) {
  if (newState === "idle") {
    console.log("Please come back — we miss you!");
  } else if (newState === "active") {
    console.log("Glad to still have you with us!");
  }
}

let querying = browser.idle.queryState(15);
querying.then(onGot);
```

{{WebExtExamples}}

> **Note:** This API is based on Chromium's [`chrome.idle`](https://developer.chrome.com/docs/extensions/reference/idle/#method-queryState) API. This documentation is derived from [`idle.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/idle.json) in the Chromium code.

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

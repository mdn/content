---
title: tabs.discard()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/discard
page-type: webextension-api-function
browser-compat: webextensions.api.tabs.discard
---

{{AddonSidebar()}}

Discards one or more tabs.

Some browsers automatically "discard" unused tabs to free memory. Discarded tabs stay visible in the tabstrip. The browser remembers the tab's state and restores it when the user selects the tab. The details of when tabs are and what is discarded are browser-specific.

You can control whether the browser or this API discards a tab by setting its `autoDiscardable` property to `false` in {{WebExtAPIRef("tabs.update")}}. This setting prevents the browser from discarding the tab. The tab can then only be discarded with this API.

It's not possible to discard the active tab or a tab whose document contains a [`beforeunload`](/en-US/docs/Web/API/Window/beforeunload_event) listener that would display a prompt.

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js-nolint
let discarding = browser.tabs.discard(
  tabIds          // integer or integer array
)
```

### Parameters

- `tabIds`
  - : `integer` or `array` of `integer`. The IDs of the tab or tabs to discard.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be fulfilled with no arguments when all the specified tabs have been discarded. If any error occurs (for example, invalid tab IDs), the promise will be rejected with an error message.

If the ID of the active tab is passed in, it will not be discarded, but the promise will be fulfilled and any other tabs passed in will be discarded.

## Examples

Discard a single tab:

```js
function onDiscarded() {
  console.log(`Discarded`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

let discarding = browser.tabs.discard(2);
discarding.then(onDiscarded, onError);
```

Discard multiple tabs:

```js
function onDiscarded() {
  console.log(`Discarded`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

let discarding = browser.tabs.discard([15, 14, 1]);
discarding.then(onDiscarded, onError);
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}

> **Note:** This API is based on Chromium's [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/tabs/#method-discard) API.

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

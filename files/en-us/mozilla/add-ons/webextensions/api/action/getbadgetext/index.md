---
title: action.getBadgeText()
slug: Mozilla/Add-ons/WebExtensions/API/action/getBadgeText
page-type: webextension-api-function
browser-compat: webextensions.api.action.getBadgeText
---

{{AddonSidebar}}

Gets the browser action's badge text.

> [!NOTE]
> This API is available in Manifest V3 or higher.

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js-nolint
let gettingText = browser.action.getBadgeText(
  details               // object
)
```

### Parameters

- `details`

  - : An object with the following properties:

    - `tabId` {{optional_inline}}
      - : `integer`. Specifies the tab from which to get the badge text.
    - `windowId` {{optional_inline}}
      - : `integer`. Specifies the window from which to get the badge text.

<!---->

- If windowId and tabId are both supplied, the function fails.
- If windowId and tabId are both omitted, the global badge text is returned.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be fulfilled with a string containing the badge text.

## Examples

Log the badge text:

```js
function gotBadgeText(text) {
  console.log(text);
}

let gettingBadgeText = browser.action.getBadgeText({});
gettingBadgeText.then(gotBadgeText);
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}

> [!NOTE]
> This API is based on Chromium's [`chrome.action`](https://developer.chrome.com/docs/extensions/reference/api/action#method-getBadgeText) API. This documentation is derived from [`browser_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/browser_action.json) in the Chromium code.

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

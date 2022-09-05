---
title: tabs.highlight()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/highlight
tags:
  - API
  - Add-ons
  - Extensions
  - Method
  - Non-standard
  - Reference
  - WebExtensions
  - highlight
  - tabs
browser-compat: webextensions.api.tabs.highlight
---
{{AddonSidebar()}}Highlights (selects) one or more tabs. Tabs are specified using a window ID and a range of tab indices.

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js
let highlighting = browser.tabs.highlight(
  highlightInfo         // object
)
```

### Parameters

- `highlightInfo`

  - : `object`.

    - `windowId` {{optional_inline}}
      - : `integer`. ID of the window that contains the tabs.
    - `populate` {{optional_inline}}

      - : `boolean`. Defaults to `true`. If set to `false`, the {{WebExtAPIRef('windows.Window')}} object won't have a `tabs` property containing a list of {{WebExtAPIRef('tabs.Tab')}} objects representing the tabs open in the window.

        > **Note:** Populating the window (the default behavior) can be an expensive operation if there are lots of tabs. For better performance it's recommended to manually set `populate` to `false` if you don't need tab details.

    - `tabs`
      - : `array` of integer values specifying one or more tab indices to highlight. Previously highlighted tabs not included in `tabs` will stop being highlighted. The first tab in `tabs` will become active.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be fulfilled with a {{WebExtAPIRef('windows.Window')}} object containing details about the window whose tabs were highlighted. If the window could not be found or some other error occurs, the promise will be rejected with an error message.

## Browser compatibility

{{Compat}}

{{WebExtExamples}}

> **Note:** This API is based on Chromium's [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/tabs/#method-highlight) API. This documentation is derived from [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) in the Chromium code.
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

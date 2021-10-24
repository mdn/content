---
title: browserAction.getBadgeTextColor()
slug: Mozilla/Add-ons/WebExtensions/API/browserAction/getBadgeTextColor
tags:
  - API
  - Add-ons
  - Extensions
  - Method
  - Reference
  - WebExtensions
  - browserAction
  - getBadgeTextColor
browser-compat: webextensions.api.browserAction.getBadgeTextColor
---
{{AddonSidebar()}}

Gets the text color for the browser action's badge.

From Firefox 63, unless the badge text color is explicitly set using {{WebExtAPIRef("browserAction.setBadgeTextColor()")}}, then the badge text color will be automatically set to black or white so as to maximize contrast with the specified badge background color. For example, if you set the badge background color to white, the default badge text color will be set to black, and vice versa.

Other browsers always use a white text color.

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js
browser.browserAction.getBadgeTextColor(
  details // object
)
```

### Parameters

- `details`

  - : `object`.

    - `tabId`{{optional_inline}}
      - : `integer`. Specifies the tab to get the badge text color from.
    - `windowId`{{optional_inline}}
      - : `integer`. Specifies the window from which to get the badge text color.

<!---->

- If `windowId` and `tabId` are both supplied, the function fails.
- If `windowId` and `tabId` are both omitted, the global badge text color is returned.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be fulfilled with the retrieved color as a {{WebExtAPIRef('browserAction.ColorArray')}}.

## Browser compatibility

{{Compat}}

## Examples

Log the badge's text color:

```js
function onGot(color) {
  console.log(color);
}

function onFailure(error) {
  console.log(error);
}

browser.browserAction.getBadgeTextColor({}).then(onGot, onFailure);
```

{{WebExtExamples}}

> **Note:** This API is based on Chromium's [`chrome.browserAction`](https://developer.chrome.com/extensions/browserAction#method-getBadgeBackgroundColor) API. This documentation is derived from [`browser_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/browser_action.json) in the Chromium code.

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

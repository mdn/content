---
title: browserAction.setBadgeText()
slug: Mozilla/Add-ons/WebExtensions/API/browserAction/setBadgeText
tags:
  - API
  - Add-ons
  - Extensions
  - Method
  - Non-standard
  - Reference
  - WebExtensions
  - browserAction
  - setBadgeText
browser-compat: webextensions.api.browserAction.setBadgeText
---
{{AddonSidebar()}}

Sets the badge text for the browser action. The badge is displayed on top of the icon.

Tabs without an specific badge text will inherit the global badge text, which is `""` by default.

## Syntax

```js
browser.browserAction.setBadgeText(
  details // object
)
```

This API is also available as `chrome.browserAction.setBadgeText()`.

### Parameters

- `details`

  - : An object with the following properties:

    - `text`

      - : `string` or `null`. Any number of characters can be passed, but only about four can fit in the space.

        Use an empty string - `""` - if you don't want any badge.

        If a `tabId` is specified, `null` removes the tab-specific badge text so that the tab inherits the global badge text. Otherwise it reverts the global badge text to `""`.

        If a `windowId` is specified, `null` removes the window-specific badge text so that the tab inherits the global badge text. Otherwise it reverts the global badge text to `""`.

    - `tabId`{{optional_inline}}
      - : `integer`. Set the badge text only for the given tab. The text is reset when the user navigates this tab to a new page.
    - `windowId`{{optional_inline}}
      - : `integer`. Set the badge text for the given window.

<!---->

- If `windowId` and `tabId` are both supplied, the function fails.
- If `windowId` and `tabId` are both omitted, the global badge is set.

## Browser compatibility

{{Compat}}

## Examples

Add a badge indicating how many times the user clicked the button:

```js
var clicks = 0;

function increment() {
  browser.browserAction.setBadgeText({text: (++clicks).toString()});
}

browser.browserAction.onClicked.addListener(increment);
```

{{WebExtExamples}}

> **Note:** This API is based on Chromium's [`chrome.browserAction`](https://developer.chrome.com/extensions/browserAction#method-setBadgeText) API. This documentation is derived from [`browser_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/browser_action.json) in the Chromium code.
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

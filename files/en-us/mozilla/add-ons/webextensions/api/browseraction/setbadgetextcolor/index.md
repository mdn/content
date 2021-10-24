---
title: browserAction.setBadgeTextColor()
slug: Mozilla/Add-ons/WebExtensions/API/browserAction/setBadgeTextColor
tags:
  - API
  - Add-ons
  - Extensions
  - Method
  - Reference
  - WebExtensions
  - browserAction
  - setBadgeTextColor
browser-compat: webextensions.api.browserAction.setBadgeTextColor
---
{{AddonSidebar()}}

Sets the text color for the browser action's badge. Tabs without a specific badge text color will inherit the global badge text color.

## Syntax

```js
browser.browserAction.setBadgeTextColor(
  details // object
)
```

### Parameters

- `details`

  - : An object with the following properties:

    - `color`

      - : The color, specified as one of:

        - a string: any CSS [\<color>](/en-US/docs/Web/CSS/color_value) value, for example `"red"`, `"#FF0000"`, or `"rgb(255,0,0)"`. If the string is not a valid color, the returned promise will be rejected and the text color won't be altered.
        - a `{{WebExtAPIRef('browserAction.ColorArray')}}` object.
        - `null`. If a `tabId` is specified, it removes the tab-specific badge text color so that the tab inherits the global badge text color. Otherwise it reverts the global badge text color to the default value.

    - `tabId`{{optional_inline}}
      - : `integer`. Sets the badge text color only for the given tab. The color is reset when the user navigates this tab to a new page.
    - `windowId`{{optional_inline}}
      - : `integer`. Sets the badge text color only for the given tab.

<!---->

- If `windowId` and `tabId` are both supplied, the function fails and the color is not set.
- If `windowId` and `tabId` are both omitted, the global badge text color is set instead.

## Browser compatibility

{{Compat}}

## Examples

A badge text color that starts off as red, and turns green when the browser action is clicked:

```js
browser.browserAction.setBadgeText({text: "1234"});
browser.browserAction.setBadgeTextColor({color: "red"});

browser.browserAction.onClicked.addListener(()=> {
  browser.browserAction.setBadgeTextColor({color: "green"});
});
```

Set the badge text color only for the active tab:

```js
browser.browserAction.setBadgeText({text: "1234"});
browser.browserAction.setBadgeTextColor({color: "red"});

browser.browserAction.onClicked.addListener((tab)=> {
  browser.browserAction.setBadgeTextColor({
    color: "green",
    tabId: tab.id
  });
});
```

{{WebExtExamples}}

> **Note:** This API is based on Chromium's [`chrome.browserAction`](https://developer.chrome.com/extensions/browserAction#method-setBadgeBackgroundColor) API. This documentation is derived from [`browser_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/browser_action.json) in the Chromium code.

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

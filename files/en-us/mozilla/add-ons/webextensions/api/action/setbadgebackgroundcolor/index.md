---
title: action.setBadgeBackgroundColor()
slug: Mozilla/Add-ons/WebExtensions/API/action/setBadgeBackgroundColor
page-type: webextension-api-function
browser-compat: webextensions.api.action.setBadgeBackgroundColor
---

{{AddonSidebar}}

Sets the background color for the badge. Tabs without a specific badge background color will inherit the global badge background color, which defaults to `[217, 0, 0, 255]` in Firefox.

> [!NOTE]
> This API is available in Manifest V3 or higher.

In Firefox, unless the badge text color is explicitly set using {{WebExtAPIRef("action.setBadgeTextColor()")}}, then the badge text color will automatically be set to black or white to maximize contrast with the specified badge background color. For example, if you set the badge background color to white, the default badge text color is set to black, and vice versa.

Other browsers always use a white text color, so setting a dark background may be preferable to ensure the text is readable.

## Syntax

```js-nolint
browser.action.setBadgeBackgroundColor(
  details // object
)
```

### Parameters

- `details`

  - : An object with the following properties:

    - `color`

      - : The color, specified as one of:

        - a string: any CSS [\<color>](/en-US/docs/Web/CSS/color_value) value, for example `"red"`, `"#FF0000"`, or `"rgb(255 0 0)"`. If the string is not a valid color, the returned promise will be rejected and the background color won't be altered.
        - a `{{WebExtAPIRef('action.ColorArray')}}` object.
        - `null`. If a `tabId` is specified, it removes the tab-specific badge background color so that the tab inherits the global badge background color. Otherwise it reverts the global badge background color to the default value.

    - `tabId` {{optional_inline}}
      - : `integer`. Sets the badge background color only for the given tab. The color is reset when the user navigates this tab to a new page.
    - `windowId` {{optional_inline}}
      - : `integer`. Sets the badge background color only for the given window.

<!---->

- If `windowId` and `tabId` are both supplied, the function fails and the color is not set.
- If `windowId` and `tabId` are both omitted, the global badge background color is set instead.

## Examples

A background color that starts off as red, and turns green when the browser action is clicked:

```js
browser.action.setBadgeText({ text: "1234" });
browser.action.setBadgeBackgroundColor({ color: "red" });

browser.action.onClicked.addListener(() => {
  browser.action.setBadgeBackgroundColor({ color: "green" });
});
```

Set the badge background color only for the active tab:

```js
browser.action.setBadgeText({ text: "1234" });
browser.action.setBadgeBackgroundColor({ color: "red" });

browser.action.onClicked.addListener((tab) => {
  browser.action.setBadgeBackgroundColor({
    color: "green",
    tabId: tab.id,
  });
});
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}

The default color in Firefox is: `[217, 0, 0, 255]`.

> [!NOTE]
> This API is based on Chromium's [`chrome.action`](https://developer.chrome.com/docs/extensions/reference/api/action#method-setBadgeBackgroundColor) API. This documentation is derived from [`browser_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/browser_action.json) in the Chromium code.

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

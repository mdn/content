---
title: extension.getViews()
slug: Mozilla/Add-ons/WebExtensions/API/extension/getViews
tags:
  - API
  - Add-ons
  - Extension
  - Extensions
  - Method
  - Non-standard
  - Reference
  - WebExtensions
  - getViews
browser-compat: webextensions.api.extension.getViews
---
{{AddonSidebar()}}

Returns an array of the [Window](/en-US/docs/Web/API/Window) objects for each of the pages running inside the current extension. This includes, for example:

- the background page, if one is defined
- any popup pages, if defined and loaded
- any options pages, if defined and loaded
- any browser tabs that host content packaged with the extension

In Firefox, if this method is called from a page that is part of a private browsing window, such as a sidebar in a private window or a popup opened from a private window, then its return value will not include the extension's background page.

## Syntax

```js
let windows = browser.extension.getViews(
  fetchProperties // optional object
)
```

### Parameters

- `fetchProperties` {{optional_inline}}

  - : An object with the following properties:

    - `type` {{optional_inline}}
      - : `string`. An {{WebExtAPIRef('extension.ViewType')}} indicating the type of view to get. If omitted, this function returns all views.
    - `windowId` {{optional_inline}}
      - : `integer`. The window to restrict the search to. If omitted, this function returns all views. In Firefox version 92 and earlier, sidebar views are not matched and, therefore, not returned.

### Return value

`array` of `object`. Array of [Window](/en-US/docs/Web/API/Window) objects.

## Browser compatibility

{{Compat}}

## Examples

Get all windows belonging to this extension, and log their URLs:

```js
const windows = browser.extension.getViews();

for (const extensionWindow of windows) {
  console.log(extensionWindow.location.href);
}
```

Get only windows in browser tabs hosting content packaged with the extension:

```js
const windows = browser.extension.getViews({ type: "tab" });
```

Get only windows in popups:

```js
const windows = browser.extension.getViews({ type: "popup" });
```

{{WebExtExamples}}

> **Note:** This API is based on Chromium's [`chrome.extension`](https://developer.chrome.com/docs/extensions/reference/extension/#method-getViews) API. This documentation is derived from [`extension.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/extension.json) in the Chromium code.
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

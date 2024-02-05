---
title: theme.reset()
slug: Mozilla/Add-ons/WebExtensions/API/theme/reset
page-type: webextension-api-function
browser-compat: webextensions.api.theme.reset
---

{{AddonSidebar}}

Resets any theme applied using the {{WebExtAPIRef("theme.update()")}} method.

To use this method, an extension must request the "theme" [permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) in its [manifest.json](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json) file.

Note that this always reset the theme back to the original default theme, even if the user selected a different theme before this extension's theme was applied (see [bug 1415267](https://bugzil.la/1415267)).

## Syntax

```js-nolint
browser.theme.reset(
  windowId     // integer
)
```

### Parameters

- `windowId` {{optional_inline}}
  - : `integer`. The ID of a window. If this is provided, the theme applied to that window is reset. If it is omitted, the theme is reset on all windows.

## Examples

This code applies a theme, then removes it when the user clicks a browser action:

```js
browser.theme.update(themes.night);

browser.browserAction.onClicked.addListener(() => {
  browser.theme.reset();
});
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}

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

---
title: devtools.panels.ExtensionPanel.createStatusBarButton()
slug: Mozilla/Add-ons/WebExtensions/API/devtools/panels/ExtensionPanel/createStatusBarButton
page-type: webextension-api-function
browser-compat: webextensions.api.devtools.panels.ExtensionPanel.createStatusBarButton
---

{{AddonSidebar()}}

Appends a button to the status bar of the panel.

## Syntax

```js-nolint
let creating = browser.devtools.panels.ExtensionPanel.createStatusBarButton(
 disabled,       // boolean
  iconPath,       // string
  tooltipText     // string
)
```

### Parameters

- `disabled` {{optional_inline}}
  - : `boolean`. Whether the button is disabled.
- `iconPath` {{optional_inline}}
  - : `string`. Path to the new icon of the button. The file should contain a 64x24-pixel image composed of two 32x24 icons. The left icon is used when the button is inactive; the right icon is displayed when the button is pressed.
- `tooltipText` {{optional_inline}}
  - : `string`. Text shown as a tooltip when user hovers the mouse over the button.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that is fulfilled with an [`Button`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels/Button) object representing the new button.

{{WebExtExamples("h2")}}

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

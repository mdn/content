---
title: browserAction.enable()
slug: Mozilla/Add-ons/WebExtensions/API/browserAction/enable
tags:
  - API
  - Add-ons
  - Enable
  - Extensions
  - Method
  - Non-standard
  - Reference
  - WebExtensions
  - browserAction
browser-compat: webextensions.api.browserAction.enable
---
{{AddonSidebar()}}

Enables the browser action for a tab. By default, browser actions are enabled for all tabs.

## Syntax

```js
browser.browserAction.enable(
  tabId // optional integer
)
```

### Parameters

- `tabId`{{optional_inline}}
  - : `integer`. The id of the tab for which you want to enable the browser action.

## Browser compatibility

{{Compat}}

## Examples

Disable the browser action when clicked, and re-enable it every time a new tab is opened:

```js
browser.tabs.onCreated.addListener(() => {
  browser.browserAction.enable();
});

browser.browserAction.onClicked.addListener(() => {
  browser.browserAction.disable();
});
```

{{WebExtExamples}}

> **Note:** This API is based on Chromium's [`chrome.browserAction`](https://developer.chrome.com/extensions/browserAction#method-enable) API. This documentation is derived from [`browser_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/browser_action.json) in the Chromium code.
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

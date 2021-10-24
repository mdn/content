---
title: extension.getBackgroundPage()
slug: Mozilla/Add-ons/WebExtensions/API/extension/getBackgroundPage
tags:
  - API
  - Add-ons
  - Extension
  - Extensions
  - Method
  - Non-standard
  - Reference
  - WebExtensions
  - getBackgroundPage
browser-compat: webextensions.api.extension.getBackgroundPage
---
{{AddonSidebar()}}

Alias for {{WebExtAPIRef("runtime.getBackgroundPage()")}}.

> **Note:** This method cannot be used in Private Browsing mode — it always returns an empty array. Consider using {{WebExtAPIRef("runtime.sendMessage","runtime.sendMessage()")}} or {{WebExtAPIRef("runtime.connect","runtime.connect()")}}. For more info see {{bug(1329304)}}.

## Syntax

```js
var page = browser.extension.getBackgroundPage()
```

### Parameters

None.

### Return value

`object`. [Window](/en-US/docs/Web/API/Window) of the background page.

## Examples

Suppose a [background script](/en-US/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#background_scripts) defines a function `foo()`:

```js
// background.js

function foo() {
  console.log("I'm defined in background.js");
}
```

A script running in a [popup](/en-US/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#browser_actions_2) can call this function directly like this:

```js
// popup.js

var page = browser.extension.getBackgroundPage();
page.foo(); // -> "I'm defined in background.js"
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}

> **Note:** This API is based on Chromium's [`chrome.extension`](https://developer.chrome.com/extensions/extension#method-getBackgroundPage) API. This documentation is derived from [`extension.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/extension.json) in the Chromium code.
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

---
title: i18n.getUILanguage()
slug: Mozilla/Add-ons/WebExtensions/API/i18n/getUILanguage
tags:
  - API
  - Add-ons
  - Extensions
  - Method
  - Non-standard
  - Reference
  - WebExtensions
  - getUILanguage
  - i18n
browser-compat: webextensions.api.i18n.getUILanguage
---
{{AddonSidebar()}}

Gets the UI language of the browser. This is different from {{WebExtAPIRef('i18n.getAcceptLanguages')}} which returns the preferred user languages.

See the [Internationalization](/en-US/docs/Mozilla/Add-ons/WebExtensions/Internationalization) page for a guide on using this function.

## Syntax

```js
browser.i18n.getUILanguage()
```

### Parameters

None.

### Return value

`string`. The browser UI language code as an {{WebExtAPIRef("i18n.LanguageCode")}}.

## Browser compatibility

{{Compat}}

## Examples

```js
let uiLanguage = browser.i18n.getUILanguage();
console.log(uiLanguage);

//e.g. "fr"
```

{{WebExtExamples}}

> **Note:** This API is based on Chromium's [`chrome.i18n`](https://developer.chrome.com/docs/extensions/reference/i18n/#method-getUILanguage) API. This documentation is derived from [`i18n.json`](https://chromium.googlesource.com/chromium/src/+/refs/heads/main/extensions/common/api/i18n.json) in the Chromium code.
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

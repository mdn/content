---
title: declarativeNetRequest.getDynamicRules
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/getDynamicRules
page-type: webextension-api-function
browser-compat: webextensions.api.declarativeNetRequest.getDynamicRules
---

{{AddonSidebar}}

Returns the set of dynamic rules for the extension.

## Syntax

```js-nolint
let gettingDynamicRules = browser.declarativeNetRequest.getDynamicRules();
```

### Parameters

- `filter` {{optional_inline}}

  - : An object to filter the list of returned rules.
    - `ruleIds` {{optional_inline}}
      - : An array of `integer`. The IDs of the rules to return.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) is fulfilled with an array of {{WebExtAPIRef("declarativeNetRequest.Rule")}} objects. Each of these represents a rule that belongs to the extension. If no rules are active, the array is empty. If the request fails, the promise is rejected with an error message.

## Examples

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

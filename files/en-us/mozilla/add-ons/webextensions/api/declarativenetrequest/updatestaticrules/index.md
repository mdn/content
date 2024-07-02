---
title: declarativeNetRequest.updateStaticRules
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/updateStaticRules
page-type: webextension-api-function
browser-compat: webextensions.api.declarativeNetRequest.updateStaticRules
---

{{AddonSidebar}}

Modifies the enabled state of rules in a static ruleset. The number of rules that can be disabled in a ruleset is limited to the value of {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_DISABLED_STATIC_RULES","MAX_NUMBER_OF_DISABLED_STATIC_RULES")}}.

Rules can be enabled and disabled while the ruleset containing them is disabled. Any changes become effective when the ruleset is enabled.

## Syntax

```js-nolint
let updatedStaticRules = browser.declarativeNetRequest.updateStaticRules(
    options                // object
);
```

### Parameters

- `options`

  - : An object specifying a static ruleset and the rules to enable or disable in that ruleset.
    - `rulesetId` rulesetId
      - : `string` The ID of the static ruleset to modify.
    - `disableRuleIds` {{optional_inline}}
      - : An array of `number`. IDs of the rules to disable. Any invalid IDs are ignored.
    - `enableRuleIds` {{optional_inline}}
      - : An array of `number`. IDs of the rules to enable. Any invalid IDs are ignored.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) If the request is successful, the promise is fulfilled without arguments. If the request fails, the promise is rejected with an error message.

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

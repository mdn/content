---
title: declarativeNetRequest.updateEnabledRulesets
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/updateEnabledRulesets
page-type: webextension-api-function
browser-compat: webextensions.api.declarativeNetRequest.updateEnabledRulesets
---

{{AddonSidebar}}

Updates the extension's set of static rulesets. The rulesets with IDs listed in `options.disableRulesetIds` are first deactivated, and then the rulesets listed in `options.enableRulesetIds` are activated. Note that the set of enabled static rulesets persists across sessions but not across extension updates, i.e. the [`declarative_net_request.rule_resources` manifest key](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/declarative_net_request) determines the set of enabled static rulesets on each extension update.

> [!NOTE]
> In Firefox 132 and earlier, static rulesets don't load after a browser restart when there are no registered static or dynamic rules at install time ([Firefox bug 1921353](https://bugzil.la/1921353)). A workaround is to make sure that the [`declarative_net_request`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/declarative_net_request) manifest key contains at least one enabled ruleset.

## Syntax

```js-nolint
let updatedRulesets = browser.declarativeNetRequest.updateEnabledRulesets(
    options                // object
);
```

### Parameters

- `options`

  - : An object detailing the rulesets to activate or deactivate in the extension's static rulesets.
    - `disableRulesetIds` {{optional_inline}}
      - : An array of `string`. IDs of static Rulesets to deactivated.
    - `enableRulesetIds` {{optional_inline}}
      - : An array of `string`. IDs of static Rulesets to activated.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) If the request was successful, the promise is fulfilled with no arguments. If the request fails, the promise is rejected with an error message.

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

---
title: declarativeNetRequest.MatchedRule
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/MatchedRule
page-type: webextension-api-type
browser-compat: webextensions.api.declarativeNetRequest.MatchedRule
---

{{AddonSidebar()}}

An object describing the matched rule. This type may be returned by the {{WebExtAPIRef("declarativeNetRequest.getMatchedRules")}} or {{WebExtAPIRef("declarativeNetRequest.testMatchOutcome")}} methods, or observed through the {{WebExtAPIRef("declarativeNetRequest.onRuleMatchedDebug")}} event.

## Type

Values of this type are objects. They contain these properties:

- `extensionId`
  - : A `string`. The ID of the extension, if this rule belongs to a different extension. This property is only available when used with {{WebExtAPIRef("declarativeNetRequest.testMatchOutcome")}}, with the `includeOtherExtensions` option set to `true`.
- `ruleId`
  - : A `number`. The matching rule's ID.
- `rulesetId`
  - : A `string`. The ID of the [ruleset](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest#rulesets) this rule belongs to. The value returned is:
    - For a rule originating from the set of static rules, the value specified in the "id" key of the ruleset in the [`declarative_net_request.rule_resources` manifest key](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/declarative_net_request).
    - For a rule originating from the set of dynamic rules, the value defined in {{WebExtAPIRef("declarativeNetRequest.DYNAMIC_RULESET_ID")}}, i.e., `"_dynamic"`.
    - For a rule originating from the set of session rules, the value defined in {{WebExtAPIRef("declarativeNetRequest.SESSION_RULESET_ID")}}, i.e., `"_session"`.

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

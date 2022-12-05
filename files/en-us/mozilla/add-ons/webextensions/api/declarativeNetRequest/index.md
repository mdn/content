---
title: declarativeNetRequest
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest
tags:
  - API
  - Add-ons
  - Extensions
  - Interface
  - Reference
  - WebExtensions
  - declarativeNetRequest
browser-compat: webextensions.api.declarativeNetRequest
---

{{AddonSidebar}}

This API enables extensions to block or modify network requests by specifying declarative rules. The use of declarative rules means that the extension doesn't intercept and view the content of requests, providing more privacy.

To use this API, an extension must request the "declarativeNetRequest" or "the "declarativeNetRequestWithHostAccess" [permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) in its [`manifest.json`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json) file.

todo

declarativeNetRequestFeedback
host permissions

> **Note:** This API is available in Manifest V3 or higher.

## Types

- {{WebExtAPIRef("declarativeNetRequest.DomainType")}}
  - : Indicates whether a request is first or third party to the frame that it originated in.
- {{WebExtAPIRef("declarativeNetRequest.MatchedRule")}}
  - : Details of a matched rule.
- {{WebExtAPIRef("declarativeNetRequest.ModifyHeaderInfo")}}
  - : The request headers to modify for the request.
- {{WebExtAPIRef("declarativeNetRequest.Redirect")}}
  - : Details of how the redirect should be performed. Only valid for redirect rules.
- {{WebExtAPIRef("declarativeNetRequest.RequestMethod")}}
  - : The HTTP request method of a network request.
- {{WebExtAPIRef("declarativeNetRequest.ResourceType")}}
  - : The resource type of a request.
- {{WebExtAPIRef("declarativeNetRequest.Rule")}}
  - : An object containing details of a dynamic rule.
- {{WebExtAPIRef("declarativeNetRequest.RuleAction")}}
  - : An object defining the action to take if a rule is matched.
- {{WebExtAPIRef("declarativeNetRequest.RuleCondition")}}
  - : An object defining the condition under which a rule is triggered.
- {{WebExtAPIRef("declarativeNetRequest.Ruleset")}}
  - : An object containing details of a static ruleset.
- {{WebExtAPIRef("declarativeNetRequest.UpdateRuleOptions")}}
  - : An object containing lists of rules to add or delete.
- {{WebExtAPIRef("declarativeNetRequest.URLTransform")}}
  - : An object containing details of a URL transformation to perform.

## Properties

- {{WebExtAPIRef("declarativeNetRequest.DYNAMIC_RULESET_ID")}}
  - : Ruleset ID for the dynamic rules added by the extension.
- {{WebExtAPIRef("declarativeNetRequest.GETMATCHEDRULES_QUOTA_INTERVAL")}}
  - : The time interval within which {{WebExtAPIRef("declarativeNetRequest.MAX_GETMATCHEDRULES_CALLS_PER_INTERVAL")}} {{WebExtAPIRef("declarativeNetRequest.getMatchedRules")}} calls can be made.
- {{WebExtAPIRef("declarativeNetRequest.GUARANTEED_MINIMUM_STATIC_RULES")}}
  - : The minimum number of static rules guaranteed to an extension across its enabled static rulesets.
- {{WebExtAPIRef("declarativeNetRequest.MAX_GETMATCHEDRULES_CALLS_PER_INTERVAL")}}
  - : The number of times {{WebExtAPIRef("declarativeNetRequest.getMatchedRules")}} can be called within a period of {{WebExtAPIRef("declarativeNetRequest.GETMATCHEDRULES_QUOTA_INTERVAL")}}.
- {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_DYNAMIC_AND_SESSION_RULES")}}
  - : The maximum number of combined dynamic and session scoped rules an extension can add.
- {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_ENABLED_STATIC_RULESETS")}}
  - : The maximum number of static `Rulesets` an extension can enable.
- {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_REGEX_RULES")}}
  - : The maximum number of regular expression rules that an extension can add.
- {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_STATIC_RULESETS")}}
  - : The maximum number of static `Rulesets` an extension can specify as part of the [`"rule_resources"`](/docs/Mozilla/Add-ons/WebExtensions/manifest.json/rule_resources) manifest key.
- {{WebExtAPIRef("declarativeNetRequest.SESSION_RULESET_ID")}}
  - : The ruleset ID for the session-scoped rules added by the extension.

## Functions

- {{WebExtAPIRef("declarativeNetRequest.getAvailableStaticRuleCount()")}}
  - : Returns the number of static rules an extension can enable before the global static rule limit is reached.
- {{WebExtAPIRef("declarativeNetRequest.getDynamicRules()")}}
  - : Returns the set of dynamic rules for the extension.
- {{WebExtAPIRef("declarativeNetRequest.getEnabledRulesets()")}}
  - : Returns the IDs for the set of enabled static rulesets.
- {{WebExtAPIRef("declarativeNetRequest.getMatchedRules()")}}
  - : Returns all the rules matched for the extension.
- {{WebExtAPIRef("declarativeNetRequest.getSessionRules()")}}
  - : Returns the set of session scoped rules for the extension.
- {{WebExtAPIRef("declarativeNetRequest.isRegexSupported()")}}
  - : Checks if a regular expression is supported as a {{WebExtAPIRef("declarativeNetRequest.RuleCondition")}}`.regexFilter` rule condition.
- {{WebExtAPIRef("declarativeNetRequest.setExtensionActionOptions()")}}
  - : Configures how the action count for tabs are handled.
- {{WebExtAPIRef("declarativeNetRequest.testMatchOutcome()")}}
  - : Checks if any of the extension's `declarativeNetRequest` rules would match a hypothetical request.
- {{WebExtAPIRef("declarativeNetRequest.updateDynamicRules()")}}
  - : Modifies the active set of dynamic rules for the extension.
- {{WebExtAPIRef("declarativeNetRequest.updateEnabledRulesets()")}}
  - : Updates the set of active static rulesets for the extension.
- {{WebExtAPIRef("declarativeNetRequest.updateSessionRuleset()")}}
  - : Modifies the set of session scoped rules for the extension.

## Events

- {{WebExtAPIRef("declarativeNetRequest.onRuleMatchedDebug")}}
  - : Fired when a rule is matched with a request when debugging a temporarily installed extension with the "declarativeNetRequestFeedback" permission.

{{WebExtExamples("h2")}}

## Browser compatibility

{{Compat}}

> **Note:** This API is based on Chromium's [`chrome.declarativeNetRequest`](https://developer.chrome.com/docs/extensions/reference/declarativeNetRequest/) API.
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

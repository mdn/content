---
title: declarativeNetRequest
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest
page-type: webextension-api
browser-compat: webextensions.api.declarativeNetRequest
---

{{AddonSidebar}}

This API enables extensions to specify conditions and actions that describe how network requests should be handled. These declarative rules enable the browser to evaluate and modify network requests without notifying extensions about individual network requests.

## Permissions

To use this API, an extension must request the `"declarativeNetRequest"` or `"declarativeNetRequestWithHostAccess"` [permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) in its [`manifest.json`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json) file.

The `"declarativeNetRequest"` permission allows extensions to block and upgrade requests without any [host permissions](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions). Host permissions are required if the extension wants to redirect requests or modify headers on requests or when the `"declarativeNetRequestWithHostAccess"` permission is used instead of the `"declarativeNetRequest"` permission. To act on requests in these cases, host permissions are required for the request URL. For all requests, except for navigation requests (i.e., resource type `main_frame` and `sub_frame`), host permissions are also required for the request's initiator. The initiator of a request is usually the document or worker that triggered the request.

Some requests are restricted and cannot be matched by extensions. These include privileged browser requests, requests to or from [restricted domains](/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#restricted_domains), and requests from other extensions.

The `"declarativeNetRequestFeedback"` permission is required to use {{WebExtAPIRef("declarativeNetRequest.getMatchedRules","getMatchedRules")}} and {{WebExtAPIRef("declarativeNetRequest.onRuleMatchedDebug","onRuleMatchedDebug")}} as they return information on declarative rules matched. See [Testing](#testing) for more information.

## Rules

The declarative rules are defined by four fields:

- `id` – An ID that uniquely identifies a rule within a ruleset. Mandatory and should be >= 1.
- `priority` – The rule priority. When specified, it should be >= 1. Defaults to 1. See [Matching precedents](#matching_precedents) for details on how priority affects which rules are applied.
- `condition` – The {{WebExtAPIRef("declarativeNetRequest.RuleCondition","condition")}} under which this rule is triggered.
- `action` – The {{WebExtAPIRef("declarativeNetRequest.RuleAction","action")}} to take when the rule is matched. Rules can do one of these things:
  - block a network request.
  - redirect a network request.
  - modify headers from a network request.
  - prevent another matching rule from being applied.

> **Note:**
> A redirect action does not redirect the request, and the request continues as usual when:
>
> - the action does not change the request.
> - the redirect URL is invalid (e.g., the value of {{WebExtAPIRef("declarativeNetRequest.redirect","redirect.regexSubstitution")}} is not a valid URL).

This is an example rule that blocks all script requests originating from `"foo.com"` to any URL with `"abc"` as a substring:

```json
{
  "id": 1,
  "priority": 1,
  "action": { "type": "block" },
  "condition": {
    "urlFilter": "abc",
    "initiatorDomains": ["foo.com"],
    "resourceTypes": ["script"]
  }
}
```

The `urlFilter` field of a rule condition is used to specify the pattern matched against the request URL. See {{WebExtAPIRef("declarativeNetRequest.RuleCondition","RuleCondition")}} for details. Some examples of URL filters are:

<table>
<tbody>
<tr>
<th><code>urlFilter</code></th>
<th>Matches</th>
<th>Does not match</th>
</tr>
<tr>
<td><code>"abc"</code></td>
<td>https://abcd.com<br />https://example.com/abcd</td>
<td>https://ab.com</td>
</tr>
<tr>
<td><code>"abc*d"</code></td>
<td>https://abcd.com<br />https://example.com/abcxyzd</td>
<td>https://abc.com</td>
</tr>
<tr>
<td><code>"||a.example.com"</code></td>
<td>https://a.example.com/<br />https://b.a.example.com/xyz</td>
<td>https://example.com/</td>
</tr>
<tr>
<td><code>"|https*"</code></td>
<td>https://example.com</td>
<td>http://example.com/<br />http://https.com</td>
</tr>
</tbody>
</table>

## Rulesets

Rules are organized into rulesets:

- **static rulesets**: collections of rules defined with the [`"declarative_net_request"`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/declarative_net_request) manifest key and stored in the extension. An extension can enable and disable static rulesets using {{WebExtAPIRef("declarativeNetRequest.updateEnabledRulesets","updateEnabledRulesets")}}. The set of enabled static rulesets is persisted across sessions but not across extension updates. The static rulesets enabled on extension installation and update are determined by the content of the `"declarative_net_request"` manifest key.
- **dynamic ruleset**: rules added or removed using {{WebExtAPIRef("declarativeNetRequest.updateDynamicRules","updateDynamicRules")}}. These rules persist across sessions and extension updates.
- **session ruleset**: rules added or removed using {{WebExtAPIRef("declarativeNetRequest.updateSessionRules","updateSessionRules")}}. These rules do not persist across browser sessions.

> **Note:**
> Errors and warnings about invalid static rules are only displayed during [testing](#testing). Invalid static rules in permanently installed extensions are ignored. Therefore, it's important to verify that your static rulesets are valid by testing.

## Limits

### Static ruleset limits

An extension can:

- specify static rulesets as part of the [`"declarative_net_request"`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/declarative_net_request) manifest key up to the value of {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_STATIC_RULESETS","MAX_NUMBER_OF_STATIC_RULESETS")}}.
- enable static rulesets up to at least the value of {{WebExtAPIRef("declarativeNetRequest.GUARANTEED_MINIMUM_STATIC_RULES","GUARANTEED_MINIMUM_STATIC_RULES")}}, and the number of enabled static rulesets must not exceed the value of {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_ENABLED_STATIC_RULESETS","MAX_NUMBER_OF_ENABLED_STATIC_RULESETS")}}. In addition, the number of rules in enabled static rulesets for all extensions must not exceed the global limit. Extensions shouldn't depend on the global limit having a specific value and should instead use {{WebExtAPIRef("declarativeNetRequest.getAvailableStaticRuleCount","getAvailableStaticRuleCount")}} to find the number of additional rules they can enable.

### Dynamic and session-scoped rules

The number of dynamic and session-scoped rules an extension can add is limited to the value of {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_DYNAMIC_AND_SESSION_RULES","MAX_NUMBER_OF_DYNAMIC_AND_SESSION_RULES")}}.

## Matching precedents

When the browser evaluates how to handle requests, it checks each extension's rules that have a condition that matches the request and chooses the one to consider applying as follows:

1. the rule priority, where 1 is the lowest priority (and rules default to 1 where priority is not set).<br>
   If this doesn't result in one rule to apply:
2. the rule action, in the following order of precedence:
   1. "allow" which means any other remaining rules are ignored.
   2. "allowAllRequests" (for main_frame and sub_frame resourceTypes only) has the same effect as allow but also applies to future subresource loads in the document (including descendant frames) generated from the request.
   3. "block" cancels the request.
   4. "upgradeScheme" upgrades the scheme of the request.
   5. "redirect" redirects the request.
   6. "modifyHeaders" rewrites request or response headers or both.

> **Note:** When multiple matching rules have the same rule priority and rule action type, the outcome can be ambiguous when the matched action support additional properties. These properties can result in outcomes that cannot be combined. For example:
>
> - The "block" action does not support additional properties, and therefore there is no ambiguity: all matching "block" actions would result in the same outcome.
> - The "redirect" action redirects a request to one destination. When multiple "redirect" actions match, all but one "redirect" action is ignored. It is still possible to redirect repeatedly when the redirected request matches another rule condition.
> - Multiple "modifyHeaders" actions can be applied independently when they touch different headers. The result is ambiguous when they touch the same header, because some combination of operations are not allowed (as explained at {{WebExtAPIRef("declarativeNetRequest.ModifyHeaderInfo")}}). The evaluation order of "modifyHeaders" actions is therefore important.
>
> To control the order in which actions are applied, assign distinct `priority` values to rules whose order of precedence is important.

> **Note:** After rule priority and rule action, Firefox considers the ruleset the rule belongs to, in this order of precedence: session > dynamic > session rulesets.
> This cannot be relied upon across browsers, see [WECG issue 280](https://github.com/w3c/webextensions/issues/280).

If only one extension provides a rule for the request, that rule is applied. However, where more than one extension has a matching rule, the browser chooses the one to apply in this order of precedence:

1. "block"
2. "redirect" and "upgradeScheme"
3. "allow" and "allowAllRequests"

If the request was not blocked or redirected, the matching `modifyHeaders` actions are applied, as documented in {{WebExtAPIRef("declarativeNetRequest.ModifyHeaderInfo")}}.

## Testing

{{WebExtAPIRef("declarativeNetRequest.testMatchOutcome","testMatchOutcome")}}, {{WebExtAPIRef("declarativeNetRequest.getMatchedRules","getMatchedRules")}}, and {{WebExtAPIRef("declarativeNetRequest.onRuleMatchedDebug","onRuleMatchedDebug")}} are available to assist with testing rules and rulesets. These APIs require the `"declarativeNetRequestFeedback"` [permissions](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions). In addition:

- in Chrome, these APIs are only available to unpacked extensions.
- in Firefox, these APIs are only available after setting the `extensions.dnr.feedback` preference to `true`. Set this preference using `about:config` or the [`--pref` flag of the `web-ext` CLI tool](https://extensionworkshop.com/documentation/develop/web-ext-command-reference/#pref).

## Comparison with the webRequest API

- The declarativeNetRequest API evaluates network requests in the browser itself. This makes it more performant than the webRequest API, where each network request is evaluated in JavaScript in the extension process.
- Because the requests are not intercepted by the extension process, declarativeNetRequest removes the need for extensions to have a background page.
- Unlike the webRequest API, blocking or upgrading requests using the declarativeNetRequest API requires no host permissions when used with the `declarativeNetRequest` permission.
- The declarativeNetRequest API provides better privacy to users because extensions do not read the network requests made on the user's behalf.
- (Chrome only:) Unlike the webRequest API, any images or iframes blocked using the declarativeNetRequest API are automatically collapsed in the DOM.
- While deciding whether a request is to be blocked or redirected, the declarativeNetRequest API is given priority over the webRequest API because it allows for synchronous interception. Similarly, any headers removed through declarativeNetRequest API are not made visible to web request extensions.
- The webRequest API is more flexible than the declarativeNetRequest API because it allows extensions to evaluate a request programmatically.

## Types

- {{WebExtAPIRef("declarativeNetRequest.MatchedRule")}}
  - : Details of a matched rule.
- {{WebExtAPIRef("declarativeNetRequest.ModifyHeaderInfo")}}
  - : The request or response headers to modify for the request.
- {{WebExtAPIRef("declarativeNetRequest.Redirect")}}
  - : Details of how the redirect should be performed. Only valid for redirect rules.
- {{WebExtAPIRef("declarativeNetRequest.ResourceType")}}
  - : The resource type of a request.
- {{WebExtAPIRef("declarativeNetRequest.Rule")}}
  - : An object containing details of a rule.
- {{WebExtAPIRef("declarativeNetRequest.RuleAction")}}
  - : An object defining the action to take if a rule is matched.
- {{WebExtAPIRef("declarativeNetRequest.RuleCondition")}}
  - : An object defining the condition under which a rule is triggered.
- {{WebExtAPIRef("declarativeNetRequest.URLTransform")}}
  - : An object containing details of a URL transformation to perform for a redirect action.

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
  - : The maximum number of static rulesets an extension can enable.
- {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_REGEX_RULES")}}
  - : The maximum number of regular expression rules that an extension can add.
- {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_STATIC_RULESETS")}}
  - : The maximum number of static rulesets an extension can specify as part of the [`declarative_net_request.rule_resources`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/declarative_net_request) manifest key.
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
- {{WebExtAPIRef("declarativeNetRequest.updateSessionRules()")}}
  - : Modifies the set of session scoped rules for the extension.

## Events

- {{WebExtAPIRef("declarativeNetRequest.onRuleMatchedDebug")}}
  - : Fired when a rule is matched with a request when debugging an extension with the "declarativeNetRequestFeedback" permission.

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

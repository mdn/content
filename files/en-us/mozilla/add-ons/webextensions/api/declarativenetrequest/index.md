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

This API enables extensions to obtain information about and modify declarative rules that block or modify network requests. The use of declarative rules means that extensions don't intercept and view the content of requests, providing more privacy.

## Permissions

To use this API, an extension must request the `"declarativeNetRequest"` or `"declarativeNetRequestWithHostAccess"` [permissions](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) in its [`manifest.json`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json) file.

The `"declarativeNetRequest"` permission allows extensions to block and upgrade requests without any [host permissions](/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions). Host permissions are required if the extension wants to redirect a request or modify headers on a request. The `"declarativeNetRequestWithHostAccess"` permission requires host permissions to the request URL and initiator to act on a request.

The `"declarativeNetRequestFeedback"` permission is required to use {{WebExtAPIRef("declarativeNetRequest.getmatchedrules","getmatchedrules")}} and {{WebExtAPIRef("declarativeNetRequest.onRuleMatchedDebug","onRuleMatchedDebug")}} as they return information on declarative rules matched.

## Rules

The declarative rules are defined by four fields:

- `id` – An ID that uniquely identifies a rule. Mandatory and should be >= 1.
- `priority` – The rule priority. When specified, it should be >= 1. Defaults to 1. See [Matching precedents](#matching-precedents) for details on how priority affects which rules are applied.
- `condition` – The condition under which this rule is triggered.
- `action` – The action to take when the rule is matched. Rules can do one of these things:
  - block a network request.
  - prevent a request from getting blocked by negating any matching blocked rules.
  - redirect a network request.
  - modify headers from a network request.

This is an example rule that blocks all script requests originating from `"foo.com"` to any URL with `"abc"` as a substring:

```json
{
  "id" : 1,
  "priority": 1,
  "action" : { "type" : "block" },
  "condition" : 
  {
    "urlFilter" : "abc",
    "domains" : ["foo.com"],
    "resourceTypes" : ["script"]
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

- **static rulesets**: collections of rules defined with the [`"declarative_net_request"`](/docs/Mozilla/Add-ons/WebExtensions/manifest.json/declarative_net_request) manifest key and stored in the extension. An extension can enable and disable static rulesets using {{WebExtAPIRef("declarativeNetRequest.updateEnabledRulesets","updateEnabledRulesets")}}. The set of enabled static rulesets is persisted across sessions but not across extension updates. The static rulesets enabled on extension installation and update are determined by the content of the `"declarative_net_request"` manifest key.
- **dynamic ruleset**: rules added or removed using {{WebExtAPIRef("declarativeNetRequest.updateDynamicRules","updateDynamicRules")}}. These rules persist across sessions and extension updates.
- **session ruleset**: rules added or removed using {{WebExtAPIRef("declarativeNetRequest.updateSessionRules","updateSessionRules")}}. These rules do not persist across browser sessions; they are backed in memory by the browser.

> **Note:**
> Errors and warnings about invalid static rules are only displayed for [temporarily loaded extensions](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/). Invalid static rules in permanently installed extensions are ignored. Therefore, it's important to verify that your static rulesets are valid by testing with a temporarily loaded version of your extension.

## Limits

### Static ruleset limits

An extension can:

- specify static rulesets as part of the [`"declarative_net_request"`](/docs/Mozilla/Add-ons/WebExtensions/manifest.json/declarative_net_request) manifest key up to the value of {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_STATIC_RULESETS","MAX_NUMBER_OF_STATIC_RULESETS")}}.
- enable static rulesets up to at least the value of {{WebExtAPIRef("declarativeNetRequest.GUARANTEED_MINIMUM_STATIC_RULES","GUARANTEED_MINIMUM_STATIC_RULES")}}, and the number of enabled static rulesets must not exceed the value of [{{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_ENABLED_STATIC_RULESETS","MAX_NUMBER_OF_ENABLED_STATIC_RULESETS")}}. In addition, the number of rules in enabled static rulesets for all extensions must not exceed the global limit. Extensions shouldn't depend on the global limit having a specific value and should instead use {{WebExtAPIRef("declarativeNetRequest.getAvailableStaticRuleCount","getAvailableStaticRuleCount")}} to find the number of additional rules they can enable.

### Dynamic and session-scoped rules

The number of dynamic and session-scoped rules an extension can add is limited to the value of {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_DYNAMIC_AND_SESSION_RULES","MAX_NUMBER_OF_DYNAMIC_AND_SESSION_RULES")}}.

## Matching precedents

Before a request is sent, each extension is queried for an action to take. In order of precedence, these actions are:

1. Actions that block requests of type `block`.
2. Actions that redirect requests of type `redirect` or `upgradeScheme`.
3. Actions that allow requests of type `allow` or `allowAllRequests`.

If more than one extension returns an action, the extension whose action has the highest precedence gets priority. If more than one extension returns an action with the same priority, the most recently installed extension gets priority.

When an extension is queried for how to handle a request, the matching rule with the highest `priority` is returned. If more than one matching rule has the highest `priority`, the tie is broken based on the action type, in this order of precedence:

1. `allow`
2. `allowAllRequests`
3. `block`
4. `upgradeScheme`
5. `redirect`

If the request is not blocked or redirected, the matching `modifyHeaders` rules are evaluated, with the most recently installed extensions getting priority. Within each extension, all `modifyHeaders` rules with a priority lower than matching `allow` or `allowAllRequests` rules are ignored.

If multiple `modifyHeaders` rules specify the same header, the resulting modification for the header is determined based on the priority of each rule and the operations specified:

- If a rule has been appended to a header, then lower-priority rules can only append to that header. `set` and `remove` operations are not permitted.
- If a rule has set a header, lower priority rules cannot further modify the header, except for `append` rules from the same extension.
- If a rule has removed a header, lower priority rules cannot further modify the header.

## Comparison with the webRequest API

- The declarativeNetRequest API evaluates network requests in the browser itself. This makes it more performant than the webRequest API, where each network request is evaluated in JavaScript in the extension process.
- Because the requests are not intercepted by the extension process, declarativeNetRequest removes the need for extensions to have a background page, resulting in less memory consumption.
- Unlike the webRequest API, blocking or upgrading requests using the declarativeNetRequest API requires no host permissions when used with the `declarativeNetRequest` permission.
- The declarativeNetRequest API provides better privacy to users because extensions do not read the network requests made on the user's behalf.
- Unlike the webRequest API, any images or iframes blocked using the declarativeNetRequest API are automatically collapsed in the DOM.
- While deciding whether a request is to be blocked or redirected, the declarativeNetRequest API is given priority over the webRequest API because it allows for synchronous interception. Similarly, any headers removed through declarativeNetRequest API are not made visible to web request extensions.
- The webRequest API is more flexible than the declarativeNetRequest API because it allows extensions to evaluate a request programmatically.

## Example

### manifest.json

```json
{
  "name": "declarativeNetRequest extension",
  "version": "1",
  "declarative_net_request": {
    "rule_resources": [{
      "id": "ruleset_1",
      "enabled": true,
      "path": "rules.json"
    }]
  },
  "permissions": [
    "*://*.google.com/*",
    "*://*.abcd.com/*",
    "*://*.example.com/*",
    "https://*.xyz.com/*",
    "*://*.headers.com/*",
    "declarativeNetRequest"
  ],
  "manifest_version": 2
}
```

### rules.json

```json
[
  {
    "id": 1,
    "priority": 1,
    "action": { "type": "block" },
    "condition": {"urlFilter": "google.com", "resourceTypes": ["main_frame"] }
  },
  {
    "id": 2,
    "priority": 1,
    "action": { "type": "allow" },
    "condition": { "urlFilter": "google.com/123", "resourceTypes": ["main_frame"] }
  },
  {
    "id": 3,
    "priority": 2,
    "action": { "type": "block" },
    "condition": { "urlFilter": "google.com/12345", "resourceTypes": ["main_frame"] }
  },
  {
    "id": 4,
    "priority": 1,
    "action": { "type": "redirect", "redirect": { "url": "https://example.com" } },
    "condition": { "urlFilter": "google.com", "resourceTypes": ["main_frame"] }
  },
  {
    "id": 5,
    "priority": 1,
    "action": { "type": "redirect", "redirect": { "extensionPath": "/a.jpg" } },
    "condition": { "urlFilter": "abcd.com", "resourceTypes": ["main_frame"] }
  },
  {
    "id": 6,
    "priority": 1,
    "action": {
      "type": "redirect",
      "redirect": {
        "transform": { "scheme": "https", "host": "new.example.com" }
      }
    },
    "condition": { "urlFilter": "||example.com", "resourceTypes": ["main_frame"] }
  },
  {
    "id": 7,
    "priority": 1,
    "action": {
      "type": "redirect",
      "redirect": {
        "regexSubstitution": "https://\\1.xyz.com/"
      }
    },
    "condition": {
      "regexFilter": "^https://www\\.(abc|def)\\.xyz\\.com/",
      "resourceTypes": [
        "main_frame"
      ]
    }
  },
  {
    "id" : 8,
    "priority": 2,
    "action" : {
      "type" : "allowAllRequests"
    },
    "condition" : {
      "urlFilter" : "||b.com/path",
      "resourceTypes" : ["sub_frame"]
    }
  },
  {
    "id" : 9,
    "priority": 1,
    "action" : {
      "type" : "block"
    },
    "condition" : {
      "urlFilter" : "script.js",
      "resourceTypes" : ["script"]
    }
  },
  {
    "id": 10,
    "priority": 2,
    "action": {
      "type": "modifyHeaders",
      "responseHeaders": [
        { "header": "h1", "operation": "remove" },
        { "header": "h2", "operation": "set", "value": "v2" },
        { "header": "h3", "operation": "append", "value": "v3" }
      ]
    },
    "condition": { "urlFilter": "headers.com/123", "resourceTypes": ["main_frame"] }
  },
  {
    "id": 11,
    "priority": 1,
    "action": {
      "type": "modifyHeaders",
      "responseHeaders": [
        { "header": "h1", "operation": "set", "value": "v4" },
        { "header": "h2", "operation": "append", "value": "v5" },
        { "header": "h3", "operation": "append", "value": "v6" }
      ]
    },
    "condition": { "urlFilter": "headers.com/12345", "resourceTypes": ["main_frame"] }
  },
]
```

To illustrate how this rule set affects requests, consider:

- navigation to `"https://google.com"`. Rules with ID (1) and (4) match. The request iw blocked because blocking rules have higher priority than redirect rules when the `"priority"` is the same.
- navigation to `"https://google.com/1234"`. Rules with ID (1), (2), and (4) match. Because the request has a matching `allow` rule and no higher priority rules, the request is not blocked nor redirected and continues to `"https://google.com/1234"`.
- navigation to `"https://google.com/12345"` Rules with ID (1), (2), (3), and (4) match. The request is blocked because rule (3) has the highest priority, overriding all other matching rules.
- navigation to `"https://abcd.com"`. The rule with ID (5) matches. Since rule (5) specifies an extension path, the request is redirected to `"chrome-extension://EXTENSION_ID/a.jpg"`.
- navigation to `"http://example.com/path"`. The rule with ID (6) matches. Since rule (6) specifies a URL transform, the request is redirected to `"https://new.example.com/path"`.
- a navigation to `"https://www.abc.xyz.com/path"`. The rule with ID (7) matches. The request is redirected to `"https://abc.xyz.com/path"`.
- this request hierarchy:
  - <https://a.com/path> (main-frame request)
    - <https://b.com/path> (sub-frame request, matches the rule with ID (8))
      - <https://c.com/path> (sub-frame request, matches the rule with ID (8))
        - <https://c.com/script.js> (script request, matches the rules with IDs (8, 9) but (8) has higher priority)
      - <https://b.com/script.js> (script request, matches the rules with IDs (8, 9) but (8) has higher priority)
    - <https://d.com/path> (sub-frame request)
      - <https://d.com/script.js> (script request, matches the rule with ID (9)) All requests in green will be allow-listed due to rule with ID (8) and not be evaluated by the extensions' ruleset. Requests in red are blocked due to rule with ID (9).
- navigation to `"https://headers.com/12345"` with response headers `{ "h1": "initial_1", "h2": "initial_2" }`. Rules with ID (10) and (11) match. The request has its response headers modified to `{ "h2": "v2", "h2": "v5", "h3": "v3", "h3": "v6" }`. Header `h1` is removed by (10), `h2` is set by (10) then appended by (11), and `h3` is appended by (10) and (11).

## Types

- {{WebExtAPIRef("declarativeNetRequest.MatchedRule")}}
  - : Details of a matched rule.
- {{WebExtAPIRef("declarativeNetRequest.ModifyHeaderInfo")}}
  - : The request headers to modify for the request.
- {{WebExtAPIRef("declarativeNetRequest.Redirect")}}
  - : Details of how the redirect should be performed. Only valid for redirect rules.
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
- {{WebExtAPIRef("declarativeNetRequest.updateSessionRules()")}}
  - : Modifies the set of session scoped rules for the extension.

## Events

- {{WebExtAPIRef("declarativeNetRequest.onRuleMatchedDebug")}}
  - : Fired when a rule is matched with a request when debugging a temporarily installed extension with the "declarativeNetRequestFeedback" permission.

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

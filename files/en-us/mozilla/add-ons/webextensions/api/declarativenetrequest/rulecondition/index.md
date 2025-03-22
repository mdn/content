---
title: declarativeNetRequest.RuleCondition
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/RuleCondition
page-type: webextension-api-type
browser-compat: webextensions.api.declarativeNetRequest.RuleCondition
---

{{AddonSidebar}}

Details of the condition that determines whether a rule matches a request, as the `condition` property of a {{WebExtAPIRef("declarativeNetRequest.Rule")}}.

## Type

Values of this type are objects. They contain these properties:

- `domainType` {{optional_inline}}
  - : A `string`. Specifies whether the network request is first-party or third-party. The request is considered first-party if it's for the same domain as the document or subdocument that initiates the request. Otherwise, it's considered third-party. If omitted, all requests are accepted. Possible values are `"firstParty"` and `"thirdParty"`.
- `domains` {{deprecated_inline}} {{optional_inline}}
  - : An array of `string`. Use [`initiatorDomains`](#initiatordomains) instead. The rule only matches network requests originating from this list of domains.
- `excludedDomains` {{deprecated_inline}} {{optional_inline}}
  - : An array of `string`. Use [`excludedInitiatorDomains`](#excludedinitiatordomains) instead. The rule does not match network requests originating from this list of domains.
- `initiatorDomains` {{optional_inline}}
  - : An array of `string`. The rule only matches network requests originating from this list of domains. If the list is omitted, the rule is applied to requests from all domains. An empty list is not allowed. A [canonical domain](#canonical_domain) should be used. This matches against the request initiator and not the request URL.
- `excludedInitiatorDomains` {{optional_inline}}
  - : An array of `string`. The rule does not match network requests originating from this list of domains. If the list is empty or omitted, no domains are excluded. This takes precedence over `initiatorDomains`. A [canonical domain](#whocanonical_domain) should be used. This matches against the request initiator and not the request URL.
- `isUrlFilterCaseSensitive` {{optional_inline}}
  - : A `boolean`. Whether the [`urlFilter`](#urlfilter) or [`regexFilter`](#regexfilter) (whichever is specified) is case sensitive. While there is consensus on defaulting to `false` across browsers in [WECG issue 269](https://github.com/w3c/webextensions/issues/269), the value used to be `true` in (older) versions of Chrome and Safari. See [Browser compatibility](#browser_compatibility) for details.
- `regexFilter` {{optional_inline}}
  - : A `string`. Regular expression to match against the network request URL. Note that:
    - The supported format is not stable and varies across browsers, see ["Regular expressions in DNR API (regexFilter)" in WECG issue 344](https://github.com/w3c/webextensions/issues/344) for details.
    - Only one of [`urlFilter`](#urlfilter) or [`regexFilter`](#regexfilter) can be specified.
    - The [`regexFilter`](#regexfilter) must be composed of only {{Glossary("ASCII")}} characters. This is matched against a URL where the host is encoded in the [punycode](https://en.wikipedia.org/wiki/Punycode) format (in case of internationalized domains) and any other non-ascii characters are percent-encoded in UTF-8.
- `requestDomains` {{optional_inline}}
  - : An array of `string`. The rule only matches network requests when the domain matches one from this list. If the list is omitted, the rule is applied to requests from all domains. An empty list is not allowed. A [canonical domain](#canonical_domain) should be used.
- `excludedRequestDomains` {{optional_inline}}
  - : An array of `string`. The rule does not match network requests when the domains matches one from this list. If the list is empty or omitted, no domains are excluded. This takes precedence over `requestDomains`. A [canonical domain](#canonical_domain) should be used.
- `requestMethods` {{optional_inline}}
  - : An array of `string`. List of HTTP request methods that the rule matches. An empty list is not allowed. Specifying a `requestMethods` rule condition also excludes non-HTTP(s) requests, whereas specifying [`excludedRequestMethods`](#excludedrequestmethods) does not.
- `excludedRequestMethods` {{optional_inline}}
  - : An array of `string`. List of request methods that the rule does not match on. Only one of [`requestMethods`](#requestmethods) and `excludedRequestMethods` should be specified. If neither of them is specified, all request methods are matched.
- `resourceTypes` {{optional_inline}}
  - : An array of {{WebExtAPIRef("declarativeNetRequest.ResourceType")}}. List of resource types that the rule matches with. An empty list is not allowed. This must be specified for `"allowAllRequests"` rules and may only include the `"sub_frame"` and `"main_frame"` resource types.
- `excludedResourceTypes` {{optional_inline}}
  - : An array of {{WebExtAPIRef("declarativeNetRequest.ResourceType")}}. List of resource types that the rule does not match on. Only one of [`resourceTypes`](#resourcetypes) and `excludedResourceTypes` should be specified. If neither of them is specified, all resource types except `"main_frame"` are blocked.
- `responseHeaders` {{optional_inline}}
  - : An array of {{WebExtAPIRef("declarativeNetRequest.HeaderInfo")}}. The rule matches if the request matches any response header condition in this list (if specified).
- `excludedResponseHeaders` {{optional_inline}}
  - : An array of {{WebExtAPIRef("declarativeNetRequest.HeaderInfo")}}. The rule does not match if the request matches any response header condition in this list (if specified). If both `excludedResponseHeaders` and `responseHeaders` are specified, then the `excludedResponseHeaders` property takes precedence.
- `tabIds` {{optional_inline}}
  - : An array of `number`. List of {{WebExtAPIRef("tabs.Tab")}}.`id` that the rule should match. An ID of {{WebExtAPIRef("tabs.TAB_ID_NONE")}} matches requests that don't originate from a tab. An empty list is not allowed. Only supported for session-scoped rules.
- `excludedTabIds` {{optional_inline}}
  - : An array of `number`. List of {{WebExtAPIRef("tabs.Tab")}}.`id` that the rule should not match. An ID of {{WebExtAPIRef("tabs.TAB_ID_NONE")}} excludes requests that do not originate from a tab. Only supported for session-scoped rules.
- `urlFilter` {{optional_inline}}

  - : A `string`. The pattern that is matched against the network request URL. Supported constructs:

    - `*` : Wildcard: Matches any number of characters.
    - `|` : Left or right anchor: If used at either end of the pattern, specifies the beginning or end of the URL respectively.
    - `||` : Domain name anchor: If used at the beginning of the pattern, specifies the start of a (sub-)domain of the URL.
    - `^` : Separator character: This matches anything except a letter, a digit, or one of `_`, `-`, `.`, or `%`. The last `^` may also match the end of the URL instead of a separator character.

    `urlFilter` is composed of the following parts: (optional left/domain name anchor) + pattern + (optional right anchor).
    If omitted, all URLs are matched. An empty string is not allowed.
    A pattern beginning with `||*` is not allowed. Use `*` instead.
    Note that:

    - Only one of `urlFilter` or [`regexFilter`](#regexfilter) can be specified.
    - The `urlFilter` must be composed of only ASCII characters. This is matched against a URL where the host is encoded in the [punycode](https://en.wikipedia.org/wiki/Punycode) format (in case of internationalized domains) and any other non-ASCII characters are percent-encoded in UTF-8. For example, when the request URL is `http://abc.рф?q=ф`, the `urlFilter` is matched against the URL `http://abc.xn--p1ai/?q=%D1%84`.

### Canonical domain

Domains specified in `initiatorDomains`, `excludedInitiatorDomains`, `requestDomains`, or `excludedRequestDomains` should comply with the following:

- Sub-domains such as "a.example.com" are allowed.
- The entries must consist of only _lowercase_ ASCII characters.
- Use [Punycode](https://en.wikipedia.org/wiki/Punycode) encoding for internationalized domains.
- IPv4 addresses must be represented as 4 numbers separated by a dot.
- IPv6 addresses should be represented in their canonical form, wrapped in square brackets.

To programmatically generate the canonical domain for a URL, use the [URL API](/en-US/docs/Web/API/URL) and read its `hostname` property, i.e., `new URL(url).hostname`.

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

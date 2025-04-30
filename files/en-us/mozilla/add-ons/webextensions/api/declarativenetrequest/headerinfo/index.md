---
title: declarativeNetRequest.HeaderInfo
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/HeaderInfo
page-type: webextension-api-type
browser-compat:
  - webextensions.api.declarativeNetRequest.RuleCondition.responseHeaders
  - webextensions.api.declarativeNetRequest.RuleCondition.excludedResponseHeaders
---

{{AddonSidebar}}

The response header to match for the request, declared in the [`rule.condition.excludedResponseHeaders`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/RuleCondition#excludedresponseheaders) array or [`rule.condition.responseHeaders`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/RuleCondition#responseheaders) array. If specified, the array must be non-empty.

When used in the condition responseHeaders, the rule matches if the request matches this response header condition. When used in the condition excludedResponseHeaders, the rule does not match if the request matches this response header condition.

Each object describes one header to match or exclude. To check multiple headers, multiple objects can be specified in these arrays, or across multiple rules.

> [!NOTE] Matching by headers is a relatively new feature. Make sure to feature-detect its availability before relying on it. While some browsers ignore the complete rule when an unrecognized condition is present, Chrome 121 until 127 applied the whole rule while ignoring the `responseHeaders` condition. This could result in matching more requests than intended, see [Chromium issue 347186592](https://crbug.com/347186592).

## Type

Values of this type are objects. They contain these properties:

- `header`
  - : A `string`. The name of the header. This condition matches on the name only if both values and excludedValues are not specified.
- `values` {{optional_inline}}
  - : An array of `string`. If specified, this condition matches if the header's value matches at least one pattern in this list. This supports case-insensitive header value matching plus the following constructs:
    - `'*'` : Matches any number of characters.
    - `'?'` : Matches zero or one character(s).
    - `'*'` and `'?'` can be escaped with a backslash, e.g., `'\*'` and `'\?'`.
- `excludedValues` {{optional_inline}}
  - : An array of `string`. If specified, this condition is not matched if the header exists but its value contains at least one element in this list. This uses the same glob pattern syntax as `values`. If `values` and `excludedValues` are both matched, then `excludedValues` takes precedence.

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

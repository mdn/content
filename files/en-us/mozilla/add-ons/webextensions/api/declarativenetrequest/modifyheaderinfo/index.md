---
title: declarativeNetRequest.ModifyHeaderInfo
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/ModifyHeaderInfo
page-type: webextension-api-type
browser-compat:
  - webextensions.api.declarativeNetRequest.RuleAction.requestHeaders
  - webextensions.api.declarativeNetRequest.RuleAction.responseHeaders
---

{{AddonSidebar}}

The request or response header to modify for a request, declared in the `rule.action.requestHeaders` array or `rule.action.responseHeaders` array for rules whose [`rule.action.type`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/RuleAction#type_2) is "modifyHeaders".

Each object describes one header modification. To modify multiple headers, multiple objects can be specified in these arrays, or across multiple rules.

Matching `modifyHeaders` rules are applied in the order described at [Matching precedence](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest#matching_precedence).
Within each extension, all `modifyHeaders` rules with a priority lower than or equal to matching `allow` or `allowAllRequests` rules are ignored.

If multiple `modifyHeaders` rules specify the same header, the resulting modification for the header is determined based on the priority of each rule and the operations specified:

- If a rule has been appended to a header, then lower-priority rules can only append to that header. `set` and `remove` operations are not permitted.
- If a rule has set a header, lower priority rules cannot modify the header except for `append` rules from the same extension.
- If a rule has removed a header, lower priority rules cannot modify the header.

## Type

Values of this type are objects. They contain these properties:

- `header`
  - : A `string`. The name of the header to be modified.
- `operation`
  - : A `string`. The operation to be performed on a header. Possible values are `"append"`, `"set"`, and `"remove"`.
- `value` {{optional_inline}}
  - : A `string`. The new value for the header. Must be specified for append and set operations. Not allowed for the "remove" operation.

## Header limits

In Chrome, `"append"` is supported for the following request headers:

- `Accept`
- `Accept-Encoding`
- `Accept-Language`
- `Access-Control-Request-Headers`
- `Cache-Control`
- `Connection`
- `Content-Language`
- `Cookie`
- `Forwarded`
- `If-Match`
- `If-None-Match`
- `Keep-Alive`
- `Range`
- `Te`
- `Trailer`
- `Transfer-Encoding`
- `Upgrade`
- `Via`
- `Want-Digest`
- `X-Forwarded-For`

In Firefox, the extension needs host permissions for the new value of the `Host` header.

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

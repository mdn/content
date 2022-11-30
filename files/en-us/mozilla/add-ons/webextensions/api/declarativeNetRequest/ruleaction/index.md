---
title: declarativeNetRequest.RuleAction
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/RuleAction
tags:
  - API
  - Add-ons
  - Extensions
  - Reference
  - WebExtensions
  - Type
  - declarativeNetRequest
  - RuleAction
browser-compat: webextensions.api.declarativeNetRequest.RuleAction
---

{{AddonSidebar()}}

Details of the action to take if a rule is matched.

## Type

Values of this type are objects. They contain these properties:

- `redirect` {{optional_inline}}
  - : {{WebExtAPIRef("declarativeNetRequest.Redirect")}}. Describes how the redirect should be performed. Only valid for redirect rules.
- `requestHeaders` {{optional_inline}}
  - : {{WebExtAPIRef("declarativeNetRequest.ModifyHeaderInfo")}}. The request headers to modify for the request. Only valid if `RuleActionType` is `"modifyHeaders"`.
- `redirect` {{optional_inline}}
  - : {{WebExtAPIRef("declarativeNetRequest.ModifyHeaderInfo")}}. The response headers to modify for the request. Only valid if `RuleActionType` is `"modifyHeaders"`.
- `type` {{optional_inline}}
  - : A `string`. The type of action to perform. Possible values are `"block"`, `"redirect"`, `"allow"`, `"upgradeScheme"`, `"modifyHeaders"`, and `"allowAllRequests"`.

## Browser compatibility

{{Compat}}

> **Note:** This API is based on Chromium's [`chrome.declarativeNetRequest`](https://developer.chrome.com/docs/extensions/reference/declarativeNetRequest/#type-RuleAction) API.
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

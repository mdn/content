---
title: declarativeNetRequest.Rule
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/Rule
tags:
  - API
  - Add-ons
  - Extensions
  - Reference
  - WebExtensions
  - Type
  - declarativeNetRequest
  - Rule
browser-compat: webextensions.api.declarativeNetRequest.Rule
---

{{AddonSidebar()}}

The details of a dynamic ruleset.

## Type

Values of this type are objects. They contain these properties:

- `action`
  - : {{WebExtAPIRef("declarativeNetRequest.RuleAction")}}. The action to take if this rule is matched.
- `condition`
  - : {{WebExtAPIRef("declarativeNetRequest.RuleCondition")}}. The condition under which this rule is triggered.
- `id`
  - : `number`. An ID that uniquely identifies a rule. Mandatory and should be >= 1.
- `priority` {{optional_inline}}
  - : `number`. Rule priority. Defaults to 1. When specified, should be >= 1.

## Browser compatibility

{{Compat}}

> **Note:** This API is based on Chromium's [`chrome.declarativeNetRequest`](https://developer.chrome.com/docs/extensions/reference/declarativeNetRequest/#type-Rule) API.
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

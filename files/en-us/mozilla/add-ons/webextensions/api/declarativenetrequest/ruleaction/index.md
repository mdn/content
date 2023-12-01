---
title: declarativeNetRequest.RuleAction
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/RuleAction
page-type: webextension-api-type
browser-compat: webextensions.api.declarativeNetRequest.RuleAction
---

{{AddonSidebar()}}

Details of the action to take if a rule is matched, as the `action` property of a {{WebExtAPIRef("declarativeNetRequest.Rule")}}.

## Type

Values of this type are objects. They contain these properties:

- `redirect` {{optional_inline}}
  - : {{WebExtAPIRef("declarativeNetRequest.Redirect")}}. Describes how the redirect should be performed. Only valid for redirect rules.
- `requestHeaders` {{optional_inline}}
  - : {{WebExtAPIRef("declarativeNetRequest.ModifyHeaderInfo")}}. The request headers to modify for the request. Only valid if `type` is `"modifyHeaders"`.
- `responseHeaders` {{optional_inline}}
  - : {{WebExtAPIRef("declarativeNetRequest.ModifyHeaderInfo")}}. The response headers to modify for the request. Only valid if `type` is `"modifyHeaders"`.
- `type`
  - : A `string`. The type of action to perform. Possible values are `"block"`, `"redirect"`, `"allow"`, `"upgradeScheme"`, `"modifyHeaders"`, and `"allowAllRequests"`. The use of the `"redirect"` and `"modifyHeaders"` actions require [host permissions](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) for the request and request initiator. The "block" and "upgradeScheme" actions also require host permissions unless the "declarativeNetRequest" permission is specified. Without these permissions, matching rules are ignored. See [Permissions at declarativeNetRequest](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest#permissions) for more information. More details about the effects of rule actions are provided in [Matching precedents](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest#matching_precedents).

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

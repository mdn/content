---
title: declarativeNetRequest.Redirect
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/Redirect
page-type: webextension-api-type
browser-compat: webextensions.api.declarativeNetRequest.Redirect
---

{{AddonSidebar()}}

Details describing how a redirect should be performed, as the `redirect` property of a {{WebExtAPIRef("declarativeNetRequest.RuleAction", "RuleAction")}}. Only valid for redirect rules.

> **Note:**
> A redirect action does not redirect the request, and the request continues as usual when:
>
> - the action does not change the request.
> - the redirect URL is invalid (e.g., the value of {{WebExtAPIRef("declarativeNetRequest.redirect","redirect.regexSubstitution")}} is not a valid URL).

## Type

Values of this type are objects. They contain these properties:

- `extensionPath` {{optional_inline}}
  - : A `string`. The path relative to the extension directory. Should start with '/'. The initiator of the request can only follow the redirect when the resource is listed in [`web_accessible_resources`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/web_accessible_resources).
- `regexSubstitution` {{optional_inline}}
  - : A `string`. The substitution pattern for rules that specify a `regexFilter`. The first match of `regexFilter` within the URL is replaced with this pattern. Within `regexSubstitution`, backslash-escaped digits (`\1` to `\9`) are used to insert the corresponding capture groups. `\0` refers to the entire matching text.
- `transform` {{optional_inline}}
  - : {{WebExtAPIRef("declarativeNetRequest.URLTransform")}}. The URL transformations to perform.
- `url` {{optional_inline}}
  - : A `string`. The redirect URL. Redirects to JavaScript URLs are not allowed.

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

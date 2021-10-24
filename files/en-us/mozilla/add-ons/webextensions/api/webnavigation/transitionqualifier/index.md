---
title: webNavigation.TransitionQualifier
slug: Mozilla/Add-ons/WebExtensions/API/webNavigation/TransitionQualifier
tags:
  - API
  - Add-ons
  - Extensions
  - Non-standard
  - Reference
  - TransitionQualifier
  - Type
  - WebExtensions
  - webNavigation
browser-compat: webextensions.api.webNavigation.TransitionQualifier
---
{{AddonSidebar()}}Extra information about a transition.Note that many values here are not currently supported in Firefox: see the [browser compatibility table](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/webNavigation/TransitionQualifier#browser_compatibility) for details.

## Type

Values of this type are strings. Possible values are:

- "client_redirect"
  - : Redirect(s) caused by JavaScript running in the page or a "refresh" pragma in the page's [meta](/en-US/docs/Web/HTML/Element/meta) tag.
- "server_redirect"
  - : Redirect(s) caused by a [3XX HTTP status code](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes#3xx_Redirection) sent from the server.
- "forward_back"
  - : The user used the forward or back button to trigger the navigation.
- "from_address_bar"
  - : The user triggered the navigation from the address bar.

## Browser compatibility

{{Compat}}

{{WebExtExamples}}

> **Note:** This API is based on Chromium's [`chrome.webNavigation`](https://developer.chrome.com/extensions/webNavigation#type-TransitionQualifier) API. This documentation is derived from [`web_navigation.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/web_navigation.json) in the Chromium code.
>
> Microsoft Edge compatibility data is supplied by Microsoft Corporation and is included here under the Creative Commons Attribution 3.0 United States License.

<div class="hidden"><pre>// Copyright 2015 The Chromium Authors. All rights reserved.
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
</pre></div>

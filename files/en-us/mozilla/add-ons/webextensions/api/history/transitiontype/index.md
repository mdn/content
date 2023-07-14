---
title: history.TransitionType
slug: Mozilla/Add-ons/WebExtensions/API/history/TransitionType
page-type: webextension-api-type
browser-compat: webextensions.api.history.TransitionType
---

{{AddonSidebar()}}

This describes how the browser navigated to a particular page. For example, "link" means that the browser navigated to the page because the user clicked a link.

## Type

Values of this type are strings. Possible values are:

- "link"
  - : The user clicked a link in another page.
- "typed"
  - : The user typed the URL into the address bar. This is also used if the user started typing into the address bar, then selected a URL from the suggestions it offered. See also "generated".
- "auto_bookmark"
  - : The user clicked a bookmark or an item in the browser history.
- "auto_subframe"
  - : Any nested iframes that are automatically loaded by their parent.
- "manual_subframe"
  - : Any nested iframes that are loaded as an explicit user action. Loading such an iframe will generate an entry in the back/forward navigation list.
- "generated"
  - : The user started typing in the address bar, then clicked on a suggested entry that didn't contain a URL.
- "auto_toplevel"
  - : The page was passed to the command line or is the start page.
- "form_submit"
  - : The user submitted a form. Note that in some situations, such as when a form uses a script to submit its contents, submitting a form does not result in this transition type.
- "reload"
  - : The user reloaded the page, using the Reload button or by pressing Enter in the address bar. This is also used for session restore and reopening closed tabs.
- "keyword"
  - : The URL was generated using a [keyword search](https://support.mozilla.org/en-US/kb/how-search-from-address-bar) configured by the user.
- "keyword_generated"
  - : Corresponds to a visit generated for a keyword.

## Browser compatibility

{{Compat}}

{{WebExtExamples}}

> **Note:** This API is based on Chromium's [`chrome.history`](https://developer.chrome.com/docs/extensions/reference/history/#type-TransitionType) API. This documentation is derived from [`history.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/history.json) in the Chromium code.

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

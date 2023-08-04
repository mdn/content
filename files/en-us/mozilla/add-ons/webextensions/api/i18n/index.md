---
title: i18n
slug: Mozilla/Add-ons/WebExtensions/API/i18n
page-type: webextension-api
browser-compat: webextensions.api.i18n
---

{{AddonSidebar}}

Functions to internationalize your extension. You can use these APIs to get localized strings from locale files packaged with your extension, find out the browser's current language, and find out the value of its [Accept-Language header](/en-US/docs/Web/HTTP/Content_negotiation#the_accept-language_header).

See the [Internationalization](/en-US/docs/Mozilla/Add-ons/WebExtensions/Internationalization) page for a guide on using this API.

## Types

- {{WebExtAPIRef("i18n.LanguageCode")}}
  - : A [language tag](https://www.rfc-editor.org/rfc/rfc9110.html#name-language-tags) such as `"en-US"` or "`fr`".

## Functions

- {{WebExtAPIRef("i18n.getAcceptLanguages()")}}
  - : Gets the [accept-languages](/en-US/docs/Web/HTTP/Content_negotiation#the_accept-language_header) of the browser. This is different from the locale used by the browser. To get the locale, use {{WebExtAPIRef('i18n.getUILanguage')}}.
- {{WebExtAPIRef("i18n.getMessage()")}}
  - : Gets the localized string for the specified message.
- {{WebExtAPIRef("i18n.getUILanguage()")}}
  - : Gets the UI language of the browser. This is different from {{WebExtAPIRef('i18n.getAcceptLanguages')}} which returns the preferred user languages.
- {{WebExtAPIRef("i18n.detectLanguage()")}}
  - : Detects the language of the provided text using the [Compact Language Detector](https://github.com/CLD2Owners/cld2).

## Browser compatibility

{{Compat}}

{{WebExtExamples("h2")}}

> **Note:** This API is based on Chromium's [`chrome.i18n`](https://developer.chrome.com/docs/extensions/reference/i18n/) API. This documentation is derived from [`i18n.json`](https://chromium.googlesource.com/chromium/src/+/refs/heads/main/extensions/common/api/i18n.json) in the Chromium code.

## See also

- [Internationalization](/en-US/docs/Mozilla/Add-ons/WebExtensions/Internationalization): a guide to using the WebExtension i18n system.
- [Locale-Specific Message reference](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/i18n/Locale-Specific_Message_reference): extensions supply locale-specific strings in files called `messages.json`. This page describes the format of `messages.json`.

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

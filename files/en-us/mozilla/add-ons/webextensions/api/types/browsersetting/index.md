---
title: BrowserSetting
slug: Mozilla/Add-ons/WebExtensions/API/types/BrowserSetting
tags:
  - API
  - Add-ons
  - BrowserSetting
  - Extensions
  - Reference
  - Type
  - Types
  - WebExtensions
browser-compat: webextensions.api.types.BrowserSetting
---
{{AddonSidebar()}}

A `BrowserSetting` is an object representing a browser setting.

It provides methods to set and get the setting's underlying value, to clear any change you've made to it, and to listen for changes to its value.

Note that while this object is based on the [ChromeSetting](https://developer.chrome.com/docs/extensions/reference/types/#type-ChromeSetting) type, this object does not distinguish between setting the value in normal browsing windows and in private browsing windows. This means that all parts of the API relating to private browsing (such as the `scope` option to `ChromeSetting.set()`) are not implemented.

## Methods

- {{WebExtAPIRef("types.BrowserSetting.get()")}}
  - : Get the current value of the setting, and an enumeration representing how the setting is currently controlled.
- {{WebExtAPIRef("types.BrowserSetting.set()")}}
  - : Set the setting to a new value.
- {{WebExtAPIRef("types.BrowserSetting.clear()")}}
  - : Clear any change made to the setting by this extension.

## Events

- {{WebExtAPIRef("types.BrowserSetting.onChange")}}
  - : Fired when the setting's value changes.

## Browser compatibility

{{Compat}}

{{WebExtExamples}}

> **Note:** This API is based on Chromium's [`chrome.types`](https://developer.chrome.com/docs/extensions/reference/types/) API.

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

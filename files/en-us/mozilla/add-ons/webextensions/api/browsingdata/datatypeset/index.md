---
title: browsingData.DataTypeSet
slug: Mozilla/Add-ons/WebExtensions/API/browsingData/DataTypeSet
page-type: webextension-api-type
browser-compat: webextensions.api.browsingData.DataTypeSet
---

{{AddonSidebar()}}

The **`browsingData.DataTypeSet`** type describes a set of data types.

It contains a number of boolean properties. The name of each property is the name of a particular type of browsing data: "downloads", "history" and so on. All properties are optional.

This type is used:

- in {{WebExtAPIRef("browsingData.remove()")}} to describe which data types to remove
- in {{WebExtAPIRef("browsingData.settings()")}} to describe which data types are currently selected in the browser's "Clear History" feature.

## Type

Values of this type are objects. They contain the following properties:

- `cache` {{optional_inline}}
  - : `boolean`. The browser's cache.
- `cookies` {{optional_inline}}
  - : `boolean`. Cookies acquired while browsing.
- `downloads` {{optional_inline}}
  - : `boolean`. The user's download history.
- `fileSystems` {{optional_inline}}
  - : `boolean`. Website's file systems.
- `formData` {{optional_inline}}
  - : `boolean`. Saved form data, for autocomplete.
- `history` {{optional_inline}}
  - : `boolean`. The user's browsing history.
- `indexedDB` {{optional_inline}}
  - : `boolean`. IndexedDB data.
- `localStorage` {{optional_inline}}
  - : `boolean`. Local storage data.
- `passwords` {{optional_inline}}
  - : `boolean`. Saved passwords, for autocomplete.
- `pluginData` {{optional_inline}}
  - : `boolean`. Stored data associated with plugins.
- `serverBoundCertificates` {{optional_inline}}
  - : `boolean`. Stored server-bound certificates.
- `serviceWorkers` {{optional_inline}}
  - : `boolean`. Data cached by service workers.

## Browser compatibility

{{Compat}}

> **Note:** This API is based on Chromium's [`chrome.browsingData`](https://developer.chrome.com/docs/extensions/reference/browsingData/) API.

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

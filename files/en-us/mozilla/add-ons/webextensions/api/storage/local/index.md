---
title: storage.local
slug: Mozilla/Add-ons/WebExtensions/API/storage/local
tags:
  - API
  - Add-ons
  - Extensions
  - Non-standard
  - Property
  - Reference
  - Storage
  - WebExtensions
  - local
browser-compat: webextensions.api.storage.local
---
{{AddonSidebar()}}

Represents the `local` storage area. Items in `local` storage are local to the machine the extension was installed on.

The browser may restrict the amount of data that an extension can store in the local storage area:

- Chrome limits the extension to 5MB of data using this API unless it has the [`"unlimitedStorage"` permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#unlimited_storage).
- Firefox enables you to ask for the `"unlimitedStorage"` permission from version 56 onwards. It does not yet restrict the amount of data your extension can store, but will start doing so in a future release. Thus, it's a good idea to ask for the `"unlimitedStorage"` permission now, if you intend to store a large amount of data.

When the extension is uninstalled, its associated local storage is cleared.

Also in Firefox, you can prevent the browser from clearing local storage on uninstall by visiting `about:config` and setting the following two browser preferences to `true`: `"keepUuidOnUninstall"` and `"keepStorageOnUninstall"`. This feature is provided to help developers test their extensions. Extensions themselves are not able to change these preferences.

Although this API is similar to {{domxref("Window.localStorage")}} it is recommended that you don't use `Window.localStorage` in extension code. Firefox will clear data stored by extensions using the localStorage API in various scenarios where users clear their browsing history and data for privacy reasons, while data saved using the `storage.local` API will be correctly persisted in these scenarios.

## Methods

The `local` object implements the methods defined on the {{WebExtAPIRef("storage.StorageArea")}} type:

- {{WebExtAPIRef("storage.StorageArea.get()")}}
  - : Retrieves one or more items from the storage area.
- {{WebExtAPIRef("storage.StorageArea.getBytesInUse()")}}
  - : Gets the amount of storage space (in bytes) used one or more items being stored in the storage area.
- {{WebExtAPIRef("storage.StorageArea.set()")}}
  - : Stores one or more items in the storage area. If the item already exists, its value will be updated. When you set a value, the {{WebExtAPIRef("storage.onChanged")}} event will fire.
- {{WebExtAPIRef("storage.StorageArea.remove()")}}
  - : Removes one or more items from the storage area.
- {{WebExtAPIRef("storage.StorageArea.clear()")}}
  - : Removes all items from the storage area.

## Browser compatibility

{{Compat}}

{{WebExtExamples}}

> **Note:** This API is based on Chromium's [`chrome.storage`](https://developer.chrome.com/extensions/storage#property-local) API. This documentation is derived from [`storage.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/storage.json) in the Chromium code.
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

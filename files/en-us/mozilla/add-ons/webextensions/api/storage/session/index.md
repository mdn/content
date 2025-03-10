---
title: storage.session
slug: Mozilla/Add-ons/WebExtensions/API/storage/session
page-type: webextension-api-property
browser-compat: webextensions.api.storage.session
---

{{AddonSidebar}}

Represents the `session` storage area. Items in `session` storage are stored in memory for the duration of the browser session and are not persisted to disk.
By default, it's not exposed to content scripts, but this behavior can be changed through {{WebExtAPIRef("storage.StorageArea.setAccessLevel", "storage.session.setAccessLevel()")}}.

The amount of data that an extension can store in the session storage area is limited to 10 MB, unless stated otherwise in the [browser compatibility table](#browser_compatibility).

When the browser stops, all session storage is cleared. When the extension is uninstalled, its associated session storage is cleared.

## Properties

- {{WebExtAPIRef("storage.session.QUOTA_BYTES")}}
  - : The maximum amount of data (in bytes) that can be stored in session storage.

## Methods

The `session` object implements the methods defined on the {{WebExtAPIRef("storage.StorageArea")}} type:

- {{WebExtAPIRef("storage.StorageArea.get()", "storage.session.get()")}}
  - : Retrieves one or more items from the storage area.
- {{WebExtAPIRef("storage.StorageArea.getBytesInUse()", "storage.session.getBytesInUse()")}}
  - : Gets the amount of storage space (in bytes) used for one or more items in the storage area.
- {{WebExtAPIRef("storage.StorageArea.set()", "storage.session.set()")}}
  - : Stores one or more items in the storage area. If the item exists, its value is updated.
- {{WebExtAPIRef("storage.StorageArea.setAccessLevel", "storage.session.setAccessLevel()")}}
  - : Sets the access level for the storage area.
- {{WebExtAPIRef("storage.StorageArea.remove()", "storage.session.remove()")}}
  - : Removes one or more items from the storage area.
- {{WebExtAPIRef("storage.StorageArea.clear()", "storage.session.clear()")}}
  - : Removes all items from the storage area.

## Events

The `session` object implements the events defined on the {{WebExtAPIRef("storage.StorageArea")}} type:

- {{WebExtAPIRef("storage.StorageArea.onChanged", "storage.session.onChanged")}}
  - : Fires when one or more items in the storage area change.

{{WebExtExamples}}

## Browser compatibility

{{Compat}}

> [!NOTE]
> This API is based on Chromium's [`chrome.storage`](https://developer.chrome.com/docs/extensions/reference/api/storage#property-session) API. This documentation is derived from [`storage.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/storage.json) in the Chromium code.

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

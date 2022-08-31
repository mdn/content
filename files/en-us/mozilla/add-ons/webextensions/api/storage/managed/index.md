---
title: storage.managed
slug: Mozilla/Add-ons/WebExtensions/API/storage/managed
tags:
  - API
  - Add-ons
  - Extensions
  - Non-standard
  - Property
  - Reference
  - Storage
  - WebExtensions
  - managed
browser-compat: webextensions.api.storage.managed
---
{{AddonSidebar()}}

A {{WebExtAPIRef("storage.StorageArea")}} object that represents the `managed` storage area. Items in `managed` storage are set by the domain administrator or other native applications installed on the user's computer and are read-only for the extension. Trying to modify this storage area results in an error.

## Provisioning managed storage

The procedure for provisioning managed storage varies between browsers. For Chrome instructions, see the ["Manifest for storage areas"](https://developer.chrome.com/docs/extensions/mv3/manifest/storage/) article.

For Firefox, you need to create a JSON manifest file in a specific format and location. For the details of manifest syntax and location, see [Native manifests](/en-US/docs/Mozilla/Add-ons/WebExtensions/Native_manifests).

Here's an example manifest:

```json
{
  "name": "favorite-color-examples@mozilla.org",
  "description": "ignored",
  "type": "storage",
  "data":
  {
    "color": "management thinks it should be blue!"
  }
}
```

Given this manifest, the "favorite-color-examples\@mozilla.org" extension could access the data using code like this:

```js
let storageItem = browser.storage.managed.get('color');
storageItem.then((res) => {
  console.log(`Managed color is: ${res.color}`);
});
```

## Methods

The `managed` object implements the methods defined on the {{WebExtAPIRef("storage.StorageArea")}} type:

- {{WebExtAPIRef("storage.StorageArea.get()", "storage.managed.get()")}}
  - : Retrieves one or more items from the storage area.
- {{WebExtAPIRef("storage.StorageArea.getBytesInUse()", "storage.managed.getBytesInUse()")}}
  - : Gets the amount of storage space (in bytes) used for one or more items in the storage area.

## Events

The `managed` object implements the events defined on the {{WebExtAPIRef("storage.StorageArea")}} type:

- {{WebExtAPIRef("storage.StorageArea.onChanged", "storage.managed.onChanged")}}
  - : Fires when one or more items in the storage area change.

{{WebExtExamples}}

## Browser compatibility

{{Compat}}

> **Note:** This API is based on Chromium's [`chrome.storage`](https://developer.chrome.com/docs/extensions/reference/storage/#property-managed) API. This documentation is derived from [`storage.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/storage.json) in the Chromium code.

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

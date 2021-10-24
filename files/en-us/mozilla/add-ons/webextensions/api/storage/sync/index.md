---
title: storage.sync
slug: Mozilla/Add-ons/WebExtensions/API/storage/sync
tags:
  - API
  - Add-ons
  - Extensions
  - Non-standard
  - Property
  - Reference
  - Storage
  - Sync
  - WebExtensions
browser-compat: webextensions.api.storage.sync
---
{{AddonSidebar()}}

Represents the `sync` storage area. Items in `sync` storage are synced by the browser, and are available across all instances of that browser that the user is logged into (e.g. via Firefox sync, or a Google account), across different devices.

For Firefox a user must have `Add-ons` checked under the "Sync Settings" options in `"about:preferences"`.

Note that the implementation of `storage.sync` in Firefox relies on the Add-on ID. If you use `storage.sync`, you must set an ID for your extension using the [`browser_specific_settings`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) manifest.json key.

The main use case of this API is to store preferences about your extension and allow the user to sync them to different profiles.

## Storage quotas for sync data

The browser enforces limits on the amount of data each extension is allowed to store in the sync area:

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Description</th>
      <th scope="col">Value in bytes</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Maximum total size</td>
      <td>
        The maximum total amount of data that each extension is allowed to store
        in the sync storage area, as measured by the JSON stringification of
        every value plus every key's length.
      </td>
      <td>102400</td>
    </tr>
    <tr>
      <td>Maximum item size</td>
      <td>
        The maximum size of any one item that each extension is allowed to store
        in the sync storage area, as measured by the JSON stringification of the
        item's value plus the length of its key.
      </td>
      <td>8192</td>
    </tr>
    <tr>
      <td>Maximum number of items</td>
      <td>
        The maximum number of items that each extension is allowed to store in
        the sync storage area.
      </td>
      <td><p>512</p></td>
    </tr>
  </tbody>
</table>

If an extension attempts to store items that exceed these limits, the call to [`storage.sync.set()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/storage/StorageArea/set) will be rejected with an error. An extension can use [`storage.sync.getBytesInUse()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/storage/StorageArea/getBytesInUse) to find out how much of its maximum total quota it is currently using.

## Methods

The `sync` object implements the methods defined on the {{WebExtAPIRef("storage.StorageArea")}} type:

- {{WebExtAPIRef("storage.StorageArea.get()", "storage.<var>StorageArea</var>.get()")}}
  - : Retrieves one or more items from the storage area.
- {{WebExtAPIRef("storage.StorageArea.getBytesInUse()", "storage.<var>StorageArea</var>.getBytesInUse()")}}
  - : Gets the amount of storage space (in bytes) used one or more items being stored in the storage area.
- {{WebExtAPIRef("storage.StorageArea.set()", "storage.<var>StorageArea</var>.set()")}}
  - : Stores one or more items in the storage area. If the item already exists, its value will be updated.
- {{WebExtAPIRef("storage.StorageArea.remove()", "storage.<var>StorageArea</var>.remove()")}}
  - : Removes one or more items from the storage area.
- {{WebExtAPIRef("storage.StorageArea.clear()", "storage.<var>StorageArea</var>.clear()")}}
  - : Removes all items from the storage area.

## Browser compatibility

{{Compat}}

{{WebExtExamples}}

> **Note:** This API is based on Chromium's [`chrome.storage`](https://developer.chrome.com/extensions/storage#property-sync) API. This documentation is derived from [`storage.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/storage.json) in the Chromium code.
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

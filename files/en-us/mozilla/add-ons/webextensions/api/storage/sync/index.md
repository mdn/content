---
title: storage.sync
slug: Mozilla/Add-ons/WebExtensions/API/storage/sync
page-type: webextension-api-property
browser-compat: webextensions.api.storage.sync
---

{{AddonSidebar}}

Represents the `sync` storage area. Items in `sync` storage are synced by the browser. The data is then available on all instances of the browser the user is logged into (for example, when using a Mozilla account on desktop versions of Firefox or a Google account on Chrome) across different devices.

For desktop Firefox, a user must have `Add-ons` selected in the "Sync" section in `"about:preferences"`. Firefox for Android does not synchronize data with the user's account. See [Firefox bug 1625257](https://bugzil.la/1625257).

The implementation of `storage.sync` in Firefox relies on the Add-on ID. If you use `storage.sync`, you must set an ID for your extension using the [`browser_specific_settings`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) manifest.json key.

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
        The maximum number of items that each extension can store in the sync storage
        area.
      </td>
      <td><p>512</p></td>
    </tr>
  </tbody>
</table>

If an extension attempts to store items that exceed these limits, calls to {{WebExtAPIRef("storage.StorageArea.set()", "storage.sync.set()")}} are rejected with an error. An extension can use {{WebExtAPIRef("storage.StorageArea.getBytesInUse()", "storage.sync.getBytesInUse()")}} to find out how much of its quota is in use.

## Synchronization process

In Firefox, extension data is synced every 10 minutes or whenever the user selects **Sync Now** (in **Settings** > **Sync** or from the Mozilla account icon). When the browser performs a sync, for each key stored, it:

- compares the value on the server with the value at the last sync; if they are different, the value from the server is written to the key in the browser's sync storage.
- compares the browser's sync storage values with the value on the server; if they are different, writes the browser's key value to the server.

This means that, for each key, a change on the server takes precedence over a change in the browser's sync storage.

This mechanism is generally OK for data such as user preferences or other global settings changed by the user.

However, a key's value can be updated on one browser and synchronized then updated on a second browser before the second browser is synchronized, resulting in the local update being overwritten during sync. This mechanism is, therefore, not ideal for data aggregated across devices, such as a count of page views or how many times an option is used. To handle such cases, use {{WebExtAPIRef("storage.StorageArea.onChanged", "storage.sync.onChanged")}} to listen for sync updates from the server (for example, a count of page views on another browser instance). Then adjust the value locally to take the remote value into account (for example, update the total views based on the remote count and new local count).

## Methods

The `sync` object implements the methods defined on the {{WebExtAPIRef("storage.StorageArea")}} type:

- {{WebExtAPIRef("storage.StorageArea.get()", "storage.sync.get()")}}
  - : Retrieves one or more items from the storage area.
- {{WebExtAPIRef("storage.StorageArea.getBytesInUse()", "storage.sync.getBytesInUse()")}}
  - : Gets the amount of storage space (in bytes) used for one or more items in the storage area.
- {{WebExtAPIRef("storage.StorageArea.set()", "storage.sync.set()")}}
  - : Stores one or more items in the storage area. If the item exists, its value is updated.
- {{WebExtAPIRef("storage.StorageArea.remove()", "storage.sync.remove()")}}
  - : Removes one or more items from the storage area.
- {{WebExtAPIRef("storage.StorageArea.clear()", "storage.sync.clear()")}}
  - : Removes all items from the storage area.

## Events

The `sync` object implements the events defined on the {{WebExtAPIRef("storage.StorageArea")}} type:

- {{WebExtAPIRef("storage.StorageArea.onChanged", "storage.sync.onChanged")}}
  - : Fires when one or more items in the storage area change.

{{WebExtExamples}}

## Browser compatibility

{{Compat}}

> [!NOTE]
> This API is based on Chromium's [`chrome.storage`](https://developer.chrome.com/docs/extensions/reference/api/storage#property-sync) API. This documentation is derived from [`storage.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/storage.json) in the Chromium code.

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

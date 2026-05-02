---
title: storage.onChanged
slug: Mozilla/Add-ons/WebExtensions/API/storage/onChanged
page-type: webextension-api-event
browser-compat: webextensions.api.storage.onChanged
sidebar: addonsidebar
---

Fires when one or more items in any of the {{WebExtAPIRef('storage.StorageArea', 'storage areas'}} changes.
If you only need to listen for changes in one storage area, use {{WebExtAPIRef('storage.StorageArea.onChanged')}} instead.

Fired when {{WebExtAPIRef('storage.StorageArea.set','storageArea.set')}}, {{WebExtAPIRef('storage.StorageArea.remove','storageArea.remove')}}, or {{WebExtAPIRef('storage.StorageArea.clear','storageArea.clear')}} executes against any of the {{WebExtAPIRef('storage.StorageArea', 'storage areas'}}.

> [!NOTE]
> In Firefox, the listener receives all the keys from a storage area where {{WebExtAPIRef('storage.StorageArea.set','storageArea.set')}} executes. The listener may be invoked when there is no change to the data. To find details of the changed items, examine each key's {{WebExtAPIRef('storage.StorageChange')}} object. See [Firefox bug 1833153](https://bugzil.la/1833153).

> [!NOTE]
> Firefox does not fire this event for changes to `storage.managed` because managed storage is only read on browser startup (from the [JSON manifest (native manifest) file](/en-US/docs/Mozilla/Add-ons/WebExtensions/Native_manifests#managed_storage_manifests) or [`3rdparty` enterprise policy](https://mozilla.github.io/policy-templates/#3rdparty)).

## Syntax

```js-nolint
browser.storage.onChanged.addListener(listener)
browser.storage.onChanged.removeListener(listener)
browser.storage.onChanged.hasListener(listener)
```

Events have three functions:

- `addListener(listener)`
  - : Adds a listener to this event.
- `removeListener(listener)`
  - : Stop listening to this event. The `listener` argument is the listener to remove.
- `hasListener(listener)`
  - : Check whether `listener` is registered for this event. Returns `true` if it is listening, `false` otherwise.

## addListener syntax

### Parameters

- `listener`
  - : The function called when this event occurs. The function is passed these arguments:
    - `changes`
      - : `object`. Object describing the change. The name of each property is the name of each key. The value of each key is a {{WebExtAPIRef('storage.StorageChange')}} object describing the change to that item.
    - `areaName`
      - : `string`. The name of the storage area (`"local"`, `"managed"`, `"session"`, or `"sync"`) to which the changes were made.

## Examples

```js
/*
Log the storage area that changed,
then for each item changed,
log its old value and its new value.
*/
function logStorageChange(changes, area) {
  console.log(`Change in storage area: ${area}`);

  const changedItems = Object.keys(changes);

  for (const item of changedItems) {
    console.log(`${item} has changed:`);
    console.log("Old value: ", changes[item].oldValue);
    console.log("New value: ", changes[item].newValue);
  }
}

browser.storage.onChanged.addListener(logStorageChange);
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}

> [!NOTE]
> This API is based on Chromium's [`chrome.storage`](https://developer.chrome.com/docs/extensions/reference/api/storage#event-onChanged) API. This documentation is derived from [`storage.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/storage.json) in the Chromium code.

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

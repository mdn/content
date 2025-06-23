---
title: storage.StorageArea.onChanged
slug: Mozilla/Add-ons/WebExtensions/API/storage/StorageArea/onChanged
page-type: webextension-api-event
browser-compat: webextensions.api.storage.StorageArea.onChanged
---

{{AddonSidebar}}

Fires when one or more items in a storage area change, returning details for the keys that changed. Compared to {{WebExtAPIRef("storage.onChanged")}}, this event enables you to listen for changes in one of the storage areas: `local`, `managed`, `session`, and `sync`.

> [!NOTE]
> In Firefox, the information returned includes all keys within the storage area. Also, the callback may be invoked when there is no change to the underlying data. Details of the changed items are found by examining each returned key's {{WebExtAPIRef('storage.StorageChange')}} object. See [Firefox bug 1833153](https://bugzil.la/1833153).
>
> Firefox only loads changes to managed storage content (from the [JSON manifest (native manifest) file](/en-US/docs/Mozilla/Add-ons/WebExtensions/Native_manifests#managed_storage_manifests) or [`3rdparty` enterprise policy](https://mozilla.github.io/policy-templates/#3rdparty)), when it restarts. Therefore, this event never triggers in Firefox.

## Syntax

```js-nolint
// local can also be sync, managed, or session
browser.storage.local.onChanged.addListener(listener)
browser.storage.local.onChanged.removeListener(listener)
browser.storage.local.onChanged.hasListener(listener)
```

Events have three functions:

- `addListener(listener)`
  - : Adds a listener to this event.
- `removeListener(listener)`
  - : Stops listening to this event. The `listener` argument is the listener to remove.
- `hasListener(listener)`
  - : Checks whether `listener` is registered for this event. Returns `true` if it is listening, `false` otherwise.

## addListener syntax

### Parameters

- `listener`

  - : The function called when this event occurs. The function is passed this argument:

    - `changes`
      - : `object`. Object describing the change. This contains one property for each key that changed. The property name is the name of the key that changed, and its value is a {{WebExtAPIRef('storage.StorageChange')}} object describing the change to that item.

## Examples

```js
/*
Log the old value and its new value of
changes in the local storage.
*/
function logStorageChange(changes) {
  const changedItems = Object.keys(changes);

  for (const item of changedItems) {
    console.log(`${item} has changed:`);
    console.log("Old value: ", changes[item].oldValue);
    console.log("New value: ", changes[item].newValue);
  }
}

browser.storage.local.onChanged.addListener(logStorageChange);
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}

> [!NOTE]
> This API is based on Chromium's [`chrome.storage`](https://developer.chrome.com/docs/extensions/reference/api/storage#event-StorageArea-onChanged) API. This documentation is derived from [`storage.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/storage.json) in the Chromium code.

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

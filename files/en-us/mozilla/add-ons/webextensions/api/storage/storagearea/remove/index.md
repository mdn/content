---
title: StorageArea.remove()
slug: Mozilla/Add-ons/WebExtensions/API/storage/StorageArea/remove
tags:
  - API
  - Add-ons
  - Extensions
  - Method
  - Non-standard
  - Reference
  - Storage
  - StorageArea
  - WebExtensions
  - remove
browser-compat: webextensions.api.storage.StorageArea.remove
---

{{AddonSidebar()}}

Removes one or more items from the storage area.

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js-nolint
let removingItem = browser.storage.<storageType>.remove(
  keys             // string, or array of strings
)
```

`<storageType>` will be one of the writable storage types — {{WebExtAPIRef("storage.sync")}} or {{WebExtAPIRef("storage.local")}}.

### Parameters

- `keys`
  - : A string, or array of strings, representing the key(s) of the item(s) to be removed.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be fulfilled with no arguments if the operation succeeded. If the operation failed, the promise will be rejected with an error message.

## Safari empty key bug

Safari has a bug which prevents this method from deleting the data associated with the empty key `""`. Specifically, `StorageArea.remove("")` and `StorageArea.remove([""])` will both throw `Error: Invalid empty key found in array passed to storage.StorageArea.remove()`. Instead, storage can be cleared via two other alternatives:

- call to {{WebExtAPIRef("storage.StorageArea.clear")}} which will remove all data from the storge area, including this recod, or
- call to {{WebExtAPIRef("storage.StorageArea.set")}} to overwrite this this data with some blank value like empty string `""` (record consumes 2 bytes from quota), or number `0` (record consmes 1 byte from quota).

## Browser compatibility

{{Compat}}

## Examples

Remove a single item:

```js
function onRemoved() {
  console.log("OK");
}

function onError(e) {
  console.log(e);
}

let removeKitten = browser.storage.sync.remove("kitten");
removeKitten.then(onRemoved, onError);
```

{{WebExtExamples}}

> **Note:** This API is based on Chromium's [`chrome.storage`](https://developer.chrome.com/docs/extensions/reference/storage/) API. This documentation is derived from [`storage.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/storage.json) in the Chromium code.
>
> Microsoft Edge compatibility data is supplied by Microsoft Corporation and is included here under the Creative Commons Attribution 3.0 United States License.

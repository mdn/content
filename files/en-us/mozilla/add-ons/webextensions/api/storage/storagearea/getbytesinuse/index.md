---
title: StorageArea.getBytesInUse()
slug: Mozilla/Add-ons/WebExtensions/API/storage/StorageArea/getBytesInUse
page-type: webextension-api-function
browser-compat: webextensions.api.storage.StorageArea.getBytesInUse
---

{{AddonSidebar()}}

Gets the amount of storage space, in bytes, used one or more items being stored in the storage area.

This function only exists in browser.storage.sync
It does not exist in browser.storage.local
See <https://bugzil.la/1385832>

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js-nolint
let gettingSpace = browser.storage.<storageType>.getBytesInUse(
  keys                      // null, string, or array of strings
)
```

`<storageType>` can only be {{WebExtAPIRef("storage.sync")}}, not {{WebExtAPIRef("storage.local")}} because of [this bug](https://bugzil.la/1385832).

### Parameters

- `keys`
  - : A key (string) or keys (an array of strings) to identify the item(s) whose storage space you want to retrieve. If an empty array is passed in, 0 will be returned. If you pass `null` or `undefined` here, the function will return the space used by the entire storage area.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be fulfilled with an integer, `bytesUsed`, representing the storage space used by the objects that were specified in `keys`. If the operation failed, the promise will be rejected with an error message.

## Browser compatibility

{{Compat}}

{{WebExtExamples}}

> **Note:** This API is based on Chromium's [`chrome.storage`](https://developer.chrome.com/docs/extensions/reference/storage/) API. This documentation is derived from [`storage.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/storage.json) in the Chromium code.

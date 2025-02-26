---
title: StorageArea.clear()
slug: Mozilla/Add-ons/WebExtensions/API/storage/StorageArea/clear
page-type: webextension-api-function
browser-compat: webextensions.api.storage.StorageArea.clear
---

{{AddonSidebar}}

Removes all items from the storage area.

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js-nolint
let clearing = browser.storage.<storageType>.clear()
```

Where `<storageType>` is one of the writable storage types — {{WebExtAPIRef("storage.local")}}, {{WebExtAPIRef("storage.session")}}, or {{WebExtAPIRef("storage.sync")}}

### Parameters

None.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be fulfilled with no arguments if the operation succeeded. If the operation failed, the promise will be rejected with an error message.

## Browser compatibility

{{Compat}}

## Examples

```js
function onCleared() {
  console.log("OK");
}

function onError(e) {
  console.log(e);
}

let clearStorage = browser.storage.local.clear();
clearStorage.then(onCleared, onError);
```

{{WebExtExamples}}

> [!NOTE]
> This API is based on Chromium's [`chrome.storage`](https://developer.chrome.com/docs/extensions/reference/api/storage) API. This documentation is derived from [`storage.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/storage.json) in the Chromium code.

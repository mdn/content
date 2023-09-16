---
title: StorageArea.set()
slug: Mozilla/Add-ons/WebExtensions/API/storage/StorageArea/set
page-type: webextension-api-function
browser-compat: webextensions.api.storage.StorageArea.set
---

{{AddonSidebar()}}

Stores one or more items in the storage area, or update existing items.

When you store or update a value using this API, the {{WebExtAPIRef("storage.onChanged")}} event fires.

Note that when storing items in the [`sync`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/storage/sync) storage area, the browser enforces quotas on the amount of data each extension can store. See [Storage quotas for sync data](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/storage/sync#storage_quotas_for_sync_data).

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js-nolint
let settingItem = browser.storage.<storageType>.set(
  keys             // object
)
```

`<storageType>` will be one of the writable storage types — {{WebExtAPIRef("storage.sync")}} or {{WebExtAPIRef("storage.local")}}.

### Parameters

- `keys`

  - : An object containing one or more key/value pairs to be stored in storage. If an item already exists, its value will be updated.

    Values can be [primitive](/en-US/docs/Glossary/Primitive) (such as a number, boolean, or string), {{jsxref("Array")}}, or {{jsxref("Object")}} types.

    It's generally not possible to store other types, such as `Function`, `Date`, `RegExp`, `Set`, `Map`, `ArrayBuffer`, and so on. Some of these unsupported types will restore as an empty object, and some cause `set()` to throw an error. The exact behavior here is browser-specific.

### Return value

A {{jsxref("Promise")}} that will be fulfilled with no arguments if the operation succeeded. If the operation failed, the promise will be rejected with an error message.

## Browser compatibility

{{Compat}}

## Examples

```js
function setItem() {
  console.log("OK");
}

function gotKitten(item) {
  console.log(`${item.kitten.name} has ${item.kitten.eyeCount} eyes`);
}

function gotMonster(item) {
  console.log(`${item.monster.name} has ${item.monster.eyeCount} eyes`);
}

function onError(error) {
  console.log(error);
}

// define 2 objects
let monster = {
  name: "Kraken",
  tentacles: true,
  eyeCount: 10,
};

let kitten = {
  name: "Moggy",
  tentacles: false,
  eyeCount: 2,
};

// store the objects
browser.storage.local.set({ kitten, monster }).then(setItem, onError);

browser.storage.local.get("kitten").then(gotKitten, onError);
browser.storage.local.get("monster").then(gotMonster, onError);
```

{{WebExtExamples}}

> **Note:** This API is based on Chromium's [`chrome.storage`](https://developer.chrome.com/docs/extensions/reference/storage/) API. This documentation is derived from [`storage.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/storage.json) in the Chromium code.

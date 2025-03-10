---
title: StorageArea.set()
slug: Mozilla/Add-ons/WebExtensions/API/storage/StorageArea/set
page-type: webextension-api-function
browser-compat: webextensions.api.storage.StorageArea.set
---

{{AddonSidebar}}

Stores one or more items in the storage area or updates stored items.

When you store or update a value using this API, the {{WebExtAPIRef("storage.onChanged")}} event fires.

Note that when storing items in the [`sync`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/storage/sync) storage area, the browser enforces quotas on the amount of data each extension can store. See [Storage quotas for sync data](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/storage/sync#storage_quotas_for_sync_data).

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js-nolint
let settingItem = browser.storage.<storageType>.set(
  keys             // object
)
```

Where `<storageType>` is one of the writable storage types — {{WebExtAPIRef("storage.local")}}, {{WebExtAPIRef("storage.session")}}, or {{WebExtAPIRef("storage.sync")}}.

### Parameters

- `keys`

  - : An object containing one or more key/value pairs to be stored. If an item is in storage, its value is updated.

    Values can be [primitive](/en-US/docs/Glossary/Primitive) (such as a number, boolean, or string), {{jsxref("Array")}}, or {{jsxref("Object")}} types.

    It's generally not possible to store other types, such as `Function`, `Date`, `RegExp`, `Set`, `Map`, `ArrayBuffer`, and so on. Some unsupported types restore as an empty object, while others cause `set()` to throw an error. The behavior is browser-specific.

> [!NOTE]
> If you want to remove keys from storage, use {{WebExtAPIRef("storage.storageArea.remove")}}. If you want to overwrite a value with a void value, use `null`, i.e., `key: null`.

### Return value

A {{jsxref("Promise")}} that is fulfilled with no arguments if the operation succeeds. If the operation fails, the promise is rejected with an error message.

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

## Browser compatibility

{{Compat}}

> [!NOTE]
> This API is based on Chromium's [`chrome.storage`](https://developer.chrome.com/docs/extensions/reference/api/storage) API. This documentation is derived from [`storage.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/storage.json) in the Chromium code.

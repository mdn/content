---
title: StorageArea.getKeys()
slug: Mozilla/Add-ons/WebExtensions/API/storage/StorageArea/getKeys
page-type: webextension-api-function
browser-compat: webextensions.api.storage.StorageArea.getKeys
sidebar: addonsidebar
---

Retrieves the keys of all items in a storage area.

## Syntax

```js-nolint
let results = browser.storage.<storageType>.getKeys();
```

Where `<storageType>` is one of the storage types: {{WebExtAPIRef("storage.sync", "sync")}}, {{WebExtAPIRef("storage.local", "local")}}, {{WebExtAPIRef("storage.session", "session")}}, or {{WebExtAPIRef("storage.managed", "managed")}}.

### Parameters

This method takes no parameters.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that resolves to an array containing storage item keys.

If the operation fails, the promise is rejected with an error message.

If managed storage is not set, `undefined` is returned.

> [!WARNING]
> In Firefox, if an extension's managed storage has not been configured (see [Enterprise policies and extensions](/en-US/docs/Mozilla/Add-ons/WebExtensions/Enterprise_policies)), an exception is thrown when using this function to access managed storage (see [Firefox bug 1868153](https://bugzil.la/1868153)). This issue can be avoided by catching the error.

## Examples

Suppose storage contains two items:

```js
// storage contains two items, "kitten" and "monster"
browser.storage.local.set({
  kitten: { name: "Mog", eats: "mice" },
  monster: { name: "Kraken", eats: "people" },
});
```

Retrieve keys of all items in storage.local and log the result.

```js
browser.storage.local
  .getKeys()
  .then((keys) => console.log(keys)) // [ "kitten", "monster" ]
  .catch((err) => console.error(`Error: ${err}`));
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}

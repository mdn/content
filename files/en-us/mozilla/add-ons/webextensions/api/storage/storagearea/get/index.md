---
title: StorageArea.get()
slug: Mozilla/Add-ons/WebExtensions/API/storage/StorageArea/get
page-type: webextension-api-function
browser-compat: webextensions.api.storage.StorageArea.get
---

{{AddonSidebar}}

Retrieves one or more items from the storage area.

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js-nolint
let results = browser.storage.<storageType>.get(
  keys    // null, string, object or array of strings
)
```

Where `<storageType>` is one of the storage types — {{WebExtAPIRef("storage.sync", "sync")}}, {{WebExtAPIRef("storage.local", "local")}}, {{WebExtAPIRef("storage.session", "session")}}, or {{WebExtAPIRef("storage.managed", "managed")}}.

### Parameters

- `keys`
  - : A key (`string`) or keys (an array of strings, _or_ an object specifying default values) to identify the item(s) to be retrieved from storage. If you pass an empty object or array here, an empty object will be retrieved. If you pass `null`, or an undefined value, the entire storage contents will be retrieved.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that resolves to a `results` object, containing a key-value pair for every key in `keys` found in the storage area. When `keys` is an object, any key that isn't found in storage takes the default value from the `keys` object.

If the operation fails, the promise is rejected with an error message.

If managed storage is not set, `undefined` is returned.

> [!WARNING]
> In Firefox, if an extension's managed storage has not been configured with a [native manifest](/en-US/docs/Mozilla/Add-ons/WebExtensions/Native_manifests#managed_storage_manifests) or using the [`3rdparty` enterprise policy](https://mozilla.github.io/policy-templates/#3rdparty), an exception is thrown when using this function to access managed storage (see [Firefox bug 1868153](https://bugzil.la/1868153)). This issue can be avoided by catching the error. This issue is related to the lack of support for the [`storage.managed_schema`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/storage) manifest key (see [Firefox bug 1771731](https://bugzil.la/1771731)).

## Examples

Suppose storage contains two items:

```js
// storage contains two items,
// "kitten" and "monster"
browser.storage.local.set({
  kitten: { name: "Mog", eats: "mice" },
  monster: { name: "Kraken", eats: "people" },
});
```

Define success and failure handlers for the promise:

```js
function onGot(item) {
  console.log(item);
}

function onError(error) {
  console.log(`Error: ${error}`);
}
```

With no `keys` argument, retrieve everything:

```js
let gettingItem = browser.storage.local.get();
gettingItem.then(onGot, onError);

// -> Object { kitten: Object, monster: Object }
```

With an empty `keys` argument, return nothing:

```js
// with an empty array, retrieve nothing
let gettingItem = browser.storage.local.get([]);
gettingItem.then(onGot, onError);

// -> Object { }
```

With the name of an object, retrieve the match:

```js
let gettingItem = browser.storage.local.get("kitten");
gettingItem.then(onGot, onError);

// -> Object { kitten: Object }
```

With an array of object names, retrieve all matches:

```js
let gettingItem = browser.storage.local.get([
  "kitten",
  "monster",
  "grapefruit",
]);
gettingItem.then(onGot, onError);

// -> Object { kitten: Object, monster: Object }
```

With an object with object names as keys and the default value as value:

```js
let gettingItem = browser.storage.local.get({
  kitten: "no kitten",
  monster: "no monster",
  grapefruit: {
    name: "Grape Fruit",
    eats: "Water",
  },
});

// -> Object { kitten: Object, monster: Object, grapefruit: Object }
```

{{WebExtExamples}}

### Chrome examples

```js
chrome.storage.local.get("kitten", (items) => {
  console.log(items.kitten); // -> {name:"Mog", eats:"mice"}
});
```

Or using a Promise

```js
let gettingItem = new Promise((resolve) =>
  chrome.storage.local.get("kitten", resolve),
);
gettingItem.then(onGot); // -> Object { kitten: Object }
```

## Browser compatibility

{{Compat}}

> [!NOTE]
> This API is based on Chromium's [`chrome.storage`](https://developer.chrome.com/docs/extensions/reference/api/storage) API. This documentation is derived from [`storage.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/storage.json) in the Chromium code.

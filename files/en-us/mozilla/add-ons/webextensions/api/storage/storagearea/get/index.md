---
title: StorageArea.get()
slug: Mozilla/Add-ons/WebExtensions/API/storage/StorageArea/get
tags:
  - API
  - Add-ons
  - Extensions
  - JavaScript
  - Method
  - Non-standard
  - Reference
  - Storage
  - StorageArea
  - Web
  - WebExtensions
  - get
browser-compat: webextensions.api.storage.StorageArea.get
---
{{AddonSidebar()}}

Retrieves one or more items from the storage area.

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js
let results = browser.storage.<storageType>.get(
  keys    // null, string, object or array of strings
)
```

`<storageType>` will be one of the writable storage types — {{WebExtAPIRef("storage.sync", "sync")}}, {{WebExtAPIRef("storage.local", "local")}}, or {{WebExtAPIRef("storage.managed", "managed")}}.

### Parameters

- `keys`
  - : A key (`string`) or keys (an array of strings, _or_ an object specifying default values) to identify the item(s) to be retrieved from storage. If you pass an empty object or array here, an empty object will be retrieved. If you pass `null`, or an undefined value, the entire storage contents will be retrieved.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that resolves to a `results` object, containing every object in `keys` that was found in the storage area. If `keys` is an object, keys that are not found in the storage area will have their values given by the `keys` object.

If the operation failed, the promise is rejected with an error message.

If managed storage is not set, `undefined` will be returned.

> **Warning:** When used within a content script in Firefox versions prior to 52, the Promise returned by `browser.storage.local.get()` is fulfilled with an Array containing one Object. The Object in the Array contains the `keys` found in the storage area, as described above.
>
> The Promise is correctly fulfilled with an Object when used in the background context (background scripts, popups, options pages, etc.).
>
> When this API is used as `chrome.storage.local.get()`, it correctly passes an Object to the callback function.

## Browser compatibility

{{Compat}}

## Examples

Suppose storage contains two items:

```js
// storage contains two items,
// "kitten" and "monster"
browser.storage.local.set({
  kitten:  {name:"Mog", eats:"mice"},
  monster: {name:"Kraken", eats:"people"}
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
let gettingItem = browser.storage.local.get(["kitten", "monster", "grapefruit"]);
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
    eats: "Water"
  }
});

// -> Object { kitten: Object, monster: Object, grapefruit: Object }
```

{{WebExtExamples}}

### Chrome examples

```js
chrome.storage.local.get("kitten", (items) => {
  console.log(items.kitten);  // -> {name:"Mog", eats:"mice"}
});
```

Or with an arrow function

```js
chrome.storage.local.get("kitten", (items) => {
  console.log(items.kitten); // -> {name:"Mog", eats:"mice"}
});
```

Or using a Promise

```js
let gettingItem = new Promise((resolve) => chrome.storage.local.get("kitten", resolve));
gettingItem.then(onGot); // -> Object { kitten: Object }
```

> **Note:** This API is based on Chromium's [`chrome.storage`](https://developer.chrome.com/docs/extensions/reference/storage/) API. This documentation is derived from [`storage.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/storage.json) in the Chromium code.
>
> Microsoft Edge compatibility data is supplied by Microsoft Corporation and is included here under the Creative Commons Attribution 3.0 United States License.

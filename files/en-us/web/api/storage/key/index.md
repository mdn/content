---
title: "Storage: key() method"
short-title: key()
slug: Web/API/Storage/key
page-type: web-api-instance-method
browser-compat: api.Storage.key
---

{{APIRef("Web Storage API")}}

The **`key()`** method of the {{domxref("Storage")}} interface,
when passed a number n, returns the name of the nth key in a given `Storage`
object. The order of keys is user-agent defined, so you should not rely on it.

## Syntax

```js-nolint
key(index)
```

### Parameters

- `index`
  - : An integer representing the number of the key you want to get the name of. This is a
    zero-based index.

### Return value

A string containing the name of the key. If the index does not exist,
`null` is returned.

## Examples

The following function iterates over the local storage keys:

```js
function forEachKey(callback) {
  for (let i = 0; i < localStorage.length; i++) {
    callback(localStorage.key(i));
  }
}
```

The following function iterates over the local storage keys and gets the value set for
each key:

```js
for (let i = 0; i < localStorage.length; i++) {
  console.log(localStorage.getItem(localStorage.key(i)));
}
```

> [!NOTE]
> For a real-world example, see our [Web Storage Demo](https://mdn.github.io/dom-examples/web-storage/).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Storage API](/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)

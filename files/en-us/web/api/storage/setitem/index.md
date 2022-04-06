---
title: Storage.setItem()
slug: Web/API/Storage/setItem
tags:
  - API
  - Method
  - Reference
  - Storage
  - Web Storage
browser-compat: api.Storage.setItem
---
{{APIRef("Web Storage API")}}

The **`setItem()`** method of the {{domxref("Storage")}}
interface, when passed a key name and value, will add that key to the given
`Storage` object, or update that key's value if it already exists.

## Syntax

```js
storage.setItem(keyName, keyValue);
```

### Parameters

- `keyName`
  - : A {{domxref("DOMString")}} containing the name of the key you want to create/update.
- `keyValue`
  - : A {{domxref("DOMString")}} containing the value you want to give the key you are
    creating/updating.

### Return value

{{jsxref("undefined")}}.

### Exceptions

`setItem()` may throw an exception if the storage is full. Developers should make sure to
**always catch possible exceptions from `setItem()`**.

## Example

The following function creates three data items inside local storage.

```js
function populateStorage() {
  localStorage.setItem('bgcolor', 'red');
  localStorage.setItem('font', 'Helvetica');
  localStorage.setItem('image', 'myCat.png');
}
```

> **Note:** To see this used within a real world example, see our [Web Storage Demo](https://mdn.github.io/dom-examples/web-storage/).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Storage.getItem()](/en-US/docs/Web/API/Storage/getItem)
- [Storage.removeItem()](/en-US/docs/Web/API/Storage/removeItem)
- [Using the
  Web Storage API](/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)

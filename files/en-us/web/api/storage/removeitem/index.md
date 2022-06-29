---
title: Storage.removeItem()
slug: Web/API/Storage/removeItem
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - Storage
  - Web Storage
browser-compat: api.Storage.removeItem
---
{{APIRef("Web Storage API")}}

The **`removeItem()`** method of the {{domxref("Storage")}}
interface, when passed a key name, will remove that key from the given
`Storage` object if it exists.
The **`Storage`** interface of the [Web Storage API](/en-US/docs/Web/API/Web_Storage_API) provides access to a
particular domain's session or local storage.

If there is no item associated with the given key, this method will do nothing.

## Syntax

```js
removeItem(keyName)
```

### Parameters

- `keyName`
  - : A string containing the name of the key you want to remove.

### Return value

None ({{jsxref("undefined")}}).

## Examples

The following function creates three data items inside local storage, then removes the
`image` data item.

```js
function populateStorage() {
  localStorage.setItem('bgcolor', 'red');
  localStorage.setItem('font', 'Helvetica');
  localStorage.setItem('image', 'myCat.png');

  localStorage.removeItem('image');
}
```

We can do the same for the session storage.

```js
function populateStorage() {
  sessionStorage.setItem('bgcolor', 'red');
  sessionStorage.setItem('font', 'Helvetica');
  sessionStorage.setItem('image', 'myCat.png');

  sessionStorage.removeItem('image');
}
```

> **Note:** To see this used within a real world example, see our [Web Storage Demo](https://mdn.github.io/dom-examples/web-storage/).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

[Using the Web Storage API](/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)

---
title: Storage.length
slug: Web/API/Storage/length
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Read-only
  - Reference
  - Storage
  - Web Storage
browser-compat: api.Storage.length
---
{{APIRef("Web Storage API")}}

The **`length`** read-only property of the
{{domxref("Storage")}} interface returns the number of data items stored in a given
`Storage` object.

## Value

The number of items stored in the `Storage` object.

## Examples

The following function adds three data items to the local storage for the current
domain, then returns the number of items in the storage:

```js
function populateStorage() {
  localStorage.setItem('bgcolor', 'yellow');
  localStorage.setItem('font', 'Helvetica');
  localStorage.setItem('image', 'cats.png');

  return localStorage.length; // Should return 3
}
```

> **Note:** For a real world example, see our [Web Storage Demo](https://mdn.github.io/dom-examples/web-storage/).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Storage API](/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)

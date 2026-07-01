---
title: "Storage: clear() method"
short-title: clear()
slug: Web/API/Storage/clear
page-type: web-api-instance-method
browser-compat: api.Storage.clear
---

{{APIRef("Web Storage API")}}

The **`clear()`** method of the {{domxref("Storage")}}
interface clears all keys stored in a given `Storage` object.

## Syntax

```js-nolint
clear()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

## Examples

The following function creates three data entries in local storage, and then deletes
them by using `clear()`.

```js
function populateStorage() {
  localStorage.setItem("bgcolor", "red");
  localStorage.setItem("font", "Helvetica");
  localStorage.setItem("image", "miGato.png");

  localStorage.clear();
}
```

> [!NOTE]
> For a real-world example, see our [Web Storage Demo](https://mdn.github.io/dom-examples/web-storage/).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

[Using the Web Storage API](/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)

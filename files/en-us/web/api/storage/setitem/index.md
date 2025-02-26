---
title: "Storage: setItem() method"
short-title: setItem()
slug: Web/API/Storage/setItem
page-type: web-api-instance-method
browser-compat: api.Storage.setItem
---

{{APIRef("Web Storage API")}}

The **`setItem()`** method of the {{domxref("Storage")}}
interface, when passed a key name and value, will add that key to the given
`Storage` object, or update that key's value if it already exists.

## Syntax

```js-nolint
setItem(keyName, keyValue)
```

### Parameters

- `keyName`
  - : A string containing the name of the key you want to create/update.
- `keyValue`
  - : A string containing the value you want to give the key you are
    creating/updating.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- `QuotaExceededError` {{domxref("DOMException")}}
  - : Thrown if the storage run out of disk quota or the user declined to grant you more space.

## Examples

The following function creates three data items inside local storage.

```js
function populateStorage() {
  localStorage.setItem("bgcolor", "red");
  localStorage.setItem("font", "Helvetica");
  localStorage.setItem("image", "myCat.png");
}
```

> [!NOTE]
> To see this used within a real-world example, see our [Web Storage Demo](https://mdn.github.io/dom-examples/web-storage/).

`Storage` only supports storing and retrieving strings. If you want to save other data types, you have to convert them to strings. For plain objects and arrays, you can use {{jsxref("JSON.stringify()")}}.

```js
const person = { name: "Alex" };
localStorage.setItem("user", person);
console.log(localStorage.getItem("user")); // "[object Object]"; not useful!
localStorage.setItem("user", JSON.stringify(person));
console.log(JSON.parse(localStorage.getItem("user"))); // { name: "Alex" }
```

However, there's no generic way to store arbitrary data types. Furthermore, the retrieved object is a [deep copy](/en-US/docs/Glossary/Deep_copy) of the original object and mutations to it do not affect the original object.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Storage.getItem()](/en-US/docs/Web/API/Storage/getItem)
- [Storage.removeItem()](/en-US/docs/Web/API/Storage/removeItem)
- [Using the Web Storage API](/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)

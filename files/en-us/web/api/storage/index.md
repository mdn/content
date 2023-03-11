---
title: Storage
slug: Web/API/Storage
page-type: web-api-interface
browser-compat: api.Storage
---

{{APIRef("Web Storage API")}}

The **`Storage`** interface of the [Web Storage API](/en-US/docs/Web/API/Web_Storage_API) provides access to a particular domain's session or local storage. It allows, for example, the addition, modification, or deletion of stored data items.

To manipulate, for instance, the session storage for a domain, a call to {{domxref("Window.sessionStorage")}} is made; whereas for local storage the call is made to {{domxref("Window.localStorage")}}.

## Instance properties

- {{domxref("Storage.length")}} {{ReadOnlyInline}}
  - : Returns an integer representing the number of data items stored in the `Storage` object.

## Instance methods

- {{domxref("Storage.key()")}}
  - : When passed a number `n`, this method will return the name of the nth key in the storage.
- {{domxref("Storage.getItem()")}}
  - : When passed a key name, will return that key's value.
- {{domxref("Storage.setItem()")}}
  - : When passed a key name and value, will add that key to the storage, or update that key's value if it already exists.
- {{domxref("Storage.removeItem()")}}
  - : When passed a key name, will remove that key from the storage.
- {{domxref("Storage.clear()")}}
  - : When invoked, will empty all keys out of the storage.

## Examples

Here we access a `Storage` object by calling `localStorage`. We first test whether the local storage contains data items using `!localStorage.getItem('bgcolor')`. If it does, we run a function called `setStyles()` that grabs the data items using {{domxref("Storage.getItem()")}} and uses those values to update page styles. If it doesn't, we run another function, `populateStorage()`, which uses {{domxref("Storage.setItem()")}} to set the item values, then runs `setStyles()`.

```js
if (!localStorage.getItem("bgcolor")) {
  populateStorage();
} else {
  setStyles();
}

function populateStorage() {
  localStorage.setItem("bgcolor", document.getElementById("bgcolor").value);
  localStorage.setItem("font", document.getElementById("font").value);
  localStorage.setItem("image", document.getElementById("image").value);

  setStyles();
}

function setStyles() {
  const currentColor = localStorage.getItem("bgcolor");
  const currentFont = localStorage.getItem("font");
  const currentImage = localStorage.getItem("image");

  document.getElementById("bgcolor").value = currentColor;
  document.getElementById("font").value = currentFont;
  document.getElementById("image").value = currentImage;

  htmlElem.style.backgroundColor = `#${currentColor}`;
  pElem.style.fontFamily = currentFont;
  imgElem.setAttribute("src", currentImage);
}
```

> **Note:** To see this running as a complete working example, see our [Web Storage Demo](https://mdn.github.io/dom-examples/web-storage/).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Storage API](/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
- {{domxref("Window.localStorage")}}
- {{domxref("Window.sessionStorage")}}
- {{domxref("CacheStorage")}}

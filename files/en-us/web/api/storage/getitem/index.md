---
title: Storage.getItem()
slug: Web/API/Storage/getItem
tags:
  - API
  - Method
  - Reference
  - Storage
  - Web Storage
browser-compat: api.Storage.getItem
---
{{APIRef("Web Storage API")}}

The **`getItem()`** method of the {{domxref("Storage")}}
interface, when passed a key name, will return that key's value, or `null` if
the key does not exist, in the given `Storage` object.

## Syntax

```js
var aValue = storage.getItem(keyName);
```

### Parameters

- `keyName`
  - : A {{domxref("DOMString")}} containing the name of the key you want to retrieve the
    value of.

### Return value

A {{domxref("DOMString")}} containing the value of the key. If the key does not exist,
`null` is returned.

## Example

The following function retrieves three data items from local storage, then uses them to
set custom styles on a page.

```js
function setStyles() {
  var currentColor = localStorage.getItem('bgcolor');
  var currentFont = localStorage.getItem('font');
  var currentImage = localStorage.getItem('image');

  document.getElementById('bgcolor').value = currentColor;
  document.getElementById('font').value = currentFont;
  document.getElementById('image').value = currentImage;

  htmlElem.style.backgroundColor = '#' + currentColor;
  pElem.style.fontFamily = currentFont;
  imgElem.setAttribute('src', currentImage);
}
```

> **Note:** To see this used within a real world example, see our [Web Storage Demo](https://mdn.github.io/dom-examples/web-storage/).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Storage.setItem()](/en-US/docs/Web/API/Storage/setItem)
- [Using the
  Web Storage API](/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)

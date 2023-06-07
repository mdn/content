---
title: "HTMLImageElement: decoding property"
short-title: decoding
slug: Web/API/HTMLImageElement/decoding
page-type: web-api-instance-property
browser-compat: api.HTMLImageElement.decoding
---

{{APIRef}}

The **`decoding`** property of the {{domxref("HTMLImageElement")}} interface provides a hint to the browser as to whether it should perform image decoding synchronously or asynchronously.

## Value

A string representing the decoding hint. Possible values are:

- `"sync"`
  - : Decode the image synchronously.
- `"async"`
  - : Decode the image asynchronously.
- `"auto"`
  - : No preference for the decoding mode; the browser decides what is best for the user. This is the default value.

## Usage notes

The `decoding` property allows you to control whether or not the browser should try to decode images synchronously or asynchronously. Setting the property to `"async"` can be useful when loading images dynamically using JavaScript, as it stops the execution thread from being blocked on the image decoding, leading to performance improvements.

Another aspect of this is more consistent behavior across browsers. Different browsers won't necessarily all have the same default behavior with regards to choosing sync or async in different situations, so anything that can make them choose more consistently is a good thing.

## Examples

```js
const img = new Image();
img.decoding = "sync";
img.src = "img/logo.png";
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

The {{htmlelement("img")}} element `decoding` attribute.

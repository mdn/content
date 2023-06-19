---
title: "HTMLImageElement: decoding property"
short-title: decoding
slug: Web/API/HTMLImageElement/decoding
page-type: web-api-instance-property
browser-compat: api.HTMLImageElement.decoding
---

{{APIRef}}

The **`decoding`** property of the {{domxref("HTMLImageElement")}} interface provides a hint to the browser as to whether it should wait for the image to be decoded before presenting other content updates or not.

## Value

A string representing the decoding hint. Possible values are:

- `"sync"`
  - : Decode the image synchronously.
- `"async"`
  - : Decode the image asynchronously.
- `"auto"`
  - : No preference for the decoding mode; the browser decides what is best for the user. This is the default value.

## Usage notes

In theory, this property provides a hint to the browser as to whether it should perform image decoding along with other tasks in a single step (`"sync"`), or allow other content to be rendered before this completes. (`"async"`). In reality, the `decoding` attribute for APIs is often not that useful, and there are often better ways of handling this. 

For images that are not downloaded before being inserted into the DOM, the browser will likely render the empty image initially, and then handle the image when it is available, independently of the other content anyway.

For images that are downloaded before being inserted into the DOM, using the {{domxref("HTMLImageElement.decode()")}} method is a better way to assure atomic presentation without holding up other content.

## Examples

In the below example, you'll likely get an empty image shown on the page as the image is downloaded. Setting `decoding` won't prevent that.

```js
const img = new Image();
img.decoding = "sync";
img.src = "img/logo.png";
document.body.appendChild(img);
```

Instead, you can use the {{domxref("HTMLImageElement.decode()")}} method to solve this problem. It provides a way to asynchronously decode an image, pausing inserting it into the DOM until it is fully downloaded and decoded, thereby avoiding the empty image problem described above. This is particularly useful if you're dynamically swapping an existing image for a new one.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("HTMLImageElement.decode()")}} method
- The {{htmlelement("img")}} element `decoding` attribute.

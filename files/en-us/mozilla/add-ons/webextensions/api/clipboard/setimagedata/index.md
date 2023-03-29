---
title: clipboard.setImageData()
slug: Mozilla/Add-ons/WebExtensions/API/clipboard/setImageData
page-type: webextension-api-function
browser-compat: webextensions.api.clipboard.setImageData
---

{{AddonSidebar()}}

Copies an image to the clipboard. The image is re-encoded before it is written to the clipboard. If the image is invalid, the clipboard is not modified.

The image is provided as an [`ArrayBuffer`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) containing the encoded image. JPEG and PNG formats are supported.

Although this API is based on Chrome's [`clipboard.setImageData()`](https://developer.chrome.com/docs/extensions/reference/clipboard/) API, there are some differences:

- The Chrome API is only for apps, not extensions.
- This API requires only the `"clipboardWrite"` permission, while the Chrome version also requires the `"clipboard"` permission.
- Chrome's API uses callbacks, and this API only supports promises.
- This API does not support the `additionalItems` parameter.

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js-nolint
browser.clipboard.setImageData(imageData, imageType)
```

### Parameters

- `imageData`
  - : An [`ArrayBuffer`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) containing the encoded image data to copy to the clipboard.
- `imageType`
  - : A string indicating the type of image contained in `imageData`: `"png"` or `"jpeg"`.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be resolved with no arguments if the operation succeeded, or rejected if there was an error (for example, because the data did not represent a valid image).

## Browser compatibility

{{Compat}}

## Examples

Copy a remote image:

```js
// requires:
// * the host permission for "https://cdn.mdn.mozilla.net/*"
// * the API permission "clipboardWrite"

fetch("https://cdn.mdn.mozilla.net/static/img/favicon144.png")
  .then((response) => response.arrayBuffer())
  .then((buffer) => browser.clipboard.setImageData(buffer, "png"));
```

Copy an image that was bundled with the extension:

```js
// requires the API permission "clipboardWrite"

fetch(browser.runtime.getURL("image.png"))
  .then((response) => response.arrayBuffer())
  .then((buffer) => browser.clipboard.setImageData(buffer, "png"));
```

{{WebExtExamples}}

> **Note:** This API is based on Chromium's [`chrome.clipboard`](https://developer.chrome.com/docs/extensions/reference/clipboard/) API.

---
title: Clipboard.read()
slug: Web/API/Clipboard/read
tags:
  - API
  - Clip
  - Clipboard
  - Clipboard API
  - Cut
  - Editing
  - Method
  - Reference
  - Scrap
  - Text
  - copy
  - paste
  - read
browser-compat: api.Clipboard.read
---
{{APIRef("Clipboard API")}}

The **`read()`** method of the
{{domxref("Clipboard")}} interface requests a copy of the clipboard's contents,
delivering the data to the returned {{jsxref("Promise")}} when the promise is
resolved. Unlike {{domxref("Clipboard.readText", "readText()")}}, the
`read()` method can return arbitrary data, such as images. This method can
also return text.

To read from the clipboard, you must first have the `"clipboard-read"`
permission.

> **Note:** The asynchronous Clipboard and [Permissions APIs](/en-US/docs/Web/API/Permissions_API) are still in the
> process of being integrated into most browsers, so they often deviate from the
> official rules for permissions and the like. Be sure to review the {{anch("Browser
    compatibility", "compatibility table")}} before using these methods.

## Syntax

```js
var promise = navigator.clipboard.read();
```

### Parameters

None.

### Return value

A {{jsxref("Promise")}} that resolves with a sequence of {{domxref("ClipboardItem")}} objects
containing the clipboard's contents. The promise is rejected if permission to access the
clipboard is not granted.

## Example

After using {{domxref("Permissions.query", "navigator.permissions.query()")}} to find
out if we have (or if the user will be prompted to allow) `"clipboard-read"`
access, this example fetches the data currently on the clipboard. If it's not a png
image, an error message is presented. Otherwise, an image element referred to using the
variable `imgElem` has its source replaced with the clipboard's contents.

```js
// First, ask the Permissions API if we have some kind of access to
// the "clipboard-read" feature.

navigator.permissions.query({ name: "clipboard-read" }).then((result) => {
    // If permission to read the clipboard is granted or if the user will
    // be prompted to allow it, we proceed.

    if (result.state == "granted" || result.state == "prompt") {
      navigator.clipboard.read().then((data) => {
        for (let i = 0; i < data.length; i++) {
          if (!data[i].types.includes("image/png")) {
            alert("Clipboard contains non-image data. Unable to access it.");
          } else {
            data[i].getType("image/png").then((blob) => {
              imgElem.src = URL.createObjectURL(blob);
            });
          }
        }
      });
    }
  });
```

> **Note:** At this time, while Firefox does implement
> `read()`, it does not recognize the `"clipboard-read"`
> permission, so attempting to use the [Permissions API](/en-US/docs/Web/API/Permissions_API) to manage access to
> the API will not work.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Clipboard API](/en-US/docs/Web/API/Clipboard_API)
- [Async Clipboard API demo on
  Glitch](https://async-clipboard-api.glitch.me/)
- [Image support for Async
  Clipboard article](https://web.dev/image-support-for-async-clipboard/)

---
title: "HTMLImageElement: decoding property"
short-title: decoding
slug: Web/API/HTMLImageElement/decoding
page-type: web-api-instance-property
browser-compat: api.HTMLImageElement.decoding
---

{{APIRef}}

The **`decoding`** property of the
{{domxref("HTMLImageElement")}} interface represents a hint given to the browser on how
it should decode the image.

## Value

A string representing the decoding hint. Possible values are:

- `sync`
  - : Decode the image synchronously for atomic presentation with other content.
- `async`
  - : Decode the image asynchronously to reduce delay in presenting other content.
- `auto`
  - : Default mode, which indicates no preference for the decoding mode.
    The browser decides what is best for the user.

## Usage notes

The `decoding` property allows you to control whether or not the browser is
allowed to try to parallelize loading your image. If doing so would cause problems, you
can specify `sync` to disable asynchronous loading. This can be useful when
applied to {{HTMLElement("img")}} elements, but may be even more so when used for
offscreen image objects.

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

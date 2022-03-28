---
title: HTMLImageElement.fetchpriority
slug: Web/API/HTMLImageElement/fetchpriority
tags:
  - API
  - HTML DOM
  - HTMLImageElement
  - Property
  - Reference
  - fetchpriority
browser-compat: api.HTMLImageElement.fetchpriority
---
{{APIRef}}

The **`fetchpriority`** property of the
{{domxref("HTMLImageElement")}} interface represents a hint given to the browser on how
it should prioritize the fetch of the image relative to other images.

## Values

A {{domxref("DOMString")}} representing the priority hint. Possible values are:

- **`high`**: Fetch the image at a high priority relative to other images.
- **`low`**: Fetch the image at a low priority relative to other images.
- **`auto`**: Default mode, which indicates no preference for
  the fetch priority. The browser decides what is best for the user.

The `fetchpriority` property allows you to signal high or low priority image
fetches. This can be useful when applied to {{HTMLElement("img")}} elements
to signal images that are "important" to the user experience early in the
loading process.

The effects of the hint on resource loading is browser-specific so make sure to
test on multiple browser engines.

Use it sparingly for exceptional cases where the browser may not be able to
infer the best way to load the image automatically. Over use can result in
degrading performance.

## Examples

```js
var img = new Image();
img.fetchpriority = 'high';
img.src = 'img/logo.png';
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

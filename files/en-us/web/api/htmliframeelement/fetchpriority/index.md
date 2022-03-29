---
title: HTMLIFrameElement.fetchpriority
slug: Web/API/HTMLIFrameElement/fetchpriority
tags:
  - API
  - HTML DOM
  - HTMLIFrameElement
  - Property
  - Reference
  - fetchpriority
browser-compat: api.HTMLIFrameElement.fetchpriority
---
{{APIRef}}

The **`fetchpriority`** property of the
{{domxref("HTMLIFrameElement")}} interface represents a hint given to the
browser on how it should prioritize the fetch of the iframe document relative
to other iframe documents.

## Values

A {{domxref("DOMString")}} representing the priority hint. Possible values are:

- **`high`**: Fetch the iframe document at a high priority relative to other
  iframe documents.
- **`low`**: Fetch the iframe document at a low priority relative to other
  iframe documents.
- **`auto`**: Default mode, which indicates no preference for
  the fetch priority. The browser decides what is best for the user.

The `fetchpriority` property allows you to signal high or low priority iframe
document fetches. This can be useful when applied to {{HTMLElement("iframe")}}
elements to signal iframes that are "less-important" to the user experience
early in the loading process.

The effects of the hint on resource loading is browser-specific so make sure to
test on multiple browser engines.

Use it sparingly for exceptional cases where the browser may not be able to
infer the best way to load the iframe automatically. Over use can result in
degrading performance.

## Examples

```js
var iframe = document.createElement("iframe");
iframe.fetchpriority = 'low';
iframe.src = "/";
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

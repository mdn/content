---
title: HTMLIFrameElement.fetchPriority
slug: Web/API/HTMLIFrameElement/fetchPriority
page-type: web-api-instance-property
tags:
  - API
  - HTML DOM
  - HTMLIFrameElement
  - Property
  - Reference
  - fetchPriority
  - Experimental
browser-compat: api.HTMLIFrameElement.fetchPriority
---
{{APIRef}}{{SeeCompatTable}}

The **`fetchPriority`** property of the
{{domxref("HTMLIFrameElement")}} interface represents a hint given to the
browser on how it should prioritize the fetch of the iframe document relative
to other iframe documents.

## Value

A string representing the priority hint. Possible values are:

- `high`
  - : Fetch the iframe document at a high priority relative to other iframe documents.
- `low`
  - : Fetch the iframe document at a low priority relative to other iframe documents.
- `auto`
  - : Default mode, which indicates no preference for the fetch priority. The browser decides what is best for the user.

The `fetchPriority` property allows you to signal high or low priority iframe
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
const iframe = document.createElement("iframe");
iframe.fetchPriority = 'low';
iframe.src = "/";
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

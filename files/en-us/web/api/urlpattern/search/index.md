---
title: "URLPattern: search property"
short-title: search
slug: Web/API/URLPattern/search
page-type: web-api-instance-property
browser-compat: api.URLPattern.search
---

{{APIRef("URL Pattern API")}} {{AvailableInWorkers}}

The **`search`** read-only property of the {{domxref("URLPattern")}} interface is a string containing the [pattern](/en-US/docs/Web/API/URL_Pattern_API#pattern_syntax) used to match the search part of a URL.

This is the [normalized value](/en-US/docs/Web/API/URL_Pattern_API#pattern_normalization) of the search pattern passed to the [constructor](/en-US/docs/Web/API/URLPattern/URLPattern).

## Value

A string.

## Examples

### Basic usage

The following example creates a {{domxref("URLPattern")}} object with `'q=baby'` for the `search` part and logs the property.
This pattern matches any URL for which the search part includes exactly that text.

```js
const pattern = new URLPattern({
  search: "q=baby",
});
console.log(pattern.search); // "q=baby"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

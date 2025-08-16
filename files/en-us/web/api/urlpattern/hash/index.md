---
title: "URLPattern: hash property"
short-title: hash
slug: Web/API/URLPattern/hash
page-type: web-api-instance-property
browser-compat: api.URLPattern.hash
---

{{APIRef("URL Pattern API")}} {{AvailableInWorkers}}

The **`hash`** read-only property of the {{domxref("URLPattern")}} interface is a string containing the [pattern](/en-US/docs/Web/API/URL_Pattern_API#pattern_syntax) used to match the fragment part of a URL.

This is the [normalized value](/en-US/docs/Web/API/URL_Pattern_API#pattern_normalization) of the hash pattern passed to the [constructor](/en-US/docs/Web/API/URLPattern/URLPattern), an [inherited value from a `baseURL`](/en-US/docs/Web/API/URLPattern/URLPattern#inheritance_from_a_baseurl) passed to the constructor, or the default value (`"*"`), which matches any hash.

## Value

A string.

## Examples

### Basic usage

The below example creates a {{domxref("URLPattern")}} object with with `books/:id` for the `hash` part and logs the property.
This pattern matches any fragment that starts with `books/` and ends with an arbitrary string identifier.

```js
const pattern = new URLPattern("https://example.org#books/:id");
console.log(pattern.hash); // 'books/:id'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

---
title: "URLPattern: pathname property"
short-title: pathname
slug: Web/API/URLPattern/pathname
page-type: web-api-instance-property
browser-compat: api.URLPattern.pathname
---

{{APIRef("URL Pattern API")}} {{AvailableInWorkers}}

The **`pathname`** read-only property of the {{domxref("URLPattern")}} interface is a string containing the [pattern](/en-US/docs/Web/API/URL_Pattern_API#pattern_syntax) used to match the pathname part of a URL.

This is the [normalized value](/en-US/docs/Web/API/URL_Pattern_API#pattern_normalization) of the pathname pattern passed to the [constructor](/en-US/docs/Web/API/URLPattern/URLPattern), an [inherited value from a `baseURL`](/en-US/docs/Web/API/URLPattern/URLPattern#inheritance_from_a_baseurl) passed to the constructor, or the default value (`"*"`), which matches any path.

## Value

A string.

## Examples

### Basic usage

The following example creates a {{domxref("URLPattern")}} object with `/books/:id(\\d)` for the `pathname` part and logs the property.
This pattern matches any URL that starts with `/books/`, followed by an integer.

```js
const pattern = new URLPattern({ pathname: "/books/:id(\\d)" });
console.log(pattern.pathname); // "/books/:id(\\d)"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

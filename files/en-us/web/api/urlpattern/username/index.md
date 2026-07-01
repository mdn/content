---
title: "URLPattern: username property"
short-title: username
slug: Web/API/URLPattern/username
page-type: web-api-instance-property
browser-compat: api.URLPattern.username
---

{{APIRef("URL Pattern API")}} {{AvailableInWorkers}}

The **`username`** read-only property of the {{domxref("URLPattern")}} interface is a string containing the [pattern](/en-US/docs/Web/API/URL_Pattern_API#pattern_syntax) used to match the username part of a URL.

This is the [normalized value](/en-US/docs/Web/API/URL_Pattern_API#pattern_normalization) of the username pattern passed to the [constructor](/en-US/docs/Web/API/URLPattern/URLPattern), or the default value (`"*"`), which matches any username.

## Value

A string.

## Examples

### Basic usage

The following example creates a {{domxref("URLPattern")}} object with `admin` for the `username` part and logs the property.
This pattern matches only if the username part of the URL is `admin`.

```js
const pattern = new URLPattern({ username: "admin" });
console.log(pattern.username); // "admin"
console.log(pattern.test("http://admin:password@example.com/")); // true
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

---
title: "URLPattern: password property"
short-title: password
slug: Web/API/URLPattern/password
page-type: web-api-instance-property
browser-compat: api.URLPattern.password
---

{{APIRef("URL Pattern API")}} {{AvailableInWorkers}}

The **`password`** read-only property of the {{domxref("URLPattern")}} interface is a string containing the [pattern](/en-US/docs/Web/API/URL_Pattern_API#pattern_syntax) used to match the password part of a URL.

This is the [normalized value](/en-US/docs/Web/API/URL_Pattern_API#pattern_normalization) of the password pattern passed to the [constructor](/en-US/docs/Web/API/URLPattern/URLPattern).

## Value

A string.

## Examples

### Basic usage

The following example creates a {{domxref("URLPattern")}} object with `correct-horse-battery{-staple}?` for the `password` part and logs the property.
This pattern matches the passwords `correct-horse-battery` and `correct-horse-battery-staple`.

```js
const pattern = new URLPattern({ password: "correct-horse-battery{-staple}?" });
console.log(pattern.password); // 'correct-horse-battery{-staple}?'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

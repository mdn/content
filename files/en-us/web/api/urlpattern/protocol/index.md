---
title: "URLPattern: protocol property"
short-title: protocol
slug: Web/API/URLPattern/protocol
page-type: web-api-instance-property
browser-compat: api.URLPattern.protocol
---

{{APIRef("URL Pattern API")}} {{AvailableInWorkers}}

The **`protocol`** read-only property of the {{domxref("URLPattern")}} interface is a string containing the [pattern](/en-US/docs/Web/API/URL_Pattern_API#pattern_syntax) used to match the protocol part of a URL.

This is the [normalized value](/en-US/docs/Web/API/URL_Pattern_API#pattern_normalization) of the protocol pattern passed to the [constructor](/en-US/docs/Web/API/URLPattern/URLPattern), an [inherited value from a `baseURL`](/en-US/docs/Web/API/URLPattern/URLPattern#inheritance_from_a_baseurl) passed to the constructor, or the default value (`"*"`), which matches any protocol.

## Value

A string.

## Examples

### Basic usage

The following example creates a {{domxref("URLPattern")}} object with `http{s}?` for the `protocol` part and logs the property.
This pattern matches any URL that has the `http` or `https` protocol.

```js
const pattern = new URLPattern({ protocol: "http{s}?" });
console.log(pattern.protocol); // 'http{s}?'
console.log(pattern.test("https://example.com/shoes?q=baby")); // true
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

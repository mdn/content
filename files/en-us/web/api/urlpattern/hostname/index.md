---
title: "URLPattern: hostname property"
short-title: hostname
slug: Web/API/URLPattern/hostname
page-type: web-api-instance-property
browser-compat: api.URLPattern.hostname
---

{{APIRef("URL Pattern API")}} {{AvailableInWorkers}}

The **`hostname`** read-only property of the {{domxref("URLPattern")}} interface is a string containing the [pattern](/en-US/docs/Web/API/URL_Pattern_API#pattern_syntax) used to match the hostname part of a URL.

This is the [normalized value](/en-US/docs/Web/API/URL_Pattern_API#pattern_normalization) of the hostname pattern passed to the [constructor](/en-US/docs/Web/API/URLPattern/URLPattern), an [inherited value from a `baseURL`](/en-US/docs/Web/API/URLPattern/URLPattern#inheritance_from_a_baseurl) passed to the constructor, or the default value (`"*"`), which matches any hostname.

## Value

A string.

## Examples

### Basic usage

The following example creates a {{domxref("URLPattern")}} object with `*.example.org` for the `hostname` part and logs the property.
This pattern matches any hostname that is a direct subdomain of `example.org`.

```js
const pattern = new URLPattern("https://*.example.org");
console.log(pattern.hostname); // '*.example.org'
console.log(pattern.test("https://horses.example.org")); // true
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

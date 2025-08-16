---
title: "URLPattern: port property"
short-title: port
slug: Web/API/URLPattern/port
page-type: web-api-instance-property
browser-compat: api.URLPattern.port
---

{{APIRef("URL Pattern API")}} {{AvailableInWorkers}}

The **`port`** read-only property of the {{domxref("URLPattern")}} interface is a string containing the [pattern](/en-US/docs/Web/API/URL_Pattern_API#pattern_syntax) used to match the port part of a URL.

This is the [normalized value](/en-US/docs/Web/API/URL_Pattern_API#pattern_normalization) of the port pattern passed to the [constructor](/en-US/docs/Web/API/URLPattern/URLPattern), or an [inherited value from a `baseURL`](/en-US/docs/Web/API/URLPattern/URLPattern#inheritance_from_a_baseurl) passed to the constructor, or the default value ("*"), which matches any port.

Note that it may also be set implicitly to the empty string (`""`) if the pattern is specified using an [`url` or `baseURL` string and the port is not explicitly set](/en-US/docs/Web/API/URLPattern/URLPattern#hostname_in_url_or_baseurl_affects_default_port).
This empty string matches against URLs that use the default port (`443`).

## Value

A string.

## Examples

### Basic usage

The following example creates a {{domxref("URLPattern")}} object with `(80|443|8080)` for the `port` part and logs the property.
This pattern matches any URL that has the port `80`, `443`, or `8080`.

```js
const pattern = new URLPattern({ port: "(80|443|8080)" });
console.log(pattern.port); // "(80|443|8080)"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

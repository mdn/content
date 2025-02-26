---
title: "ProgressEvent: loaded property"
short-title: loaded
slug: Web/API/ProgressEvent/loaded
page-type: web-api-instance-property
browser-compat: api.ProgressEvent.loaded
---

{{APIRef("XMLHttpRequest API")}}{{AvailableInWorkers}}

The **`ProgressEvent.loaded`** read-only property is a 64-bit unsigned integer
indicating the size, in bytes, of the data already transmitted or processed. The ratio can be calculated by dividing the value of this property by `ProgressEvent.total`.
When downloading a resource using HTTP, this only counts the body of the HTTP message, and doesn't include headers and other overhead.

Note that for compressed requests of unknown total size, `loaded` might contain the size of the compressed, or decompressed, data, depending on the browser. As of 2024, it contains the size of the compressed data in Firefox, and the size of the uncompressed data in Chrome.

## Value

A number.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("ProgressEvent")}} interface it belongs to.

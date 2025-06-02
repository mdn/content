---
title: "ProgressEvent: loaded property"
short-title: loaded
slug: Web/API/ProgressEvent/loaded
page-type: web-api-instance-property
browser-compat: api.ProgressEvent.loaded
---

{{APIRef("XMLHttpRequest API")}}{{AvailableInWorkers}}

The **`ProgressEvent.loaded`** read-only property is a number indicating the size of the data already transmitted or processed.
The progress ratio can be calculated by dividing the value of this property by {{domxref("ProgressEvent.total")}}.

For `ProgressEvent`s dispatched by the browser in HTTP messages, the value refers to the amount of bytes of a resource that are completed, and is derived from the `Content-Length` header.
For compressed requests of unknown total size, `loaded` might contain the size of the compressed or decompressed data, depending on the browser.
As of 2024, it contains the size of the compressed data in Firefox, and the size of the uncompressed data in Chrome.

In a `ProgressEvent` you create yourself, you can assign any numeric value to `loaded` that represents the amount of work completed relative to the `total` value.

## Value

A number.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("ProgressEvent")}} interface it belongs to.

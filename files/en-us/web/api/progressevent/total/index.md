---
title: "ProgressEvent: total property"
short-title: total
slug: Web/API/ProgressEvent/total
page-type: web-api-instance-property
browser-compat: api.ProgressEvent.total
---

{{APIRef("XMLHttpRequest API")}}{{AvailableInWorkers}}

The **`ProgressEvent.total`** read-only property is a number indicating the total size of the data being transmitted or processed.

For `ProgressEvent`s dispatched by the browser, the value refers to the size, in bytes, of a resource and is derived from the `Content-Length` response header.

In a `ProgressEvent` you create yourself, this may also be the total bytes of a resource, although this can be any number.
For example, you may wish to normalize `total` to a value such as `100` or `1` if revealing the precise amount of bytes of a resource is a concern.
If using `1` as a total, then {{domxref("ProgressEvent.loaded")}} would be a decimal value between `0` and `1`.

If the event's {{domxref("ProgressEvent.lengthComputable", "lengthComputable")}} property is `false`, this value is meaningless and should be ignored.

## Value

A number.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("ProgressEvent")}} interface it belongs to.

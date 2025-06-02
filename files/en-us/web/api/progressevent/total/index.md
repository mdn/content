---
title: "ProgressEvent: total property"
short-title: total
slug: Web/API/ProgressEvent/total
page-type: web-api-instance-property
browser-compat: api.ProgressEvent.total
---

{{APIRef("XMLHttpRequest API")}}{{AvailableInWorkers}}

The **`ProgressEvent.total`** read-only property is a number indicating the total size of the data being transmitted or processed.

When downloading a resource using HTTP, this value is taken from the `Content-Length` response header and refers to the size, in bytes, of the message body, excluding headers and other overhead.

In synthetic `ProgressEvent`s, the `total` may be normalized to a value such as `1` to avoid revealing the exact size of a resource.
In such cases, {{domxref("ProgressEvent.loaded")}} is a value between `0` and `1` to represent progress as a fraction, for example.

If the event's {{domxref("ProgressEvent.lengthComputable", "lengthComputable")}} property is `false`, this value is meaningless and should be ignored.

## Value

A number.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("ProgressEvent")}} interface it belongs to.

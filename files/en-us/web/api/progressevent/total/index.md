---
title: "ProgressEvent: total property"
short-title: total
slug: Web/API/ProgressEvent/total
page-type: web-api-instance-property
browser-compat: api.ProgressEvent.total
---

{{APIRef("XMLHttpRequest API")}}{{AvailableInWorkers}}

The **`ProgressEvent.total`** read-only property is a 64-bit unsigned integer
indicating the total size, in bytes, of the data being transmitted or processed.

When downloading a resource using HTTP, this value is taken from the `Content-Length` response header. It only counts the body of the HTTP message, and doesn't include headers and other overhead.

If the event's {{domxref("ProgressEvent.lengthComputable", "lengthComputable")}}
property is `false`, this value is meaningless and should be ignored.

## Value

An integer.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("ProgressEvent")}} interface it belongs to.

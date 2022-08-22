---
title: ProgressEvent.total
slug: Web/API/ProgressEvent/total
page-type: web-api-instance-property
tags:
  - API
  - Progress Event
  - ProgressEvent
  - Property
  - Reference
browser-compat: api.ProgressEvent.total
---
{{APIRef("XMLHttpRequest")}}

The **`ProgressEvent.total`** read-only property is an unsigned
64-bit integer value indicating the total size of the data being processed or
transmitted. In the case of an HTTP transmission, this is the size of the body of the
message (the `Content-Length`), and does not include headers and other
overhead.

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

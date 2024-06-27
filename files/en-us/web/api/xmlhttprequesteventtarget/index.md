---
title: XMLHttpRequestEventTarget
slug: Web/API/XMLHttpRequestEventTarget
page-type: web-api-interface
browser-compat: api.XMLHttpRequestEventTarget
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

`XMLHttpRequestEventTarget` is the interface that describes the event handlers shared on {{domxref("XMLHttpRequest")}} and {{domxref("XMLHttpRequestUpload")}}.

You don't use `XMLHttpRequestEventTarget` directly; instead you interact with the sub classes.

## Inheritance for `XMLHttpRequest`

{{InheritanceDiagram("XMLHttpRequest")}}

The following events are made available to {{domxref("XMLHttpRequest")}}:

- {{domxref("XMLHttpRequest/abort_event", "abort")}}
- {{domxref("XMLHttpRequest/error_event", "error")}}
- {{domxref("XMLHttpRequest/load_event", "load")}}
- {{domxref("XMLHttpRequest/loadend_event", "loadend")}}
- {{domxref("XMLHttpRequest/loadstart_event", "loadstart")}}
- {{domxref("XMLHttpRequest/progress_event", "progress")}}
- {{domxref("XMLHttpRequest/readystatechange_event", "readystatechange")}}
- {{domxref("XMLHttpRequest/timeout_event", "timeout")}}

## Inheritance for `XMLHttpRequestUpload`

{{InheritanceDiagram("XMLHttpRequestUpload")}}

The following events are made available to {{domxref("XMLHttpRequestUpload")}}:

- {{domxref("XMLHttpRequestUpload/abort_event", "abort")}}
- {{domxref("XMLHttpRequestUpload/error_event", "error")}}
- {{domxref("XMLHttpRequestUpload/load_event", "load")}}
- {{domxref("XMLHttpRequestUpload/loadend_event", "loadend")}}
- {{domxref("XMLHttpRequestUpload/loadstart_event", "loadstart")}}
- {{domxref("XMLHttpRequestUpload/progress_event", "progress")}}
- {{domxref("XMLHttpRequestUpload/timeout_event", "timeout")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("XMLHttpRequest")}}
- {{domxref("XMLHttpRequestUpload")}}

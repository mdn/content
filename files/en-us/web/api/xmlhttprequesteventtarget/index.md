---
title: XMLHttpRequestEventTarget
slug: Web/API/XMLHttpRequestEventTarget
page-type: web-api-interface
browser-compat: api.XMLHttpRequestEventTarget
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

`XMLHttpRequestEventTarget` is the interface that describes the event handlers shared on {{domxref("XMLHttpRequest")}} and {{domxref("XMLHttpRequestUpload")}}.

You don't use `XMLHttpRequestEventTarget` directly; instead you interact with the sub classes.

## Events

The following events are made available to {{domxref("XMLHttpRequest")}} and {{domxref("XMLHttpRequestUpload")}}:

- {{domxref("XMLHttpRequestEventTarget/abort_event", "abort")}}
  - : Fired when a request has been aborted, for example because the program called {{domxref("XMLHttpRequest.abort()")}}.
    Also available via the `onabort` event handler property.
- {{domxref("XMLHttpRequestEventTarget/error_event", "error")}}
  - : Fired when the request encountered an error.
    Also available via the `onerror` event handler property.
- {{domxref("XMLHttpRequestEventTarget/load_event", "load")}}
  - : Fired when a request transaction completes successfully.
    Also available via the `onload` event handler property.
- {{domxref("XMLHttpRequestEventTarget/loadend_event", "loadend")}}
  - : Fired when a request has completed, whether successfully (after {{domxref("XMLHttpRequestEventTarget/load_event", "load")}}) or unsuccessfully (after {{domxref("XMLHttpRequestEventTarget/abort_event", "abort")}} or {{domxref("XMLHttpRequestEventTarget/error_event", "error")}}).
    Also available via the `onloadend` event handler property.
- {{domxref("XMLHttpRequestEventTarget/loadstart_event", "loadstart")}}
  - : Fired when a request has started to load data.
    Also available via the `onloadstart` event handler property.
- {{domxref("XMLHttpRequestEventTarget/progress_event", "progress")}}
  - : Fired periodically when a request receives more data.
    Also available via the `onprogress` event handler property.
- {{domxref("XMLHttpRequestEventTarget/timeout_event", "timeout")}}
  - : Fired when progress is terminated due to preset time expiring.
    Also available via the `ontimeout` event handler property.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("XMLHttpRequest")}}
- {{domxref("XMLHttpRequestUpload")}}

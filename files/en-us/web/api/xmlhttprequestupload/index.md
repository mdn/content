---
title: XMLHttpRequestUpload
slug: Web/API/XMLHttpRequestUpload
page-type: web-api-interface
browser-compat: api.XMLHttpRequestUpload
---

{{DefaultAPISidebar("XMLHttpRequest")}}

The **`XMLHttpRequestUpload`** interface represents the upload process, allowing to listen for events associated with a specific {{domxref("XMLHttpRequest")}}. It is an _opaque_ object that represents the underlying, browser-dependant, upload process. It is {{domxref("XMLHttpRequestEventTarget")}} and is can be obtained by calling {{domxref("XMLHttpRequest.upload")}}.

{{AvailableInWorkers("notservice")}}

## Instance properties

_This interface has no specific property, but inherits the properties of {{domxref("XMLHttpRequestEventTarget")}} and of {{domxref("EventTarget")}}._

## Instance methods

_This interface has no specific method, but inherits the methods of {{domxref("XMLHttpRequestEventTarget")}} and of {{domxref("EventTarget")}}._

## Events

- {{domxref("XMLHttpRequestUpload/abort_event", "abort")}}
  - : Fired when a request has been aborted, for example because the program called {{domxref("XMLHttpRequest.abort()")}}.
    Also available via the `onabort` event handler property.
- {{domxref("XMLHttpRequestUpload/error_event", "error")}}
  - : Fired when the request encountered an error.
    Also available via the `onerror` event handler property.
- {{domxref("XMLHttpRequestUpload/load_event", "load")}}
  - : Fired when an `XMLHttpRequest` transaction completes successfully.
    Also available via the `onload` event handler property.
- {{domxref("XMLHttpRequestUpload/loadend_event", "loadend")}}
  - : Fired when a request has completed, whether successfully (after {{domxref("XMLHttpRequest/load_event", "load")}}) or unsuccessfully (after {{domxref("XMLHttpRequestUpload/abort_event", "abort")}} or {{domxref("XMLHttpRequest/error_event", "error")}}).
    Also available via the `onloadend` event handler property.
- {{domxref("XMLHttpRequestUpload/loadstart_event", "loadstart")}}
  - : Fired when a request has started to load data.
    Also available via the `onloadstart` event handler property.
- {{domxref("XMLHttpRequestUpload/progress_event", "progress")}}
  - : Fired periodically when a request receives more data.
    Also available via the `onprogress` event handler property.
- {{domxref("XMLHttpRequestUpload/readystatechange_event", "readystatechange")}}
  - : Fired whenever the {{domxref("XMLHttpRequest.readyState", "readyState")}} property changes.
    Also available via the `onreadystatechange` event handler property.
- {{domxref("XMLHttpRequestUpload/timeout_event", "timeout")}}
  - : Fired when progress is terminated due to preset time expiring.
    Also available via the `ontimeout` event handler property.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("XMLHttpRequest")}}

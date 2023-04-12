---
title: "XMLHttpRequestUpload: abort event"
short-title: abort
slug: Web/API/XMLHttpRequestUpload/abort_event
page-type: web-api-event
browser-compat: api.XMLHttpRequestUpload.abort_event
---

{{APIRef}}

The `abort` event is fired at {{domxref("XMLHttpRequestUpload")}} when a request has been aborted, for example because the program called {{domxref("XMLHttpRequest.abort()")}}.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("abort", (event) => {});

onabort = (event) => {};
```

## Event type

A {{domxref("ProgressEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("ProgressEvent")}}

## Event properties

_In addition to the properties listed below, properties from the parent interface, {{domxref("Event")}}, are available._

- {{domxref("ProgressEvent.lengthComputable", "lengthComputable")}} {{ReadOnlyInline}}
  - : A boolean flag indicating if the total work to be done, and the amount of work already done, by the underlying process is calculable. In other words, it tells if the progress is measurable or not.
- {{domxref("ProgressEvent.loaded", "loaded")}} {{ReadOnlyInline}}
  - : A 64-bit unsigned integer value indicating the amount of work already performed by the underlying process. The ratio of work done can be calculated by dividing `total` by the value of this property. When downloading a resource using HTTP, this only counts the body of the HTTP message, and doesn't include headers and other overhead.
- {{domxref("ProgressEvent.total", "total")}} {{ReadOnlyInline}}
  - : A 64-bit unsigned integer representing the total amount of work that the underlying process is in the progress of performing. When downloading a resource using HTTP, this is the `Content-Length` (the size of the body of the message), and doesn't include the headers and other overhead.

## Examples

### Using the `abort` event

You can use the `abort` event to stop the upload before it finishes. For a complete code example that uploads a file and displays a progress bar, see the main {{domxref("XMLHttpRequestUpload")}} page.

```js
// In case of an abort we hide the progress bar
// Note that this event can be listened to on the xhr object too
function errorAction(event) {
  progressBar.classList.remove("visible");
  log.textContent = `Upload failed: ${event.type}`;
}
xhr.upload.addEventListener("abort", errorAction);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Related events: {{domxref("XMLHttpRequestUpload/loadstart_event", "loadstart")}}, {{domxref("XMLHttpRequestUpload/load_event", "load")}}, {{domxref("XMLHttpRequestUpload/progress_event", "progress")}}, {{domxref("XMLHttpRequestUpload/error_event", "error")}}, {{domxref("XMLHttpRequestUpload/loadend_event", "loadend")}}, {{domxref("XMLHttpRequestUpload/timeout_event", "timeout")}}
- {{domxref("XMLHttpRequestUpload")}}

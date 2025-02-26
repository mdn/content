---
title: "XMLHttpRequestUpload: loadstart event"
short-title: loadstart
slug: Web/API/XMLHttpRequestUpload/loadstart_event
page-type: web-api-event
browser-compat: api.XMLHttpRequestUpload.loadstart_event
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

The **`loadstart`** event is fired when a request has started to load data.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("loadstart", (event) => {});

onloadstart = (event) => {};
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

## Using the `loadstart` event

You can use the `loadstart` event to detect the beginning of an upload. For a complete code example that uploads a file and displays a progress bar, see the main {{domxref("XMLHttpRequestUpload")}} page.

```js
// When the upload starts, we display the progress bar
xhr.upload.addEventListener("loadstart", (event) => {
  progressBar.classList.add("visible");
  progressBar.value = 0;
  progressBar.max = event.total;
  log.textContent = "Uploading (0%)…";
  abortButton.disabled = false;
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Related events: {{domxref("XMLHttpRequestUpload/load_event", "load")}}, {{domxref("XMLHttpRequestUpload/progress_event", "progress")}}, {{domxref("XMLHttpRequestUpload/error_event", "error")}}, {{domxref("XMLHttpRequestUpload/loadend_event", "loadend")}}, {{domxref("XMLHttpRequestUpload/abort_event", "abort")}}, {{domxref("XMLHttpRequestUpload/timeout_event", "timeout")}}
- {{domxref("XMLHttpRequestUpload")}}

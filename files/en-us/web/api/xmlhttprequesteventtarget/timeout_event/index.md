---
title: "XMLHttpRequestEventTarget: timeout event"
short-title: timeout
slug: Web/API/XMLHttpRequestEventTarget/timeout_event
page-type: web-api-event
browser-compat:
  - api.XMLHttpRequest.timeout_event
  - api.XMLHttpRequestUpload.timeout_event
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

The **`timeout`** event is fired when progression is terminated due to preset time expiring.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js-nolint
addEventListener("timeout", (event) => { })

ontimeout = (event) => { }
```

## Event type

A {{domxref("ProgressEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("ProgressEvent")}}

## Event properties

_In addition to the properties listed below, properties from the parent interface, {{domxref("Event")}}, are available._

- {{domxref("ProgressEvent.lengthComputable", "lengthComputable")}} {{ReadOnlyInline}}
  - : A boolean flag indicating if the total work to be done, and the amount of work already done, by the underlying process is calculable. In other words, it tells if the progress is measurable or not.
- {{domxref("ProgressEvent.loaded", "loaded")}} {{ReadOnlyInline}}
  - : A 64-bit unsigned integer value indicating the amount of work already performed by the underlying process. The proportion of work done can be calculated by dividing the value of this property by `total`. When downloading a resource using HTTP, this only counts the body of the HTTP message, and doesn't include headers and other overhead.
- {{domxref("ProgressEvent.total", "total")}} {{ReadOnlyInline}}
  - : A 64-bit unsigned integer representing the total amount of work that the underlying process is in the progress of performing. When downloading a resource using HTTP, this is the `Content-Length` (the size of the body of the message), and doesn't include the headers and other overhead.

## Examples

### Usage with XMLHttpRequest

```js
const client = new XMLHttpRequest();
client.open("GET", "http://www.example.org/example.txt");
client.ontimeout = () => {
  console.error("Timeout!!");
};

client.send();
```

You could also set up the event handler using the {{domxref("EventTarget/addEventListener", "addEventListener()")}} method:

```js
client.addEventListener("timeout", () => {
  console.error("Timeout!!");
});
```

### Usage with XMLHttpRequestUpload

You can use the `timeout` event to detect an upload that stopped because it was too slow. For a complete code example that uploads a file and displays a progress bar, see the main {{domxref("XMLHttpRequestUpload")}} page.

The timeout is set on the {{domxref("XMLHttpRequest")}} object using the {{domxref("XMLHttpRequest.timeout")}} property.

```js
// In case of an timeout we hide the progress bar
// Note that this event can be listened to on the xhr object too
function errorAction(event) {
  progressBar.classList.remove("visible");
  log.textContent = `Upload failed: ${event.type}`;
}
xhr.upload.addEventListener("timeout", errorAction);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Related events: {{domxref("XMLHttpRequestEventTarget/loadstart_event", "loadstart")}}, {{domxref("XMLHttpRequestEventTarget/load_event", "load")}}, {{domxref("XMLHttpRequestEventTarget/loadend_event", "loadend")}}, {{domxref("XMLHttpRequestEventTarget/progress_event", "progress")}}, {{domxref("XMLHttpRequestEventTarget/error_event", "error")}}, {{domxref("XMLHttpRequestEventTarget/abort_event", "abort")}}
- [Monitoring progress](/en-US/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest#monitoring_progress)

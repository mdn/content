---
title: "XMLHttpRequest: load event"
short-title: load
slug: Web/API/XMLHttpRequest/load_event
page-type: web-api-event
browser-compat: api.XMLHttpRequest.load_event
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

The `load` event is fired when an {{domxref("XMLHttpRequest")}} transaction completes successfully.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("load", (event) => {});

onload = (event) => {};
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

### Live example

#### HTML

```html
<div class="controls">
  <input
    class="xhr success"
    type="button"
    name="xhr"
    value="Click to start XHR (success)" />
  <input
    class="xhr error"
    type="button"
    name="xhr"
    value="Click to start XHR (error)" />
  <input
    class="xhr abort"
    type="button"
    name="xhr"
    value="Click to start XHR (abort)" />
</div>

<textarea readonly class="event-log"></textarea>
```

```css hidden
.event-log {
  width: 25rem;
  height: 4rem;
  border: 1px solid black;
  margin: 0.5rem;
  padding: 0.2rem;
}

input {
  width: 11rem;
  margin: 0.5rem;
}
```

#### JavaScript

```js
const xhrButtonSuccess = document.querySelector(".xhr.success");
const xhrButtonError = document.querySelector(".xhr.error");
const xhrButtonAbort = document.querySelector(".xhr.abort");
const log = document.querySelector(".event-log");

function handleEvent(e) {
  log.textContent = `${log.textContent}${e.type}: ${e.loaded} bytes transferred\n`;
}

function addListeners(xhr) {
  xhr.addEventListener("loadstart", handleEvent);
  xhr.addEventListener("load", handleEvent);
  xhr.addEventListener("loadend", handleEvent);
  xhr.addEventListener("progress", handleEvent);
  xhr.addEventListener("error", handleEvent);
  xhr.addEventListener("abort", handleEvent);
}

function runXHR(url) {
  log.textContent = "";

  const xhr = new XMLHttpRequest();
  addListeners(xhr);
  xhr.open("GET", url);
  xhr.send();
  return xhr;
}

xhrButtonSuccess.addEventListener("click", () => {
  runXHR("image.jpg");
});

xhrButtonError.addEventListener("click", () => {
  runXHR("https://somewhere.org/i-dont-exist");
});

xhrButtonAbort.addEventListener("click", () => {
  runXHR("image.jpg").abort();
});
```

#### Result

{{ EmbedLiveSample('Live_example', '100%', '150px') }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Related events: {{domxref("XMLHttpRequest/loadstart_event", "loadstart")}}, {{domxref("XMLHttpRequest/loadend_event", "loadend")}}, {{domxref("XMLHttpRequest/progress_event", "progress")}}, {{domxref("XMLHttpRequest/error_event", "error")}}, {{domxref("XMLHttpRequest/abort_event", "abort")}}
- [Monitoring progress](/en-US/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest#monitoring_progress)

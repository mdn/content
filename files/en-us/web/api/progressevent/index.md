---
title: ProgressEvent
slug: Web/API/ProgressEvent
page-type: web-api-interface
browser-compat: api.ProgressEvent
---

{{APIRef("XMLHttpRequest API")}}{{AvailableInWorkers}}

The **`ProgressEvent`** interface represents events measuring progress of an underlying process, like an HTTP request (for an `XMLHttpRequest`, or the loading of the underlying resource of an {{HTMLElement("img")}}, {{HTMLElement("audio")}}, {{HTMLElement("video")}}, {{HTMLElement("style")}} or {{HTMLElement("link")}}).

{{InheritanceDiagram}}

## Constructor

- {{domxref("ProgressEvent.ProgressEvent", "ProgressEvent()")}}
  - : Creates a `ProgressEvent` event with the given parameters.

## Instance properties

_Also inherits properties from its parent {{domxref("Event")}}_.

- {{domxref("ProgressEvent.lengthComputable")}} {{ReadOnlyInline}}
  - : A boolean flag indicating if the ratio between the size of the data already transmitted or processed (`loaded`), and the total size of the data (`total`), is calculable. In other words, it tells if the progress is measurable or not.
- {{domxref("ProgressEvent.loaded")}} {{ReadOnlyInline}}
  - : A 64-bit unsigned integer indicating the size, in bytes, of the data already transmitted or processed. The ratio can be calculated by dividing `ProgressEvent.total` by the value of this property. When downloading a resource using HTTP, this only counts the body of the HTTP message, and doesn't include headers and other overhead. Note that for compressed requests of unknown total size, `loaded` might contain the size of the compressed, or decompressed, data, depending on the browser. As of 2024, it contains the size of the compressed data in Firefox, and the size of the uncompressed data in Chrome.
- {{domxref("ProgressEvent.total")}} {{ReadOnlyInline}}
  - : A 64-bit unsigned integer indicating the total size, in bytes, of the data being transmitted or processed. When downloading a resource using HTTP, this value is taken from the `Content-Length` response header. It only counts the body of the HTTP message, and doesn't include headers and other overhead.

## Instance methods

_Inherits methods from its parent, {{domxref("Event")}}._

## Examples

The following example adds a `ProgressEvent` to a new {{domxref("XMLHttpRequest")}} and uses it to display the status of the request.

```js
const progressBar = document.getElementById("p"),
  client = new XMLHttpRequest();
client.open("GET", "magical-unicorns");
client.onprogress = (pe) => {
  if (pe.lengthComputable) {
    progressBar.max = pe.total;
    progressBar.value = pe.loaded;
  }
};
client.onloadend = (pe) => {
  progressBar.value = pe.loaded;
};
client.send();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("Event")}} base interface.

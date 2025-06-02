---
title: ProgressEvent
slug: Web/API/ProgressEvent
page-type: web-api-interface
browser-compat: api.ProgressEvent
---

{{APIRef("XMLHttpRequest API")}}{{AvailableInWorkers}}

The **`ProgressEvent`** interface represents events that measure the progress of an underlying process, like an HTTP request (e.g., an `XMLHttpRequest`), or the loading of the underlying resource of an {{HTMLElement("img")}}, {{HTMLElement("audio")}}, {{HTMLElement("video")}}, {{HTMLElement("style")}} or {{HTMLElement("link")}}.

{{InheritanceDiagram}}

## Constructor

- {{domxref("ProgressEvent.ProgressEvent", "ProgressEvent()")}}
  - : Creates a `ProgressEvent` event with the given parameters.

## Instance properties

_Also inherits properties from its parent {{domxref("Event")}}_.

- {{domxref("ProgressEvent.lengthComputable")}} {{ReadOnlyInline}}
  - : A boolean flag indicating if the ratio between the size of the data already transmitted or processed (`loaded`), and the total size of the data (`total`), is calculable. In other words, it tells if the progress is measurable or not.
- {{domxref("ProgressEvent.loaded")}} {{ReadOnlyInline}}
  - : A number indicating the size of the data already transmitted or processed.
    For HTTP messages, this refers to the size, in bytes, of the message body, excluding headers and other overhead.
    For compressed messages of unknown total size, `loaded` might contain the size of the compressed or decompressed, data, depending on the browser.
    As of 2024, it contains the size of the compressed data in Firefox, and the size of the uncompressed data in Chrome.
- {{domxref("ProgressEvent.total")}} {{ReadOnlyInline}}
  - : A number indicating the total size of the data being transmitted or processed.
    In HTTP messages, this refers to the size, in bytes, of a resource and is derived from the `Content-Length` response header.
    When constructing a `ProgressEvent`, you may use a normalized value such as `1` to avoid revealing the exact size of a resource.
    In such cases, `loaded` is a value between `0` and `1`, for example, to represent progress as a fraction.

## Instance methods

_Inherits methods from its parent, {{domxref("Event")}}._

## Examples

### Showing the status of a request

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

### Using fractions in a ProgressEvent

The total number of bytes of a resource may reveal too much information about a download, so a number between 0 and 1 may be used in a {{domxref("ProgressEvent.ProgressEvent", "ProgressEvent()")}} instead:

```js
function updateProgress(loaded, total) {
  const progressEvent = new ProgressEvent("progress", {
    lengthComputable: true,
    loaded: loaded,
    total: total,
  });

  document.dispatchEvent(progressEvent);
}

document.addEventListener("progress", (event) => {
  console.log(`Progress: ${event.loaded}/${event.total}`);
});

updateProgress(0.123456, 1);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("Event")}} base interface.

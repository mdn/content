---
title: ProgressEvent
slug: Web/API/ProgressEvent
page-type: web-api-interface
browser-compat: api.ProgressEvent
---

{{APIRef("XMLHttpRequest API")}}{{AvailableInWorkers}}

The **`ProgressEvent`** interface represents events that measure the progress of an underlying process, like an HTTP request (e.g., an `XMLHttpRequest`, or the loading of the underlying resource of an {{HTMLElement("img")}}, {{HTMLElement("audio")}}, {{HTMLElement("video")}}, {{HTMLElement("style")}} or {{HTMLElement("link")}}).

{{InheritanceDiagram}}

## Constructor

- {{domxref("ProgressEvent.ProgressEvent", "ProgressEvent()")}}
  - : Creates a `ProgressEvent` event with the given parameters.

## Instance properties

_Also inherits properties from its parent {{domxref("Event")}}_.

- {{domxref("ProgressEvent.lengthComputable")}} {{ReadOnlyInline}}
  - : A boolean flag indicating if the ratio between the size of the data already transmitted or processed (`loaded`), and the total size of the data (`total`), is calculable.
    In other words, it tells if the progress is measurable or not.
- {{domxref("ProgressEvent.loaded")}} {{ReadOnlyInline}}
  - : A number indicating the size of the data already transmitted or processed.
    For a `ProgressEvent` dispatched by the browser in HTTP messages, the value refers to the size, in bytes, of the message body, excluding headers and other overhead.
    In compressed messages of unknown total size, `loaded` might refer to the size of the compressed or uncompressed data, depending on the browser.
    As of 2024, it contains the size of the compressed data in Firefox, and the uncompressed data in Chrome.
    In a `ProgressEvent` you create yourself, you can assign any numeric value to `loaded` that represents the amount of work completed relative to the `total` value.
- {{domxref("ProgressEvent.total")}} {{ReadOnlyInline}}
  - : A number indicating the total size of the data being transmitted or processed.
    For `ProgressEvent`s dispatched by the browser in HTTP messages, the value refers to the size, in bytes, of a resource and is derived from the `Content-Length` header.
    In a `ProgressEvent` you create yourself, you may wish to normalize `total` to a value such as `100` or `1` if revealing the precise amount of bytes of a resource is a concern.
    If using `1` as a total, for example, then `loaded` would be a decimal value between `0` and `1`.

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

The total number of bytes of a resource may reveal too much information about a resource, so a number between 0 and 1 may be used in a {{domxref("ProgressEvent.ProgressEvent", "ProgressEvent()")}} instead:

```js
function updateProgress(loaded, total) {
  const progressEvent = new ProgressEvent("progress", {
    lengthComputable: true,
    loaded,
    total,
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

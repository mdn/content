---
title: ProgressEvent
slug: Web/API/ProgressEvent
page-type: web-api-interface
tags:
  - API
  - Interface
  - Progress Events
  - ProgressEvent
  - Reference
browser-compat: api.ProgressEvent
---
{{APIRef("XMLHttpRequest")}}

The **`ProgressEvent`** interface represents events measuring progress of an underlying process, like an HTTP request (for an `XMLHttpRequest`, or the loading of the underlying resource of an {{HTMLElement("img")}}, {{HTMLElement("audio")}}, {{HTMLElement("video")}}, {{HTMLElement("style")}} or {{HTMLElement("link")}}).

{{InheritanceDiagram}}

## Constructor

- {{domxref("ProgressEvent.ProgressEvent", "ProgressEvent()")}}
  - : Creates a `ProgressEvent` event with the given parameters.

## Properties

_Also inherits properties from its parent {{domxref("Event")}}_.

- {{domxref("ProgressEvent.lengthComputable")}} {{ReadOnlyInline}}
  - : A boolean flag indicating if the total work to be done, and the amount of work already done, by the underlying process is calculable. In other words, it tells if the progress is measurable or not.
- {{domxref("ProgressEvent.loaded")}} {{ReadOnlyInline}}
  - : A 64-bit unsigned integer value indicating the amount of work already performed by the underlying process. The ratio of work done can be calculated by dividing `total` by the value of this property. When downloading a resource using HTTP, this only counts the body of the HTTP message, and doesn't include headers and other overhead.
- {{domxref("ProgressEvent.total")}} {{ReadOnlyInline}}
  - : A 64-bit unsigned integer representing the total amount of work that the underlying process is in the progress of performing. When downloading a resource using HTTP, this is the `Content-Length` (the size of the body of the message), and doesn't include the headers and other overhead.

## Methods

_Inherits methods from its parent, {{domxref("Event")}}._

## Examples

The following example adds a `ProgressEvent` to a new {{domxref("XMLHTTPRequest")}} and uses it to display the status of the request.

```js
const progressBar = document.getElementById("p"),
    client = new XMLHttpRequest()
client.open("GET", "magical-unicorns")
client.onprogress = (pe) => {
  if (pe.lengthComputable) {
    progressBar.max = pe.total
    progressBar.value = pe.loaded
  }
}
client.onloadend = (pe) => {
  progressBar.value = pe.loaded
}
client.send()
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("Event")}} base interface.

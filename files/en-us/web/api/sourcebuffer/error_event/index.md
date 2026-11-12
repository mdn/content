---
title: "SourceBuffer: error event"
short-title: error
slug: Web/API/SourceBuffer/error_event
page-type: web-api-event
browser-compat: api.SourceBuffer.error_event
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}

The **`error`** event of the {{domxref("SourceBuffer")}} interface is fired when an error occurs during the processing of an {{domxref("SourceBuffer.appendBuffer", "appendBuffer()")}} operation. This may happen, for example, if the data being appended is not in the expected format, the `SourceBuffer` is in an invalid state, or the user agent is unable to process the data. The {{domxref("SourceBuffer.updating", "updating")}} property transitions from `true` to `false`. This event is fired before the {{domxref("SourceBuffer.updateend_event", "updateend")}} event.

## Syntax

Use the event name in {{domxref("EventTarget/addEventListener", "addEventListener()")}}:

```js-nolint
addEventListener("error", (event) => { })
```

Alternatively, assign to the [event handler property](/en-US/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) of the interface:

```js-nolint
onerror = (event) => { }
```

## Event type

A generic {{domxref("Event")}}.

## Examples

### Handling errors during appendBuffer()

This example demonstrates how to handle errors that occur during the `appendBuffer()` operation.

```js
const sourceBuffer = source.addSourceBuffer(mimeCodec);
sourceBuffer.addEventListener("error", () => {
  downloadStatus.textContent = "Error occurred during decoding";
});
sourceBuffer.addEventListener("update", () => {
  downloadStatus.textContent = "Done";
});
sourceBuffer.addEventListener("updateend", () => {
  source.endOfStream();
});
downloadStatus.textContent = "Downloading...";
fetch(assetURL)
  .then((response) => response.arrayBuffer())
  .then((data) => {
    downloadStatus.textContent = "Decoding...";
    sourceBuffer.appendBuffer(data);
  });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SourceBuffer.appendBuffer()")}}
- {{domxref("SourceBuffer.remove()")}}

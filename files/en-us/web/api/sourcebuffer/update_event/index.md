---
title: "SourceBuffer: update event"
short-title: update
slug: Web/API/SourceBuffer/update_event
page-type: web-api-event
browser-compat: api.SourceBuffer.update_event
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}

The **`update`** event of the {{domxref("SourceBuffer")}} interface signals the successful completion of an {{domxref("SourceBuffer.appendBuffer", "appendBuffer()")}} or {{domxref("SourceBuffer.remove", "remove()")}} operation. The {{domxref("SourceBuffer.updating", "updating")}} attribute transitions from `true` to `false`. This event is fired before the {{domxref("SourceBuffer.updateend_event", "updateend")}} event.

## Syntax

Use the event name in {{domxref("EventTarget/addEventListener", "addEventListener()")}}:

```js-nolint
addEventListener("update", (event) => { })
```

Alternatively, assign to the [event handler property](/en-US/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) of the interface:

```js-nolint
onupdate = (event) => { }
```

## Event type

A generic {{domxref("Event")}}.

## Examples

### Handling the update event after appending data

This example demonstrates how to handle the `update` event after a successful `appendBuffer()` operation.

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

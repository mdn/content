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

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js-nolint
addEventListener("update", (event) => { })

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

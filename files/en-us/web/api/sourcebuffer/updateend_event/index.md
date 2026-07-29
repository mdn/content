---
title: "SourceBuffer: updateend event"
short-title: updateend
slug: Web/API/SourceBuffer/updateend_event
page-type: web-api-event
browser-compat: api.SourceBuffer.updateend_event
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}

The **`updateend`** event of the {{domxref("SourceBuffer")}} interface signals the (not necessarily successful) completion of an {{domxref("SourceBuffer.appendBuffer", "appendBuffer()")}} or {{domxref("SourceBuffer.remove", "remove()")}} operation. The {{domxref("SourceBuffer.updating", "updating")}} attribute transitions from `true` to `false`. This event is fired after the {{domxref("SourceBuffer.update_event", "update")}}, {{domxref("SourceBuffer.error_event", "error")}}, or {{domxref("SourceBuffer.abort_event", "abort")}} events.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js-nolint
addEventListener("updateend", (event) => { })

onupdateend = (event) => { }
```

## Event type

A generic {{domxref("Event")}}.

## Examples

### Handling the updateend event after appending data

This example demonstrates how to handle the `updateend` event. Note that we handle each completion event separately, and only use `updateend` for finalizing the stream.

```js
const sourceBuffer = source.addSourceBuffer(mimeCodec);
sourceBuffer.addEventListener("abort", () => {
  downloadStatus.textContent = "Canceled";
});
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

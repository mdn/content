---
title: "SourceBuffer: abort event"
short-title: abort
slug: Web/API/SourceBuffer/abort_event
page-type: web-api-event
browser-compat: api.SourceBuffer.abort_event
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}

The **`abort`** event of the {{domxref("SourceBuffer")}} interface is fired when the buffer appending is aborted, because the {{domxref("SourceBuffer.abort()")}} or {{domxref("SourceBuffer.remove()")}} method is called while the {{domxref("SourceBuffer.appendBuffer()")}} algorithm is still running. The {{domxref("SourceBuffer.updating", "updating")}} property transitions from `true` to `false`. This event is fired before the {{domxref("SourceBuffer.updateend_event", "updateend")}} event.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js-nolint
addEventListener("abort", (event) => { })

onabort = (event) => { }
```

## Event type

A generic {{domxref("Event")}}.

## Examples

### Aborting an append operation

This example demonstrates how to abort an append operation and handle the `abort` event.

```js
const sourceBuffer = source.addSourceBuffer(mimeCodec);
sourceBuffer.addEventListener("abort", () => {
  downloadStatus.textContent = "Canceled";
});
sourceBuffer.addEventListener("update", () => {
  downloadStatus.textContent = "Done";
});
sourceBuffer.addEventListener("updateend", () => {
  source.endOfStream();
});
cancelButton.addEventListener("click", () => {
  if (sourceBuffer.updating) {
    sourceBuffer.abort();
  }
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

- {{domxref("SourceBuffer.abort()")}}

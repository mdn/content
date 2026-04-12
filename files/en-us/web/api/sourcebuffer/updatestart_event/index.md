---
title: "SourceBuffer: updatestart event"
short-title: updatestart
slug: Web/API/SourceBuffer/updatestart_event
page-type: web-api-event
browser-compat: api.SourceBuffer.updatestart_event
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}

The **`updatestart`** event of the {{domxref("SourceBuffer")}} interface signals the beginning of an {{domxref("SourceBuffer.appendBuffer", "appendBuffer()")}} or {{domxref("SourceBuffer.remove", "remove()")}} operation. The {{domxref("SourceBuffer.updating", "updating")}} attribute transitions from `false` to `true`.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js-nolint
addEventListener("updatestart", (event) => { })

onupdatestart = (event) => { }
```

## Event type

A generic {{domxref("Event")}}.

## Examples

### Listening for the updatestart event

```js
const sourceBuffer = source.addSourceBuffer(mimeCodec);
sourceBuffer.addEventListener("updatestart", () => {
  downloadStatus.textContent = "Modifying buffer...";
});
sourceBuffer.addEventListener("updateend", () => {
  downloadStatus.textContent = "Modification complete";
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SourceBuffer.appendBuffer()")}}
- {{domxref("SourceBuffer.remove()")}}

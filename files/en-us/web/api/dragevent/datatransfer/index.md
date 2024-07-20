---
title: "DragEvent: dataTransfer property"
short-title: dataTransfer
slug: Web/API/DragEvent/dataTransfer
page-type: web-api-instance-property
browser-compat: api.DragEvent.dataTransfer
---

{{APIRef("HTML Drag and Drop API")}}

The **`DragEvent.dataTransfer`** read-only property holds the drag
operation's data (as a {{domxref("DataTransfer")}} object).

## Value

A {{domxref("DataTransfer")}} object which contains the {{domxref("DragEvent","drag event's data", "", 1)}}.

The property can be `null` when the event is created using the constructor. It is never `null` when dispatched by the browser.

## Examples

This example illustrates accessing the drag and drop data within the
{{domxref("HTMLElement/dragend_event", "dragend")}} event handler.

```js
function processData(d) {
  // Process the data …
}

dragTarget.addEventListener(
  "dragend",
  (ev) => {
    // Call the drag and drop data processor
    if (ev.dataTransfer !== null) processData(ev.dataTransfer);
  },
  false,
);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

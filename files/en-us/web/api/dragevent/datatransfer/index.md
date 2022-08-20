---
title: DragEvent.dataTransfer
slug: Web/API/DragEvent/dataTransfer
page-type: web-api-instance-property
tags:
  - API
  - DOM
  - Property
  - Reference
  - drag and drop
browser-compat: api.DragEvent.dataTransfer
---
{{APIRef("HTML Drag and Drop API")}}

The **`DragEvent.dataTransfer`** property holds the drag
operation's data (as a {{domxref("DataTransfer")}} object).

This property is {{ReadOnlyInline}}.

## Value

A {{domxref("DataTransfer")}} object which contains the {{domxref("DragEvent","drag event's data")}}.

## Examples

This example illustrates accessing the drag and drop data within the
{{domxref("HTMLElement/dragend_event", "dragend")}} event handler.

```js
function processData(d) {
   // Process the data …
}

dragTarget.addEventListener("dragend", (ev) => {
   // Call the drag and drop data processor
   if (ev.dataTransfer !== null) processData(ev.dataTransfer);
 }, false);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

---
title: DragEvent.dataTransfer
slug: Web/API/DragEvent/dataTransfer
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

This property is {{readonlyInline}}.

## Syntax

```js
let data = dragEvent.dataTransfer;
```

### Return value

- `data`
  - : A {{domxref("DataTransfer")}} object which contains the
    {{domxref("DragEvent","drag event's data")}}.

## Example

This example illustrates accessing the drag and drop data within the
{{event("dragend")}} event handler.

```js
function processData(d) {
   // Process the data ...
}

dragTarget.addEventListener("dragend", function(ev) {
   // Call the drag and drop data processor
   if (ev.dataTransfer !== null) processData(ev.dataTransfer);
 }, false);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

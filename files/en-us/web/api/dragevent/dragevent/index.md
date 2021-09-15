---
title: DragEvent()
slug: Web/API/DragEvent/DragEvent
tags:
  - API
  - Constructor
  - DOM
  - Reference
  - drag and drop
browser-compat: api.DragEvent.DragEvent
---
{{APIRef("HTML Drag and Drop API")}}

This constructor is used to create a synthetic {{domxref("DragEvent")}} object.

Although this interface has a constructor, it is not possible to create a
useful {{domxref("DataTransfer")}} object from script, since {{domxref("DataTransfer")}}
objects have a processing and security model that is coordinated by the browser during
drag-and-drops.

This interface inherits properties from {{domxref("MouseEvent")}} and
{{domxref("Event")}}.

## Syntax

```js
 event = new DragEvent(type, DragEventInit);
```

### Arguments

- _type_
  - : Is a `{{domxref("DOMString")}}` representing the name of the event (see
    [DragEvent event types](/en-US/docs/Web/API/DragEvent#event_types)).
- _DragEventInit_{{optional_inline}}

  - : Is a `DragEventInit` dictionary, having the following fields:

    - `"dataTransfer"`, optional and defaults to `"null"`. The
      type is `{{domxref("DataTransfer")}}`.

The `DragEventInit` dictionary inherits from the
{{domxref("MouseEvent.MouseEvent","MouseEventInit dictionary")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

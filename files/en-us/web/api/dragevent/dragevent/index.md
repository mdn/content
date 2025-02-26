---
title: "DragEvent: DragEvent() constructor"
short-title: DragEvent()
slug: Web/API/DragEvent/DragEvent
page-type: web-api-constructor
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

```js-nolint
new DragEvent(type)
new DragEvent(type, dragEventInit)
```

### Parameters

- `type`

  - : A string representing the name of the event (see [DragEvent event types](/en-US/docs/Web/API/DragEvent#event_types)).

- `eventInitDict` {{optional_inline}}

  - : An object containing the following properties:

    - `dataTransfer` {{optional_inline}}

      - : A {{domxref("DataTransfer")}}. Defaults to `null`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

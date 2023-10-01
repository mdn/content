---
title: DragEvent
slug: Web/API/DragEvent
page-type: web-api-interface
browser-compat: api.DragEvent
---

{{APIRef("HTML Drag and Drop API")}}

The **`DragEvent`** interface is a {{domxref("Event","DOM event")}} that represents a drag and drop interaction. The user initiates a drag by placing a pointer device (such as a mouse) on the touch surface and then dragging the pointer to a new location (such as another DOM element). Applications are free to interpret a drag and drop interaction in an application-specific way.

This interface inherits properties from {{domxref("MouseEvent")}} and {{domxref("Event")}}.

{{InheritanceDiagram}}

## Instance properties

- {{domxref('DragEvent.dataTransfer')}} {{ReadOnlyInline}}
  - : The data that is transferred during a drag and drop interaction.

## Constructors

Although this interface has a constructor, it is not possible to create a useful DataTransfer object from script, since {{domxref("DataTransfer")}} objects have a processing and security model that is coordinated by the browser during drag-and-drops.

- {{domxref("DragEvent.DragEvent", "DragEvent()")}}
  - : Creates a synthetic and untrusted DragEvent.

## Event types

- {{domxref("HTMLElement/drag_event", "drag")}}
  - : This event is fired when an element or text selection is being dragged.
- {{domxref("HTMLElement/dragend_event", "dragend")}}
  - : This event is fired when a drag operation is being ended (by releasing a mouse button or hitting the escape key).
- {{domxref("HTMLElement/dragenter_event", "dragenter")}}
  - : This event is fired when a dragged element or text selection enters a valid drop target.
- {{domxref("HTMLElement/dragleave_event", "dragleave")}}
  - : This event is fired when a dragged element or text selection leaves a valid drop target.
- {{domxref("HTMLElement/dragover_event", "dragover")}}
  - : This event is fired continuously when an element or text selection is being dragged and the mouse pointer is over a valid drop target (every 50 ms WHEN mouse is not moving ELSE much faster between 5 ms (slow movement) and 1ms (fast movement) approximately. This firing pattern is different than {{domxref("Element/mouseover_event", "mouseover")}} ).
- {{domxref("HTMLElement/dragstart_event", "dragstart")}}
  - : This event is fired when the user starts dragging an element or text selection.
- {{domxref("HTMLElement/drop_event", "drop")}}
  - : This event is fired when an element or text selection is dropped on a valid drop target.

## Example

An Example of each property, constructor, event type and global event handlers is included in their respective reference page.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Drag and drop](/en-US/docs/Web/API/HTML_Drag_and_Drop_API)
- [Drag Operations](/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [Recommended Drag Types](/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types)
- [DataTransfer test - Paste or Drag](https://codepen.io/tech_query/pen/MqGgap)

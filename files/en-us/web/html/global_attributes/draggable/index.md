---
title: draggable
slug: Web/HTML/Global_attributes/draggable
tags:
  - Global attributes
  - HTML
  - Reference
browser-compat: html.global_attributes.draggable
---

{{HTMLSidebar("Global_attributes")}}

The **draggable** [global attribute](/en-US/docs/Web/HTML/Global_attributes) is an enumerated attribute that indicates whether the element can be dragged, either with native browser behavior or the [HTML Drag and Drop API](/en-US/docs/Web/API/HTML_Drag_and_Drop_API).

`draggable` can have the following values:

- `true`: the element can be dragged.
- `false`: the element cannot be dragged.

> **Warning:** This attribute is _enumerated_ and not _Boolean_. A value of `true` or `false` is mandatory, and shorthand like `<img draggable>` is forbidden. The correct usage is `<img draggable="false">`.

If this attribute is not set, its default value is `auto`, which means drag behavior is the default browser behavior: only text selections, images, and links can be dragged. For other elements, the event {{domxref('HTMLElement.dragstart_event', 'ondragstart')}} must be set for drag and drop to work, as shown in this [comprehensive example](/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- All [global attributes](/en-US/docs/Web/HTML/Global_attributes).

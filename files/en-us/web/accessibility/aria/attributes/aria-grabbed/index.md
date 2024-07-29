---
title: aria-grabbed
slug: Web/Accessibility/ARIA/Attributes/aria-grabbed
page-type: aria-attribute
status:
  - deprecated
spec-urls: https://w3c.github.io/aria/#aria-grabbed
---

{{AccessibilitySidebar}}

The `aria-grabbed` state indicates an element's "grabbed" state in a drag-and-drop operation. {{deprecated_inline}}

## Description

Text selections, images, and links can be dragged by default. Setting the global [`draggable="true"`](/en-US/docs/Web/HTML/Global_attributes/draggable) attribute, part of HTML5's [Drag and Drop API](/en-US/docs/Web/API/HTML_Drag_and_Drop_API), with a [`dragstart` event handler](/en-US/docs/Web/API/HTMLElement/dragstart_event), means any DOM node can be made draggable as well.

The `aria-grabbed` attribute was used to indicate if an element is in a "grabbed" state in a drag-and-drop operation with `aria-grabbed="true"` or if that the element is grabbable, but not currently grabbed with `aria-grabbed="false"`.

Setting `aria-grabbed="true"` indicated the element had been selected for dragging. Setting `aria-grabbed="false"` indicated that the element could be grabbed for a drag-and-drop operation, but is not currently grabbed.

When `aria-grabbed` is set to `true`, the [`aria-dropeffect`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-dropeffect) attribute of all potential drop targets should be updated with the type of function, or effect, will occur to the grabbed element when it is dropped. When no element is in a grabbed state, revert the `aria-dropeffect` attributes of all your drop targets.

The `aria-grabbed` property is expected to be replaced by a new feature in a future version of WAI-ARIA and is considered deprecated.

> [!NOTE]
> ARIA does not enable accessible functionality. ARIA only conveys the intended behavior of your functionality.

## Values

- `true`
  - : The element has been selected for dragging.
- `false`
  - : The element is not currently selected for dragging, but can be made available for dragging by setting the property to `true`.
- `undefined` (default)
  - : The element does not support being dragged

## Associated roles

Used in **ALL** [roles](/en-US/docs/Web/Accessibility/ARIA/Roles)

## Specifications

{{Specifications}}

## See also

- [`aria-dropeffect`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-dropeffect)
- [HTML global `draggable` attribute](/en-US/docs/Web/HTML/Global_attributes/draggable)
- HTML [Drag and Drop API](/en-US/docs/Web/API/HTML_Drag_and_Drop_API)
- {{domxref('dataTransfer')}}
- {{domxref('DataTransfer.dropEffect')}}
- {{domxref("HTMLElement/dragstart_event", "dragstart")}}

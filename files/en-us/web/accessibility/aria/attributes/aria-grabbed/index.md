---
title: 'aria-grabbed'
slug: Web/Accessibility/ARIA/Attributes/aria-grabbed
tags: 
  - Accessibility
  - ARIA
  - ARIA attribute
  - ARIA property
  - aria-grabbed
  - Reference
  - deprecated
---

The `aria-grabbed` state indicates an element's "grabbed" state in a drag-and-drop operation. {{deprecated_inline}}

## Description

Text selections, images, and links can be dragged by default. Setting the global [`draggable="true"`](/en-US/docs/Web/HTML/Global_attributes/draggable) attribute, part of HTML5's [Drag and Drop API](/en-US/docs/Web/API/HTML_Drag_and_Drop_API), with a [`dragstart` event handler](/en-US/docs/Web/API/Document/dragstart_event), means any DOM node can be made draggable as well.

The `aria-grabbed` attribute was used to indicate if an element is in a "grabbed" state in a drag-and-drop operation with `aria-grabbed="true"` or if that the element is grabbable, but not currently grabbed with`aria-grabbed="false"`.

Setting `aria-grabbed="true"` indicated the element had been selected for dragging. Setting `aria-grabbed="false"` indicated that the element could be grabbed for a drag-and-drop operation, but is not currently grabbed.

When `aria-grabbed` is set to `true`, the [`aria-dropeffect`](/en-US/docs/Web/Accessibility/aria/Attributes/aria-dropeffect) attribute of all potential drop targets should be updated with the type of function, or effect, will occur to the grabbed element when it is dropped. When no element is in a grabbed state, revert the `aria-dropeffect` attributes of all your drop targets.

The `aria-grabbed` property is expected to be replaced by a new feature in a future version of WAI-ARIA and is considered deprecated.

> **Note:** ARIA does not enable accessible functionality. ARIA only conveys the intended behavior of your functionality.

## Values

- `true`
  - : The element has been selected for dragging.
- `false`
  - : The element is not currently selected for dragging, but can be made available for dragging by setting the property to `true`.
- `undefined` (default)
  - : The element does not support being dragge

## Associated roles

Used in **ALL** [roles](/en-US/docs/Web/Accessibility/ARIA/Roles/)

## Specifications

| Specification | Status |
| ------------- | ------  |
| {{SpecName("ARIA","#aria-grabbed","ARIA: aria-grabbed Attribute")}}  | {{Spec2('ARIA')}} |

## See Also

- [`aria-dropeffect`](/en-US/docs/Web/Accessibility/aria/Attributes/aria-dropeffect)
- [HTML global `draggable` attribute](/en-US/docs/Web/HTML/Global_attributes/draggable)
- HTML [Drag and Drop API](/en-US/docs/Web/API/HTML_Drag_and_Drop_API)
- {{domxref('dataTransfer')}}
- {{domxref('DataTransfer.dropEffect')}}
- {{event("dragstart")}}
- [Accessible Drag and Drop](https://dev.opera.com/articles/accessible-drag-and-drop/) by Gez Lemon

<section id="Quick_links">
<strong><a href="/en-US/docs/Web/Accessibility/ARIA/Attributes">WAI-ARIA states and properties</a></strong>
{{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/aria/Attributes")}}
</section>
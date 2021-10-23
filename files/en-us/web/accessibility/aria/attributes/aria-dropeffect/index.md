---
title: 'aria-dropeffect'
slug: Web/Accessibility/ARIA/Attributes/aria-dropeffect
tags: 

  - Accessibility
  - ARIA
  - ARIA attribute
  - ARIA property
  - aria-dropeffect
  - drag and drop
  - deprecated
---
{{deprecated}}

The global `aria-dropeffect` attribute indicates what functions may be performed when a dragged object is released on the drop target.

## Description

Text selections, images, and links can be dragged by default. Setting HTML's global [`draggable="true"`](/en-US/docs/Web/HTML/Global_attributes/draggable), part of HTML5's [Drag and Drop API](/en-US/docs/Web/API/HTML_Drag_and_Drop_API), with a [`dragstart` event handler](/en-US/docs/Web/API/Document/dragstart_event) means any DOM node can me made draggable as well. 

When a drag occurs, a translucent image is generated of the drag target which follows the user's pointer during the drag. The [`dropEffect`](/en-US/docs/Web/API/DataTransfer/dropEffect) property controls the visual feedback the user is given during a drag-and-drop operation; generally which cursor the browser displays while dragging. For example, when the user hovers over a drop target, the browser's cursor may indicate the type of operation that will occur. During the drag operation, as the draggable element is dragged over different drop areas, the drag effects can be modified to indicate that certain effects are allowed at certain locations. Similarly, the global `aria-dropeffect` attribute provides assistive technology users the same information provided via the `DataTransfer.dropEffect` to sited users via the dropeffect icon: which functions may be performed when a dragged object is released on the drop target. 

More than one drop effect may be supported for a given element. Therefore, the value of the `aria-dropeffect` attribute is a space-separated set of tokens indicating the possible effects, or none if there is no supported operation. 

Deprecated in ARIA 1.1, the `aria-dropeffect` property indicates what functions may be performed when a dragged object is released on the drop target. As more than one functionality may be supported, the attribute value is a space separated list of functions. Functions include `copy`, `execute`, `link`, and `move`. The default is `none`, meaning there is no supported functionality in the application. Setting `aria-dropeffect="popup"` informs assistive technology users that there is a popup menu or dialog of drag operations from which the user can choose. 

Including the attribute provides assistive technologies to convey the possible drag options available to the user but doesn't add any actual functionality. 

The `aria-dropeffect` property is expected to be replaced by a new feature in a future version of WAI-ARIA and is considered deprecated.

Typically, drop effect functions can only be provided once an object has been grabbed for a drag operation as the drop effect functions available are dependent on the object being dragged.

## Values

The value is a space seperated list of possible actions. The followig are the valid tokens:

- `copy`
  - : A duplicate of the source object will be dropped into the target.
- `execute`
  - : A function supported by the drop target is executed, using the drag source as an input.
- `link`
  - : A reference or shortcut to the dragged object will be created in the target object.
- `move`
  - : The source object will be removed from its current location and dropped into the target.
- `none` (default)
  - : No operation can be performed; effectively cancels the drag operation if an attempt is made to drop on this object. Ignored if combined with any other token value. e.g., 'none copy' is equivalent to a 'copy' value.
- `popup`
  - : There is a popup menu or dialog that allows the user to choose one of the drag operations (copy, move, link, execute) and any other drag functionality, such as cancel.

## Associated roles

Used in **ALL** roles. 

## Specifications

| Specification | Status | 
| ------------- | ------  |
| {{SpecName("ARIA","#aria-dropeffect","ARIA: aria-dropeffect Attribute")}}  | {{Spec2('ARIA')}} |

## See Also

- [`aria-grabbed`](../aria-grabbed)
- [HTML global `draggable` attribute](/en-US/docs/Web/HTML/Global_attributes/draggable)
- HTML [Drag and Drop API](/en-US/docs/Web/API/HTML_Drag_and_Drop_API)
- {{domxref('dataTransfer')}}
- {{domxref('DataTransfer.dropEffect')}}

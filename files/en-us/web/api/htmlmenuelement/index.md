---
title: HTMLMenuElement
slug: Web/API/HTMLMenuElement
page-type: web-api-interface
browser-compat: api.HTMLMenuElement
---

{{APIRef("HTML DOM")}}

The **`HTMLMenuElement`** interface provides special properties (beyond those defined on the regular {{DOMxRef("HTMLElement")}} interface it also has available to it by inheritance) for manipulating {{HTMLElement("menu")}} elements.

{{InheritanceDiagram}}

## Constructor

- {{DOMxRef("HTMLMenuElement.HTMLMenuElement", "HTMLMenuElement()")}}
  - : Returns a newly constructed `HTMLMenuElement`.

## Instance properties

_Inherits properties from its parent, {{domxref("HTMLElement")}}, and its ancestors._

- `compact` {{deprecated_inline}}
  - : A Boolean value determining if the menu displays in a compact way.
- `type` {{deprecated_inline}} {{Non-standard_Inline}}
  - : Returns `context` if the menu is a context menu.
    This use of the {{HTMLElement("menu")}} element has never been implemented widely
    and is now deprecated.
- `label` {{deprecated_inline}} {{Non-standard_Inline}}
  - : A string associating the menu with a name,
    displayed when the menu is used as a context menu.
    This use of the {{HTMLElement("menu")}} element has never been implemented widely
    and is now deprecated.

## Instance methods

_Inherits methods from its parent, {{domxref("HTMLElement")}}, and its ancestors._

_`HTMLMenuElement` doesn't implement specific methods._

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{DOMxRef("HTMLMenuItemElement")}}

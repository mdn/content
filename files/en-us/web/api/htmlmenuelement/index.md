---
title: HTMLMenuElement
slug: Web/API/HTMLMenuElement
tags:
  - API
  - Experimental
  - Draft
  - HTMLMenuElement
  - Interface
  - Reference
browser-compat: api.HTMLMenuElement
---
{{APIRef("HTML DOM")}}{{SeeCompatTable}}

The **`HTMLMenuElement`** interface provides special properties (beyond those defined on the regular {{DOMxRef("HTMLElement")}} interface it also has available to it by inheritance) for manipulating {{HTMLElement("menu")}} elements.

{{InheritanceDiagram(600, 120)}}

## Constructor

- {{DOMxRef("HTMLMenuElement.HTMLMenuElement", "HTMLMenuElement()")}}
  - : Returns a newly constructed `HTMLMenuElement`.

## Properties

_Inherits properties from its parent, {{domxref("HTMLElement")}}, and its ancestors._

- `compact` {{deprecated_inline}}
  - : A Boolean value determining if the menu displays in a compact way.
- `type` {{deprecated_inline}}
  - : Returns `context` if the menu is a context menu.
    This use of the {{HTMLElement("menu")}} element has never been implemented widely
    and is now deprecated.
- `label` {{deprecated_inline}}
  - : A string associating the menu with a name,
    displayed when the menu is used as a context menu.
    This use of the {{HTMLElement("menu")}} element has never been implemented widely
    and is now deprecated.

## Methods

_Inherits methods from its parent, {{domxref("HTMLElement")}}, and its ancestors._

_`HTMLMenuElement` doesn't implement specific methods._

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{DOMxRef("HTMLMenuItemElement")}}

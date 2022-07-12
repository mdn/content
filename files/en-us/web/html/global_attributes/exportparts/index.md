---
title: exportparts
slug: Web/HTML/Global_attributes/exportparts
tags:
  - Global attributes
  - HTML
  - Reference
  - part
browser-compat: html.global_attributes.exportparts
---

{{HTMLSidebar("Global_attributes")}}

The **`exportparts`** [global attribute](/en-US/docs/Web/HTML/Global_attributes) allows to select and style elements existing in nested {{Glossary("shadow tree", "shadow trees")}}, by exporting their `part` names.

Shadow Tree is an isolated structure where identifiers, classes, and styles cannot be reached by selectors or queries belonging to a regular DOM.
To apply style to an element living in a Shadow Tree, by CSS rule created outside of it, {{HTMLAttrxRef("part")}} global attribute has to be used. It has to be assigned to an element present in Shadow Tree and its value should be some identifier.
Rule present outside of Shadow Tree, must then use {{CSSxRef("::part")}} pseudo-element, containing the same identifier as an argument.

Global attribute {{HTMLAttrxRef("part")}} makes the element visible on just a single level of depth. When Shadow Tree is nested, parts will be visible only to parent of the Shadow Tree, but not to it's ancestor. Exporting parts further down is exactly what `exportparts` attribute is for.

Attribute `exportparts` must be placed on a `Shadow Host`, which is element to which Shadow Tree is attached to. Value of the attribute should be space-separated list of part names, present in Shadow Tree and which should be made available in a DOM outside of the current structure.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- All [global attributes](/en-US/docs/Web/HTML/Global_attributes).

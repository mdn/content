---
title: exportparts
slug: Web/HTML/Global_attributes/exportparts
page-type: html-attribute
browser-compat: html.global_attributes.exportparts
---

{{HTMLSidebar("Global_attributes")}}

The **`exportparts`** [global attribute](/en-US/docs/Web/HTML/Global_attributes) allows you to select and style elements existing in nested {{Glossary("shadow tree", "shadow trees")}}, by exporting their `part` names.

The shadow tree is an isolated structure where identifiers, classes, and styles cannot be reached by selectors or queries belonging to a regular DOM.
To apply a style to an element living in a shadow tree, by CSS rule created outside of it, [`part`](/en-US/docs/Web/HTML/Global_attributes#part) global attribute has to be used. It has to be assigned to an element present in Shadow Tree, and its value should be some identifier.
Rules present outside of the shadow tree, must use the {{CSSxRef("::part")}} pseudo-element, containing the same identifier as the argument.

The global attribute [`part`](/en-US/docs/Web/HTML/Global_attributes#part) makes the element visible on just a single level of depth. When the shadow tree is nested, parts will be visible only to the parent of the shadow tree but not to its ancestor. Exporting parts further down is exactly what `exportparts` attribute is for.

Attribute `exportparts` must be placed on a _shadow Host_, which is the element to which the _shadow tree_ is attached. The value of the attribute should be a comma-separated list of part names present in the shadow tree and which should be made available via a DOM outside of the current structure.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- All [global attributes](/en-US/docs/Web/HTML/Global_attributes).

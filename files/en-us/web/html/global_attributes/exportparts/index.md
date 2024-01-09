---
title: exportparts
slug: Web/HTML/Global_attributes/exportparts
page-type: html-attribute
browser-compat: html.global_attributes.exportparts
---

{{HTMLSidebar("Global_attributes")}}

The **`exportparts`** [global attribute](/en-US/docs/Web/HTML/Global_attributes) allows you to select and style elements existing in nested {{Glossary("shadow tree", "shadow trees")}}, by exporting their `part` names.

The shadow tree is an isolated structure where identifiers, classes, and styles cannot be reached by selectors or queries belonging to a regular DOM. There are two HTML attributes that can be applied to shadow tree elements that enable targeting CSS styles from outside to shadow tree: [`part`](/en-US/docs/Web/HTML/Global_attributes#part) and `exportparts`.

The global attribute [`part`](/en-US/docs/Web/HTML/Global_attributes#part) makes a shadow tree element visible to its parent DOM. The `part` attribute is assigned to an element in the shadow tree with an identifier as its value. The {{CSSxRef("::part")}} pseudo-element containing that identifier can then be used to apply CSS styles to elements in the shadow tree from outside of the shadow tree.

Because the `::part()` is only visible to the parent DOM, when a shadow tree is nested, parts are not visible to ancestors other than the direct parent's. Enabling visibility into nested shadow trees is exactly what the `exportparts` attribute is for.

The `exportparts` attribute is placed on the element's _shadow host_, which is the element to which the _shadow tree_ is attached. The attribute's value should be a comma-separated list of each `part` name present in the shadow tree which should be made available via a DOM outside of the current structure.

```html
<template id="ancestor-component">
  <nested-component exportparts="part1, part2, part5"></nested-component>
</template>
```

Optionally, when exporting a `part`, you can provide the part with a different exported name. The value is actually a comma-separated list of part-mappings. The above is the equivalent of `exportparts="part1:part1, part2:part2, part5:part5"`. Each element can include a string for the inner part being forwarded and a string giving the name the part will be exposed as.

```html
<template id="ancestor-component">
  <nested-component
    exportparts="part1 : exposed1, part2 : exposed2"></nested-component>
</template>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`parts`](/en-US/docs/Web/HTML/Global_attributes/parts) HTML attribute
- {{HTMLElement("template")}} and {{HTMLElement("slot")}} HTML elements
- {{CSSXref("::part")}} and {{CSSXref("::slotted")}} CSS pseudo-elements
- [`ShadowRoot`]("/en-US/docs/Web/API/ShadowRoot) interface
- {{DOMxRef("Element.part")}} property
- [Using templates and slots](/en-US/docs/Web/API/Web_components/Using_templates_and_slots)
- [CSS scoping](/en-US/docs/Web/CSS/CSS_scoping) module

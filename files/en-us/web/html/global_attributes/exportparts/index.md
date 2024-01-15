---
title: exportparts
slug: Web/HTML/Global_attributes/exportparts
page-type: html-attribute
browser-compat: html.global_attributes.exportparts
---

{{HTMLSidebar("Global_attributes")}}

The **`exportparts`** [global attribute](/en-US/docs/Web/HTML/Global_attributes) allows you to select and style elements existing in nested {{Glossary("shadow tree", "shadow trees")}}, by exporting their `part` names.

The shadow tree is an isolated structure where identifiers, classes, and styles cannot be reached by selectors or queries belonging to a regular DOM. There are two HTML attributes that can be applied to shadow tree elements that enable targeting CSS styles from outside to shadow tree: `part` and `exportparts`.

The global [`part`](/en-US/docs/Web/HTML/Global_attributes#part) attribute makes a shadow tree element visible to its parent DOM. A `part` name is used as the parameter of the {{CSSxRef("::part", "::part()")}} pseudo-element. In this way, you can apply CSS styles to elements in the shadow tree from outside of it. However, the `::part()` pseudo-element is only visible to the parent DOM. This means that when a shadow tree is nested, the parts are not visible to any ancestors other than the direct parent. The `exportparts` attribute solves this limitation.

The `exportparts` attribute enables shadow tree parts to be visible outside the shadow DOM. This concept is referred to as "exporting". The `exportparts` attribute is placed on the element's _shadow host_, which is the element to which the _shadow tree_ is attached. The value of this attribute is a comma-separated list of `part` names present in the shadow tree. These names are made available to the DOMs outside the current structure.

```html
<template id="ancestor-component">
  <nested-component exportparts="part1, part2, part5"></nested-component>
</template>
```

When exporting a `part`, you have the option to assign a different name to the part, as shown in the snippet below. The value of the `exportparts` attribute is really a comma-separated list of part-name mappings. So the `exportparts` attribute in the above code snippet is the equivalent of `exportparts="part1:part1, part2:part2, part5:part5`, indicating that each `part` is exported with the same name. In each mapping, the first string specifies the name of the part within the shadow tree, and the second string specifies the name with which the part will be exposed externally.

```html
<template id="ancestor-component">
  <nested-component
    exportparts="part1:exposed1, part2:exposed2"></nested-component>
</template>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`part`](/en-US/docs/Web/HTML/Global_attributes/part) HTML attribute
- {{HTMLElement("template")}} and {{HTMLElement("slot")}} HTML elements
- {{CSSXref("::part")}} and {{CSSXref("::slotted")}} CSS pseudo-elements
- [`ShadowRoot`]("/en-US/docs/Web/API/ShadowRoot) interface
- {{DOMxRef("Element.part")}} property
- [Using templates and slots](/en-US/docs/Web/API/Web_components/Using_templates_and_slots)
- [CSS scoping](/en-US/docs/Web/CSS/CSS_scoping) module

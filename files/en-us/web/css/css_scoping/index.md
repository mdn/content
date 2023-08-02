---
title: CSS scoping
slug: Web/CSS/CSS_scoping
page-type: css-module
spec-urls: https://drafts.csswg.org/css-scoping/
---

{{CSSRef}}

The **CSS scoping** module defines the CSS scoping and encapsulation mechanisms, focusing on the [Shadow DOM](/en-US/docs/Web/API/Web_components/Using_shadow_DOM) [scoping](https://css.oddbird.net/scope/) mechanism.

CSS styles are scoped to their own DOM or {{Glossary("shadow tree")}}. Styles applied to an HTML document are considered global in scope as they apply to the entire document. While they apply to all the elements in the node tree, including any custom elements, they do not apply to the shadow trees of which each custom element is comprised. Selectors and their associated style definitions are scoped; they don't bleed between trees. Within the CSS of a shadow tree, selectors can't see elements outside the tree and selectors outside of a shadow tree don't apply within. But sometimes it's useful to be able to style a host from inside the shadow tree context. The CSS scoping module makes this possible. The pseudo-classes defined in the CSS scoping module enable styling a host from within the shadow tree it hosts.

Custom elements have their own shadow trees. Each shadow tree contains all the components that make up the custom element, but not the custom element, or "host", itself. Because the host is in a different tree than its components, the styles within the shadow tree don't apply styles to its host. The CSS scoping module defines three pseudo-classes to enable a shadow tree to style its own host and provides one pseudo-element to enable external CSS to style elements within the shadow DOM if the custom element is set up to accept external styles.

## Reference

### Selectors

- {{CSSXref(":host")}}
- {{CSSXref(":host_function", ":host()")}}
- {{CSSXref(":host-context", ":host-context()")}}
- {{CSSXref("::slotted")}}

## Guides

- [Web components](/en-US/docs/Web/API/Web_components)

  - : Web components concepts and usage, with an introduction to the different technologies used to create reusable custom elements whose functionality is encapsulated away from the rest of the code.

- [Using shadow DOM](/en-US/docs/Web/API/Web_components/Using_shadow_DOM)

  - : Shadow DOM fundamentals, including attaching a shadow DOM to an element, adding to the shadow DOM tree, and styling.

- [Using templates and slots](/en-US/docs/Web/API/Web_components/Using_templates_and_slots)

  - : Defining reusable HTML structure using {{htmlelement("template")}} and {{htmlelement("slot")}} elements, and using that structure inside web components.

- [Using custom elements](/en-US/docs/Web/API/Web_components/Using_custom_elements)

  - : Introduction to the Custom Elements API, the JavaScript API used to create custom elements that encapsulate functionality.

## Related concepts

- CSS {{cssxref("user-select")}} property
- CSS {{CSSXref(":defined")}} pseudo-class
- CSS {{CSSXref("::part")}} pseudo-element

- HTML {{HTMLElement("template")}} element
- HTML {{HTMLElement("slot")}} element
- HTML [`slot`](/en-US/docs/Web/HTML/Global_attributes/slot) attribute

- {{Glossary("Shadow tree")}} glossary term
- {{Glossary("DOM")}} glossary term
- [Compound selector](/en-US/docs/Web/CSS/CSS_selectors/Selector_structure#compound_selector) term
- [Selector list](/en-US/docs/Web/CSS/Selector_list) term

- [Web components](/en-US/docs/Web/API/Web_components) interfaces, properties, and methods
  - {{DOMxRef("CustomElementRegistry")}} interface
  - {{DOMxRef("Element")}} API
    - {{DOMxRef("Element.slot")}} property
    - {{DOMxRef("Element.assignedSlot")}} property
    - {{DOMxRef("Element.attachShadow()")}} method
  - {{DOMxRef("HTMLSlotElement")}} interface
  - {{DOMxRef("HTMLTemplateElement")}} interface
  - {{DOMxRef("ShadowRoot")}} interface

> **Note:** Despite the name, the {{CSSXref(":scope")}} pseudo-class, which represents elements that are a reference point, or scope, for selectors to match against, is defined in the [CSS pseudo-classes](/en-US/docs/Web/CSS/CSS_pseudo-classes) module. It is otherwise unrelated to the CSS scoping module, which is focused on scoping as it pertains to the Shadow DOM scoping mechanism.

## Specifications

{{Specifications}}

## See also

- [CSS selectors](/en-US/docs/Web/CSS/CSS_selectors) module
- [CSS pseudo elements](/en-US/docs/Web/CSS/CSS_pseudo-elements) module
- [CSS namespaces](/en-US/docs/Web/CSS/CSS_namespaces) module
- [CSS shadow-parts](/en-US/docs/Web/CSS/CSS_shadow_parts) module
- [Template, slot, and shadow](https://web.dev/learn/html/template/) on web.dev (2023)
- [Custom element best practices](https://web.dev/custom-elements-best-practices/) on web.dev (2019)

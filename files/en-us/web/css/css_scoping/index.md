---
title: CSS scoping
slug: Web/CSS/CSS_scoping
page-type: css-module
spec-urls: https://drafts.csswg.org/css-scoping/
---

{{CSSRef}}

The **CSS scoping** module defines the CSS scoping and encapsulation mechanisms, focusing on the [Shadow DOM](/en-US/docs/Web/API/Web_components/Using_shadow_DOM) [scoping](https://css.oddbird.net/scope/) mechanism.

CSS styles are either global in scope or scoped to a {{Glossary("shadow tree")}}. Globally scoped styles apply to all the elements in the node tree that match the selector, including custom elements in that tree, but not to the shadow trees composing each custom element. Selectors and their associated style definitions don't bleed between scopes.

Within the CSS of a shadow tree, selectors don't select elements outside the tree, either in the global scope or in other shadow trees. Each custom element has its own shadow tree, which contains all the components that make up the custom element (but not the custom element, or "host", itself).

Sometimes it's useful to be able to style a host from inside the shadow tree context. The CSS scoping module makes this possible by defining selectors that:

- Enable a shadow tree to style its host.
- Enable external CSS to style elements within a shadow DOM (but only if the associated custom element is set up to accept external styles).

## Reference

### Selectors

- {{CSSXref(":host")}}
- {{CSSXref(":host_function", ":host()")}}
- {{CSSXref(":host-context", ":host-context()")}}
- {{CSSXref("::slotted")}}

## Guides

- [Web components](/en-US/docs/Web/API/Web_components)

  - : An introduction to the different technologies used to create reusable web components — custom elements whose functionality is encapsulated away from the rest of your code.

- [Using shadow DOM](/en-US/docs/Web/API/Web_components/Using_shadow_DOM)

  - : Shadow DOM fundamentals, including attaching a shadow DOM to an element, adding to the shadow DOM tree, and styling.

- [Using templates and slots](/en-US/docs/Web/API/Web_components/Using_templates_and_slots)

  - : Defining reusable HTML structure using {{htmlelement("template")}} and {{htmlelement("slot")}} elements, and using that structure inside web components.

- [Using custom elements](/en-US/docs/Web/API/Web_components/Using_custom_elements)

  - : Introduction to the Custom Elements API, the JavaScript API used to create custom elements that encapsulate functionality.

## Related concepts

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

> **Note:** Despite the name, the {{CSSXref(":scope")}} pseudo-class, which represents elements that are a reference point (or scope) for selectors to match against, is defined in the [CSS pseudo-classes](/en-US/docs/Web/CSS/CSS_pseudo-classes) module. It is otherwise unrelated to the CSS scoping module, which is focused on scoping as it pertains to the Shadow DOM scoping mechanism.

## Specifications

{{Specifications}}

## See also

- [CSS selectors](/en-US/docs/Web/CSS/CSS_selectors) module
- [CSS pseudo elements](/en-US/docs/Web/CSS/CSS_pseudo-elements) module
- [CSS namespaces](/en-US/docs/Web/CSS/CSS_namespaces) module
- [CSS shadow-parts](/en-US/docs/Web/CSS/CSS_shadow_parts) module
- [Template, slot, and shadow](https://web.dev/learn/html/template/) on web.dev (2023)
- [Custom element best practices](https://web.dev/custom-elements-best-practices/) on web.dev (2019)

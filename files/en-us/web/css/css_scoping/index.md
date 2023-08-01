---
title: CSS scoping
slug: Web/CSS/CSS_scoping
page-type: css-module
spec-urls: https://drafts.csswg.org/css-scoping/
---

{{CSSRef}}

The **CSS scoping** module defines the CSS scoping and encapsulation mechanisms, focusing on the Shadow DOM scoping mechanism.

Custom elements have their own shadow tree. This means the custom element is the shadow host of the shadow tree it contains. The host is outside of the shadow tree it hosts. Normally, the host of a shadow tree is not targettable by selectors from within its tree. But sometimes it's useful to be able to style a host from inside the shadow tree context. The CSS scoping module makes this possible. The pseudo-classes defined in the CSS scoping module enable styling a host from within the shadow tree it hosts.

Within the CSS of a shadow tree, selectors can't see elements outside the tree; by default, CSS in the shadow tree can't be used to apply styles to its host.

CSS selectors outside of a shadow tree can't see within a shadow tree, and Sometimes, however, it's useful for the CSS within a shadow to select an ancestor that lies somewhere outside the shadow tree, above it in the document.

## Reference

### Selectors

- {{CSSXref(":host")}}
- {{CSSXref(":host_function", ":host()")}}
- {{CSSXref(":host-context", ":host-context()")}}
- {{CSSXref("::slotted")}}

### Definitions

- {{glossary("scope")}}
- {{Glossary("Shadow tree")}}
- {{Glossary("Flat tree")}}
- [Compound selector](/en-US/docs/Web/CSS/CSS_selectors/Selector_structure#compound_selector)
- [Selector list](/en-US/docs/Web/CSS/Selector_list)

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

- {{cssxref("user-select")}} property
- [CSS pseudo-classes](/en-US/docs/Web/CSS/Pseudo-classes)
  - {{CSSXref(":defined")}}
- [CSS pseudo-elements](/en-US/docs/Web/CSS/Pseudo-elements)

  - {{CSSXref("::part")}}

- HTML elements and attributes:

  - {{HTMLElement("template")}}
  - {{HTMLElement("slot")}}
  - [`slot`](/en-US/docs/Web/HTML/Global_attributes/slot) attribute

- [Web component](/en-US/docs/Web/API/Web_components) interfaces, properties, and methods

  - {{DOMxRef("CustomElementRegistry")}} interface
  - {{DOMxRef("HTMLSlotElement")}} interface
  - {{DOMxRef("HTMLTemplateElement")}} interface
  - {{DOMxRef("ShadowRoot")}} interface
    - {{domxref("ShadowRoot.delegatesFocus")}} property
    - {{domxref("ShadowRoot.adoptedStyleSheets")}}
    - {{domxref("ShadowRoot.pictureInPictureElement")}} property
  - {{DOMxRef("Element")}} API
    - {{DOMxRef("Element.slot")}} property
    - {{DOMxRef("Element.assigedSlot")}} property
    - {{DOMxRef("Element.attachShadow()")}} method

- {{DOMxRef("CSSStyleSheet")}}
- {{DOMxRef("CSSPseudoElement")}} interface
  - {{DOMxRef("CSSPseudoElement.element")}} property
  - {{DOMxRef("CSSPseudoElement.type")}} property

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

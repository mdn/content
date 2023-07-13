---
title: CSS shadow parts module
slug: Web/CSS/CSS_shadow_parts
page-type: css-module
spec-urls: https://drafts.csswg.org/css-shadow-parts/
---

{{CSSRef}}

The **CSS shadow parts** module defines the {{CSSXref("::part", "::part()")}} pseudo-element on shadow hosts, allowing shadow hosts to expose selected shadow tree elements to the outside page for styling purposes.

By default, elements in a shadow tree are only styleable from within that shadow root. The CSS shadow parts module enables including a [`part`](/en-US/docs/Web/HTML/Global_attributes#part) attribute on {{HTMLElement("template")}} descendants, exposing the shadow tree node to external styling via the `::part()` pseudo-element.

## Reference

### Selectors

- {{CSSXref("::part", "::part()")}}

### HTML Attributes

- [`part`](/en-US/docs/Web/HTML/Global_attributes#part)
- [`exportparts`](/en-US/docs/Web/HTML/Global_attributes#exportparts)

### Definitions

- {{glossary("Shadow tree")}}

## Guides

- [CSS pseudo-elements](/en-US/docs/Web/CSS/Pseudo-elements)

  - : Alphabetical list of pseudo-elements defined by all the CSS specifications and WebVTT

- [Web components](/en-US/docs/Web/API/Web_components)

  - : Overview of the different APIs that make enable creating reusable custom elements, or web components.

## Related concepts

- HTML {{HTMLElement("template")}} element
- HTML {{HTMLElement("slot")}} element
- {{domxref("Element.part")}} property
- {{domxref("Element.shadowRoot")}} property
- {{domxref("Element.attachShadow()")}} method
- {{domxref("ShadowRoot")}} interface
- CSS scoping module
  - {{CSSXref(":host")}}
  - {{CSSXref(":host_function", ":host()")}}
  - {{CSSXref(":host-context", ":host-context()")}}
  - {{CSSXref("::slotted")}}

## Specifications

{{Specifications}}

## See also

- [CSS pseudo elements](/en-US/docs/Web/CSS/CSS_pseudo) module
- [CSS selectors](/en-US/docs/Web/CSS/CSS_selectors) module
- [Using shadow DOM](/en-US/docs/Web/API/Web_components/Using_shadow_DOM)
- [Templates: styling outside of the current scope](https://web.dev/learn/html/template/#styling-outside-of-the-current-scope) on web.dev (2023)

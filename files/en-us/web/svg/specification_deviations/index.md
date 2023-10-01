---
title: Specification deviations
slug: Web/SVG/Specification_Deviations
page-type: guide
---

{{SVGRef}}

There are a few places where we have consciously decided to make [Gecko](/en-US/Gecko) deviate from or extend the SVG specification. This page lists those deviations/extensions and our reasoning for them.

### The 'class' and 'style' attributes

Unlike HTML and MathML, the SVG specification does not specify the 'style' and 'class' attributes on all SVG elements. Nevertheless, to allow Mozilla to more cleanly share internal 'class' and 'style' related code, we will implement these attributes on all SVG elements as of Firefox 3. In general this change will not be visible to SVG authors (the elements for which the SVG specification does not define the 'class' and 'style' attribute are elements that are not displayed directly). However, there are two exceptions.

Extending the 'class' attribute to apply to all SVG elements will allow SVG authors to use the [Selectors API](https://www.w3.org/TR/selectors-api/) to select _any_ SVG element based on class. This seems like a good thing. Requiring SVG authors to know which elements can and cannot take a 'class' attribute would just put an extra burden on them.

Extending the 'style' attribute to apply to all SVG elements should only really be visible to SVG authors if they call [ViewCSS.getComputedStyle](https://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSview-getComputedStyle) on the element or one of its descendants. Since these elements and their descendants are not displayed, it seems unlikely that anyone will either specify 'style' or call getComputedStyle on them. Note that this extension does not mean that we add a css::CSSStyleDeclaration 'style' property to the DOM of elements that do not implement the SVGStylable interface.

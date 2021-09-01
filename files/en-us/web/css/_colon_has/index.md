---
title: ':has()'
slug: Web/CSS/:has
tags:
  - ':has'
  - CSS
  - Experimental
  - Pseudo-class
  - Reference
  - Selector
  - Selectors
browser-compat: css.selectors.has
---
{{CSSRef}}

The **`:has()`** CSS [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes) represents an element if any of the selectors passed as parameters (relative to the {{cssxref(":scope")}} of the given element) match at least one element.

```css
/* Selects any <a>, as long as it has an <img> element directly inside it  */
/* Note that this is not supported in any browser yet */
let test = document.querySelector('a:has(> img)');
```

## Syntax

{{CSSSyntax}}

## Description

The `:has()` pseudo-class takes a relative selector list as an argument. In earlier revisions of the CSS Selectors Level 4 specification, `:has` had a limitation that it couldn't be used within stylesheets. Instead, it could only be used with functions like {{domxref("document.querySelector()")}}; this was due to performance concerns. _This limitation has been removed_ because no browser implemented it that way. Instead, browsers currently only support the use of `:has()` within stylesheets.

## Examples

### Matching \<a> elements that directly contain an \<img>

The following selector matches only {{HTMLElement("a")}} elements that directly contain an {{HTMLElement("img")}} child:

    a:has(> img)

### Matching \<h1> elements that are followed by a \<p>

The following selector matches {{HTMLElement("h1")}} elements only if they have a {{htmlelement("p")}} element directly following them:

    h1:has(+ p)

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Locating DOM elements using selectors](/en-US/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors)
- [`:scope`](/en-US/docs/Web/CSS/:scope)

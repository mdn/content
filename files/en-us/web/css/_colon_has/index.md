---
title: ':has()'
slug: Web/CSS/:has
tags:
  - ':has'
  - CSS
  - Pseudo-class
  - Reference
  - Selector
  - Selectors
browser-compat: css.selectors.has
---
{{CSSRef}}

The **`:has()`** CSS [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes) represents an element if any of the selectors passed as parameters (relative to the {{cssxref(":scope")}} of the given element) match at least one element.

## Syntax

```
:has( <forgiving-relative-selector-list> )
```

## Description

The `:has()` pseudo-class takes a relative selector list as an argument.

## Examples

### Matching \<a> elements that directly contain an \<img>

The following selector matches only {{HTMLElement("a")}} elements that directly contain an {{HTMLElement("img")}} child:

```css
a:has(> img)
```

### Matching \<h1> elements that are followed by a \<p>

The following selector matches {{HTMLElement("h1")}} elements only if they have a {{htmlelement("p")}} element directly following them:

```css
h1:has(+ p)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Locating DOM elements using selectors](/en-US/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors)
- [`:scope`](/en-US/docs/Web/CSS/:scope)

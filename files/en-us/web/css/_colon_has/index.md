---
title: ':has()'
slug: Web/CSS/:has
page-type: css-pseudo-class
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

The functional **`:has()`** CSS [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes) represents an element if any of the [relative selectors](/en-US/docs/Web/CSS/CSS_Selectors#relative_selector) that are passed as an argument match at least one element when anchored against this element. It takes a [forgiving relative selector list](/en-US/docs/Web/CSS/Selector_list#forgiving_relative_selector_list) as an argument.

```css
/* Selects any h1 heading with a
paragraph element immediately after it */
h1:has(+ p) { margin-bottom: 0; }
```

## Syntax

```
:has( <forgiving-relative-selector-list> )
```

> **Note:** The `:has()` pseudo-class cannot be nested within another `:has()`. Also, pseudo-elements are not valid selectors within `:has()` because many of them exist conditionally based on the styling of their ancestors.

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

- [CSS selectors](/en-US/docs/Web/CSS/CSS_Selectors)
- [Selector list](/en-US/docs/Web/CSS/Selector_list)
- [Locating DOM elements using selectors](/en-US/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors)

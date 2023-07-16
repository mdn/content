---
title: Pseudo-elements
slug: Web/CSS/Pseudo-elements
page-type: landing-page
spec-urls:
  - https://drafts.csswg.org/css-pseudo/
  - https://drafts.csswg.org/css-position-4/
  - https://drafts.csswg.org/css-shadow-parts/
  - https://w3c.github.io/webvtt/
---

{{CSSRef}}

A CSS **pseudo-element** is a keyword added to a selector that lets you style a specific part of the selected element(s).

## Syntax

```css
selector::pseudo-element {
  property: value;
}
```

For example, {{CSSxRef("::first-line")}} can be used to change the font of the first line of a paragraph.

```css
/* The first line of every <p> element. */
p::first-line {
  color: blue;
  text-transform: uppercase;
}
```

Double colons (`::`) are used for pseudo-elements. This distinguishes pseudo-elements from [pseudo-classes](/en-US/docs/Web/CSS/Pseudo-classes) that use single colon (`:`) in their notation.

You can use only one pseudo-element in a selector. The pseudo-element must appear after all the other components in the [complex](/en-US/docs/Web/CSS/CSS_selectors/Selector_structure#complex_selector) or [compound](/en-US/docs/Web/CSS/CSS_selectors/Selector_structure#compound_selector) selector in which it appears. For example, you can select a paragraph's first line using `p::first-line` but not the first-line's children or a hovered first line. So both `p::first-line > *` and `p::first-line:hover` are invalid.

While it is not possible to select an element based on its _state_ by using pseudo-elements, a pseudo-element can be used to select and style a part of an element that already has a state applied to it. For example, `p:hover::first-line` selects the first line (pseudo-element) of a paragraph when the paragraph itself is being hovered (pseudo-class).

> **Note:** When a [selector list](/en-US/docs/Web/CSS/CSS_selectors/Selector_structure#selector_list) contains an invalid selector, the entire style block is ignored.

## List of pseudo-elements

Pseudo-elements defined by a set of CSS specifications include the following:

A

- {{CSSxRef("::after")}}

B

- {{CSSxRef("::backdrop")}}
- {{CSSxRef("::before")}}

C

- {{CSSxRef("::cue")}}
- {{CSSxRef("::cue-region")}}

F

- {{CSSxRef("::first-letter")}}
- {{CSSxRef("::first-line")}}
- {{CSSxRef("::file-selector-button")}}

G

- {{CSSxRef("::grammar-error")}} {{Experimental_Inline}}

M

- {{CSSxRef("::marker")}}

P

- {{CSSxRef("::part", "::part()")}}
- {{CSSxRef("::placeholder")}}

S

- {{CSSxRef("::selection")}}
- {{CSSxRef("::slotted", "::slotted()")}}
- {{CSSxRef("::spelling-error")}} {{Experimental_Inline}}

T

- {{CSSxRef("::target-text")}} {{Experimental_Inline}}

> **Note:** Browsers support the single colon syntax only for the original four pseudo-elements: `::before`, `::after`, `::first-line`, and `::first-letter`.

## Specifications

{{Specifications}}

## See also

- [CSS pseudo-element](/en-US/docs/Web/CSS/CSS_pseudo) module
- [Pseudo-classes](/en-US/docs/Web/CSS/Pseudo-classes)
- [CSS selectors](/en-US/docs/Web/CSS/CSS_selectors) module
- [CSS building blocks: Pseudo-classes and pseudo-elements](/en-US/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements)
